import React from 'react';
import InsightsSection from '../components/sections/InsightsSection';
import Valuation from '../components/sections/Valuation';
import FadeIn from '../components/ui/FadeIn';

const MarketInsights = () => {
  return (
    <div className="pt-32">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Market Intelligence.</h1>
            <p className="text-xl text-gray-500"> Stay ahead of the curve with our curated insights. </p>
          </FadeIn>
        </div>
      </section>
      <InsightsSection />
      <Valuation />
    </div>
  );
};

export default MarketInsights;