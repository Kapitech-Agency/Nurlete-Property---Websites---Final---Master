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
      desc: "Our balanced offering. A practical layout with large windows and reliable specifications throughout.",
      link: "/project/nava-terra/unit/75",
      image: "https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specs: { bed: 3, bath: 2, area: "75m²" }
    }
  ];

  const facilities = [
    "One-Gate Security", 
    "Solid Foundation", 
    "Public Area", 
    "Green Park Area",
    "Paving Blocks",
    "24/7 Security"
  ];

  return (
    <div className="w-full bg-[#F5F4F0] font-sans relative min-h-screen">
      
      {/* 1. Immersive Hero Section - Wide and Balanced */}
      <section ref={targetRef} className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-end pb-24 md:pb-32 lg:pb-36">
        <motion.div style={{ scale: scaleHeroImage }} className="absolute inset-0 z-0 origin-bottom">
          <img src={images[0]} alt="Nava Terra Facade" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent opacity-95" />
        </motion.div>

        <motion.div style={{ y: yHeroText, opacity: opacityHeroText }} className="relative z-10 w-full text-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-10 overflow-x-auto hide-scrollbar">
            <Link to="/" className="text-white/60 hover:text-white font-bold text-[11px] tracking-widest uppercase transition-colors whitespace-nowrap min-h-[44px] flex items-center">Home</Link>
            <ChevronRight size={14} className="text-white/40 shrink-0" />
            <Link to="/portfolios" className="text-white/60 hover:text-white font-bold text-[11px] tracking-widest uppercase transition-colors whitespace-nowrap min-h-[44px] flex items-center">Portfolios</Link>
            <ChevronRight size={14} className="text-white/40 shrink-0" />
            <span className="text-white font-bold text-[11px] tracking-widest uppercase whitespace-nowrap">Nava Terra</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 md:gap-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-[#3C2A21] border border-white/20 mb-8 shadow-2xl">
                <Sparkles size={16} className="text-white animate-pulse" />
                <span className="text-white font-bold uppercase tracking-[0.2em] text-[11px]">Quality Cluster</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] font-semibold tracking-tight text-white mb-6">
                Nava Terra.
              </h1>
              <p className="text-white/80 text-xl md:text-2xl leading-[1.6] font-medium flex items-center gap-3">
                <MapPin size={24} className="text-[#3C2A21]" /> Accessible Halong Location
              </p>
            </div>
            
            <div className="shrink-0 flex items-center gap-8">
              <button 
                onClick={() => setPlayingVideo(true)}
                className="flex items-center gap-5 group transition-all"
              >
                <div className="w-20 h-20 rounded-full bg-white text-[#3C2A21] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-3xl">
                  <Play size={28} className="ml-1" />
                </div>
                <span className="font-bold text-[13px] uppercase tracking-[0.3em] text-white group-hover:text-[#3C2A21] transition-colors leading-relaxed">View Concept <br/>Video</span>
              </button>
            </div>
          </div>
          </div>
        </motion.div>
      </section>

      {/* Interactive Image Carousel Section */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#000000]">Visual Exploration.</h2>
            <p className="text-[#000000]/60 font-medium text-lg mt-2">Swipe through our high-quality renders.</p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button onClick={prevImage} className="w-14 h-14 rounded-full bg-white border border-[#000000]/10 flex items-center justify-center hover:bg-[#3C2A21] hover:text-white transition-all shadow-md">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextImage} className="w-14 h-14 rounded-full bg-white border border-[#000000]/10 flex items-center justify-center hover:bg-[#3C2A21] hover:text-white transition-all shadow-md">
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
          
          <div className="absolute inset-0 flex items-center justify-between px-5 md:hidden">
            <button onClick={prevImage} className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all shadow-xl">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextImage} className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all shadow-xl">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#000000]/50 backdrop-blur-md px-4 py-2 rounded-full">
            {images.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* 2. Analysis Grid - Wide Layout */}
      <section className="w-full py-20 md:py-31">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-30">
          
          <div className="lg:col-span-12 mb-0 md:mb-12">
             <div className="w-20 h-1.5 bg-[#3C2A21] mb-10" />
             <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-semibold tracking-tight text-[#000000] max-w-4xl">
              Safe Location & <br/> Practical Design.
             </h2>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-8 text-[#000000]/70 text-lg md:text-xl leading-[1.8] font-medium">
              <p>
                Situated in the sought-after area of Halong Atas, Nava Terra offers exceptional stability. Every unit is built on deep coral rock, ensuring long-term structural integrity and peace of mind.
              </p>
              <p>
                Our design approach prioritizes open layouts and natural airflow. We leverage the Ambon Bay breeze to provide comfortable, naturally cooled living spaces.
              </p>
            </div>
            
            <div className="mt-16 flex flex-wrap gap-3">
              {facilities.map((fac, idx) => (
                <div key={idx} className="bg-white px-6 py-3.5 rounded-full border border-[#3C2A21]/15 text-[#000000] font-bold text-sm shadow-sm hover:bg-[#3C2A21] hover:text-white transition-all cursor-default">
                  {fac}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-6">
            <div className="col-span-2 aspect-[21/9] rounded-[48px] overflow-hidden shadow-2xl border border-[#3C2A21]/10 group">
              <img src={images[1]} alt="Interior Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]" />
            </div>
            <div className="col-span-1 aspect-square rounded-[48px] bg-[#000000] p-8 md:p-12 lg:p-14 flex flex-col justify-between text-white shadow-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3C2A21]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center"><Home size={32} /></div>
              <div>
                <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold leading-none tracking-tighter mb-2">84</span>
                <span className="block font-bold text-[13px] md:text-[15px] uppercase tracking-[0.3em] text-[white]/70">Quality Units</span>
              </div>
            </div>
            <div className="aspect-square rounded-[48px] overflow-hidden shadow-2xl border border-[#3C2A21]/10 group">
              <img src={images[2]} alt="Materiality Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]" />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Flagship Experience Component */}
      <Experience />

      {/* Building Specifications */}
      <section className="w-full py-20 md:py-31">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-[#000000] text-white rounded-[48px] p-10 md:p-20 lg:p-24 shadow-3xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.1] font-semibold tracking-tight text-white mb-6">Building Specifications.</h2>
            <p className="text-white/60 text-lg md:text-xl font-medium max-w-3xl">The materials and features that define the Nava Terra standard.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="border-t border-white/20 pt-6">
              <span className="block text-white/40 font-bold text-[12px] uppercase tracking-widest mb-3">Foundation</span>
              <h4 className="text-xl font-bold text-white mb-3">Deep Coral Rock</h4>
              <p className="text-white/60 text-[15px] leading-[1.6]">Engineered for seismic resilience and maximum load stability in the Halong topography.</p>
            </div>
            <div className="border-t border-white/20 pt-6">
              <span className="block text-white/40 font-bold text-[12px] uppercase tracking-widest mb-3">Flooring Matrix</span>
              <h4 className="text-xl font-bold text-white mb-3">60x60 Granite</h4>
              <p className="text-white/60 text-[15px] leading-[1.6]">High-density surface finish chosen for cooling properties and high-quality aesthetic finish.</p>
            </div>
            <div className="border-t border-white/20 pt-6">
              <span className="block text-white/40 font-bold text-[12px] uppercase tracking-widest mb-3">Framing</span>
              <h4 className="text-xl font-bold text-white mb-3">Light-Gauge Steel</h4>
              <p className="text-white/60 text-[15px] leading-[1.6]">Anti-corrosive structural framing ensuring precision, longevity, and roof integrity.</p>
            </div>
            <div className="border-t border-white/20 pt-6">
              <span className="block text-white/40 font-bold text-[12px] uppercase tracking-widest mb-3">Fenestration</span>
              <h4 className="text-xl font-bold text-white mb-3">Aluminum Over-Size</h4>
              <p className="text-white/60 text-[15px] leading-[1.6]">Expansive cut-outs framed in minimalist black aluminum to maximize photon intake.</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* 3. Available Nodes - Wide Density */}
      <section className="w-full py-30 md:py-45">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl lg:text-8xl leading-[1] font-semibold tracking-tight text-[#000000] mb-6">View Available Units.</h2>
          <p className="text-[#000000]/60 text-lg md:text-xl font-medium max-w-2xl mx-auto">Specifically designed for discerning homeowners and families.</p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {units.map((unit, idx) => (
            <div key={idx} className="bg-white rounded-[40px] md:rounded-[64px] p-6 md:p-12 lg:p-14 border border-[#3C2A21]/15 shadow-[0_24px_48px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row gap-12 lg:items-center group hover:-translate-y-2 transition-all duration-700 hover:shadow-[0_48px_96px_rgba(0,0,0,0.06)]">
              
              <div className="w-full lg:w-[50%] shrink-0 aspect-[16/10] rounded-[32px] md:rounded-[40px] overflow-hidden relative shadow-inner">
                <img src={unit.image} alt={unit.type} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full font-bold text-sm text-[#000000] shadow-2xl">
                  {unit.size}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-8">
                  <div className="flex items-center gap-2 bg-[#F5F4F0] px-4 py-2.5 rounded-full">
                    <Bed size={18} className="text-[#3C2A21]" />
                    <span className="font-bold text-[#000000]/60 text-[13px] uppercase tracking-widest">{unit.specs.bed} Beds</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F5F4F0] px-4 py-2.5 rounded-full">
                    <Bath size={18} className="text-[#3C2A21]" />
                    <span className="font-bold text-[#000000]/60 text-[13px] uppercase tracking-widest">{unit.specs.bath} Baths</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F5F4F0] px-4 py-2.5 rounded-full">
                    <Square size={18} className="text-[#3C2A21]" />
                    <span className="font-bold text-[#000000]/60 text-[13px] uppercase tracking-widest">{unit.specs.area}</span>
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-5xl lg:text-6xl leading-[1.1] font-semibold tracking-tight text-[#000000] mb-6">{unit.type}</h3>
                <p className="text-[#000000]/60 text-lg md:text-xl leading-[1.7] font-medium mb-12 max-w-xl">
                  {unit.desc}
                </p>
                <Link to={unit.link} className="inline-flex items-center justify-center gap-4 bg-[#000000] text-white rounded-full px-12 py-6 font-bold text-lg shadow-3xl hover:bg-[#3C2A21] active:scale-[0.98] transition-all group/btn">
                  View Property Details <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Neighborhood Context */}
      <section className="w-full pb-30 md:pb-45">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-[#F5F4F0] border-t border-[#3C2A21]/15 pt-20">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl leading-[1.1] font-semibold tracking-tight text-[#000000] mb-6">
                The Halong <br/> Infrastructure.
              </h2>
              <p className="text-[#000000]/60 text-lg font-medium leading-[1.7]">
                Located in the strategic corridor of Halong Atas, Nava Terra provides immediate proximity to the city's key infrastructural and leisure nodes.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <span className="block text-[#3C2A21] font-bold text-sm uppercase tracking-widest mb-4 border-b border-[#3C2A21]/20 pb-4">Transport & Logistics</span>
                <ul className="space-y-3 mt-4">
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>Pattimura Airport</span> <span className="font-bold text-[#000000]">35 Mins</span></li>
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>JMP Bridge Node</span> <span className="font-bold text-[#000000]">10 Mins</span></li>
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>Ambon City Center</span> <span className="font-bold text-[#000000]">15 Mins</span></li>
                </ul>
              </div>
              <div>
                <span className="block text-[#3C2A21] font-bold text-sm uppercase tracking-widest mb-4 border-b border-[#3C2A21]/20 pb-4">Leisure & Retail</span>
                <ul className="space-y-3 mt-4">
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>MCM (Maluku City Mall)</span> <span className="font-bold text-[#000000]">12 Mins</span></li>
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>Lateri Beach Node</span> <span className="font-bold text-[#000000]">8 Mins</span></li>
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>ACC (Ambon City Center)</span> <span className="font-bold text-[#000000]">15 Mins</span></li>
                </ul>
              </div>
              <div>
                <span className="block text-[#3C2A21] font-bold text-sm uppercase tracking-widest mb-4 border-b border-[#3C2A21]/20 pb-4">Education & Health</span>
                <ul className="space-y-3 mt-4">
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>Dian Harapan School</span> <span className="font-bold text-[#000000]">15 Mins</span></li>
                   <li className="text-[#000000]/80 font-medium flex justify-between"><span>Bhayangkara Hospital</span> <span className="font-bold text-[#000000]">20 Mins</span></li>
                </ul>
              </div>
              <div>
                <span className="block text-[#3C2A21] font-bold text-sm uppercase tracking-widest mb-4 border-b border-[#3C2A21]/20 pb-4">Neighborhood Context</span>
                <p className="text-[#000000]/70 text-[15px] leading-[1.6] mt-4">
                  Halong Atas is a high-elevation zone with zero flood risk. Highly recommended for families seeking a secure and healthy environment.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* 4. Strategic Growth CTA */}
      <section className="w-full pb-30 md:pb-45">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-[#000000] text-white rounded-[48px] md:rounded-[64px] p-12 md:p-30 lg:p-36 shadow-3xl relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
          <div className="relative z-10 w-full max-w-4xl">
            <h2 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1] font-semibold tracking-tight mb-8">Secure Your Home.</h2>
            <p className="text-white/60 text-lg md:text-2xl leading-[1.6] font-medium mb-16 max-w-2xl mx-auto">
              Nava Terra units are limited. Connect with our advisors today to discuss availability and schedule a private viewing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
              <a href="https://wa.me/6282239415718" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-12 py-6 rounded-full font-bold text-lg shadow-[0_24px_48px_rgba(37,211,102,0.3)] hover:scale-105 transition-all">
                 Consult via WhatsApp <ArrowRight size={24} />
              </a>
              <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#000000] px-12 py-6 rounded-full font-bold text-lg shadow-2xl hover:bg-[#3C2A21] hover:text-white transition-all">
                Request Prospectus
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#000000]/90 backdrop-blur-3xl flex justify-center items-center p-5"
          >
            <button 
              onClick={() => setPlayingVideo(false)}
              className="absolute top-10 right-10 text-white hover:text-white/70 transition-colors bg-white/10 p-4 rounded-full"
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
