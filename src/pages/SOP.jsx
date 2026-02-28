import React from 'react';
import FadeIn from '../components/ui/FadeIn';

const SOP = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase">Standard Operating Procedure</h1>
            <p className="text-gray-400 font-medium mb-12">New York State Real Estate Disclosure</p>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-12 leading-relaxed">
              <p> Identification is not required to work with us, but may be required by property owners. </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default SOP;