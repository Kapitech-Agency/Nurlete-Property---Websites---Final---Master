import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight, Home, MapPin, Maximize, Play, PlayCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NavaTerraDetail() {
  const [playingVideo, setPlayingVideo] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Parallax effects
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleHeroImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const images = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
  ];

  const units = [
    {
       type: "Type 55",
       size: "55m² Build / 100m² Land",
       rooms: "2 Bed • 1 Bath • 1 Carport",
       desc: "The perfect entry point into Nava Terra. Designed for young professionals and new families seeking an optimized, minimalist living space without compromising on luxury finishes.",
       link: "/project/nava-terra/unit/55",
       image: "https://images.unsplash.com/photo-1600573472594-8ceb1137c4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
       type: "Type 75",
       size: "75m² Build / 112m² Land",
       rooms: "3 Bed • 2 Bath • 2 Carport",
       desc: "Our flagship layout offering expansive living areas. Features an open-plan kitchen and a master suite with floor-to-ceiling windows overlooking tropical landscaping.",
       link: "/project/nava-terra/unit/75",
       image: "https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
  ];

  const facilities = [
    "One-Gate System 24/7", 
    "Underground Utilities", 
    "Clubhouse & Pool", 
    "Green Park & Playground",
    "Paving Block Streets",
    "CCTV Surveillance"
  ];

  return (
    <div className="w-full bg-[#F5F4F0] font-['Inter'] relative min-h-screen">
      
      {/* 1. Immersive Hero Section */}
      <section ref={targetRef} className="relative h-[100vh] min-h-[700px] w-full overflow-hidden flex items-end pb-[80px] md:pb-[120px]">
         <motion.div style={{ scale: scaleHeroImage }} className="absolute inset-0 z-0 origin-bottom">
           <img src={images[0]} alt="Nava Terra Facade" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent opacity-90" />
         </motion.div>

         <motion.div style={{ y: yHeroText, opacity: opacityHeroText }} className="relative z-10 px-[20px] md:px-[80px] max-w-7xl mx-auto w-full text-white selection:bg-white selection:text-[#1A1A1A]">
            <div className="flex items-center gap-[12px] mb-[32px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
               <Link to="/" className="text-white/60 hover:text-white font-medium text-[13px] tracking-wide transition-colors whitespace-nowrap min-h-[44px] flex items-center">Home</Link>
               <ChevronRight size={14} className="text-white/40 shrink-0" />
               <Link to="/portfolios" className="text-white/60 hover:text-white font-medium text-[13px] tracking-wide transition-colors whitespace-nowrap min-h-[44px] flex items-center">Portfolios</Link>
               <ChevronRight size={14} className="text-white/40 shrink-0" />
               <span className="text-white font-bold text-[13px] tracking-wide whitespace-nowrap">Nava Terra</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[40px] md:gap-[80px]">
               <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-[24px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                     <span className="w-[8px] h-[8px] rounded-full bg-[#EAB308] animate-pulse shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
                     <span className="text-white font-['Inter'] text-[11px] font-bold uppercase tracking-[0.2em] leading-none">Under Construction</span>
                  </div>
                  <h1 className="font-['Inter'] text-[56px] md:text-[80px] leading-[1.05] font-semibold tracking-tight text-white mb-[16px] drop-shadow-2xl">
                     Nava Terra
                  </h1>
                  <p className="font-['Inter'] text-white/80 text-[16px] md:text-[20px] leading-[1.6] font-medium flex items-center gap-[8px]">
                     <MapPin size={20} className="text-white/60" /> Halong Atas, Ambon, Maluku
                  </p>
               </div>
               
               <div className="shrink-0">
                  <button 
                    onClick={() => setPlayingVideo(true)}
                    className="flex items-center gap-[16px] group min-h-[44px] min-w-[44px]"
                    aria-label="Play Concept Video"
                  >
                     <div className="w-[64px] h-[64px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                        <Play size={24} className="ml-1" />
                     </div>
                     <span className="font-['Inter'] font-bold text-[14px] uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">Play Concept<br/>Video</span>
                  </button>
               </div>
            </div>
         </motion.div>
      </section>

      {/* 2. Project Story & Details Grid */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto py-[120px] md:py-[160px]">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] md:gap-[80px]">
            
            <div className="lg:col-span-5">
               <h2 className="font-['Inter'] text-[32px] md:text-[48px] leading-[1.2] font-semibold tracking-tight text-[#1A1A1A] mb-[32px]">
                  Where tropical nature meets minimalist perfection.
               </h2>
               <div className="space-y-[24px] font-['Inter'] text-[#1A1A1A]/70 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                  <p>
                     Situated in the elevated region of Halong Atas, Nava Terra is designed to offer a sanctuary above the bustling city. The development prioritizes profound integration with its surroundings, capturing sweeping bay views and continuous natural airflow.
                  </p>
                  <p>
                     Every unit is constructed upon deep coral rock foundations—a local necessity we have perfected—ensuring unparalleled structural integrity. Inside, premium 60x60 granite floors and soaring ceilings create an atmosphere of expansive, unpretentious luxury.
                  </p>
               </div>
               
               <div className="mt-[48px] flex flex-wrap gap-[16px]">
                  {facilities.map((fac, idx) => (
                    <div key={idx} className="bg-white px-[20px] py-[12px] rounded-full border border-[#1A1A1A]/10 text-[#1A1A1A]/80 font-bold text-[13px] shadow-sm">
                       {fac}
                    </div>
                  ))}
               </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-[16px] md:gap-[24px]">
               <div className="col-span-2 aspect-[16/9] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.05)] border border-[#1A1A1A]/[0.05]">
                  <img src={images[1]} alt="Interior Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
               </div>
               <div className="aspect-square rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.05)] border border-[#1A1A1A]/[0.05]">
                  <img src={images[2]} alt="Exterior Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
               </div>
               <div className="aspect-square rounded-[24px] md:rounded-[32px] bg-[#1A1A1A] p-[32px] md:p-[40px] flex flex-col justify-between text-white shadow-[0_24px_48px_rgba(26,26,26,0.1)] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Home size={32} className="text-white/40" />
                  <div>
                    <span className="block text-[40px] md:text-[56px] font-semibold leading-none tracking-tighter mb-[8px]">84</span>
                    <span className="block font-bold text-[14px] uppercase tracking-widest text-white/60">Exclusive Units</span>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* 3. Available Units */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto pb-[120px] md:pb-[160px]">
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px] mb-[64px] md:mb-[80px]">
            <div>
               <h2 className="font-['Inter'] text-[36px] md:text-[48px] leading-[1.2] font-semibold tracking-tight text-[#1A1A1A] mb-[16px]">Select Your Horizon</h2>
               <p className="font-['Inter'] text-[#1A1A1A]/60 text-[16px] leading-[1.6] font-medium max-w-lg">Two distinct layouts meticulously engineered for modern living, varying family sizes, and optimal comfort.</p>
            </div>
         </div>

         <div className="flex flex-col gap-[32px] md:gap-[48px]">
            {units.map((unit, idx) => (
              <div key={idx} className="bg-white rounded-[32px] md:rounded-[48px] p-[24px] md:p-[32px] border border-[#1A1A1A]/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,1)] flex flex-col lg:flex-row gap-[32px] md:gap-[48px] md:items-center group hover:shadow-[0_32px_80px_rgba(0,0,0,0.06)] transition-all duration-500">
                 
                 <div className="w-full lg:w-[45%] shrink-0 aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden relative shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]">
                    <img src={unit.image} alt={unit.type} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                    <div className="absolute top-[20px] right-[20px] bg-white/90 backdrop-blur-md px-[16px] py-[8px] rounded-full font-bold text-[13px] text-[#1A1A1A] shadow-md border border-black/5">
                      {unit.size}
                    </div>
                 </div>

                 <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-['Inter'] text-[32px] md:text-[40px] leading-[1.1] font-semibold tracking-tight text-[#1A1A1A] mb-[16px]">{unit.type}</h3>
                    <div className="flex items-center gap-[12px] mb-[24px]">
                       <Maximize size={18} className="text-[#1A1A1A]/40" />
                       <span className="font-['Inter'] font-bold text-[#1A1A1A]/80 text-[14px] md:text-[15px]">{unit.rooms}</span>
                    </div>
                    <p className="font-['Inter'] text-[#1A1A1A]/60 text-[15px] md:text-[16px] leading-[1.6] font-medium mb-[40px] max-w-xl">
                       {unit.desc}
                    </p>
                    <Link to={unit.link} className="inline-flex items-center justify-center gap-[12px] bg-[#1A1A1A] text-white rounded-full px-[32px] py-[16px] md:py-[20px] font-['Inter'] font-bold text-[15px] md:text-[16px] shadow-[0_16px_32px_rgba(26,26,26,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all w-full md:w-max min-h-[56px] min-w-[44px]">
                       Explore {unit.type} Details <ArrowRight size={18} />
                    </Link>
                 </div>

              </div>
            ))}
         </div>
      </section>

      {/* 4. Full Width CTA */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto pb-[120px] md:pb-[160px]">
         <div className="bg-[#1A1A1A] text-white rounded-[40px] md:rounded-[48px] p-[48px] md:p-[80px] shadow-[0_32px_80px_rgba(26,26,26,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-[48px] selection:bg-white selection:text-[#1A1A1A]">
            <div className="absolute top-0 right-0 w-[50%] h-[200%] md:h-full bg-gradient-to-l md:bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-full blur-[80px] md:blur-[120px] translate-x-1/4 -translate-y-1/2 md:translate-x-0 md:-translate-y-0" />
            <div className="relative z-10 w-full max-w-2xl text-center md:text-left">
               <h2 className="font-['Inter'] text-[36px] md:text-[56px] leading-[1.1] font-semibold tracking-tight mb-[24px]">Experience it yourself.</h2>
               <p className="font-['Inter'] text-white/70 text-[16px] md:text-[20px] leading-[1.6] font-medium mb-[40px] max-w-xl mx-auto md:mx-0">
                  Book a private tour with our sales director to walk the grounds and view the show units.
               </p>
               <div className="flex flex-col sm:flex-row gap-[16px] items-center justify-center md:justify-start">
                  <Link to="/book-private-tour" className="w-full sm:w-auto inline-flex justify-center items-center bg-white text-[#1A1A1A] rounded-full px-[32px] py-[20px] font-['Inter'] font-bold text-[16px] shadow-[0_16px_32px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 transition-all min-h-[56px] min-w-[44px]">
                     Schedule a Viewing
                  </Link>
                  <a href="https://wa.me/6282239415718" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex justify-center items-center bg-transparent border border-white/20 text-white hover:bg-white/10 rounded-full px-[32px] py-[20px] font-['Inter'] font-bold text-[16px] transition-all min-h-[56px] min-w-[44px]">
                     Contact Sales
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
         {playingVideo && (
            <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               className="fixed inset-0 z-[100] bg-[#1A1A1A]/95 backdrop-blur-xl flex justify-center items-center p-[20px] md:p-[80px]"
            >
               <button 
                 onClick={() => setPlayingVideo(false)}
                 className="absolute top-[40px] right-[40px] text-white/50 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                 aria-label="Close Video"
               >
                  <X size={40} strokeWidth={1.5} />
               </button>
               <div className="w-full max-w-5xl aspect-video bg-black rounded-[24px] overflow-hidden shadow-2xl relative border border-white/10">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30 p-[40px] text-center">
                    <PlayCircle size={64} className="mb-[24px] opacity-20" />
                    <p className="font-['Inter'] font-medium text-[16px]">Promotional Video Not Available in Preview Environment.</p>
                  </div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>

    </div>
  );
}
