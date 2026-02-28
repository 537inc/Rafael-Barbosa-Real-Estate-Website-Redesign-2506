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
              <p>
                Rafael Barbosa, operating under the DBA <strong>RafaelBarbosa.com</strong>, respects your privacy and is committed to protecting your personal information.
              </p>
              
              <p>
                This Privacy Policy explains how information is collected, used, and protected when you visit or interact with <a href="https://rafaelbarbosa.com/" className="text-black underline underline-offset-4">https://rafaelbarbosa.com/</a>. By using this website, you agree to the practices described below.
              </p>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">1. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">A. Information You Provide Directly</h3>
                    <p>When you submit a form, request a home valuation, schedule a consultation, subscribe to updates, or contact us, we may collect:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Property address</li>
                      <li>Buying or selling preferences</li>
                      <li>Any information you voluntarily provide</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">B. Automatically Collected Information</h3>
                    <p>When you visit our website, we may automatically collect:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>IP address</li>
                      <li>Browser type</li>
                      <li>Device information</li>
                      <li>Pages visited</li>
                      <li>Time spent on pages</li>
                      <li>Referral source</li>
                    </ul>
                    <p className="mt-2 text-sm italic">This information is collected through cookies, analytics tools, and tracking technologies.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">2. How We Use Your Information</h2>
                <p>Your information may be used to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Respond to inquiries</li>
                  <li>Provide home valuations or market reports</li>
                  <li>Schedule appointments</li>
                  <li>Send email updates or newsletters</li>
                  <li>Send SMS communications if consent is provided</li>
                  <li>Improve website functionality</li>
                  <li>Analyze website traffic</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="mt-4 font-medium text-black">We do not sell your personal information.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">3. SMS and Communication Consent</h2>
                <p>If you provide your phone number through this website, you may receive appointment confirmations, market updates, and marketing messages. Message frequency may vary. Message and data rates may apply.</p>
                <p className="mt-2">
                  You may opt out of SMS communications at any time by replying <strong>STOP</strong>. You may opt out of email communications by using the unsubscribe link included in emails.
                </p>
                <p className="mt-2 font-medium">Consent to receive communications is not required to purchase services.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">4. Cookies and Tracking Technologies</h2>
                <p>
                  This website uses cookies to enhance user experience, analyze traffic, retarget advertisements, and measure marketing performance. You may disable cookies through your browser settings, though this may impact certain website functionality.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">5. Third Party Services</h2>
                <p>
                  We may use third party platforms including CRM systems, email marketing platforms, SMS messaging platforms, analytics services, advertising networks, and home valuation software. These third parties may collect information in accordance with their own privacy policies.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">6. Data Sharing</h2>
                <p>
                  We may share information with service providers assisting in website operations, marketing platforms used to communicate with you, or when required by law. <strong>We do not sell, rent, or trade personal information.</strong>
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">7. Data Security</h2>
                <p>
                  We implement reasonable administrative and technical safeguards to protect your personal information. However, no method of transmission over the internet is completely secure.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">8. Data Retention</h2>
                <p>
                  We retain personal information only as long as necessary to provide requested services, comply with legal obligations, resolve disputes, or enforce agreements.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">9. Your Rights</h2>
                <p>
                  Depending on your location, you may have the right to request access to your personal information, request correction of inaccurate information, or request deletion of your information. To exercise these rights, contact us using the information below.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">10. Children’s Privacy</h2>
                <p>
                  This website is not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">11. Fair Housing Commitment</h2>
                <p>
                  Rafael Barbosa DBA RafaelBarbosa.com is committed to complying with all applicable Fair Housing Laws. All information collected and services provided are handled in a nondiscriminatory manner.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">12. Updates to This Policy</h2>
                <p>
                  We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated Effective Date.
                </p>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h2 className="text-xl font-bold text-black uppercase tracking-tight mb-4">13. Contact Information</h2>
                <p className="font-medium">Rafael Barbosa</p>
                <p>DBA RafaelBarbosa.com</p>
                <p>Phone: (347) 679-6817</p>
                <p>Email: rb@rafaelbarbosa.com</p>
                <p>Website: https://rafaelbarbosa.com/</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;