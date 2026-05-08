import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Bed, Bath, Square, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function PropertyDetail() {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-40 pb-32 md:pb-40 w-full z-10 bg-[#F5F4F0] relative min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 w-full relative z-10">
        
        <div className="flex items-center gap-3 mb-12 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Link to="/properties" className="text-[#000000] hover:text-[#000000]/70 font-bold text-[13px] tracking-wide transition-colors whitespace-nowrap flex items-center gap-1 min-h-[44px]"> <ArrowLeft size={16} /> Back to Properties</Link>
          <span className="text-[#000000]/20">|</span>
          <span className="text-[#000000]/40 font-bold text-[13px] tracking-wide whitespace-nowrap uppercase">Property #{id}</span>
        </div>
        
        <div className="bg-white rounded-[40px] md:rounded-[48px] overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.05)] border border-[#3C2A21]/10 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 aspect-square lg:aspect-auto bg-gray-200">
             <img src={"https://images.unsplash.com/photo-1706808849803-f61304e024ab?w=1600&q=80"} alt="Property Layout" className="w-full h-full object-cover" />
          </div>
          <div className="lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
             <h1 className="text-3xl md:text-5xl font-bold text-[#000000] mb-6">Quality Property {id}</h1>
             <p className="text-lg md:text-xl text-[#000000]/60 mb-12 font-medium leading-[1.6]">
               An intelligently designed property featuring high-quality materials, situated in a convenient location. Perfectly suited for family living with modern amenities.
             </p>
             <div className="grid grid-cols-2 gap-6 mb-12">
                <div>
                   <span className="block text-[12px] font-bold text-[#000000]/40 uppercase tracking-wide mb-1">Location</span>
                   <span className="font-semibold text-[#000000] text-base">Prime Area, Jakarta</span>
                </div>
                <div>
                   <span className="block text-[12px] font-bold text-[#000000]/40 uppercase tracking-wide mb-1">Price Info</span>
                   <span className="font-semibold text-[#000000] text-base">Contact for Details</span>
                </div>
             </div>
             
             <a href="https://wa.me/6282239415718" target="_blank" rel="noreferrer" className="bg-[#3C2A21] text-white font-bold text-base px-8 py-5 rounded-full text-center hover:scale-[1.02] active:scale-[0.98] transition-all max-w-[300px]">
               Inquire Now
             </a>
          </div>
        </div>

      </div>
    </div>
  );
}
