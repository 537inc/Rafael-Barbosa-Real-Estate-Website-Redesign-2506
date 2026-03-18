import React from 'react';
import FadeIn from '../components/ui/FadeIn';

const Accessibility = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 block mb-4">Legal Notice</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase">Accessibility Statement</h1>
            <p className="text-gray-400 font-medium mb-12">Effective Date: March 1, 2026</p>
            
            <div className="space-y-12 text-gray-600 leading-relaxed text-lg">
              <p>
                RafaelBarbosa.com is committed to ensuring digital accessibility for all users, including individuals with disabilities.
              </p>
              
              <div className="bg-gray-50 p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-black uppercase mb-6 tracking-tight">Assistance</h2>
                <p className="mb-6">
                  If you experience difficulty accessing any part of this website, please contact:
                </p>
                <div className="space-y-2 text-black font-medium">
                  <p><a href="mailto:rb@serhant.com" className="hover:text-gray-400 decoration-1 underline-offset-4 underline transition-all">rb@serhant.com</a></p>
                  <p><a href="tel:347-679-6817" className="hover:text-gray-400 decoration-1 underline-offset-4 underline transition-all">(347) 679-6817</a></p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;