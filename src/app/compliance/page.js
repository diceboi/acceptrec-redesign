import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  IconArrowRight,
  IconCheck,
  IconShieldCheck,
  IconExternalLink,
  IconFileCertificate,
  IconLock,
  IconBuildingBank,
} from "@tabler/icons-react";

export const metadata = {
  title: "Agency Worker Compliance: Checks and Evidence | Accept",
  description:
    "What we check before a worker reaches your site — process, insurance, data protection and qualification tracking — with the to prove it when an auditor asks.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/compliance/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "article",
    title: "How We Keep Your Agency Workers Compliant",
    description:
      "Accept's GLAA licence, right-to-work process, insurance, data protection and qualification tracking.",
    url: "https://www.acceptrec.co.uk/compliance/",
    siteName: "Accept Recruitment",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Keep Your Agency Workers Compliant",
    description:
      "Accept's GLAA licence, right-to-work process, insurance, data protection and qualification tracking.",
  },
};

export default function CompliancePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What evidence should I request before choosing a staffing supplier?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At minimum: the GLAA licence number and the name it is held in, proof of employers' liability, public liability and professional indemnity cover, the right-to-work checking process and how records are retained, a sample Key Information Document, the data protection position covering any clock-in or biometric system, and the escalation route if something goes wrong. Ask for it as a pack rather than piece by piece — a supplier who cannot produce one quickly has probably never been audited.",
        },
      },
      {
        "@type": "Question",
        name: "How do I check that an agency has completed right-to-work checks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ask to see the process and the retention policy, then ask for a sample record with the personal data redacted. Right-to-work checks must be completed before placement and the evidence retained in line with Home Office guidance. A supplier who describes the check but cannot show you what the record looks like is describing an intention rather than a process.",
        },
      },
      {
        "@type": "Question",
        name: "Who is responsible for agency worker induction and health and safety?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both parties, and the split matters. Accept is responsible for general safety induction, manual handling, basic PPE and sector-specific preparation such as GMP and hygiene training before a worker arrives. The client is responsible for site-specific induction — the layout, the hazards, the equipment and the emergency procedures on that particular site. Neither substitutes for the other, and an HSE inspector will ask both parties what they did.",
        },
      },
      {
        "@type": "Question",
        name: "How do we check that supplied forklift drivers are licensed for the trucks they will actually use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ask for the certificate, not the category. Forklift qualifications are truck-specific — a counterbalance ticket is not a reach ticket and neither is a VNA ticket. Accept records the qualification, the truck type and the expiry date against each worker, so the answer to “is this driver licensed for this truck” is a record rather than an assumption. Check the expiry date as well as the category.",
        },
      },
      {
        "@type": "Question",
        name: "An audit has found gaps in our right-to-work, licence or induction records. What must be fixed before the next shift?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Right to work first — a worker without a valid completed check should not be on site, and that is the exposure with the largest consequence. Then role-specific qualifications where the work requires them, particularly anything involving plant or machinery. Then induction records. Ask your supplier to produce current records for every worker on your site rather than a sample; if they can only supply a sample, that is itself the finding.",
        },
      },
      {
        "@type": "Question",
        name: "Our customer wants proof of agency-worker compliance. What can we produce quickly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Accept maintains a compliance pack covering company details, the GLAA licence, data protection, insurance and pay arrangements, kept current for client audits and due diligence. It is intended to be sent as it stands rather than assembled on request, which is the difference between answering a customer the same day and asking them to wait a week.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How We Keep Your Agency Workers Compliant",
    description:
      "How we keep agency workers compliant through right-to-work checks, GLAA licensing, health and safety, and audit evidence.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.acceptrec.co.uk/compliance/",
    },
    publisher: {
      "@type": "Organization",
      name: "Accept Recruitment Ltd",
      url: "https://www.acceptrec.co.uk/",
    },
    datePublished: "2026-09-22T08:00:00Z",
    dateModified: "2026-10-04T00:00:00Z",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.acceptrec.co.uk/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Employers",
        item: "https://www.acceptrec.co.uk/employers",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Compliance",
      },
    ],
  };

  return (
    <main className="bg-[#0a0e17] text-white min-h-screen selection:bg-teal-5/30 selection:text-teal-3 font-sans">
      <Navbar />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Background Ambience */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-teal-5/5 blur-[140px]" />
        <div className="absolute top-[40%] right-0 h-[400px] w-[400px] rounded-full bg-purple-6/5 blur-[120px]" />
        <div className="absolute inset-0 dot-pattern opacity-15" />
      </div>

      {/* Main Content Column (680–760px) */}
      <div className="relative z-10 mx-auto max-w-[760px] px-6 pt-32 md:pt-40 pb-24">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/50">
          <Link href="/" className="hover:text-teal-4 transition-colors">
            Home
          </Link>
          <span className="text-white/30">›</span>
          <Link href="/employers" className="hover:text-teal-4 transition-colors">
            Employers
          </Link>
          <span className="text-white/30">›</span>
          <span className="text-white/80 font-medium">Compliance</span>
        </nav>

        {/* Section Pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-5/20 bg-teal-5/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
          WORKER COMPLIANCE &amp; DUE DILIGENCE
        </div>

        {/* Page Title: Exactly One H1 */}
        <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-white leading-[1.08] mb-8">
          How We Keep Your Agency Workers Compliant
        </h1>

        {/* Answer-First Paragraph */}
        <section id="answer" className="mb-10 text-lg md:text-xl leading-relaxed text-white/90 font-normal">
          <p>
            Every worker Accept places on your site has a completed right-to-work check, a Key Information Document, a safety induction and verified qualifications for the task they are being sent to do — before they arrive, not afterwards. If your customer or your auditor asks you to prove it, we keep a compliance pack current so it can be sent the same day rather than assembled on request. Accept Recruitment supplies temporary workers across the Midlands from branches in Leicester, Coventry and Tamworth, and driving and engineering nationally. The same checks apply wherever the work is.
          </p>
        </section>

        {/* Anchored Contents List */}
        <nav aria-label="Table of Contents" className="glass-card mb-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-teal-4 mb-4">
            In this guide
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-[15px] text-white/70">
            <li>
              <a href="#before-start" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">01</span>
                Checks before a worker starts
              </a>
            </li>
            <li>
              <a href="#qualifications" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">02</span>
                Role-specific qualifications
              </a>
            </li>
            <li>
              <a href="#induction" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">03</span>
                Induction &amp; health and safety
              </a>
            </li>
            <li>
              <a href="#awr" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">04</span>
                Agency Workers Regulations
              </a>
            </li>
            <li>
              <a href="#data" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">05</span>
                How we protect worker data
              </a>
            </li>
            <li>
              <a href="#evidence" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">06</span>
                Proving it: audit evidence
              </a>
            </li>
            <li>
              <a href="#company" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">07</span>
                Who you are contracting with
              </a>
            </li>
            <li>
              <a href="#licences" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">08</span>
                Licences and registrations
              </a>
            </li>
            <li>
              <a href="#insurance" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">09</span>
                Insurance cover
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">10</span>
                Frequently asked questions
              </a>
            </li>
          </ol>
        </nav>

        {/* Section: What we check before a worker reaches your site */}
        <section id="before-start" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            What we check before a worker reaches your site
          </h2>
          <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB] mb-8">
            Five things are completed before a worker is placed, and all five are recorded rather than remembered.
          </p>

          <ol className="space-y-4 text-base md:text-[17px] leading-[1.65] text-[#8B98AB] pl-0 list-none">
            {[
              "Right to work. Checked before placement, following Home Office guidance, with the evidence retained on record.",
              "Identity and eligibility documents, including any certificates relating to the role — a forklift ticket, a driving licence, a food hygiene certificate.",
              "A Key Information Document, issued to every worker before they start, setting out pay, deductions and engagement type as required under the Conduct Regulations.",
              "Safety induction covering health and safety, manual handling and basic PPE, with sector-specific preparation where the work requires it — GMP awareness and hygiene training for food production, for example.",
              "Role-specific qualification verification, checked against the actual task rather than the job title.",
            ].map((step, idx) => (
              <li key={idx} className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-5/10 text-sm font-mono font-bold text-teal-4">
                  {idx + 1}
                </span>
                <div className="pt-0.5">{step}</div>
              </li>
            ))}
          </ol>
        </section>

        {/* Section: Role-specific qualifications */}
        <section id="qualifications" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Role-specific qualifications
          </h2>
          <div className="space-y-5 text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
            <p>
              We record qualifications against the worker with the type and the expiry date, not as a single yes or no. This matters most with plant and machinery, where the qualification is specific to the equipment: a counterbalance forklift ticket does not cover a reach truck, and neither covers a VNA truck. A worker who is qualified is not automatically qualified for the machine they are being asked to use.
            </p>
            <p>
              We track expiry alongside the qualification, so a lapsed ticket surfaces before the shift rather than during an audit. If you need to confirm that a specific worker is qualified for a specific machine on a specific date, that is a record we can produce.
            </p>
          </div>
        </section>

        {/* Section: Induction and health and safety */}
        <section id="induction" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Induction and health and safety
          </h2>
          <div className="space-y-5 text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
            <p>
              Responsibility is shared, and the split is worth being precise about because both parties are accountable and neither can discharge the other&apos;s duty.
            </p>
            <p>
              Accept is responsible for general safety induction before a worker arrives: health and safety awareness, manual handling, basic PPE, and sector preparation such as GMP and hygiene training where the work requires it. The client is responsible for site-specific induction — the layout, the hazards, the equipment, the emergency procedures and the reporting lines on that particular site. An inspector will ask both parties what they did, and “the agency handled it” is not an answer that survives the question.
            </p>
          </div>
        </section>

        {/* Section: Agency Workers Regulations */}
        <section id="awr" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Agency Workers Regulations
          </h2>
          <div className="space-y-5 text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
            <p>
              Agency workers acquire the right to equal treatment after twelve weeks in the same role with the same hirer under the{" "}
              <a
                href="https://www.legislation.gov.uk/uksi/2010/93/contents/made"
                target="_blank"
                rel="noopener"
                className="text-teal-4 hover:underline font-medium inline-flex items-center gap-1"
              >
                Agency Workers Regulations 2010
                <IconExternalLink size={14} className="shrink-0" />
              </a>
              . Equal treatment covers pay, working time, rest breaks and holiday entitlement, measured against what a directly recruited employee doing that job would receive.
            </p>
            <p>
              We track qualifying periods and apply equal treatment when the threshold is reached. The twelve weeks accumulate rather than run continuously, and breaks of less than six weeks do not reset the clock — which is why the calculation belongs in a system rather than on a spreadsheet, and why rotating workers between sites to avoid the threshold does not work as an approach.
            </p>
          </div>
        </section>

        {/* Section: How we protect worker data */}
        <section id="data" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            How we protect worker data
          </h2>
          <div className="space-y-5 text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
            <p>
              Accept operates under UK GDPR as a data controller, with a published{" "}
              <Link href="/privacy-policy" className="text-teal-4 hover:underline font-medium">
                privacy policy
              </Link>{" "}
              currently at version 5.0.
            </p>
            <p>
              Attendance technology creates data protection obligations that a conventional agency relationship does not, and they are worth stating plainly. Clock-in data is held in AcceptPulse. Where facial recognition is used for clock-in, enrolment data is deleted ninety days after a worker&apos;s last shift. Clock-in images are retained for fourteen days. Data is encrypted in transmission using TLS, access is controlled by role, and multi-factor authentication is required for administrative access.
            </p>
            <p>
              Workers can review, update or request deletion of their personal data. If you are procuring a service that involves biometric clock-in on your site, these are the questions your own data protection officer will ask, and they are answered here rather than on request.
            </p>
          </div>
        </section>

        {/* Section: Proving it: evidence for an audit */}
        <section id="evidence" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Proving it: evidence for an audit
          </h2>
          <div className="space-y-5 text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
            <p>
              Accept maintains a compliance pack covering company details, the GLAA licence, data protection, insurance and pay arrangements. It is kept current rather than assembled when someone asks, which is the practical difference between answering your customer the same day and asking them to wait.
            </p>
            <p>
              If an audit on your site has found gaps, the order to address them in is right to work first, then role-specific qualifications for anyone operating plant or machinery, then induction records. Ask for current records covering every worker on site rather than a sample — if a supplier can only produce a sample, that is itself the finding.
            </p>
          </div>
        </section>

        {/* Section: Who you are contracting with */}
        <section id="company" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Who you are contracting with
          </h2>
          <div className="glass-card rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
              Accept Recruitment Ltd, company number 09426027, registered in England and Wales. The company traded as Pearce Recruitment Services Limited until 9 October 2025, when it was renamed. It is the same legal entity throughout, and some public records still carry the earlier name — including the GLAA licence below. If you are checking a register and find Pearce Recruitment Services Limited, that is us.
            </p>
          </div>
        </section>

        {/* Section: Our licences and registrations */}
        <section id="licences" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-8">
            Our licences and registrations
          </h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                GLAA licence
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                Licence number PEAR0003, currently held and verifiable on the{" "}
                <a
                  href="https://www.gla.gov.uk/check-the-register/"
                  target="_blank"
                  rel="noopener"
                  className="text-teal-4 hover:underline font-medium inline-flex items-center gap-1"
                >
                  GLAA public register
                  <IconExternalLink size={14} className="shrink-0" />
                </a>
                , under the former company name explained above. The licence covers labour supply across the regulated sectors with one exclusion: it does not cover the supply of workers for shellfish gathering.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                REC membership
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                We are a member of the Recruitment and Employment Confederation. REC membership requires adherence to its Code of Professional Practice and provides an independent escalation route for complaints that cannot be resolved directly.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                ICO registration
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                We are registered with the Information Commissioner&apos;s Office as a data controller, as required for an organisation processing personal data at this scale.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                Cyber Essentials
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                Certified 11 June 2026 under profile version 3.3, scope: whole organisation. Certification body Citation Cyber, via IASME. The certificate can be found on the{" "}
                <a
                  href="https://iasme.co.uk/cyber-essentials/ncsc-certificate-search/"
                  target="_blank"
                  rel="noopener"
                  className="text-teal-4 hover:underline font-medium inline-flex items-center gap-1"
                >
                  IASME register
                  <IconExternalLink size={14} className="shrink-0" />
                </a>
                . Cyber Essentials matters here because we hold worker personal data, including clock-in records, on behalf of client sites.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Insurance */}
        <section id="insurance" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Insurance
          </h2>
          <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB] mb-6">
            Accept holds the cover below. Certificates, cover levels and policy details are provided with the compliance pack under a confidentiality arrangement rather than published here.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-white/90 list-none pl-0">
            {[
              "Employers' liability",
              "Public liability",
              "Professional indemnity",
              "Cyber cover",
              "Drivers' negligence cover",
            ].map((cov, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3.5"
              >
                <IconShieldCheck size={18} className="text-teal-4 shrink-0" />
                <span className="font-medium">{cov}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section: Frequently asked questions */}
        <section id="faq" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                What evidence should I request before choosing a staffing supplier?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                At minimum: the GLAA licence number and the name it is held in, proof of employers&apos; liability, public liability and professional indemnity cover, the right-to-work checking process and how records are retained, a sample Key Information Document, the data protection position covering any clock-in or biometric system, and the escalation route if something goes wrong. Ask for it as a pack rather than piece by piece — a supplier who cannot produce one quickly has probably never been audited.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                How do I check that an agency has completed right-to-work checks?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                Ask to see the process and the retention policy, then ask for a sample record with the personal data redacted. Right-to-work checks must be completed before placement and the evidence retained in line with Home Office guidance. A supplier who describes the check but cannot show you what the record looks like is describing an intention rather than a process.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                Who is responsible for agency worker induction and health and safety?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                Both parties, and the split matters. Accept is responsible for general safety induction, manual handling, basic PPE and sector-specific preparation such as GMP and hygiene training before a worker arrives. The client is responsible for site-specific induction — the layout, the hazards, the equipment and the emergency procedures on that particular site. Neither substitutes for the other, and an HSE inspector will ask both parties what they did.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                How do we check that supplied forklift drivers are licensed for the trucks they will actually use?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                Ask for the certificate, not the category. Forklift qualifications are truck-specific — a counterbalance ticket is not a reach ticket and neither is a VNA ticket. Accept records the qualification, the truck type and the expiry date against each worker, so the answer to “is this driver licensed for this truck” is a record rather than an assumption. Check the expiry date as well as the category.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                An audit has found gaps in our right-to-work, licence or induction records. What must be fixed before the next shift?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                Right to work first — a worker without a valid completed check should not be on site, and that is the exposure with the largest consequence. Then role-specific qualifications where the work requires them, particularly anything involving plant or machinery. Then induction records. Ask your supplier to produce current records for every worker on your site rather than a sample; if they can only supply a sample, that is itself the finding.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                Our customer wants proof of agency-worker compliance. What can we produce quickly?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                Accept maintains a compliance pack covering company details, the GLAA licence, data protection, insurance and pay arrangements, kept current for client audits and due diligence. It is intended to be sent as it stands rather than assembled on request, which is the difference between answering a customer the same day and asking them to wait a week.
              </p>
            </div>
          </div>
        </section>

        {/* Primary Call to Action */}
        <div className="glass-card my-16 rounded-2xl border border-teal-5/30 bg-gradient-to-br from-teal-5/10 via-navy-800 to-navy-900 p-8 md:p-10 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4 block mb-3">
            AUDIT READINESS &amp; COMPLIANCE
          </span>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Talk to us about an audit
          </h3>
          <p className="text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Need to verify supplier due diligence or request an up-to-date compliance pack for your operational facilities? Speak with our compliance team, or explore{" "}
            <Link
              href="/employers/faq/"
              className="text-teal-4 hover:underline font-semibold"
            >
              other employer questions
            </Link>{" "}
            on agency pay, attendance, and turnover.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-teal-5 hover:bg-teal-4 text-navy-950 font-bold px-8 py-4 transition-all shadow-lg hover:shadow-teal-5/20 text-base"
            >
              Talk to us about an audit <IconArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-4 transition-all border border-white/10 text-base"
            >
              Contact Compliance Team
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
