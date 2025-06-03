import React, { useState } from "react";
import WebsiteInfo from "../../../components/modules/onboarding/website-info";
import StepDot from "../../../components/modules/onboarding/step-dot";
import GoalsAndMetrics from "../../../components/modules/onboarding/goals-and-metrics";
import CompititorData from "../../../components/modules/onboarding/compititor-data";
import ReviewInfo from "../../../components/modules/onboarding/review-info";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { handleApiError } from "../../../utils/handleApiError";
import { OnboardUser } from "../../../apis/onboarding";
import onBoardingPayload from "../../../payloads/onboarding-payload";

interface FormDataType {
  websiteUrl: string;
  description: string;
  logo: File[];
  goals: string[];
  metrics: string[];
}

interface WebsiteLink {
  url: string;
  name: string
}

const Onboarding: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [filledSteps, setFilledSteps] = useState<number[]>([1]);
  const [websiteLinks, setWebsiteLinks] = useState<WebsiteLink[]>([{ url: "", name: '' }]);
  const [validation, setValidation] = useState(false);

  const userId = JSON.parse(localStorage.getItem('userInfo')).id;
  console.log(userId);

  const [formData, setFormData] = useState<FormDataType>({
    websiteUrl: "",
    description: "",
    logo: [],
    goals: [],
    metrics: [],
  });

  const onChangeHandler = (name: string, value: string) => {
    const newFd = { ...formData };
    newFd[name] = value as never; // Type-safe overwrite
    setFormData(newFd);
  };

  console.log('===formdata', formData);

  const onBoardingMutation = useMutation({
    mutationFn: OnboardUser,
    onSuccess: () => {
      toast.success('Please verify your Email to Continue');
      // Maybe redirect or show toast
    },
    onError: error => {
      handleApiError(error);
      // Show toast error maybe
    },
  });

  const onSubmit = (data: object) => {
    onBoardingMutation.mutate(onBoardingPayload({ ...data, competitorWebsite: websiteLinks, userId }));
  }

  const onChangeWebsiteLink = (name: string = "", e: string | null = null) => {
    const index = parseInt(name);
    const fd = [...websiteLinks];

    const checkforDuplicate =
      fd.length > 0 && fd.some((item, i) => item.url === e && i !== index);

    if (socialLinksWarnings(e, checkforDuplicate)) {
      fd[index].url = e || "";
      setWebsiteLinks(fd);
    }
  };

  const socialLinksWarnings = (
    value: string | null,
    isDuplicate: boolean
  ): boolean => {
    if (isDuplicate) {
      console.warn("Duplicate Link");
      return false;
    } else if (!value || value.trim() === "") {
      console.warn("Wrong Url");
      return false;
    } else {
      return true;
    }
  };

  const AddItemInURLArray = (): void => {
    const add = [...websiteLinks];
    add.push({ url: "", name: "compitator link" });
    setWebsiteLinks(add);
  };

  const removeWebsiteURL = (index: number) => {
    const remove = [...websiteLinks];
    remove.splice(index, 1);
    setWebsiteLinks(remove);
  }

  const ChangeStep = (step: number): void => {
    if (step === 2) {
      if (formData.websiteUrl === '') { setValidation(true); } else {
        setFilledSteps((prev) => (prev.includes(step) ? prev : [...prev, step]));
        setActiveStep(step);
      }
    }
    else {
      setFilledSteps((prev) => (prev.includes(step) ? prev : [...prev, step]));
      setActiveStep(step);

    }
  };

  const steps = [
    undefined,
    <WebsiteInfo
      ChangeStep={ChangeStep}
      formData={formData}
      onChangeHandler={onChangeHandler}
      validation={validation}
    />,
    <GoalsAndMetrics
      ChangeStep={ChangeStep}
      formData={formData}
      setFormData={setFormData}
      onChangeHandler={onChangeHandler}
    />,
    <CompititorData
      ChangeStep={ChangeStep}
      onChangeHandler={onChangeHandler}
      addNewLink={AddItemInURLArray}
      websiteURLs={websiteLinks}
      limit={5}
      onChangeWebsiteLink={onChangeWebsiteLink}
      removeLink={removeWebsiteURL}
    />,
    <ReviewInfo ChangeStep={ChangeStep} formData={formData} onSubmit={onSubmit} />,
  ];

  const stepsLabels = [
    { id: 0, label: "URL & Description" },
    { id: 1, label: "Goals & Metrics" },
    { id: 2, label: "Competitor Data" },
    { id: 3, label: "Review Info" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="flex items-center justify-center relative w-full max-w-[60%] mx-auto mb-6">
        {stepsLabels.map((step, index) => (
          <div key={index} className="flex items-center">
            <StepDot
              label={step.label}
              isActive={index + 1 === activeStep}
              isDone={filledSteps.includes(index + 1)}
            />
            {index < steps.length - 2 && (
              <div className="flex-1 w-40 h-0.5 bg-gray-200"></div>
            )}
          </div>
        ))}
      </div>
      {steps[activeStep]}
    </div>
  );
};

export default Onboarding;
