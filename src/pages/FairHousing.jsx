import React from 'react';
import FadeIn from '../components/ui/FadeIn';

const FairHousing = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 block mb-4">Legal Notice</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase">Fair Housing Notice</h1>
            <p className="text-gray-400 font-medium mb-12">Commitment to Equality</p>
            
            <div className="space-y-12 text-gray-600 leading-relaxed text-lg">
              <div className="bg-black text-white p-8 md:p-12 mb-12">
                <p className="text-xl md:text-2xl font-light tracking-tight leading-relaxed">
                  Rafael Barbosa fully supports and complies with:
                </p>
                <ul className="mt-8 space-y-4 text-sm md:text-base font-bold uppercase tracking-widest opacity-80">
                  <li>The Federal Fair Housing Act</li>
                  <li>The New York State Human Rights Law</li>
                  <li>The New York City Human Rights Law, where applicable</li>
                  <li>All other applicable federal, state, and local fair housing regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase mb-6 tracking-tight">We do not discriminate based on:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                  {[
                    "Race", "Color", "Religion", "Sex", "Sexual orientation", 
                    "Gender identity or expression", "Disability", "Familial status", 
                    "National origin", "Lawful source of income", "Immigration status", 
                    "Military status", "Age", "Marital status", "Partnership status"
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3 border-b border-gray-100 py-3">
                      <span className="w-1.5 h-1.5 bg-black"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                  <div className="flex items-center space-x-3 border-b border-gray-100 py-3">
                    <span className="w-1.5 h-1.5 bg-black"></span>
                    <span className="italic">Or any other characteristic protected by law</span>
                  </div>
                </div>
              </div>

              <p className="font-bold text-black text-xl">
                All real estate services are provided in an equal and non-discriminatory manner.
              </p>

              <div>
                <h2 className="text-xl font-bold text-black uppercase mb-4 tracking-tight">Accessibility and Equal Opportunity</h2>
                <p>
                  Our commitment to fair housing includes providing accessible digital communication methods. Individuals requiring assistance may refer to our Accessibility Statement or contact us directly.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default FairHousing;