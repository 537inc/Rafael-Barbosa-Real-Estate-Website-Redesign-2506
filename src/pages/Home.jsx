import React from 'react';
import Hero from '../components/sections/Hero';
import Trust from '../components/sections/Trust';
import SellerValue from '../components/sections/SellerValue';
import MarketAuthority from '../components/sections/MarketAuthority';
import Valuation from '../components/sections/Valuation';
import SuccessStoriesSection from '../components/sections/SuccessStoriesSection';
import InsightsSection from '../components/sections/InsightsSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <Trust />
      <SellerValue />
      <MarketAuthority />
      <Valuation />
      <SuccessStoriesSection />
      <InsightsSection />
      <ContactSection />
    </>
  );
};

export default Home;