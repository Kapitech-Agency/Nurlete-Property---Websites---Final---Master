import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, Construction, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const insightArticles = [
  {
    id: 1,
    title: "Ambon's Urban Shift: The Rise of the Hills",
    category: "Market Update",
    date: "May 01, 2026",
    excerpt: "As the bay area saturates, luxury developers are moving towards Halong Atas for fresh air and panoramic views.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    icon: <TrendingUp size={18} />
  },
  {
    id: 2,
    title: "Why Minimalist Architecture Wins in Eastern Indonesia",
    category: "Design Strategy",
    date: "April 22, 2026",
    excerpt: "Beyond aesthetics, minimalist design offers superior airflow and lower maintenance in tropical environments.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    icon: <Lightbulb size={18} />
  },
  {
    id: 3,
    title: "Site Progress: Foundation Laying 100% Complete",
    category: "Construction",
    date: "April 15, 2026",
    excerpt: "All coral rock foundations for Phase 1 of Nava Terra have been successfully laid and inspected by our elite team.",
    image: "https://images.unsplash.com/photo-1541888081622-1f31f98fb04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    icon: <Construction size={18} />
  }
];

export function InsightsOverview() {
  return (
    <section className="py-[120px] md:py-[180px] bg-white relative z-10 overflow-hidden">
      {/* Decorative wide background element */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-[#F5F4F0]/50 -skew-x-12 translate-x-[20%] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[80px] relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-[40px] mb-[80px]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-[8px] px-[16px] py-[6px] bg-[#3C2A21]/5 border border-[#3C2A21]/10 rounded-full mb-[24px]">
              <span className="text-[#3C2A21] font-bold uppercase tracking-[0.2em] text-[10px]">Market Updates</span>
            </div>
            <h2 className="text-[clamp(2.25rem,4vw,4rem)] font-semibold text-[#000000] tracking-tight leading-[1.1]">
              Market Insights <br/>
              <span className="text-[#000000]/30">& Reports</span>
            </h2>
          </div>
          
          <Link 
            to="/insights" 
            className="group inline-flex items-center gap-[12px] bg-[#000000] text-white px-[40px] py-[20px] rounded-full font-bold text-[16px] hover:bg-[#3C2A21] transition-all duration-300 shadow-xl"
          >
            Review All Insights <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
          {insightArticles.map((article, idx) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/insights/${article.id}`} className="block">
                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-[32px] bg-[#F5F4F0] shadow-[0_32px_64px_rgba(0,0,0,0.06)] border border-[#3C2A21]/5">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute top-[24px] left-[24px] bg-white/90 backdrop-blur-md px-[16px] py-[8px] rounded-full flex items-center gap-[8px] border border-white/20 shadow-lg">
                    <span className="text-[#3C2A21]">{article.icon}</span>
                    <span className="text-[#000000] font-bold text-[10px] uppercase tracking-widest">{article.category}</span>
                  </div>
                </div>
                
                <div className="px-[8px]">
                  <div className="flex items-center gap-[12px] mb-[16px]">
                    <span className="text-[#000000]/40 text-[13px] font-bold tracking-[0.1em]">{article.date}</span>
                    <span className="w-[30px] h-[1px] bg-[#000000]/10" />
                  </div>
                  
                  <h3 className="text-[24px] md:text-[28px] font-semibold text-[#000000] leading-[1.3] mb-[16px] group-hover:text-[#3C2A21] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-[#000000]/50 text-[16px] leading-[1.7] font-medium line-clamp-3 mb-[24px]">
                    {article.excerpt}
                  </p>
                  
                  <div className="inline-flex items-center gap-[8px] text-[#000000] font-bold text-[14px]">
                    <span className="border-b-2 border-[#3C2A21]/20 group-hover:border-[#3C2A21] transition-colors pb-1">View Full Analysis</span>
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#3C2A21]" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
