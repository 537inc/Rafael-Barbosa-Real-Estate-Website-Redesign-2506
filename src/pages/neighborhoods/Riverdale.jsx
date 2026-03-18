import React, { useEffect } from 'react';
import FadeIn from '../../components/ui/FadeIn';
import Valuation from '../../components/sections/Valuation';
import Button from '../../components/ui/Button';

const Riverdale = () => {
  useEffect(() => {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', 'https://rafaelbarbosa.com/riverdale');
    
    return () => {
      link.setAttribute('href', 'https://rafaelbarbosa.com/');
    };
  }, []);

  return (
    <div className="pt-32">
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80&fm=webp" alt="Riverdale Real Estate" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <FadeIn>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/70 block mb-4">Neighborhood Authority</span>
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8"> Riverdale,<br />The Bronx </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light mb-12"> A leafy sanctuary overlooking the Hudson, offering the perfect blend of suburban tranquility and urban accessibility. </p>
              <Button to="/contact">Discuss Riverdale Opportunities</Button>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase"> What Makes Riverdale a Premier Investment? </h2>
              <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
                <p>Riverdale remains one of the most coveted enclaves in New York City. Known for its rolling hills, historic estates, and prestigious schools, it offers a lifestyle that is rare within the five boroughs.</p>
                <p>Whether you are seeking a mid-century cooperative or a modern luxury condominium, the market here requires a strategic, data-driven approach to navigate successfully.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-[#FAFAFA] p-12 border border-gray-100 shadow-sm">
                <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-8">Market Snapshot 2026</h3>
                <div className="space-y-8">
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Avg. Sale Price</span>
                    <span className="text-gray-500">$845,000+</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Days on Market</span>
                    <span className="text-gray-500">42 Days</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Inventory Levels</span>
                    <span className="text-gray-500">Decreasing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Market Sentiment</span>
                    <span className="text-gray-900 font-black">STABLE / GROWING</span>
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

export default Riverdale;