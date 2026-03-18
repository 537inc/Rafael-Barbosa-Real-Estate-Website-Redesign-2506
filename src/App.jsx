import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import SuccessStories from './pages/SuccessStories';
import MarketInsights from './pages/MarketInsights';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SOP from './pages/SOP';
import Accessibility from './pages/Accessibility';
import FairHousing from './pages/FairHousing';

// Neighborhood Landing Pages
import Riverdale from './pages/neighborhoods/Riverdale';
import TheBronx from './pages/neighborhoods/TheBronx';
import Westchester from './pages/neighborhoods/Westchester';
import UpperManhattan from './pages/neighborhoods/UpperManhattan';
import Yonkers from './pages/neighborhoods/Yonkers';
import Bronxville from './pages/neighborhoods/Bronxville';

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
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/market-insights" element={<MarketInsights />} />
          <Route path="/market-insights/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Neighborhood Routes */}
          <Route path="/riverdale" element={<Riverdale />} />
          <Route path="/upper-manhattan" element={<UpperManhattan />} />
          <Route path="/the-bronx" element={<TheBronx />} />
          <Route path="/yonkers" element={<Yonkers />} />
          <Route path="/bronxville" element={<Bronxville />} />
          <Route path="/westchester" element={<Westchester />} />
          
          {/* Legal Routes */}
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