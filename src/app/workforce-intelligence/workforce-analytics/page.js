import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconBuildingWarehouse,
  IconDeviceDesktopAnalytics,
  IconCalendarEvent,
  IconUsers,
  IconFileInvoice,
  IconDatabase,
  IconShieldCheck,
  IconArrowUpRight,
} from "@tabler/icons-react";

export const metadata = {
  title: "Workforce Analytics and Client Portal | Accept",
  description:
    "What an operations manager should be able to see without chasing the agency — bookings, live attendance, timesheets, cost before the invoice, and site comparison.",
  alternates: {
    canonical:
      "https://www.acceptrec.co.uk/workforce-intelligence/workforce-analytics/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "article",
    title: "What Workforce Reporting Should You Expect?",
    description:
      "What you should be able to see without chasing the agency, and what to review each week.",
    url: "https://www.acceptrec.co.uk/workforce-intelligence/workforce-analytics/",
    siteName: "Accept Recruitment",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Workforce Reporting Should You Expect?",
    description:
      "What you should be able to see without chasing the agency, and what to review each week.",
  },
};

export default function WorkforceAnalyticsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which recruitment agencies offer a client portal for bookings, attendance and timesheets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Accept clients use the Client Portal, which covers bookings, live attendance, timesheets, worker profiles, staff requests, compliance views, ratings and selected invoice information, with access controlled by client and by site. When comparing suppliers, the question worth asking is not whether they have a portal but whether its attendance data comes live from a clock or is entered afterwards from timesheets — those produce different numbers, and only one is useful while the shift is running.",
        },
      },
      {
        "@type": "Question",
        name: "How can I see who is booked for each shift without chasing my agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Through a portal that shows the booking records themselves rather than a report prepared from them. The Client Portal shows who is booked by site and role, and who has clocked in, as the shift runs. The distinction that matters is between seeing the agency's operational record and receiving a summary of it — a summary has already been filtered by whoever wrote it, and it arrives too late to change anything.",
        },
      },
      {
        "@type": "Question",
        name: "How can I see the cost of booked agency shifts before the invoice arrives?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Where bookings, clock-in records and timesheets sit in one system, cost accumulates visibly through the week rather than appearing at the end of it. That lets finance see labour cost building and lets a discrepancy surface while both sides still have the context to resolve it. Most invoice disputes are about hours rather than rates, and they are far easier to settle on the Wednesday than three weeks later.",
        },
      },
      {
        "@type": "Question",
        name: "How can I reduce discrepancies between booked hours, worked hours and invoices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Review all three weekly rather than at invoice stage, and make sure they come from one source. Booked, worked and invoiced hours should reconcile; where they are held in three separate places they routinely do not, and the gap is only discovered when someone queries a bill. If the hours being approved are the hours recorded at the clock, approval becomes a check rather than an investigation.",
        },
      },
      {
        "@type": "Question",
        name: "How can I use last year's workforce data to plan this year's peak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Three things from last year are worth more than a percentage uplift on last year's headcount. What you actually needed by week, rather than what you booked — the gap between the two is the overbooking you paid for, and it is usually consistent enough to plan against. Where the failures clustered, by shift pattern, week and site, because peak failure is almost never spread evenly. And when acceptance started to fall, which is roughly when the local labour market ran out and therefore the date to start ahead of this year. Ask your supplier for all three; one who cannot produce them has not been keeping the record.",
        },
      },
      {
        "@type": "Question",
        name: "What should I look for in a recruitment agency's client portal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whether attendance is live from a clock or entered afterwards from timesheets, because the two produce different numbers and only one is useful on the day. Whether the figures come from the system that runs the work or are recalculated for display. Whether you can see bookings, live attendance and timesheets without asking anybody. Whether access can be set by site, so a site manager sees their operation and head office sees the account. Whether changes to a requirement are raised and tracked in the system rather than by email. And whether the definitions behind each figure are written down, because a dashboard without definitions is decoration.",
        },
      },
      {
        "@type": "Question",
        name: "How can I change staffing requirements without long email chains?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Raise and track the change in the same system that holds the booking, so both sides are looking at one request with a timestamp on it rather than reconstructing a thread. A requirement that moves — more people on Thursday, a shift pulled, a start time changed — needs one record that both the site and the agency can see. Most arguments about what was asked for turn out to be arguments about which message was the final one, and a tracked request removes that argument entirely.",
        },
      },
      {
        "@type": "Question",
        name: "What workforce data should an operations manager review each week?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Six things, by site: booked against attended split by shift pattern; shifts never accepted as distinct from shifts where nobody arrived; repeat workers as a proportion of the total; leavers in their first two weeks; overtime covering agency gaps; and booked against worked against invoiced hours. None of it needs a data analyst. It needs the same definitions every week from the same source.",
        },
      },
      {
        "@type": "Question",
        name: "Can workforce data help identify staffing problems before they affect output?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It can make an emerging pattern visible early, which is not the same as predicting one. Acceptance rates falling on a particular shift, repeat workers declining, more first-fortnight leavers, more shifts filled at short notice — each tends to appear a fortnight or so before the line actually runs short. Nothing forecasts the failure; what the data does is give someone the chance to ask why while there is still time to act.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Workforce Analytics",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.acceptrec.co.uk/workforce-intelligence/workforce-analytics/",
    },
    publisher: {
      "@type": "Organization",
      name: "Accept Recruitment Ltd",
      url: "https://www.acceptrec.co.uk/",
    },
    datePublished: "2026-10-04T00:00:00Z",
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
        name: "Workforce Intelligence",
        item: "https://www.acceptrec.co.uk/workforce-intelligence/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Workforce Analytics",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-navy-1 text-white selection:bg-teal-5 selection:text-white relative">
      <Navbar />

      {/* Structured Data Scripts */}
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
          <Link href="/workforce-intelligence/" className="hover:text-teal-4 transition-colors">
            Workforce Intelligence
          </Link>
          <span className="text-white/30">›</span>
          <span className="text-white/80 font-medium">Workforce Analytics</span>
        </nav>

        {/* Section Pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-5/20 bg-teal-5/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
          UNDERSTAND YOUR WORKFORCE
        </div>

        {/* Page Title: Exactly One H1 */}
        <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-white leading-[1.08] mb-8">
          Workforce Analytics
        </h1>

        {/* Answer-First Paragraphs */}
        <section id="answer" className="mb-10 text-lg md:text-xl leading-relaxed text-white/90 font-normal space-y-4">
          <p>
            You should be able to see who is booked, who has clocked in, what it is costing and where it is going wrong, without asking your agency for any of it. Reporting that arrives as a weekly email has already been filtered by the person sending it, and it arrives too late to change anything. The useful version is a live view of the same records the agency is working from, available to you at the moment the decision needs making.
          </p>
          <p className="text-base md:text-lg text-white/75">
            Analytics is one part of{" "}
            <Link
              href="/workforce-intelligence/"
              className="text-teal-4 hover:underline font-medium"
            >
              Workforce Intelligence
            </Link>{" "}
            — WI², the set of systems behind Accept&apos;s service. Three of them run the work: scheduling, clocking and attendance; worker conversations; onboarding and development. The fourth is the Client Portal, which is where you see all of it. Analytics is not a separate product sitting on top of that. It is what having the records in one place lets you ask.
          </p>
        </section>

        {/* Anchored Contents List */}
        <nav aria-label="Table of Contents" className="glass-card mb-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-teal-4 mb-4">
            In this guide
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-[15px] text-white/70">
            <li>
              <a href="#portal" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">01</span>
                What you should be able to see without asking
              </a>
            </li>
            <li>
              <a href="#invoice" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">02</span>
                Seeing cost before the invoice arrives
              </a>
            </li>
            <li>
              <a href="#weekly" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">03</span>
                The six figures worth reviewing each week
              </a>
            </li>
            <li>
              <a href="#early" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">04</span>
                Spotting a problem before it reaches output
              </a>
            </li>
            <li>
              <a href="#last-year" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">05</span>
                Using last year&apos;s data to plan this year&apos;s peak
              </a>
            </li>
            <li>
              <a href="#compare" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">06</span>
                Comparing sites fairly
              </a>
            </li>
            <li>
              <a href="#together" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">07</span>
                Using attendance, retention and feedback together
              </a>
            </li>
            <li>
              <a href="#choosing" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">08</span>
                What to look for in an agency portal
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">09</span>
                Frequently asked questions
              </a>
            </li>
          </ol>
        </nav>

        {/* Section: What you should be able to see without asking */}
        <section id="portal" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            What you should be able to see without asking
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Accept clients use the{" "}
              <Link
                href="/technology/client-portal"
                className="text-teal-4 hover:underline font-medium"
              >
                Client Portal
              </Link>
              , which shows the operational record rather than a summary of it:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-0 list-none my-6">
              {[
                "Who is booked for each shift, by site and by role",
                "Live attendance — who has clocked in, and who has not",
                "Timesheets, with scheduled against actual hours",
                "Worker profiles, including qualifications and history at your site",
                "Staff requests, raised and tracked rather than emailed",
                "Compliance views for the workers on your site",
                "Ratings and feedback your team has submitted",
                "Selected invoice and account information",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-3.5 text-sm"
                >
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                    <IconCheck className="h-3 w-3" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Stylised graphic of portal dashboard showing attendance by site */}
            <div
              role="figure"
              aria-label="Portal Dashboard: Live Attendance by Site"
              className="glass-card my-8 rounded-2xl border border-white/10 bg-navy-950/60 p-6 md:p-7 backdrop-blur-md"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-teal-4 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-4">
                    Live Portal View · Multi-Site Dashboard
                  </span>
                </div>
                <span className="text-[11px] font-mono text-white/40">
                  Data stream: Pulse Sync Live
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-4">
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <div className="text-[11px] font-medium text-white/50 mb-1">Midlands DC 01 (Leicester)</div>
                  <div className="text-2xl font-bold text-white mb-1">98.6%</div>
                  <div className="text-[11px] text-teal-4 font-mono">48/49 Clocked In · 07:00 Shift</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <div className="text-[11px] font-medium text-white/50 mb-1">Hub Central (Coventry)</div>
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-[11px] text-teal-4 font-mono">32/32 Clocked In · 07:00 Shift</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <div className="text-[11px] font-medium text-white/50 mb-1">Depot 04 (Tamworth)</div>
                  <div className="text-2xl font-bold text-white mb-1">97.1%</div>
                  <div className="text-[11px] text-teal-4 font-mono">34/35 Clocked In · 07:30 Shift</div>
                </div>
              </div>
              <p className="text-xs text-center text-white/50 leading-relaxed pt-2">
                Illustrative portal preview: Live attendance figures by site, fed directly from clock data without manual summaries.
              </p>
            </div>

            <p>
              Access is controlled by client and by site, so a site manager can be given their own operation while a head office user sees every site on the account. For multi-site businesses this is the difference between local detail and central comparison, and both are normally needed by different people on the same day.
            </p>
            <p>
              The operational figures come from{" "}
              <Link
                href="/technology/acceptpulse"
                className="text-teal-4 hover:underline font-medium"
              >
                AcceptPulse
              </Link>{" "}
              rather than being recalculated in the portal. That sounds like a technical detail and is actually the point: it is why the number you see and the number your account manager sees are the same number, and why a query does not turn into a reconciliation exercise.
            </p>
            <p>
              Changes go the same way. A requirement that moves — more people on Thursday, a shift pulled, a start time changed — is raised and tracked in the portal rather than in an email chain, so both sides are looking at the same request with the same timestamp on it. Most arguments about what was asked for turn out to be arguments about which message was the final one.
            </p>

            {/* REQUIRED: The Single-Source Diagram below paragraph 3 */}
            <div className="glass-card my-8 rounded-2xl border border-white/10 bg-navy-950/60 p-6 md:p-8 backdrop-blur-md">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-4">
                  Architecture · Single Source of Truth
                </span>
                <h4 className="text-base font-semibold text-white mt-1">
                  Diagram: one figure from AcceptPulse to the Client Portal
                </h4>
              </div>

              <div className="flex justify-center">
                <svg
                  viewBox="0 0 680 240"
                  className="w-full max-w-[620px] h-auto font-sans"
                  aria-label="Diagram showing single data source flowing from operational events through AcceptPulse to client portal and account manager"
                >
                  <defs>
                    <linearGradient id="pulseGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00A99D" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#00A99D" stopOpacity="0.05" />
                    </linearGradient>
                    <marker id="arrowHead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6 Z" fill="#2dd4bf" />
                    </marker>
                  </defs>

                  {/* Left: Input Events */}
                  <g>
                    <rect x="20" y="30" width="130" height="38" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" />
                    <text x="85" y="54" fill="#ffffff" fontSize="12" fontWeight="600" textAnchor="middle">Booked Shift</text>

                    <rect x="20" y="96" width="130" height="38" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" />
                    <text x="85" y="120" fill="#ffffff" fontSize="12" fontWeight="600" textAnchor="middle">Live Clock-In</text>

                    <rect x="20" y="162" width="130" height="38" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" />
                    <text x="85" y="186" fill="#ffffff" fontSize="12" fontWeight="600" textAnchor="middle">Timesheet Hours</text>
                  </g>

                  {/* Connecting lines to Center */}
                  <path d="M 150 49 L 260 100" stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrowHead)" />
                  <path d="M 150 115 L 260 115" stroke="#2dd4bf" strokeWidth="1.5" markerEnd="url(#arrowHead)" />
                  <path d="M 150 181 L 260 130" stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrowHead)" />

                  {/* Center: AcceptPulse Core Engine */}
                  <g>
                    <rect x="270" y="60" width="150" height="110" rx="14" fill="url(#pulseGlow)" stroke="#00A99D" strokeWidth="2" />
                    <text x="345" y="105" fill="#2dd4bf" fontSize="15" fontWeight="700" textAnchor="middle">AcceptPulse</text>
                    <text x="345" y="125" fill="#ffffff" fontSize="11" fontWeight="500" textAnchor="middle">Single Operational</text>
                    <text x="345" y="140" fill="#ffffff" fontSize="11" fontWeight="500" textAnchor="middle">Record Engine</text>
                  </g>

                  {/* Connecting lines to Right */}
                  <path d="M 420 95 L 520 65" stroke="#2dd4bf" strokeWidth="1.5" markerEnd="url(#arrowHead)" />
                  <path d="M 420 135 L 520 165" stroke="#2dd4bf" strokeWidth="1.5" markerEnd="url(#arrowHead)" />

                  {/* Right: Output Views sharing one figure */}
                  <g>
                    <rect x="530" y="40" width="130" height="55" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(45,212,191,0.3)" />
                    <text x="595" y="64" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">Client Portal</text>
                    <text x="595" y="82" fill="#2dd4bf" fontSize="10" textAnchor="middle">Identical Live Number</text>

                    <rect x="530" y="140" width="130" height="55" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(45,212,191,0.3)" />
                    <text x="595" y="164" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">Account Manager</text>
                    <text x="595" y="182" fill="#2dd4bf" fontSize="10" textAnchor="middle">Identical Live Number</text>
                  </g>
                </svg>
              </div>

              <p className="mt-4 text-xs text-center text-white/60 leading-relaxed">
                One figure travels from AcceptPulse to both the Client Portal and the account manager&apos;s view — eliminating data discrepancy and reconciliation meetings.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Seeing cost before the invoice arrives */}
        <section id="invoice" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Seeing cost before the invoice arrives
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Most disputes about agency invoices are not disputes about rates. They are disputes about hours — what was booked, what was actually worked, and which of the two is being charged — and they happen weeks after the shift, when nobody can remember.
            </p>
            <p>
              Where booked shifts, clock-in records and timesheets sit in the same place, cost accumulates visibly as the week runs. Finance can see labour cost building rather than discovering it later, and a discrepancy surfaces while both sides still have the context to resolve it. A query raised on Wednesday is a conversation; the same query raised three weeks later is a credit note and an argument.
            </p>
            <p>
              Timesheet approval follows the same logic. If the hours being approved are the hours recorded at the clock, approval is a check rather than an investigation, and it can be done at the end of the shift week instead of becoming a monthly administrative event.
            </p>
            <p className="pt-2 text-sm text-white/60">
              For interactive calculations before shifts run, explore our{" "}
              <Link
                href="/technology/rate-calculator"
                className="text-teal-4 hover:underline font-medium"
              >
                rate calculator
              </Link>{" "}
              and{" "}
              <Link
                href="/workforce-cost-calculator"
                className="text-teal-4 hover:underline font-medium"
              >
                workforce cost calculator
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Section: The six figures worth reviewing each week */}
        <section id="weekly" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            The six figures worth reviewing each week
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Six figures, reviewed weekly by site, will tell an operations manager almost everything worth knowing about agency labour.
            </p>
            <ol className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  1
                </span>
                <span>
                  <Link
                    href="/workforce-intelligence/temporary-worker-attendance/"
                    className="text-teal-4 hover:underline font-medium"
                  >
                    Booked against attended
                  </Link>
                  , by shift pattern. Not an average — the split by pattern is where the problem lives.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  2
                </span>
                <span>Shifts that were never accepted, as distinct from shifts where someone failed to arrive. Different causes, different fixes.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  3
                </span>
                <span>Repeat workers as a proportion of the total. A falling number predicts an attendance problem before the attendance figure moves.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  4
                </span>
                <span>Leavers in their first two weeks. This is an induction and first-day measure, not a recruitment one.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  5
                </span>
                <span>Overtime covering agency gaps. The cost of unreliable supply, sitting in a different budget line.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  6
                </span>
                <span>Hours booked against hours worked against hours invoiced. Three numbers that should reconcile and frequently do not.</span>
              </li>
            </ol>
            <p>
              None of these requires a data analyst. What they require is that the figures are defined the same way each week and come from the same source, which is why definitions matter more than dashboards.
            </p>
          </div>
        </section>

        {/* Section: Spotting a problem before it reaches output */}
        <section id="early" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Spotting a problem before it reaches output
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Workforce problems show up in the data before they show up on the line, because the behaviour changes first and the output changes once the slack is gone.
            </p>
            <p>
              Four signals tend to arrive before a visible staffing failure, often by a fortnight:
            </p>
            <ul className="space-y-3 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3 w-3" />
                </div>
                <span>Acceptance rates falling on a particular shift pattern.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3 w-3" />
                </div>
                <span>Repeat workers declining week on week.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3 w-3" />
                </div>
                <span>More leavers in their first fortnight.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3 w-3" />
                </div>
                <span>A rise in shifts being filled at short notice.</span>
              </li>
            </ul>
            <p>
              By the time the line is actually short, the signal has usually been present for a while and nobody was looking at it.
            </p>
            <p>
              This is pattern recognition rather than prediction, and the distinction is worth being honest about. Nothing here forecasts what will happen. What it does is make an emerging pattern visible early enough that someone can ask why, which is a more useful thing than a forecast and a considerably more defensible claim.
            </p>
          </div>
        </section>

        {/* Section: Using last year's data to plan this year's peak */}
        <section id="last-year" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Using last year&apos;s data to plan this year&apos;s peak
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Last year&apos;s peak is the best forecast available for this year&apos;s, and most operations cannot use it — because the record was never kept in a form that survives twelve months. Three things are worth having:
            </p>
            <ul className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">What you actually needed by week</strong>, not what you booked. The gap between the two is the overbooking you paid for, and it is usually consistent enough to plan against.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Where the failures clustered.</strong> Which shift patterns, which weeks, which sites — peak failure is almost never spread evenly, and the cluster is the thing to fix.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">When acceptance started to fall.</strong> That date is roughly when the local labour market ran out, and it is the date to start ahead of this year.
                </span>
              </li>
            </ul>
            <p>
              Those three turn a peak plan from a percentage uplift on last year&apos;s headcount into something you can defend in a meeting. They are also worth putting to any supplier: one who cannot produce them has not been keeping the record, and no amount of goodwill will reconstruct it afterwards.
            </p>
            <p>
              We will be straightforward about our own position. The systems that capture this were not running through last year&apos;s peak, so for most sites we cannot hand you last November on request either. They are running now, which means this coming peak is being recorded as it happens — and next year the conversation starts from evidence rather than from what anybody remembers. If a supplier tells you they can already produce all three for a site they took on recently, it is worth asking to see it.
            </p>
          </div>
        </section>

        {/* Section: Comparing sites fairly */}
        <section id="compare" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Comparing sites fairly
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Comparing two sites on a single attendance percentage is usually misleading, because the sites are not comparable in the ways that drive the number.
            </p>
            <p>
              Before concluding that one site is better run than another, check what differs underneath it:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-0 list-none my-6">
              {[
                "Shift patterns and start times",
                "Public transport access at those start times",
                "The local labour market around the site",
                "The proportion of night work",
                "How long the site has been operating",
                "How much of the workforce is new in any given week",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-3.5 text-sm"
                >
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                    <IconCheck className="h-3 w-3" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              A site starting at 6am in an area with no early bus service will underperform a site starting at 8am on a bus route, whatever the management does. Comparing the two on a single attendance percentage tells you about the bus timetable.
            </p>
            <p>
              The comparison that does work is like-for-like: the same shift pattern across sites, or the same site over time. And where a genuine difference remains after the structural factors are accounted for, it is worth looking at induction, supervision and the first-day experience before concluding anything about supply.
            </p>
          </div>
        </section>

        {/* Section: Using attendance, retention and feedback together */}
        <section id="together" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Using attendance, retention and feedback together
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Each of these three measures on its own can be read several ways. Together they usually give one answer.
            </p>
            <ul className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Poor attendance, good retention.</strong> A scheduling or transport problem — people want the work but cannot reliably get there.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Good attendance, poor retention.</strong> The work itself, or the way people are treated once they arrive.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Poor attendance and poor retention, on one site while others hold.</strong> The site rather than the supply.
                </span>
              </li>
            </ul>
            <p>
              These point somewhere; they do not prove a cause. A pattern that holds for three weeks is a reason to investigate rather than a finding.
            </p>
            <p>
              Reading the three together takes minutes and prevents the most expensive mistake available in temporary labour, which is treating a workplace problem as a recruitment problem and replacing the same people repeatedly. Learn more about analyzing{" "}
              <Link
                href="/workforce-intelligence/temporary-worker-retention/"
                className="text-teal-4 hover:underline font-medium"
              >
                retention
              </Link>{" "}
              and worker{" "}
              <Link
                href="/workforce-intelligence/temporary-worker-feedback/"
                className="text-teal-4 hover:underline font-medium"
              >
                feedback
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Section: What to look for in an agency portal */}
        <section id="choosing" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            What to look for in an agency portal
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Six questions worth asking about any supplier&apos;s system. Put them to us as well — we would rather be compared on these than on a demo.
            </p>
            <ol className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  1
                </span>
                <span>Is the attendance data live from a clock, or entered afterwards from timesheets? The two produce different numbers and only one of them is useful on the day.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  2
                </span>
                <span>Can you see bookings, attendance and timesheets in the same place, or are they three separate reports that have to be reconciled?</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  3
                </span>
                <span>Does the portal show the same figures the agency works from, or a summary prepared for you?</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  4
                </span>
                <span>Can access be controlled by site, so local managers see their operation and central teams see all of it?</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  5
                </span>
                <span>Can you raise and track a staffing request in the system rather than by email, so there is a record of what was asked and when?</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  6
                </span>
                <span>Are the definitions behind each figure written down anywhere? A dashboard without definitions is decoration.</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Section: Frequently asked questions */}
        <section id="faq" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 leading-snug">
                  {item.name}
                </h3>
                <p className="text-white/80 leading-relaxed text-[15px]">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Banner */}
        <div className="glass-card rounded-2xl border border-teal-5/30 bg-gradient-to-br from-teal-5/10 to-transparent p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Ready to See Live Shift Data?
          </h2>
          <p className="text-white/70 max-w-[540px] mx-auto mb-8 text-[15px] leading-relaxed">
            Discover how AcceptPulse and our Client Portal provide real-time attendance, live booking exception tracking, and shared definitions for your site.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-5 px-6 py-3.5 text-sm font-semibold text-navy-1 shadow-lg shadow-teal-5/20 transition-all hover:bg-teal-4 hover:shadow-teal-5/30 hover:scale-[1.02]"
          >
            See what this looks like for your sites
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
