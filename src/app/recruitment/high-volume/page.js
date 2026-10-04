import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconUsers,
  IconChartBar,
  IconAlertTriangle,
  IconLayersLinked,
  IconFileCertificate,
  IconCalendarTime,
  IconBuildingWarehouse,
} from "@tabler/icons-react";

export const metadata = {
  title: "High Volume & Peak Staffing in the Midlands | Accept",
  description:
    "What actually determines how fast a large temporary intake can start — lead time, induction throughput, peak planning and stepping down afterwards.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/recruitment/high-volume/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "article",
    title: "High Volume & Peak Staffing in the Midlands",
    description:
      "What actually determines how fast a large temporary intake can start.",
    url: "https://www.acceptrec.co.uk/recruitment/high-volume/",
    siteName: "Accept Recruitment",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "High Volume & Peak Staffing in the Midlands",
    description:
      "What actually determines how fast a large temporary intake can start.",
  },
};

export default function HighVolumeStaffingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much notice does an agency need to supply 50 or 100 temporary workers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on three things, and the headcount is the least important of them. First, whether the workers already exist in the pool or have to be recruited — a like-for-like intake from an established local pool moves in days, a new skill set in a new area takes weeks. Second, the compliance and induction throughput, which is the real constraint: right-to-work checks and inductions have a daily capacity, and no amount of recruitment gets past it. Third, whether your own site is ready to receive people. Ask a supplier for their induction throughput per day rather than their headline capacity; that number tells you the actual lead time.",
        },
      },
      {
        "@type": "Question",
        name: "How do agencies check they have enough available workers before accepting a large booking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A supplier should be checking availability against records, not against optimism: who is currently working, who is available, who has worked that shift pattern before, who is within travelling distance of the site, and who has the qualifications the role requires. Ask what the check is based on. “We have a large database” is not an availability check — a database counts people who once registered, not people who will accept a shift next Monday.",
        },
      },
      {
        "@type": "Question",
        name: "When should I start recruiting for Black Friday and Christmas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Earlier than the headcount plan suggests, because the constraint is induction throughput rather than recruitment. Work backwards from the date you need people productive on site, allow for compliance checks and induction capacity, then add contingency for the proportion who accept and do not start. If you are competing for the same labour pool as every other warehouse in the area, starting late costs more than starting early — you end up paying a premium for people who are already committed elsewhere.",
        },
      },
      {
        "@type": "Question",
        name: "What can I do if peak demand arrives earlier than expected?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Change the shift pattern before you change the pay rate. Adding hours to people who are already inducted and already on site is faster and cheaper than recruiting, and it does not create a retention problem in January. After that, look at transport and start times, which often unlock availability that pay alone does not. Raising rates mid-peak is the most expensive option, it resets expectations for next season, and it is very hard to reverse.",
        },
      },
      {
        "@type": "Question",
        name: "How do I coordinate inductions for a large intake of temporary workers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Treat induction capacity as the planning constraint, not an administrative step at the end. Decide how many people can realistically be inducted per day on your site, phase arrivals to that number, and do not let a recruitment push deliver more people than the induction can absorb. A group inducted in a rush has measurably worse first-week attendance, which means the shortcut costs more than it saves.",
        },
      },
      {
        "@type": "Question",
        name: "How do we step labour down after peak without creating next season's retention problem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tell people what is happening and when, as early as you can. Workers who find out on the day treat the next approach from you with suspicion, and the good ones are the ones with other options. Identify the people you want back, say so explicitly, and keep the contact open through the quiet months. Retaining a proven worker through a gap costs far less than recruiting and inducting a replacement next October.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "High Volume & Peak Staffing in the Midlands",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.acceptrec.co.uk/recruitment/high-volume/",
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
        name: "Employers",
        item: "https://www.acceptrec.co.uk/employers",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "High Volume & Peak Staffing",
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
          <Link href="/employers" className="hover:text-teal-4 transition-colors">
            Employers
          </Link>
          <span className="text-white/30">›</span>
          <span className="text-white/80 font-medium">High Volume &amp; Peak Staffing</span>
        </nav>

        {/* Section Pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-5/20 bg-teal-5/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
          STAFFING SERVICES
        </div>

        {/* Page Title: Exactly One H1 */}
        <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-white leading-[1.08] mb-8">
          High Volume &amp; Peak Staffing
        </h1>

        {/* Answer-First Paragraph */}
        <section id="answer" className="mb-10 text-lg md:text-xl leading-relaxed text-white/90 font-normal">
          <p>
            How quickly a large temporary intake can start is determined by induction and compliance throughput, not by how many people an agency says it can find. Recruitment is rarely the constraint. Right-to-work checks, inductions and site readiness all have a daily capacity, and the intake moves at the speed of the slowest of them. Any supplier can quote a headline number; the useful question is how many people they can get compliant, inducted and productive per day, and whether your site can receive them at that rate.
          </p>
        </section>

        {/* Anchored Contents List */}
        <nav aria-label="Table of Contents" className="glass-card mb-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-teal-4 mb-4">
            In this guide
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-[15px] text-white/70">
            <li>
              <a href="#lead-time" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">01</span>
                How much notice is actually needed
              </a>
            </li>
            <li>
              <a href="#capacity" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">02</span>
                How to test whether a supplier can really do it
              </a>
            </li>
            <li>
              <a href="#plan" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">03</span>
                What a mobilisation plan contains
              </a>
            </li>
            <li>
              <a href="#induction" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">04</span>
                Getting a large intake through induction
              </a>
            </li>
            <li>
              <a href="#quality" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">05</span>
                Filling fast without dropping the bar
              </a>
            </li>
            <li>
              <a href="#peak" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">06</span>
                Planning for peak, and what to do when it moves
              </a>
            </li>
            <li>
              <a href="#stepdown" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">07</span>
                Stepping down afterwards
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

        {/* Section: How much notice is actually needed */}
        <section id="lead-time" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            How much notice is actually needed
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Three things set the lead time, and headcount is the least important of them.
            </p>
            <ul className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Whether the workers already exist.</strong> A like-for-like intake into a site and shift pattern an agency already staffs moves in days, because the people, the compliance records and the site knowledge are all in place. A new skill set, a new area, or a shift pattern nobody currently works is a recruitment job, and that takes weeks rather than days however urgent it is.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Compliance and induction throughput.</strong> Covered in detail below, and almost always the real limit on how fast anybody can start.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Whether your own site is ready.</strong> If equipment, supervision or the induction room are not available, the labour plan is not the thing holding you up.
                </span>
              </li>
            </ul>
            <p>
              Being honest about all three at the start produces a date you can actually plan against, which is worth considerably more than an optimistic one.
            </p>
          </div>
        </section>

        {/* Section: How to test whether a supplier can really do it */}
        <section id="capacity" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            How to test whether a supplier can really do it
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Every agency says it can scale. The difference between the ones that can and the ones that cannot shows up in what they are able to tell you before the work starts, not after.
            </p>
            <p>
              Accept operates from three Midlands branches —{" "}
              <Link
                href="/where-we-cover"
                className="text-teal-4 hover:underline font-medium"
              >
                Leicester, Coventry and Tamworth
              </Link>{" "}
              — which is what makes a large intake across the region a matter of drawing on established local pools rather than recruiting from scratch in an unfamiliar area.
            </p>
            <p>
              As one example of what that makes possible: in a past engagement with{" "}
              <Link
                href="/case-studies/inpost"
                className="text-teal-4 hover:underline font-medium"
              >
                InPost
              </Link>
              , Accept mobilised 55 workers within 72 hours. That was one set of circumstances — an existing pool, a known site, a shift pattern already being worked — and it is a record of what happened rather than a commitment about what will. What it illustrates is the general point: speed comes from work already done, not from effort applied afterwards.
            </p>
            <p>
              Four questions will tell you more about a supplier's real capacity than any headline figure:
            </p>
            <ul className="space-y-3 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-5/10 text-teal-4 text-xs font-mono font-bold">
                  Q1
                </span>
                <span>
                  How many people can you get through compliance and induction per day? This is the number that sets your start date.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-5/10 text-teal-4 text-xs font-mono font-bold">
                  Q2
                </span>
                <span>
                  What is the availability check based on — records of who is currently working and available, or the size of a database? A database counts people who once registered, not people who will accept a shift next Monday.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-5/10 text-teal-4 text-xs font-mono font-bold">
                  Q3
                </span>
                <span>
                  How many of the people you place at this kind of site have worked that shift pattern before? Familiarity predicts first-week attendance better than almost anything else.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-5/10 text-teal-4 text-xs font-mono font-bold">
                  Q4
                </span>
                <span>
                  What happened on your last mobilisation of this size — how many started, how many were still there in week four? The second number is the one that matters.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section: What a mobilisation plan contains */}
        <section id="plan" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            What a mobilisation plan contains
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Whether you are opening a site, taking on a contract that doubles headcount, or building for peak, the plan needs the same seven things. Most failed mobilisations are missing one of them rather than being badly executed.
            </p>
            <ol className="space-y-4 my-6 pl-0 list-none counter-reset-item">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  1
                </span>
                <span>
                  The date people need to be productive on site, not the date they need to start. Those are different, and the gap between them is induction plus the first-week learning curve.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  2
                </span>
                <span>
                  Induction throughput per day, agreed with the site, and an arrival schedule phased to match it.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  3
                </span>
                <span>
                  The roles broken down by qualification — who needs a forklift ticket, which truck type, and how many of each. Aggregate headcount hides the constraint.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  4
                </span>
                <span>
                  Shift patterns confirmed, including start times, because transport availability at those times determines who can realistically take the work.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  5
                </span>
                <span>
                  An allowance for the proportion who accept and do not start. This is a known quantity, not an unforeseeable event, and a plan that assumes everyone who accepts will arrive is short before it begins.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  6
                </span>
                <span>
                  What happens if the building, the equipment or the go-live date moves — which it often does. A plan phased in stages can absorb a two-week slip; a single intake on one date cannot.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  7
                </span>
                <span>
                  A named person on each side and an agreed daily check during the ramp, so problems surface on the day rather than in the weekly report.
                </span>
              </li>
            </ol>
          </div>
        </section>

        {/* Section: Getting a large intake through induction */}
        <section id="induction" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Getting a large intake through induction
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Induction capacity is the planning constraint, and treating it as an administrative step at the end of the process is the most common reason a large intake goes wrong.
            </p>
            <p>
              The arithmetic is unforgiving. If your site can induct twenty people a day and you need eighty productive by Monday week, the recruitment has to be complete four working days earlier than most plans assume, and the arrivals have to be phased rather than delivered in one group. Pushing more people through than the induction can absorb does not accelerate anything — it produces a cohort who were processed rather than inducted.
            </p>
            <p>
              That shows up in the numbers within a week. A group inducted in a rush has measurably worse first-week attendance and worse first-month retention, which means the time saved at the front is paid back with interest at the back. Where the standard cannot be maintained, phasing the intake costs less than lowering it.
            </p>
          </div>
        </section>

        {/* Section: Filling fast without dropping the bar */}
        <section id="quality" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Filling fast without dropping the bar
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Urgency and quality are usually presented as a trade-off, and for most of the sector they are. The exception is when the people being placed have worked that site, or that shift pattern, before — in which case speed and reliability come from the same source rather than competing.
            </p>
            <p>
              This is the practical case for keeping a pool warm rather than rebuilding it each time. Workers with{" "}
              <Link
                href="/workforce-intelligence/temporary-worker-attendance/"
                className="text-teal-4 hover:underline font-medium"
              >
                attendance history
              </Link>{" "}
              at your site are both the fastest to deploy and the most likely to still be there in week four. Where a large intake does require new people, the thing not to compromise is the{" "}
              <Link
                href="/compliance/"
                className="text-teal-4 hover:underline font-medium"
              >
                qualification check
              </Link>{" "}
              against the actual task — a counterbalance ticket is not a reach ticket, and “we were under pressure” is not a defence anyone wants to be making afterwards.
            </p>
          </div>
        </section>

        {/* Section: Planning for peak, and what to do when it moves */}
        <section id="peak" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-8">
            Planning for peak, and what to do when it moves
          </h2>

          <div className="space-y-10">
            {/* Subsection 1 */}
            <div className="glass-card rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Working out how many people you need
              </h3>
              <div className="space-y-4 text-white/80 leading-relaxed text-[16px]">
                <p>
                  Start from throughput rather than headcount. The volume forecast, divided by units per person per hour, divided by the hours in a shift, gives you the shifts that have to be covered; the headcount follows from that, plus an allowance for absence and for the proportion who accept and do not start. A forecast expressed as a percentage increase on last year's headcount has skipped that step, and it carries last year's inefficiencies forward with it.
                </p>
                <p>
                  When a forecast moves — and a thirty per cent jump late in the year is common — test it against the three things that do not scale with it: induction throughput per day, the number of people within travelling distance who will work that shift pattern, and your own supervision ratio on the floor. If any of the three cannot absorb the increase, the plan is not realistic whatever the labour market is doing, and the earlier that is established the more options are still open.
                </p>
              </div>
            </div>

            {/* Subsection 2 */}
            <div className="glass-card rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                When to start
              </h3>
              <div className="space-y-4 text-white/80 leading-relaxed text-[16px]">
                <p>
                  Work backwards from the date people need to be productive, not the date the peak begins. Subtract the induction phasing, the compliance lead time, and an allowance for accepted-but-did-not-start. In most warehouse operations that puts the start of recruitment considerably earlier than the headcount plan implies.
                </p>
                <p>
                  The other reason to start early is competitive. If you are drawing on the same labour pool as every other warehouse within twenty minutes, the people available in late October are the ones nobody else wanted in September. Starting late is not a scheduling decision, it is a cost and quality decision.
                </p>
              </div>
            </div>

            {/* Subsection 3 */}
            <div className="glass-card rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                When peak arrives early or grows
              </h3>
              <div className="space-y-4 text-white/80 leading-relaxed text-[16px]">
                <p>
                  Change the shift pattern before you change the pay rate. Extending hours for people already inducted and already on site is faster than recruiting, costs less, and does not create a problem in January. After that, look at start times and transport, which frequently unlock availability that money alone does not.
                </p>
                <p>
                  Raising rates mid-peak is the most expensive lever and the hardest to reverse. It resets what workers expect next season, it is visible to every other employer in the area within days, and it does nothing about induction throughput — which is probably what is actually limiting you.
                </p>
              </div>
            </div>

            {/* Subsection 4 */}
            <div className="glass-card rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Keeping reliable people once every other site is hiring
              </h3>
              <div className="space-y-4 text-white/80 leading-relaxed text-[16px]">
                <p>
                  Through a peak, every warehouse within twenty minutes is recruiting at once, so holding on to the people you have matters more than the rate at which you can replace them. Three things decide whether a good worker stays, and only one of them is pay: whether the shift starts when they were told it would, whether the work matches what was described at induction, and whether anybody notices that they turned up. The first two are a briefing problem and the third is a supervision one, which is why raising the rate so rarely fixes it.
                </p>
                <p>
                  Accept watches first-week attendance daily through a peak rather than weekly. A worker who has missed a shift in their first week is the one most likely to be gone by week three, and a conversation on the day it happens is the only intervention we have found that reliably changes the outcome.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Stepping down afterwards */}
        <section id="stepdown" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Stepping down afterwards
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              How a peak ends determines how the next one starts. Workers who find out on the day that there is no more work treat the next approach from you with suspicion, and the good ones are the ones with somewhere else to go.
            </p>
            <p>
              Tell people what is happening and when, as early as you can. Identify the workers you want back, say so explicitly rather than assuming they know, and keep the contact open through the quiet months. Holding on to a proven worker through a gap costs a fraction of recruiting, checking and inducting a replacement the following October.
            </p>
            <p className="pt-2 text-sm text-white/60">
              For high-volume operations requiring dedicated day-to-day management on site, see{" "}
              <Link
                href="/on-site-managed-services"
                className="text-teal-4 hover:underline font-medium"
              >
                how we run an onsite service
              </Link>
              .
            </p>
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
            Planning a High Volume Intake?
          </h2>
          <p className="text-white/70 max-w-[540px] mx-auto mb-8 text-[15px] leading-relaxed">
            Speak with our regional operations team about real compliance throughput, local availability, and peak mobilisation plans.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-5 px-6 py-3.5 text-sm font-semibold text-navy-1 shadow-lg shadow-teal-5/20 transition-all hover:bg-teal-4 hover:shadow-teal-5/30 hover:scale-[1.02]"
          >
            Talk to us about a mobilisation
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
