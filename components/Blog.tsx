import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    content: string;
    publishedDate: string;
    category?: 'Plumbing' | 'HVAC' | 'Maintenance' | 'Tips';
    excerpt?: string;
    image?: string;
  };
}

// Replace these with your actual Contentful credentials
const SPACE_ID = 'your_space_id_here';
const ACCESS_TOKEN = 'your_access_token_here';

const Blog: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = ['All', 'Plumbing', 'HVAC', 'Maintenance', 'Tips'];

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(
        `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?content_type=blogPost&access_token=${ACCESS_TOKEN}&order=-fields.publishedDate`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      
      const data = await response.json();
      setPosts(data.items);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const filteredPosts = posts.filter(post => {
    const matchesFilter = filter === 'All' || post.fields.category === filter;
    const matchesSearch = searchTerm === '' || 
      post.fields.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.fields.excerpt && post.fields.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // Get featured post (most recent)
  const featuredPost = posts.length > 0 ? posts[0] : null;

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-navy flex items-center justify-center">
        <p className="text-white text-2xl font-subheading">Loading blog posts...</p>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24 text-center text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="font-heading text-5xl md:text-7xl mb-4">Plumbing & HVAC Insights</h1>
          <p className="font-subheading text-xl md:text-2xl text-safety uppercase tracking-widest">Expert Advice from DFW's Leading Professionals</p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-navy rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                <img 
                  src={featuredPost.fields.image || "https://images.unsplash.com/photo-1632629810360-148c3d9bc8c2?auto=format&fit=crop&q=80&w=1200"} 
                  alt={featuredPost.fields.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                <span className="text-safety font-accent font-bold uppercase tracking-widest mb-4 inline-block">Featured Article</span>
                <h2 className="text-white font-heading text-4xl md:text-5xl mb-6 leading-tight">{featuredPost.fields.title}</h2>
                <p className="text-gray-300 text-lg mb-8">
                  {featuredPost.fields.excerpt || featuredPost.fields.content.substring(0, 150) + '...'}
                </p>
                <div className="flex items-center space-x-4">
                  <Link 
                    to={`/blog/${featuredPost.fields.slug}`}
                    className="bg-safety text-white px-8 py-3 rounded-md font-accent font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all"
                  >
                    Read More
                  </Link>
                  <span className="text-gray-400 font-subheading uppercase">{formatDate(featuredPost.fields.publishedDate)}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Bar */}
      <section className="bg-neutralLight border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full font-accent text-sm uppercase tracking-wider font-bold transition-all ${
                    filter === cat 
                    ? 'bg-navy text-white shadow-md' 
                    : 'bg-white text-gray-500 hover:text-safety border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-auto">
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80 px-4 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:border-safety bg-white"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {filteredPosts.length === 0 ? (
            <p className="text-center text-gray-500 text-xl">No blog posts found. Try adjusting your filters.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredPosts.slice(1).map(post => (
                  <article key={post.sys.id} className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div className="h-56 overflow-hidden rounded-t-xl relative">
                      {post.fields.category && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-navy text-white text-[10px] font-accent font-bold uppercase tracking-widest px-3 py-1 rounded">
                            {post.fields.category}
                          </span>
                        </div>
                      )}
                      <img 
                        src={post.fields.image || "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"} 
                        alt={post.fields.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-all duration-300"></div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <div className="text-safety font-subheading text-xs font-bold uppercase tracking-wider mb-2">
                        {formatDate(post.fields.publishedDate)}
                      </div>
                      <h3 className="font-heading text-2xl text-navy mb-4 group-hover:text-safety transition-colors leading-tight">
                        {post.fields.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                        {post.fields.excerpt || post.fields.content.substring(0, 120) + '...'}
                      </p>
                      <Link 
                        to={`/blog/${post.fields.slug}`}
                        className="mt-auto flex items-center text-navy font-accent font-bold uppercase tracking-widest text-sm hover:text-safety transition-colors group/btn"
                      >
                        Read Full Article
                        <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-safety/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-safety/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">Stay Ahead of Maintenance</h2>
          <p className="text-gray-300 mb-10 text-lg uppercase font-subheading tracking-widest">Subscribe for monthly plumbing & HVAC tips delivered to your inbox.</p>
          
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-safety bg-white/10 text-white placeholder:text-gray-500 border border-white/20"
              required 
            />
            <button className="bg-safety text-white px-10 py-4 rounded-md font-accent font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-lg whitespace-nowrap">
              Join Newsletter
            </button>
          </form>
          <p className="text-gray-500 text-xs mt-6 italic">We promise not to spam you. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="bg-safety py-12">
        <div className="container mx-auto px-4 text-center">
          <Link to="/contact" className="font-heading text-4xl md:text-6xl text-white hover:text-navy transition-colors">
            NEED IMMEDIATE HELP? CALL 817-589-1567
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
