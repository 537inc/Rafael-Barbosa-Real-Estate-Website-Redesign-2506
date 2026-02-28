import React from 'react';
import FadeIn from '../components/ui/FadeIn';

const Accessibility = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase">Accessibility Statement</h1>
            <p className="text-gray-400 font-medium mb-12">Effective Date: February 27, 2026</p>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-10 leading-relaxed">
              <p className="text-xl">
                Rafael Barbosa, operating under the DBA <strong>RafaelBarbosa.com</strong>, is committed to providing a website that is accessible to all individuals, including those with disabilities. We strive to provide an inclusive and user-friendly experience for every visitor.
              </p>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">Our Commitment</h2>
                <p>
                  We are actively working to improve the accessibility and usability of <a href="https://rafaelbarbosa.com/" className="text-black underline underline-offset-4">https://rafaelbarbosa.com/</a> in accordance with applicable accessibility standards and guidelines, including the principles of the Americans with Disabilities Act (ADA).
                </p>
                <p className="mt-4">
                  Our goal is to make our website reasonably accessible to users with visual, hearing, mobility, and cognitive disabilities.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">Accessibility Efforts</h2>
                <p>We aim to:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li>Provide clear and consistent navigation</li>
                  <li>Use readable fonts and sufficient color contrast</li>
                  <li>Structure content for screen reader compatibility</li>
                  <li>Provide alternative text for meaningful images where possible</li>
                  <li>Enable keyboard navigation where feasible</li>
                  <li>Regularly review website functionality</li>
                </ul>
                <p className="mt-4 italic">
                  Accessibility is an ongoing process, and we continue to evaluate and improve the user experience.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">Third Party Content</h2>
                <p>
                  Some third party tools or links on this website, such as home valuation platforms, CRM integrations, or external service providers, may not be fully controlled by RafaelBarbosa.com.
                </p>
                <p className="mt-4">
                  While we encourage vendors to provide accessible content, we cannot guarantee the accessibility of third party websites or embedded services.
                </p>
              </div>

              <div className="bg-[#FAFAFA] p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">Need Assistance?</h2>
                <p>
                  If you experience difficulty accessing any part of this website or require assistance with any content, please contact us directly so we can provide the information or service you need through an alternative method.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="font-bold text-black">Rafael Barbosa</p>
                  <p>DBA RafaelBarbosa.com</p>
                  <p>Phone: <a href="tel:3476796817" className="hover:text-black">(347) 679-6817</a></p>
                  <p>Email: <a href="mailto:rb@rafaelbarbosa.com" className="hover:text-black">rb@rafaelbarbosa.com</a></p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">When contacting us, please include:</p>
                  <ul className="text-sm space-y-1">
                    <li>• The webpage address (URL)</li>
                    <li>• A description of the issue</li>
                    <li>• Your preferred method of contact</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">Ongoing Improvements</h2>
                <p>
                  We view accessibility as an ongoing responsibility and will continue to review and improve our website as technology and standards evolve.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;