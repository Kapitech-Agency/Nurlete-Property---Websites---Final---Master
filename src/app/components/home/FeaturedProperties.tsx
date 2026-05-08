import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Bed, Bath, Square, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../common/ImageWithFallback';

export function FeaturedProperties() {
  const property = {
    title: "Nava Terra Cluster",
    location: "Halong Atas, Ambon",
    priceDisplay: "Open for Booking",
    category: "Cluster Housing",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    beds: 3,
    baths: 2,
    area: "75 m²",
    description: "Our 2026 flagship project. Built on solid coral foundations in Halong Atas, offering modern design, practical layouts, and safe housing for families.",
    link: "/project/nava-terra"
  };

  return (    <section className="py-20 md:py-24 bg-[#F5F4F0] w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16 gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#3C2A21]/5 border border-[#3C2A21]/10 rounded-full mb-6">
             <Sparkles size={14} className="text-[#3C2A21]" />
             <span className="text-[#3C2A21] font-bold uppercase tracking-[0.2em] text-[10px]">Quality Living</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#000000]">
            Our Active <br /> Development.
          </h2>
        </div>
        <Link to="/portfolios" className="inline-flex items-center gap-3 bg-white border border-[#000000]/10 text-[#000000] px-8 py-4 rounded-full font-bold text-base hover:bg-[#000000] hover:text-white transition-all shadow-[0_8px_16px_rgba(0,0,0,0.03)] group min-h-[44px]">
          View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-[#000000]/10 rounded-3xl md:rounded-[3rem] overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.03)] hover:shadow-[0_48px_64px_rgba(0,0,0,0.08)] transition-all group flex flex-col lg:flex-row mx-auto"
      >
        <div className="relative w-full lg:w-[55%] min-h-[300px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden">
          <ImageWithFallback
            src={property.image}
            alt={property.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[8s]"
          />
          <div className="absolute top-6 right-6">
            <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-md text-[#3C2A21] text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
              {property.category}
            </span>
          </div>
          <div className="absolute bottom-6 left-6">
            <div className="bg-[#3C2A21] text-white px-5 py-2.5 rounded-full font-bold text-lg shadow-xl">
              {property.priceDisplay}
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 lg:p-16 flex-1 flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#000000] tracking-tight mb-4">{property.title}</h3>
          <div className="flex items-center gap-2 text-[#000000]/50 mb-8 font-medium text-base">
            <MapPin size={18} />
            <span>{property.location}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-8 text-[#000000]/80">
            {property.beds ? (
              <div className="flex items-center gap-2 bg-[#F5F4F0] px-4 py-2.5 rounded-2xl">
                <Bed size={18} className="text-[#3C2A21]" />
                <span className="font-bold text-sm">{property.beds}</span>
              </div>
            ) : null}
            {property.baths ? (
              <div className="flex items-center gap-2 bg-[#F5F4F0] px-4 py-2.5 rounded-2xl">
                <Bath size={18} className="text-[#3C2A21]" />
                <span className="font-bold text-sm">{property.baths}</span>
              </div>
            ) : null}
            <div className="flex items-center gap-2 bg-[#F5F4F0] px-4 py-2.5 rounded-2xl">
              <Square size={18} className="text-[#3C2A21]" />
              <span className="font-bold text-sm">{property.area}</span>
            </div>
          </div>

          <p className="text-[#000000]/70 text-lg md:text-xl leading-[1.6] mb-12 flex-1 font-medium">
            {property.description}
          </p>

          <Link 
            to={property.link} 
            className="w-full sm:w-auto inline-flex justify-center bg-[#000000] text-white px-8 py-5 rounded-2xl font-bold text-base hover:bg-[#3C2A21] active:scale-[0.98] transition-all shadow-md mt-auto gap-3 items-center min-h-[44px]"
          >
            View Property Details <ArrowRight size={20} />
          </Link>
        </div>
      </motion.div>
    </div>
    </section>
  );
}
