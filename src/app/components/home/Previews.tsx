import React from 'react';
import { ArrowRight, ShieldCheck, Diamond, LineChart, Cpu, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Previews() {
  return (
    <section className="py-[120px] md:py-[180px] relative z-10 border-t border-[#3C2A21]/10 bg-[#F5F4F0] overflow-hidden">
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[60%] h-[100%] pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-hero" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3C2A21" strokeWidth="0.5" strokeOpacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-hero)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F5F4F0]/80 to-[#F5F4F0]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[80px] w-full relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-[80px] lg:gap-[120px] items-center">
          
          <div className="flex-1 w-full lg:max-w-xl">
            <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-white border border-[#3C2A21]/20 mb-[32px] shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.03)] min-h-[44px]">
              <Sparkles size={14} className="text-[#3C2A21]" />
              <span className="text-[#3C2A21] font-bold uppercase tracking-[0.2em] text-[11px] leading-none">The Nurlete Advantage</span>
            </div>
            
            <h2 className="text-[#000000] text-[clamp(2.25rem,4vw,4rem)] leading-[1.05] font-semibold tracking-tight mb-[32px]">
              Elevating the <br/> Ambon Standard.
            </h2>
            
              <p className="text-[#000000]/60 text-[18px] md:text-[20px] leading-[1.7] font-medium mb-[48px]">
              We bridge the gap between visionary design and everyday functionality. Through rigorous attention to detail, premium materials, and a deep understanding of tropical climates, we create homes that appreciate in both value and comfort.
            </p>

            <Link to="/portfolios" className="inline-flex items-center justify-center gap-[12px] bg-[#000000] text-white px-[40px] py-[22px] rounded-full font-bold text-[18px] shadow-[0_24px_48px_rgba(0,0,0,0.2)] hover:bg-[#3C2A21] hover:scale-[1.02] active:scale-[0.98] transition-all group">
              Explore Our Properties <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
            {[
              { icon: <Diamond size={32} />, title: "Premium Materiality", desc: "Sourcing strictly high-grade 60x60 granite and structural steel elements." },
              { icon: <Cpu size={32} />, title: "Strategic Site Selection", desc: "Data-driven property acquisition based on infrastructure and urban growth trends." },
              { icon: <ShieldCheck size={32} />, title: "Coral Rock Base", desc: "Deep foundation technology ensuring maximum geological security in Ambon." },
              { icon: <LineChart size={32} />, title: "Asset Appreciation", desc: "Strategic terrain curation targeting 40%+ capital growth over 3 years." }
            ].map((adv, idx) => (
              <div key={idx} className="bg-white border border-[#3C2A21]/10 rounded-[40px] p-[40px] shadow-[0_24px_64px_rgba(0,0,0,0.02)] hover:-translate-y-3 transition-all duration-500 group">
                <div className="w-[64px] h-[64px] rounded-[24px] bg-[#3C2A21]/5 text-[#3C2A21] flex items-center justify-center mb-[32px] group-hover:bg-[#3C2A21] group-hover:text-white transition-all duration-500">
                  {adv.icon}
                </div>
                <h3 className="text-[#000000] text-[22px] font-semibold leading-[1.3] mb-[16px] tracking-tight">{adv.title}</h3>
                <p className="text-[#000000]/50 text-[15px] font-medium leading-[1.6]">{adv.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
