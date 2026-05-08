import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowUpRight, Mail, MapPin, Send, HeartHandshake } from 'lucide-react';
import { PurchasingFlow } from '../components/contact/PurchasingFlow';
import { FAQ } from '../components/contact/FAQ';

export default function Contact() {
  const [inquiryType, setInquiryType] = useState<'message' | 'call'>('message');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    callTime: 'morning'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (inquiryType === 'message' && !formData.message.trim()) {
       newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '', callTime: 'morning' });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <div className="bg-[#F5F4F0] min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-24 w-full">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-[#3C2A21]/15 rounded-3xl md:rounded-[4rem] p-8 md:p-16 lg:p-24 shadow-[0_32px_80px_rgba(0,0,0,0.03)] text-center"
          >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3C2A21]/5 text-[#3C2A21] mb-8 min-h-[44px]">
            <span className="w-2 h-2 rounded-full bg-[#3C2A21] animate-pulse" />
            <span className="font-bold uppercase tracking-[0.2em] text-[11px]">Talk to Us</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.05] font-semibold text-[#000000] tracking-tight mb-8 max-w-4xl mx-auto">
            Find Your New <br/> Affordable Home.
          </h1>

          <p className="text-[#000000]/60 text-base md:text-lg leading-[1.7] max-w-2xl mx-auto font-medium">
            Contact us today to learn more about Nava Terra and see how you can own a piece of this accessible housing cluster.
          </p>
        </motion.div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="w-full pb-20 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Contact Info & Map */}
          <div className="space-y-12 bg-[#000000] text-white p-8 md:p-12 lg:p-16 rounded-3xl md:rounded-[4rem] shadow-3xl overflow-hidden relative min-h-[600px] md:min-h-[800px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Contact Details.</h2>
              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 mb-3 flex items-center gap-2">
                    <MapPin size={14} className="text-[#3C2A21]" /> Main Office
                  </h4>
                  <p className="text-lg font-medium leading-relaxed">
                    Ruko Harvest, Jl W R Supratman No 7, <br/>
                    Cempaka Putih, Ciputat Timur, <br/>
                    Tangerang Selatan, Banten 15412
                  </p>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 mb-3 flex items-center gap-2">
                    <MapPin size={14} className="text-[#3C2A21]" /> Marketing Office (Nava Terra)
                  </h4>
                  <p className="text-lg font-medium leading-relaxed">
                    Halong Atas, Ambon, Maluku
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <a href="mailto:sales@nurleteproperty.com" className="flex items-center gap-6 p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white hover:text-[#000000] transition-all group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#000000]/10 group-hover:text-[#000000] group-hover:scale-110 transition-all shrink-0">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 group-hover:text-[#000000]/60 mb-1">Sales Inquiries</span>
                  <span className="font-semibold text-sm md:text-base truncate">sales@nurleteproperty.com</span>
                </div>
              </a>

              <a href="mailto:business@nurleteproperty.com" className="flex items-center gap-6 p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white hover:text-[#000000] transition-all group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#000000]/10 group-hover:text-[#000000] group-hover:scale-110 transition-all shrink-0">
                  <HeartHandshake size={20} />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 group-hover:text-[#000000]/60 mb-1">Business Relations</span>
                  <span className="font-semibold text-sm md:text-base truncate">business@nurleteproperty.com</span>
                </div>
              </a>
            </div>

            {/* Services */}
            <div className="relative z-10 pt-6 border-t border-white/10">
              <span className="block text-white/40 font-bold uppercase tracking-widest text-[11px] mb-4">Our Services</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 text-white/80 font-medium text-[14px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" /> Private Site Tours
                </li>
                <li className="flex items-center gap-3 text-white/80 font-medium text-[14px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" /> Mortgage (KPR) Advisory
                </li>
                <li className="flex items-center gap-3 text-white/80 font-medium text-[14px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" /> Unit Customization Check
                </li>
                <li className="flex items-center gap-3 text-white/80 font-medium text-[14px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" /> Investment Yield Modeling
                </li>
              </ul>
            </div>

            {/* Map Embedded */}
            <div className="w-full h-80 md:h-96 rounded-[2rem] overflow-hidden border border-white/10 relative z-10 mt-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15926.89201946026!2d128.1884!3d-3.6669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d6ce8982f1465ad%3A0xc6c764e42ed3b934!2sAmbon%2C%20Maluku!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Nurlete Property Location"
                className="grayscale contrast-125 opacity-80"
              />
              <div className="absolute top-6 left-6 bg-[#000000]/90 backdrop-blur-xl px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 border border-white/10">
                 <MapPin size={18} className="text-white" />
                 <span className="font-bold text-[14px]">Halong Atas, Ambon</span>
              </div>
            </div>

          </div>

          {/* Lead Gen Form */}
          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-3xl md:rounded-[4rem] border border-[#3C2A21]/15 shadow-[0_24px_64px_rgba(0,0,0,0.03)] h-full flex flex-col justify-start">
            <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#000000] tracking-tight leading-tight">How can we <br/> help you?</h3>
              <div className="bg-[#F5F4F0] p-1 rounded-full inline-flex border border-[#000000]/5 self-start shrink-0">
                <button 
                  onClick={() => setInquiryType('message')}
                  className={`px-6 py-3 rounded-full font-bold text-[13px] tracking-widest uppercase transition-all ${inquiryType === 'message' ? 'bg-white shadow-md text-[#3C2A21]' : 'text-[#000000]/40 hover:text-[#000000]/80'}`}
                >
                  Message
                </button>
                <button 
                  onClick={() => setInquiryType('call')}
                  className={`px-6 py-3 rounded-full font-bold text-[13px] tracking-widest uppercase transition-all ${inquiryType === 'call' ? 'bg-white shadow-md text-[#3C2A21]' : 'text-[#000000]/40 hover:text-[#000000]/80'}`}
                >
                  Schedule Call
                </button>
              </div>
            </div>
              
              {isSuccess ? (
                <div className="bg-[#F5F4F0] flex-1 text-[#3C2A21] p-6 rounded-[32px] border border-[#3C2A21]/10 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <Send size={32} className="text-[#3C2A21]" />
                  </div>
                  <h4 className="font-semibold text-2xl mb-3">Request Received</h4>
                  <p className="font-medium text-[#000000]/60 text-lg">Our senior advisor will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-widest text-[#000000]/60 mb-3">Full Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full bg-[#fcfcfc] border ${errors.name ? 'border-red-500' : 'border-[#000000]/10'} rounded-[16px] px-5 py-4 text-base font-medium focus:outline-none focus:border-[#3C2A21] focus:-translate-y-1 focus:shadow-lg transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-[12px] font-medium mt-2">{errors.name}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[13px] font-bold uppercase tracking-widest text-[#000000]/60 mb-3">Email Address</label>
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                        className={`w-full bg-[#fcfcfc] border ${errors.email ? 'border-red-500' : 'border-[#000000]/10'} rounded-[16px] px-5 py-4 text-base font-medium focus:outline-none focus:border-[#3C2A21] focus:-translate-y-1 focus:shadow-lg transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-[12px] font-medium mt-2">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold uppercase tracking-widest text-[#000000]/60 mb-3">Phone Number</label>
                      <input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                        className={`w-full bg-[#fcfcfc] border ${errors.phone ? 'border-red-500' : 'border-[#000000]/10'} rounded-[16px] px-5 py-4 text-base font-medium focus:outline-none focus:border-[#3C2A21] focus:-translate-y-1 focus:shadow-lg transition-all`}
                        placeholder="+62 8..."
                      />
                      {errors.phone && <p className="text-red-500 text-[12px] font-medium mt-2">{errors.phone}</p>}
                    </div>
                  </div>

                  {inquiryType === 'message' ? (
                    <div>
                      <label className="block text-[13px] font-bold uppercase tracking-widest text-[#000000]/60 mb-3">Your Message</label>
                      <textarea 
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className={`w-full bg-[#fcfcfc] border ${errors.message ? 'border-red-500' : 'border-[#000000]/10'} rounded-[16px] px-5 py-4 text-base font-medium focus:outline-none focus:border-[#3C2A21] focus:-translate-y-1 focus:shadow-lg transition-all resize-none`}
                        placeholder="I am interested in..."
                      />
                      {errors.message && <p className="text-red-500 text-[12px] font-medium mt-2">{errors.message}</p>}
                    </div>
                  ) : (
                    <div>
                      <label className="block text-[13px] font-bold uppercase tracking-widest text-[#000000]/60 mb-3">Preferred Call Time</label>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                        {[
                          { id: 'morning', label: 'Morning', desc: '09:00 - 12:00' },
                          { id: 'afternoon', label: 'Afternoon', desc: '13:00 - 15:00' },
                          { id: 'evening', label: 'Evening', desc: '16:00 - 18:00' },
                          { id: 'night', label: 'Night', desc: '19:00 - 21:00' }
                        ].map(slot => (
                          <div 
                            key={slot.id}
                            onClick={() => setFormData({...formData, callTime: slot.id})}
                            className={`border rounded-[16px] p-4 cursor-pointer transition-all ${formData.callTime === slot.id ? 'border-[#3C2A21] bg-[#3C2A21]/5 shadow-sm' : 'border-[#000000]/10 bg-[#fcfcfc] hover:border-[#000000]/30'}`}
                          >
                            <span className="block font-bold text-[14px] text-[#000000]">{slot.label}</span>
                            <span className="block font-medium text-[12px] text-[#000000]/50 mt-1">{slot.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-auto pt-6">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#000000] text-white font-bold text-base px-8 py-5 min-h-[64px] rounded-full hover:bg-[#3C2A21] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-3 shadow-2xl"
                    >
                      {isSubmitting ? 'Sending Request...' : 'Submit Request'} <ArrowUpRight size={20} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <PurchasingFlow />
      <FAQ />

    </div>
  );
}
