import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HardHat, Waves, Droplet } from 'lucide-react';

const assuranceData = [
  { value: "Premium", label: "Materials", desc: "Selected for long-term durability and aesthetic value.", icon: <HardHat size={24} /> },
  { value: "Design", label: "Focus", desc: "Optimized for natural cross-ventilation and light.", icon: <Waves size={24} /> },
  { value: "Structural", label: "Integrity", desc: "Engineered for stability and safety in the Halong terrain.", icon: <ShieldCheck size={24} /> }
];

export function AbsoluteAssurance() {
  return (
    <section className="relative z-10 py-[140px] md:py-[180px] bg-[#000000] text-white">
      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[80px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] lg:gap-[120px] items-center">
          <div className="lg:col-span-6">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight mb-[32px]">
              Quality Construction. <br/>
              <span className="text-white/30">Reliable Execution.</span>
            </h2>
            <p className="text-white/60 text-[18px] md:text-[21px] leading-[1.7] font-medium max-w-xl mb-[56px]">
              Nurlete Property builds with a straightforward objective: lasting value. Our construction process prioritizes reliable materials, structural validation, and careful engineering to ensure each property stands the test of time.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
              {assuranceData.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-[20px] p-[32px] rounded-[32px] bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 group">
                  <div className="w-[56px] h-[56px] rounded-[20px] bg-white/10 flex items-center justify-center group-hover:bg-black/5 group-hover:text-black transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-[12px] mb-[8px]">
                      <span className="font-bold text-[28px] tracking-tight">{item.value}</span>
                      <span className="font-semibold opacity-60 text-[14px] uppercase tracking-widest">{item.label}</span>
                    </div>
                    <p className="opacity-50 text-[14px] leading-[1.5] max-w-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-[48px] overflow-hidden border border-white/10 shadow-3xl aspect-[4/3] group/img">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Architectural Assurance" 
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-[4s]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-[40px] left-[40px] right-[40px] bg-white/10 backdrop-blur-3xl border border-white/20 p-[32px] rounded-[32px] flex items-center justify-between">
                <div>
                  <span className="block text-white/50 font-bold text-[11px] uppercase tracking-[0.2em] mb-[4px]">Construction Standard</span>
                  <span className="block text-white font-bold text-[22px]">Validated Process</span>
                </div>
                <div className="w-[64px] h-[64px] rounded-full bg-white flex items-center justify-center text-[#000000] shadow-xl">
                  <ShieldCheck size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
