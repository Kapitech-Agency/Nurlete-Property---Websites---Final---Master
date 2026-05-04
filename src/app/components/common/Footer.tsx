import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="mt-24 md:mt-32 pb-6 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="bg-[#151619] rounded-[40px] text-white p-8 md:p-16 flex flex-col pt-12 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24 cursor-default">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 group mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#151619] font-bold text-xl">
                N
              </div>
              <span className="font-semibold text-xl tracking-tight">Nurlete Property</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm text-[15px]">
              Defining the future of luxury real estate through modern minimalist design, exceptional structural integrity, and visionary architecture like Nava Terra.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.004 3.23H5.078z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-white/40 mb-8 mt-2">Site Map</h4>
            <ul className="flex flex-col gap-5">
              <li><Link to="/" className="text-[15px] font-medium text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="text-[15px] font-medium text-white/70 hover:text-white transition-colors">Our Heritage</Link></li>
              <li><Link to="/portfolio" className="text-[15px] font-medium text-white/70 hover:text-white transition-colors">Portfolios</Link></li>
              <li><Link to="/book-private-tour" className="text-[15px] font-medium text-white/70 hover:text-white transition-colors">Contact Sales</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 lg:col-span-5">
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-white/40 mb-8 mt-2">Direct Inquiry</h4>
            <p className="text-[15px] text-white/70 leading-relaxed mb-6 max-w-sm">
              Connect with our VIP Concierge directly on WhatsApp for Nava Terra viewing appointments.
            </p>
            <a href="https://wa.me/628000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-white text-[#151619] hover:bg-white/90 hover:scale-[1.02] transition-all shadow-lg px-6 h-12 text-[15px] font-medium gap-2 max-w-max">
              Chat on WhatsApp <ArrowUpRight className="w-4 h-4 text-black/60" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-white/40">
          <p>© 2026 Nurlete Property. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
