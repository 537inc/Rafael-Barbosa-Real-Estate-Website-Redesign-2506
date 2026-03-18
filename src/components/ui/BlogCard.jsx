import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const BlogCard = ({ post, delay = 0 }) => {
  // Determine if it's an internal manual post or external RSS
  const isInternal = !!post.id;
  const linkPath = isInternal ? `/market-insights/${post.id}` : post.link;

  const CardWrapper = ({ children }) => {
    if (isInternal) {
      return (
        <Link to={linkPath} className="flex flex-col h-full">
          {children}
        </Link>
      );
    }
    return (
      <a href={linkPath} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
        {children}
      </a>
    );
  };

  return (
    <FadeIn delay={delay} className="group cursor-pointer flex flex-col h-full">
      <CardWrapper>
        <div className="overflow-hidden mb-8 aspect-[16/10] relative bg-gray-100">
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img 
            src={post.image || post.thumbnail} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
            loading="lazy" 
          />
          <div className="absolute bottom-0 left-0 bg-black text-white text-[8px] font-black uppercase tracking-[0.3em] px-4 py-2 z-20">
            {post.category || 'Market Intelligence'}
          </div>
        </div>
        
        <div className="flex flex-col flex-grow">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400">
              {post.date || post.pubDate}
            </span>
            <div className="h-px flex-grow bg-gray-100"></div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold tracking-tighter mb-4 group-hover:text-gray-600 transition-colors line-clamp-2 uppercase leading-tight">
            {post.title}
          </h3>
          
          <p className="text-gray-500 leading-relaxed mb-8 flex-grow text-sm line-clamp-3 font-light">
            {post.excerpt}
          </p>
          
          <div className="mt-auto">
            <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] border-b-2 border-black pb-1 group-hover:border-gray-300 transition-all">
              Read Analysis
              <svg className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </CardWrapper>
    </FadeIn>
  );
};

export default BlogCard;