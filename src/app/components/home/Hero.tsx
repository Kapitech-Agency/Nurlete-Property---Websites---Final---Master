import React from 'react';
import { Search, MapPin, Building2, Wallet, ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section id="home" className="relative min-h-[110vh] pt-[160px] pb-[120px] flex items-center z-10 font-sans bg-[#F5F4F0]">
      <div className="max-w-[1600px] mx-auto w-full px-[20px] md:px-[80px] grid grid-cols-1 lg:grid-cols-12 gap-[64px] lg:gap-[96px] items-center">
        
        {/* Left Content */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-[32px] lg:col-span-6 mt-[64px] lg:mt-0 z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-white border border-[#3C2A21]/20 mb-[32px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] min-h-[44px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#3C2A21] animate-pulse" />
              <span className="text-[#3C2A21] font-bold uppercase tracking-[0.2em] text-[11px] leading-none">Premium Real Estate Developer</span>
            </div>
            
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-semibold text-[#000000] tracking-tight">
              Modern Design.<br />
              <span className="text-[#000000]/40">Exceptional Living.</span>
            </h1>
            
            <p className="text-[#000000]/60 mt-[24px] max-w-xl text-[clamp(1.125rem,2vw,1.25rem)] leading-[1.6] font-medium">
              Nurlete Property develops high-quality real estate in Maluku. We build modern, functional homes designed for long-term value, focusing on structural integrity and thoughtful site planning.
            </p>

            <div className="mt-[48px] flex flex-col sm:flex-row gap-[16px]">
              <Link to="/contact" className="flex items-center justify-center gap-3 bg-[#000000] text-white rounded-full px-10 py-5 min-h-[4rem] font-bold text-[1.125rem] shadow-[0_1rem_2rem_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                Contact an Advisor <ArrowRight size={20} />
              </Link>
              <Link to="/project/nava-terra" className="flex items-center justify-center gap-3 bg-white border border-[#000000]/10 text-[#000000] rounded-full px-10 py-5 min-h-[4rem] font-bold text-[1.125rem] hover:bg-[#F5F4F0] transition-all shadow-sm">
                View Nava Terra
              </Link>
            </div>
          </motion.div>

          {/* Smart Action Glass Module */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full bg-white border border-[#000000]/5 p-[16px] rounded-[32px] flex flex-col sm:flex-row flex-wrap gap-[16px] shadow-[0_24px_48px_rgba(0,0,0,0.02)] mt-[32px]"
          >
            <Link 
              to="/insights"
              className="flex-1 min-w-[180px] min-h-[64px] flex items-center bg-[#F5F4F0]/50 hover:bg-[#F5F4F0] border border-transparent hover:border-[#000000]/5 rounded-[24px] px-[24px] py-[16px] transition-all cursor-pointer group active:scale-[0.98]"
            >
              <Wallet className="text-[#3C2A21] mr-[14px]" size={24} />
              <div className="flex flex-col">
                <span className="text-[#000000]/40 text-[10px] uppercase tracking-widest mb-[1px] font-bold">Investment</span>
                <span className="text-[#000000] text-[15px] font-bold">Market Reports</span>
              </div>
            </Link>

            <Link 
              to="/project/nava-terra"
              className="flex-1 min-w-[180px] min-h-[64px] flex items-center bg-[#F5F4F0]/50 hover:bg-[#F5F4F0] border border-transparent hover:border-[#000000]/5 rounded-[24px] px-[24px] py-[16px] transition-all cursor-pointer group active:scale-[0.98]"
            >
              <MapPin className="text-[#3C2A21] mr-[14px]" size={24} />
              <div className="flex flex-col">
                <span className="text-[#000000]/40 text-[10px] uppercase tracking-widest mb-[1px] font-bold">Location</span>
                <span className="text-[#000000] text-[15px] font-bold">Explore Masterplan</span>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image Content */}
        <motion.div 
          style={{ y: y1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 w-full h-full min-h-[400px] lg:min-h-[700px] lg:col-span-6"
        >
          {/* Main Cinematic Image Container */}
          <div className="absolute inset-0 rounded-[48px] md:rounded-[64px] overflow-hidden shadow-[0_48px_120px_rgba(0,0,0,0.15)] border border-[#3C2A21]/10">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
              alt="Elite Architecture - Nurlete 2026" 
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-[4s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3C2A21]/40 via-transparent to-transparent opacity-60" />
          </div>

          {/* Floating Property Feature Card */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[48px] left-[16px] md:-left-[64px] bg-white border border-[#3C2A21]/20 rounded-[40px] p-[24px] shadow-[0_32px_64px_rgba(0,0,0,0.1)] flex items-center gap-[20px] max-w-sm z-30"
          >
            <div className="w-[80px] h-[80px] rounded-[24px] overflow-hidden shrink-0 border border-[#3C2A21]/10">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Property Curation Detail" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-[6px] mb-[6px]">
                <Sparkles size={14} className="text-[#3C2A21]" />
                <span className="text-[#3C2A21] font-bold text-[10px] uppercase tracking-widest">Flagship Status</span>
              </div>
              <p className="text-[#000000] font-bold text-[18px] leading-[1.2] mb-[4px]">Nava Terra Cluster</p>
              <div className="flex gap-[8px] items-center">
                <span className="text-[#000000]/50 font-semibold text-[13px]">Halong Atas</span>
                <span className="w-[4px] h-[4px] rounded-full bg-[#3C2A21]/20" />
                <span className="text-[#3C2A21] text-[13px] font-bold underline underline-offset-4">View Project Details</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
