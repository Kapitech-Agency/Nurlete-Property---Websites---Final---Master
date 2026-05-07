import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#F5F4F0] min-h-screen pt-[160px] pb-[120px] px-[20px] md:px-[80px]">
      <div className="max-w-[800px] mx-auto bg-white p-[40px] md:p-[64px] rounded-[48px] shadow-[0_32px_64px_rgba(0,0,0,0.03)] border border-[#000000]/10">
        <h1 className="text-[40px] md:text-[56px] font-semibold tracking-tight text-[#000000] mb-[24px]">Privacy Policy</h1>
        <div className="w-[40px] h-[4px] bg-[#3C2A21] mb-[48px]"></div>
        
        <div className="space-y-[32px] text-[#000000]/70 text-[16px] md:text-[18px] leading-[1.7] font-medium">
          <section>
            <h2 className="text-[24px] font-bold text-[#000000] mb-[16px]">1. Data Collection</h2>
            <p>At Nurlete Property, we value your privacy. We collect only essential contact information—your name, phone number, and email address—solely for the purpose of communicating with you regarding your property inquiries.</p>
          </section>
          
          <section>
            <h2 className="text-[24px] font-bold text-[#000000] mb-[16px]">2. Use of Information</h2>
            <p>Your data is utilized exclusively to provide relevant real estate information, personalized unit availability updates, and direct communication through channels such as WhatsApp or email.</p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold text-[#000000] mb-[16px]">3. No Third-Party Sharing</h2>
            <p>We do not sell, trade, or share your personal information with external third parties under any circumstance. Your information remains secure within our internal systems.</p>
          </section>
          
          <section>
            <h2 className="text-[24px] font-bold text-[#000000] mb-[16px]">4. Contact Us</h2>
            <p>If you would like to request data modification or deletion from our systems, please send an email to contact@nurlete.com. All requests are processed accordingly.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
