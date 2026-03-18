import React from 'react';
import FadeIn from '../ui/FadeIn';
import HomebotWidget from '../ui/HomebotWidget';

const Valuation = () => {
  return (
    <section className="py-24 md:py-40 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <FadeIn className="text-center w-full">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
              How Much is Your Home Actually Worth?
            </h2>
            <p className="text-xl text-gray-500 mb-16 max-w-2xl mx-auto">
              Skip the estimates. Get an expert valuation and real-time equity insights via Homebot.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="w-full">
            <div className="bg-white border border-gray-100 p-4 md:p-12 shadow-2xl rounded-sm flex justify-center items-center">
              <HomebotWidget className="w-full max-w-3xl mx-auto" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Valuation;