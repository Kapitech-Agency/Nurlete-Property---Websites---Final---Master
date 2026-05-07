import React from 'react';

export default function TermsOfService() {
  return (
    <div className="bg-[#F5F4F0] min-h-screen pt-[160px] pb-[120px] px-[20px] md:px-[80px]">
      <div className="max-w-[800px] mx-auto bg-white p-[40px] md:p-[64px] rounded-[48px] shadow-[0_32px_64px_rgba(0,0,0,0.03)] border border-[#000000]/10">
        <h1 className="text-[40px] md:text-[56px] font-semibold tracking-tight text-[#000000] mb-[24px]">Terms of Service</h1>
        <div className="w-[40px] h-[4px] bg-[#3C2A21] mb-[48px]"></div>
        
        <div className="space-y-[32px] text-[#000000]/70 text-[16px] md:text-[18px] leading-[1.7] font-medium">
          <section>
            <h2 className="text-[24px] font-bold text-[#000000] mb-[16px]">1. Agreement to Terms</h2>
            <p>By accessing the Nurlete Property website or interacting with our services, you agree to the following terms and conditions. These terms govern your use of our website and services.</p>
          </section>
          
          <section>
            <h2 className="text-[24px] font-bold text-[#000000] mb-[16px]">2. Accuracy of Information</h2>
            <p>While every architectural rendering, price, and specification is prepared with care, they may be subject to change during development. Final property specifications will be clearly outlined in your purchase agreement.</p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold text-[#000000] mb-[16px]">3. Intellectual Property</h2>
            <p>All designs, text, structure, and photography on this website are the property of Nurlete Property. Unauthorized copying or use of these materials is strictly prohibited.</p>
          </section>
          
          <section>
            <h2 className="text-[24px] font-bold text-[#000000] mb-[16px]">4. Communication</h2>
            <p>We process inquiries in the order received, prioritizing clear intent. Any misuse of our contact forms or digital platforms may result in restricted access to our services.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
