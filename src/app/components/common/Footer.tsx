import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, ArrowUpRight, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 py-[48px] px-[20px] md:px-[80px] mt-[64px] w-full font-sans">
      <div className="max-w-[1700px] mx-auto w-full">
        
        {/* Main Dark Footer Container - Wide Layout */}
        <div className="w-full bg-[#000000] selection:bg-white selection:text-[#000000] rounded-[64px] p-[64px] md:p-[96px] shadow-[0_-48px_120px_rgba(0,0,0,0.1)] relative overflow-hidden">
          
          {/* Subtle architectural glow */}
          <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-[#3C2A21]/20 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] lg:gap-[96px] mb-[96px] relative z-10">
            
            {/* Brand Column */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <Link to="/" className="flex items-center gap-[16px] mb-[40px] group">
                <div className="w-[56px] h-[56px] rounded-[20px] bg-white flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <span className="text-[#000000] font-bold text-[28px] leading-none">N</span>
                </div>
                <span className="font-semibold text-[24px] tracking-tight text-white group-hover:opacity-80 transition-opacity">
                  Nurlete Property
                </span>
              </Link>
              <p className="text-white/60 text-[18px] leading-[1.7] max-w-lg mb-[48px] font-medium">
                Established January 2026. Defining the modern standard of luxury real estate through high-quality construction, thoughtful design, and professional service. 
              </p>
              
              <div className="flex items-center gap-[20px]">
                {[
                  { icon: <Instagram size={22} />, label: "Instagram" },
                  { icon: <Linkedin size={22} />, label: "Linkedin" },
                  { icon: <Twitter size={22} />, label: "Twitter" }
                ].map((social, idx) => (
                  <Link key={idx} to="/" className="w-[56px] h-[56px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#3C2A21] hover:scale-110 transition-all shadow-xl">
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Site Map Column */}
            <div className="lg:col-span-3 lg:col-start-7">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.3em] mb-[48px] flex items-center gap-[8px]">
                <div className="w-[8px] h-[8px] rounded-full bg-[#3C2A21]" /> Navigation
              </h4>
              <ul className="space-y-[24px]">
                {['Home', 'About Us', 'Portfolios', 'Insights', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link 
                      to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} 
                      className="font-bold text-white/40 hover:text-white text-[18px] transition-all flex items-center gap-[12px] group"
                    >
                      <span className="w-0 group-hover:w-[12px] h-[2px] bg-[#3C2A21] overflow-hidden transition-all duration-300" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="lg:col-span-3 lg:col-start-10">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.3em] mb-[48px]">Get in Touch</h4>
              <p className="text-white/60 text-[16px] leading-[1.7] mb-[40px] font-medium">
                Connect directly with our advisors on WhatsApp for immediate assistance.
              </p>
              
              <a href="https://wa.me/6282239415718" target="_blank" rel="noreferrer" className="inline-flex bg-white text-[#000000] rounded-full px-[40px] py-[22px] text-[16px] font-bold items-center justify-center gap-[12px] hover:bg-[#3C2A21] hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-3xl w-full">
                Contact Advisor <ArrowUpRight size={20} />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-[64px] border-t border-white/5 gap-[40px] relative z-10">
            <div className="flex items-center gap-[12px]">
              <div className="w-[24px] h-[2px] bg-[#3C2A21]" />
              <p className="text-white/30 text-[14px] font-bold tracking-widest uppercase">
                © 2026 Nurlete Property
              </p>
            </div>

            <div className="flex items-center gap-[40px] text-white/30 text-[14px] font-bold uppercase tracking-widest">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
