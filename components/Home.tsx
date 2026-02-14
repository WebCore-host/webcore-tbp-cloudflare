import React from 'react';
import { Link } from 'react-router-dom';
import PlumbingBg from './PlumbingBP'; // Fixed path: Home and PlumbingBP are in the same folder

const Home: React.FC = () => {

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-navy">
          <PlumbingBg className="w-full h-full object-cover brightness-[0.4]" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy/90"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-8xl text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
            DFW'S MOST TRUSTED<br />
            <span className="text-safety">PLUMBING & HVAC</span> EXPERTS
          </h1>
          <p className="font-subheading text-xl md:text-3xl text-gray-100 mb-10 uppercase tracking-widest drop-shadow-lg">
            24/7 Emergency Service | FREE Estimates | Family Owned & Operated
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div 
              className="w-full sm:w-auto bg-safety text-white px-8 py-4 rounded-md font-accent text-xl uppercase tracking-wider shadow-xl cursor-default"
            >
              Call Now: 817-589-1567
            </div>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-md font-accent text-xl uppercase tracking-wider hover:bg-white hover:text-navy transition-all shadow-xl"
            >
              Schedule Online
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-8 border-t border-white/20 max-w-4xl mx-auto">
            <TrustBadge text="Licensed, Bonded & Insured" />
            <TrustBadge text="Family Owned & Operated" />
            <TrustBadge text="Same-Day Service" />
          </div>
        </div>
      </section>

      {/* Emergency Bar */}
      <div className="bg-safety py-4 relative z-20 pulse-emergency">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center">
          <div className="flex items-center">
            <svg className="w-8 h-8 mr-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77-1.333.192-3 1.732-3z" />
            </svg>
            <span className="font-accent text-2xl md:text-3xl font-bold uppercase tracking-tight">PLUMBING EMERGENCY? WE'RE AVAILABLE 24/7 - CALL NOW!</span>
          </div>
          <span className="font-heading text-4xl underline decoration-white underline-offset-4 cursor-default">817-589-1567</span>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-24 bg-neutralLight">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl text-navy mb-4">Complete Plumbing & HVAC Solutions</h2>
            <p className="font-subheading text-xl text-gray-600 uppercase tracking-widest">Residential & Commercial Services Across the DFW Metroplex</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Plumbing Services"
              icon={<WrenchIcon />}
              desc="From leaky faucets to underground leak detection, we handle every residential and commercial plumbing need."
              link="/services"
            />
            <ServiceCard 
              title="HVAC Services"
              icon={<TempIcon />}
              desc="Expert AC and heating repair, installation, and maintenance to keep your DFW home comfortable year-round."
              link="/services"
            />
            <ServiceCard 
              title="Emergency Repairs"
              icon={<ClockIcon />}
              desc="Live in-house professionals answer calls 24/7. Same-day service with no franchise fees passed to you."
              link="/contact"
              isUrgent
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-navy text-white relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="font-heading text-4xl md:text-6xl text-center mb-16">Why DFW Trusts Texas Built Plumbing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Feature 
              title="24/7 Live Answering"
              desc="Real people, not answering services, answer your call day or night."
              icon={<CheckIcon />}
            />
            <Feature 
              title="FREE Estimates"
              desc="No hidden fees, no franchise costs. Transparent pricing from the start."
              icon={<CheckIcon />}
            />
            <Feature 
              title="Certified Experts"
              desc="Highly trained, licensed technicians who treat your home like their own."
              icon={<CheckIcon />}
            />
            <Feature 
              title="Same-Day Service"
              desc="Fast response when you need it most. We're local to Saginaw/DFW."
              icon={<CheckIcon />}
            />
            <Feature 
              title="Family Owned"
              desc="We aren't a national brand; we're your neighbors with local values."
              icon={<CheckIcon />}
            />
            <Feature 
              title="Quality Guaranteed"
              desc="High workmanship at reasonable prices. We stand behind every job."
              icon={<CheckIcon />}
            />
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <h2 className="font-heading text-4xl md:text-6xl text-navy mb-6">Serving the Entire DFW Metroplex</h2>
          <p className="text-xl text-gray-600 max-w-2xl mb-12">
            From Fort Worth to Dallas and everywhere in between, we're your local plumbing and HVAC experts. 
            Proudly based in Saginaw, TX.
          </p>
          <div className="w-full max-w-4xl h-80 bg-neutralLight rounded-xl shadow-inner flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
             <img src="https://picsum.photos/id/122/1200/400" className="w-full h-full object-cover opacity-50" alt="DFW Area" />
             <div className="absolute font-heading text-4xl text-navy">METROPLEX SERVICE</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-safety py-16">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <h2 className="font-heading text-5xl mb-2">Ready to Get Started?</h2>
            <p className="font-subheading text-2xl uppercase tracking-wider">Expert Help is just a phone call away</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="font-heading text-5xl text-white cursor-default">817-589-1567</div>
            <Link to="/contact" className="bg-white text-safety px-8 py-3 rounded-md font-accent font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all">Schedule Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sub-components
const TrustBadge: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center text-white font-accent uppercase tracking-wider text-sm md:text-base">
    <svg className="w-5 h-5 text-safety mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    {text}
  </div>
);

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; link: string; isUrgent?: boolean }> = ({ title, desc, icon, link, isUrgent }) => (
  <div className={`p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center ${isUrgent ? 'bg-safety text-white' : 'bg-white'}`}>
    <div className={`mb-6 p-4 rounded-full ${isUrgent ? 'bg-white text-safety' : 'bg-navy text-white'}`}>
      {icon}
    </div>
    <h3 className={`font-heading text-3xl mb-4 ${isUrgent ? 'text-white' : 'text-navy'}`}>{title}</h3>
    <p className={`mb-8 leading-relaxed ${isUrgent ? 'text-white/90' : 'text-gray-600'}`}>{desc}</p>
    {isUrgent ? (
      <div className="mt-auto px-6 py-2 rounded-md font-accent uppercase tracking-widest font-bold bg-navy text-white cursor-default">
        Call Now
      </div>
    ) : (
      <Link 
        to={link} 
        className="mt-auto px-6 py-2 rounded-md font-accent uppercase tracking-widest font-bold transition-colors bg-safety text-white hover:bg-navy"
      >
        Learn More
      </Link>
    )}
  </div>
);

const Feature: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mr-4 text-safety">
      {icon}
    </div>
    <div>
      <h4 className="font-subheading text-xl font-bold uppercase tracking-wide mb-2">{title}</h4>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

// Icons
const WrenchIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>
);
const TempIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);
const ClockIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const CheckIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

export default Home;