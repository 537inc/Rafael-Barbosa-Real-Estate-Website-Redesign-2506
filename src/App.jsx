import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Sell from './pages/Sell';
import SuccessStories from './pages/SuccessStories';
import MarketInsights from './pages/MarketInsights';
import Contact from './pages/Contact';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SOP from './pages/SOP';
import Accessibility from './pages/Accessibility';
import FairHousing from './pages/FairHousing';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/market-insights" element={<MarketInsights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/sop" element={<SOP />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/fair-housing" element={<FairHousing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;