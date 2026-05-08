import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Map, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NavaTerraOverview() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [500, 1500], [0, 200]);

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-[#000000]">
      {/* Flagship Project - Natural Colors, No overlapping black top */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ scale: 1.1 }}
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
          alt="Nava Terra Flagship Project" 
          className="w-full h-full object-cover"
        />
        {/* Subtle vignette rather than heavy overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 w-full py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-10"
            >
              <span className="text-white font-bold uppercase tracking-[0.3em] text-[11px]">Flagship Project</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold text-white tracking-tight mb-10"
            >
              Nava Terra.<br/>
              <span className="text-white/40">Thoughtful Living.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/70 text-lg md:text-xl leading-[1.6] font-medium max-w-2xl mb-14"
            >
              Located in Halong Atas, this cluster offers quality residences designed for accessibility and value. Featuring practical layouts, robust foundations, and easy access to the city.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
              <div className="flex flex-col gap-3">
                <ShieldCheck className="text-white" size={28} />
                <span className="text-white font-bold text-lg">Safe Construction</span>
                <p className="text-white/40 text-[14px]">Built with reliable building standards.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Map className="text-white" size={28} />
                <span className="text-white font-bold text-lg">Good Location</span>
                <p className="text-white/40 text-[14px]">Accessible area in Halong.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Maximize className="text-white" size={28} />
                <span className="text-white font-bold text-lg">Smart Space</span>
                <p className="text-white/40 text-[14px]">Designed for daily efficiency.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              style={{ y: y1 }}
              className="w-full max-w-md bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-white text-3xl font-semibold mb-6">Discover the Cluster.</h3>
                <p className="text-white/60 text-base leading-[1.7] mb-10">
                  Nava Terra is a limited collection of quality homes. Review the masterplan and secure your preferred location today.
                </p>
                <Link 
                  to="/project/nava-terra" 
                  className="w-full inline-flex items-center justify-center gap-3 bg-white text-[#000000] px-8 py-5 rounded-full font-bold text-base hover:bg-[#F5F4F0] hover:text-[#000000] transition-all shadow-xl group min-h-[44px]"
                >
                  Explore Nava Terra <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
      </div>
    </section>
  );
}
