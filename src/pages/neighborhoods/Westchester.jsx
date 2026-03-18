import React, { useEffect } from 'react';
import FadeIn from '../../components/ui/FadeIn';
import Valuation from '../../components/sections/Valuation';
import Button from '../../components/ui/Button';

const Westchester = () => {
  useEffect(() => {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', 'https://rafaelbarbosa.com/westchester');
    
    return () => {
      link.setAttribute('href', 'https://rafaelbarbosa.com/');
    };
  }, []);

  return (
    <div className="pt-32">
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80&fm=webp" alt="Lower Westchester Real Estate" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <FadeIn>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/70 block mb-4">Regional Authority</span>
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8"> Lower<br />Westchester </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light mb-12"> Sophisticated suburban living with world-class amenities and seamless New York City connections. </p>
              <Button to="/contact">Consult on Westchester Sales</Button>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase"> Why Move to Lower Westchester in 2026? </h2>
              <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
                <p>Lower Westchester offers a unique value proposition for those seeking more space without sacrificing proximity to Manhattan. From the vibrant city feel of New Rochelle to the classic suburban charm of Pelham.</p>
                <p>We provide strategic guidance for both sellers looking to capitalize on high demand and buyers navigating one of the most competitive markets in the Tri-State area.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-[#FAFAFA] p-12 border border-gray-100 shadow-sm">
                <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-8">Market Snapshot 2026</h3>
                <div className="space-y-8">
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Avg. Single Family</span>
                    <span className="text-gray-500">$925,000+</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Days on Market</span>
                    <span className="text-gray-500">28 Days</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Commute to GCT</span>
                    <span className="text-gray-500">25 - 40 Mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Market Sentiment</span>
                    <span className="text-gray-900 font-black">INTENSE DEMAND</span>
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

export default Westchester;