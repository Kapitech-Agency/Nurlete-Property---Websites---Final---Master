import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Target, Medal, HeartHandshake, UsersRound, Building, Compass, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

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
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    let percentage = scrollLeft / maxScroll;
    percentage = Math.max(0, Math.min(1, Math.abs(percentage)));
    const index = Math.round(percentage * 3);
    setActiveIndex(index);
  };

  const timeline = [
    { year: "Jan 2026", title: "Company Foundation", desc: "Nurlete Property was founded to provide value-driven housing solutions in Eastern Indonesia, focusing on quality cluster homes accessible to the middle class." },
    { year: "Feb 2026", title: "Project Initiation", desc: "We started our flagship Nava Terra cluster in Halong Atas, chosen for its safety, accessibility, and solid ground." },
    { year: "Mar 2026", title: "Construction Start", desc: "We committed to efficient building methods and practical layouts that maximize value for every homeowner." },
    { year: "Future 2026", title: "Community Building", desc: "Our focus remains on delivering high-quality, accessible cluster homes that serve the needs of local families." }
  ];

  const values = [
    { icon: <TrendingUp size={32} />, title: "Best Value", desc: "We specialize in homes that offer the best balance of quality and price, ensuring long-term security for families." },
    { icon: <ShieldCheck size={32} />, title: "Solid Safety", desc: "Every house is built with robust foundations and reliable materials, providing a safe environment for your community." },
    { icon: <Zap size={32} />, title: "Ready to Move", desc: "Our efficient systems mean we deliver homes on time, so you can start your new chapter without delay." },
    { icon: <Compass size={32} />, title: "Practical Living", desc: "We design every meter of space to be functional, ensuring our homes meet the real daily needs of modern living." }
  ];

  return (
    <div className="pt-24 pb-0 w-full z-10 bg-[#F5F4F0] font-sans">
      
      {/* Hero Section - Maximum Scale */}
      <section className="w-full mb-20 md:mb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[60vh] min-h-[500px] rounded-3xl md:rounded-[3rem] overflow-hidden border border-[#3C2A21]/20 shadow-[0_32px_80px_rgba(0,0,0,0.1)] flex items-center justify-center text-center p-8 md:px-16 lg:px-20 w-full"
          >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Quality Housing Vision" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#000000]/30 backdrop-blur-[1px]" />
          
          <div className="relative z-10 max-w-4xl w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] min-h-[44px]">
              <span className="w-2 h-2 rounded-full bg-[#3C2A21] animate-pulse" />
              <span className="text-white font-bold uppercase tracking-[0.2em] text-[11px]">Est. January 2026</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold text-white tracking-tight drop-shadow-2xl mb-6">
              Quality Homes.<br/>
              <span className="text-white/70">Value-Driven Living.</span>
            </h1>
            <p className="text-white/90 text-base md:text-lg lg:text-xl leading-[1.6] font-medium max-w-3xl mx-auto">
              Based in Maluku, Nurlete Property builds high-quality cluster homes for families who value safety, practical design, and incredible value.
            </p>
          </div>
        </motion.div>
        </div>
      </section>

      {/* Innovation Matrix */}
      <section className="w-full mb-20 md:mb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.05] font-semibold text-[#000000] tracking-tight mb-8">A New Standard of<br/>Accessible Housing</h2>
            <p className="text-[#000000]/70 text-lg md:text-xl leading-[1.7] font-medium mb-8">
              Established in January 2026, Nurlete Property was created to provide hard-working families with safe, modern, and high-quality cluster housing that doesn't break the bank.
            </p>
            <p className="text-[#000000]/70 text-lg md:text-xl leading-[1.7] font-medium">
              We focus on the essentials: strong foundations, smart layouts, and strategic locations that ensure your home is a reliable asset for years to come.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 md:p-10 lg:p-12 rounded-[2rem] border border-[#3C2A21]/10 shadow-[0_24px_48px_rgba(0,0,0,0.02)]">
              <Compass className="text-[#3C2A21] mb-6" size={40} />
              <h3 className="font-bold text-[#000000] text-[1.375rem] mb-3">Accessible Locations</h3>
              <p className="text-[#000000]/50 text-[15px] font-medium leading-[1.6]">We select sites that offer easy access to transport, schools, and markets.</p>
            </div>
            <div className="bg-[#3C2A21] text-white p-8 md:p-10 lg:p-12 rounded-[2rem] shadow-[0_32px_64px_rgba(60,42,33,0.2)]">
              <Sparkles className="text-white mb-6" size={40} />
              <h3 className="font-bold text-white text-[1.375rem] mb-3">Modern Comfort</h3>
              <p className="text-white/60 text-[15px] font-medium leading-[1.6]">Simple, elegant design that maximizes space for your family to grow.</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* CEO Narrative */}
      <section className="w-full mb-20 md:mb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-[#000000] text-white rounded-3xl md:rounded-[3rem] p-12 md:p-16 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
          <div className="w-full lg:w-[45%] relative z-10">
            <div className="w-20 h-[4px] bg-[#3C2A21] mb-10" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-semibold mb-10 tracking-tight">Focus on What Matters.</h2>
            <p className="text-white/70 text-lg md:text-xl lg:text-2xl leading-[1.8] font-medium mb-8">
              "When I founded Nurlete Property in January 2026, my goal was to bring quality housing to everyone. We cut out the unnecessary extras to focus on what families really need: a safe roof and a solid floor."
            </p>
            <p className="text-white/70 text-lg md:text-xl lg:text-2xl leading-[1.8] font-medium mb-12">
              "We serve the hard-working people of Ambon and beyond, providing accessible homes that don't compromise on building standards."
            </p>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-[#3C2A21] flex items-center justify-center font-bold text-2xl text-white shadow-xl">F.N</div>
              <div>
                <span className="block text-xl font-bold text-white">Firdaus Nurlete</span>
                <span className="block text-base text-white/50 font-medium">Founder & CEO</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[55%] relative z-10">
            <div className="aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Detail-oriented Construction" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Timeline width Wide scaling */}
      <section className="mb-20 md:mb-32 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl leading-[1.2] font-semibold text-[#000000] tracking-tight mb-4">Company Timeline</h2>
            <p className="text-[#000000]/50 text-lg font-medium">Key milestones in our development journey.</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[#000000]/30 font-bold text-[12px] uppercase tracking-widest bg-[#000000]/5 px-6 py-3 rounded-full border border-[#3C2A21]/10">
            Swipe to Navigate
          </div>
        </div>

        <div className="w-full relative px-4 md:px-8">
          <div 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
            className={`flex gap-10 overflow-x-auto pb-10 pt-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden relative z-10 ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                className="min-w-[300px] md:min-w-[480px] bg-white border border-[#3C2A21]/20 rounded-[2.5rem] p-12 shadow-[0_32px_64px_rgba(0,0,0,0.03)] hover:-translate-y-4 transition-all duration-500 group select-none"
              >
                <span className="inline-block px-4 py-2 bg-[#3C2A21]/5 text-[#3C2A21] font-bold text-[13px] tracking-widest uppercase rounded-full mb-8">{item.year}</span>
                <h3 className="text-3xl font-semibold text-[#000000] mb-5 tracking-tight">{item.title}</h3>
                <p className="text-[#000000]/60 text-base md:text-lg leading-[1.7] font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Values Grid - High Density Width */}
      <section className="w-full mb-20 md:mb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#000000] tracking-tight mb-6">Brand Values</h2>
            <p className="text-[#000000]/50 text-lg font-medium">The principles that guide our development process.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-[#3C2A21]/10 rounded-3xl p-10 shadow-[0_24px_48px_rgba(0,0,0,0.02)] hover:bg-[#3C2A21] group transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#3C2A21]/5 text-[#3C2A21] flex items-center justify-center mb-8 group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-semibold text-[#000000] group-hover:text-white mb-4 transition-colors">{value.title}</h4>
                <p className="text-[#000000]/50 group-hover:text-white/70 text-[15px] font-medium leading-[1.6] transition-colors">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Philosophy Section */}
      <section className="w-full mb-20 md:mb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-[#000000] text-white rounded-3xl md:rounded-[3rem] p-12 md:p-16 lg:p-20 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#3C2A21]/20 to-[#000000] pointer-events-none" />
            <div className="relative z-10 w-full max-w-4xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-semibold tracking-tight text-white mb-8">
                Our Philosophy: <br/> Purposeful Design.
              </h2>
              <p className="text-white/70 text-lg md:text-xl lg:text-2xl leading-[1.8] font-medium mb-12">
                We believe a home should elevate your daily life. By avoiding unnecessary ornamentation, we focus on spatial flow, natural light, and quality materials. Every element serves a practical purpose, creating comfortable and efficient environments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#1A1A1A] p-8 rounded-[2rem] border border-white/5 shadow-2xl">
                  <span className="block text-[3rem] font-bold text-white mb-2">01</span>
                  <h4 className="text-lg font-bold text-white mb-3">Light Mapping</h4>
                  <p className="text-white/50 text-[14px] leading-[1.6]">Calculating diurnal solar paths to maximize natural illumination while minimizing heat gain.</p>
                </div>
                <div className="bg-[#1A1A1A] p-8 rounded-[2rem] border border-white/5 shadow-2xl">
                  <span className="block text-[3rem] font-bold text-white mb-2">02</span>
                  <h4 className="text-lg font-bold text-white mb-3">Air Flow Matrix</h4>
                  <p className="text-white/50 text-[14px] leading-[1.6]">Strategically positioning apertures to create natural cross-ventilation, reducing reliance on artificial cooling.</p>
                </div>
                <div className="bg-[#1A1A1A] p-8 rounded-[2rem] border border-white/5 shadow-2xl">
                  <span className="block text-[3rem] font-bold text-white mb-2">03</span>
                  <h4 className="text-lg font-bold text-white mb-3">Material Honesty</h4>
                  <p className="text-white/50 text-[14px] leading-[1.6]">Utilizing exposed concretes, natural timber, and high-density glass to showcase raw structural beauty.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
