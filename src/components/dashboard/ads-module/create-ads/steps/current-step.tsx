import BusinessInfoStep from './business-info-step';
import AdObjectiveStep from './ad-objective-step';
import AudienceStep from './audience-step';
import OfferStep from './offer-step';
import AdVoiceStep from './ad-voice-step';
import BudgetDurationStep from './budget-duration-step';
import AdCreativeStep from './ad-creative-step';
import PreviewStep from './preview-step';
import AudiencePersonaStep from './audience-persona-step';

const stepsArray = [
  BusinessInfoStep,
  OfferStep,
  AdObjectiveStep,
  AudienceStep,
  AudiencePersonaStep,
  AdVoiceStep,
  BudgetDurationStep,
  AdCreativeStep,
  PreviewStep,
];

export const CurrentStep = ({ steps }: { steps: number }) => {
  const CurrentStep = stepsArray[steps - 1]; // pick component dynamically

  return <CurrentStep />;
};
