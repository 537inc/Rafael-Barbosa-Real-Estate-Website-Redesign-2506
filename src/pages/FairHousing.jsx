import React from 'react';
import FadeIn from '../components/ui/FadeIn';

const FairHousing = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase">Fair Housing Notice</h1>
            <p className="text-gray-400 font-medium mb-12">Effective Date: February 27, 2026</p>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-12 leading-relaxed">
              <p className="text-xl">
                Rafael Barbosa, operating under the DBA <strong>RafaelBarbosa.com</strong>, is fully committed to the principles of equal housing opportunity. We strictly comply with all applicable federal, state, and local Fair Housing laws and provide real estate services in a nondiscriminatory manner.
              </p>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">Equal Housing Opportunity</h2>
                <p>In accordance with the Fair Housing Act, it is illegal to discriminate in the sale, rental, financing, or marketing of housing based on:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {['Race', 'Color', 'Religion', 'Sex', 'Disability', 'Familial status', 'National origin'].map((item) => (
                    <div key={item} className="border border-gray-100 p-4 text-center text-sm font-bold uppercase tracking-wider bg-[#FAFAFA]">
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-6">We support and uphold these protections in every aspect of our business.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">Additional Protections Under New York Law</h2>
                <p>Under the New York State Human Rights Law, additional protected classes include, but are not limited to:</p>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 mt-4 list-none pl-0">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    Sexual orientation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    Gender identity or expression
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    Marital status
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    Military status
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    Age
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    Lawful source of income
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    Citizenship or immigration status
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    Domestic violence victim status
                  </li>
                </ul>
                <p className="mt-6">
                  In addition, the New York City Human Rights Law provides some of the broadest housing protections in the country. We comply with all federal, state, and local regulations governing fair housing practices.
                </p>
              </div>

              <div className="bg-[#FAFAFA] p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">Our Commitment</h2>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="font-bold text-black">01</span>
                    <p>Providing equal professional service to all clients and customers</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-black">02</span>
                    <p>Offering properties without regard to protected characteristics</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-black">03</span>
                    <p>Presenting all offers objectively and without bias</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-black">04</span>
                    <p>Marketing properties in a lawful and inclusive manner</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-black">05</span>
                    <p>Avoiding language or practices that may be discriminatory</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-black">06</span>
                    <p>Ensuring consistent standards in all business operations</p>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">Advertising and Marketing Practices</h2>
                <p>All advertising and marketing materials are prepared in compliance with fair housing laws. We do not indicate preference, limitation, or discrimination; use language that suggests exclusivity based on protected classes; or direct/steer clients toward or away from neighborhoods.</p>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">Reporting Concerns</h2>
                <p>If you believe you have experienced discrimination in housing, you may contact:</p>
                <ul className="mt-4 space-y-2">
                  <li>• The U.S. Department of Housing and Urban Development</li>
                  <li>• The New York State Division of Human Rights</li>
                  <li>• The New York City Commission on Human Rights</li>
                </ul>
                <p className="mt-6">
                  We also encourage you to contact us directly so we may address any concerns promptly at <strong>rb@rafaelbarbosa.com</strong>.
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