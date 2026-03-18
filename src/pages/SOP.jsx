import React from 'react';
import FadeIn from '../components/ui/FadeIn';

const SOP = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 block mb-4">Legal Notice</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 uppercase">New York Real Estate Standard Operating Procedure</h1>
            <p className="text-gray-400 font-medium mb-12">Effective Date: March 1, 2026</p>
            
            <div className="space-y-12 text-gray-600 leading-relaxed text-lg">
              <p className="font-bold text-black">
                Pursuant to New York Real Property Law Section 442-H, the following Standard Operating Procedures apply to all prospective clients.
              </p>

              <div className="grid gap-12">
                <div className="border-l-4 border-black pl-8">
                  <h2 className="text-xl font-bold text-black uppercase mb-4 tracking-tight">1. Identification</h2>
                  <p>
                    Prospective buyers are not required to show identification to work with us, except as required by sellers or building management for property access.
                  </p>
                </div>

                <div className="border-l-4 border-black pl-8">
                  <h2 className="text-xl font-bold text-black uppercase mb-4 tracking-tight">2. Financial Ability</h2>
                  <p>
                    Prospective buyers are not required to provide proof of funds to view a property. Sellers may require proof of financial ability prior to accepting an offer.
                  </p>
                </div>

                <div className="border-l-4 border-black pl-8">
                  <h2 className="text-xl font-bold text-black uppercase mb-4 tracking-tight">3. Exclusive Representation</h2>
                  <p>
                    Prospective buyers are not required to sign an exclusive buyer representation agreement to view a property. A written agreement may be required prior to submitting an offer or formalizing representation.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100 italic text-sm">
                These procedures apply equally to all individuals without regard to protected characteristics under federal, state, or local law.
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase mb-4 tracking-tight">Equal Access Commitment</h2>
                <p>
                  These procedures are implemented in conjunction with our Fair Housing Notice and Accessibility Statement. We are committed to equal housing opportunity and equal access to digital information.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default SOP;