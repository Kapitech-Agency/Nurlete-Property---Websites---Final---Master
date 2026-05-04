import React from 'react';
import { Search, MapPin, Building2, Wallet, ArrowRight, Play } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section id="home" className="relative min-h-[110vh] pt-[160px] pb-[120px] flex items-center z-10 font-['Inter'] bg-[#F5F4F0]">
      <div className="max-w-7xl mx-auto w-full px-[20px] md:px-[80px] grid grid-cols-1 lg:grid-cols-12 gap-[64px] lg:gap-[96px] items-center">
        
        {/* Left Content */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-[32px] lg:col-span-6 mt-[64px] lg:mt-0 z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-white/80 backdrop-blur-xl border border-[#1A1A1A]/10 mb-[32px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.03)] min-h-[44px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#1A1A1A] shadow-[0_0_8px_rgba(26,26,26,0.3)]" />
              <span className="text-[#1A1A1A]/80 font-bold uppercase tracking-[0.2em] text-[11px] leading-none">Premium Real Estate</span>
            </div>
            
            <h1 className="font-['Inter'] text-[36px] md:text-[56px] leading-[1.2] md:leading-[1.1] font-semibold text-[#1A1A1A] tracking-tight">
              Defining the Skyline <br className="hidden md:block" />
              <span className="text-[#1A1A1A]/40">of Modern Minimalist Living</span>
            </h1>
            
            <p className="text-[#1A1A1A]/60 mt-[24px] max-w-lg text-[15px] md:text-[16px] leading-[1.6] font-medium">
              Nurlete Property orchestrates the perfect balance between modern minimalist architecture and airy luxury. Explore Nava Terra, our signature cluster featuring deep charcoal and warm beige textures.
            </p>

            <div className="mt-[48px] flex flex-col sm:flex-row gap-[16px]">
              <a href="https://wa.me/6282239415718" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-[8px] bg-[#1A1A1A] text-[#F5F4F0] rounded-full px-[32px] py-[16px] min-h-[56px] font-bold text-[15px] shadow-[0_8px_24px_rgba(26,26,26,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                Contact Sales <ArrowRight size={20} />
              </a>
              <Link to="/project/nava-terra" className="flex items-center justify-center gap-[8px] bg-white/80 backdrop-blur-xl border border-[#1A1A1A]/10 text-[#1A1A1A] rounded-full px-[32px] py-[16px] min-h-[56px] font-bold text-[15px] shadow-[inset_0_1px_1px_rgba(255,255,255,1)] hover:bg-white transition-all">
                Discover Nava Terra
              </Link>
            </div>
          </motion.div>

          {/* Smart Action Glass Module */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full bg-white/80 backdrop-blur-[40px] border border-[#1A1A1A]/[0.05] p-[12px] rounded-[32px] flex flex-col sm:flex-row flex-wrap gap-[12px] shadow-[0_24px_48px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)] mt-[16px]"
          >
            <div 
              onClick={() => document.getElementById('experience-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex-1 min-w-[160px] min-h-[56px] flex items-center bg-white/50 hover:bg-white/80 border border-[#1A1A1A]/[0.05] rounded-[24px] px-[20px] py-[16px] transition-colors cursor-pointer group shadow-[inset_0_1px_1px_rgba(255,255,255,1)] active:scale-[0.98]"
            >
              <Wallet className="text-[#1A1A1A] mr-[12px] group-hover:scale-110 transition-transform" size={24} />
              <div className="flex flex-col">
                <span className="text-[#1A1A1A]/40 text-[11px] uppercase tracking-widest mb-[2px] font-bold">Finance</span>
                <span className="text-[#1A1A1A]/90 text-[14px] leading-[1.2] font-semibold">Mortgage Calculator</span>
              </div>
            </div>

            <div 
              onClick={() => document.getElementById('experience-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex-1 min-w-[160px] min-h-[56px] flex items-center bg-white/50 hover:bg-white/80 border border-[#1A1A1A]/[0.05] rounded-[24px] px-[20px] py-[16px] transition-colors cursor-pointer group shadow-[inset_0_1px_1px_rgba(255,255,255,1)] active:scale-[0.98]"
            >
              <MapPin className="text-[#1A1A1A] mr-[12px] group-hover:scale-110 transition-transform" size={24} />
              <div className="flex flex-col">
                <span className="text-[#1A1A1A]/40 text-[11px] uppercase tracking-widest mb-[2px] font-bold">Explore</span>
                <span className="text-[#1A1A1A]/90 text-[14px] leading-[1.2] font-semibold">Interactive Site Map</span>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Right Image Content */}
        <motion.div 
          style={{ y: y1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 w-full h-full min-h-[400px] lg:min-h-[640px] lg:col-span-6"
        >
          {/* Main Cinematic Image Container */}
          <div className="absolute inset-0 rounded-[48px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] border border-[#1A1A1A]/[0.05]">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
              alt="Cinematic Architecture" 
              className="object-cover w-full h-full grayscale sepia-[0.1] transform hover:scale-105 transition-transform duration-[3s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] rounded-[48px] pointer-events-none" />
          </div>

          {/* Floating Glass Property Card */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[32px] left-[16px] md:bottom-[48px] md:-left-[48px] bg-white/90 backdrop-blur-[40px] border border-[#1A1A1A]/[0.05] rounded-[32px] p-[16px] shadow-[0_24px_48px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)] flex items-center gap-[16px] max-w-xs z-30"
          >
            <div className="w-[64px] h-[64px] rounded-[20px] overflow-hidden shrink-0 border border-[#1A1A1A]/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
                alt="Property" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div>
              <p className="font-['Inter'] text-[#1A1A1A] font-semibold text-[15px] leading-[1.2] mb-[4px]">Nava Terra Cluster</p>
              <div className="flex gap-[8px] items-center">
                <span className="font-['Inter'] text-[#1A1A1A]/80 font-semibold text-[13px] leading-[1.5]">Jl. PHB Halong</span>
                <span className="w-[4px] h-[4px] rounded-full bg-[#1A1A1A]/30" />
                <span className="font-['Inter'] text-[#1A1A1A]/50 text-[12px] leading-[1.5] font-medium">Type 82</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
