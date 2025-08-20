import './app.css';
import ForgetPassword from './pages/auth/forget-password';
import SignIn from './pages/auth/sign-in';
import SignUp from './pages/auth/sign-up';
import LandingPage from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricingPlans from './pages/pricing-plans';
import PaymentFrom from './pages/payment';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import Contact from './pages/contact';
import AboutUs from './pages/about-us';
import EmailVerification from './pages/auth/verify-email';
import Onboarding from './pages/dashboard/onboarding';
import OnBoardingInfo from './pages/dashboard/onboarding-info';
import DashboardLayout from './components/dashboard/dashboard-layout';
import SpeedAnalysis from './pages/dashboard/speed-analysis';
import SeoAnalysis from './pages/dashboard/seo-analysis';
import ContentRelevence from './pages/dashboard/content-relevence';
import WebsiteLayout from './components/dashboard/website-module/website-layout';
import MobileUsability from './pages/dashboard/mobile-usability';
import UserInterfaceReport from './pages/dashboard/ui-ux-report';
import CompetitorSpeedAnalysis from './pages/dashboard/competitor-analysis/speed-analysis';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/pricing" element={<PricingPlans />} />
          <Route path="/payment" element={<PaymentFrom />} />
          <Route path="/onboarding-info" element={<OnBoardingInfo />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/auth/verify/:token" element={<EmailVerification />} />
          {/* Dashboard Routes */}
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="website-audit" element={<WebsiteLayout basePath="/dashboard/website-audit" />}>
              <Route index element={<SeoAnalysis />} />
              <Route path="speed-analysis" element={<SpeedAnalysis />} />
              <Route path="content-quality" element={<ContentRelevence />} />
              <Route path="mobile-useability" element={<MobileUsability />} />
              <Route path="uiux" element={<UserInterfaceReport />} />
            </Route>

            <Route path="competitor-analysis" element={<WebsiteLayout basePath="/dashboard/competitor-analysis" />}>
              <Route index element={<SeoAnalysis />} />
              <Route path="speed-analysis" element={<CompetitorSpeedAnalysis />} />
            </Route>

          </Route>

        </Routes>
      </Router>
      <Toaster position="bottom-right" reverseOrder={false} />
    </QueryClientProvider>
  );
}
