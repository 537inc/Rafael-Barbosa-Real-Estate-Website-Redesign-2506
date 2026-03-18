import React from 'react';
import FadeIn from '../components/ui/FadeIn';

const TermsOfService = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 block mb-4">Legal Notice</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase">Terms of Service</h1>
            <p className="text-gray-400 font-medium mb-12">Effective Date: March 1, 2026</p>
            
            <div className="space-y-12 text-gray-600 leading-relaxed text-lg">
              <p className="font-medium text-black">
                By accessing or using RafaelBarbosa.com, you agree to these Terms of Service.
              </p>

              <div>
                <h2 className="text-xl font-bold text-black uppercase mb-4 tracking-tight">1. Informational Purpose</h2>
                <p>
                  All website content is provided for general informational purposes only and does not constitute legal, tax, financial, or mortgage advice.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase mb-4 tracking-tight">2. No Brokerage Relationship Created</h2>
                <p>
                  Use of this website, submission of forms, or receipt of information does not create a brokerage relationship. A written agreement is required to establish representation under New York law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase mb-4 tracking-tight">3. Accuracy of Information</h2>
                <p>
                  Real estate markets change frequently. While reasonable efforts are made to maintain accuracy, no guarantee is made regarding completeness, reliability, or timeliness.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase mb-4 tracking-tight">4. Intellectual Property</h2>
                <p>
                  All content, branding, and design elements are the property of Rafael Barbosa unless otherwise noted. Unauthorized reproduction is prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase mb-4 tracking-tight">5. Third Party Platforms</h2>
                <p>
                  This website may contain links or embedded content from third party providers. We are not responsible for their content, policies, or accessibility practices.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase mb-4 tracking-tight">6. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, Rafael Barbosa shall not be liable for damages arising from use of this website or reliance on its content.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase mb-4 tracking-tight">7. Governing Law</h2>
                <p>
                  These Terms shall be governed by the laws of the State of New York.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase mb-4 tracking-tight">8. Compliance Integration</h2>
                <p>
                  Brokerage services referenced on this website are conducted in accordance with applicable federal, New York State, and local laws.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;