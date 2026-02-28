import React from 'react';
import ContactSection from '../components/sections/ContactSection';
import FadeIn from '../components/ui/FadeIn';

const Contact = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Start the Conversation.</h1>
          </FadeIn>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Contact;