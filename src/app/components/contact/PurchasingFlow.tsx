import React from 'react';
import { motion } from 'motion/react';
import { Banknote, Landmark, FileCheck } from 'lucide-react';

export function PurchasingFlow() {
 const steps = [
 {
 title: "Select & Reserve",
 desc: "Choose your preferred unit in Nava Terra. Place a refundable booking fee of Rp 10.000.000 to lock the site.",
 icon: <FileCheck className="w-8 h-8" />
 },
 {
 title: "Document Verification",
 desc: "Provide your ID (KTP/NPWP) and sign the initial SPR (Surat Pesanan Rumah) within 7 days of booking.",
 icon: <Landmark className="w-8 h-8" />
 },
 {
 title: "Payment Modality",
 desc: "Proceed with Hard Cash (3 installments) or secure a KPR (Mortgage) with our partner banks (BCA, Mandiri, BRI).",
 icon: <Banknote className="w-8 h-8" />
 }
 ];

 return (
 <section className="py-[120px] md:py-[180px] bg-white relative z-10 border-t border-[#000000]/[0.05]">
 <div className="max-w-[1600px] mx-auto px-[20px] md:px-[80px]">
 
 <div className="text-center mb-[80px]">
   <div className="inline-flex items-center gap-[8px] px-[20px] py-[10px] rounded-full bg-[#f1f1f1] text-[#000000]/60 mb-[24px]">
     <span className="font-bold uppercase tracking-[0.2em] text-[11px]">Process Overview</span>
   </div>
 <h2 className="font-sans text-[40px] md:text-[64px] font-semibold text-[#000000] tracking-tight mb-[24px]">
 Purchasing Procedure.
 </h2>
 <p className="font-sans text-[#000000]/60 max-w-2xl mx-auto text-[18px] md:text-[20px] leading-[1.7] font-medium">
 Transparent, secure, and fully guided. Whether you prefer cash installments or leveraging banking partnerships.
 </p>
 </div>

 <div className="grid lg:grid-cols-3 gap-[32px] mb-[80px]">
 {steps.map((step, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.8, delay: idx * 0.15 }}
 className="bg-[#F5F4F0] p-[48px] rounded-[48px] border border-[#000000]/[0.05] relative overflow-hidden group hover:bg-[#3C2A21] hover:text-white transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
 >
 <div className="text-[#000000]/5 font-bold text-[120px] leading-none absolute -right-[20px] -bottom-[24px] pointer-events-none group-hover:text-white/5 transition-colors duration-500">
 0{idx + 1}
 </div>
 <div className="w-[80px] h-[80px] rounded-full bg-white text-[#3C2A21] flex items-center justify-center mb-[40px] shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-transform group-hover:scale-110 duration-500">
 {step.icon}
 </div>
 <h3 className="font-sans text-[28px] font-semibold mb-[20px] leading-[1.3] text-[#000000] group-hover:text-white transition-colors duration-500">
 {step.title}
 </h3>
 <p className="font-sans text-[#000000]/60 text-[16px] md:text-[18px] leading-[1.7] group-hover:text-white/70 transition-colors duration-500">
 {step.desc}
 </p>
 </motion.div>
 ))}
 </div>

 <div className="grid md:grid-cols-2 gap-[32px]">
 <div className="bg-[#000000] text-white p-[48px] md:p-[64px] rounded-[48px] md:rounded-[64px] border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.2)] flex flex-col justify-between">
 <div>
   <h4 className="text-[28px] lg:text-[36px] font-bold tracking-tight mb-[32px]">Method A: Hard Cash</h4>
   <ul className="space-y-[24px] text-white/80 text-[16px] md:text-[18px] font-medium border-t border-white/10 pt-[32px]">
   <li className="flex justify-between items-center"><span className="text-white">Booking Fee:</span> Rp 10M</li>
   <li className="flex justify-between items-center"><span className="text-white">DP 30%:</span> Day 14</li>
   <li className="flex justify-between items-center"><span className="text-white">Installment 1 (35%):</span> Month 3</li>
   <li className="flex justify-between items-center"><span className="text-white">Pelunasan (35%):</span> Handover</li>
   </ul>
 </div>
 </div>
 <div className="bg-white p-[48px] md:p-[64px] rounded-[48px] md:rounded-[64px] border border-[#3C2A21]/15 shadow-[0_24px_64px_rgba(0,0,0,0.03)] flex flex-col justify-between">
 <div>
   <h4 className="text-[28px] lg:text-[36px] font-bold tracking-tight mb-[32px] text-[#000000]">Method B: KPR Mortgage</h4>
   <ul className="space-y-[24px] text-[#000000]/70 text-[16px] md:text-[18px] font-medium border-t border-[#3C2A21]/15 pt-[32px]">
   <li className="flex justify-between items-center"><span className="text-[#000000]">Booking Fee:</span> Rp 10M</li>
   <li className="flex justify-between items-center"><span className="text-[#000000]">Bank Application:</span> 14 Days max</li>
   <li className="flex justify-between items-center"><span className="text-[#000000]">DP Approval:</span> Day 30</li>
   <li className="flex justify-between items-center"><span className="text-[#000000]">Akad Kredit:</span> After DP clearing</li>
   </ul>
 </div>
 </div>
 </div>

 </div>
 </section>
 );
}
