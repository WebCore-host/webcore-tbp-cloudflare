import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24 text-center text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="font-heading text-5xl md:text-7xl mb-4">Comprehensive Plumbing & HVAC Services</h1>
          <p className="font-subheading text-xl md:text-2xl text-safety uppercase tracking-widest">Professional Solutions for Every Home & Business</p>
        </div>
      </section>

      {/* Main Plumbing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl text-navy mb-6">Expert Plumbing Services</h2>
            <p className="text-xl text-gray-600">
              As a FULL SERVICE plumbing company, we handle all aspects of plumbing for homes, businesses, and property management across the Metroplex.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Residential */}
            <div className="bg-neutralLight p-8 rounded-lg border-l-8 border-safety shadow-lg">
              <h3 className="font-heading text-3xl text-navy mb-6 flex items-center">
                <span className="bg-navy text-white p-2 rounded mr-4">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                   </svg>
                </span>
                Residential Plumbing
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-8">
                <ServiceListItem text="Sink Drain Repairs" />
                <ServiceListItem text="Underground Leak Detection" />
                <ServiceListItem text="Water Pressure Problems" />
                <ServiceListItem text="Sewage Ejector Pumps" />
                <ServiceListItem text="Backflow Preventive Testing" />
                <ServiceListItem text="Gas Appliance Installation" />
                <ServiceListItem text="Video Camera Sewer Inspection" />
                <ServiceListItem text="New Construction" />
                <ServiceListItem text="Shower & Sink Installs" />
                <ServiceListItem text="Rough Plumbing" />
              </ul>
              <p className="italic text-navy font-bold">"Dealing with plumbing problems is the last thing you need. Your plumbing problem is no problem for us."</p>
            </div>

            {/* Commercial */}
            <div className="bg-neutralLight p-8 rounded-lg border-l-8 border-navy shadow-lg">
              <h3 className="font-heading text-3xl text-navy mb-6 flex items-center">
                <span className="bg-navy text-white p-2 rounded mr-4">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                   </svg>
                </span>
                Commercial Plumbing
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-8">
                <ServiceListItem text="Tenant Build Outs" />
                <ServiceListItem text="Building Re-piping" />
                <ServiceListItem text="Drain & Pipe Clogs" />
                <ServiceListItem text="Complete Remodels" />
                <ServiceListItem text="Hydro Sewer Jetting" />
                <ServiceListItem text="Commercial Water Heaters" />
                <ServiceListItem text="Tankless Systems" />
                <ServiceListItem text="Medical Gas Certified" />
                <ServiceListItem text="Water Conservation" />
                <ServiceListItem text="Backflow Prevention" />
              </ul>
              <p className="italic text-safety font-bold">"Don't let a plumbing problem slow down your business. Call Texas Built Plumbing for fast reliable service."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-24 bg-neutralLight">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-heading text-4xl md:text-6xl text-navy text-center mb-16">Specialty Plumbing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpecialtyBox 
              title="Water Heaters"
              desc="Installation and repair for all models, makes and sizes. We specialize in Tanked and Tankless systems. Annual Tankless cleaning recommended!"
            />
            <SpecialtyBox 
              title="Sewer Services"
              desc="Silent wonders that need expert care. We specialize in Metroplex sewer line repair, replacement, and video inspections."
            />
            <SpecialtyBox 
              title="Leak Repair"
              desc="Interior & exterior leak repair. From bathroom and laundry room leaks to outside faucets, we fix it fast and correctly."
            />
            <SpecialtyBox 
              title="Re-Piping Experts"
              desc="If your home is 20+ years old, you might have corrosion issues. We provide FREE assessments for re-piping your property."
            />
          </div>
        </div>
      </section>

      {/* HVAC Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl text-navy mb-6">Complete HVAC Services</h2>
            <p className="text-xl text-gray-600">Now offering complete HVAC services to keep your home or business comfortable year-round.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HVACCard 
              title="Air Conditioning"
              icon={<SnowflakeIcon />}
              services={["Maintenance Plans", "System Repairs", "Full Installation"]}
              desc="Stay cool in the Texas heat with fast diagnosis and repair for all major brands."
            />
            <HVACCard 
              title="Heating"
              icon={<FlameIcon />}
              services={["Furnace Maintenance", "Heat Pumps", "Gas & Electric Professionals"]}
              desc="Expert heating services from repairs to new installations. Same-day service available."
            />
            <HVACCard 
              title="Ventilation"
              icon={<AirIcon />}
              services={["Duct Cleaning", "Air Purifiers", "Ductless Solutions"]}
              desc="Improve your indoor air quality and breathe easier with our ventilation upgrades."
            />
          </div>
        </div>
      </section>

      {/* Customer Promise */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="font-heading text-4xl md:text-6xl mb-8">Our Commitment to You</h2>
          <p className="text-xl leading-relaxed text-gray-300">
            Our highly trained team will work to exceed your expectations. We start with live in-house professionals who answer your call 24/7. No answering services. We provide <span className="text-safety font-bold">FREE ESTIMATES</span>. High quality workmanship at a reasonable price means you get the best job at the best price.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-safety py-16">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left text-white">
           <h2 className="font-heading text-4xl md:text-5xl">Ready for Expert Service?</h2>
           <div className="flex flex-col sm:flex-row gap-6 items-center">
              <a href="tel:8175891567" className="font-heading text-5xl hover:text-navy transition-colors">817-589-1567</a>
              <Link to="/contact" className="bg-white text-safety px-8 py-3 rounded-md font-accent font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all">Schedule Appointment</Link>
           </div>
        </div>
      </section>
    </div>
  );
};

// Sub-components
const ServiceListItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-center text-gray-700 py-1">
    <svg className="w-5 h-5 text-safety mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    {text}
  </li>
);

const SpecialtyBox: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-copper transition-all hover:shadow-xl group">
    <h3 className="font-heading text-3xl text-navy mb-4 group-hover:text-safety transition-colors">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const HVACCard: React.FC<{ title: string; icon: React.ReactNode; services: string[]; desc: string }> = ({ title, icon, services, desc }) => (
  <div className="border border-gray-200 p-8 rounded-lg shadow hover:border-safety transition-all">
    <div className="text-safety mb-6">{icon}</div>
    <h3 className="font-heading text-4xl text-navy mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{desc}</p>
    <ul className="space-y-2">
      {services.map(s => (
        <li key={s} className="flex items-center font-subheading uppercase tracking-wide font-bold text-navy">
          <span className="w-2 h-2 bg-safety rounded-full mr-3"></span>
          {s}
        </li>
      ))}
    </ul>
  </div>
);

// Icons
const SnowflakeIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);
const FlameIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z" />
  </svg>
);
const AirIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default Services;