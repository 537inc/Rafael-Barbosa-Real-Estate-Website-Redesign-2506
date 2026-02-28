import React from 'react';
import FadeIn from '../ui/FadeIn';
import Button from '../ui/Button';

const SellerValue = () => {
  const values = [
    {
      title: "Strategic Pricing",
      desc: "Data-backed valuation models to position your home aggressively without leaving money on the table."
    },
    {
      title: "Modern Exposure",
      desc: "Targeted digital advertising, high-end visual media, and proprietary network distribution."
    },
    {
      title: "Strong Negotiation",
      desc: "Fierce advocacy to secure the best terms, highest price, and most qualified buyers."
    },
    {
      title: "Clear Process",
      desc: "Streamlined management from listing preparation to the closing table, ensuring peace of mind."
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter max-w-xl">
              Why Sellers Work With Rafael.
            </h2>
            <Button to="/contact">Book Strategy Call</Button>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {values.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="border-t-2 border-black pt-8">
                <h3 className="text-xl font-bold tracking-tight mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellerValue;