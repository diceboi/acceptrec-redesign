"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { 
  IconArrowLeft,
  IconActivity,
  IconStethoscope,
  IconPhoneCall,
  IconLanguage,
  IconCircleCheck,
  IconExternalLink,
  IconAlertCircle
} from "@tabler/icons-react";

export default function UKHealthcarePage() {
  return (
    <main className="bg-navy-900 min-h-screen text-white selection:bg-teal-5/30 selection:text-teal-3">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[45vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute rounded-full"
            style={{
              height: "60%",
              width: "50%",
              right: "-10%",
              top: "-10%",
              background: "var(--color-teal-5)",
              opacity: 0.1,
              filter: "blur(90px)",
            }}
            animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
        
        <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/candidates"
              className="inline-flex items-center gap-2 text-teal-4 hover:text-teal-3 font-semibold text-xs uppercase tracking-widest mb-6 transition-colors"
            >
              <IconArrowLeft size={16} /> Back to Candidates Hub
            </Link>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
              CANDIDATE SUPPORT WIKI
            </span>
            <h1 className="font-sans text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl max-w-4xl mx-auto">
              Understanding the <br />
              <span className="text-teal-5 italic">UK Healthcare System (NHS)</span>
            </h1>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-navy-700 to-transparent" />
      </section>

      {/* Main Content Section */}
      <section className="pb-32 bg-navy-700">
        <div className="mx-auto max-w-4xl px-6">
          
          {/* Overview of NHS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 md:p-10 mb-8 border border-white/5 bg-white/5 relative overflow-hidden"
          >
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-teal-5/10 flex items-center justify-center text-teal-4 shrink-0">
                <IconActivity size={28} />
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-3">The National Health Service (NHS)</h3>
                <p className="text-[#8B98AB] text-lg leading-relaxed font-medium">
                  The NHS provides public health care in the UK. Core medical treatments, consultations, and hospital services provided by the NHS are <strong>completely free of charge</strong> for residents. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm text-[#8B98AB] font-medium">
                  <div className="flex items-center gap-2">
                    <IconCircleCheck size={18} className="text-teal-5" />
                    <span>Free general doctor checkups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconCircleCheck size={18} className="text-teal-5" />
                    <span>Free emergency treatments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconCircleCheck size={18} className="text-teal-5" />
                    <span>Charges apply for dentist and optician work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconCircleCheck size={18} className="text-teal-5" />
                    <span>Prescription charge in England (Free in Wales/Scotland)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* GP Registration Pipeline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-10 mb-8 border border-white/5 bg-white/5"
          >
            <h3 className="text-white text-2xl font-semibold mb-6 flex items-center gap-3">
              <IconStethoscope size={28} className="text-teal-4" />
              How to Register with a GP (General Practitioner)
            </h3>
            <p className="text-[#8B98AB] leading-relaxed font-medium mb-8">
              Your local doctor (GP) is the primary gateway to all health services. GP checkups, diagnostics, vaccinations, and specialist referrals are completely free once registered.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  step: "Step 1: Locate Your Nearest Clinic",
                  desc: "GP practices are mapped based on postcodes. Visit the official NHS GP search portal and input your postcode to find local clinics open to new registrations.",
                  actionLink: "https://www.nhs.uk/Service-Search/GP/%20LocationSearch/4",
                  actionText: "Search NHS GP Clinics"
                },
                {
                  step: "Step 2: Fill Out Form GMS1",
                  desc: "Once you choose a clinic, visit the surgery or apply online. You will fill out Form GMS1 providing personal details, address history, and previous GP details."
                },
                {
                  step: "Step 3: Verification & Welcome Pack",
                  desc: "Certain clinics will request physical address proof (council tax, utility bill, tenancy) and a passport. Within days, you will receive a Welcome Letter containing your unique NHS Number."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start relative border-l-2 border-white/10 ml-3 pl-6 pb-6 last:pb-0 last:border-l-0">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-teal-5 flex items-center justify-center text-black font-bold text-xs shrink-0 shadow-lg shadow-teal-5/20">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">{item.step}</h4>
                    <p className="text-[#8B98AB] text-sm leading-relaxed mb-3">{item.desc}</p>
                    {item.actionLink && (
                      <a 
                        href={item.actionLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 text-xs text-teal-4 hover:underline font-bold"
                      >
                        {item.actionText} <IconExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Emergency Contacts Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-white/5 bg-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
                  <IconPhoneCall size={24} />
                </div>
                <h3 className="text-white text-xl font-bold mb-4">Emergency & Urgency Contacts</h3>
                <p className="text-[#8B98AB] text-xs leading-relaxed mb-6">
                  Save these crucial phone numbers on your phone immediately. Calls to both numbers are entirely free.
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                    <span className="text-[10px] font-bold text-red-500 block uppercase mb-1">Severe Emergencies</span>
                    <strong className="text-white text-2xl tracking-widest block font-sans">999</strong>
                    <span className="text-[11px] text-[#8B98AB] leading-relaxed mt-1 block">Accident, stroke, chest pains, life-threatening situation (Go to A&E).</span>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <span className="text-[10px] font-bold text-teal-4 block uppercase mb-1">Non-Emergency / Urgent Help</span>
                    <strong className="text-white text-2xl tracking-widest block font-sans">111</strong>
                    <span className="text-[11px] text-[#8B98AB] leading-relaxed mt-1 block">Immediate medical advice required but not a severe emergency.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Language & Interpreter Support */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-white/5 bg-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-5/10 flex items-center justify-center text-teal-4 mb-6">
                  <IconLanguage size={24} />
                </div>
                <h3 className="text-white text-xl font-bold mb-4">Free Interpreter Access</h3>
                <p className="text-[#8B98AB] text-sm leading-relaxed mb-6 font-medium">
                  Do not let language barriers prevent you from seeking health support. <strong>The NHS is legally required to provide free professional language interpreters</strong> for consultations upon request.
                </p>
                <div className="p-4 rounded-xl border border-teal-5/20 bg-teal-5/5 text-xs text-[#8B98AB] font-medium leading-relaxed mb-4">
                  <strong>Important:</strong> You must explicitly request a translator during the booking process with your GP clinic or when arriving at hospital receptions.
                </div>
                <p className="text-[#8B98AB] text-xs leading-relaxed">
                  Specialist consultant checkups require a referral from your GP. You do not need to pay for specialist visits if referred via the NHS pipeline.
                </p>
              </div>
            </motion.div>

          </div>

          {/* EU Nationals Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 md:p-8 mb-12 border border-white/5 bg-white/5 flex gap-4 items-start"
          >
            <IconAlertCircle className="text-teal-4 shrink-0" size={24} />
            <div>
              <h4 className="text-white font-bold text-sm mb-1">EU Nationals Ordinarily Resident Rules</h4>
              <p className="text-[#8B98AB] text-xs leading-relaxed font-medium">
                EU citizens and their families living and working inside the United Kingdom are classified as "ordinarily resident", making them fully eligible to receive 100% free NHS hospital treatments, GP checkups, and operations.
              </p>
              <a 
                href="https://www.gov.uk/government/publications/how-the-nhs-charges-overseas-visitors-for-nhs-hospital-care/how-the-nhs-charges-overseas-visitors-for-nhs-hospital-care" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 text-[10px] text-teal-4 hover:underline font-bold mt-3"
              >
                NHS Charging Guidelines <IconExternalLink size={10} />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
