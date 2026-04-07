"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { 
  IconTrophy, 
  IconUsers, 
  IconTrendingUp, 
  IconTarget, 
  IconSchool, 
  IconHeart, 
  IconArrowRight,
  IconCircleCheckFilled,
  IconX,
  IconDiscountCheckFilled,
  IconHourglassLow,
  IconChartBar,
  IconClock,
  IconBolt,
  IconDeviceLaptop,
  IconShieldCheck,
  IconMap2,
  IconCalculator,
  IconFileInvoice,
  IconStarFilled,
  IconUserSearch,
  IconCircleDashed,
  IconAlertCircle,
  IconCheck,
  IconUserCircle,
  IconBuilding
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function GetStartedHero() {
  return (
    <section className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0d111a] pt-48 pb-16 border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dot-pattern" />
      
      <div className="relative z-10 mx-auto max-w-285 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm"
        >
          <IconAlertCircle className="text-teal-5" size={16} />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5 text-glow-teal">CUT NO-SHOWS 75%</span>
          <span className="h-4 w-[1px] bg-white/10 mx-1" />
          <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">CASE STUDY →</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-8"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What If Your Agency<br /><span className="text-teal-5 text-glow-teal italic underline decoration-white/10 decoration-2 underline-offset-8 underline">Actually Delivered?</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/50 mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          No more 6am panic calls. No more covering shifts yourself. Workers who show up. Every time.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/5">
             <div className="text-center">
                 <div className="text-teal-4 font-black text-2xl">55 Workers</div>
                 <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold">In 3 Days For InPost</div>
             </div>
             <div className="text-center md:border-l border-white/5">
                 <div className="text-teal-4 font-black text-2xl">17 Days</div>
                 <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold">To Preferred Partner</div>
             </div>
             <div className="text-center md:border-l border-white/5">
                 <div className="text-teal-4 font-black text-2xl">190+</div>
                 <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Companies Trust Us</div>
             </div>
        </div>
      </div>
    </section>
  );
}

