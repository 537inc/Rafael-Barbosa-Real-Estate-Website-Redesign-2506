import React from 'react';
import FadeIn from '../ui/FadeIn';
import Button from '../ui/Button';

const MarketAuthority = () => {
  const markets = [
    { name: "Upper Manhattan", desc: "Historic brownstones, luxury co-ops, and modern condos." },
    { name: "The Bronx", desc: "From Riverdale estates to investment properties." },
    { name: "Lower Westchester", desc: "Competitive suburban landscape and commuter convenience." }
  ];

  return (
    <section className="py-24 md:py-40 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Market Expertise That Moves Homes.</h2>
            <p className="text-xl text-gray-500">Deep localized knowledge across our core territories.</p>
          </FadeIn>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {markets.map((market, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="bg-white p-12 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold tracking-tight mb-4">{market.name}</h3>
              <p className="text-gray-500 leading-relaxed">{market.desc}</p>
            </FadeIn>
          ))}
        </div>
        <div className="text-center">
          <FadeIn delay={0.3}>
            <Button to="/market-insights" variant="outline">View Market Insights</Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default MarketAuthority;