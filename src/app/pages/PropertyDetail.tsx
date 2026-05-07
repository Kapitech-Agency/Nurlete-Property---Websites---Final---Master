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
    <div className="pt-[160px] pb-[120px] md:pb-[160px] w-full z-10 bg-[#F5F4F0] relative min-h-screen">
      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[80px] w-full relative z-10">
        
        <div className="flex items-center gap-[12px] mb-[48px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Link to="/properties" className="text-[#000000] hover:text-[#000000]/70 font-bold text-[13px] tracking-wide transition-colors whitespace-nowrap flex items-center gap-[4px] min-h-[44px]"> <ArrowLeft size={16} /> Back to Properties</Link>
          <span className="text-[#000000]/20">|</span>
          <span className="text-[#000000]/40 font-bold text-[13px] tracking-wide whitespace-nowrap uppercase">Property #{id}</span>
        </div>
        
        <div className="bg-white rounded-[48px] overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.05)] border border-[#3C2A21]/10 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 aspect-square lg:aspect-auto bg-gray-200">
             <img src={"https://images.unsplash.com/photo-1706808849803-f61304e024ab?w=1600&q=80"} alt="Property Layout" className="w-full h-full object-cover" />
          </div>
          <div className="lg:w-1/2 p-[48px] md:p-[80px] flex flex-col justify-center">
             <h1 className="text-[32px] md:text-[48px] font-bold text-[#000000] mb-[24px]">Premium Property {id}</h1>
             <p className="text-[18px] text-[#000000]/60 mb-[48px] font-medium leading-[1.6]">
               An exquisitely designed property featuring the finest materials, situated in a prime location. Perfectly suited for modern living with full amenities and exceptional architectural details.
             </p>
             <div className="grid grid-cols-2 gap-[24px] mb-[48px]">
                <div>
                   <span className="block text-[12px] font-bold text-[#000000]/40 uppercase tracking-wide mb-[2px]">Location</span>
                   <span className="font-semibold text-[#000000] text-[16px]">Prime Area, Jakarta</span>
                </div>
                <div>
                   <span className="block text-[12px] font-bold text-[#000000]/40 uppercase tracking-wide mb-[2px]">Price Info</span>
                   <span className="font-semibold text-[#000000] text-[16px]">Contact for Details</span>
                </div>
             </div>
             
             <a href="https://wa.me/6282239415718" target="_blank" rel="noreferrer" className="bg-[#3C2A21] text-white font-bold text-[16px] px-[32px] py-[20px] rounded-full text-center hover:scale-[1.02] active:scale-[0.98] transition-all max-w-[300px]">
               Inquire Now
             </a>
          </div>
        </div>

      </div>
    </div>
  );
}
