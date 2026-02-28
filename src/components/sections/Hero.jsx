import React from 'react';
import FadeIn from '../ui/FadeIn';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 z-10">
            <FadeIn>
              <span className="block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-6 md:mb-8">
                Upper Manhattan | The Bronx | Lower Westchester
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                Rafael<br />Barbosa
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-2xl md:text-4xl font-light tracking-tight text-gray-900 leading-tight mb-8">
                <span className="block mb-2">Strategic Home Sales.</span>
                <span className="block mb-2">Modern Marketing.</span>
                <span className="block mb-2">Strong Negotiation.</span>
                <span className="block font-medium">Results That Matter.</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-gray-500 max-w-lg mb-12 leading-relaxed">
                A data-driven approach to selling real estate in New York's most competitive markets.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4">
              <Button to="/sell">Get Your Home Value</Button>
              <Button to="/contact" variant="outline">Schedule a Consultation</Button>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] w-full">
            <FadeIn delay={0.3} direction="left" className="w-full h-full relative">
              <div className="absolute inset-0 bg-gray-100 mix-blend-multiply z-10 transition-opacity duration-500 hover:opacity-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury real estate interior" 
                className="w-full h-full object-cover object-center"
              />
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;