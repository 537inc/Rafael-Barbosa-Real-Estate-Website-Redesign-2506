import React from 'react';
import FadeIn from '../components/ui/FadeIn';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 block mb-4">Legal Notice</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase">Privacy Policy</h1>
            <p className="text-gray-400 font-medium mb-12">Effective Date: March 1, 2026</p>

            <div className="space-y-12 text-gray-600 leading-relaxed text-lg">
              <div>
                <h2 className="text-xl font-bold text-black uppercase mb-4 tracking-tight">6. Your Rights</h2>
                <p className="mb-4">
                  You may request access to or correction of your personal information, subject to applicable law.
                </p>
                <p className="font-bold text-black uppercase text-sm tracking-widest">Contact:</p>
                <p>
                  <a href="mailto:rb@serhant.com" className="hover:text-black underline underline-offset-4">rb@serhant.com</a><br />
                  <a href="tel:347-679-6817" className="hover:text-black underline underline-offset-4">(347) 679-6817</a>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;