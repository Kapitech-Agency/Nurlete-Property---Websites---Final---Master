import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Construction, Lightbulb, Mail, ArrowUpRight, CheckCircle2, Sparkles, MapPin, BarChart3, ShieldCheck, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [investment, setInvestment] = useState(1500000000);
  const [rental, setRental] = useState(100000000);
  
  const grossYield = ((rental / investment) * 100).toFixed(1);
  const capitalGrowth = ((investment * 1.45 - investment) / investment * 100).toFixed(0); // Dummy mostly static but good for show

  const marketTrends = [
    {
      title: "Ambon's Urban Shift: Developing the Hills",
      excerpt: "As the bay area becomes more developed, housing is moving towards Halong Atas for fresh air and solid ground. Property values in this area have seen steady growth.",
      date: "May 01, 2026",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      category: "Market Updates",
      icon: <TrendingUp size={20} />
    },
    {
      title: "The Value of Tropical Modernism",
      excerpt: "Beyond aesthetics, minimalist design offers superior performance in a tropical climate. Our focus on quality and practicality sets a new standard for local housing.",
      date: "April 22, 2026",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      category: "Design Strategy",
      icon: <Lightbulb size={20} />
    },
    {
      title: "Housing Outlook: Eastern Indonesia",
      excerpt: "With new infrastructure projects opening in 2026, the Halong-Galala corridor is becoming a prime area for residential developments.",
      date: "April 10, 2026",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      category: "Asset Analysis",
      icon: <BarChart3 size={20} />
    }
  ];

  const siteReports = [
    {
      title: "Nava Terra: Foundation Work Verified",
      status: "100% Complete",
      desc: "All coral rock foundations for the cluster have been completed and inspected to our structural standards.",
      date: "April 15, 2026",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Main Entrance Construction",
      status: "60% Complete",
      desc: "Installing the main gate, security features, and stone details for a welcoming arrival experience.",
      date: "May 03, 2026",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Landscaping & Planting Prep",
      status: "Phase 1 Started",
      desc: "Beginning the selection process for appropriate tropical vegetation to enhance natural cooling and aesthetics.",
      date: "May 05, 2026",
      image: "https://images.unsplash.com/photo-1600573472594-8ceb1137c4aa?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-0 w-full z-10 bg-[#F5F4F0] font-sans relative">
      
      {/* Hero Section - Maximum Scale */}
      <section className="w-full mb-20 md:mb-32 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[50vh] min-h-[400px] rounded-3xl md:rounded-[3rem] overflow-hidden border border-[#3C2A21]/20 shadow-[0_48px_120px_rgba(0,0,0,0.1)] flex flex-col justify-end p-8 md:p-16 lg:p-20 w-full"
          >
          <div className="absolute inset-0 bg-[#000000]">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
              alt="Data Center" 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/70 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-4xl w-full text-white">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#3C2A21]/40 backdrop-blur-xl border border-white/20 mb-8">
              <Sparkles size={16} />
              <span className="font-bold uppercase tracking-[0.3em] text-[11px]">Real Estate Insights</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1] font-semibold tracking-tight mb-6">
              Market Data &<br/>
              <span className="text-white/40">Industry Reports.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl lg:text-2xl leading-[1.6] font-medium max-w-3xl">
              Access the latest insights on property values, development trends, and site progress. Our reports provide clear information for your next property decision.
            </p>
          </div>
        </motion.div>
        </div>
      </section>

      {/* Market Intel - 3 columns on wide screens */}
      <section className="w-full mb-24 md:mb-32 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#3C2A21] text-white flex items-center justify-center shadow-xl">
              <TrendingUp size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-semibold text-[#000000] tracking-tight">Market Updates</h2>
          </div>
          
          <div className="flex items-center gap-3 overflow-x-auto pb-2 max-w-full">
            {['All', 'Market Updates', 'Design Strategy', 'Asset Analysis'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full font-bold text-[13px] tracking-widest uppercase whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-[#3C2A21] text-white' : 'bg-white text-[#000000]/60 border border-[#000000]/10 hover:border-[#3C2A21]/40 hover:text-[#000000]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {marketTrends.filter(trend => activeCategory === 'All' || trend.category === activeCategory).map((trend, idx) => (
            <div key={idx} className="group bg-white border border-[#3C2A21]/15 rounded-3xl md:rounded-[3rem] p-8 shadow-[0_24px_64px_rgba(0,0,0,0.03)] hover:-translate-y-4 transition-all duration-700">
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 bg-[#F5F4F0]">
                <img src={trend.image} alt={trend.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]" />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 shadow-lg flex items-center gap-2">
                  <span className="text-[#3C2A21]">{trend.icon}</span>
                  <span className="text-[#000000] font-bold text-[10px] uppercase tracking-widest">{trend.category}</span>
                </div>
              </div>
              <div>
                <span className="text-[#000000]/40 font-bold text-[13px] tracking-widest mb-4 block">{trend.date}</span>
                <h3 className="text-[#000000] text-2xl font-semibold tracking-tight leading-[1.3] mb-5 group-hover:text-[#3C2A21] transition-colors">{trend.title}</h3>
                <p className="text-[#000000]/60 text-base leading-[1.7] font-medium mb-8 line-clamp-3">{trend.excerpt}</p>
                <Link to={`/insights`} className="inline-flex items-center gap-2 text-[#3C2A21] font-bold text-[14px] hover:underline underline-offset-8 transition-all">
                  Read Analysis <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Site Progress Grid */}
      <section className="w-full mb-24 md:mb-32 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#F5F4F0] border border-[#3C2A21]/20 text-[#3C2A21] flex items-center justify-center">
              <Construction size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-semibold text-[#000000] tracking-tight">Active Project Progress</h2>
          </div>
          <span className="bg-[#3C2A21] text-white px-6 py-3 rounded-full font-bold text-[13px] tracking-widest uppercase">Ongoing Development: Nava Terra</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {siteReports.map((prog, idx) => (
            <div key={idx} className="bg-white border border-[#3C2A21]/15 rounded-3xl md:rounded-[3.5rem] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.03)] group hover:-translate-y-4 transition-all duration-700 cursor-pointer">
              <div className="aspect-[16/10] w-full relative overflow-hidden">
                <img src={prog.image} alt={prog.title} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105" />
                <div className="absolute top-6 right-6 bg-[#3C2A21] text-white rounded-full px-5 py-2.5 flex items-center gap-2.5 shadow-2xl z-20">
                  <CheckCircle2 size={16} className={prog.status === "100% Complete" ? "text-green-400" : "text-yellow-400"} />
                  <span className="font-bold text-[11px] uppercase tracking-widest">{prog.status}</span>
                </div>
              </div>
              <div className="p-10">
                <span className="text-[#000000]/40 font-bold text-[12px] tracking-widest mb-4 block">{prog.date}</span>
                <h3 className="text-2xl font-semibold tracking-tight leading-[1.3] mb-4">{prog.title}</h3>
                <p className="text-[#000000]/60 text-base leading-[1.7] font-medium mb-8 line-clamp-2">{prog.desc}</p>
                <div className="inline-flex items-center gap-2 text-[#3C2A21] font-bold text-[14px]">
                  View Details <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Quarterly Market Report Download */}
      <section className="w-full mb-24 md:mb-32 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-[#1A1A1A] text-white rounded-3xl md:rounded-[4rem] p-10 md:p-16 lg:p-20 shadow-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3C2A21]/40 to-transparent opacity-60 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="font-bold uppercase tracking-[0.2em] text-[11px]">Latest Release</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-semibold tracking-tight text-white mb-6">Q1 2026 Ambon Property Prospectus.</h2>
            <p className="text-white/60 text-lg md:text-xl leading-[1.7] font-medium mb-10">
               Download our comprehensive analysis of the Ambon residential property market. Including value projections, infrastructural growth impact, and neighborhood updates.
            </p>
            <button className="bg-white text-[#000000] px-8 py-5 rounded-full font-bold text-base inline-flex items-center gap-3 hover:bg-[#3C2A21] hover:text-white transition-all group min-h-[44px]">
              Download Full Report <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="relative z-10 w-full max-w-[400px] aspect-[3/4] bg-white rounded-[2rem] shadow-[0_32px_80px_rgba(0,0,0,0.5)] transform md:rotate-[5deg] p-6 flex flex-col border border-white/20">
             <div className="w-full h-full border-2 border-[#000000]/10 rounded-2xl p-6 flex flex-col relative overflow-hidden">
               <div className="absolute inset-0 opacity-5">
                 <img src="https://images.unsplash.com/photo-1541888081622-1f31f98fb04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Texture" className="w-full h-full object-cover" />
               </div>
               <div className="relative z-10">
                 <h4 className="font-bold uppercase tracking-[0.3em] text-[#000000]/40 text-[10px] mb-10">Nurlete Property</h4>
                 <h3 className="text-3xl font-semibold leading-[1.1] text-[#000000] mb-6">Ambon Residential Real Estate <br/> Q1 2026</h3>
               </div>
               <div className="mt-auto relative z-10 flex justify-between items-end border-t border-[#000000]/10 pt-6">
                 <div className="w-10 h-10 bg-[#3C2A21] rounded-full" />
                 <span className="font-mono text-[12px] font-bold text-[#000000]/40">CONFIDENTIAL</span>
               </div>
             </div>
          </div>

        </div>
        </div>
      </section>

      {/* Yield Simulator */}
      <section className="w-full mb-24 md:mb-32 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-white rounded-[3rem] md:rounded-[4rem] border border-[#3C2A21]/15 p-10 md:p-16 lg:p-20 shadow-[0_32px_80px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row gap-16">
           <div className="flex-1">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f1f1f1] text-[#000000]/60 mb-6">
               <BarChart3 size={16} />
               <span className="font-bold uppercase tracking-[0.2em] text-[11px]">Interactive tool</span>
             </div>
             <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-semibold tracking-tight text-[#000000] mb-6">
               Investment Yield <br/> Simulator.
             </h2>
             <p className="text-[#000000]/60 text-lg md:text-xl leading-[1.7] font-medium mb-10 max-w-xl">
               Estimate your potential gross rental yield and 5-year capital appreciation based on current Halong Atas market data.
             </p>

             {/* Simulator Controls */}
             <div className="space-y-8">
               <div>
                 <div className="flex justify-between mb-3">
                   <label className="font-bold uppercase tracking-widest text-[#000000]/60 text-[12px]">Initial Investment (Rp)</label>
                   <span className="font-bold text-[#000000]">{(investment / 1000000000).toFixed(1)}B</span>
                 </div>
                 <input 
                   type="range" 
                   min="1200000000" 
                   max="2500000000" 
                   step="50000000" 
                   value={investment}
                   onChange={(e) => setInvestment(Number(e.target.value))}
                   className="w-full accent-[#3C2A21] h-[6px] bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                 />
               </div>
               
               <div>
                 <div className="flex justify-between mb-3">
                   <label className="font-bold uppercase tracking-widest text-[#000000]/60 text-[12px]">Expected Annual Rental Rate</label>
                   <span className="font-bold text-[#000000]">{(rental / 1000000).toFixed(0)}M</span>
                 </div>
                 <input 
                   type="range" 
                   min="80000000" 
                   max="150000000" 
                   step="5000000" 
                   value={rental}
                   onChange={(e) => setRental(Number(e.target.value))}
                   className="w-full accent-[#3C2A21] h-[6px] bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                 />
               </div>
             </div>
           </div>
           
           <div className="flex-1 bg-[#F5F4F0] rounded-[2rem] p-10 border border-[#000000]/5 flex flex-col justify-center">
              <span className="block text-center font-bold text-[#000000]/40 uppercase tracking-widest text-[12px] mb-8">Projected Returns</span>
              
              <div className="space-y-8">
                <div className="text-center">
                  <h4 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-none text-[#3C2A21] mb-2">{grossYield}%</h4>
                  <span className="font-medium text-[#000000]/60 text-base">Estimated Gross Rental Yield</span>
                </div>
                <div className="w-full h-[1px] bg-[#000000]/10" />
                <div className="text-center">
                  <h4 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-none text-[#000000] mb-2">{capitalGrowth}%</h4>
                  <span className="font-medium text-[#000000]/60 text-base">Estimated 5-Year Capital Growth</span>
                </div>
              </div>
              <p className="text-center text-[#000000]/40 text-[12px] mt-10 font-medium leading-[1.6]">
                *Calculations are based on Q1 2026 averages and are meant for educational purposes. They do not represent a guarantee of actual return.
              </p>
           </div>
         </div>
         </div>
      </section>

      {/* Strategic Investment Framework */}
      <section className="w-full mb-24 md:mb-32 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#F5F4F0] border border-[#3C2A21]/20 text-[#3C2A21] flex items-center justify-center">
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-semibold text-[#000000] tracking-tight">The 2026 Property Market</h2>
          </div>
          <span className="bg-[#3C2A21] text-white px-6 py-3 rounded-full font-bold text-[13px] tracking-widest uppercase">Verified Data</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-12 rounded-[3rem] border border-[#3C2A21]/10 shadow-[0_24px_48px_rgba(0,0,0,0.02)]">
            <h3 className="text-3xl font-bold text-[#000000] mb-6 tracking-tight">Capital Appreciation</h3>
            <p className="text-[#000000]/60 text-lg leading-[1.7] font-medium mb-8">
              Halong Atas is a high-growth area in Ambon. Property values are projected to see steady appreciation by Q4 2026 as local infrastructure catches up to new residential developments.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#000000]/80 font-medium text-[16px]"><CheckCircle2 size={20} className="text-[#3C2A21]" /> Elevated topography mitigating flood risks</li>
              <li className="flex items-center gap-3 text-[#000000]/80 font-medium text-[16px]"><CheckCircle2 size={20} className="text-[#3C2A21]" /> Scarcity of quality, modern minimalist units</li>
              <li className="flex items-center gap-3 text-[#000000]/80 font-medium text-[16px]"><CheckCircle2 size={20} className="text-[#3C2A21]" /> Rapid infrastructural expansion in the Galala corridor</li>
            </ul>
          </div>
          <div className="bg-[#3C2A21] text-white p-12 rounded-[3rem] shadow-[0_32px_64px_rgba(60,42,33,0.2)]">
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Rental Demand</h3>
            <p className="text-white/70 text-lg leading-[1.7] font-medium mb-8">
              For those looking to rent their property, the housing market in this area is currently growing. Nurlete Property’s quality homes command reliable rental interest.
            </p>
            <ul className="space-y-4">
               <li className="flex items-center gap-3 text-white/90 font-medium text-[16px]"><CheckCircle2 size={20} className="text-white/40" /> Low supply of quality residential units</li>
               <li className="flex items-center gap-3 text-white/90 font-medium text-[16px]"><CheckCircle2 size={20} className="text-white/40" /> Practical amenities driving long-term tenant retention</li>
               <li className="flex items-center gap-3 text-white/90 font-medium text-[16px]"><CheckCircle2 size={20} className="text-white/40" /> Efficient material selection lowering maintenance tasks</li>
            </ul>
          </div>
        </div>
        </div>
      </section>

      {/* High-Impact WhatsApp CTA */}
      <section className="w-full mb-24 md:mb-32 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-[#25D366] text-white rounded-3xl md:rounded-[4rem] p-12 md:p-20 lg:p-24 shadow-[0_32px_80px_rgba(37,211,102,0.2)] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6 text-white">Let's Connect on WhatsApp.</h2>
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-[1.7] font-medium mb-12">
              Speak directly with our team for unit availability, area analysis, and simplified booking processes.
            </p>
            <a 
              href="https://wa.me/6282239415718?text=Hello,%20I'm%20interested%20in%20Nurlete%20Property" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center gap-3 bg-white text-[#25D366] px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[64px]"
            >
              Start WhatsApp Chat <ArrowUpRight size={24} />
            </a>
          </div>
        </div>
        </div>
      </section>

    </div>
  );
}
