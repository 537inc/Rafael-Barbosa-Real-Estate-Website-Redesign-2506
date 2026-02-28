import React from 'react';
import FadeIn from '../ui/FadeIn';
import HomebotWidget from '../ui/HomebotWidget';

const Valuation = () => {
  return (
    <section className="py-24 md:py-40 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-center">
              Discover Your Home's True Value.
            </h2>
            <p className="text-xl text-gray-500 text-center mb-16 max-w-2xl mx-auto">
              Get an instant, data-driven valuation and monthly wealth-building insights via our strategic Homebot integration.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white border border-gray-100 p-4 md:p-8 shadow-sm rounded-sm">
              <HomebotWidget />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-center mt-12 text-sm font-bold tracking-widest uppercase text-gray-400">
              Direct Consultation: <a href="tel:347-679-6817" className="text-black ml-1">347-679-6817</a>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Valuation;