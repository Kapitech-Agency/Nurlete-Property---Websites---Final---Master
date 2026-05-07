import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles } from 'lucide-react';

export function CoreValues() {
 return (
 <section className="py-[120px] md:py-[160px] bg-[#F5F4F0] relative z-10 border-t border-[#000000]/[0.05]">
 <div className="max-w-[1600px] mx-auto px-[20px] md:px-[80px]">
 
 <div className="text-center mb-[80px]">
 <h2 className="font-sans text-[clamp(2rem,4vw,3.5rem)] font-semibold text-[#000000] tracking-tight mb-[24px]">
 Our Development Approach
 </h2>
 <p className="font-sans text-[#000000]/60 max-w-2xl mx-auto text-[18px] md:text-[20px] leading-[1.6] font-medium">
 Our approach focuses on practical design and lasting quality. We prioritize clear aesthetics and strong structural integrity in every project we build.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-[40px] lg:gap-[64px]">
 
 {/* Modern Design */}
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.8 }}
 className="bg-white rounded-[40px] md:rounded-[48px] p-[40px] md:p-[64px] lg:p-[80px] shadow-[0_24px_48px_rgba(0,0,0,0.03)] border border-[#3C2A21]/10 flex flex-col justify-center"
 >
 <div className="w-[64px] h-[64px] rounded-[24px] bg-[#3C2A21]/5 flex items-center justify-center mb-[48px] text-[#3C2A21]">
 <Sparkles size={32} />
 </div>
 <h3 className="font-sans text-[32px] md:text-[40px] font-semibold text-[#000000] mb-[24px] leading-[1.2] tracking-tight">
 Modern Design
 </h3>
 <p className="font-sans text-[#000000]/60 text-[16px] md:text-[18px] leading-[1.8] font-medium">
 We focus on the essentials of modern living. Utilizing clean lines, high-grade flooring, and expansive natural lighting, we create homes that feel spacious and well-considered.
 </p>
 </motion.div>

 {/* Structural Integrity */}
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="bg-[#000000] text-white rounded-[40px] md:rounded-[48px] p-[40px] md:p-[64px] lg:p-[80px] shadow-[0_32px_80px_rgba(0,0,0,0.15)] relative overflow-hidden flex flex-col justify-center group"
 >
 <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#3C2A21]/20 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

 <div className="w-[64px] h-[64px] rounded-[24px] bg-white/10 flex items-center justify-center mb-[48px] text-white relative z-10 transition-transform group-hover:scale-110">
 <Shield size={32} />
 </div>
 <h3 className="font-sans text-[32px] md:text-[40px] font-semibold text-white mb-[24px] leading-[1.2] relative z-10 tracking-tight">
 Stable Foundation
 </h3>
 <p className="font-sans text-white/60 text-[16px] md:text-[18px] leading-[1.8] font-medium relative z-10">
 A quality home requires a stable base. Our projects utilize deep coral rock foundations and solid steel frameworks to ensure long-term structural integrity and safety.
 </p>
 </motion.div>

 </div>
 </div>
 </section>
 );
}
