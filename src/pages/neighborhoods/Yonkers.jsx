import React, { useEffect } from 'react';
import FadeIn from '../../components/ui/FadeIn';
import Valuation from '../../components/sections/Valuation';
import Button from '../../components/ui/Button';

const Yonkers = () => {
  useEffect(() => {
    // Dynamic SEO Update
    document.title = "Yonkers Real Estate | Colonial Heights & Tuckahoe Specialist | Rafael Barbosa";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore Yonkers real estate with Rafael Barbosa. From luxury waterfront condos to the historic charm of Colonial Heights and the commuter-friendly streets near Tuckahoe.");
    }
    
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', 'https://rafaelbarbosa.com/yonkers');
    
    return () => {
      link.setAttribute('href', 'https://rafaelbarbosa.com/');
    };
  }, []);

  return (
    <div className="pt-32">
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=2000&q=80&fm=webp" alt="Yonkers Luxury Waterfront" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <FadeIn>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/70 block mb-4">Expanding Markets</span>
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8"> Yonkers,<br />New York </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light mb-12"> Luxury Waterfront Living meets Historic Enclaves. Discover the prime alternative to the five boroughs with a 15.8% price surge. </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact">Schedule a Consultation</Button>
                <Button to="/sell" variant="outline" className="border-white text-white hover:bg-white hover:text-black">Get Home Value</Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 uppercase"> The Yonkers Advantage in 2026 </h2>
              <div className="space-y-16">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-black"> Colonial Heights: A Premier Residential Enclave </h3>
                  <p className="text-lg text-gray-500 leading-relaxed"> Colonial Heights stands as one of Yonkers' most sought-after residential areas. Known for its lush, quiet streets and stunning historic architecture, this enclave offers unmatched property value retention. It provides a sophisticated suburban feel that is increasingly rare, making it a primary target for high-net-worth families. </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-black"> Tuckahoe (Yonkers P.O.): The Elite Commuter Connection </h3>
                  <p className="text-lg text-gray-500 leading-relaxed"> The areas of Yonkers bordering Tuckahoe offer a unique "best of both worlds" scenario. With a Yonkers P.O. but immediate access to the Tuckahoe Metro-North station, residents enjoy a seamless 30-minute commute to Grand Central. This pocket is defined by its suburban charm and incredible convenience for the modern Manhattan professional. </p>
                </div>
                <div className="border-t border-gray-100 pt-12">
                  <h4 className="text-xl font-bold uppercase mb-4">Is Yonkers a good investment in 2026?</h4>
                  <p className="text-gray-500 italic leading-relaxed"> "With a 15.8% price surge and a median entry point of $510K, Yonkers offers the best ROI potential in the region. Whether it's the high-end turnover in Colonial Heights or the commuter demand near Tuckahoe, the data points to sustained growth." </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="sticky top-40">
              <div className="bg-[#FAFAFA] p-12 border border-gray-100 shadow-sm">
                <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-8">Market Snapshot 2026</h3>
                <div className="space-y-8">
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Median Price</span>
                    <span className="text-gray-900 font-black">$510K</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Price Surge</span>
                    <span className="text-gray-900 font-black">+15.8%</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Commute to NYC</span>
                    <span className="text-gray-500">30 Minutes</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="font-bold">Colonial Heights Demand</span>
                    <span className="text-gray-900 font-black">CRITICAL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Market Sentiment</span>
                    <span className="text-gray-900 font-black">HIGH GROWTH</span>
                  </div>
                </div>
                <div className="mt-12">
                  <Button to="/contact" className="w-full">Book a Strategy Call</Button>
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

export default Yonkers;