// ─── Intake Form ──────────────────────────────────────────────────────────
function IntakeForm() {
    return (
        <section className="py-24 bg-[#0d1522] border-b border-white/5">
             <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.3fr] gap-20">
                    {/* Left Side: Difference Table */}
                    <div>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">WE DO THINGS DIFFERENTLY</h2>
                        <h3 className="text-white text-4xl font-bold mb-12 tracking-tight">The Accept Difference</h3>
                        <div className="space-y-12">
                             <div className="p-8 rounded-[40px] bg-red-500/5 border border-red-500/10">
                                 <h4 className="text-red-400 font-black text-xs uppercase tracking-widest mb-8 flex items-center gap-2">
                                     <IconX size={16} /> Other Agencies
                                 </h4>
                                 <ul className="space-y-4">
                                     {[
                                         "Send whoever's available",
                                         "Disappear when there's a problem",
                                         "Different contact every month",
                                         "\"We'll try our best\" fill rates"
                                     ].map((text, i) => (
                                         <li key={i} className="text-white/30 text-sm font-bold flex items-center gap-3">
                                             <div className="w-1.5 h-1.5 rounded-full bg-red-500/30" /> {text}
                                         </li>
                                     ))}
                                 </ul>
                             </div>
                             <div className="p-8 rounded-[40px] bg-teal-5/5 border border-teal-5/20 shadow-2xl relative overflow-hidden">
                                 <div className="absolute top-0 right-0 p-8 opacity-5">
                                     <IconTrophy size={120} />
                                 </div>
                                 <h4 className="text-teal-4 font-black text-xs uppercase tracking-widest mb-8 flex items-center gap-2">
                                     <IconCheck size={16} /> Accept Recruitment
                                 </h4>
                                 <ul className="space-y-4">
                                     {[
                                         "Every worker briefed on your site",
                                         "No-show? Free replacement",
                                         "Same team. Real relationships.",
                                         "98% fill rate. We deliver."
                                     ].map((text, i) => (
                                         <li key={i} className="text-white font-bold flex items-center gap-3">
                                             <IconCheck className="text-teal-5" size={18} /> {text}
                                         </li>
                                     ))}
                                 </ul>
                             </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-[#161b28] p-10 md:p-16 rounded-[64px] border border-white/5 relative shadow-2xl">
                         <div className="mb-12">
                             <h3 className="text-3xl font-bold text-white mb-4 tracking-tight leading-tight">Let&apos;s fix your staffing.</h3>
                             <p className="text-white/40 text-lg">Tell us what&apos;s not working. We&apos;ll show you how we&apos;d fix it.</p>
                         </div>

                         <form className="space-y-12">
                             {/* Section 1 */}
                             <div className="space-y-6">
                                 <div className="flex items-center gap-3 text-teal-5 font-bold uppercase tracking-widest text-[11px]">
                                     <IconTarget size={18} /> 1. Your Staffing Needs
                                 </div>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                     <div className="space-y-2">
                                         <label className="text-white/30 text-[10px] font-bold uppercase tracking-widest ml-1">Current Challenge*</label>
                                         <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-teal-5/50 transition-all appearance-none cursor-pointer">
                                             <option>Poor reliability / No-shows</option>
                                             <option>Insufficient volumes</option>
                                             <option>High cost / Low ROI</option>
                                             <option>Communication issues</option>
                                         </select>
                                     </div>
                                     <div className="space-y-2">
                                         <label className="text-white/30 text-[10px] font-bold uppercase tracking-widest ml-1">Number of Workers*</label>
                                         <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-teal-5/50 transition-all appearance-none cursor-pointer">
                                             <option>1-10 workers</option>
                                             <option>10-50 workers</option>
                                             <option>50-200 workers</option>
                                             <option>200+ workers</option>
                                         </select>
                                     </div>
                                 </div>
                                 <div className="space-y-2">
                                     <label className="text-white/30 text-[10px] font-bold uppercase tracking-widest ml-1 text-center block">Industry Selection*</label>
                                     <div className="flex flex-wrap justify-center gap-3 mt-4">
                                         {["Logistics", "Manufacturing", "Construction", "Retail", "Food Production", "Driving", "Other"].map((tag, i) => (
                                             <button key={i} type="button" className="px-5 py-2 rounded-full border border-white/10 text-white/50 text-[11px] font-bold uppercase tracking-widest hover:bg-teal-5 hover:text-black hover:border-teal-5 transition-all">
                                                 {tag}
                                             </button>
                                         ))}
                                     </div>
                                 </div>
                             </div>

                             {/* Section 2 */}
                             <div className="space-y-6 pt-12 border-t border-white/5">
                                 <div className="flex items-center gap-3 text-teal-5 font-bold uppercase tracking-widest text-[11px]">
                                     <IconBuilding size={18} /> 2. Company Details
                                 </div>
                                 <div className="space-y-2">
                                     <label className="text-white/30 text-[10px] font-bold uppercase tracking-widest ml-1">Company Name*</label>
                                     <input type="text" placeholder="e.g. InPost UK" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-teal-5/50 transition-all" />
                                 </div>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                     <div className="space-y-2">
                                         <label className="text-white/30 text-[10px] font-bold uppercase tracking-widest ml-1">Your Department</label>
                                         <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-teal-5/50 transition-all appearance-none cursor-pointer">
                                             <option>Operations</option>
                                             <option>Human Resources</option>
                                             <option>Procurement</option>
                                             <option>Management</option>
                                         </select>
                                     </div>
                                     <div className="space-y-2">
                                         <label className="text-white/30 text-[10px] font-bold uppercase tracking-widest ml-1">Seniority</label>
                                         <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-teal-5/50 transition-all appearance-none cursor-pointer">
                                             <option>Director / Executive</option>
                                             <option>Manager</option>
                                             <option>Supervisor</option>
                                             <option>Specialist</option>
                                         </select>
                                     </div>
                                 </div>
                             </div>

                             {/* Section 3 */}
                             <div className="space-y-6 pt-12 border-t border-white/5">
                                 <div className="flex items-center gap-3 text-teal-5 font-bold uppercase tracking-widest text-[11px]">
                                     <IconUserCircle size={18} /> 3. Your Details
                                 </div>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                     <input type="text" placeholder="First Name*" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-teal-5/50 transition-all" />
                                     <input type="text" placeholder="Last Name*" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-teal-5/50 transition-all" />
                                 </div>
                                 <input type="email" placeholder="Work Email*" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-teal-5/50 transition-all" />
                                 <input type="tel" placeholder="Phone Number*" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-teal-5/50 transition-all" />
                             </div>

                             <div className="pt-8">
                                 <button className="w-full py-6 bg-teal-5 text-black font-black uppercase tracking-[0.2em] rounded-2xl shadow-2xl hover:scale-[1.01] active:scale-[0.98] transition-all group">
                                     Get in Touch <IconArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                 </button>
                                 <p className="text-white/20 text-[10px] text-center font-bold tracking-widest mt-6 uppercase">
                                     We typically respond within 24 hours. No-obligation fixed pricing.
                                 </p>
                             </div>
                         </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Process Timeline ─────────────────────────────────────────────────────
function ProcessTimeline() {
    const steps = [
        { t: "We Call You", d: "Within 24 hours. A senior consultant, not a call centre. No script - just solutions.", i: IconClock },
        { t: "We Visit", d: "We see your operation firsthand. Accurate pricing. 100% compliance audit. No surprises.", i: IconMap2 },
        { t: "Workers Arrive", d: "Briefed. Compliant. Ready. Deployed within 24-48 hours of initial agreement.", i: IconBolt }
    ];

    return (
        <section className="py-24 bg-[#0d1522]">
             <div className="mx-auto max-w-285 px-6">
                <div className="text-center mb-20">
                     <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">WHAT HAPPENS NEXT</h2>
                     <h3 className="text-white text-4xl font-bold tracking-tight mb-8">From First Call to Full Shift.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[1px] bg-white/10 z-0" />
                    {steps.map((s, i) => (
                        <div key={i} className="relative z-10 text-center flex flex-col items-center group">
                             <div className="w-24 h-24 rounded-full bg-[#161b28] border border-white/5 flex items-center justify-center text-teal-4 mb-8 shadow-2xl group-hover:border-teal-5/50 transition-all relative">
                                 <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-teal-5 text-black font-black text-xs flex items-center justify-center">0{i+1}</div>
                                 <s.i size={40} />
                             </div>
                             <h4 className="text-white font-black text-xl mb-4 leading-tight">{s.t}</h4>
                             <p className="text-white/30 text-sm leading-relaxed max-w-xs">{s.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Logo Footer ────────────────────────────────────────────────────────
function LogoFooter() {
  const clients = [
    { name: "DPD", src: "/partner-logos/DPD_Bildmotiv_Logo.png" },
    { name: "Wayfair", src: "/partner-logos/wayfair-logo.png" },
    { name: "InPost", src: "/partner-logos/InPost_logo.png" },
    { name: "Vistry Group", src: "/partner-logos/vistry-group.webp" },
    { name: "Poundstretcher", src: "/partner-logos/Poundstretcher_Logo.png" },
    { name: "Pharmacy2U", src: "/partner-logos/pharmacy2u-logo.svg" },
    { name: "Rhenus Logistics", src: "/partner-logos/rhenus-logistics-logo.png" },
    { name: "Howard Tenens", src: "/partner-logos/howard-tenens.png" },
  ];

  const accreditations = [
    { name: "GLAA", src: "/accreditations/glaa.webp" },
    { name: "REC", src: "/accreditations/rec.webp" },
    { name: "Armed Forces", src: "/accreditations/armed-forces.webp" },
    { name: "Disability Confident", src: "/accreditations/disability-confident-color.png" },
    { name: "Stronger Together", src: "/accreditations/stronger-together.webp" },
  ];

  return (
    <section className="py-24 bg-[#161b28]/30 border-t border-white/5">
      <div className="mx-auto max-w-285 px-6">
        {/* Clients Section */}
        <div className="text-center mb-16">
          <h3 className="text-white text-3xl font-bold tracking-tight mb-4">Trusted by 190+ Companies</h3>
          <p className="text-white/40 text-sm font-medium uppercase tracking-widest">Want to join them?</p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {clients.map((c) => (
              <div key={c.name} className="bg-white rounded-2xl p-6 flex items-center justify-center w-40 h-24 hover:scale-[1.03] transition-all duration-300 shadow-xl shadow-black/10 group">
                <img src={c.src} alt={c.name} className="max-h-12 max-w-full object-contain saturate-[1.25] transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-white/5 my-16" />

        {/* Accreditations Section */}
        <div className="text-center">
          <h3 className="text-white/40 text-[11px] font-black uppercase tracking-[0.2em] mb-12">FULLY LICENSED & COMPLIANT</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            {accreditations.map((a) => (
              <div key={a.name} className="bg-white rounded-2xl p-6 flex items-center justify-center w-56 h-24 hover:scale-[1.03] transition-all duration-300 shadow-xl shadow-black/10 group">
                <img 
                  src={a.src} 
                  alt={a.name} 
                  className="h-12 max-w-full object-contain transition-all duration-500" 
                  title={a.name} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function GetStartedPage() {
  return (
    <main className="bg-[#0d1522] min-h-screen font-sans">
      <Navbar />

      <GetStartedHero />
      <IntakeForm />
      <ProcessTimeline />
      <LogoFooter />

      <Footer />
    </main>
  );
}
