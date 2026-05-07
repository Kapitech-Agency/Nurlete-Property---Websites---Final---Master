import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight, Home, MapPin, Maximize, Play, PlayCircle, X, Sparkles, ChevronLeft, Bed, Bath, Square } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Experience } from '../components/home/Experience';

export default function NavaTerraDetail() {
  const [playingVideo, setPlayingVideo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const units = [
    {
      type: "Type 55",
      size: "55m² Build / 100m² Land",
      rooms: "2 Bed • 1 Bath • 1 Carport",
      desc: "An ideal choice for modern living, featuring an efficient layout, high-quality materials, and practical spaces.",
      link: "/project/nava-terra/unit/55",
      image: "https://images.unsplash.com/photo-1600573472594-8ceb1137c4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specs: { bed: 2, bath: 1, area: "55m²" }
    },
    {
      type: "Type 75",
      size: "75m² Build / 112m² Land",
      rooms: "3 Bed • 2 Bath • 2 Carport",
      desc: "Our premium offering. A spacious layout with floor-to-ceiling glass and high-grade specifications throughout.",
      link: "/project/nava-terra/unit/75",
      image: "https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specs: { bed: 3, bath: 2, area: "75m²" }
    }
  ];

  const facilities = [
    "One-Gate Security", 
    "Solid Foundation", 
    "Private Clubhouse", 
    "Green Park Area",
    "Premium Paving",
    "24/7 Security"
  ];

  return (
    <div className="w-full bg-[#F5F4F0] font-sans relative min-h-screen">
      
      {/* 1. Immersive Hero Section - Wide and Balanced */}
      <section ref={targetRef} className="relative h-[100vh] min-h-[700px] w-full overflow-hidden flex items-end pb-[100px] md:pb-[140px]">
        <motion.div style={{ scale: scaleHeroImage }} className="absolute inset-0 z-0 origin-bottom">
          <img src={images[0]} alt="Nava Terra Facade" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent opacity-95" />
        </motion.div>

        <motion.div style={{ y: yHeroText, opacity: opacityHeroText }} className="relative z-10 px-[20px] md:px-[80px] max-w-[1600px] mx-auto w-full text-white">
          <div className="flex items-center gap-[12px] mb-[40px] overflow-x-auto hide-scrollbar">
            <Link to="/" className="text-white/60 hover:text-white font-bold text-[11px] tracking-widest uppercase transition-colors whitespace-nowrap min-h-[44px] flex items-center">Home</Link>
            <ChevronRight size={14} className="text-white/40 shrink-0" />
            <Link to="/portfolios" className="text-white/60 hover:text-white font-bold text-[11px] tracking-widest uppercase transition-colors whitespace-nowrap min-h-[44px] flex items-center">Portfolios</Link>
            <ChevronRight size={14} className="text-white/40 shrink-0" />
            <span className="text-white font-bold text-[11px] tracking-widest uppercase whitespace-nowrap">Nava Terra</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-[40px] md:gap-[80px]">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-[8px] px-[18px] py-[10px] rounded-full bg-[#3C2A21] border border-white/20 mb-[32px] shadow-2xl">
                <Sparkles size={16} className="text-white animate-pulse" />
                <span className="text-white font-bold uppercase tracking-[0.2em] text-[11px]">Premium Cluster</span>
              </div>
              <h1 className="text-[56px] md:text-[80px] lg:text-[96px] leading-[0.95] font-semibold tracking-tight text-white mb-[24px]">
                Nava Terra.
              </h1>
              <p className="text-white/80 text-[20px] md:text-[24px] leading-[1.6] font-medium flex items-center gap-[12px]">
                <MapPin size={24} className="text-[#3C2A21]" /> Premium Halong Location
              </p>
            </div>
            
            <div className="shrink-0 flex items-center gap-[32px]">
              <button 
                onClick={() => setPlayingVideo(true)}
                className="flex items-center gap-[20px] group transition-all"
              >
                <div className="w-[80px] h-[80px] rounded-full bg-white text-[#3C2A21] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-3xl">
                  <Play size={28} className="ml-1" />
                </div>
                <span className="font-bold text-[13px] uppercase tracking-[0.3em] text-white group-hover:text-[#3C2A21] transition-colors leading-relaxed">View Concept <br/>Video</span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Interactive Image Carousel Section */}
      <section className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto py-[80px] md:py-[120px]">
        <div className="mb-[40px] flex justify-between items-end">
          <div>
            <h2 className="text-[32px] md:text-[48px] font-semibold tracking-tight text-[#000000]">Visual Exploration.</h2>
            <p className="text-[#000000]/60 font-medium text-[18px] mt-[8px]">Swipe through our high-density renders.</p>
          </div>
          <div className="hidden md:flex items-center gap-[16px]">
            <button onClick={prevImage} className="w-[56px] h-[56px] rounded-full bg-white border border-[#000000]/10 flex items-center justify-center hover:bg-[#3C2A21] hover:text-white transition-all shadow-md">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextImage} className="w-[56px] h-[56px] rounded-full bg-white border border-[#000000]/10 flex items-center justify-center hover:bg-[#3C2A21] hover:text-white transition-all shadow-md">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[48px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.1)] group">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              alt="Nava Terra"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 flex items-center justify-between px-[20px] md:hidden">
            <button onClick={prevImage} className="w-[48px] h-[48px] rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all shadow-xl">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextImage} className="w-[48px] h-[48px] rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all shadow-xl">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 flex items-center gap-[8px] bg-[#000000]/50 backdrop-blur-md px-[16px] py-[8px] rounded-full">
            {images.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-[8px] h-[8px] rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-[24px]' : 'bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Analysis Grid - Wide Layout */}
      <section className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto py-[80px] md:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] lg:gap-[120px]">
          
          <div className="lg:col-span-12 mb-[0px] md:mb-[48px]">
             <div className="w-[80px] h-[6px] bg-[#3C2A21] mb-[40px]" />
             <h2 className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-semibold tracking-tight text-[#000000] max-w-4xl">
              Premium Location & <br/> Thoughtful Design.
             </h2>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-[32px] text-[#000000]/70 text-[18px] md:text-[20px] leading-[1.8] font-medium">
              <p>
                Situated in the sought-after area of Halong Atas, Nava Terra offers exceptional stability. Every unit is built on deep coral rock, ensuring long-term structural integrity and peace of mind.
              </p>
              <p>
                Our design approach prioritizes open layouts and natural airflow. We leverage the Ambon Bay breeze to provide comfortable, naturally cooled living spaces.
              </p>
            </div>
            
            <div className="mt-[64px] flex flex-wrap gap-[12px]">
              {facilities.map((fac, idx) => (
                <div key={idx} className="bg-white px-[24px] py-[14px] rounded-full border border-[#3C2A21]/15 text-[#000000] font-bold text-[14px] shadow-sm hover:bg-[#3C2A21] hover:text-white transition-all cursor-default">
                  {fac}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-[24px]">
            <div className="col-span-2 aspect-[21/9] rounded-[48px] overflow-hidden shadow-2xl border border-[#3C2A21]/10 group">
              <img src={images[1]} alt="Interior Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]" />
            </div>
            <div className="col-span-1 aspect-square rounded-[48px] bg-[#000000] p-[32px] md:p-[48px] flex flex-col justify-between text-white shadow-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3C2A21]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-[64px] h-[64px] rounded-full bg-white/10 flex items-center justify-center"><Home size={32} /></div>
              <div>
                <span className="block text-[48px] md:text-[84px] font-semibold leading-none tracking-tighter mb-[8px]">84</span>
                <span className="block font-bold text-[13px] md:text-[15px] uppercase tracking-[0.3em] text-[white]/70">Premium Units</span>
              </div>
            </div>
            <div className="aspect-square rounded-[48px] overflow-hidden shadow-2xl border border-[#3C2A21]/10 group">
              <img src={images[2]} alt="Materiality Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]" />
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Experience Component */}
      <Experience />

      {/* Building Specifications */}
      <section className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto py-[80px] md:py-[120px]">
        <div className="bg-[#000000] text-white rounded-[48px] p-[40px] md:p-[80px] shadow-3xl">
          <div className="mb-[64px]">
            <h2 className="text-[32px] md:text-[56px] leading-[1.1] font-semibold tracking-tight text-white mb-[24px]">Building Specifications.</h2>
            <p className="text-white/60 text-[18px] md:text-[20px] font-medium max-w-3xl">The materials and features that define the Nava Terra standard.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
            <div className="border-t border-white/20 pt-[24px]">
              <span className="block text-white/40 font-bold text-[12px] uppercase tracking-widest mb-[12px]">Foundation</span>
              <h4 className="text-[20px] font-bold text-white mb-[12px]">Deep Coral Rock</h4>
              <p className="text-white/60 text-[15px] leading-[1.6]">Engineered for seismic resilience and maximum load stability in the Halong topography.</p>
            </div>
            <div className="border-t border-white/20 pt-[24px]">
              <span className="block text-white/40 font-bold text-[12px] uppercase tracking-widest mb-[12px]">Flooring Matrix</span>
              <h4 className="text-[20px] font-bold text-white mb-[12px]">60x60 Granite</h4>
              <p className="text-white/60 text-[15px] leading-[1.6]">High-density surface finish chosen for cooling properties and premium aesthetic friction.</p>
            </div>
            <div className="border-t border-white/20 pt-[24px]">
              <span className="block text-white/40 font-bold text-[12px] uppercase tracking-widest mb-[12px]">Framing</span>
              <h4 className="text-[20px] font-bold text-white mb-[12px]">Light-Gauge Steel</h4>
              <p className="text-white/60 text-[15px] leading-[1.6]">Anti-corrosive structural framing ensuring precision, longevity, and roof integrity.</p>
            </div>
            <div className="border-t border-white/20 pt-[24px]">
              <span className="block text-white/40 font-bold text-[12px] uppercase tracking-widest mb-[12px]">Fenestration</span>
              <h4 className="text-[20px] font-bold text-white mb-[12px]">Aluminum Over-Size</h4>
              <p className="text-white/60 text-[15px] leading-[1.6]">Expansive cut-outs framed in minimalist black aluminum to maximize photon intake.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Available Nodes - Wide Density */}
      <section className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto py-[120px] md:py-[180px]">
        <div className="text-center mb-[80px]">
          <h2 className="text-[40px] md:text-[72px] leading-[1] font-semibold tracking-tight text-[#000000] mb-[24px]">View Available Units.</h2>
          <p className="text-[#000000]/60 text-[18px] md:text-[20px] font-medium max-w-2xl mx-auto">Specifically designed for discerning homeowners and investors.</p>
        </div>

        <div className="grid grid-cols-1 gap-[48px]">
          {units.map((unit, idx) => (
            <div key={idx} className="bg-white rounded-[40px] md:rounded-[64px] p-[24px] md:p-[48px] border border-[#3C2A21]/15 shadow-[0_24px_48px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row gap-[48px] lg:items-center group hover:-translate-y-2 transition-all duration-700 hover:shadow-[0_48px_96px_rgba(0,0,0,0.06)]">
              
              <div className="w-full lg:w-[50%] shrink-0 aspect-[16/10] rounded-[32px] md:rounded-[40px] overflow-hidden relative shadow-inner">
                <img src={unit.image} alt={unit.type} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]" />
                <div className="absolute top-[24px] right-[24px] bg-white/90 backdrop-blur-md px-[24px] py-[12px] rounded-full font-bold text-[14px] text-[#000000] shadow-2xl">
                  {unit.size}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-[12px] md:gap-[24px] mb-[32px]">
                  <div className="flex items-center gap-[8px] bg-[#F5F4F0] px-[16px] py-[10px] rounded-full">
                    <Bed size={18} className="text-[#3C2A21]" />
                    <span className="font-bold text-[#000000]/60 text-[13px] uppercase tracking-widest">{unit.specs.bed} Beds</span>
                  </div>
                  <div className="flex items-center gap-[8px] bg-[#F5F4F0] px-[16px] py-[10px] rounded-full">
                    <Bath size={18} className="text-[#3C2A21]" />
                    <span className="font-bold text-[#000000]/60 text-[13px] uppercase tracking-widest">{unit.specs.bath} Baths</span>
                  </div>
                  <div className="flex items-center gap-[8px] bg-[#F5F4F0] px-[16px] py-[10px] rounded-full">
                    <Square size={18} className="text-[#3C2A21]" />
                    <span className="font-bold text-[#000000]/60 text-[13px] uppercase tracking-widest">{unit.specs.area}</span>
                  </div>
                </div>
                
                <h3 className="text-[32px] md:text-[48px] lg:text-[52px] leading-[1.1] font-semibold tracking-tight text-[#000000] mb-[24px]">{unit.type}</h3>
                <p className="text-[#000000]/60 text-[18px] md:text-[20px] leading-[1.7] font-medium mb-[48px] max-w-xl">
                  {unit.desc}
                </p>
                <Link to={unit.link} className="inline-flex items-center justify-center gap-[16px] bg-[#000000] text-white rounded-full px-[48px] py-[24px] font-bold text-[18px] shadow-3xl hover:bg-[#3C2A21] active:scale-[0.98] transition-all group/btn">
                  View Property Details <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Neighborhood Context */}
      <section className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto pb-[120px] md:pb-[180px]">
        <div className="bg-[#F5F4F0] border-t border-[#3C2A21]/15 pt-[80px]">
          <div className="flex flex-col lg:flex-row justify-between gap-[64px]">
            <div className="lg:w-1/3">
              <h2 className="text-[32px] md:text-[48px] leading-[1.1] font-semibold tracking-tight text-[#000000] mb-[24px]">
                The Halong <br/> Infrastructure.
              </h2>
              <p className="text-[#000000]/60 text-[18px] font-medium leading-[1.7]">
                Located in the premium corridor of Halong Atas, Nava Terra provides immediate proximity to the city's key infrastructural and leisure nodes.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
              <div>
                <span className="block text-[#3C2A21] font-bold text-[14px] uppercase tracking-widest mb-[16px] border-b border-[#3C2A21]/20 pb-[16px]">Transport & Logistics</span>
                <ul className="space-y-[12px] mt-[16px]">
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>Pattimura Airport</span> <span className="font-bold text-[#000000]">35 Mins</span></li>
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>JMP Bridge Node</span> <span className="font-bold text-[#000000]">10 Mins</span></li>
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>Ambon City Center</span> <span className="font-bold text-[#000000]">15 Mins</span></li>
                </ul>
              </div>
              <div>
                <span className="block text-[#3C2A21] font-bold text-[14px] uppercase tracking-widest mb-[16px] border-b border-[#3C2A21]/20 pb-[16px]">Leisure & Retail</span>
                <ul className="space-y-[12px] mt-[16px]">
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>MCM (Maluku City Mall)</span> <span className="font-bold text-[#000000]">12 Mins</span></li>
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>Lateri Beach Node</span> <span className="font-bold text-[#000000]">8 Mins</span></li>
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>ACC (Ambon City Center)</span> <span className="font-bold text-[#000000]">15 Mins</span></li>
                </ul>
              </div>
              <div>
                <span className="block text-[#3C2A21] font-bold text-[14px] uppercase tracking-widest mb-[16px] border-b border-[#3C2A21]/20 pb-[16px]">Education & Health</span>
                <ul className="space-y-[12px] mt-[16px]">
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>Dian Harapan School</span> <span className="font-bold text-[#000000]">15 Mins</span></li>
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>Bhayangkara Hospital</span> <span className="font-bold text-[#000000]">20 Mins</span></li>
                </ul>
              </div>
              <div>
                <span className="block text-[#3C2A21] font-bold text-[14px] uppercase tracking-widest mb-[16px] border-b border-[#3C2A21]/20 pb-[16px]">Neighborhood Profiling</span>
                <p className="text-[#000000]/70 text-[15px] leading-[1.6] mt-[16px]">
                  Halong Atas is classified as a low-density, high-elevation zone. Excellent air quality indices and zero flood risk. Highly recommended for long-term hold and luxury leasing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Growth CTA */}
      <section className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto pb-[120px] md:pb-[180px]">
        <div className="bg-[#000000] text-white rounded-[48px] md:rounded-[64px] p-[48px] md:p-[120px] shadow-3xl relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
          <div className="relative z-10 w-full max-w-4xl">
            <h2 className="text-[44px] md:text-[72px] lg:text-[84px] leading-[1] font-semibold tracking-tight mb-[32px]">Secure Your Home.</h2>
            <p className="text-white/60 text-[18px] md:text-[24px] leading-[1.6] font-medium mb-[64px] max-w-2xl mx-auto">
              Nava Terra units are limited. Connect with our advisors today to discuss availability and schedule a private viewing.
            </p>
            <div className="flex flex-col sm:flex-row gap-[24px] items-center justify-center">
              <a href="https://wa.me/6282239415718" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-[12px] bg-[#25D366] text-white px-[48px] py-[24px] rounded-full font-bold text-[18px] shadow-[0_24px_48px_rgba(37,211,102,0.3)] hover:scale-105 transition-all">
                 Consult via WhatsApp <ArrowRight size={24} />
              </a>
              <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-[12px] bg-white text-[#000000] px-[48px] py-[24px] rounded-full font-bold text-[18px] shadow-2xl hover:bg-[#3C2A21] hover:text-white transition-all">
                Request Prospectus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#000000]/90 backdrop-blur-3xl flex justify-center items-center p-[20px]"
          >
            <button 
              onClick={() => setPlayingVideo(false)}
              className="absolute top-[40px] right-[40px] text-white hover:text-white/70 transition-colors bg-white/10 p-4 rounded-full"
            >
              <X size={32} strokeWidth={2} />
            </button>
            <div className="w-full max-w-6xl aspect-video bg-[#000000] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-[0_64px_128px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col items-center justify-center text-white/40">
               <PlayCircle size={80} className="mb-6 opacity-20" />
               <p className="font-bold text-[14px] md:text-[18px] uppercase tracking-[0.4em] text-center px-4">Concept Video Not Available</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
