import React from 'react';
import FadeIn from '../ui/FadeIn';
import Button from '../ui/Button';
import ReviewWidget from '../ui/ReviewWidget';

const SuccessStoriesSection = () => {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-20 text-center uppercase">
            Client Success Stories.
          </h2>
        </FadeIn>

        <div className="mb-20">
          <FadeIn delay={0.1}>
            <div className="w-full border border-gray-100 p-4 md:p-8 rounded-sm shadow-sm bg-[#FAFAFA]">
              <ReviewWidget />
            </div>
          </FadeIn>
        </div>

        <div className="text-center">
          <FadeIn delay={0.2}>
            <Button to="/contact">Schedule Your Consultation</Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;