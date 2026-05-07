import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Bed, Bath, Square, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../common/ImageWithFallback';

export function FeaturedProperties() {
  const property = {
    title: "Nava Terra Cluster",
    location: "Halong Atas, Ambon",
    priceDisplay: "Early Access",
    category: "Premium Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    beds: 3,
    baths: 2,
    area: "75 m²",
    description: "Our 2026 premium release. Set on solid coral foundations in Halong Atas, offering modern design, exceptional ventilation, and panoramic views.",
    link: "/project/nava-terra"
  };

  return (
    <section className="py-[120px] bg-[#F5F4F0] px-[20px] md:px-[80px] max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-[64px] gap-[32px]">
        <div>
          <div className="inline-flex items-center gap-[8px] px-[16px] py-[6px] bg-[#3C2A21]/5 border border-[#3C2A21]/10 rounded-full mb-[24px]">
             <Sparkles size={14} className="text-[#3C2A21]" />
             <span className="text-[#3C2A21] font-bold uppercase tracking-[0.2em] text-[10px]">Premium Project</span>
          </div>
          <h2 className="text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] font-semibold tracking-tight text-[#000000]">
            Featured <br /> Development.
          </h2>
        </div>
        <Link to="/portfolios" className="inline-flex items-center gap-[12px] bg-white border border-[#000000]/10 text-[#000000] px-[32px] py-[16px] rounded-full font-bold text-[16px] hover:bg-[#000000] hover:text-white transition-all shadow-[0_8px_16px_rgba(0,0,0,0.03)] group">
          View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-[#000000]/10 rounded-[32px] md:rounded-[48px] overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.03)] hover:shadow-[0_48px_64px_rgba(0,0,0,0.08)] transition-all group flex flex-col lg:flex-row mx-auto"
      >
        <div className="relative w-full lg:w-[55%] min-h-[300px] md:min-h-[400px] overflow-hidden">
          <ImageWithFallback
            src={property.image}
            alt={property.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[8s]"
          />
          <div className="absolute top-[24px] right-[24px]">
            <span className="inline-block px-[16px] py-[8px] bg-white/90 backdrop-blur-md text-[#3C2A21] text-[12px] font-bold uppercase tracking-widest rounded-full shadow-lg">
              {property.category}
            </span>
          </div>
          <div className="absolute bottom-[24px] left-[24px]">
            <div className="bg-[#3C2A21] text-white px-[20px] py-[10px] rounded-full font-bold text-[18px] shadow-xl">
              {property.priceDisplay}
            </div>
          </div>
        </div>

        <div className="p-[32px] md:p-[48px] lg:p-[64px] flex-1 flex flex-col justify-center">
          <h3 className="text-[32px] md:text-[40px] font-bold text-[#000000] tracking-tight mb-[16px]">{property.title}</h3>
          <div className="flex items-center gap-[8px] text-[#000000]/50 mb-[32px] font-medium text-[16px]">
            <MapPin size={18} />
            <span>{property.location}</span>
          </div>

          <div className="flex flex-wrap items-center gap-[16px] mb-[32px] text-[#000000]/80">
            {property.beds ? (
              <div className="flex items-center gap-[8px] bg-[#F5F4F0] px-[16px] py-[10px] rounded-[16px]">
                <Bed size={18} className="text-[#3C2A21]" />
                <span className="font-bold text-[14px]">{property.beds}</span>
              </div>
            ) : null}
            {property.baths ? (
              <div className="flex items-center gap-[8px] bg-[#F5F4F0] px-[16px] py-[10px] rounded-[16px]">
                <Bath size={18} className="text-[#3C2A21]" />
                <span className="font-bold text-[14px]">{property.baths}</span>
              </div>
            ) : null}
            <div className="flex items-center gap-[8px] bg-[#F5F4F0] px-[16px] py-[10px] rounded-[16px]">
              <Square size={18} className="text-[#3C2A21]" />
              <span className="font-bold text-[14px]">{property.area}</span>
            </div>
          </div>

          <p className="text-[#000000]/70 text-[18px] md:text-[20px] leading-[1.6] mb-[48px] flex-1 font-medium">
            {property.description}
          </p>

          <Link 
            to={property.link} 
            className="w-full sm:w-auto inline-flex justify-center bg-[#000000] text-white px-[32px] py-[20px] rounded-[16px] font-bold text-[16px] hover:bg-[#3C2A21] active:scale-[0.98] transition-all shadow-md mt-auto gap-[12px] items-center"
          >
            View Property Details <ArrowRight size={20} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
