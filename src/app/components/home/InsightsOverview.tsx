import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, Construction, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const insightArticles = [
  {
    id: 1,
    title: "Ambon's Urban Shift: Developing the Hills",
    category: "Market Update",
    date: "May 01, 2026",
    excerpt: "As the bay area saturates, residential developments are moving towards Halong Atas for fresh air and solid ground.",
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
    excerpt: "All coral rock foundations for Phase 1 of Nava Terra have been successfully laid and inspected by our technical team.",
    image: "https://images.unsplash.com/photo-1541888081622-1f31f98fb04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    icon: <Construction size={18} />
  }
];

export function InsightsOverview() {
  return (
    <section className="py-20 md:py-24 bg-white relative z-10 overflow-hidden">
      {/* Decorative wide background element */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-[#F5F4F0]/50 -skew-x-12 translate-x-[20%] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#3C2A21]/5 border border-[#3C2A21]/10 rounded-full mb-6">
              <span className="text-[#3C2A21] font-bold uppercase tracking-[0.2em] text-[10px]">Market Updates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#000000] tracking-tight leading-[1.1]">
              Market Insights <br/>
              <span className="text-[#000000]/30">& Reports</span>
            </h2>
          </div>
          
          <Link 
            to="/insights" 
            className="group inline-flex items-center gap-3 bg-[#000000] text-white px-10 py-5 rounded-full font-bold text-base hover:bg-[#3C2A21] transition-all duration-300 shadow-xl"
          >
            Review Our Updates <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {insightArticles.map((article, idx) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/insights`} className="block">
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 bg-[#F5F4F0] shadow-[0_32px_64px_rgba(0,0,0,0.06)] border border-[#3C2A21]/5">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/20 shadow-lg">
                    <span className="text-[#3C2A21]">{article.icon}</span>
                    <span className="text-[#000000] font-bold text-[10px] uppercase tracking-widest">{article.category}</span>
                  </div>
                </div>
                
                <div className="px-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#000000]/40 text-[13px] font-bold tracking-[0.1em]">{article.date}</span>
                    <span className="w-8 h-[1px] bg-[#000000]/10" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-[#000000] leading-[1.3] mb-4 group-hover:text-[#3C2A21] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-[#000000]/50 text-base leading-[1.7] font-medium line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-[#000000] font-bold text-[14px]">
                    <span className="border-b-2 border-[#3C2A21]/40 group-hover:border-[#3C2A21] transition-colors pb-1">View Full Analysis</span>
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
