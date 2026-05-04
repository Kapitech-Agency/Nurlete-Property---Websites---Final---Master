import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Target, Medal, HeartHandshake, UsersRound, Building, Compass, Sparkles } from 'lucide-react';

export default function AboutUs() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    let percentage = scrollLeft / maxScroll;
    percentage = Math.max(0, Math.min(1, Math.abs(percentage)));
    // Using timeline.length - 1 safely since timeline has 4 items
    const index = Math.round(percentage * 3);
    setActiveIndex(index);
  };

  const timeline = [
    { year: "Jan 2026", title: "The Inception", desc: "Nurlete Property was established by Firdaus Nurlete with a singular vision: to redefine luxury living in Ambon through uncompromising modern minimalist architecture and structural excellence." },
    { year: "Q1 2026", title: "Nava Terra Blueprint", desc: "Acquired prime real estate in the hills of Halong Atas. The architectural design phase commenced, focusing on eco-friendly materials and optimal airflow for tropical climates." },
    { year: "Q2 2026", title: "Groundbreaking", desc: "Official construction of Nava Terra begins. Setting new standards for robust coral rock foundations and premium 60x60 granite finishes in the local real estate market." },
    { year: "Future", title: "Beyond Residential", desc: "Expanding the Nurlete Property portfolio to include integrated smart homes and exclusive boutique commercial spaces across eastern Indonesia." }
  ];

  const leaders = [
    { name: "Firdaus Nurlete", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" },
    { name: "Elena Rostova", role: "Chief Architect", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" },
    { name: "Marcus Chen", role: "Head of Development", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" }
  ];

  const values = [
    { icon: <Target size={32} />, title: "Visionary Design", desc: "We look beyond immediate trends. Our architecture is designed to stand the test of time, marrying airy minimalist aesthetics with future-proof functionality." },
    { icon: <Medal size={32} />, title: "Quality First", desc: "From coral rock foundations to 60x60 granite flooring, we enforce rigorous quality control to guarantee absolute perfection in every project." },
    { icon: <HeartHandshake size={32} />, title: "Integrity", desc: "Transparency and honesty form the core of our operations. We deliver exactly what we promise, on time, and to the highest standard." },
    { icon: <UsersRound size={32} />, title: "Customer Focus", desc: "Our residents and investors are at the heart of our decisions. We build not just physical spaces, but thriving, comfortable communities." }
  ];

  return (
    <div className="pt-[160px] pb-0 w-full z-10 bg-[#F5F4F0] font-['Inter']">
      
      {/* Hero Section */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] md:mb-[160px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[50vh] md:h-[60vh] min-h-[400px] md:min-h-[500px] rounded-[32px] md:rounded-[48px] overflow-hidden border border-[#1A1A1A]/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.1)] flex items-center justify-center text-center p-[24px] md:p-[64px] w-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
            alt="Architect working" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 sepia-[0.1]"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/40 backdrop-blur-[2px]" />
          
          <div className="relative z-10 max-w-3xl w-full">
            <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-[32px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] min-h-[44px]">
              <span className="w-[8px] h-[8px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className="text-white font-['Inter'] text-[11px] font-bold uppercase tracking-[0.2em] leading-none">Our Story</span>
            </div>
            
            <h1 className="font-['Inter'] text-[36px] md:text-[52px] leading-[1.2] font-semibold text-white tracking-tight drop-shadow-xl mb-[24px]">
              Crafting Spaces,<br/>
              <span className="text-white/70">Defining Legacies</span>
            </h1>
            <p className="font-['Inter'] text-white/80 text-[15px] md:text-[16px] leading-[1.6] font-medium max-w-2xl mx-auto">
              We don't just build properties; we curate lifestyles. Discover the history, the people, and the unyielding values that drive Nurlete Property forward.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Expanded Mission & Heritage Narrative */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] md:mb-[160px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[80px] items-center">
          <div>
            <h2 className="font-['Inter'] text-[28px] md:text-[40px] leading-[1.2] font-semibold text-[#1A1A1A] tracking-tight mb-[24px]">Our Heritage & Mission</h2>
            <p className="font-['Inter'] text-[#1A1A1A]/70 text-[15px] md:text-[16px] leading-[1.6] font-medium mb-[24px]">
              Nurlete Property was born from a profound respect for the natural landscape of Ambon. Our mission is to elevate the local real estate standard by introducing uncompromising luxury, meticulous architectural planning, and sustainable construction practices.
            </p>
            <p className="font-['Inter'] text-[#1A1A1A]/70 text-[15px] md:text-[16px] leading-[1.6] font-medium">
              We bridge the gap between contemporary aesthetics and tropical practicality, ensuring every square meter we develop not only looks pristine but functions flawlessly in harmony with its environment.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[24px]">
             <div className="bg-white/60 backdrop-blur-md p-[32px] rounded-[32px] border border-[#1A1A1A]/[0.05] shadow-[0_16px_40px_rgba(0,0,0,0.02)] hover:-translate-y-2 transition-transform">
                <Compass className="text-[#1A1A1A] mb-[16px]" size={32} />
                <h4 className="font-bold text-[#1A1A1A] text-[18px] mb-[8px]">Vision</h4>
                <p className="text-[#1A1A1A]/60 text-[14px] font-medium leading-[1.5]">To be the premier standard of luxury housing in Eastern Indonesia.</p>
             </div>
             <div className="bg-white/60 backdrop-blur-md p-[32px] rounded-[32px] border border-[#1A1A1A]/[0.05] shadow-[0_16px_40px_rgba(0,0,0,0.02)] hover:-translate-y-2 transition-transform mt-[32px]">
                <Sparkles className="text-[#1A1A1A] mb-[16px]" size={32} />
                <h4 className="font-bold text-[#1A1A1A] text-[18px] mb-[8px]">Mission</h4>
                <p className="text-[#1A1A1A]/60 text-[14px] font-medium leading-[1.5]">Delivering unparalleled craftsmanship and modern serene living spaces.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Founder's Note / Mission */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] md:mb-[160px] w-full">
        <div className="bg-[#1A1A1A] text-white rounded-[32px] md:rounded-[48px] p-[32px] md:p-[64px] shadow-[0_32px_80px_rgba(26,26,26,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-[48px]">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
          <div className="w-full md:w-1/2 relative z-10">
            <h2 className="font-['Inter'] text-[28px] md:text-[40px] leading-[1.2] font-semibold mb-[32px]">A Fresh Vision for Real Estate</h2>
            <p className="font-['Inter'] text-white/70 text-[15px] md:text-[16px] leading-[1.6] font-medium mb-[24px]">
              "When Nurlete Property was founded in January 2026, the goal was never to be the biggest developer, but undeniably the best. We observed a market flooded with generic structures lacking soul and longevity."
            </p>
            <p className="font-['Inter'] text-white/70 text-[15px] md:text-[16px] leading-[1.6] font-medium mb-[40px]">
              "Our philosophy is rooted in the belief that architecture profoundly impacts human well-being. Every curve, every material choice, and every beam of natural light in Nava Terra is meticulously planned to elevate the everyday living experience."
            </p>
            <div className="flex items-center gap-[16px]">
              <div className="w-[48px] h-[48px] rounded-full bg-white/20 flex items-center justify-center font-['Inter'] text-[20px] font-bold text-white italic">F.N</div>
              <div>
                <span className="block font-['Inter'] text-[16px] font-bold text-white leading-[1.2]">Firdaus Nurlete</span>
                <span className="block font-['Inter'] text-[14px] text-white/50 leading-[1.5]">Founder & CEO</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative z-10 aspect-square rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/20">
             <img src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Architectural Blueprint" className="w-full h-full object-cover grayscale opacity-80" />
          </div>
        </div>
      </section>

      {/* Our Journey (Horizontal Timeline) */}
      <section className="mb-[120px] md:mb-[160px] overflow-hidden relative">
        <div className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[48px] md:mb-[64px] flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
          <div>
            <h2 className="font-['Inter'] text-[28px] md:text-[40px] leading-[1.2] font-semibold text-[#1A1A1A] tracking-tight mb-[16px]">Our Journey</h2>
            <p className="font-['Inter'] text-[#1A1A1A]/50 text-[15px] md:text-[16px] leading-[1.6] font-medium max-w-xl">A timeline of uncompromising dedication to luxury development, mapped out horizontally for continuous growth.</p>
          </div>
          <div className="hidden md:flex items-center gap-[12px] text-[#1A1A1A]/40 font-semibold text-[13px] uppercase tracking-wider">
            <span className="w-[40px] h-[1px] bg-[#1A1A1A]/20"></span>
            Drag or scroll to explore
          </div>
        </div>

        <div className="w-full relative px-[20px] md:px-[80px]">
          {/* Timeline Track Line */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[20px] md:left-[80px] right-0 h-[2px] bg-gradient-to-r from-[#1A1A1A]/10 via-[#1A1A1A]/10 to-transparent pointer-events-none z-0 hidden md:block"></div>

          <div 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
            className={`flex gap-[24px] md:gap-[40px] overflow-x-auto pb-[40px] pt-[20px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden relative z-10 ${
              isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'
            }`}
          >
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                className="min-w-[320px] md:min-w-[440px] snap-center bg-white/80 backdrop-blur-[40px] border border-[#1A1A1A]/[0.08] rounded-[32px] p-[32px] md:p-[48px] shadow-[0_24px_64px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,1)] hover:bg-white hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(0,0,0,0.08)] transition-all duration-500 group relative select-none"
              >
                <div className="absolute top-[32px] md:top-[48px] right-[32px] md:right-[48px] w-[48px] h-[48px] rounded-full bg-[#F5F4F0] border border-[#1A1A1A]/5 flex items-center justify-center text-[#1A1A1A]/30 group-hover:text-[#1A1A1A] group-hover:bg-[#1A1A1A]/5 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                  <Building size={20} className="group-hover:scale-110 transition-transform" />
                </div>
                
                {/* Visual Node */}
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-[20px] w-[40px] h-[40px] items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#1A1A1A] shadow-[0_0_0_4px_rgba(26,26,26,0.1)]"></div>
                </div>

                <span className="font-['Inter'] text-[#1A1A1A]/40 font-bold text-[14px] leading-[1.5] mb-[20px] tracking-[0.2em] uppercase bg-[#1A1A1A]/5 inline-block px-[12px] py-[6px] rounded-full pointer-events-none">{item.year}</span>
                <h3 className="font-['Inter'] text-[22px] md:text-[26px] leading-[1.3] font-semibold text-[#1A1A1A] mb-[16px] group-hover:translate-x-2 transition-transform duration-300 pointer-events-none">{item.title}</h3>
                <p className="font-['Inter'] text-[#1A1A1A]/60 text-[15px] md:text-[16px] leading-[1.6] font-medium pointer-events-none">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-[8px] mt-[8px]">
            {timeline.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!scrollRef.current) return;
                  const container = scrollRef.current;
                  const childWidth = container.scrollWidth / timeline.length;
                  container.scrollTo({ left: childWidth * idx, behavior: 'smooth' });
                  setActiveIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx 
                    ? 'w-[32px] h-[8px] bg-[#1A1A1A]' 
                    : 'w-[8px] h-[8px] bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] md:mb-[160px]">
        <div className="text-center mb-[64px] md:mb-[96px]">
          <h2 className="font-['Inter'] text-[28px] md:text-[40px] leading-[1.2] font-semibold text-[#1A1A1A] tracking-tight mb-[16px]">Core Values</h2>
          <p className="font-['Inter'] text-[#1A1A1A]/50 text-[15px] md:text-[16px] leading-[1.6] font-medium">The principles that guide every brick we lay.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] w-full">
          {values.map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full bg-white/60 backdrop-blur-[40px] border border-[#1A1A1A]/[0.05] rounded-[32px] p-[32px] md:p-[40px] shadow-[0_16px_40px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)] hover:-translate-y-2 hover:bg-white transition-all duration-300 group"
            >
              <div className="w-[56px] h-[56px] rounded-[20px] bg-[#1A1A1A] text-white flex items-center justify-center mb-[32px] shadow-[0_8px_16px_rgba(26,26,26,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h4 className="font-['Inter'] text-[20px] leading-[1.3] font-semibold text-[#1A1A1A] mb-[16px]">{value.title}</h4>
              <p className="font-['Inter'] text-[#1A1A1A]/60 text-[15px] leading-[1.6] font-medium">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
