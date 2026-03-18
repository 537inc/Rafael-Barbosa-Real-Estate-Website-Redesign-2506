import React, { useState, useEffect } from 'react';
import FadeIn from '../ui/FadeIn';
import Button from '../ui/Button';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://media-manager-c.questera.ai/greta-media/172cce278505b230cda0d5f525875f63867f62d5279efa706d36efae4ebb2d8e6137b7923eb5cde22e2ba6646835b5af/images/aW1hZ2UvanBlZw==/e5650e9beb4e2998fcb4dcdd764a75d3.jpeg",
    "https://media-manager-c.questera.ai/greta-media/172cce278505b230cda0d5f525875f63867f62d5279efa706d36efae4ebb2d8e6137b7923eb5cde22e2ba6646835b5af/images/aW1hZ2UvcG5n/aaad1d03035a48e1ba8112df0ae0f334.png",
    "https://media-manager-c.questera.ai/greta-media/172cce278505b230cda0d5f525875f63867f62d5279efa706d36efae4ebb2d8e6137b7923eb5cde22e2ba6646835b5af/images/aW1hZ2UvanBlZw==/748a1f9c628d94e5ef013c21de66b63c.jpeg",
    "https://media-manager-c.questera.ai/greta-media/172cce278505b230cda0d5f525875f63867f62d5279efa706d36efae4ebb2d8e6137b7923eb5cde22e2ba6646835b5af/images/aW1hZ2UvanBlZw==/7ded7107477979de74bfdf7749004f6a.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 z-10">
            <FadeIn>
              <span className="block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-300 mb-6 md:mb-8">
                Upper Manhattan | The Bronx | Lower Westchester
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                Rafael<br />Barbosa
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-2xl md:text-4xl font-light tracking-tight text-gray-900 leading-tight mb-8">
                <span className="block mb-2">Strategic Home Sales.</span>
                <span className="block mb-2">Modern Marketing.</span>
                <span className="block mb-2">Strong Negotiation.</span>
                <span className="block font-medium">Results That Matter.</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-gray-500 max-w-lg mb-12 leading-relaxed">
                A data-driven approach to selling real estate in New York's most competitive markets.
              </p>
            </FadeIn>
            <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4">
              <Button to="/sell">Get Your Home Value</Button>
              <Button to="/contact" variant="outline">Schedule a Consultation</Button>
            </FadeIn>
          </div>
          <div className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] w-full overflow-hidden">
            <FadeIn delay={0.3} direction="left" className="w-full h-full relative">
              <div className="absolute inset-0 bg-gray-100 mix-blend-multiply z-20 transition-opacity duration-500 hover:opacity-0 pointer-events-none"></div>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Luxury Real Estate ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out z-10 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;