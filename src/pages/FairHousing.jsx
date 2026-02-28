import React from 'react';
import FadeIn from '../components/ui/FadeIn';

const FairHousing = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase">Fair Housing Notice</h1>
            <p className="text-gray-400 font-medium mb-12">Effective Date: February 27, 2026</p>
            <p> We strictly comply with all federal, state, and local Fair Housing laws. </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default FairHousing;