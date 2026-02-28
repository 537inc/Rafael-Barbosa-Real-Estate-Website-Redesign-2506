import React from 'react';
import FadeIn from '../ui/FadeIn';
import Button from '../ui/Button';

const Trust = () => {
  const points = [
    "Seller-focused representation",
    "14+ years market experience",
    "Pricing precision modeling",
    "Digital marketing campaigns",
    "Professional photography & video",
    "Contract-to-closing guidance",
    "Clear, transparent communication"
  ];

  return (
    <section className="py-24 md:py-40 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16 text-balance">
              A Strategic Approach to Selling in Today's Market.
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <FadeIn delay={0.1}>
              <p className="text-xl text-gray-500 leading-relaxed">
                Selling a property requires more than just listing it on the MLS. It demands a tailored strategy, deep market knowledge, and an unwavering commitment to protecting your equity. 
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <ul className="space-y-4">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-lg font-medium text-gray-900 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <span className="mr-4 text-xs font-bold tracking-widest text-gray-300 mt-1">{(idx + 1).toString().padStart(2, '0')}</span>
                    {point}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <Button to="/about" variant="outline">Learn More About Rafael</Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Trust;