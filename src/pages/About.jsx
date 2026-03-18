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
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 block mb-6 font-['DM_Sans']">The Authority</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase">About <br/>Rafael Barbosa</h1>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  With over 14 years of experience, Rafael Barbosa is a trusted advocate specializing in Upper Manhattan, The Bronx, and Lower Westchester. 
                </p>
                <p>
                  His approach is data-driven, aggressive, and unrelenting. By leveraging premium marketing technology and a deep understanding of market psychology, he ensures his clients maintain a competitive advantage in every transaction.
                </p>
                <p>
                  Now part of <span className="font-bold text-black uppercase tracking-widest text-sm">SERHANT.</span>, Rafael combines local mastery with a global platform to redefine the real estate experience.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5] bg-gray-100 overflow-hidden shadow-2xl">
                <img 
                  src="https://media-manager-c.questera.ai/greta-media/172cce278505b230cda0d5f525875f63867f62d5279efa706d36efae4ebb2d8e6137b7923eb5cde22e2ba6646835b5af/images/aW1hZ2UvanBlZw==/feac21767037ea766f698e5b7ce8f3f0.jpeg" 
                  alt="Rafael Barbosa" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default About;