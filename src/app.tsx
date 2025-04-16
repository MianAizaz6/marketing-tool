import './app.css';
import SignIn from './pages/auth/sign-in';
import SignUp from './pages/auth/sign-up';
import LandingPage from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricingPlans from './pages/pricing-plans';


export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPlans />} />
      </Routes>
    </Router>
  );
}
