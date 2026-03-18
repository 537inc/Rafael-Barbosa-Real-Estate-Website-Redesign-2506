import React, { useEffect } from 'react';
import FadeIn from '../../components/ui/FadeIn';
import Valuation from '../../components/sections/Valuation';
import Button from '../../components/ui/Button';

const Bronxville = () => {
  useEffect(() => {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', 'https://rafaelbarbosa.com/bronxville');
    
    return () => {
      link.setAttribute('href', 'https://rafaelbarbosa.com/');
    };
  }, []);

  return (
    <div className="pt-32">
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img src="https://images.unsplash.com/photo-1449156001935-d28bc3dfae2b?auto=format&fit=crop&w=2000&q=80&fm=webp" alt="Bronxville Village" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <FadeIn>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/70 block mb-4">Luxury Portfolio</span>
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8"> Bronxville,<br />Village </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light mb-12"> The Exclusive Village. Experience elite turnover speeds and unparalleled prestige in one of Westchester's most storied enclaves. </p>
              <Button to="/contact">Consult on Bronxville Sales</Button>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase"> Is Bronxville a good investment in 2026? </h2>
              <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
                <p>Bronxville continues to define exclusive suburban living. The market is characterized by extreme efficiency, with a rapid 23-day average turnover that underscores the village's persistent desirability.</p>
                <p>The $3M+ luxury segment has shown remarkable stability, offering a safe haven for capital and a lifestyle of unmatched prestige just minutes from Manhattan.</p>
              </div>
              <div className="mt-12 space-y-8">
                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-xl font-bold uppercase mb-4">Is Bronxville a good investment in 2026?</h3>
                  <p className="text-gray-500 italic">"Yes, Bronxville is the gold standard for stability. With properties moving in just 23 days and the $3M+ segment remaining ironclad, it is a low-risk, high-prestige environment."</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-[#FAFAFA] p-12 border border-gray-100 shadow-sm">
                <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-8">Premium Analytics 2026</h3>
                <div className="space-y-8">
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Avg. Days on Market</span>
                    <span className="text-gray-900 font-black">23 Days</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Luxury Stability</span>
                    <span className="text-gray-500">$3M+ Segment</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Market Character</span>
                    <span className="text-gray-500">Exclusive Village</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Liquidity Rating</span>
                    <span className="text-gray-900 font-black">EXCEPTIONAL</span>
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

export default Bronxville;