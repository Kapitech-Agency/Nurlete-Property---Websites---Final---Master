import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
 const location = useLocation();
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 return (
 <nav className="fixed top-6 left-0 right-0 z-50 px-[20px] md:px-[80px] flex justify-center w-full pointer-events-none font-sans">
 <div className="pointer-events-auto w-full max-w-[1600px] bg-[#F5F4F0]/70 backdrop-blur-[40px] border border-[#3C2A21]/20 rounded-[32px] px-[24px] py-[12px] flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.04),inset_0_1px_1px_0_rgba(255,255,255,0.8)] relative transition-all duration-500">
 
 <Link to="/" className="flex items-center gap-[12px] cursor-pointer z-10 group min-h-[44px] min-w-[44px]">
 <div className="w-[40px] h-[40px] rounded-[14px] bg-[#000000] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform">
 <span className="text-[#F5F4F0] font-bold font-sans text-lg leading-[1.5]">N</span>
 </div>
 <span className="font-semibold text-[16px] md:text-[18px] leading-[1.5] tracking-wide text-[#000000] group-hover:opacity-80 transition-opacity hidden sm:block">
 Nurlete Property
 </span>
 </Link>

 <div className="hidden md:flex items-center space-x-[32px] z-10">
 <Link to="/" className={`flex items-center min-h-[44px] min-w-[44px] text-[16px] leading-[1.5] font-medium transition-colors py-2 ${location.pathname === '/' ? 'text-[#000000]' : 'text-[#000000]/60 hover:text-[#000000]'}`}>Home</Link>
 <Link to="/about-us" className={`flex items-center min-h-[44px] min-w-[44px] text-[16px] leading-[1.5] font-medium transition-colors py-2 ${location.pathname === '/about-us' ? 'text-[#000000]' : 'text-[#000000]/60 hover:text-[#000000]'}`}>Our Story</Link>
 
 <div 
 className="relative h-full flex items-center"
 onMouseEnter={() => setIsDropdownOpen(true)}
 onMouseLeave={() => setIsDropdownOpen(false)}
 >
 <Link to="/portfolios" className={`flex items-center gap-[4px] min-h-[44px] min-w-[44px] text-[16px] leading-[1.5] font-medium transition-colors py-2 ${location.pathname.startsWith('/portfolio') || isDropdownOpen ? 'text-[#000000]' : 'text-[#000000]/60 hover:text-[#000000]'}`}>
 Portfolios <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-[#000000]' : ''}`} />
 </Link>
 <AnimatePresence>
 {isDropdownOpen && (
 <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-[8px] w-[320px] z-[100] pointer-events-auto"
                >
                  <div className="bg-[#F5F4F0]/95 backdrop-blur-[40px] border border-[#3C2A21]/20 rounded-[24px] shadow-[0_24px_48px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)] p-[8px] overflow-hidden">
                    <Link to="/project/nava-terra" onClick={() => setIsDropdownOpen(false)} className="flex items-start px-[16px] py-[12px] min-h-[44px] text-[#000000]/80 hover:bg-[#3C2A21]/5 hover:text-[#3C2A21] rounded-[16px] transition-all group/link active:scale-95 w-full">
                      <Home size={20} className="mr-[12px] mt-[2px] text-[#000000]/40 group-hover/link:text-[#3C2A21] transition-colors shrink-0" />
                      <div className="flex flex-col w-full">
                        <span className="text-[16px] leading-[1.5] font-semibold">Nava Terra</span>
                        <span className="text-[14px] leading-[1.5] text-[#000000]/50 font-medium">Premium Cluster</span>
                      </div>
                    </Link>
                  </div>
                </motion.div>
 )}
 </AnimatePresence>
 </div>
 
 <Link to="/insights" className={`flex items-center min-h-[44px] min-w-[44px] text-[16px] leading-[1.5] font-medium transition-colors py-2 ${location.pathname === '/insights' ? 'text-[#000000]' : 'text-[#000000]/60 hover:text-[#000000]'}`}>Insights</Link>
 <Link to="/book-private-tour" className={`flex items-center min-h-[44px] min-w-[44px] text-[16px] leading-[1.5] font-medium transition-colors py-2 ${location.pathname === '/book-private-tour' ? 'text-[#000000]' : 'text-[#000000]/60 hover:text-[#000000]'}`}>Contact</Link>
 </div>

 <div className="relative hidden md:block z-10">
 <div className="absolute -inset-1 bg-[#3C2A21]/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
 <a href="https://wa.me/628000000000" target="_blank" rel="noreferrer" className="relative group overflow-hidden rounded-full bg-[#3C2A21] px-[24px] py-[12px] shadow-[0_8px_24px_rgba(60,42,33,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(60,42,33,0.4)] hover:bg-[#3C2A21] hover:scale-[1.02] active:scale-[0.98] inline-flex items-center min-h-[44px] min-w-[44px]">
 <span className="relative z-10 text-white text-[16px] leading-[1.5] font-bold tracking-wide">Contact Sales</span>
 <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full opacity-50" />
 </a>
 </div>

 <button className="md:hidden text-[#000000] z-10 bg-[#000000]/5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-[#3C2A21]/20 active:scale-95 transition-transform pointer-events-auto" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
 </button>
 </div>

 <AnimatePresence>
 {isMobileMenuOpen && (
 <motion.div 
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -20 }}
 className="absolute top-[96px] left-[20px] right-[20px] bg-[#F5F4F0]/95 backdrop-blur-[40px] border border-[#3C2A21]/20 rounded-[32px] p-[24px] shadow-[0_24px_48px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)] pointer-events-auto z-[100]"
 >
 <div className="flex flex-col space-y-[8px] w-full">
 <Link to="/" className="w-full text-[#000000] text-[18px] leading-[1.5] font-semibold px-[16px] py-[12px] min-h-[44px] flex items-center hover:bg-[#000000]/5 rounded-[16px] active:scale-95 transition-transform" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
 <Link to="/about-us" className="w-full text-[#000000] text-[18px] leading-[1.5] font-semibold px-[16px] py-[12px] min-h-[44px] flex items-center hover:bg-[#000000]/5 rounded-[16px] active:scale-95 transition-transform" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
 <Link to="/portfolios" className="w-full text-[#000000] text-[18px] leading-[1.5] font-semibold px-[16px] py-[12px] min-h-[44px] flex items-center hover:bg-[#000000]/5 rounded-[16px] active:scale-95 transition-transform" onClick={() => setIsMobileMenuOpen(false)}>Portfolios</Link>
 <Link to="/insights" className="w-full text-[#000000] text-[18px] leading-[1.5] font-semibold px-[16px] py-[12px] min-h-[44px] flex items-center hover:bg-[#000000]/5 rounded-[16px] active:scale-95 transition-transform" onClick={() => setIsMobileMenuOpen(false)}>Insights</Link>
 <Link to="/book-private-tour" className="w-full text-[#000000] text-[18px] leading-[1.5] font-semibold px-[16px] py-[12px] min-h-[44px] flex items-center hover:bg-[#000000]/5 rounded-[16px] active:scale-95 transition-transform" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
 
 <a href="https://wa.me/628000000000" target="_blank" rel="noreferrer" className="w-full mt-[16px] bg-[#3C2A21] text-white rounded-full py-[16px] text-[18px] leading-[1.5] font-bold shadow-[0_8px_24px_rgba(60,42,33,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] active:scale-95 transition-transform relative overflow-hidden text-center flex items-center justify-center min-h-[56px] min-w-[44px]">
 Contact Sales
 <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full opacity-50" />
 </a>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </nav>
 );
}
