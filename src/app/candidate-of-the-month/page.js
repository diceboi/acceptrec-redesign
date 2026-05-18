"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { 
  IconArrowLeft,
  IconTrophy,
  IconAward,
  IconDiscountCheck,
  IconQuote,
  IconSparkles
} from "@tabler/icons-react";

export default function CandidateOfMonthPage() {
  const candidates = [
    {
      name: "Wisdom",
      month: "November 2022",
      badge: "Outstanding Student Award",
      reward: "£20 Love2Shop Voucher",
      nomination: "Chosen as Candidate of the Month due to constant commitment and determination whilst working with us. Wisdom consistently saves the day! Although he is a student, this does not prevent him from giving his all when it comes to work. He has helped us in and outside of Leicester, always willing to go that extra mile to help us out (literally speaking!). Overall, Wisdom is one of the kindest, most hardworking candidates we have had the pleasure to work with."
    },
    {
      name: "Zoica Burcin",
      month: "April 2021",
      badge: "Client Record Breaker",
      reward: "Featured Candidate",
      nomination: "Zoica has been put forward for employee of the month due to her reliability, hard work and determination. She was hitting record-breaking numbers for one of our busiest clients this month, and we couldn't be more proud of her."
    },
    {
      name: "Pedro de Silva",
      month: "March 2021",
      badge: "Work Ethic Champion",
      reward: "Featured Candidate",
      nomination: "Pedro is working with us from September and is showing great work ethic. He is very helpful, supportive and positive. All the clients are giving him positive feedback and are happy with him no matter what role he is doing. Pedro is always showing his commitment, dedication and hard work. We are very happy to work with such a candidate!"
    },
    {
      name: "Jake Wilson",
      month: "February 2021",
      badge: "Future Permanent Leader",
      reward: "Featured Candidate",
      nomination: "Jake has been put forward for employee of the month due to how much he has grown since starting with our client. He takes everything on board and pushes himself as well as looking out for others and supporting them. Jake will go far with the client he is with and is on the list of candidates to be taken perm in the coming weeks."
    },
    {
      name: "Anna Siedlecka",
      month: "December 2020",
      badge: "100% Attendance Hero",
      reward: "Featured Candidate",
      nomination: "Anna has been put forward for employee of the month due her reliability, proactivity and 100% attendance. Anna was chosen by our client as one of the best workers onsite that leads by example."
    },
    {
      name: "Raf",
      month: "January 2020",
      badge: "Flexible Support Specialist",
      reward: "Featured Candidate",
      nomination: "Rafal is highly flexible in his approach to work, often willing to assist at extremely short notice and is exceptionally well reviewed by all of our clients."
    }
  ];

  return (
    <main className="bg-navy-900 min-h-screen text-white selection:bg-teal-5/30 selection:text-teal-3">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute rounded-full"
            style={{
              height: "70%",
              width: "60%",
              left: "20%",
              top: "-10%",
              background: "var(--color-teal-5)",
              opacity: 0.1,
              filter: "blur(110px)",
            }}
            animate={{ scale: [1, 1.1, 1], y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            <div className="w-16 h-16 rounded-full bg-teal-5/10 flex items-center justify-center text-teal-4 mx-auto mb-6 shadow-lg shadow-teal-5/5">
              <IconTrophy size={36} className="animate-bounce" style={{ animationDuration: "3s" }} />
            </div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
              WALL OF FAME & EXCELLENCE
            </span>
            <h1 className="font-sans text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl max-w-4xl mx-auto">
              Candidate of <span className="text-teal-5 italic">the Month</span>
            </h1>
            <p className="text-[#8B98AB] text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-medium">
              Every single month, we celebrate outstanding commitments by recognizing candidates who represent Accept Recruitment's high standards of quality, reliability, and work ethic.
            </p>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-navy-700 to-transparent" />
      </section>

      {/* Candidates Hall Grid */}
      <section className="pb-32 bg-navy-700 relative">
        <div className="mx-auto max-w-6xl px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candidates.map((cand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 md:p-8 border border-white/5 bg-white/5 relative flex flex-col justify-between overflow-hidden group hover:border-teal-5/30 transition-all duration-300"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 w-32 h-32 rounded-full bg-teal-5/5 group-hover:bg-teal-5/10 blur-xl transition-all" />
                
                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] font-bold text-teal-4 tracking-wider uppercase block mb-1">
                        🏆 WINNER • {cand.month}
                      </span>
                      <h3 className="text-white text-xl font-extrabold group-hover:text-teal-3 transition-colors">
                        {cand.name}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-teal-5/10 flex items-center justify-center text-teal-4">
                      <IconAward size={18} />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-bold text-[#8B98AB]">
                      {cand.badge}
                    </span>
                    {cand.reward !== "Featured Candidate" && (
                      <span className="px-2.5 py-1 rounded-md bg-teal-5/10 border border-teal-5/20 text-[10px] font-bold text-teal-4 flex items-center gap-1">
                        <IconSparkles size={10} /> {cand.reward}
                      </span>
                    )}
                  </div>

                  {/* Testimony Content */}
                  <div className="relative">
                    <IconQuote size={32} className="text-[#8B98AB]/10 absolute -left-2 -top-3" />
                    <p className="text-xs text-[#8B98AB] leading-relaxed font-semibold pl-4 relative z-10 italic">
                      "{cand.nomination}"
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-[#8B98AB]/50 font-bold tracking-wider flex items-center gap-1">
                  <IconDiscountCheck size={14} className="text-teal-5" /> verified candidate reward
                </div>
              </motion.div>
            ))}
          </div>

          {/* How to be Nominated section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-10 mt-16 border border-white/5 bg-white/5 max-w-4xl mx-auto"
          >
            <h3 className="text-white text-xl font-bold mb-4">How Can You Be Nominated?</h3>
            <p className="text-[#8B98AB] text-sm leading-relaxed mb-6 font-medium">
              Our consultants closely coordinate with onsite client managers at all logistics, driving, and warehousing sites. Nominations are strictly evaluated based on the following key metrics:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Reliability & Attendance", text: "Maintaining 100% attendance, punctuality, and clocking in successfully without shifts cancellations." },
                { title: "Proactive Support", text: "Assisting at short notice, supporting teammates, and showing leadership qualities onsite." },
                { title: "Record Productivity", text: "Hitting high productivity numbers, adhering to health and safety, and receiving positive client reviews." }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl border border-white/5 bg-white/5">
                  <h4 className="text-white text-sm font-bold mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-5" /> {item.title}
                  </h4>
                  <p className="text-xs text-[#8B98AB] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
