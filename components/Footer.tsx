
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-1 border-2 border-safety rounded bg-navy">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl tracking-tight">TEXAS BUILT PLUMBING</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 italic">"Commercial and Residential Plumbing Professionals"</p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/10 px-3 py-1 rounded text-xs uppercase tracking-wider font-bold">Licensed</span>
              <span className="bg-white/10 px-3 py-1 rounded text-xs uppercase tracking-wider font-bold">Bonded</span>
              <span className="bg-white/10 px-3 py-1 rounded text-xs uppercase tracking-wider font-bold">Insured</span>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-subheading text-xl uppercase tracking-wider text-safety mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-safety font-bold">Emergency Service</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-subheading text-xl uppercase tracking-wider text-safety mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-safety mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:8175891567" className="hover:text-white">817-589-1567</a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-safety mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>1001 Kennedy Ln., Suite 210<br />Saginaw, TX 76179</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-safety mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-white">24/7 Emergency Service Available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Texas Built Plumbing, LLC. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
