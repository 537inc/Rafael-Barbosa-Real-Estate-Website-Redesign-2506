import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import FadeIn from '../components/ui/FadeIn';
import Valuation from '../components/sections/Valuation';
import ContactSection from '../components/sections/ContactSection';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    if (!post) {
      navigate('/market-insights');
      return;
    }

    const updateMeta = (name, content, attr = 'name') => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateCanonical = (url) => {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    };

    // Standard SEO
    document.title = `${post.title} | Rafael Barbosa Market Insights`;
    updateMeta('description', post.excerpt);
    
    // Open Graph / Social
    const currentUrl = window.location.href;
    updateMeta('og:title', post.title, 'property');
    updateMeta('og:description', post.excerpt, 'property');
    updateMeta('og:image', post.image, 'property');
    updateMeta('og:url', currentUrl, 'property');
    updateMeta('og:type', 'article', 'property');
    
    // Twitter Card
    updateMeta('twitter:title', post.title);
    updateMeta('twitter:description', post.excerpt);
    updateMeta('twitter:image', post.image);
    
    updateCanonical(currentUrl);

    window.scrollTo(0, 0);

    // Cleanup - Reset to default on unmount
    return () => {
      document.title = "The Barbosa Team | Modern Real Estate Solutions in NYC & Westchester";
      updateMeta('description', "Expert real estate services in NYC & Westchester. Specializing in luxury waterfront condos, Colonial Heights historic homes, and commuter-friendly properties near Tuckahoe.");
      updateCanonical('https://rafaelbarbosa.com/');
    };
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="pt-32">
      <article className="pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <Link 
              to="/market-insights" 
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-12"
            >
              <SafeIcon icon={FiIcons.FiArrowLeft} /> Back to Insights
            </Link>
          </FadeIn>

          <div className="max-w-4xl">
            <FadeIn delay={0.1}>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 block mb-6">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.95] mb-8">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 mb-16 text-xs font-bold uppercase tracking-widest text-gray-400">
                <span>By Rafael Barbosa</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{post.date}</span>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="aspect-[21/9] w-full bg-gray-100 overflow-hidden mb-16 shadow-lg">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.3}>
              {/* 
                Renders HTML content from data/blogPosts.js 
                Styled by .blog-content in index.css 
              */}
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </FadeIn>
            
            <FadeIn delay={0.4} className="mt-24 pt-12 border-t border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-tight mb-2">Share this analysis</h4>
                  <p className="text-gray-400 text-sm font-light">Strategic data for the modern real estate market.</p>
                </div>
                <div className="flex gap-4">
                  {[FiIcons.FiTwitter, FiIcons.FiLinkedin, FiIcons.FiLink].map((Icon, i) => (
                    <button 
                      key={i} 
                      className="w-12 h-12 flex items-center justify-center border border-gray-100 hover:bg-black hover:text-white transition-all text-gray-400"
                    >
                      <SafeIcon icon={Icon} />
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </article>

      <Valuation />
      <ContactSection />
    </div>
  );
};

export default BlogPost;