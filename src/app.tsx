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
import CreateWorkSpace from './pages/dashboard/create-workspace';
import OnBoarding from './pages/dashboard/onboarding';

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
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/create-workspace" element={<CreateWorkSpace />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
      <Toaster position="bottom-right" reverseOrder={false} />
    </QueryClientProvider>
  );
}
