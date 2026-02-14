
import React, { useEffect, useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Plumbing Service',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');

    try {
      // Updated endpoint for Cloudflare Pages Functions
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', phone: '', email: '', service: 'Plumbing Service', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus('ERROR');
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-neutralDark py-16 md:py-24 text-center text-white relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/id/117/1200/400?grayscale')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="font-heading text-5xl md:text-7xl mb-4">Get In Touch With Texas Built Plumbing</h1>
          <p className="font-subheading text-xl md:text-2xl text-safety uppercase tracking-widest">Available 24/7 for Emergency Service | FREE Estimates</p>
        </div>
      </section>

      {/* Contact Info & Quick Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Details */}
            <div>
              <h2 className="font-heading text-4xl text-navy mb-8 border-b-2 border-safety pb-2 inline-block">Contact Details</h2>
              
              <div className="space-y-10">
                <ContactInfoItem 
                  icon={<PhoneIcon />}
                  title="Phone Number"
                  content={<a href="tel:8175891567" className="text-4xl md:text-5xl font-heading text-navy hover:text-safety transition-colors">817-589-1567</a>}
                  subtext="Click to Call - Available 24/7"
                />
                
                <ContactInfoItem 
                  icon={<PinIcon />}
                  title="Our Office"
                  content={<span className="text-2xl font-subheading uppercase font-bold text-navy">1001 Kennedy Ln., Suite 210<br />Saginaw, TX 76179</span>}
                  subtext={<a href="https://www.google.com/maps/search/?api=1&query=Texas+Built+Plumbing+LLC+1001+Kennedy+Ln+Suite+210+Saginaw+TX+76179" target="_blank" rel="noopener noreferrer" className="text-safety hover:underline">View on Map</a>}
                />

                <ContactInfoItem 
                  icon={<ClockIcon />}
                  title="Working Hours"
                  content={<span className="text-2xl font-subheading uppercase font-bold text-navy">24/7 Emergency Service</span>}
                  subtext="Live Operators - No Answering Service - Same-Day Service"
                />

                <ContactInfoItem 
                  icon={<MapIcon />}
                  title="Service Area"
                  content={<span className="text-2xl font-subheading uppercase font-bold text-navy">Entire DFW Metroplex</span>}
                  subtext="Fort Worth, Dallas, and Surrounding Areas"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-neutralLight p-8 md:p-12 rounded-lg shadow-xl border border-gray-200">
              <h3 className="font-heading text-3xl text-navy mb-6">Quick Contact</h3>
              
              {status === 'SUCCESS' ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded shadow-inner animate-pulse">
                  <h4 className="font-bold text-xl mb-2">Estimate Request Sent!</h4>
                  <p>Thank you for reaching out. One of our in-house professionals will contact you shortly.</p>
                  <button onClick={() => setStatus('IDLE')} className="mt-4 text-sm underline font-bold">Send another message</button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {status === 'ERROR' && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
                      Something went wrong. Please call us directly at 817-589-1567.
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-1">Name *</label>
                    <input name="name" value={formData.name} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-safety" placeholder="Your Name" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-1">Phone *</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-safety" placeholder="Phone Number" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-1">Email *</label>
                      <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-safety" placeholder="Email Address" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-1">Service Needed</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-safety bg-white">
                      <option>Plumbing Service</option>
                      <option>HVAC Service</option>
                      <option>Emergency Repair</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-1">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-safety h-32" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'SENDING'}
                    className={`w-full bg-safety text-white font-accent uppercase tracking-widest py-4 rounded font-bold transition-all shadow-lg transform hover:scale-[1.02] ${status === 'SENDING' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-navy'}`}
                  >
                    {status === 'SENDING' ? 'Sending Request...' : 'Request Free Estimate'}
                  </button>
                </form>
              )}
              <p className="text-center mt-6 text-gray-500 font-subheading uppercase">For immediate assistance, call <a href="tel:8175891567" className="font-bold text-navy">817-589-1567</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Cal Scheduler Section */}
      <section className="py-24 bg-neutralLight">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-6xl text-navy mb-4">Schedule Your Appointment Online</h2>
            <p className="font-subheading text-xl text-gray-600 uppercase tracking-widest">Choose a convenient time that works for your schedule</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-4 md:p-8 min-h-[600px]">
             {/* Cal inline embed */}
             <div style={{ width: '100%', height: '100%', overflow: 'scroll' }} id="my-cal-inline-15min"></div>
             <CalLoader />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
          <h2 className="font-heading text-4xl md:text-6xl text-navy mb-4">Visit Our Office</h2>
          <p className="font-subheading text-xl text-gray-600 uppercase tracking-widest">1001 Kennedy Ln., Suite 210, Saginaw, TX 76179</p>
        </div>
        
        <div className="w-full h-[450px] shadow-2xl relative overflow-hidden group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.4455978512833!2d-97.3140241!3d32.8334516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e77d6f9a5cb01%3A0xfd0ec1fbee58a1f!2sTexas%20Built%20Plumbing%2C%20LLC!5e0!3m2!1sen!2sus!4v1769930573928!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="container mx-auto px-4 py-16 text-center">
          <h3 className="font-heading text-3xl text-navy mb-6">Proudly Serving:</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-loose">
            Fort Worth • Saginaw • Keller • Watauga • Haltom City • North Richland Hills • Arlington • Dallas • Southlake • Grapevine • Colleyville • Hurst • Euless • Bedford • White Settlement • River Oaks • Weatherford • and all surrounding DFW communities.
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-safety py-16 pulse-emergency relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center text-white relative z-10">
          <h2 className="font-heading text-6xl md:text-8xl mb-4 tracking-tight">NEED EMERGENCY SERVICE?</h2>
          <p className="font-subheading text-3xl md:text-4xl uppercase tracking-widest mb-8">We're Available 24/7 - Just Call</p>
          <a href="tel:8175891567" className="bg-navy text-white px-12 py-5 rounded-md font-heading text-5xl md:text-6xl hover:bg-white hover:text-navy transition-all shadow-2xl">
            817-589-1567
          </a>
        </div>
      </section>
    </div>
  );
};

// Loader component to inject Cal.com script safely
const CalLoader: React.FC = () => {
  useEffect(() => {
    // This is a direct implementation of the provided script for React
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        } p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // @ts-ignore
    window.Cal("init", "15min", { origin: "https://app.cal.com" });
    // @ts-ignore
    window.Cal.ns["15min"]("inline", {
      elementOrSelector: "#my-cal-inline-15min",
      config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
      calLink: "francisco-fonseca-gwmlzh/15min",
    });
    // @ts-ignore
    window.Cal.ns["15min"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
  }, []);

  return null;
};

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; content: React.ReactNode; subtext: React.ReactNode }> = ({ icon, title, content, subtext }) => (
  <div className="flex items-start">
    <div className="bg-safety text-white p-4 rounded-lg mr-6 shadow-lg">
      {icon}
    </div>
    <div className="flex flex-col">
      <h4 className="font-accent text-sm text-safety uppercase tracking-widest font-bold mb-1">{title}</h4>
      <div className="mb-1">{content}</div>
      <div className="text-gray-500 font-subheading italic uppercase text-sm tracking-wide">{subtext}</div>
    </div>
  </div>
);

// Icons
const PhoneIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);
const PinIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);
const ClockIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
  </svg>
);
const MapIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

export default Contact;
