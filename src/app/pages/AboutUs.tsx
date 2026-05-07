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
    { year: "Jan 2026", title: "Company Foundation", desc: "Nurlete Property was founded to establish a premium standard for real estate development in Eastern Indonesia, focusing on quality construction and modern design." },
    { year: "Feb 2026", title: "Project Initiation", desc: "We secured the Nava Terra site in Halong Atas, selected for its solid coral rock foundation and elevated panoramic views." },
    { year: "Mar 2026", title: "Design Finalization", desc: "Working with skilled architects, we finalized our modern layouts. We committed to high-grade materials and expansive natural lighting as standard features." },
    { year: "Future 2026", title: "Continued Growth", desc: "We are expanding our portfolio with carefully selected projects in strategic locations, committed to delivering consistent value." }
  ];

  const values = [
    { icon: <TrendingUp size={32} />, title: "Investment Value", desc: "We focus on properties that offer strong long-term value, supported by clear neighborhood analysis and growth projections." },
    { icon: <ShieldCheck size={32} />, title: "Structural Integrity", desc: "We utilize solid foundations and robust materials. Our goal is to build homes that are highly durable and secure." },
    { icon: <Zap size={32} />, title: "Efficient Management", desc: "We apply modern construction management techniques to ensure efficient building processes and high-quality outcomes." },
    { icon: <Compass size={32} />, title: "Thoughtful Design", desc: "We focus on select projects where every detail is considered, creating functional and modern living spaces." }
  ];

  return (
    <div className="pt-[160px] pb-0 w-full z-10 bg-[#F5F4F0] font-sans">
      
      {/* Hero Section - Maximum Scale */}
      <section className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto mb-[120px] md:mb-[160px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[60vh] min-h-[500px] rounded-[32px] md:rounded-[48px] overflow-hidden border border-[#3C2A21]/20 shadow-[0_32px_80px_rgba(0,0,0,0.1)] flex items-center justify-center text-center p-[24px] md:p-[64px] w-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Modern Architectural Vision" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#000000]/30 backdrop-blur-[1px]" />
          
          <div className="relative z-10 max-w-4xl w-full">
            <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-[32px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] min-h-[44px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#3C2A21] animate-pulse" />
              <span className="text-white font-bold uppercase tracking-[0.2em] text-[11px]">Est. January 2026</span>
            </div>
            
            <h1 className="text-[48px] md:text-[80px] leading-[1.05] font-semibold text-white tracking-tight drop-shadow-2xl mb-[24px]">
              Premium Development.<br/>
              <span className="text-white/70">Modern Execution.</span>
            </h1>
            <p className="text-white/90 text-[18px] md:text-[22px] leading-[1.6] font-medium max-w-3xl mx-auto">
              Based in Maluku, Nurlete Property develops premium real estate for clients who value quality construction, functional design, and long-term asset value.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Innovation Matrix */}
      <section className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto mb-[120px] md:mb-[160px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[120px] items-center">
          <div>
            <h2 className="text-[32px] md:text-[56px] leading-[1.05] font-semibold text-[#000000] tracking-tight mb-[32px]">A Higher Standard of<br/>Development</h2>
            <p className="text-[#000000]/70 text-[18px] md:text-[20px] leading-[1.7] font-medium mb-[32px]">
              Established in early 2026, Nurlete Property was built to implement high-quality design and robust structural integrity in Eastern Indonesia.
            </p>
            <p className="text-[#000000]/70 text-[18px] md:text-[20px] leading-[1.7] font-medium">
              We carefully analyze location potential, geological stability, and architectural functionality to ensure our projects are valuable assets for the future.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
            <div className="bg-white p-[40px] rounded-[32px] border border-[#3C2A21]/10 shadow-[0_24px_48px_rgba(0,0,0,0.02)]">
              <Compass className="text-[#3C2A21] mb-[24px]" size={40} />
              <h3 className="font-bold text-[#000000] text-[22px] mb-[12px]">Location Strategy</h3>
              <p className="text-[#000000]/50 text-[15px] font-medium leading-[1.6]">Detailed research to select the best locations for growth and stability.</p>
            </div>
            <div className="bg-[#3C2A21] text-white p-[40px] rounded-[32px] shadow-[0_32px_64px_rgba(60,42,33,0.2)]">
              <Sparkles className="text-white mb-[24px]" size={40} />
              <h3 className="font-bold text-white text-[22px] mb-[12px]">Functional Design</h3>
              <p className="text-white/60 text-[15px] font-medium leading-[1.6]">Modern design focused on practical spaces and natural light.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Narrative */}
      <section className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto mb-[120px] md:mb-[160px]">
        <div className="bg-[#000000] text-white rounded-[48px] p-[40px] md:p-[80px] relative overflow-hidden flex flex-col lg:flex-row items-center gap-[64px]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
          <div className="w-full lg:w-[45%] relative z-10">
            <div className="w-[80px] h-[4px] bg-[#3C2A21] mb-[40px]" />
            <h2 className="text-[36px] md:text-[56px] leading-[1.1] font-semibold mb-[40px] tracking-tight">Quality Over Compromise.</h2>
            <p className="text-white/70 text-[18px] md:text-[20px] leading-[1.8] font-medium mb-[32px]">
              "When I founded Nurlete Property in January 2026, the goal was simple: to build homes that last. We prioritize strong foundations and practical design over empty promises."
            </p>
            <p className="text-white/70 text-[18px] md:text-[20px] leading-[1.8] font-medium mb-[48px]">
              "We serve clients who understand that premium real estate is the result of careful engineering and thoughtful planning."
            </p>
            <div className="flex items-center gap-[20px]">
              <div className="w-[64px] h-[64px] rounded-full bg-[#3C2A21] flex items-center justify-center font-bold text-[24px] text-white shadow-xl">F.N</div>
              <div>
                <span className="block text-[20px] font-bold text-white">Firdaus Nurlete</span>
                <span className="block text-[16px] text-white/50 font-medium">Founder & CEO</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[55%] relative z-10">
            <div className="aspect-[16/10] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Detail-oriented Construction" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline width Wide scaling */}
      <section className="mb-[120px] md:mb-[160px] overflow-hidden relative">
        <div className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto mb-[64px] flex flex-col md:flex-row md:items-end justify-between gap-[32px]">
          <div className="max-w-2xl">
            <h2 className="text-[32px] md:text-[48px] leading-[1.2] font-semibold text-[#000000] tracking-tight mb-[16px]">Company Timeline</h2>
            <p className="text-[#000000]/50 text-[18px] font-medium">Key milestones in our development journey.</p>
          </div>
          <div className="hidden md:flex items-center gap-[12px] text-[#000000]/30 font-bold text-[12px] uppercase tracking-widest bg-[#000000]/5 px-[24px] py-[12px] rounded-full border border-[#3C2A21]/10">
            Swipe to Navigate
          </div>
        </div>

        <div className="w-full relative px-[20px] md:px-[80px] max-w-[1800px] mx-auto">
          <div 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
            className={`flex gap-[40px] overflow-x-auto pb-[40px] pt-[20px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden relative z-10 ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                className="min-w-[380px] md:min-w-[500px] bg-white border border-[#3C2A21]/20 rounded-[40px] p-[48px] shadow-[0_32px_64px_rgba(0,0,0,0.03)] hover:-translate-y-4 transition-all duration-500 group select-none"
              >
                <span className="inline-block px-[16px] py-[8px] bg-[#3C2A21]/5 text-[#3C2A21] font-bold text-[13px] tracking-widest uppercase rounded-full mb-[32px]">{item.year}</span>
                <h3 className="text-[28px] font-semibold text-[#000000] mb-[20px] tracking-tight">{item.title}</h3>
                <p className="text-[#000000]/60 text-[16px] md:text-[18px] leading-[1.7] font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid - High Density Width */}
      <section className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto mb-[120px] md:mb-[160px]">
        <div className="text-center mb-[80px]">
          <h2 className="text-[36px] md:text-[56px] font-semibold text-[#000000] tracking-tight mb-[24px]">Brand Values</h2>
          <p className="text-[#000000]/50 text-[18px] font-medium">The principles that guide our development process.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {values.map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-[#3C2A21]/10 rounded-[32px] p-[40px] shadow-[0_24px_48px_rgba(0,0,0,0.02)] hover:bg-[#3C2A21] group transition-all duration-500"
            >
              <div className="w-[64px] h-[64px] rounded-[24px] bg-[#3C2A21]/5 text-[#3C2A21] flex items-center justify-center mb-[32px] group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                {value.icon}
              </div>
              <h4 className="text-[22px] font-semibold text-[#000000] group-hover:text-white mb-[16px] transition-colors">{value.title}</h4>
              <p className="text-[#000000]/50 group-hover:text-white/70 text-[15px] font-medium leading-[1.6] transition-colors">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architectural Philosophy Section */}
      <section className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto mb-[120px] md:mb-[160px]">
        <div className="bg-[#000000] text-white rounded-[48px] p-[40px] md:p-[80px] relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#3C2A21]/20 to-[#000000] pointer-events-none" />
          <div className="relative z-10 w-full max-w-4xl">
            <h2 className="text-[36px] md:text-[56px] leading-[1.1] font-semibold tracking-tight text-white mb-[32px]">
              Our Philosophy: <br/> Purposeful Design.
            </h2>
            <p className="text-white/70 text-[18px] md:text-[22px] leading-[1.8] font-medium mb-[48px]">
              We believe a home should elevate your daily life. By avoiding unnecessary ornamentation, we focus on spatial flow, natural light, and quality materials. Every element serves a practical purpose, creating comfortable and efficient environments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              <div className="bg-[#1A1A1A] p-[32px] rounded-[32px] border border-white/5 shadow-2xl">
                <span className="block text-[48px] font-bold text-white mb-[8px]">01</span>
                <h4 className="text-[18px] font-bold text-white mb-[12px]">Light Mapping</h4>
                <p className="text-white/50 text-[14px] leading-[1.6]">Calculating diurnal solar paths to maximize natural illumination while minimizing heat gain.</p>
              </div>
              <div className="bg-[#1A1A1A] p-[32px] rounded-[32px] border border-white/5 shadow-2xl">
                <span className="block text-[48px] font-bold text-white mb-[8px]">02</span>
                <h4 className="text-[18px] font-bold text-white mb-[12px]">Air Flow Matrix</h4>
                <p className="text-white/50 text-[14px] leading-[1.6]">Strategically positioning apertures to create natural cross-ventilation, reducing reliance on artificial cooling.</p>
              </div>
              <div className="bg-[#1A1A1A] p-[32px] rounded-[32px] border border-white/5 shadow-2xl">
                <span className="block text-[48px] font-bold text-white mb-[8px]">03</span>
                <h4 className="text-[18px] font-bold text-white mb-[12px]">Material Honesty</h4>
                <p className="text-white/50 text-[14px] leading-[1.6]">Utilizing exposed concretes, natural timber, and high-density glass to showcase raw structural beauty.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
