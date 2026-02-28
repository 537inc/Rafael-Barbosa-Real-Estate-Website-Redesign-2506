import React from 'react';
import FadeIn from '../components/ui/FadeIn';

const SOP = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase">Standard Operating Procedure</h1>
            <p className="text-gray-400 font-medium mb-12">New York State Real Estate Disclosure</p>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-12 leading-relaxed">
              <p className="text-xl">
                Please be advised that Rafael Barbosa, Real Estate Advisor affiliated with SERHANT., operating as RafaelBarbosa.com, sets forth the following Standard Operating Procedures for the prerequisites prospective homebuyers must meet prior to receiving services.
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-black pl-8 py-2">
                  <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-3">1. Identification</h2>
                  <p>
                    Prospective homebuyers <strong>are not required</strong> to provide identification to work with Rafael Barbosa or The Barbosa Team. However, please be aware that individual property owners, building managements, or co-op boards may require identification prior to a showing or entry to a property.
                  </p>
                </div>

                <div className="border-l-4 border-black pl-8 py-2">
                  <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-3">2. Exclusive Broker Agreement</h2>
                  <p>
                    An exclusive buyer representation agreement <strong>is not required</strong> to work with Rafael Barbosa or The Barbosa Team, although it may be recommended in certain strategic scenarios to better protect the client's interests.
                  </p>
                </div>

                <div className="border-l-4 border-black pl-8 py-2">
                  <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-3">3. Pre-Approval / Proof of Funds</h2>
                  <p>
                    A mortgage pre-approval or proof of funds <strong>is not required</strong> to begin working with us or to view properties. However, a pre-approval or proof of funds <strong>is required</strong> prior to the submission of any formal offer to purchase a property.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAFAFA] p-8 border border-gray-100 mt-12">
                <p className="text-sm font-medium italic">
                  This disclosure is made in accordance with New York State Real Property Law § 442-H. A copy of these Standard Operating Procedures is available to the public at our office locations and upon request.
                </p>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">Contact Information</h2>
                <p className="font-medium">Rafael Barbosa</p>
                <p>DBA RafaelBarbosa.com</p>
                <p>Phone: (347) 679-6817</p>
                <p>Email: rb@rafaelbarbosa.com</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default SOP;