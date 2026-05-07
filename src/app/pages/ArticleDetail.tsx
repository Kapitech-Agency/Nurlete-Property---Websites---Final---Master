import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ChevronRight, Calendar, User, Clock, Share2, ArrowRight } from 'lucide-react';

export default function ArticleDetail() {
 const { id } = useParams();

 // Scroll to top on mount
 useEffect(() => {
 window.scrollTo({ top: 0, behavior: 'instant' });
 }, []);

 const { scrollY } = useScroll();
 const y1 = useTransform(scrollY, [0, 1000], [0, 150]);

 return (
 <div className="pt-[160px] pb-[120px] md:pb-[160px] w-full z-10 bg-[#F5F4F0] font-['Inter'] relative min-h-screen">
 
 {/* Decorative Grid */}
 <motion.div style={{ y: y1, backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} className="absolute inset-0 opacity-[0.015] pointer-events-none" />

 <div className="max-w-4xl mx-auto px-[20px] md:px-[80px] w-full relative z-10">
 
 {/* Navigation Breadcrumbs */}
 <div className="flex items-center gap-[12px] mb-[48px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-[8px]">
 <Link to="/insights" className="text-[#000000] hover:text-[#000000]/70 font-bold text-[13px] tracking-wide transition-colors whitespace-nowrapflex items-center gap-[4px] min-h-[44px]"> <ArrowLeft size={16} /> Back to Insights</Link>
 <span className="text-[#000000]/20">|</span>
 <span className="text-[#000000]/40 font-bold text-[13px] tracking-wide whitespace-nowrap uppercase">Market Trends</span>
 </div>

 {/* Article Header */}
 <header className="mb-[64px]">
 <h1 className="font-['Inter'] text-[36px] md:text-[56px] leading-[1.1] font-semibold text-[#000000] tracking-tight mb-[32px] max-w-3xl">
 Ambon's Urban Shift: The Rise of the Hills in Halong Atas
 </h1>
 
 <div className="flex flex-wrap items-center gap-[24px] md:gap-[40px] border-b border-[#3C2A21]/20 pb-[32px]">
 <div className="flex items-center gap-[12px]">
 <div className="w-[48px] h-[48px] rounded-full overflow-hidden bg-[#000000]/10">
 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" alt="Author" className="w-full h-full object-cover " />
 </div>
 <div>
 <span className="block font-bold text-[#000000] text-[15px]">Elena Rostova</span>
 <span className="block font-medium text-[#000000]/60 text-[13px]">Chief Architect, Nurlete Property</span>
 </div>
 </div>
 <div className="flex items-center gap-[8px] text-[#000000]/60 font-medium text-[14px]">
 <Calendar size={16} /> May 01, 2026
 </div>
 <div className="flex items-center gap-[8px] text-[#000000]/60 font-medium text-[14px]">
 <Clock size={16} /> 5 min read
 </div>
 
 <button className="ml-auto flex items-center justify-center w-[44px] h-[44px] rounded-full border border-[#3C2A21]/20 text-[#000000] hover:bg-[#000000] hover:text-white transition-colors" aria-label="Share article">
 <Share2 size={18} />
 </button>
 </div>
 </header>

 {/* Featured Image */}
 <div className="aspect-[16/9] md:aspect-[21/9] w-full rounded-[32px] md:rounded-[48px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.05)] border border-[#000000]/[0.05] mb-[64px]">
 <img 
 src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
 alt="Ambon Hills" 
 className="w-full h-full object-cover "
 />
 </div>

 {/* Article Body */}
 <article className="prose prose-lg prose-[#000000] max-w-full font-['Inter'] leading-[1.8] marker:text-[#000000]">
 <p className="text-[20px] md:text-[24px] font-medium leading-[1.6] text-[#000000]/80 mb-[48px]">
 For decades, Ambon’s real estate heartbeat was synchronized with its iconic coastline. But as urban density increases and sea levels become a global concern, luxury developers and discerning buyers are looking upwards. The hills of Halong Atas are emerging as the new epicenter of premium living in Eastern Indonesia.
 </p>
 
 <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-[#000000] mt-[64px] mb-[24px]">1. The Elevation Advantage</h2>
 <p className="text-[16px] md:text-[18px] text-[#000000]/70 mb-[24px]">
 The primary draw of Halong Atas isn't just the panoramic views of Ambon Bay—though they are spectacular. The true luxury lies in the climate. At 150 meters above sea level, the ambient temperature is noticeably cooler. This elevation creates natural wind corridors that make architectural cross-ventilation not just a concept, but a highly effective reality.
 </p>
 <p className="text-[16px] md:text-[18px] text-[#000000]/70 mb-[48px]">
 At Nurlete Property, we capitalized on this by orienting the Nava Terra cluster to capture seasonal breezes, drastically reducing the dependency on mechanical cooling.
 </p>

 <blockquote className="border-l-4 border-[#000000] pl-[24px] md:pl-[32px] py-[8px] my-[48px]">
 <p className="text-[20px] md:text-[24px] font-semibold text-[#000000] italic leading-[1.5]">
 "We aren't just building houses on a hill; we are engineering structures that actively breathe with the topography."
 </p>
 </blockquote>

 <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-[#000000] mt-[64px] mb-[24px]">2. Capital Appreciation and Scarcity</h2>
 <p className="text-[16px] md:text-[18px] text-[#000000]/70 mb-[24px]">
 Topographical constraints mean that developable land in Halong Atas is inherently scarce. Unlike flat suburban sprawl, hill development requires complex engineering, deep rock foundations, and rigorous retaining structures. This high barrier to entry ensures exclusivity.
 </p>
 <p className="text-[16px] md:text-[18px] text-[#000000]/70 mb-[48px]">
 Market data over the last three years indicates a steady 12% annual increase in land value in the Halong Atas sector. Investors recognize that as Ambon grows, these elevated sanctuaries will become irreplaceable assets.
 </p>

 {/* Inline Image Grid */}
 <div className="grid grid-cols-2 gap-[16px] md:gap-[24px] my-[64px]">
 <div className="aspect-square rounded-[24px] overflow-hidden border border-[#3C2A21]/20 bg-[#000000]/5">
 <img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Construction detail" className="w-full h-full object-cover " />
 </div>
 <div className="aspect-square rounded-[24px] overflow-hidden border border-[#3C2A21]/20 bg-[#000000]/5">
 <img src="https://images.unsplash.com/photo-1628592102751-ba83b0314276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Material detail" className="w-full h-full object-cover " />
 </div>
 <p className="col-span-2 text-center text-[#000000]/50 text-[14px] font-medium mt-[-8px]">
 Nava Terra Phase 1 Foundation Engineering
 </p>
 </div>

 <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-[#000000] mt-[64px] mb-[24px]">Conclusion: The Future is Elevated</h2>
 <p className="text-[16px] md:text-[18px] text-[#000000]/70 mb-[48px]">
 The shift towards Ambon's hills represents a maturation of the local real estate market. Buyers are no longer just looking for shelter; they are seeking curated lifestyles, environmental harmony, and long-term security. The hills provide the canvas, and Nava Terra is the masterpiece being painted upon it.
 </p>
 </article>

 {/* Next Read / CTA Footer */}
 <div className="mt-[80px] md:mt-[120px] border-t border-[#3C2A21]/20 pt-[64px] flex flex-col md:flex-row justify-between items-center gap-[40px] bg-white/40 p-[40px] rounded-[32px]">
 <div>
 <span className="block text-[#000000]/50 font-bold uppercase tracking-widest text-[12px] mb-[12px]">Continue Reading</span>
 <Link to="/insights/2" className="text-[20px] md:text-[24px] font-semibold text-[#000000] hover:text-[#000000]/60 transition-colors block">
 Why Minimalist Architecture Wins in Eastern Indonesia
 </Link>
 </div>
 <Link to="/insights" className="shrink-0 flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[#000000] text-white hover:scale-105 active:scale-95 transition-all shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
 <ArrowRight size={24} />
 </Link>
 </div>

 </div>
 </div>
 );
}


