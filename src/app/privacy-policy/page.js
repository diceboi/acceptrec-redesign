"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const sections = [
  {
    title: "About this notice",
    content: [
      "Accept Recruitment Limited (&quot;Accept&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This notice explains how we collect, use, share and protect personal data in connection with our recruitment services and our workforce management platform, AcceptPulse.",
      "This notice applies to:",
      "• Workers and candidates registered with Accept (whether for permanent or temporary roles);",
      "• Visitors to our website at www.acceptrec.co.uk;",
      "• Client and supplier contacts.",
      "We are the controller of the personal data described in this notice. Our contact details are at the end of this document.",
    ],
  },
  {
    title: "Contents",
    content: [
      "• 1. The personal data we collect about you",
      "• 2. How we collect personal data",
      "• 3. How we use your personal data",
      "• 4. AcceptPulse — workforce management platform",
      "• 5. Facial recognition for identity verification",
      "• 6. AI-supported decisions about candidates and workers",
      "• 7. Special category data (biometric, health, ethnicity, criminal records)",
      "• 8. The lawful bases on which we rely",
      "• 9. Sharing your data with third parties",
      "• 10. International transfers",
      "• 11. How long we keep your data",
      "• 12. Data security",
      "• 13. Your rights",
      "• 14. Marketing communications",
      "• 15. Cookies and website analytics",
      "• 16. Automated decisions",
      "• 17. Changes to this notice",
      "• 18. How to contact us",
    ],
  },
  {
    title: "1. The personal data we collect about you",
    content: [
      "Depending on your relationship with Accept, we may collect and process the following categories of personal data:",
      "### If you are a worker or candidate",
      "• Identity and contact data: your name, address, email address, mobile number, date of birth, national insurance number, photograph.",
      "• Right-to-work and identity verification documents: passport, driving licence, biometric residence permit (BRP), share code, and equivalents.",
      "• Employment and qualification data: information from your CV, references, qualifications, certifications (e.g. CSCS, sector-specific tickets), training records and DBS check results where applicable.",
      "• Financial data: bank details for payroll, tax codes, pension details.",
      "• Public profile data: links to LinkedIn or similar professional profiles where you have made these public.",
      "• Workforce data: shift assignments, attendance records, hours worked, ratings and feedback (provided by you and by client supervisors), job role, site and department information.",
      "• Biometric data: a facial photograph captured at registration and used for identity verification at point of work (where you use the facial recognition system — see Section 5).",
      "• Communications data: messages exchanged with you via WhatsApp, email, SMS or other channels, including operational notifications about shifts.",
      "### If you are a website visitor",
      "• Technical data: IP address, browser type, operating system, device information, pages viewed, session duration.",
      "• Information you submit through contact forms: name, email, message content.",
      "### If you are a client or supplier contact",
      "• Business contact data: name, job title, business email, business phone, employer.",
      "• Communications data: messages and meetings exchanged in connection with the working relationship.",
    ],
  },
  {
    title: "2. How we collect personal data",
    content: [
      "We collect personal data in the following ways:",
      "• Directly from you, when you register with Accept, send us your CV, complete forms on our website, attend an induction, communicate with us, or use AcceptPulse.",
      "• Automatically, when you visit our website (cookies and similar technologies — see Section 15).",
      "• From third parties, including job boards, professional networks (such as LinkedIn), referees you nominate, previous employers, screening providers (DBS, credit reference, qualification verification), and clients.",
      "• Through automated systems, including AcceptPulse capturing attendance and identity verification data, and the WhatsApp Business API logging operational messages.",
      "Where we collect personal data about you from third parties, we will tell you about it within a reasonable period and in any event within one month.",
    ],
  },
  {
    title: "3. How we use your personal data",
    content: [
      "We use personal data for the following purposes:",
      "• Recruitment services: matching you with suitable assignments, presenting your details to clients, conducting pre-engagement checks, managing the engagement process.",
      "• Workforce management: scheduling shifts, recording attendance, verifying identity at point of work, processing payroll, generating timesheets and client billing.",
      "• Right-to-work and statutory checks: verifying your right to work in the UK and complying with related statutory obligations.",
      "• Health and safety: ensuring that workers performing work have completed inductions and training and are competent for the role.",
      "• Operational communications: sending shift reminders, clock-in confirmations, schedule changes and other work-related notifications by WhatsApp, email or SMS.",
      "• Identity and fraud prevention: verifying that the worker who registered is the worker performing work (see Section 5).",
      "• Customer relationship management: managing client and supplier relationships.",
      "• Marketing communications: where you have opted in, sending information about Accept services, events, and similar opportunities.",
      "• Service improvement: analysing how our website and AcceptPulse are used to improve them.",
      "• Legal and regulatory compliance: complying with our obligations under tax, employment, immigration, health and safety, modern slavery, data protection, and other applicable laws.",
      "• Investigations and disputes: investigating incidents, complaints, and disputes; cooperating with regulators and law enforcement; and establishing, exercising or defending legal claims.",
    ],
  },
  {
    title: "4. AcceptPulse — workforce management platform",
    content: [
      "AcceptPulse is Accept's workforce management platform. It is used to manage shift scheduling, attendance recording, operational communications and related workforce activities. This section sets out the data we collect through AcceptPulse, other than facial recognition data which is covered in Section 5.",
      "### Geolocation data",
      "When you clock in or clock out using AcceptPulse, the platform requests access to your device's GPS location. This is used solely to confirm that you are at or near the assigned work site. Location data is captured at the points of clock-in and clock-out only — AcceptPulse does not continuously track your location. You may decline location access on your device, although this may affect your ability to use the clock-in service and may require you to use an alternative method to record your attendance.",
      "### Attendance and shift data",
      "AcceptPulse records clock-in times, clock-out times, break times, shift assignments, job roles and site locations. This information is used for attendance, payroll, billing and operational purposes.",
      "### WhatsApp communications",
      "AcceptPulse uses the WhatsApp Business API (provided by Meta Platforms, Inc.) to send operational messages including shift reminders, clock-in confirmations, schedule changes, identity verification rollout information and other work-related notifications. Your mobile number is used for this purpose. Message send, delivery and read status are logged for operational and audit purposes. We do not send marketing messages through this channel unless you have separately opted in.",
      "### Ratings and feedback",
      "AcceptPulse includes a ratings feature where client supervisors may rate the work performed and you may rate the work site. Ratings are used internally to improve service quality and to match workers to suitable assignments. Individual ratings are not published or shared publicly.",
    ],
  },
  {
    title: "5. Facial recognition for identity verification",
    content: [
      "This section explains how facial recognition is used, why we use it, the lawful bases on which we rely, and the alternative process available if you would prefer not to use facial recognition.",
      "### Why we use facial recognition",
      "In our industry it sometimes happens that one individual registers with the agency and a different individual attends the work. This is known as identity substitution. It can hurt you, and it creates serious legal problems.",
      "It hurts you because:",
      "• Someone else could use your name and your right-to-work checks to obtain work.",
      "• If anything goes wrong on site, it could land against your record rather than the person who actually did the work.",
      "• Your hours, pay, tax and National Insurance contributions could end up wrong.",
      "It creates legal problems because both Accept and our clients have statutory duties to ensure that the person performing work is the person who has passed right-to-work, induction and other applicable checks. These duties arise under the Immigration, Asylum and Nationality Act 2006, the Health and Safety at Work etc. Act 1974, tax legislation, and the Modern Slavery Act 2015 framework.",
      "Facial recognition is the control we use to address this. It is the only practical method that verifies, at the point of work, that the worker performing the work is the same individual who registered with Accept and passed Accept's checks.",
      "### How facial recognition works in practice",
      "• At registration: we take a photograph of you, with your knowledge. The photograph is enrolled in our facial recognition service. The service is hosted in the United Kingdom only.",
      "• At each shift: when you clock in or out at a check-in device, the device captures a live image of your face. The facial recognition service compares that live image against your enrolled photograph and returns a match or no-match result, which records the time of attendance.",
      "• Live clock-in images are kept for 14 days and are then automatically deleted.",
      "• If you have not worked a shift for 90 days: your enrolment in the facial recognition service is automatically deleted. The photograph is not retained anywhere else on Accept's systems. If you return to work after that period, you would be re-enrolled with a fresh photograph.",
      "Right-to-work documents (passport, biometric residence permit, share code evidence) are separate from the facial recognition system and are retained as part of your personnel records — see Section 11.",
      "### If the system flags a mismatch",
      "If the system returns a no-match result, it does not result in any decision affecting your pay or your engagement without human review. A supervisor or authorised Accept consultant reviews the mismatch, may speak with you to understand the cause, and may use the alternative process described below to verify your identity manually. The result of that review is recorded.",
      "### Lawful bases for facial recognition processing",
      "We rely on:",
      "• Article 6(1)(f) UK GDPR — legitimate interests, including the prevention of identity-related fraud, the discharge of our and our clients' statutory duties, and the accurate administration of payroll.",
      "• Article 9(2)(g) UK GDPR — substantial public interest, read with paragraph 10 of Schedule 1 Part 2 of the Data Protection Act 2018 (preventing or detecting unlawful acts), in respect of the biometric data.",
      "We do not rely on consent. Consent is not the appropriate lawful basis in an employment context where there is an imbalance of power between us and you, and the Information Commissioner's Office has issued specific guidance on this point.",
      "### The alternative process — your right not to use facial recognition",
      "You are not required to use facial recognition. You can use a non-biometric alternative process at any time. The alternative is:",
      "• You bring valid photo identity documentation (passport, driving licence, BRP or equivalent) to every shift.",
      "• On arrival, the on-site supervisor verifies your photo ID against your appearance.",
      "• You enter a Personal Identification Number (PIN) at the check-in device for the time record.",
      "• The supervisor confirms the check-in/check-out manually in the system.",
      "Choosing the alternative process will not affect your shift allocation, pay, treatment, or any other aspect of your working relationship with Accept. Supervisors at all relevant sites are briefed on this.",
      "You can switch between facial recognition and the alternative at any time by speaking to your consultant or by emailing the data protection contact in Section 18.",
      "### Your rights in respect of facial recognition processing",
      "In addition to the general rights set out in Section 13, you have the right to:",
      "• Object to facial recognition processing under Article 21 UK GDPR — in which case your enrolment will be deleted from the facial recognition service and the alternative process will apply.",
      "• Request information about the data held about you by our facial recognition service provider in connection with your enrolment.",
      "• Request deletion of your enrolment at any time, in which case the alternative process will apply.",
    ],
  },
  {
    title: "6. AI-supported decisions about candidates and workers",
    content: [
      "Accept uses AI-based tools to support our consultants in tasks including candidate screening, scoring and recommendation. These tools help our consultants make better-informed decisions, but the decision-making authority remains with the human consultant. Accept does not use AI to make solely automated decisions that produce legal effects concerning you or that similarly significantly affect you.",
      "### In practice this means:",
      "• AI tools may produce suitability scores or rankings to help a consultant prioritise their attention.",
      "• A named human consultant reviews candidate information and makes the actual decision.",
      "• Consultants have the authority and the information to override the AI's recommendation, and do so where they consider the AI is wrong.",
      "We rely on the legitimate interests basis (Article 6(1)(f) UK GDPR) for this processing. We have assessed that this is necessary for our recruitment services and is not overridden by your rights, given the safeguards in place.",
      "### You have the right to:",
      "• Request information about how AI tools are used in connection with decisions affecting you.",
      "• Express your point of view on any decision in which AI was used.",
      "• Contest a decision and request review by a different consultant.",
      "Requests can be sent to the data protection contact in Section 18.",
    ],
  },
  {
    title: "7. Special category data",
    content: [
      "### Biometric data",
      "As described in Section 5, we process biometric data (a facial template used for identity verification) where you use the facial recognition system. The lawful basis is Article 9(2)(g) UK GDPR — substantial public interest. The non-biometric alternative is available.",
      "### Diversity and equal opportunities monitoring",
      "Where a client requires equal opportunities monitoring, or where we conduct our own monitoring, we may ask for information about your ethnic background, gender, disability, age, sexual orientation, religion or other characteristics. This is sensitive personal data and we ask for your explicit consent before collecting it. Providing this information is voluntary and your decision will not affect your working relationship with us. Where information is shared with clients it is anonymised.",
      "### Criminal records",
      "Where a client's pre-engagement screening requires a criminal record check, we will explain the process to you and obtain your explicit consent before proceeding. The check is carried out by an authorised provider.",
      "### Health and disability",
      "We may process health and disability information where this is relevant to your safety, fitness for work, or where we are required to make reasonable adjustments. We rely on Article 9(2)(b) UK GDPR (employment law) and Article 9(2)(h) (occupational health) where applicable.",
    ],
  },
  {
    title: "8. The lawful bases on which we rely",
    content: [
      "UK data protection law requires us to identify a lawful basis for each category of processing. We rely on the following bases:",
      "• Article 6(1)(b) — performance of a contract: Processing necessary to perform our contract with you (e.g. allocating shifts, processing pay).",
      "• Article 6(1)(c) — legal obligation: Processing necessary to comply with our legal obligations (right-to-work checks, tax reporting, statutory record-keeping).",
      "• Article 6(1)(f) — legitimate interests: Processing necessary for our (or others') legitimate interests, including running our business, providing services, preventing fraud and substitution, and supporting AI-assisted consultant decisions.",
      "• Article 6(1)(a) — consent: Where you have specifically opted in (e.g. marketing communications, sensitive equal opportunities data, criminal record checks).",
      "• Article 9(2)(b) — employment law: Where we process special category data necessary for the rights and obligations of employment law (e.g. health information for adjustments).",
      "• Article 9(2)(g) — substantial public interest: Where we process biometric data for the prevention or detection of unlawful acts (facial recognition for identity verification — see Section 5).",
      "• Article 9(2)(a) — explicit consent: Where we process special category data on the basis of your specific opt-in (e.g. equal opportunities monitoring, criminal record checks).",
    ],
  },
  {
    title: "9. Sharing your data with third parties",
    content: [
      "We share personal data with the following categories of recipient:",
      "### Clients",
      "We share with the client at whose site you are working: your name, role, attendance records, identity-verified clock-in/out times, and other information necessary to manage the assignment, billing and the client's own statutory duties (such as right-to-work and health and safety).",
      "### Authorities and regulators",
      "We share data with HMRC, the Department for Work and Pensions, the Home Office, the Health and Safety Executive, and other regulators where required by law or for the purposes set out in this notice.",
      "### Our processors and sub-processors",
      "We engage third parties to process personal data on our behalf. As at the date of this notice these include:",
      "• Cloud hosting and infrastructure providers: Hosting of AcceptPulse and other Accept systems (UK/EU).",
      "• Facial recognition service provider: Identity verification at point of attendance (UK only).",
      "• AI service providers: AI tools used to support consultant decision-making (UK/US).",
      "• Meta Platforms, Inc. (WhatsApp Business API): Operational messaging to workers (US).",
      "• Microsoft Corporation: Microsoft 365 services (email, file storage, internal communications) (UK/EU).",
      "• Payroll services provider: Payroll processing (UK).",
      "• Pre-engagement screening providers: Right-to-work checks, DBS checks, references and qualification verification (UK).",
      "Each processor is bound by a written contract requiring them to process your data only on Accept's instructions, to apply appropriate security, and to comply with UK data protection law.",
      "### Professional advisors and insurers",
      "We may share data with our legal, accounting, audit and insurance advisors where necessary.",
      "### Business transfers",
      "If Accept sells, transfers or merges parts of its business or assets, your data may be transferred to a third party as part of that transaction. The receiving party will be required to use your data in line with this notice.",
    ],
  },
  {
    title: "10. International transfers",
    content: [
      "Most of your personal data is stored and processed in the United Kingdom. In particular, all facial recognition data (enrolled photographs and live clock-in images) is stored and processed in the United Kingdom only.",
      "Some processors may transfer data outside the United Kingdom, for example for support or backup purposes. Where this happens, we ensure that an appropriate transfer mechanism applies, such as:",
      "• A UK adequacy decision in respect of the destination country;",
      "• The International Data Transfer Agreement (IDTA) or the UK Addendum to the EU Standard Contractual Clauses;",
      "• Other appropriate safeguards as permitted by UK data protection law.",
      "You can request further information about transfer mechanisms applying to a specific processor by contacting our data protection contact (see Section 18).",
    ],
  },
  {
    title: "11. How long we keep your data",
    content: [
      "We retain personal data for the periods set out below. After the retention period, data is deleted or anonymised.",
      "• Candidate data (CV, contact details) where you do not take an assignment: Two years from last meaningful contact.",
      "• Worker data where you have performed an assignment (engagement records, payroll, attendance logs): Six years from the end of the tax year in which the last assignment ended (HMRC requirement).",
      "• Right-to-work documents (passport copy, BRP, share code) held on the ATS: Six years from end of last assignment, alongside other right-to-work and employment records.",
      "• Enrolment in the facial recognition service (the photograph used for matching): Automatically deleted 90 days after the worker's last shift.",
      "• Live clock-in images (captured at point of attendance): 14 days from capture, then automatic deletion.",
      "• Attendance logs (date, time, site, match outcome — without facial image): Six years from end of tax year (with payroll records).",
      "• WhatsApp message logs: Two years from sending.",
      "• Marketing data (where you have opted in): Until you opt out, plus a short reasonable period for processing your opt-out.",
      "• Website and analytics data: Up to 24 months.",
      "Where law requires longer retention (for example to defend a legal claim or comply with regulatory enquiries), we will retain data for that longer period. After retention expires, data is deleted or fully anonymised.",
    ],
  },
  {
    title: "12. Data security",
    content: [
      "We use technical and organisational measures to protect your personal data:",
      "• Encryption of personal data in transit (HTTPS/TLS) and at rest where technically feasible.",
      "• Role-based access controls limiting access to those with a need to know.",
      "• Multi-factor authentication for administrative access to systems.",
      "• Logging and audit of administrative access to sensitive data.",
      "• Secure disposal and deletion processes.",
      "• Confidentiality obligations on all Accept staff and processors.",
      "• A documented data breach response plan including the 72-hour ICO notification process.",
      "• Periodic review of supplier security.",
      "No system is perfectly secure, and the transmission of information over the internet involves risk. We cannot guarantee the security of data transmitted to us, and any transmission is at your own risk. However, we use strict procedures and security features to prevent unauthorised access.",
    ],
  },
  {
    title: "13. Your rights",
    content: [
      "Under UK data protection law you have the following rights in respect of your personal data:",
      "• Right of access — to request a copy of the personal data we hold about you (a Subject Access Request).",
      "• Right to rectification — to ask us to correct inaccurate or incomplete data.",
      "• Right to erasure — to ask us to delete data, where there is no overriding reason for us to keep it.",
      "• Right to restrict processing — to ask us to suspend processing in certain circumstances.",
      "• Right to data portability — to receive certain data in a portable format.",
      "• Right to object — to object to processing carried out on the basis of legitimate interests, including direct marketing and (specifically) facial recognition processing.",
      "• Rights in relation to AI-supported decisions — to be informed about, express your view on, and contest decisions where AI tools have been used.",
      "• Right to withdraw consent — where we have relied on your consent, you may withdraw it at any time without affecting processing carried out before the withdrawal.",
      "• Right to complain to the Information Commissioner's Office (ICO) — see ico.org.uk.",
      "Exercising your rights does not affect your pay, shift allocation, treatment or any other aspect of your working relationship with Accept.",
      "To exercise any of these rights, please contact us using the details in Section 18.",
    ],
  },
  {
    title: "14. Marketing communications",
    content: [
      "We send marketing communications only where you have opted in. You can opt out at any time by:",
      "• Clicking the unsubscribe link in any marketing email;",
      "• Replying STOP to any marketing SMS;",
      "• Emailing us at admin@acceptrec.co.uk.",
      "Operational messages (such as shift reminders) are not marketing and you cannot opt out of these while you are engaged with Accept, except by ending the engagement or by using a different communication channel where available.",
    ],
  },
  {
    title: "15. Cookies and website analytics",
    content: [
      "Our website uses cookies for site administration, performance analytics and to remember your preferences. You can manage cookie preferences through your browser settings. Refusing certain cookies may affect functionality.",
    ],
  },
  {
    title: "16. Automated decisions",
    content: [
      "Some processing carried out by Accept is automated:",
      "• AcceptPulse automatically compares your GPS location at clock-in/out against the assigned site, and may flag attempts outside the permitted radius for supervisor review.",
      "• AcceptPulse automatically sends shift reminders and missing clock-in alerts based on your shift schedule.",
      "• Facial recognition automatically returns a match or no-match result at the point of clock-in/out (see Section 5).",
      "• AI tools may produce suitability scores or rankings to support consultants (see Section 6).",
      "None of these are solely automated decisions producing legal effects or similarly significant effects on you. Mismatches and flags trigger human review before any consequence affects your pay or engagement. Consultants make decisions about candidates with the AI as input, not as decision-maker.",
    ],
  },
  {
    title: "17. Changes to this notice",
    content: [
      "We may update this notice from time to time. Where changes are material, we will draw them to your attention by appropriate means (for example, by WhatsApp message, email, or notification at your next sign-in to AcceptPulse). The latest version is always available at www.acceptrec.co.uk/privacy.",
    ],
  },
  {
    title: "18. How to contact us",
    content: [
      "If you have any questions about this notice or about how we handle your personal data, or if you wish to exercise any of your rights, please contact us:",
      "Accept Recruitment Limited",
      "Email: admin@acceptrec.co.uk",
      "Postal address: Unit 4, Forest Business Park, Oswin Road, Leicester, LE3 1HR",
      "Website: www.acceptrec.co.uk",
      "You also have the right to complain to the Information Commissioner's Office:",
      "Information Commissioner's Office",
      "Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF",
      "Helpline: 0303 123 1113",
      "Website: ico.org.uk",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <section className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="mb-6 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A99D]">
              LEGAL INFORMATION
            </span>
            <h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8">
              Privacy Notice
            </h1>
            <p className="text-[#8B98AB] text-xl leading-relaxed font-medium max-w-2xl mx-auto">
              Version 5.0 — April 2026
            </p>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
      </section>

      <section className="pb-32 bg-navy-700">
        <div className="mx-auto max-w-4xl px-6">
          <div className="glass-card rounded-2xl p-10 md:p-16 mb-8">
            <p className="text-[#8B98AB] leading-relaxed font-medium">
              Accept Recruitment Limited (&ldquo;Accept&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects
              your privacy and is committed to protecting your personal data.
              This notice explains how we collect, use, share and protect
              personal data in connection with our recruitment services and our
              workforce management platform, AcceptPulse.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 md:p-10"
              >
                <h3 className="text-white text-xl font-semibold mb-6">
                  {s.title}
                </h3>
                <div className="space-y-4">
                  {s.content.map((p, j) => {
                    if (p.startsWith("### ")) {
                      return (
                        <h4
                          key={j}
                          className="text-white text-lg font-medium mt-6 mb-2"
                        >
                          {p.replace("### ", "")}
                        </h4>
                      );
                    }
                    return (
                      <p
                        key={j}
                        className={`text-[#8B98AB] leading-relaxed font-medium ${p.startsWith("•") ? "pl-4" : ""}`}
                      >
                        {p}
                      </p>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="px-10 py-5 rounded-full bg-teal-5 text-black font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 inline-flex items-center gap-3"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
