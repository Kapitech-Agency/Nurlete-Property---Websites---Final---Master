import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Construction, Lightbulb, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Insights() {
  const marketTrends = [
    {
      title: "Ambon's Urban Shift: The Rise of the Hills",
      excerpt: "As the bay area saturates, luxury developers are moving towards Halong Atas for fresh air and panoramic views. Property values in this sector have seen a steady 12% annual increase.",
      date: "May 01, 2026",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      title: "Why Minimalist Architecture Wins in Eastern Indonesia",
      excerpt: "Beyond aesthetics, minimalist design offers superior airflow and lower maintenance in tropical environments, making it the preferred choice for modern investors.",
      date: "April 22, 2026",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
  ];

  const constructionProgress = [
    {
      title: "Foundation Laying Complete",
      status: "100% Complete",
      desc: "All coral rock foundations for Phase 1 of Nava Terra have been successfully laid and inspected.",
      date: "April 15, 2026",
      image: "https://images.unsplash.com/photo-1541888081622-1f31f98fb04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      title: "Main Gate & Security Infrastructure",
      status: "In Progress (60%)",
      desc: "The smart one-gate system structure is currently being erected. Cabling for 24/7 CCTV is underway.",
      date: "May 03, 2026",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
  ];

  const tips = [
    {
      title: "Maximizing Natural Light",
      desc: "Learn how to position your furniture to complement Nava Terra's generous window heights, reducing electricity usage."
    },
    {
      title: "Tropical Plant Pairings",
      desc: "The top 5 low-maintenance indoor plants that thrive in Ambon's climate and complement a monochrome aesthetic."
    },
    {
      title: "Granite Care 101",
      desc: "Simple, daily maintenance routines to keep your 60x60 premium granite flooring looking flawless for decades."
    }
  ];

  return (
    <div className="pt-[160px] pb-0 w-full z-10 bg-[#F5F4F0] font-['Inter'] relative">
      
      {/* Decorative Topographical Background specific to Insights */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] pointer-events-none opacity-20 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#1A1A1A" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] md:mb-[160px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[40vh] md:h-[50vh] min-h-[300px] md:min-h-[400px] rounded-[32px] md:rounded-[48px] overflow-hidden border border-[#1A1A1A]/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.3)] flex flex-col justify-end p-[32px] md:p-[64px] w-full"
        >
          <div className="absolute inset-0 bg-[#1A1A1A]">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
              alt="City Architecture" 
              className="w-full h-full object-cover grayscale opacity-40 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent opacity-90" />
          </div>
          
          <div className="relative z-10 max-w-3xl w-full text-white selection:bg-white selection:text-[#1A1A1A]">
            <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-[24px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] min-h-[44px]">
              <span className="w-[8px] h-[8px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className="font-['Inter'] text-[11px] font-bold uppercase tracking-[0.2em] leading-none">Journal</span>
            </div>
            
            <h1 className="font-['Inter'] text-[36px] md:text-[52px] leading-[1.2] font-semibold tracking-tight drop-shadow-xl mb-[16px]">
              Insights & Updates
            </h1>
            <p className="font-['Inter'] text-white/80 text-[15px] md:text-[16px] leading-[1.6] font-medium max-w-2xl">
              Stay informed with the latest market trends in Ambon, construction progress of Nava Terra, and expert homeowner advice.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 1. Market Trends */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] md:mb-[160px] relative z-10">
        <div className="flex items-center gap-[16px] mb-[48px]">
          <div className="w-[48px] h-[48px] rounded-full bg-[#1A1A1A] text-white flex items-center justify-center shadow-[0_8px_16px_rgba(26,26,26,0.2)]">
            <TrendingUp size={24} />
          </div>
          <h2 className="font-['Inter'] text-[28px] md:text-[40px] leading-[1.2] font-semibold text-[#1A1A1A] tracking-tight">Market Trends</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          {marketTrends.map((trend, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur-[60px] border border-[#1A1A1A]/[0.08] rounded-[40px] p-[24px] shadow-[0_16px_40px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(0,0,0,0.12)] transition-all duration-500 group flex flex-col sm:flex-row gap-[24px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="w-full sm:w-[160px] shrink-0 aspect-[4/3] sm:aspect-square rounded-[28px] overflow-hidden relative shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] z-10">
                <img src={trend.image} alt={trend.title} className="w-full h-full object-cover grayscale sepia-[0.15] group-hover:scale-110 group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-[3s]" />
              </div>
              <div className="flex flex-col justify-center z-10">
                <span className="text-[#1A1A1A]/40 font-['Inter'] text-[12px] font-bold tracking-widest mb-[12px] uppercase">{trend.date}</span>
                <h3 className="text-[#1A1A1A] font-['Inter'] text-[18px] md:text-[20px] font-bold tracking-tight leading-[1.3] mb-[12px]">
                  {trend.title}
                </h3>
                <p className="font-['Inter'] text-[#1A1A1A]/60 text-[14px] leading-[1.6] font-medium flex-1">
                  {trend.excerpt}
                </p>
                <Link to={`/insights/${idx + 1}`} className="mt-[16px] inline-flex items-center text-[#1A1A1A] font-bold text-[13px] cursor-pointer group/link">
                  Read Full Report <ArrowUpRight size={16} className="ml-[4px] group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Construction Progress */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] md:mb-[160px] relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px] mb-[48px]">
          <div className="flex items-center gap-[16px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 text-[#1A1A1A] flex items-center justify-center">
              <Construction size={24} />
            </div>
            <h2 className="font-['Inter'] text-[28px] md:text-[40px] leading-[1.2] font-semibold text-[#1A1A1A] tracking-tight">Site Progress</h2>
          </div>
          <span className="inline-block px-[16px] py-[8px] bg-[#1A1A1A]/5 rounded-full text-[#1A1A1A]/60 font-bold text-[13px] tracking-wide border border-[#1A1A1A]/10">Nava Terra Cluster</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
          {constructionProgress.map((prog, idx) => (
            <Link to={`/insights/${idx + 3}`} key={idx} className="bg-white/60 backdrop-blur-[60px] border border-[#1A1A1A]/[0.08] rounded-[40px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] group hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer block relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
              <div className="aspect-[16/9] w-full relative overflow-hidden">
                 <img src={prog.image} alt={prog.title} className="w-full h-full object-cover grayscale sepia-[0.1] transition-transform duration-[3s] group-hover:scale-110 group-hover:grayscale-0 group-hover:sepia-0" />
                 <div className="absolute top-[24px] right-[24px] bg-white/90 backdrop-blur-xl border border-white/20 rounded-full px-[16px] py-[8px] flex items-center gap-[8px] shadow-[0_8px_24px_rgba(0,0,0,0.15)] z-20">
                   {prog.status === "100% Complete" ? (
                     <CheckCircle2 size={16} className="text-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.8)]" />
                   ) : (
                     <div className="w-[8px] h-[8px] rounded-full bg-[#EAB308] animate-pulse shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
                   )}
                   <span className="font-bold text-[12px] uppercase tracking-wider text-[#1A1A1A]">{prog.status}</span>
                 </div>
              </div>
              <div className="p-[32px] md:p-[40px] relative z-20">
                <span className="text-[#1A1A1A]/40 font-['Inter'] text-[12px] font-bold tracking-widest mb-[12px] block uppercase">{prog.date}</span>
                <h3 className="text-[#1A1A1A] font-['Inter'] text-[20px] md:text-[24px] font-bold tracking-tight leading-[1.3] mb-[16px]">
                  {prog.title}
                </h3>
                <p className="font-['Inter'] text-[#1A1A1A]/60 text-[15px] leading-[1.6] font-medium mb-[24px]">
                  {prog.desc}
                </p>
                <div className="inline-flex items-center text-[#1A1A1A] font-bold text-[13px] group/link">
                  View Progress Detail <ArrowUpRight size={16} className="ml-[4px] group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Homeowner Tips & 4. Newsletter */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] md:mb-[160px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] md:gap-[80px]">
          
          {/* Tips */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-[16px] mb-[48px]">
              <div className="w-[48px] h-[48px] rounded-full bg-white border border-[#1A1A1A]/10 text-[#1A1A1A] flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,0.02)]">
                <Lightbulb size={24} />
              </div>
              <h2 className="font-['Inter'] text-[28px] md:text-[32px] leading-[1.2] font-semibold text-[#1A1A1A] tracking-tight">Homeowner Tips</h2>
            </div>

            <div className="space-y-[24px]">
              {tips.map((tip, idx) => (
                <div key={idx} className="bg-white/60 backdrop-blur-[60px] border border-[#1A1A1A]/[0.08] rounded-[32px] p-[24px] md:p-[32px] shadow-[0_8px_24px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)] hover:bg-white hover:shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-pointer group flex items-start gap-[16px]">
                  <div className="w-[40px] h-[40px] rounded-full bg-[#1A1A1A]/5 flex items-center justify-center text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] group-hover:bg-[#1A1A1A]/10 transition-colors shrink-0 mt-[2px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
                     <span className="font-bold text-[14px]">0{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] font-['Inter'] text-[18px] md:text-[20px] font-bold tracking-tight leading-[1.3] mb-[8px]">
                      {tip.title}
                    </h3>
                    <p className="font-['Inter'] text-[#1A1A1A]/60 text-[14px] md:text-[15px] leading-[1.6] font-medium">
                      {tip.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Broadcast Form */}
          <div className="lg:col-span-5">
            <div className="bg-[#1A1A1A] text-white rounded-[40px] md:rounded-[48px] p-[32px] md:p-[48px] shadow-[0_32px_80px_rgba(26,26,26,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)] relative overflow-hidden h-full flex flex-col selection:bg-white selection:text-[#1A1A1A]">
              <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-gradient-to-bl from-white/10 to-transparent rounded-bl-[100%] pointer-events-none" />
              
              <div className="w-[64px] h-[64px] rounded-full bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] mb-[32px]">
                <Mail size={32} />
              </div>
              <h2 className="font-['Inter'] text-[28px] md:text-[32px] leading-[1.2] font-semibold tracking-tight mb-[16px]">VIP Market Broadcast</h2>
              <p className="font-['Inter'] text-white/60 text-[15px] md:text-[16px] leading-[1.6] font-medium mb-[48px]">
                Join our exclusive WhatsApp broadcast list for priority project updates, pre-launch pricing on future developments, and premium living tips.
              </p>

              <div className="mt-auto space-y-[16px]">
                <a 
                  href="https://wa.me/6282239415718?text=I'd%20like%20to%20join%20the%20Nava%20Terra%20VIP%20Market%20Broadcast" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full bg-[#25D366] text-white rounded-full px-[24px] py-[20px] font-['Inter'] font-bold text-[15px] md:text-[16px] hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[56px] shadow-[0_8px_24px_rgba(37,211,102,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] flex items-center justify-center gap-[8px]"
                >
                  Join via WhatsApp <ArrowUpRight size={18} />
                </a>
              </div>

              <p className="text-white/30 text-[12px] mt-[24px] text-center font-medium">We respect your privacy. Direct messages only, no spam.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
