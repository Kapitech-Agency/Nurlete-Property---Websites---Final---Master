import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HardHat, Waves, Droplet } from 'lucide-react';

const assuranceData = [
  { value: "Trusted", label: "Materials", desc: "Solid building materials chosen for reliability and long-term use.", icon: <HardHat size={24} /> },
  { value: "Smart", label: "Design", desc: "Efficient layouts designed for comfortable family living.", icon: <Waves size={24} /> },
  { value: "Certified", label: "Safety", desc: "Strictly engineered for stability in the Halong area.", icon: <ShieldCheck size={24} /> }
];

export function AbsoluteAssurance() {
  return (
    <section className="relative z-10 py-24 md:py-32 bg-[#000000] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-8">
              Quality Construction. <br/>
              <span className="text-white/30">Reliable Execution.</span>
            </h2>
            <p className="text-white/60 text-base lg:text-lg leading-[1.7] font-medium max-w-xl mb-14">
              Nurlete Property builds with a straightforward objective: lasting value. Our construction process prioritizes reliable materials, structural validation, and careful engineering to ensure each property stands the test of time.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {assuranceData.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-5 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-black/5 group-hover:text-black transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-bold text-2xl tracking-tight">{item.value}</span>
                      <span className="font-semibold opacity-60 text-[14px] uppercase tracking-widest">{item.label}</span>
                    </div>
                    <p className="opacity-50 text-[14px] leading-[1.5] max-w-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-3xl md:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-3xl aspect-[4/3] group/img">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Architectural Assurance" 
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-[4s]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 bg-white/10 backdrop-blur-3xl border border-white/20 p-6 md:p-8 rounded-2xl md:rounded-3xl flex items-center justify-between">
                <div>
                  <span className="block text-white/50 font-bold text-[11px] uppercase tracking-[0.2em] mb-1">Construction Standard</span>
                  <span className="block text-white font-bold text-lg md:text-2xl">Validated Process</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#000000] shadow-xl">
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
