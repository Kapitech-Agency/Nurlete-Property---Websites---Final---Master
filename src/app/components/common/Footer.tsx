import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, ArrowUpRight, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 py-16 md:py-24 px-4 md:px-8 mt-8 w-full font-sans">
      <div className="max-w-[1440px] mx-auto w-full">
        
        {/* Main Dark Footer Container - Wide Layout */}
        <div className="w-full bg-[#000000] selection:bg-white selection:text-[#000000] rounded-3xl md:rounded-[4rem] p-8 md:p-16 lg:p-24 shadow-[0_-48px_120px_rgba(0,0,0,0.1)] relative overflow-hidden">
          
          {/* Subtle architectural glow */}
          <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-[#3C2A21]/20 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-16 md:mb-24 relative z-10">
            
            {/* Brand Column */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <Link to="/" className="flex items-center gap-4 mb-10 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <span className="text-[#000000] font-bold text-2xl leading-none">N</span>
                </div>
                <span className="font-semibold text-2xl tracking-tight text-white group-hover:opacity-80 transition-opacity">
                  Nurlete Property
                </span>
              </Link>
              <p className="text-white/60 text-lg leading-[1.7] max-w-lg mb-12 font-medium">
                Established January 2026. Providing high-quality, value-driven cluster housing in Eastern Indonesia. We focus on building safe, accessible, and functional homes for local families.
              </p>
              
              <div className="flex items-center gap-5">
                {[
                  { icon: <Instagram size={22} />, label: "Instagram" },
                  { icon: <Linkedin size={22} />, label: "Linkedin" },
                  { icon: <Twitter size={22} />, label: "Twitter" }
                ].map((social, idx) => (
                  <Link key={idx} to="/" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#3C2A21] hover:scale-110 transition-all shadow-xl">
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Site Map Column */}
            <div className="lg:col-span-3 lg:col-start-7">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.3em] mb-12 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#3C2A21]" /> Navigation
              </h4>
              <ul className="space-y-6">
                {['Home', 'About Us', 'Portfolios', 'Insights', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link 
                      to={link === 'Home' ? '/' : link === 'Contact' ? '/contact' : `/${link.toLowerCase().replace(' ', '-')}`} 
                      className="font-bold text-white/40 hover:text-white text-lg transition-all flex items-center gap-3 group"
                    >
                      <span className="w-0 group-hover:w-3 h-[2px] bg-[#3C2A21] overflow-hidden transition-all duration-300" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3 lg:col-start-10">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.3em] mb-12">Get in Touch</h4>
              <div className="space-y-4 mb-10">
                <p className="text-white/60 text-[13px] font-medium leading-[1.6]">
                  sales@nurleteproperty.com
                </p>
                <p className="text-white/60 text-base leading-[1.7] font-medium">
                  Quality homes for everyone. Reach out to our team to find your new house.
                </p>
              </div>
              
              <Link to="/contact" className="inline-flex bg-white text-[#000000] rounded-full px-8 py-4 text-base font-bold items-center justify-center gap-3 hover:bg-[#3C2A21] hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-3xl w-full">
                Contact sales <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-10 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1px] bg-[#3C2A21]" />
              <p className="text-white/30 text-sm font-bold tracking-widest uppercase">
                © 2026 Nurlete Property
              </p>
            </div>

            <div className="flex items-center gap-10 text-white/30 text-sm font-bold uppercase tracking-widest">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}
