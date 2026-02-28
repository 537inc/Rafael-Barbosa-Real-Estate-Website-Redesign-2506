import React from 'react';
import FadeIn from '../components/ui/FadeIn';

const TermsOfService = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Terms of Service</h1>
            <p className="text-gray-400 font-medium mb-12">Effective Date: February 27, 2026</p>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-8 leading-relaxed">
              <p> By accessing or using rafaelbarbosa.com, you agree to these terms. </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;