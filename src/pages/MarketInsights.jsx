import React from 'react';
import FadeIn from '../components/ui/FadeIn';
import Valuation from '../components/sections/Valuation';
import BlogCard from '../components/ui/BlogCard';
import { blogPosts } from '../data/blogPosts';

const MarketInsights = () => {
  return (
    <div className="pt-32">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-left">
          <FadeIn>
            <div className="max-w-4xl mb-24">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 block mb-6 font-['DM_Sans']">The Intelligence Suite</span>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">
                Market<br />Insights.
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-2xl">
                Strategic data and property analysis from Rafael Barbosa. Stay ahead of the NY and Westchester markets with our exclusive intelligence.
              </p>
            </div>
          </FadeIn>

          {/* Manual Blog List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {blogPosts.map((post, idx) => (
              <BlogCard key={post.id} post={post} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>
      
      <Valuation />
    </div>
  );
};

export default MarketInsights;