import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    client: "Andi Wijaya",
    role: "Property Investor",
    text: "The architectural intelligence provided by Nurlete Property is unmatched. My asset in the Nava Terra cluster has already seen a 25% appreciation in just one year. Their structural integrity gave me absolute peace of mind.",
    rating: 5
  },
  {
    id: 2,
    client: "Sarah Jenkins",
    role: "Expatriate Executive",
    text: "Moving to Ambon was a major step, and finding a residence that meets international standards was tough until I discovered Nurlete. The smart layout and quality materials of my unit are incredible.",
    rating: 5
  },
  {
    id: 3,
    client: "Budi Santoso",
    role: "Local Entrepreneur",
    text: "Their strategic terrain curation is real. They don't just sell houses; they analyze the neighborhood's growth trajectory. The concierge service throughout the purchase was seamless and highly professional.",
    rating: 5
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-[120px] md:py-[180px] bg-[#000000] text-white px-[20px] md:px-[80px] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="text-center mb-[80px]">
           <div className="inline-flex items-center gap-[8px] px-[16px] py-[6px] bg-white/5 border border-white/10 rounded-full mb-[24px]">
             <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px]">Client Intelligence</span>
          </div>
          <h2 className="text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] font-semibold tracking-tight text-white mb-[24px]">
            Investor Reflections.
          </h2>
          <p className="text-white/60 text-[18px] md:text-[20px] font-medium max-w-2xl mx-auto">
            Direct insights from our portfolio holders.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          <div className="bg-white/5 border border-white/10 rounded-[48px] p-[40px] md:p-[80px] backdrop-blur-sm relative shadow-2xl">
            <Quote size={80} className="absolute top-[40px] left-[40px] text-white/5" />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 text-center"
            >
              <div className="flex justify-center gap-[8px] mb-[32px]">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={24} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.4] font-medium text-white mb-[48px]">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <h4 className="text-[20px] font-bold text-white mb-[4px]">{testimonials[currentIndex].client}</h4>
                <p className="text-white/40 font-bold uppercase tracking-widest text-[12px]">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-[16px] mt-[48px]">
            <button 
              onClick={prev}
              className="w-[56px] h-[56px] rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#000000] transition-all group shadow-lg"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={next}
              className="w-[56px] h-[56px] rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#000000] transition-all group shadow-lg"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
