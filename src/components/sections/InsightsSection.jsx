import React from 'react';
import FadeIn from '../ui/FadeIn';
import { Link } from 'react-router-dom';

const InsightsSection = () => {
  const posts = [
    { title: "Strategic Pricing Models", excerpt: "Understanding market dynamics to maximize return.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80", date: "OCT 12, 2023" },
    { title: "ROI of Pre-Listing Prep", excerpt: "Renovations that yield the highest return.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", date: "SEP 28, 2023" },
    { title: "Navigating Co-op Packages", excerpt: "Ensuring board approval with precision.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", date: "SEP 15, 2023" }
  ];

  return (
    <section className="py-24 md:py-40 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Market Insights.</h2>
            <Link to="/market-insights" className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1">View All</Link>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-[4/3]">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="text-xs font-bold tracking-widest text-gray-400 mb-3">{post.date}</p>
              <h3 className="text-xl font-bold tracking-tight mb-3">{post.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1">Read More</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;