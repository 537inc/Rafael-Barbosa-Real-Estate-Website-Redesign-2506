import React from 'react';
import SuccessStoriesSection from '../components/sections/SuccessStoriesSection';
import ContactSection from '../components/sections/ContactSection';
import FadeIn from '../components/ui/FadeIn';

const SuccessStories = () => {
  return (
    <div className="pt-32">
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Proven Results.</h1>
            <p className="text-xl text-gray-500"> Read what our clients have to say about their experience. </p>
          </FadeIn>
        </div>
      </section>
      <SuccessStoriesSection />
      <ContactSection />
    </div>
  );
};

export default SuccessStories;