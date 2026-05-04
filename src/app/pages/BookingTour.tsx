import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, ChevronDown, CalendarDays, Clock, User, CheckCircle2 } from 'lucide-react';

export default function BookingTour() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Fake state for Calendar UI
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const waLink = "https://wa.me/6282239415718";
  const contactNumber = "0822-3941-5718";

  const faqs = [
    { question: "How do I schedule a private viewing?", answer: `You can schedule a private viewing by reaching out to our sales team via WhatsApp at ${contactNumber}, or by using the scheduling tool above. Viewings are strictly by appointment to ensure personalized service.` },
    { question: "Do you offer international investment assistance?", answer: "Yes. Our investment desk handles all legal, tax, and regulatory compliance for buyers looking to invest in Nava Terra and Nurlete Property." },
    { question: "What is the typical down payment required?", answer: "For premium clusters like Nava Terra, down payment structures can be discussed directly with our sales team. We partner with leading banks to offer exclusive mortgage rates." },
    { question: "Are your properties pet-friendly?", answer: "Absolutely. All our residential clusters feature pet-friendly environments and durable flooring options designed with your entire family in mind." }
  ];

  // Mock Calendar Data
  const days = [14, 15, 16, 17, 18, 19, 20]; // Mock dates in May 2026
  const times = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "04:30 PM"];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-[160px] pb-0 w-full z-10 bg-[#F5F4F0] font-['Inter'] relative overflow-hidden">
      
      {/* Background Ambient */}
      <div className="absolute top-0 right-0 w-full md:w-[50%] h-[100vh] z-0 opacity-[0.03] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
          alt="facade" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-transparent to-[#F5F4F0]" />
      </div>

      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto relative z-10 w-full mb-[120px] md:mb-[160px]">
        
        <div className="text-center mb-[64px] md:mb-[96px] w-full">
          <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-white/80 backdrop-blur-xl border border-[#1A1A1A]/10 mb-[24px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.03)] min-h-[44px]">
            <span className="w-[8px] h-[8px] rounded-full bg-[#1A1A1A] shadow-[0_0_8px_rgba(26,26,26,0.3)]" />
            <span className="text-[#1A1A1A]/80 font-bold uppercase tracking-[0.2em] text-[11px] leading-none">Private Showings</span>
          </div>
          <h1 className="font-['Inter'] text-[36px] md:text-[56px] leading-[1.2] md:leading-[1.1] font-semibold text-[#1A1A1A] tracking-tight mb-[24px]">Book a Private Tour</h1>
          <p className="font-['Inter'] text-[#1A1A1A]/50 text-[15px] md:text-[16px] leading-[1.6] font-medium max-w-2xl mx-auto w-full">
            Experience the sophisticated minimalism and uncompromising quality of Nava Terra firsthand. Secure an exclusive on-site appointment with our sales directors.
          </p>
        </div>

        {/* Calendar UI Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-[64px] w-full items-start">
          
          {/* Left: Schedule Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:col-span-7 w-full bg-white/80 backdrop-blur-[60px] border border-[#1A1A1A]/[0.05] rounded-[32px] md:rounded-[48px] p-[32px] md:p-[48px] shadow-[0_32px_80px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)]"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] py-[64px]">
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 15 }}
                  className="w-[80px] h-[80px] bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-[24px] shadow-[inset_0_0_0_1px_rgba(37,211,102,0.2)]"
                >
                  <CheckCircle2 size={40} />
                </motion.div>
                <h3 className="font-semibold text-[#1A1A1A] text-[28px] mb-[16px]">Tour Requested</h3>
                <p className="text-[#1A1A1A]/60 font-medium max-w-md mb-[32px]">Your private tour request has been securely submitted. Our sales director will process it shortly.</p>
                <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-[8px] bg-[#25D366] text-white px-[24px] py-[16px] rounded-full font-bold text-[15px] shadow-[0_8px_24px_rgba(37,211,102,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all min-h-[56px]">
                  <MessageCircle size={20} /> Ping Us on WhatsApp Now
                </a>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="flex flex-col h-full w-full">
                {/* Date Picker */}
                <div className="mb-[40px]">
                  <div className="flex items-center justify-between mb-[20px]">
                    <h3 className="font-semibold text-[#1A1A1A] text-[18px] flex items-center gap-[12px]"><CalendarDays size={20} className="text-[#1A1A1A]/40" /> Select Date</h3>
                    <span className="text-[#1A1A1A]/40 font-bold text-[12px] uppercase tracking-wider">May 2026</span>
                  </div>
                  <div className="grid grid-cols-7 gap-[8px] md:gap-[12px]">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                      <div key={i} className="text-center font-bold text-[12px] text-[#1A1A1A]/30 uppercase mb-[8px]">{d}</div>
                    ))}
                    {days.map((date) => (
                      <button
                        type="button"
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`aspect-square rounded-[16px] md:rounded-[20px] flex items-center justify-center font-bold text-[15px] md:text-[16px] transition-all min-h-[44px] ${
                          selectedDate === date 
                            ? 'bg-[#1A1A1A] text-white shadow-[0_8px_24px_rgba(26,26,26,0.3)] scale-105' 
                            : 'bg-white border border-[#1A1A1A]/10 text-[#1A1A1A] hover:border-[#1A1A1A]/30 hover:bg-[#1A1A1A]/5'
                        }`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Picker */}
                <div className="mb-[40px]">
                  <h3 className="font-semibold text-[#1A1A1A] text-[18px] flex items-center gap-[12px] mb-[20px]"><Clock size={20} className="text-[#1A1A1A]/40" /> Select Time</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-[12px]">
                    {times.map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-[16px] py-[12px] px-[16px] font-semibold text-[14px] transition-all border min-h-[44px] ${
                          selectedTime === time 
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[0_8px_24px_rgba(26,26,26,0.3)] scale-[1.02]' 
                            : 'bg-white border-[#1A1A1A]/10 text-[#1A1A1A]/70 hover:border-[#1A1A1A]/30 hover:bg-[#1A1A1A]/5'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personal Details */}
                <div className="mb-[48px] space-y-[20px]">
                   <h3 className="font-semibold text-[#1A1A1A] text-[18px] flex items-center gap-[12px] mb-[20px]"><User size={20} className="text-[#1A1A1A]/40" /> Your Details</h3>
                   <input type="text" placeholder="Full Name" required className="w-full bg-white/50 backdrop-blur-md border border-[#1A1A1A]/10 rounded-[20px] px-[24px] py-[16px] min-h-[56px] focus:outline-none focus:border-[#1A1A1A]/30 focus:bg-white focus:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all font-medium placeholder:text-[#1A1A1A]/40 text-[#1A1A1A] shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]" />
                   <input type="tel" placeholder="WhatsApp Number" required className="w-full bg-white/50 backdrop-blur-md border border-[#1A1A1A]/10 rounded-[20px] px-[24px] py-[16px] min-h-[56px] focus:outline-none focus:border-[#1A1A1A]/30 focus:bg-white focus:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all font-medium placeholder:text-[#1A1A1A]/40 text-[#1A1A1A] shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]" />
                </div>

                <button 
                  type="submit" 
                  disabled={!selectedDate || !selectedTime}
                  className="mt-auto w-full bg-[#1A1A1A] text-white rounded-[20px] py-[20px] font-bold text-[16px] transition-all shadow-[0_16px_32px_rgba(26,26,26,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_24px_48px_rgba(26,26,26,0.3)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none min-h-[56px]"
                >
                  Confirm Appointment
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Direct WA CTA & Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col lg:col-span-5 w-full gap-[32px]"
          >
            {/* Express VIP Contact */}
            <div className="w-full bg-[#1A1A1A] text-white rounded-[32px] md:rounded-[48px] p-[40px] md:p-[48px] shadow-[0_32px_80px_rgba(26,26,26,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)] relative overflow-hidden flex flex-col justify-center items-center text-center selection:bg-white selection:text-[#1A1A1A]">
              <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-bl from-white/10 to-transparent rounded-bl-[100%] pointer-events-none" />
              <div className="w-[80px] h-[80px] bg-white/10 rounded-full flex items-center justify-center mb-[32px] border border-white/20">
                <MessageCircle size={36} className="text-white" />
              </div>
              <h2 className="font-['Inter'] text-[28px] leading-[1.2] font-semibold mb-[16px] tracking-tight">Fastest Response</h2>
              <p className="font-['Inter'] text-[15px] text-white/60 leading-[1.6] mb-[40px] w-full">
                Skip the scheduling. Talk directly with our dedicated sales agents on WhatsApp for immediate pricing and availability info.
              </p>
              <a href={waLink} target="_blank" rel="noreferrer" className="w-full bg-[#25D366] text-white rounded-full px-[32px] py-[20px] min-h-[56px] min-w-[44px] font-['Inter'] font-bold text-[16px] leading-[1.5] shadow-[0_16px_32px_rgba(37,211,102,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-[12px]">
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>

            {/* Support Info */}
            <div className="w-full bg-white/80 backdrop-blur-[40px] border border-[#1A1A1A]/[0.05] rounded-[32px] p-[40px] shadow-[0_16px_40px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)]">
              <h3 className="font-['Inter'] text-[#1A1A1A] font-semibold text-[20px] leading-[1.3] mb-[32px]">Direct Contact</h3>
              
              <div className="space-y-[24px]">
                <div className="flex items-start gap-[16px] text-[#1A1A1A]/60 font-medium text-[15px] leading-[1.6]">
                  <MapPin size={24} className="shrink-0 text-[#1A1A1A]/40 mt-[2px]" />
                  <div>
                    <strong className="text-[#1A1A1A] block mb-[4px]">Nava Terra Site</strong>
                    Jl. PHB Halong Atas<br/>Ambon, Maluku 97231
                  </div>
                </div>
                <div className="flex items-center gap-[16px] text-[#1A1A1A]/60 font-medium text-[15px] leading-[1.6] min-h-[44px]">
                  <Phone size={24} className="shrink-0 text-[#1A1A1A]/40" />
                  <p>{contactNumber}</p>
                </div>
                <div className="flex items-center gap-[16px] text-[#1A1A1A]/60 font-medium text-[15px] leading-[1.6] min-h-[44px]">
                  <Mail size={24} className="shrink-0 text-[#1A1A1A]/40" />
                  <p>sales@navaterra.id</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FAQs */}
      <section className="px-[20px] md:px-[80px] max-w-4xl mx-auto mb-[120px] md:mb-[160px] w-full">
        <div className="text-center mb-[64px] md:mb-[96px] w-full">
          <h2 className="font-['Inter'] text-[28px] md:text-[40px] leading-[1.2] font-semibold text-[#1A1A1A] tracking-tight mb-[16px]">Viewing Policies & FAQ</h2>
        </div>

        <div className="space-y-[24px] w-full">
          {faqs.map((faq, idx) => (
            <div key={idx} className="w-full bg-white/80 backdrop-blur-[40px] border border-[#1A1A1A]/[0.05] rounded-[24px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)]">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-[32px] text-left min-[64px] focus:outline-none"
              >
                <span className="font-['Inter'] font-bold text-[16px] md:text-[18px] leading-[1.5] text-[#1A1A1A] pr-[16px]">{faq.question}</span>
                <ChevronDown size={24} className={`shrink-0 text-[#1A1A1A]/50 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#1A1A1A]' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-[32px] pt-0 border-t border-[#1A1A1A]/5 mt-[8px]">
                      <p className="font-['Inter'] text-[15px] md:text-[16px] leading-[1.6] text-[#1A1A1A]/60 font-medium mt-[16px] w-full">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
