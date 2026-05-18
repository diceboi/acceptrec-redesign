"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { 
  IconArrowLeft,
  IconBuilding,
  IconMapPin,
  IconFileText,
  IconShieldLock,
  IconTools,
  IconCheck,
  IconAlertTriangle,
  IconExternalLink
} from "@tabler/icons-react";

export default function HousingSystemPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "1. Overview & Postcodes",
      icon: IconBuilding,
      description: "UK housing overview, postcodes structure, and types of landlords."
    },
    {
      title: "2. Renting a Room",
      icon: IconMapPin,
      description: "Subletting rooms legally and qualifying for social council housing."
    },
    {
      title: "3. Tenancy Agreements",
      icon: IconFileText,
      description: "Written vs unwritten contracts, legal rights, and right-to-rent checks."
    },
    {
      title: "4. Deposits & Space Limits",
      icon: IconShieldLock,
      description: "Deposit protection schemes, court penalties, and overcrowding rules."
    },
    {
      title: "5. Maintenance & Address Proof",
      icon: IconTools,
      description: "Landlord building repair duties and official proofs of address."
    }
  ];

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
              background: "var(--color-purple-5)",
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
              Navigating the <br />
              <span className="text-teal-5 italic">UK Housing System</span>
            </h1>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-navy-700 to-transparent" />
      </section>

      {/* Main Content Section */}
      <section className="pb-32 bg-navy-700">
        <div className="mx-auto max-w-6xl px-6">
          
          {/* Quick Notice */}
          <div className="glass-card rounded-2xl p-6 mb-8 border border-white/5 bg-white/5 text-center text-sm font-medium text-[#8B98AB] max-w-4xl mx-auto">
            💡 <strong>Candidate Tip:</strong> Distance, travel costs, and transport links from Leicester or Tamworth warehouses heavily influence shifts. Please use this interactive 5-part guide to safely set up your UK accommodation.
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Interactive Tabs Menu */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-5 mb-1 px-4">Guide Sections</span>
              {tabs.map((tab, index) => {
                const IconComponent = tab.icon;
                const isSelected = activeTab === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                      isSelected 
                        ? "bg-white/10 border-teal-5/40 shadow-lg shadow-teal-5/5" 
                        : "bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                    }`}
                  >
                    {isSelected && (
                      <motion.div 
                        layoutId="activeTabGlow"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-teal-5"
                      />
                    )}
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? "bg-teal-5/20 text-teal-4" : "bg-white/5 text-[#8B98AB] group-hover:text-white"
                    }`}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold transition-colors ${isSelected ? "text-white" : "text-[#8B98AB] group-hover:text-white"}`}>
                        {tab.title}
                      </h4>
                      <p className="text-[11px] text-[#8B98AB]/70 font-medium leading-relaxed mt-1">
                        {tab.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content Panel */}
            <div className="w-full lg:w-2/3 glass-card rounded-3xl p-8 md:p-12 border border-white/5 bg-white/5 relative min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  
                  {/* TAB 1: OVERVIEW & POSTCODES */}
                  {activeTab === 0 && (
                    <div className="space-y-6">
                      <h3 className="text-white text-2xl font-bold border-b border-white/10 pb-4">1. Housing System in the UK</h3>
                      <p className="text-[#8B98AB] font-medium leading-relaxed">
                        England, being one of the most visited countries in the world and highly sought after for employment, poses significant obstacles regarding housing. You should take into account these obstacles when looking for work, especially the layout of boroughs, their distances from each other, and travel costs.
                      </p>
                      
                      <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
                        <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                          <span className="text-teal-4">LE</span> Leicester Postcodes structure
                        </h4>
                        <p className="text-xs text-[#8B98AB] leading-relaxed mb-4">
                          The UK postcode is split in two parts: e.g. <strong className="text-white">LE1 3HR</strong>. The prefix letters (such as <strong>LE</strong> for Leicester) identify the city or region. The first number represents the circle/distance from the city center:
                        </p>
                        <ul className="grid grid-cols-2 gap-2 text-xs text-[#8B98AB] font-semibold">
                          <li className="flex items-center gap-2">
                            <IconCheck size={14} className="text-teal-5" />
                            <span>LE1 = Leicester Center</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <IconCheck size={14} className="text-teal-5" />
                            <span>LE2-LE4 = Inner Circles</span>
                          </li>
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-5 rounded-2xl border border-white/5 bg-white/5">
                          <h5 className="text-white text-sm font-bold mb-2">Private Landlords</h5>
                          <p className="text-xs text-[#8B98AB] leading-relaxed">
                            Private individuals or companies who rent accommodation on the open market. This is the main route for most new arrivals.
                          </p>
                        </div>
                        <div className="p-5 rounded-2xl border border-white/5 bg-white/5">
                          <h5 className="text-white text-sm font-bold mb-2">Social Landlords</h5>
                          <p className="text-xs text-[#8B98AB] leading-relaxed">
                            Organizations like local councils or housing associations that collaborate with the government to provide low-cost social housing.
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-[#8B98AB] italic">
                        *Note: Council Tax is a local taxation on domestic property. Tenants in privately rented or social accommodation are responsible for paying this to the local authority.
                      </p>
                    </div>
                  )}

                  {/* TAB 2: RENTING A ROOM */}
                  {activeTab === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-white text-2xl font-bold border-b border-white/10 pb-4">2. Renting a Room & Social Housing</h3>
                      <p className="text-[#8B98AB] font-medium leading-relaxed">
                        For individuals who have just arrived in the UK or students, renting a single room inside a shared house or flat is the most common option.
                      </p>

                      <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
                        <h4 className="text-white font-bold text-sm mb-3">Subletting Legally</h4>
                        <p className="text-xs text-[#8B98AB] leading-relaxed">
                          In some cases, you rent a room from other tenants who are subletting. It is critical to confirm the lead tenant has the landlord's permission to sublet. Always ask for a formal agreement.
                        </p>
                        <a 
                          href="https://www.shelter.org.uk/residence" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-teal-4 hover:text-teal-3 font-semibold mt-4 transition-colors"
                        >
                          Shelter Residence Advice <IconExternalLink size={14} />
                        </a>
                      </div>

                      <div className="p-6 rounded-2xl border border-yellow-500/10 bg-yellow-500/5">
                        <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                          <IconAlertTriangle size={18} className="text-yellow-500" />
                          Social Housing Eligibility
                        </h4>
                        <p className="text-xs text-[#8B98AB] leading-relaxed">
                          Most new migrants live in privately rented homes, as qualifying criteria for council social housing are extremely strict. Councils prioritize highly vulnerable, homeless individuals (e.g. elderly, single parents, victims of domestic violence, disabled people).
                        </p>
                        <div className="flex gap-4 mt-4">
                          <a 
                            href="https://www.gov.uk/apply-for-council-housing" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] text-teal-4 hover:underline font-semibold"
                          >
                            Gov.uk Council Housing <IconExternalLink size={12} />
                          </a>
                          <a 
                            href="https://www.shelter.org.uk" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] text-teal-4 hover:underline font-semibold"
                          >
                            Shelter Helpline Advice <IconExternalLink size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: TENANCY AGREEMENT */}
                  {activeTab === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-white text-2xl font-bold border-b border-white/10 pb-4">3. Tenancy or Contract Agreements</h3>
                      
                      <div className="p-4 rounded-xl border border-teal-5/20 bg-teal-5/5 text-teal-4 text-xs font-semibold leading-relaxed">
                        ⚠️ <strong>Critical Rule:</strong> Do not sign any housing contract, job contract, or legal agreement if you do not understand it. Ask a trusted fluent English speaker to help review the clauses.
                      </div>

                      <p className="text-[#8B98AB] font-medium leading-relaxed">
                        A tenancy agreement is a legally binding contract between you and your landlord, dictating your right to occupy the property and the landlord's right to receive monthly rent. Most initial agreements are fixed-term for <strong>6 months</strong> or <strong>1 year</strong>.
                      </p>

                      <div>
                        <h4 className="text-white font-bold text-sm mb-3">Even without a written contract, you have legal rights:</h4>
                        <ul className="space-y-3 text-xs text-[#8B98AB] font-semibold">
                          <li className="flex items-start gap-2">
                            <IconCheck size={14} className="text-teal-5 mt-0.5 shrink-0" />
                            <span>The landlord remains legally responsible for all structural repairs.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <IconCheck size={14} className="text-teal-5 mt-0.5 shrink-0" />
                            <span>You have the right to occupy the property in peace without landlord harassment.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <IconCheck size={14} className="text-teal-5 mt-0.5 shrink-0" />
                            <span>You are obligated to treat the property with respect and prevent damage.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl border border-white/5 bg-white/5">
                        <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2">Right to Rent UK Checks</h4>
                        <p className="text-xs text-[#8B98AB] leading-relaxed">
                          Landlords are legally obligated to check your status under the UK "Right to Rent" scheme. EU/EEA citizens can demonstrate this easily with their EU Passport, ID card, or an online digital Share Code showing pre-settled/settled status.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: DEPOSITS & SPACE */}
                  {activeTab === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-white text-2xl font-bold border-b border-white/10 pb-4">4. Paying a Deposit & Overcrowding</h3>
                      
                      <div>
                        <h4 className="text-white font-bold text-sm mb-2">Deposit Protection (Tenancy Deposit Scheme)</h4>
                        <p className="text-[#8B98AB] text-sm leading-relaxed mb-4">
                          Private landlords usually demand a deposit, typically equivalent to 1 month's rent. By law, this deposit <strong>must be protected in an independent, government-approved scheme</strong>.
                        </p>
                        <div className="p-4 rounded-xl border border-teal-5/20 bg-teal-5/5 text-xs text-[#8B98AB] leading-relaxed">
                          <strong>Note:</strong> If your landlord fails to protect your deposit, they cannot serve a legal eviction notice, and you can claim up to <strong>3x the value</strong> of the deposit as a court penalty.
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-6">
                        <h4 className="text-white font-bold text-sm mb-3">Legal Overcrowding Standards</h4>
                        <p className="text-xs text-[#8B98AB] leading-relaxed mb-4">
                          The law sets limits to prevent landlords from renting overcrowded housing. An unlawfully overcrowded house means more than 2 people sleep per available room (including living rooms). Children under 10 count as half a person, and babies under 1 are ignored.
                        </p>
                        
                        <div className="p-5 rounded-2xl border border-white/5 bg-white/5 flex gap-4 items-start">
                          <IconAlertTriangle className="text-yellow-500 shrink-0 mt-0.5" size={20} />
                          <div>
                            <h5 className="text-white text-xs font-bold mb-1">House in Multiple Occupation (HMO)</h5>
                            <p className="text-[11px] text-[#8B98AB] leading-relaxed">
                              If you share a kitchen, bathroom, or communal space with people who are not part of your household, the property is categorized as an HMO, requiring extra strict local licensing, spacing, and fire safety laws.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 5: MAINTENANCE & PROOF */}
                  {activeTab === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-white text-2xl font-bold border-b border-white/10 pb-4">5. House Maintenance & Address Proof</h3>
                      
                      <div>
                        <h4 className="text-white font-bold text-sm mb-2">Landlord's Statutory Repair Duties</h4>
                        <p className="text-[#8B98AB] text-xs leading-relaxed">
                          Under UK law, landlords are legally responsible for structural and core service repairs, regardless of what is written in the contract:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#8B98AB] font-semibold mt-3">
                          <li className="flex items-center gap-2">
                            <IconCheck size={14} className="text-teal-5" />
                            <span>Structure & exterior (roof, gutters)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <IconCheck size={14} className="text-teal-5" />
                            <span>Electricity, gas, and water systems</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <IconCheck size={14} className="text-teal-5" />
                            <span>Boilers, heating, and hot water</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <IconCheck size={14} className="text-teal-5" />
                            <span>Communal lobbies, corridors, and lifts</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border-t border-white/10 pt-6">
                        <h4 className="text-white font-bold text-sm mb-3">Accepted Proofs of Address</h4>
                        <p className="text-xs text-[#8B98AB] leading-relaxed mb-4">
                          Having official address proof is vital to register with local GPs, enroll children in schools, open bank accounts, and claim council services. Commonly accepted proofs:
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-xs text-[#8B98AB] font-semibold">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-5" />
                            <span>Utility Bill (water/gas, &lt;3 months old)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-5" />
                            <span>UK Photo Driving Licence</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-5" />
                            <span>Bank statement (&lt;3 months old)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-5" />
                            <span>Current Council Tax bill</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-5" />
                            <span>Official HMRC Tax Letter</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-5" />
                            <span>Signed Tenancy Agreement</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons inside dynamic card */}
                  <div className="mt-12 pt-6 border-t border-white/10 flex justify-between">
                    <button
                      onClick={() => setActiveTab(prev => Math.max(0, prev - 1))}
                      disabled={activeTab === 0}
                      className="px-5 py-2.5 rounded-xl border border-white/10 text-xs font-semibold uppercase tracking-wider hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                    >
                      Previous Section
                    </button>
                    <button
                      onClick={() => setActiveTab(prev => Math.min(4, prev + 1))}
                      disabled={activeTab === 4}
                      className="px-5 py-2.5 rounded-xl bg-teal-5 text-black text-xs font-semibold uppercase tracking-wider hover:bg-white disabled:opacity-30 disabled:hover:bg-teal-5 transition-all"
                    >
                      Next Section
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
