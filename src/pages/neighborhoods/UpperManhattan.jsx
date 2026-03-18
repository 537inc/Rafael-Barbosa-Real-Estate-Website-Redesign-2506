import React, { useEffect } from 'react';
import FadeIn from '../../components/ui/FadeIn';
import Valuation from '../../components/sections/Valuation';
import Button from '../../components/ui/Button';

const UpperManhattan = () => {
  useEffect(() => {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', 'https://rafaelbarbosa.com/upper-manhattan');
    
    return () => {
      link.setAttribute('href', 'https://rafaelbarbosa.com/');
    };
  }, []);

  return (
    <div className="pt-32">
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img src="https://images.unsplash.com/photo-1534430480872-3498386e7a56?auto=format&fit=crop&w=2000&q=80&fm=webp" alt="Upper Manhattan Skyline" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <FadeIn>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/70 block mb-4">Core NYC Authority</span>
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8"> Upper<br />Manhattan </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light mb-12"> The Rebound of Classic Architecture. Experience long-term investment security in Upper Manhattan's most historic corridors. </p>
              <Button to="/contact">Discuss Manhattan Assets</Button>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase"> Why is Upper Manhattan a good investment in 2026? </h2>
              <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
                <p>Upper Manhattan is witnessing a significant renaissance. With a 12.2% growth rate in Midtown and steady demand in the Upper West Side, culture-seeking families and savvy investors are prioritizing the area's unmatched architectural heritage.</p>
                <p>From the brownstones of Harlem to the pre-war elegance of the Upper West Side, the market provides a resilient hedge against volatility, backed by some of the most iconic real estate in the world.</p>
              </div>
              <div className="mt-12 space-y-8">
                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-xl font-bold uppercase mb-4">Is Upper Manhattan a good investment in 2026?</h3>
                  <p className="text-gray-500 italic">"Absolutely. The combination of the 12.2% Midtown growth rebound and the persistent appeal of classic architecture ensures that Upper Manhattan remains a cornerstone of any strategic NYC portfolio."</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-[#FAFAFA] p-12 border border-gray-100 shadow-sm">
                <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-8">Market Analytics 2026</h3>
                <div className="space-y-8">
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Midtown Growth</span>
                    <span className="text-gray-900 font-black">+12.2%</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">UWS Demand</span>
                    <span className="text-gray-500">EXCEPTIONAL</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Primary Buyer Profile</span>
                    <span className="text-gray-500">Families / Investors</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Asset Security</span>
                    <span className="text-gray-900 font-black">HIGH</span>
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

export default UpperManhattan;