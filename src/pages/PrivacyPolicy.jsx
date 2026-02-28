import React from 'react';
import FadeIn from '../components/ui/FadeIn';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Privacy Policy</h1>
            <p className="text-gray-400 font-medium mb-12">Effective Date: February 27, 2026</p>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-8 leading-relaxed">
              <p> Rafael Barbosa DBA RafaelBarbosa.com respects your privacy and is committed to protecting your personal information. </p>
              <h2 className="text-xl font-bold text-black uppercase">1. Information We Collect</h2>
              <p> We collect information you provide directly (name, email, phone) and automatically collected data (IP address, browser type). </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;