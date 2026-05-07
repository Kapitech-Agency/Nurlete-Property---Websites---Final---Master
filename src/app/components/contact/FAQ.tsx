import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
 {
 q: "What is the timeline for the unit handover schedule?",
 a: "For the Nava Terra phase 1 cluster, we guarantee key handover within 8 to 12 months after the initial DP (Down Payment) or Akad Kredit is finalized. We prioritize strict alignment with our structural roadmap."
 },
 {
 q: "What are the property legality and ownership documents provided?",
 a: "Every unit includes a fully split Sertifikat Hak Milik (SHM) or Freehold Title, along with the approved IMB (Izin Mendirikan Bangunan) and PBB. The certificate can be immediately transferred to your name upon full payment."
 },
 {
 q: "Is the Booking Fee refundable?",
 a: "The Booking Fee of Rp 10.000.000 is 100% refundable if the KPR (Mortgage) application is rejected by 3 different banks. However, if canceled unilaterally by the buyer, the fee is forfeited."
 },
 {
 q: "Can I customize the interior layout?",
 a: "Our modern minimalist blueprint is meticulously designed for optimal airflow and space. While structural walls cannot be moved, we allow minor modifications for non-load-bearing room partitions prior to the structural build phase."
 }
];

export function FAQ() {
 const [openIndex, setOpenIndex] = useState<number | null>(0);

 return (
 <section className="py-[120px] md:py-[180px] bg-[#F5F4F0] relative z-10 border-t border-[#000000]/[0.05]">
 <div className="max-w-[1000px] mx-auto px-[20px] md:px-[80px]">
 
 <div className="text-center mb-[80px] flex flex-col items-center">
   <div className="w-[64px] h-[64px] rounded-[24px] bg-[#3C2A21] text-white flex items-center justify-center shadow-xl mb-[32px]">
      <MessageCircleQuestion size={32} />
   </div>
 <h2 className="font-sans text-[40px] md:text-[64px] font-semibold text-[#000000] tracking-tight mb-[24px]">
 Frequently Asked Questions.
 </h2>
 <p className="font-sans text-[#000000]/60 text-[18px] md:text-[20px] leading-[1.7] font-medium max-w-2xl mx-auto">
 Clarity is essential in luxury real estate. Find answers to common compliance, customization, and timeline inquiries.
 </p>
 </div>

 <div className="flex flex-col gap-[24px]">
 {faqs.map((faq, idx) => {
 const isOpen = openIndex === idx;
 return (
 <div 
 key={idx} 
 className={`bg-white rounded-[32px] md:rounded-[40px] border border-[#000000]/[0.05] shadow-[0_4px_16px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-500 ${isOpen ? 'shadow-[0_24px_48px_rgba(0,0,0,0.05)] border-[#3C2A21]/20 -translate-y-1' : ''}`}
 >
 <button
 onClick={() => setOpenIndex(isOpen ? null : idx)}
 className="w-full text-left px-[32px] py-[32px] md:px-[48px] md:py-[40px] flex justify-between items-center font-sans font-semibold text-[18px] md:text-[22px] text-[#000000] hover:bg-[#F5F4F0]/50 transition-colors"
 >
 <span className="pr-[32px] leading-[1.3]">{faq.q}</span>
 <div className={`w-[48px] h-[48px] flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#3C2A21] text-white rotate-180' : 'bg-[#F5F4F0] text-[#000000]'}`}>
   <ChevronDown className="w-6 h-6" />
 </div>
 </button>
 <AnimatePresence>
 {isOpen && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: 'auto', opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.4, ease: "easeInOut" }}
 >
 <div className="px-[32px] md:px-[48px] pb-[40px] pt-0 text-[#000000]/60 font-sans font-medium text-[16px] md:text-[18px] leading-[1.7]">
 {faq.a}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
 })}
 </div>
 </div>
 </section>
 );
}
