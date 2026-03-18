/**
 * Simplified Blog Service
 * Focuses on stable connection to GHL RSS feed
 */

export const fetchBlogPosts = async () => {
  const RSS_URL = 'https://news.rafaelbarbosa.com/blog/rss.xml';
  const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.status !== 'ok') {
      return [];
    }

    return data.items.map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate, // Keep raw string for stability
      excerpt: item.description.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...',
      thumbnail: item.thumbnail || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
    }));
  } catch (error) {
    console.error('RSS Feed Connection Error:', error);
    return [];
  }
};