import React, { useState, useEffect } from 'react';
import FadeIn from '../ui/FadeIn';
import { Link } from 'react-router-dom';

const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
const GHL_API_URL = `${CORS_PROXY}https://services.leadconnectorhq.com/blogs/posts?locationId=YX80CMe65N0bX5qNSceP&blogId=rKX2UDvy7OIAvnDiJr5o&status=published&limit=3`;

const InsightsSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(GHL_API_URL, {
          headers: {
            'Authorization': 'Bearer pit-95638405-d1a0-46a6-9869-70a27468e7da',
            'Version': '2021-04-15'
          }
        });
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error('Failed to fetch blog posts:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    }).toUpperCase();
  };

  const fallbackPosts = [
    { title: "Strategic Pricing Models", description: "Understanding market dynamics to maximize return.", imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80", updatedAt: "2024-01-01" },
    { title: "ROI of Pre-Listing Prep", description: "Renovations that yield the highest return.", imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", updatedAt: "2024-01-01" },
    { title: "Navigating Co-op Packages", description: "Ensuring board approval with precision.", imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", updatedAt: "2024-01-01" }
  ];

  const displayPosts = posts.length > 0 ? posts : fallbackPosts;

  return (
    <section className="py-24 md:py-40 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Market Insights.</h2>
            <Link to="/market-insights" className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1">View All</Link>
          </div>
        </FadeIn>
        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map(i => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-[4/3] mb-6"></div>
                <div className="bg-gray-200 h-4 w-24 mb-3"></div>
                <div className="bg-gray-200 h-6 w-full mb-3"></div>
                <div className="bg-gray-200 h-4 w-full mb-4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {displayPosts.map((post, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="group cursor-pointer">
                <a href={post.url || '#'} target="_blank" rel="noopener noreferrer">
                  <div className="overflow-hidden mb-6 aspect-[4/3]">
                    <img
                      src={post.imageUrl || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="text-xs font-bold tracking-widest text-gray-400 mb-3">
                    {formatDate(post.updatedAt)}
                  </p>
                  <h3 className="text-xl font-bold tracking-tight mb-3">{post.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    {post.description?.substring(0, 120)}...
                  </p>
                  <span className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1">Read More</span>
                </a>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InsightsSection;
