import './app.css';
import ResetPassword from './pages/auth/reset-password';
import SignIn from './pages/auth/sign-in';
import SignUp from './pages/auth/sign-up';
import LandingPage from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricingPlans from './pages/pricing-plans';
import PaymentFrom from './pages/payment';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import GoogleCallback from './pages/auth/google-callback';
import Contact from './pages/contact';

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
          <Route path="/google-auth/callback" element={<GoogleCallback />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
      <Toaster position="bottom-right" reverseOrder={false} />
    </QueryClientProvider>
  );
}
