import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';

const MarketInsightsBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeed = async () => {
      const RSS_URL = 'https://news.rafaelbarbosa.com/blog/rss.xml';
      const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.status === 'ok') {
          setPosts(data.items);
        }
      } catch (error) {
        console.error('RSS Synchronization Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-100 aspect-[16/10] mb-8"></div>
            <div className="h-4 bg-gray-100 w-1/4 mb-4"></div>
            <div className="h-8 bg-gray-100 w-full mb-4"></div>
            <div className="h-20 bg-gray-100 w-full"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
      {posts.length > 0 ? (
        posts.map((post, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className="group flex flex-col h-full">
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
              <div className="relative overflow-hidden mb-8 aspect-[16/10] bg-gray-50">
                <img 
                  src={post.thumbnail || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-0 left-0 bg-black text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 font-['DM_Mono']">
                  Intelligence
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase font-['DM_Sans']">
                    {new Date(post.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <div className="h-[1px] flex-grow bg-gray-100"></div>
                </div>

                <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] font-medium tracking-tight mb-4 group-hover:text-gray-600 transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-500 font-['DM_Sans'] leading-relaxed mb-8 flex-grow text-sm line-clamp-3 font-light">
                  {post.description.replace(/<[^>]*>?/gm, '').substring(0, 160)}...
                </p>

                <div className="mt-auto">
                  <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black pb-1 group-hover:border-gray-300 transition-all font-['DM_Sans']">
                    Read Analysis
                    <svg className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </FadeIn>
        ))
      ) : (
        <div className="col-span-full py-24 text-center border-y border-gray-100">
          <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold font-['DM_Sans']">
            Synchronizing live market intelligence archives...
          </p>
        </div>
      )}
    </div>
  );
};

export default MarketInsightsBlog;