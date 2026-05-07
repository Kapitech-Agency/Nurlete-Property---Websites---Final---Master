import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Map, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NavaTerraOverview() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [500, 1500], [0, 200]);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#000000]">
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

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-[20px] md:px-[80px] pt-[120px] pb-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] items-center">
          
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-[12px] px-[20px] py-[10px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-[40px]"
            >
              <span className="text-white font-bold uppercase tracking-[0.3em] text-[11px]">Flagship Project</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] font-semibold text-white tracking-tight mb-[40px]"
            >
              Nava Terra.<br/>
              <span className="text-white/40">Thoughtful Living.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/70 text-[18px] md:text-[22px] leading-[1.6] font-medium max-w-2xl mb-[56px]"
            >
              Located in Halong Atas, this cluster offers premium residences designed for lasting value. Featuring floor-to-ceiling windows, robust coral rock foundations, and excellent views of Ambon Bay.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[32px] mb-[64px]">
              <div className="flex flex-col gap-[12px]">
                <ShieldCheck className="text-white" size={28} />
                <span className="text-white font-bold text-[18px]">Solid Foundation</span>
                <p className="text-white/40 text-[14px]">Built on secure, natural rock.</p>
              </div>
              <div className="flex flex-col gap-[12px]">
                <Map className="text-white" size={28} />
                <span className="text-white font-bold text-[18px]">Prime Location</span>
                <p className="text-white/40 text-[14px]">Elevated views in Halong.</p>
              </div>
              <div className="flex flex-col gap-[12px]">
                <Maximize className="text-white" size={28} />
                <span className="text-white font-bold text-[18px]">Open Layouts</span>
                <p className="text-white/40 text-[14px]">Optimized for natural airflow.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              style={{ y: y1 }}
              className="w-full max-w-md bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[48px] p-[48px] shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-white text-[32px] font-semibold mb-[24px]">Discover the Cluster.</h3>
                <p className="text-white/60 text-[16px] leading-[1.7] mb-[40px]">
                  Nava Terra is a limited collection of quality homes. Review the masterplan and secure your preferred location today.
                </p>
                <Link 
                  to="/project/nava-terra" 
                  className="w-full inline-flex items-center justify-center gap-[12px] bg-white text-[#000000] px-[32px] py-[20px] rounded-full font-bold text-[16px] hover:bg-[#F5F4F0] hover:text-[#000000] transition-all shadow-xl group"
                >
                  Explore Nava Terra <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
