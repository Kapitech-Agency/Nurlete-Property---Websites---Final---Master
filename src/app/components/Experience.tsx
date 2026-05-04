import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Map, Cuboid, Calendar, ArrowRight, X, Phone } from 'lucide-react';

export function Experience() {
  const [activeTab, setActiveTab] = useState<'sitemap' | 'calculator' | 'schedule'>('sitemap');

  // Calculator State
  const [price, setPrice] = useState(1500000000);
  const [downPayment, setDownPayment] = useState(300000000);
  const [years, setYears] = useState(15);
  const interestRate = 5.5; // 5.5% fixed

  const principal = price - downPayment;
  const monthlyInterest = interestRate / 100 / 12;
  const numberOfPayments = years * 12;
  const monthlyPayment = principal > 0 ? (principal * monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1) : 0;

  const formatIDR = (value: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <section id="experience-section" className="py-[120px] md:py-[160px] relative z-10 bg-[#1A1A1A] text-[#F5F4F0] overflow-hidden font-['Inter']">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] pointer-events-none opacity-10">
        <div className="absolute top-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-white blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-[20px] md:px-[80px] w-full relative z-10">
        
        <div className="mb-[64px] text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-[32px]">
          <div>
            <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-[24px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
              <span className="w-[8px] h-[8px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className="text-white font-bold uppercase tracking-[0.2em] text-[11px] leading-none">Interactive Experience</span>
            </div>
            <h2 className="text-[32px] md:text-[48px] leading-[1.2] font-semibold tracking-tight text-white">
              Immerse in <span className="text-white/50">Nava Terra</span>
            </h2>
          </div>
          <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.6] font-medium max-w-md">
            Explore the property from every angle, calculate your investment, and schedule a private viewing.
          </p>
        </div>

        {/* Glass Navigation Tabs */}
        <div className="flex flex-wrap gap-[12px] mb-[48px] bg-white/5 p-[8px] rounded-[24px] backdrop-blur-xl border border-white/10 w-fit mx-auto md:mx-0">
          {[
            { id: 'sitemap', icon: <Map size={18} />, label: 'Interactive Site Map' },
            { id: 'calculator', icon: <Calculator size={18} />, label: 'Mortgage Calculator' },
            { id: 'schedule', icon: <Calendar size={18} />, label: 'Schedule Private Tour' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-[8px] px-[20px] py-[12px] rounded-[16px] text-[14px] font-bold transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-white text-[#1A1A1A] shadow-[0_4px_16px_rgba(255,255,255,0.2)]' 
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Container */}
        <div className="relative min-h-[500px] w-full bg-white/5 backdrop-blur-[40px] border border-white/10 rounded-[32px] md:rounded-[48px] overflow-hidden p-[24px] md:p-[48px]">
          
          <AnimatePresence mode="wait">

            {activeTab === 'sitemap' && (
              <motion.div 
                key="sitemap"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
                className="w-full h-full flex flex-col relative min-h-[400px]"
              >
                <div className="absolute inset-0 rounded-[24px] overflow-hidden border border-white/10 bg-[#222]">
                  <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                  {/* Simulated Map Markers */}
                  {[
                    { x: '30%', y: '40%', status: 'available' },
                    { x: '50%', y: '60%', status: 'sold' },
                    { x: '70%', y: '30%', status: 'available' },
                    { x: '60%', y: '80%', status: 'reserved' }
                  ].map((marker, i) => (
                    <div key={i} className="absolute group cursor-pointer" style={{ left: marker.x, top: marker.y }}>
                      <div className={`w-[24px] h-[24px] rounded-full flex items-center justify-center border-2 ${marker.status === 'available' ? 'bg-white border-white' : marker.status === 'sold' ? 'bg-red-500/50 border-red-500' : 'bg-yellow-500/50 border-yellow-500'}`}>
                        <div className="w-[8px] h-[8px] rounded-full bg-[#1A1A1A]" />
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-[8px] bg-white text-[#1A1A1A] text-[12px] font-bold px-[12px] py-[6px] rounded-[8px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Unit A{i+1} • {marker.status}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-[24px] left-[24px] bg-[#1A1A1A]/80 backdrop-blur-md p-[16px] rounded-[16px] border border-white/10 flex gap-[16px]">
                  <div className="flex items-center gap-[8px] text-[13px] font-bold"><span className="w-[12px] h-[12px] rounded-full bg-white" /> Available</div>
                  <div className="flex items-center gap-[8px] text-[13px] font-bold"><span className="w-[12px] h-[12px] rounded-full bg-yellow-500/50 border border-yellow-500" /> Reserved</div>
                  <div className="flex items-center gap-[8px] text-[13px] font-bold"><span className="w-[12px] h-[12px] rounded-full bg-red-500/50 border border-red-500" /> Sold</div>
                </div>
              </motion.div>
            )}

            {activeTab === 'calculator' && (
              <motion.div 
                key="calculator"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
                className="w-full h-full flex flex-col md:flex-row gap-[48px] min-h-[400px]"
              >
                <div className="flex-1 flex flex-col gap-[32px]">
                  <h3 className="text-[24px] font-bold text-white">Mortgage Calculator</h3>
                  
                  <div className="flex flex-col gap-[8px]">
                    <label className="text-white/60 text-[14px] font-bold uppercase tracking-wider">Property Price (IDR)</label>
                    <input type="range" min="1000000000" max="5000000000" step="50000000" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full accent-white" />
                    <div className="text-[20px] font-semibold">{formatIDR(price)}</div>
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <label className="text-white/60 text-[14px] font-bold uppercase tracking-wider">Down Payment (IDR)</label>
                    <input type="range" min="100000000" max={price} step="50000000" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full accent-white" />
                    <div className="flex justify-between items-center">
                      <div className="text-[20px] font-semibold">{formatIDR(downPayment)}</div>
                      <div className="text-white/40 text-[14px] font-bold">{Math.round((downPayment/price)*100)}%</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <label className="text-white/60 text-[14px] font-bold uppercase tracking-wider">Loan Term ({years} Years)</label>
                    <input type="range" min="5" max="25" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-white" />
                  </div>
                </div>

                <div className="flex-1 bg-white/10 rounded-[24px] border border-white/20 p-[32px] flex flex-col justify-center text-center">
                  <div className="text-white/60 font-bold uppercase tracking-widest text-[13px] mb-[16px]">Estimated Monthly Payment</div>
                  <div className="text-[48px] md:text-[64px] font-bold leading-none mb-[24px] text-white">
                    {formatIDR(monthlyPayment).split(',')[0]}
                  </div>
                  <p className="text-white/50 text-[14px] mb-[40px] px-[20px]">
                    Based on {interestRate}% fixed interest rate. This calculation is for illustration purposes only.
                  </p>
                  <a href={`https://wa.me/6282239415718?text=Hello,%20I'm%20interested%20in%20a%20property%20priced%20at%20${formatIDR(price)}.`} target="_blank" rel="noreferrer" className="bg-white text-[#1A1A1A] px-[32px] py-[16px] rounded-full font-bold flex items-center justify-center gap-[8px] hover:scale-105 active:scale-95 transition-all">
                    <Phone size={18} /> Discuss Financing
                  </a>
                </div>
              </motion.div>
            )}

            {activeTab === 'schedule' && (
              <motion.div 
                key="schedule"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
                className="w-full h-full flex flex-col md:flex-row gap-[48px] min-h-[400px] items-center"
              >
                <div className="flex-1 text-center md:text-left">
                  <div className="w-[64px] h-[64px] rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-[24px] mx-auto md:mx-0">
                    <Calendar size={28} className="text-white" />
                  </div>
                  <h3 className="text-[32px] md:text-[40px] font-bold text-white leading-[1.2] mb-[16px]">Experience it <br/>in person.</h3>
                  <p className="text-white/60 text-[16px] leading-[1.6] mb-[32px]">
                    Schedule a private, guided tour of Nava Terra with our senior property consultants. Available 7 days a week.
                  </p>
                  <a href="https://wa.me/6282239415718?text=Hello,%20I%20would%20like%20to%20schedule%20a%20private%20tour%20of%20Nava%20Terra." target="_blank" rel="noreferrer" className="inline-flex bg-white text-[#1A1A1A] px-[32px] py-[16px] rounded-full font-bold items-center justify-center gap-[8px] hover:scale-105 active:scale-95 transition-all min-w-[200px]">
                    <Phone size={18} /> Book via WhatsApp
                  </a>
                </div>
                <div className="flex-1 w-full bg-white/10 rounded-[24px] border border-white/20 p-[24px] pointer-events-none">
                  {/* Decorative Calendar UI */}
                  <div className="flex justify-between items-center mb-[24px]">
                    <div className="font-bold text-[18px]">May 2026</div>
                    <div className="flex gap-[8px]">
                      <div className="w-[32px] h-[32px] rounded-full bg-white/5 flex items-center justify-center">&lt;</div>
                      <div className="w-[32px] h-[32px] rounded-full bg-white/5 flex items-center justify-center">&gt;</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-[8px] text-center text-[14px] font-bold text-white/40 mb-[16px]">
                    <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                  </div>
                  <div className="grid grid-cols-7 gap-[8px] text-center text-[14px] font-bold">
                    {Array.from({length: 31}).map((_, i) => (
                      <div key={i} className={`aspect-square flex items-center justify-center rounded-full ${i === 14 ? 'bg-white text-[#1A1A1A]' : i > 10 && i < 20 ? 'bg-white/10 text-white' : 'text-white/40'}`}>
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
