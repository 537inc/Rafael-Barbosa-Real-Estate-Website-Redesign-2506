import React from 'react';
import FadeIn from '../components/ui/FadeIn';
import Button from '../components/ui/Button';
import HomebotBuyerWidget from '../components/ui/HomebotBuyerWidget';

const Buy = () => {
  const buyerValues = [
    { title: "Strategic Acquisition", desc: "Access to off-market opportunities and hyper-local inventory data." },
    { title: "Market Intelligence", desc: "Real-time analysis to ensure you never overpay for your next home." },
    { title: "Expert Negotiation", desc: "Securing the best terms in New York's most competitive bidding wars." },
    { title: "Seamless Closing", desc: "Coordinating with attorneys, inspectors, and lenders for a smooth transition." }
  ];

  return (
    <div className="pt-32">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <FadeIn>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 block mb-6">Strategic Acquisition</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase">Find Your Edge in the Market.</h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Buying in New York requires a tactical approach. We provide the data, 
              local expertise, and negotiation power to secure your ideal property.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#FAFAFA] border-y border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {buyerValues.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="border-t-2 border-black pt-8">
                  <h3 className="text-xl font-bold tracking-tight mb-4 uppercase">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <FadeIn className="text-center w-full">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 uppercase"> Start Your Search. </h2>
              <p className="text-xl text-gray-500 mb-16 max-w-2xl mx-auto">
                Discover your buying power and browse real-time inventory with our equity-first search tool.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="w-full">
              <div className="bg-white border border-gray-100 p-4 md:p-12 shadow-2xl rounded-sm">
                <HomebotBuyerWidget />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white text-center">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">Ready to Buy?</h2>
            <Button to="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Schedule a Buyer Consultation
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Buy;