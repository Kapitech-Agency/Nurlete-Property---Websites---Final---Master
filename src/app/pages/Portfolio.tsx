import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';

const projects = [
  { 
    id: "nava-terra", 
    title: "Nava Terra", 
    category: "Housing",
    categoryTag: "Premium Housing Cluster", 
    location: "Halong Atas, Ambon", 
    desc: "Modern tropical living with a breathtaking view of Ambon Bay. Built specifically for family harmony, growth, and unparalleled luxury minimalism.",
    img: "https://images.unsplash.com/photo-1766603636562-531bb3e1dda8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('filter');
    if (category && ['All', 'Housing', 'Future Developments'].includes(category)) {
      setFilter(category);
    }
  }, [location]);

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-[140px] pb-0 w-full z-10 bg-[#F5F4F0] font-sans min-h-screen">
      
      {/* Header & Filter Bar */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[64px] text-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-white/80 border border-[#1A1A1A]/[0.05] mb-[24px] shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.02)] min-h-[44px]"
        >
          <span className="w-[8px] h-[8px] rounded-full bg-[#1A1A1A] shadow-[0_0_8px_rgba(26,26,26,0.3)]" />
          <span className="text-[#1A1A1A] font-bold uppercase tracking-[0.2em] text-[11px] leading-none">Catalog</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-sans text-[36px] md:text-[64px] leading-tight font-semibold text-[#1A1A1A] tracking-tight mb-[32px]"
        >
          Our Signature Collection
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center bg-white/70 backdrop-blur-[40px] border border-[#1A1A1A]/[0.08] rounded-full p-[8px] shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] overflow-x-auto max-w-full hide-scrollbar"
        >
          {['All', 'Housing', 'Future Developments'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-[24px] py-[12px] min-h-[44px] rounded-full font-sans text-[14px] leading-normal font-bold transition-all whitespace-nowrap ${
                filter === cat 
                  ? 'bg-[#1A1A1A] text-white shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)]' 
                  : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Content-First Property Cards Grid */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] w-full min-h-[400px]">
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-[40px] w-full"
            >
              {filteredProjects.map((project, idx) => (
                <Link 
                  to={`/project/${project.id}`}
                  key={project.id} 
                  className="group relative w-full bg-white/60 backdrop-blur-[60px] border border-[#1A1A1A]/[0.08] rounded-[40px] p-[20px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] hover:shadow-[0_32px_80px_rgba(0,0,0,0.12)] transform hover:-translate-y-2 transition-all duration-500 block flex flex-col"
                >
                  {/* Inner Glass Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Image Section */}
                  <div className="w-full aspect-square overflow-hidden relative rounded-[28px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] mb-[32px]">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-[#1A1A1A]/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
                    
                    {/* Floating Status Tag */}
                    <div className="absolute top-[20px] left-[20px] bg-white/90 backdrop-blur-xl border border-white/20 rounded-full px-[16px] py-[8px] flex items-center gap-[8px] shadow-[0_8px_24px_rgba(0,0,0,0.15)] z-10 hover:scale-105 transition-transform">
                       <span className="w-[8px] h-[8px] rounded-full bg-[#25D366] shadow-[0_0_8px_rgba(37,211,102,0.8)] animate-pulse" />
                       <span className="text-[#1A1A1A] text-[11px] font-bold uppercase tracking-widest leading-none">Now Selling</span>
                    </div>

                    <div className="absolute bottom-[20px] left-[20px] right-[20px] flex justify-between items-end transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                      <div className="bg-white/20 backdrop-blur-md rounded-full px-[20px] py-[10px] text-white font-bold text-[14px] flex items-center gap-[8px] border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                        Explore <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Permanent Content Section Below Image */}
                  <div className="px-[12px] pb-[12px] flex flex-col flex-1 relative z-10">
                    <div className="flex flex-col items-start mb-[16px]">
                      <span className="font-sans text-[12px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 mb-[12px] block">
                        {project.categoryTag}
                      </span>
                      <h3 className="font-sans text-[28px] md:text-[36px] leading-[1.2] font-semibold text-[#1A1A1A] tracking-tight mb-[8px]">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center text-[#1A1A1A]/80 font-sans text-[15px] font-medium mb-[24px]">
                      <MapPin size={18} className="mr-[8px] shrink-0 text-[#1A1A1A]/40" /> {project.location}
                    </div>

                    <p className="font-sans text-[#1A1A1A]/60 text-[15px] leading-[1.6] mt-auto font-medium">
                      {project.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full py-[120px] text-center"
            >
              <div className="w-[80px] h-[80px] rounded-full bg-[#1A1A1A]/5 mx-auto mb-[24px] flex items-center justify-center border border-[#1A1A1A]/10">
                <span className="w-[12px] h-[12px] rounded-full bg-[#1A1A1A]/20" />
              </div>
              <h3 className="font-sans text-[24px] font-semibold text-[#1A1A1A] mb-[16px]">No projects found</h3>
              <p className="text-[#1A1A1A]/50 font-medium">There are currently no active listings in this category.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Global CTA */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] w-full">
        <div className="bg-[#1A1A1A] rounded-[40px] md:rounded-[48px] p-[40px] md:p-[64px] text-center relative overflow-hidden shadow-[0_32px_80px_rgba(26,26,26,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)]">
          <div className="absolute top-[-50%] left-[-10%] w-[60%] h-[150%] bg-gradient-to-r from-white/10 to-transparent rotate-12 pointer-events-none" />
          
          <h2 className="font-sans text-[32px] md:text-[48px] leading-[1.2] font-semibold text-white tracking-tight mb-[24px] relative z-10">
            Looking for something specific?
          </h2>
          <p className="font-sans text-white/60 text-[15px] md:text-[18px] leading-[1.6] font-medium max-w-2xl mx-auto mb-[48px] relative z-10">
            Our property consultants are ready to help you find the perfect minimalist luxury home or investment opportunity in Ambon.
          </p>
          <a href="https://wa.me/6282239415718" target="_blank" rel="noreferrer" className="inline-flex items-center gap-[12px] bg-[#25D366] text-white px-[32px] py-[20px] rounded-full font-sans font-bold text-[16px] shadow-[0_16px_32px_rgba(37,211,102,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all relative z-10 min-h-[56px]">
            Consult via WhatsApp <ArrowRight size={20} />
          </a>
        </div>
      </section>

    </div>
  );
}
