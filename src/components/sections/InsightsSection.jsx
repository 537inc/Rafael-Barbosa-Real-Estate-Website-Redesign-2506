import React from 'react';
import FadeIn from '../ui/FadeIn';
import { Link } from 'react-router-dom';
import BlogCard from '../ui/BlogCard';
import { blogPosts } from '../../data/blogPosts';

const InsightsSection = () => {
  // Take the 3 most recent manual posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 md:py-40 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-300 block mb-6">Real-Time Data</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                Market<br />Intelligence.
              </h2>
            </div>
            <Link 
              to="/market-insights" 
              className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-black pb-2 hover:text-gray-500 hover:border-gray-200 transition-all"
            >
              Explore Full Archive
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {recentPosts.length > 0 ? (
            recentPosts.map((post, idx) => (
              <BlogCard key={post.id} post={post} delay={idx * 0.1} />
            ))
          ) : (
            <div className="col-span-full py-24 text-center border-y border-gray-100">
              <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">
                Insights synchronization active. Check back shortly for live updates.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;