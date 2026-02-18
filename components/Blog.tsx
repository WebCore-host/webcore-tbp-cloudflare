
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  category: 'Plumbing' | 'HVAC' | 'Maintenance' | 'Tips';
  date: string;
  excerpt: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "5 Signs Your Home Needs Professional Drain Cleaning",
    category: 'Plumbing',
    date: 'June 15, 2026',
    excerpt: "Slow drains and strange noises aren't just annoying—they can signal major issues. Learn how to spot them early.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Why Summer is the Best Time to Service Your HVAC System",
    category: 'HVAC',
    date: 'June 10, 2026',
    excerpt: "Don't wait for the Texas heat to peak before checking your AC. Preventive maintenance saves thousands in the long run.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "The Benefits of Switching to a Tankless Water Heater",
    category: 'Maintenance',
    date: 'June 5, 2026',
    excerpt: "Endless hot water and lower energy bills? We break down the pros and cons of tankless technology for DFW homes.",
    image: "https://images.unsplash.com/photo-1620629739505-1823901b0461?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Emergency Plumbing: What to Do Before the Plumber Arrives",
    category: 'Tips',
    date: 'May 28, 2026',
    excerpt: "Burst pipe? Major leak? Knowing where your shut-off valves are can save your home from severe water damage.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Understanding Your Commercial Plumbing Maintenance Schedule",
    category: 'Plumbing',
    date: 'May 20, 2026',
    excerpt: "For DFW businesses, a plumbing failure means downtime. Here is the ultimate guide to commercial pipe health.",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c4b282?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Common Causes of Low Water Pressure in Saginaw Homes",
    category: 'Maintenance',
    date: 'May 12, 2026',
    excerpt: "Is your shower a struggle? We explore the top 4 reasons Saginaw residents experience drops in water pressure.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80&w=800"
  }
];

const Blog: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Plumbing', 'HVAC', 'Maintenance', 'Tips'];

  const filteredPosts = filter === 'All' 
    ? posts 
    : posts.filter(post => post.category === filter);

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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-navy rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1632629810360-148c3d9bc8c2?auto=format&fit=crop&q=80&w=1200" 
                alt="Featured Post" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
              <span className="text-safety font-accent font-bold uppercase tracking-widest mb-4 inline-block">Featured Article</span>
              <h2 className="text-white font-heading text-4xl md:text-5xl mb-6 leading-tight">Winterizing Your DFW Home: The Ultimate Checklist</h2>
              <p className="text-gray-300 text-lg mb-8">Texas winters can be unpredictable. Protect your pipes and your HVAC system with our comprehensive guide to home winterization.</p>
              <div className="flex items-center space-x-4">
                <button className="bg-safety text-white px-8 py-3 rounded-md font-accent font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all">
                  Read More
                </button>
                <span className="text-gray-400 font-subheading uppercase">June 20, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map(post => (
              <article key={post.id} className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="h-56 overflow-hidden rounded-t-xl relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-navy text-white text-[10px] font-accent font-bold uppercase tracking-widest px-3 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-all duration-300"></div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="text-safety font-subheading text-xs font-bold uppercase tracking-wider mb-2">
                    {post.date}
                  </div>
                  <h3 className="font-heading text-2xl text-navy mb-4 group-hover:text-safety transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="mt-auto flex items-center text-navy font-accent font-bold uppercase tracking-widest text-sm hover:text-safety transition-colors group/btn">
                    Read Full Article
                    <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center space-x-2">
            <button className="p-2 border border-gray-200 rounded hover:bg-navy hover:text-white transition-all disabled:opacity-30" disabled>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-navy text-white font-bold rounded">1</button>
            <button className="w-10 h-10 border border-gray-200 text-gray-500 hover:bg-neutralLight rounded font-bold">2</button>
            <button className="w-10 h-10 border border-gray-200 text-gray-500 hover:bg-neutralLight rounded font-bold">3</button>
            <button className="p-2 border border-gray-200 rounded hover:bg-navy hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
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
