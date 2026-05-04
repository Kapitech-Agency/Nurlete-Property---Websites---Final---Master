import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Maximize, BedDouble, Bath, Car, ArrowRight, Check, ChefHat, Droplets, Sun } from 'lucide-react';

export default function UnitDetail() {
  const { type } = useParams();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [activeImage, setActiveImage] = useState(0);

  // Mock data based on URL param
  const unitData = type === '55' ? {
    type: "Type 55",
    subtitle: "The Minimalist Sanctuary",
    desc: "An intelligently designed space that maximizes every square meter. Type 55 offers a seamless flow between living and dining areas, illuminated by expansive windows that bring the outside in.",
    specs: { size: "55m² Build / 100m² Land", bed: "2", bath: "1", car: "1" },
    features: ["Open-plan living area", "Premium 60x60 Granite flooring", "High ceilings (3.2m)", "Smart door lock system"],
    images: [
      "https://images.unsplash.com/photo-1600573472594-8ceb1137c4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
    ]
  } : {
    type: "Type 75",
    subtitle: "The Expansive Retreat",
    desc: "Our flagship layout designed for growing families who refuse to compromise on space or style. Type 75 features a master suite with private views, an extended kitchen area, and a generous landscaped garden.",
    specs: { size: "75m² Build / 112m² Land", bed: "3", bath: "2", car: "2" },
    features: ["Master suite with en-suite bath", "Extended dining area", "Premium 60x60 Granite flooring", "High ceilings (3.5m)", "Smart home integration"],
    images: [
      "https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
    ]
  };

  const materialSpecs = [
    { icon: <ChefHat size={24} />, title: "Kitchen", detail: "Concrete counter with polished finish, stainless sink." },
    { icon: <Droplets size={24} />, title: "Bathrooms", detail: "Toto sanitary wares, frameless glass shower." },
    { icon: <Sun size={24} />, title: "Lighting", detail: "Recessed 4000K LED lighting throughout." },
    { icon: <Maximize size={24} />, title: "Windows", detail: "Powder-coated aluminum frames, tinted glass." }
  ];

  return (
    <div className="pt-[160px] pb-[120px] md:pb-[160px] w-full z-10 bg-[#F5F4F0] font-['Inter'] relative min-h-screen">
      
      <div className="max-w-7xl mx-auto px-[20px] md:px-[80px] w-full relative z-10">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-[12px] mb-[48px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-[8px]">
           <Link to="/project/nava-terra" className="text-[#1A1A1A] hover:text-[#1A1A1A]/70 font-bold text-[13px] tracking-wide transition-colors whitespace-nowrap flex items-center gap-[4px] min-h-[44px]"> <ArrowLeft size={16} /> Back to Nava Terra</Link>
           <span className="text-[#1A1A1A]/20">|</span>
           <span className="text-[#1A1A1A]/40 font-bold text-[13px] tracking-wide whitespace-nowrap uppercase">{unitData.type}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-[80px] items-start">
          
          {/* Left: Interactive Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-[16px] sticky top-[160px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="aspect-[4/3] w-full rounded-[32px] md:rounded-[48px] overflow-hidden bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 shadow-[0_32px_80px_rgba(0,0,0,0.05)]"
              >
                <img src={unitData.images[activeImage]} alt={`View ${activeImage + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            </AnimatePresence>
            
            <div className="flex gap-[16px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-[8px]">
              {unitData.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-[100px] h-[75px] md:w-[140px] md:h-[105px] shrink-0 rounded-[16px] md:rounded-[24px] overflow-hidden border-2 transition-all min-h-[44px] min-w-[44px] ${
                    activeImage === idx ? 'border-[#1A1A1A] scale-[1.02] shadow-[0_8px_24px_rgba(0,0,0,0.1)]' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Unit Information */}
          <div className="lg:col-span-5 flex flex-col">
            <h1 className="font-['Inter'] text-[40px] md:text-[56px] leading-[1.1] font-semibold text-[#1A1A1A] tracking-tight mb-[8px]">
              {unitData.type}
            </h1>
            <span className="font-['Inter'] font-bold text-[#1A1A1A]/40 uppercase tracking-widest text-[14px] mb-[32px] block">{unitData.subtitle}</span>
            
            <p className="font-['Inter'] text-[#1A1A1A]/70 text-[16px] md:text-[18px] leading-[1.6] font-medium mb-[48px]">
              {unitData.desc}
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-[16px] mb-[48px]">
              <div className="bg-white/60 backdrop-blur-md border border-[#1A1A1A]/5 rounded-[24px] p-[20px] flex gap-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
                 <Maximize size={24} className="text-[#1A1A1A]/40 shrink-0" />
                 <div><span className="block text-[12px] font-bold text-[#1A1A1A]/40 uppercase tracking-wide mb-[2px]">Dimensions</span><span className="font-semibold text-[#1A1A1A] text-[15px]">{unitData.specs.size}</span></div>
              </div>
              <div className="bg-white/60 backdrop-blur-md border border-[#1A1A1A]/5 rounded-[24px] p-[20px] flex gap-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
                 <BedDouble size={24} className="text-[#1A1A1A]/40 shrink-0" />
                 <div><span className="block text-[12px] font-bold text-[#1A1A1A]/40 uppercase tracking-wide mb-[2px]">Bedrooms</span><span className="font-semibold text-[#1A1A1A] text-[15px]">{unitData.specs.bed} Rooms</span></div>
              </div>
              <div className="bg-white/60 backdrop-blur-md border border-[#1A1A1A]/5 rounded-[24px] p-[20px] flex gap-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
                 <Bath size={24} className="text-[#1A1A1A]/40 shrink-0" />
                 <div><span className="block text-[12px] font-bold text-[#1A1A1A]/40 uppercase tracking-wide mb-[2px]">Bathrooms</span><span className="font-semibold text-[#1A1A1A] text-[15px]">{unitData.specs.bath} Wet/Dry</span></div>
              </div>
              <div className="bg-white/60 backdrop-blur-md border border-[#1A1A1A]/5 rounded-[24px] p-[20px] flex gap-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
                 <Car size={24} className="text-[#1A1A1A]/40 shrink-0" />
                 <div><span className="block text-[12px] font-bold text-[#1A1A1A]/40 uppercase tracking-wide mb-[2px]">Carport</span><span className="font-semibold text-[#1A1A1A] text-[15px]">{unitData.specs.car} Space</span></div>
              </div>
            </div>

            {/* Key Features List */}
            <div className="mb-[64px]">
               <h3 className="font-['Inter'] text-[24px] font-semibold text-[#1A1A1A] mb-[24px] tracking-tight">Key Features</h3>
               <ul className="space-y-[16px]">
                 {unitData.features.map((feat, i) => (
                   <li key={i} className="flex items-center gap-[12px] font-['Inter'] text-[#1A1A1A]/80 font-medium text-[16px]">
                     <div className="w-[24px] h-[24px] rounded-full bg-[#1A1A1A]/5 flex items-center justify-center shrink-0 border border-[#1A1A1A]/10"><Check size={14} className="text-[#1A1A1A]" /></div>
                     {feat}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Material Specs */}
            <div className="mb-[64px]">
               <h3 className="font-['Inter'] text-[24px] font-semibold text-[#1A1A1A] mb-[24px] tracking-tight">Material Specifications</h3>
               <div className="space-y-[16px]">
                  {materialSpecs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-[16px] border-b border-[#1A1A1A]/10 pb-[16px]">
                       <div className="w-[48px] h-[48px] rounded-[16px] bg-[#1A1A1A]/5 text-[#1A1A1A]/40 flex items-center justify-center border border-[#1A1A1A]/10 shrink-0">
                         {spec.icon}
                       </div>
                       <div>
                         <h4 className="font-bold text-[#1A1A1A] text-[16px] mb-[4px]">{spec.title}</h4>
                         <p className="font-medium text-[#1A1A1A]/60 text-[14px] leading-[1.5]">{spec.detail}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Floorplan Download CTA */}
            <div className="bg-[#1A1A1A] text-white rounded-[32px] p-[32px] flex flex-col sm:flex-row items-center justify-between gap-[24px] shadow-[0_24px_48px_rgba(26,26,26,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)]">
               <div>
                 <h4 className="font-semibold text-[20px] mb-[8px]">Detailed Floorplan</h4>
                 <p className="font-medium text-white/60 text-[14px]">Download the precise layout dimensions (PDF).</p>
               </div>
               <button className="w-full sm:w-auto bg-white text-[#1A1A1A] font-bold text-[14px] px-[24px] py-[16px] rounded-full hover:scale-105 active:scale-95 transition-all text-center min-h-[44px] min-w-[44px] shadow-md">
                 Download PDF
               </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
