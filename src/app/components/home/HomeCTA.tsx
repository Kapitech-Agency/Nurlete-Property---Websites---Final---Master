import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function HomeCTA() {
  return (
    <section className="px-4 md:px-8 w-full my-20 md:my-32 z-10 relative">
      <div className="bg-[#000000] rounded-3xl md:rounded-[4rem] p-12 md:p-20 lg:p-24 text-center relative overflow-hidden shadow-[0_48px_120px_rgba(0,0,0,0.3)]">
        {/* Minimalist architectural hero background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Architectural minimalist texture" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#3C2A21]/20 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md"
          >
            <Sparkles size={16} className="text-[#3C2A21]" />
            <span className="text-white/60 font-bold uppercase tracking-[0.3em] text-[10px]">Your Next Step</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-semibold text-white tracking-tight mb-8">
            Ready to Find <br className="hidden md:block" />
            <span className="text-white/40">Your Next Home?</span>
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl leading-[1.6] font-medium max-w-2xl mx-auto mb-14">
            Contact our team today to learn more about our available cluster homes and find the right space for your family.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/6282239415718" 
              target="_blank" 
              rel="noreferrer" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#3C2A21] text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_24px_48px_rgba(60,42,33,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:bg-[#4d372c] hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[64px]"
            >
              Contact via WhatsApp <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
