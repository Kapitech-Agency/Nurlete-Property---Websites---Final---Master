import React from 'react';

const stats = [
  { value: "12", suffix: "+", label: "Years Experience" },
  { value: "45", suffix: "+", label: "Projects Completed" },
  { value: "1200", suffix: "+", label: "Happy Residents" },
  { value: "08", suffix: "", label: "Cities Nationwide" }
];

export function Stats() {
  return (
    <section className="relative z-10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Solid Black Horizontal Bar */}
        <div className="bg-black rounded-[40px] p-12 shadow-[0_32px_64px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.2)] relative overflow-hidden">
          
          <div className="absolute top-0 left-1/4 w-[50%] h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center relative group">
                {/* Dividers */}
                {idx !== 0 && <div className="hidden md:block absolute left-[-1rem] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/[0.15]" />}
                
                <div className="flex items-baseline gap-1 mb-2 transform group-hover:scale-105 transition-transform duration-300">
                  <span className="font-['Inter'] font-bold text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tighter drop-shadow-[0_4px_12px_rgba(255,255,255,0.2)]">
                    {stat.value}
                  </span>
                  <span className="font-['Inter'] font-bold text-white/80 text-3xl">{stat.suffix}</span>
                </div>
                <span className="font-['Inter'] text-white/50 uppercase tracking-widest text-[11px] font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
