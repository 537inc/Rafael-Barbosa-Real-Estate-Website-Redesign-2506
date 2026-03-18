import React, { useEffect } from 'react';
import FadeIn from '../../components/ui/FadeIn';
import Valuation from '../../components/sections/Valuation';
import Button from '../../components/ui/Button';

const TheBronx = () => {
  useEffect(() => {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', 'https://rafaelbarbosa.com/the-bronx');
    
    return () => {
      link.setAttribute('href', 'https://rafaelbarbosa.com/');
    };
  }, []);

  return (
    <div className="pt-32">
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src="https://images.unsplash.com/photo-1576431711200-090c88f12609?auto=format&fit=crop&w=2000&q=80&fm=webp" alt="The Bronx Real Estate" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <FadeIn>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/70 block mb-4">Market Authority</span>
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8"> The Bronx,<br />New York </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light mb-12"> Why is The Bronx the Best Real Estate Investment in 2026? Unprecedented growth meets historic value. </p>
              <Button to="/contact">Explore Bronx Inventory</Button>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase"> Is Now the Time to Buy in The Bronx? </h2>
              <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
                <p>The Bronx is undergoing a historic transformation. With new infrastructure developments and a surge in luxury residential projects, the borough is no longer New York's best-kept secret.</p>
                <p>From the waterfront developments in Mott Haven to the steady appreciation of multi-family homes in Pelham Bay, the opportunities are diverse and high-yielding.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-[#FAFAFA] p-12 border border-gray-100 shadow-sm">
                <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-8">Market Snapshot 2026</h3>
                <div className="space-y-8">
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Avg. Condo Price</span>
                    <span className="text-gray-500">$575,000+</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Multi-Family Yield</span>
                    <span className="text-gray-500">5.8% - 7.2%</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Development Pipeline</span>
                    <span className="text-gray-500">Very High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Market Sentiment</span>
                    <span className="text-gray-900 font-black">HIGH GROWTH</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <Valuation />
    </div>
  );
};

export default TheBronx;