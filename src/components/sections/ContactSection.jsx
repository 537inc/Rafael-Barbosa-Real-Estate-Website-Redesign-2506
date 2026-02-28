import React from 'react';
import FadeIn from '../ui/FadeIn';
import LeadForm from '../ui/LeadForm';

const ContactSection = () => {
  return (
    <section className="py-24 md:py-40 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <FadeIn>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Let's Connect.</h2>
              <p className="text-xl text-gray-500 mb-12">Strategic guidance for Manhattan, The Bronx, and Westchester.</p>
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Direct Line</p>
                  <a href="tel:347-679-6817" className="text-3xl font-medium tracking-tight">347-679-6817</a>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Email</p>
                  <a href="mailto:rb@serhant.com" className="text-3xl font-medium tracking-tight">rb@serhant.com</a>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="relative">
            <FadeIn delay={0.2}>
              <div className="bg-[#FAFAFA] p-8 md:p-12 border border-gray-100">
                <h3 className="text-xl font-bold mb-8">Inquiry Form</h3>
                <LeadForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;