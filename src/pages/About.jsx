import React from 'react';
import FadeIn from '../components/ui/FadeIn';
import ContactSection from '../components/sections/ContactSection';

const About = () => {
  return (
    <div className="pt-32">
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">About <br/>Rafael Barbosa</h1>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  With over 14 years of experience navigating the complexities of the New York real estate market, Rafael Barbosa has established himself as a trusted advisor and fierce advocate for his clients.
                </p>
                <p>
                  Specializing in Upper Manhattan, The Bronx, and Lower Westchester, his approach is built on a foundation of data-driven pricing, aggressive modern marketing, and unrelenting negotiation. 
                </p>
                <p>
                  Rafael doesn't just list homes; he crafts comprehensive strategies designed to maximize equity and ensure a seamless transaction from contract to closing table.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="h-[60vh] bg-gray-100 relative overflow-hidden">
               <img 
                src="https://media-manager-c.questera.ai/greta-media/172cce278505b230cda0d5f525875f63867f62d5279efa706d36efae4ebb2d8e6137b7923eb5cde22e2ba6646835b5af/images/aW1hZ2UvanBlZw==/feac21767037ea766f698e5b7ce8f3f0.jpeg" 
                alt="Rafael Barbosa - Professional Portrait" 
                className="w-full h-full object-cover object-top"
              />
            </FadeIn>
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default About;