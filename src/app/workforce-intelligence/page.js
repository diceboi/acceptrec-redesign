import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  IconArrowRight,
  IconCheck,
  IconStarFilled,
  IconStar,
  IconClock,
  IconShieldCheck,
  IconChartBar,
  IconUsers,
  IconMessageCircle,
  IconSparkles,
  IconBuildingFactory2,
} from "@tabler/icons-react";

export const metadata = {
  title: "Workforce Intelligence for Temporary Staff | Accept",
  description:
    "What workforce intelligence is, how it differs from a weekly report, and what Accept clients can see about attendance, ratings and shift delivery.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/workforce-intelligence/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "article",
    title: "Workforce Intelligence for Temporary Staff",
    description:
      "What workforce intelligence is, how it differs from a weekly report, and what Accept clients can see.",
    url: "https://www.acceptrec.co.uk/workforce-intelligence/",
    siteName: "Accept Recruitment",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workforce Intelligence for Temporary Staff",
    description:
      "What workforce intelligence is, how it differs from a weekly report, and what Accept clients can see.",
  },
};

export default function WorkforceIntelligencePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is workforce intelligence, and how does it help employers using agency staff?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Workforce intelligence is the governed use of workforce operational data, service outcomes and structured human feedback to identify patterns, measure delivery and support better decisions. In practice it means the answer to “why did we run short on Tuesday nights” comes from records of what was booked, accepted, attended and worked, rather than from anyone's recollection. It informs human judgement rather than replacing it, and nothing in it makes a placement decision on its own.",
        },
      },
      {
        "@type": "Question",
        name: "How does workforce intelligence differ from a weekly recruitment report?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A weekly report tells you what happened. Workforce intelligence tells you where the pattern is. A report says forty shifts were filled and thirty-six were worked; intelligence shows that the four failures were all night shifts on one line, all in the first fortnight of a worker's assignment, which points at induction rather than supply. The difference is whether the data is structured well enough to be cut by shift, site, pattern and worker history — and whether the definitions behind it are consistent enough for the comparison to mean anything.",
        },
      },
      {
        "@type": "Question",
        name: "Can I rate temporary workers after their shifts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Authorised users at your sites can submit a five-star rating across four dimensions — punctuality, work quality, attitude and communication — with an optional comment. The overall score is the mean of the four. Ratings are submitted by your team when they choose to; they are not generated automatically for every worker on every shift.",
        },
      },
      {
        "@type": "Question",
        name: "Can I rebook workers who have performed well on previous shifts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Worker history, including completed shifts, attendance and punctuality and any ratings your team has given, is available when planning. The point of holding that history is that a worker who has already worked your site well is the lowest-risk supply you have, and rebooking them is cheaper and more reliable than finding someone new.",
        },
      },
      {
        "@type": "Question",
        name: "Can site managers and head office have different levels of access?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Client Portal applies client and site access controls, so a site manager can be given their own site while a head office user sees the whole account. This matters for multi-site operations where local managers need day-to-day detail and central teams need comparison across sites.",
        },
      },
      {
        "@type": "Question",
        name: "Does Accept charge for Workforce Intelligence?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Working with Accept for your temporary workforce includes WI² — there is no additional fee, no monthly licence and no premium tier, and it is not sold as a separate product. Every client has it regardless of size: sites running five workers a week have the same technology as sites running over a hundred and fifty. The reason it is not priced separately is that workforce data is only useful if the people running the site look at it weekly, and anything behind a licence fee gets looked at by whoever holds the licence, once a quarter.",
        },
      },
      {
        "@type": "Question",
        name: "What evidence should I ask for when an agency claims its technology improves performance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ask three things. First, what exactly is being measured — the definition and the denominator, not the headline percentage. Second, where the number comes from: a system record, or a figure assembled by hand afterwards. Third, whether the improvement is attributed to a named client engagement or presented as a universal result, because those are very different claims. An agency that cannot answer all three is describing a marketing position rather than a measurement.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Workforce Intelligence for Temporary Staff",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.acceptrec.co.uk/workforce-intelligence/",
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
        name: "Workforce Intelligence",
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
          <span className="text-white/80 font-medium">Workforce Intelligence</span>
        </nav>

        {/* Section Pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-5/20 bg-teal-5/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
          WI² OVERVIEW
        </div>

        {/* Page Title: Exactly One H1 */}
        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-semibold tracking-tight text-white leading-[1.08] mb-8">
          Workforce Intelligence
        </h1>

        {/* Answer-First Paragraph */}
        <section id="answer" className="mb-10 text-lg md:text-xl leading-relaxed text-white/90 font-normal">
          <p>
            Most recruitment agencies can tell you how many people they sent. Accept can show you what happened after they arrived. Workforce Intelligence — WI² — is the technology behind our industrial, warehouse and logistics staffing across the Midlands, and our national driving service: four systems we built ourselves, covering everything from the first message a worker receives to the attendance figure on your dashboard on Monday morning. It is why we can tell you what was requested, what was accepted, who attended, which shifts were delivered and where the same failure keeps recurring — and why our clients get all of it as part of the service rather than as a paid extra.
          </p>
        </section>

        {/* Anchored Contents List */}
        <nav aria-label="Table of Contents" className="glass-card mb-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-teal-4 mb-4">
            In this guide
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-[15px] text-white/70">
            <li>
              <a href="#what-is" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">01</span>
                What workforce intelligence is
              </a>
            </li>
            <li>
              <a href="#what-you-see" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">02</span>
                What you can see and do
              </a>
            </li>
            <li>
              <a href="#vs-report" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">03</span>
                How it differs from a weekly report
              </a>
            </li>
            <li>
              <a href="#cost" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">04</span>
                What it costs
              </a>
            </li>
            <li>
              <a href="#systems" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">05</span>
                How the systems fit together
              </a>
            </li>
            <li>
              <a href="#numbers" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">06</span>
                The numbers & measurement
              </a>
            </li>
            <li>
              <a href="#topics" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">07</span>
                Explore the topics
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">08</span>
                Frequently asked questions
              </a>
            </li>
          </ol>
        </nav>

        {/* Section: What workforce intelligence is */}
        <section id="what-is" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            What workforce intelligence is
          </h2>
          <div className="space-y-5 text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
            <p>
              Workforce intelligence is the governed use of workforce operational data, service outcomes and structured human feedback to identify patterns, measure delivery and support better workforce decisions. Governed is the important word: it means the definitions are fixed, the source is a system record rather than a recollection, and a figure is withheld when the evidence behind it does not meet the standard rather than being published anyway.
            </p>
            <p>
              It informs human decisions. It does not replace professional judgement, or the evidence requirements that sit behind a placement. Nothing described on this page allocates workers or makes a decision on its own.
            </p>
          </div>
        </section>

        {/* Section: What you can see and do */}
        <section id="what-you-see" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            What you can see and do
          </h2>
          <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB] mb-8">
            Here is what is actually on the screen when you log in: dashboards and planning, shifts and live attendance, timesheets, worker profiles, staff requests, compliance views, ratings and messages — for your sites, updating as the work happens rather than compiled the night before a meeting. Three parts of it are worth explaining properly, because they are the ones that change how a site is run.
          </p>

          {/* Graphic 1: Portal Dashboard */}
          <figure className="my-8 rounded-2xl border border-white/10 bg-[#0d131f] p-5 md:p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-teal-4/80" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  Client Portal · Live Site Dashboard
                </span>
              </div>
              <span className="text-[11px] font-mono text-teal-4/90 bg-teal-5/10 px-2 py-0.5 rounded">
                Live Data Feed
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                <div className="text-[11px] text-white/50 uppercase font-medium">Site Alpha (Coventry)</div>
                <div className="text-2xl font-semibold text-white mt-1">97.2%</div>
                <div className="text-[10px] text-teal-4 mt-0.5">42 / 43 On Site</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                <div className="text-[11px] text-white/50 uppercase font-medium">Site Beta (Leicester)</div>
                <div className="text-2xl font-semibold text-white mt-1">95.8%</div>
                <div className="text-[10px] text-teal-4 mt-0.5">68 / 71 On Site</div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                <div className="text-[11px] text-white/50 uppercase font-medium">Site Gamma (Tamworth)</div>
                <div className="text-2xl font-semibold text-white mt-1">98.1%</div>
                <div className="text-[10px] text-teal-4 mt-0.5">52 / 53 On Site</div>
              </div>
            </div>
            <figcaption className="text-xs text-center text-white/50 pt-2 border-t border-white/5">
              Attendance by site, as the client sees it on logging in.
            </figcaption>
          </figure>

          {/* Subsection: Worker history and site matching */}
          <div className="mt-10 mb-8">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-4">
              Worker history and site matching
            </h3>
            <div className="space-y-4 text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
              <p>
                We match workers to sites using evidence rather than availability alone. A recommendation can draw on attendance and punctuality rates, completed shifts, site ratings, no-show history and a match score, and it comes with a stated reason rather than as a bare ranking.
              </p>
              <p>
                Where the evidence behind a recommendation does not meet the governance standard, we withhold it rather than showing it with a caveat. A confident-looking score built on three shifts of history is worse than no score at all.
              </p>
              <p>
                Reducing the number of unsuitable workers sent to a site is mostly a matching problem rather than a screening one. A worker who has already done the same role on a similar site, turned up for it, and been rated well by the supervisor there is a different proposition from one who simply holds the right ticket — and the history is what lets us tell those two apart before anybody is booked.
              </p>
            </div>
          </div>

          {/* Graphic 2: Worker Profile */}
          <figure className="my-8 rounded-2xl border border-white/10 bg-[#0d131f] p-5 md:p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-teal-5/20 border border-teal-5/30 flex items-center justify-center text-teal-4 font-semibold text-sm">
                  JD
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Worker Profile #WRK-8421</div>
                  <div className="text-[11px] text-white/40">Verified Placement Record · Industrial Sector</div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-teal-4 bg-teal-5/10 border border-teal-5/20 px-2 py-0.5 rounded">
                Eligible &amp; Trade Checked
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-4">
              <div className="rounded-lg bg-white/[0.02] border border-white/5 p-2.5">
                <div className="text-[10px] text-white/50 uppercase">Completed Shifts</div>
                <div className="text-lg font-semibold text-white mt-0.5">84</div>
              </div>
              <div className="rounded-lg bg-white/[0.02] border border-white/5 p-2.5">
                <div className="text-[10px] text-white/50 uppercase">Attendance</div>
                <div className="text-lg font-semibold text-white mt-0.5">97.6%</div>
              </div>
              <div className="rounded-lg bg-white/[0.02] border border-white/5 p-2.5">
                <div className="text-[10px] text-white/50 uppercase">Site Rating</div>
                <div className="text-lg font-semibold text-teal-4 mt-0.5">4.8 / 5.0</div>
              </div>
              <div className="rounded-lg bg-white/[0.02] border border-white/5 p-2.5">
                <div className="text-[10px] text-white/50 uppercase">No-Show History</div>
                <div className="text-lg font-semibold text-white mt-0.5">0</div>
              </div>
            </div>
            <figcaption className="text-xs text-center text-white/50 pt-2 border-t border-white/5">
              Completed shifts, attendance and punctuality, site ratings, no-show history, on one record.
            </figcaption>
          </figure>

          {/* Subsection: Worker ratings */}
          <div className="mt-10 mb-8">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-4">
              Worker ratings
            </h3>
            <div className="space-y-4 text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
              <p>
                Authorised users at your sites can rate a worker across four dimensions — punctuality, work quality, attitude and communication — on a five-star scale, with an optional comment. The overall score is the mean of the four.
              </p>
              <p>
                Rating four named dimensions rather than giving one overall impression is what makes the results comparable between supervisors. “Good worker” means different things to different managers; punctuality does not. Read more about how our{" "}
                <Link
                  href="/technology/worker-ratings"
                  className="text-teal-4 hover:underline font-medium inline-flex items-center gap-1"
                >
                  worker ratings
                </Link>{" "}
                operate across client facilities.
              </p>
            </div>
          </div>

          {/* Graphic 3: Ratings Form */}
          <figure className="my-8 rounded-2xl border border-white/10 bg-[#0d131f] p-5 md:p-6 shadow-xl">
            <div className="border-b border-white/10 pb-3 mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                Shift Feedback Submission
              </span>
              <span className="text-[11px] text-white/40">Supervisor Input</span>
            </div>
            <div className="space-y-3 mb-4">
              {[
                { name: "Punctuality", stars: 5 },
                { name: "Work Quality", stars: 4 },
                { name: "Attitude", stars: 5 },
                { name: "Communication", stars: 4 },
              ].map((dim, i) => (
                <div key={i} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
                  <span className="text-sm text-white/80 font-medium">{dim.name}</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <IconStarFilled
                        key={s}
                        size={15}
                        className={s <= dim.stars ? "text-teal-4" : "text-white/20"}
                      />
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-2">
                <div className="text-[11px] text-white/50 mb-1">Supervisor comment (optional)</div>
                <div className="rounded-lg bg-white/[0.03] border border-white/10 px-3 py-2 text-xs text-white/70 italic">
                  &ldquo;Punctual on 06:00 shift start. Followed line instructions accurately and assisted team with pallet wrapping.&rdquo;
                </div>
              </div>
            </div>
            <figcaption className="text-xs text-center text-white/50 pt-2 border-t border-white/5">
              The five-star scale across all four named dimensions — punctuality, work quality, attitude, communication — with the comment field.
            </figcaption>
          </figure>

          {/* Subsection: Access levels */}
          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-4">
              Access levels
            </h3>
            <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
              The Client Portal applies client and site access controls, so a site manager can be given their own site while a head office user sees every site on the account. For multi-site operations this is the difference between local detail and central comparison, and both are usually needed.
            </p>
          </div>
        </section>

        {/* Section: How it differs from a weekly report */}
        <section id="vs-report" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            How it differs from a weekly report
          </h2>
          <div className="space-y-5 text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
            <p className="text-lg md:text-xl font-medium text-white/90">
              A weekly report tells you what happened. Workforce intelligence tells you where the pattern is.
            </p>
            <p>
              A report says forty shifts were booked and thirty-six were worked. Intelligence shows that all four failures were night shifts, on one line, in the first fortnight of an assignment — which points at induction rather than supply, and means increasing the pay rate would have cost money and fixed nothing. The difference is whether the underlying data can be cut by shift pattern, site, week and worker history, and whether the definitions are consistent enough for the comparison to mean anything.
            </p>
          </div>
        </section>

        {/* Section: What it costs */}
        <section id="cost" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            What it costs
          </h2>
          <div className="glass-card mb-6 rounded-2xl border border-teal-5/30 bg-teal-5/5 p-6 md:p-8">
            <p className="text-lg md:text-xl font-semibold text-white leading-snug mb-3">
              Nothing beyond the staffing itself.
            </p>
            <p className="text-base md:text-[17px] leading-relaxed text-white/90">
              Work with Accept for your temporary workforce and you get WI² with it — no additional fee, no monthly licence, no premium tier. It is part of the service rather than a product sold alongside it.
            </p>
          </div>
          <div className="space-y-5 text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
            <p>
              Every client has it, and there is no threshold to reach first. Sites running five workers a week have the same technology as sites running over a hundred and fifty, because the smaller operation is usually the one with the least time to chase an agency for a figure.
            </p>
            <p>
              That is deliberate. Workforce data is most useful when the people running the site look at it weekly, and anything behind a licence fee gets looked at by whoever holds the licence, once a quarter.
            </p>
          </div>
        </section>

        {/* Section: How the systems fit together */}
        <section id="systems" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            How the systems fit together
          </h2>
          <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB] mb-6">
            Four systems sit under the WI² umbrella, and Accept built all four in-house rather than buying them off the shelf — purpose-built for the way our clients actually run their sites: three that run the work, and one you log into to see it. That is the reason the intelligence exists at all. It comes from records the systems produce as the work happens, not from a report somebody assembles afterwards — and an agency working from bought-in software and a spreadsheet cannot produce it at any price.
          </p>

          <ul className="space-y-4 text-base md:text-[17px] leading-[1.65] text-[#8B98AB] my-8 list-none pl-0">
            <li className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="h-2 w-2 rounded-full bg-teal-4 mt-2 shrink-0" />
              <div>
                <strong className="text-white">
                  <Link href="/technology/acceptpulse" className="text-teal-4 hover:underline">
                    AcceptPulse
                  </Link>
                </strong>{" "}
                owns workforce operations — workers, clients, sites, roles, scheduled shifts, clock-in and clock-out, attendance exceptions and hour review. It is the source for shift, clocking and attendance figures.
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="h-2 w-2 rounded-full bg-teal-4 mt-2 shrink-0" />
              <div>
                <strong className="text-white">AcceptConnect</strong> owns conversations — WhatsApp and other messaging flows, campaigns, registration conversations, recruiter handovers and service cases.
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="h-2 w-2 rounded-full bg-teal-4 mt-2 shrink-0" />
              <div>
                <strong className="text-white">AcceptMentor</strong> owns onboarding and development — secure registration and handover into operations, then coaching, goals, feedback and recognition.
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="h-2 w-2 rounded-full bg-teal-4 mt-2 shrink-0" />
              <div>
                <strong className="text-white">
                  <Link href="/technology/client-portal" className="text-teal-4 hover:underline">
                    The Client Portal
                  </Link>
                </strong>{" "}
                is your view of all of it — dashboards, planning, shifts, live attendance, timesheets, worker profiles, staff requests, compliance views, ratings and messages.
              </div>
            </li>
          </ul>

          {/* The WI² Diagram (Inline SVG) */}
          <figure className="my-10 rounded-2xl border border-teal-5/30 bg-[#0d1424] p-6 md:p-8 shadow-2xl overflow-hidden">
            <svg
              viewBox="0 0 700 360"
              className="w-full h-auto text-white select-none font-sans"
              role="img"
              aria-label="Diagram: the four systems under the WI² umbrella"
            >
              {/* Outer Enclosing Umbrella / Frame */}
              <rect
                x="8"
                y="8"
                width="684"
                height="344"
                rx="20"
                fill="none"
                stroke="rgba(0, 169, 157, 0.4)"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <rect
                x="20"
                y="18"
                width="240"
                height="28"
                rx="8"
                fill="rgba(0, 169, 157, 0.15)"
              />
              <text
                x="32"
                y="37"
                fill="#2dd4bf"
                fontSize="12"
                fontWeight="700"
                letterSpacing="1.5"
              >
                WORKFORCE INTELLIGENCE (WI²)
              </text>

              {/* Client's View: The Client Portal (Top Level) */}
              <g transform="translate(180, 60)">
                <rect
                  width="340"
                  height="70"
                  rx="14"
                  fill="rgba(13, 21, 34, 0.95)"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                />
                <circle cx="28" cy="35" r="14" fill="rgba(45, 212, 191, 0.2)" />
                <path
                  d="M23 35 L27 39 L34 31"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <text x="52" y="32" fill="#ffffff" fontSize="15" fontWeight="700">
                  The Client Portal
                </text>
                <text x="52" y="50" fill="#8B98AB" fontSize="11" fontWeight="500">
                  Client&apos;s View · Live Dashboards, Planning &amp; Ratings
                </text>
              </g>

              {/* Upward Connecting Arrows & Evidence Layer */}
              <g transform="translate(180, 130)">
                <line
                  x1="170"
                  y1="50"
                  x2="170"
                  y2="5"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <polygon points="170,0 166,8 174,8" fill="#2dd4bf" />
                <rect
                  x="50"
                  y="18"
                  width="240"
                  height="22"
                  rx="6"
                  fill="rgba(255, 255, 255, 0.05)"
                />
                <text
                  x="170"
                  y="33"
                  textAnchor="middle"
                  fill="#8B98AB"
                  fontSize="10"
                  fontWeight="600"
                  letterSpacing="1"
                >
                  GOVERNED EVIDENCE LAYER
                </text>
              </g>

              {/* Three Operational Systems along the bottom */}
              {/* AcceptPulse */}
              <g transform="translate(30, 200)">
                <rect
                  width="196"
                  height="120"
                  rx="12"
                  fill="rgba(255, 255, 255, 0.03)"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1.5"
                />
                <text x="18" y="34" fill="#ffffff" fontSize="14" fontWeight="700">
                  AcceptPulse
                </text>
                <text x="18" y="54" fill="#2dd4bf" fontSize="11" fontWeight="600">
                  Workforce Operations
                </text>
                <text x="18" y="76" fill="#8B98AB" fontSize="10">
                  Shifts, scheduling, clocking,
                </text>
                <text x="18" y="92" fill="#8B98AB" fontSize="10">
                  attendance exceptions.
                </text>
                {/* Arrow up to layer */}
                <line
                  x1="98"
                  y1="0"
                  x2="190"
                  y2="-20"
                  stroke="rgba(45, 212, 191, 0.5)"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </g>

              {/* AcceptConnect */}
              <g transform="translate(252, 200)">
                <rect
                  width="196"
                  height="120"
                  rx="12"
                  fill="rgba(255, 255, 255, 0.03)"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1.5"
                />
                <text x="18" y="34" fill="#ffffff" fontSize="14" fontWeight="700">
                  AcceptConnect
                </text>
                <text x="18" y="54" fill="#2dd4bf" fontSize="11" fontWeight="600">
                  Conversations
                </text>
                <text x="18" y="76" fill="#8B98AB" fontSize="10">
                  Messaging flows, campaigns,
                </text>
                <text x="18" y="92" fill="#8B98AB" fontSize="10">
                  recruiter handovers.
                </text>
                {/* Arrow up to layer */}
                <line
                  x1="98"
                  y1="0"
                  x2="98"
                  y2="-20"
                  stroke="rgba(45, 212, 191, 0.5)"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </g>

              {/* AcceptMentor */}
              <g transform="translate(474, 200)">
                <rect
                  width="196"
                  height="120"
                  rx="12"
                  fill="rgba(255, 255, 255, 0.03)"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1.5"
                />
                <text x="18" y="34" fill="#ffffff" fontSize="14" fontWeight="700">
                  AcceptMentor
                </text>
                <text x="18" y="54" fill="#2dd4bf" fontSize="11" fontWeight="600">
                  Onboarding &amp; Dev
                </text>
                <text x="18" y="76" fill="#8B98AB" fontSize="10">
                  Secure registration, coaching,
                </text>
                <text x="18" y="92" fill="#8B98AB" fontSize="10">
                  recognition &amp; feedback.
                </text>
                {/* Arrow up to layer */}
                <line
                  x1="98"
                  y1="0"
                  x2="10"
                  y2="-20"
                  stroke="rgba(45, 212, 191, 0.5)"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </g>
            </svg>
            <figcaption className="text-xs text-center text-white/60 pt-4 mt-3 border-t border-white/10 leading-relaxed">
              Four systems under one umbrella. The operational figures come from Pulse, which is why two parts of the system do not give you two different answers.
            </figcaption>
          </figure>

          <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
            Because the parts sit under one umbrella they share one set of definitions, and each operational figure has a single source. Attendance and shift figures come from Pulse rather than being recalculated somewhere else, which is why two parts of the system do not give you two different answers to the same question.
          </p>
        </section>

        {/* Section: The numbers, and what makes a number mean anything */}
        <section id="numbers" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            The numbers, and what makes a number mean anything
          </h2>
          <div className="space-y-5 text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
            <p className="text-lg md:text-xl font-medium text-white/90">
              Accept reports 98% fill and 99% attendance across its operation. Those are two different measurements and they should never be combined into one percentage.
            </p>
            <p>
              Fill rate is the percentage of requested shift positions that have an assigned worker by an agreed booking cutoff: positions assigned by cutoff, divided by non-cancelled positions requested, times 100. The request, cancellation and cutoff rules have to be stated alongside it, or the figure means different things to different readers. It measures whether demand was covered before the shift. Attendance measures whether the expected worker actually turned up, and is covered in detail on the{" "}
              <Link
                href="/workforce-intelligence/temporary-worker-attendance/"
                className="text-teal-4 hover:underline font-medium inline-flex items-center gap-1"
              >
                attendance page
              </Link>
              . A shift can be filled and then become a no-show; it can also start unfilled and be covered later by a replacement. Reporting them as one number hides both.
            </p>
            <p>
              Put that question to any agency you are considering, and put it to us: what exactly is being measured, where does the number come from, and is the improvement attributed to a named engagement or presented as a universal result? We can answer all three, and being able to is the whole point of building the systems this way. A supplier who cannot is quoting a marketing position rather than a measurement.
            </p>
          </div>
        </section>

        {/* Section: Explore the topics */}
        <section id="topics" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Explore the topics
          </h2>
          <ul className="space-y-3 pl-0 list-none text-base md:text-[17px]">
            <li className="glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-teal-5/30 transition-colors">
              <Link
                href="/workforce-intelligence/temporary-worker-attendance/"
                className="group flex items-start justify-between gap-4"
              >
                <div>
                  <div className="text-white font-semibold group-hover:text-teal-4 transition-colors">
                    Attendance &amp; Reliability
                  </div>
                  <div className="text-sm text-[#8B98AB] mt-0.5">
                    Reducing no-shows and measuring what actually happened
                  </div>
                </div>
                <IconArrowRight size={18} className="text-teal-4 mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li className="glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-teal-5/30 transition-colors">
              <Link
                href="/workforce-intelligence/temporary-worker-retention/"
                className="group flex items-start justify-between gap-4"
              >
                <div>
                  <div className="text-white font-semibold group-hover:text-teal-4 transition-colors">
                    Worker Retention
                  </div>
                  <div className="text-sm text-[#8B98AB] mt-0.5">
                    Why temporary workers leave and what it costs
                  </div>
                </div>
                <IconArrowRight size={18} className="text-teal-4 mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li className="glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-teal-5/30 transition-colors">
              <Link
                href="/workforce-intelligence/temporary-worker-feedback/"
                className="group flex items-start justify-between gap-4"
              >
                <div>
                  <div className="text-white font-semibold group-hover:text-teal-4 transition-colors">
                    Worker Feedback
                  </div>
                  <div className="text-sm text-[#8B98AB] mt-0.5">
                    What the people on your site are telling you
                  </div>
                </div>
                <IconArrowRight size={18} className="text-teal-4 mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li className="glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-teal-5/30 transition-colors">
              <Link
                href="/workforce-intelligence/workforce-analytics/"
                className="group flex items-start justify-between gap-4"
              >
                <div>
                  <div className="text-white font-semibold group-hover:text-teal-4 transition-colors">
                    Workforce Analytics
                  </div>
                  <div className="text-sm text-[#8B98AB] mt-0.5">
                    The reporting you should expect from an agency
                  </div>
                </div>
                <IconArrowRight size={18} className="text-teal-4 mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li className="glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-teal-5/30 transition-colors">
              <Link
                href="/workforce-intelligence/reducing-agency-labour-costs/"
                className="group flex items-start justify-between gap-4"
              >
                <div>
                  <div className="text-white font-semibold group-hover:text-teal-4 transition-colors">
                    Reducing Agency Labour Costs
                  </div>
                  <div className="text-sm text-[#8B98AB] mt-0.5">
                    What sits inside an hourly rate
                  </div>
                </div>
                <IconArrowRight size={18} className="text-teal-4 mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li className="glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-teal-5/30 transition-colors">
              <Link
                href="/employers/faq/"
                className="group flex items-start justify-between gap-4"
              >
                <div>
                  <div className="text-white font-semibold group-hover:text-teal-4 transition-colors">
                    employer FAQs
                  </div>
                  <div className="text-sm text-[#8B98AB] mt-0.5">
                    Straight operational answers on pay, attendance and turnover
                  </div>
                </div>
                <IconArrowRight size={18} className="text-teal-4 mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
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
                What is workforce intelligence, and how does it help employers using agency staff?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                Workforce intelligence is the governed use of workforce operational data, service outcomes and structured human feedback to identify patterns, measure delivery and support better decisions. In practice it means the answer to “why did we run short on Tuesday nights” comes from records of what was booked, accepted, attended and worked, rather than from anyone&apos;s recollection. It informs human judgement rather than replacing it, and nothing in it makes a placement decision on its own.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                How does workforce intelligence differ from a weekly recruitment report?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                A weekly report tells you what happened. Workforce intelligence tells you where the pattern is. A report says forty shifts were filled and thirty-six were worked; intelligence shows that the four failures were all night shifts on one line, all in the first fortnight of a worker&apos;s assignment, which points at induction rather than supply. The difference is whether the data is structured well enough to be cut by shift, site, pattern and worker history — and whether the definitions behind it are consistent enough for the comparison to mean anything.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                Can I rate temporary workers after their shifts?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                Yes. Authorised users at your sites can submit a five-star rating across four dimensions — punctuality, work quality, attitude and communication — with an optional comment. The overall score is the mean of the four. Ratings are submitted by your team when they choose to; they are not generated automatically for every worker on every shift.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                Can I rebook workers who have performed well on previous shifts?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                Yes. Worker history, including completed shifts, attendance and punctuality and any ratings your team has given, is available when planning. The point of holding that history is that a worker who has already worked your site well is the lowest-risk supply you have, and rebooking them is cheaper and more reliable than finding someone new.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                Can site managers and head office have different levels of access?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                Yes. The Client Portal applies client and site access controls, so a site manager can be given their own site while a head office user sees the whole account. This matters for multi-site operations where local managers need day-to-day detail and central teams need comparison across sites.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                Does Accept charge for Workforce Intelligence?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                No. Working with Accept for your temporary workforce includes WI² — there is no additional fee, no monthly licence and no premium tier, and it is not sold as a separate product. Every client has it regardless of size: sites running five workers a week have the same technology as sites running over a hundred and fifty. The reason it is not priced separately is that workforce data is only useful if the people running the site look at it weekly, and anything behind a licence fee gets looked at by whoever holds the licence, once a quarter.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                What evidence should I ask for when an agency claims its technology improves performance?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                Ask three things. First, what exactly is being measured — the definition and the denominator, not the headline percentage. Second, where the number comes from: a system record, or a figure assembled by hand afterwards. Third, whether the improvement is attributed to a named client engagement or presented as a universal result, because those are very different claims. An agency that cannot answer all three is describing a marketing position rather than a measurement.
              </p>
            </div>
          </div>
        </section>

        {/* Primary Call to Action */}
        <div className="glass-card my-16 rounded-2xl border border-teal-5/30 bg-gradient-to-br from-teal-5/10 via-navy-800 to-navy-900 p-8 md:p-10 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4 block mb-3">
            NEXT STEPS
          </span>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            See what this looks like on your site
          </h3>
          <p className="text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Discover how governed workforce operational data, live attendance tracking and supervisor feedback can transform temporary staffing at your facilities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-teal-5 hover:bg-teal-4 text-navy-950 font-bold px-8 py-4 transition-all shadow-lg hover:shadow-teal-5/20 text-base"
            >
              See what this looks like on your site <IconArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-4 transition-all border border-white/10 text-base"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
