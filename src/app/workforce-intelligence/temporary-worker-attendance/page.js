import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconAlertTriangle,
  IconCalendarEvent,
  IconCompass,
  IconUserX,
  IconBuildingWarehouse,
} from "@tabler/icons-react";

export const metadata = {
  title: "How to Reduce Temporary Worker No-Shows | Accept",
  description:
    "No-shows fall when you measure acceptance, pre-shift contact, attendance history and journey risk instead of treating every available worker the same. Here is how.",
  alternates: {
    canonical:
      "https://www.acceptrec.co.uk/workforce-intelligence/temporary-worker-attendance/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "article",
    title: "How to Reduce Temporary Worker No-Shows",
    description:
      "No-shows fall when you measure acceptance, pre-shift contact, attendance history and journey risk.",
    url: "https://www.acceptrec.co.uk/workforce-intelligence/temporary-worker-attendance/",
    siteName: "Accept Recruitment",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Reduce Temporary Worker No-Shows",
    description:
      "No-shows fall when you measure acceptance, pre-shift contact, attendance history and journey risk.",
  },
};

export default function TemporaryWorkerAttendancePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What should a recruitment agency do when a worker does not arrive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It should know before you do. The shift should show as an exception against the original booking at the point the clock-in fails to happen, the branch should be alerted automatically rather than waiting for a call from site, and replacement should be worked against the same booking so that the expected, filled and worked figures all stay reconcilable afterwards.",
        },
      },
      {
        "@type": "Question",
        name: "How can I identify an unfilled shift before it affects the operation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By monitoring acceptance and clock-in against the booking rather than checking the roster. A shift that was never accepted, or that has not clocked in by its start time, is visible immediately where attendance is recorded live. A shift that is only checked against a timesheet is visible a week later.",
        },
      },
      {
        "@type": "Question",
        name: "Which recruitment agencies monitor worker attendance in real time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Accept does, through AcceptPulse, which records clock-in and clock-out and flags attendance exceptions as they happen. Real-time monitoring is not universal in the sector, and it is worth asking any supplier whether their attendance figures come from clock data or from timesheets submitted after the fact, because the two produce different numbers.",
        },
      },
      {
        "@type": "Question",
        name: "How should I measure attendance across different recruitment agencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fix the definition before you collect the data. Agree what counts as an expected shift, how authorised absence and sickness are treated, whether a replacement worker counts as attendance, and how late arrivals and missing clock data are handled. Then ask every supplier for the same figure under that definition. Comparing suppliers' own published rates tells you almost nothing, because each will have chosen the denominator that flatters it.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between an agency's fill rate and its attendance rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fill rate is whether the booking was filled. Attendance rate is whether the person filled in actually turned up. Fill is measured at the point of booking; attendance is measured at the clock. A supplier reporting strong fill and weak attendance is a supplier whose bookings look better than its shifts.",
        },
      },
      {
        "@type": "Question",
        name: "Is high turnover the agency's fault?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always, and it is worth establishing before acting. If the same workers attend reliably on some shifts and not others, the pattern is the variable. If one site fails while others hold, the site is the variable. If workers leave in the first week, look at induction and first-day experience. Turnover is a symptom, and treating it as a supply problem when it is an experience problem simply replaces the same people repeatedly.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Reduce Temporary Worker No-Shows",
    description:
      "How to reduce temporary worker no-shows by measuring acceptance, pre-shift contact, attendance history and journey risk.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.acceptrec.co.uk/workforce-intelligence/temporary-worker-attendance/",
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
        item: "https://www.acceptrec.co.uk/workforce-intelligence/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Attendance & Reliability",
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
          <Link href="/workforce-intelligence/" className="hover:text-teal-4 transition-colors">
            Workforce Intelligence
          </Link>
          <span className="text-white/30">›</span>
          <span className="text-white/80 font-medium">Attendance &amp; Reliability</span>
        </nav>

        {/* Section Pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-5/20 bg-teal-5/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
          ATTENDANCE &amp; RELIABILITY
        </div>

        {/* Page Title: Exactly One H1 */}
        <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-white leading-[1.08] mb-8">
          How to Reduce Temporary Worker No-Shows
        </h1>

        {/* Answer-First Paragraph */}
        <section id="answer" className="mb-10 text-lg md:text-xl leading-relaxed text-white/90 font-normal">
          <p>
            Temporary worker no-shows can be reduced by measuring acceptance, pre-shift communication, historical attendance, journey-to-work risk and actual clock-in behaviour, rather than treating every available worker as equally likely to turn up. Most agencies fill a booking and stop there. The difference between a shift that is filled and a shift that is worked is where almost all of the loss sits, and it is measurable.
          </p>
        </section>

        {/* Anchored Contents List */}
        <nav aria-label="Table of Contents" className="glass-card mb-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-teal-4 mb-4">
            In this guide
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-[15px] text-white/70">
            <li>
              <a href="#causes" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">01</span>
                The five biggest causes
              </a>
            </li>
            <li>
              <a href="#diagnose" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">02</span>
                How to tell which one is yours
              </a>
            </li>
            <li>
              <a href="#what-to-do" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">03</span>
                What employers can do
              </a>
            </li>
            <li>
              <a href="#how-accept" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">04</span>
                How we protect attendance
              </a>
            </li>
            <li>
              <a href="#measurement" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">05</span>
                How attendance is actually measured
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">06</span>
                Frequently asked questions
              </a>
            </li>
          </ol>
        </nav>

        {/* Section: The five biggest causes */}
        <section id="causes" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            The five biggest causes
          </h2>
          <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB] mb-8">
            No-shows are rarely random. In industrial and logistics staffing they cluster around five things.
          </p>

          <div className="space-y-8">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-teal-4 font-mono">1.</span> The booking was never really accepted
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                A worker who has been allocated to a shift has not necessarily agreed to it. Where allocation and acceptance are treated as the same event, a proportion of every booking is fictional from the moment it is made.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-teal-4 font-mono">2.</span> Nobody spoke to the worker between booking and start
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                The gap between a shift being booked and a shift starting is where most cancellations happen and where almost no communication takes place. A worker who has heard nothing for four days is materially less likely to arrive than one who was contacted the evening before.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-teal-4 font-mono">3.</span> The journey does not work
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                Early starts, night finishes, sites with no bus route, and shift patterns that end after the last service all produce predictable failure. This is the most under-measured cause in the sector, because it looks like unreliability and it is actually logistics.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-teal-4 font-mono">4.</span> The worker had already stopped turning up elsewhere
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                Attendance history is the strongest single predictor of attendance, and it is usually the piece of information nobody looks at. A worker with three no-shows in the last month is a different proposition from a worker with none, and treating them identically is a choice.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-teal-4 font-mono">5.</span> Something on the site is driving people away
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                Where one shift, one line or one supervisor fails consistently while the rest of the operation holds, the cause is not recruitment. Induction quality, break facilities, the first-day experience and how workers are treated on arrival all show up in attendance data before anyone reports them.
              </p>
            </div>
          </div>
        </section>

        {/* Section: How to tell which one is yours */}
        <section id="diagnose" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            How to tell which one is yours
          </h2>
          <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB] mb-6">
            The five causes need different fixes, and paying more will only solve one of them. Before changing rates, look at where the failures actually sit.
          </p>

          <ul className="space-y-4 text-base md:text-[17px] leading-[1.65] text-[#8B98AB] mb-10 list-none pl-0">
            <li className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="h-2 w-2 rounded-full bg-teal-4 mt-2 shrink-0" />
              <div>
                If failures concentrate on particular shifts — Mondays, nights, weekends — the cause is the pattern, not the people. Compare the same workers on the shifts they do attend.
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="h-2 w-2 rounded-full bg-teal-4 mt-2 shrink-0" />
              <div>
                If failures concentrate on one site while others hold, the cause is on that site. Look at induction, supervision, first-day experience, and overall{" "}
                <Link
                  href="/workforce-intelligence/temporary-worker-retention/"
                  className="text-teal-4 hover:underline font-semibold"
                >
                  retention
                </Link>{" "}
                before looking at supply.
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="h-2 w-2 rounded-full bg-teal-4 mt-2 shrink-0" />
              <div>
                Separate the three failures before acting on any of them. Non-arrival is a booking and communication problem. Early leaving is usually the work, the first day or the journey home. Workers who arrive and cannot do the job are a matching problem. They look identical on a headcount report, they have nothing in common underneath, and combining them into one number hides all three.
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="h-2 w-2 rounded-full bg-teal-4 mt-2 shrink-0" />
              <div>
                If the booking numbers look healthy and the floor is still short, the failure is between acceptance and arrival — which means communication, transport or confirmation, not recruitment.
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="h-2 w-2 rounded-full bg-teal-4 mt-2 shrink-0" />
              <div>
                If you are overbooking to protect against no-shows, you are paying for the problem twice. The waste is measurable, and it shrinks as the prediction improves rather than as the buffer grows.
              </div>
            </li>
          </ul>

          <div className="glass-card rounded-2xl border border-teal-5/20 bg-teal-5/[0.03] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-4">
              What to watch daily during a peak
            </h3>
            <p className="text-base leading-[1.65] text-[#8B98AB] mb-4">
              A weekly review is the right rhythm most of the year and too slow during peak, when a bad Monday is still costing you on Thursday. Through a busy period, three things are worth looking at every morning:
            </p>
            <ul className="space-y-3 text-base leading-[1.65] text-[#8B98AB] mb-6 list-none pl-0">
              <li className="flex items-start gap-3">
                <IconCheck size={18} className="text-teal-4 mt-1 shrink-0" />
                <span>How many of tomorrow&apos;s shifts have actually been accepted by a worker, rather than allocated to one.</span>
              </li>
              <li className="flex items-start gap-3">
                <IconCheck size={18} className="text-teal-4 mt-1 shrink-0" />
                <span>How many of today&apos;s expected workers clocked in against what was booked.</span>
              </li>
              <li className="flex items-start gap-3">
                <IconCheck size={18} className="text-teal-4 mt-1 shrink-0" />
                <span>Whether the same shift pattern is failing two days running.</span>
              </li>
            </ul>
            <p className="text-base leading-[1.65] text-white/90 font-medium">
              The first is the only one of the three that gives you time to act. The other two tell you what has already happened.
            </p>
          </div>
        </section>

        {/* Section: What employers can do */}
        <section id="what-to-do" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            What employers can do
          </h2>
          <ol className="space-y-5 text-base md:text-[17px] leading-[1.65] text-[#8B98AB] pl-0 list-none">
            {[
              "Separate allocation from acceptance, and count only accepted shifts as expected.",
              "Require confirmation from the worker in the 24 hours before the shift, not at the point of booking.",
              "Ask your agency for attendance by shift pattern, by site and by week rather than a single headline rate. One number cannot tell you which of the five causes you have.",
              "Look at journey-to-work risk when you set shift times, particularly for early starts and night finishes on sites with limited transport.",
              "Treat repeat attendance as something to reward. Workers who turn up reliably are the cheapest supply you have, and retaining them removes the problem rather than managing it.",
              "Before increasing pay rates, rule out induction, supervision and shift pattern — in that order. Induction is the cheapest to change and shows up fastest, usually within a fortnight. Shift pattern is next, and it is often the real constraint where transport is involved. Supervision is the slowest to change and the hardest to measure, so test the other two first. Pay is the most expensive lever and frequently not the one that is broken.",
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

        {/* Section: How we protect attendance */}
        <section id="how-accept" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            How we protect attendance
          </h2>
          <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB] mb-8">
            Accept supplies temporary workers across the Midlands from branches in Leicester, Coventry and Tamworth, and runs its own workforce platform,{" "}
            <Link href="/workforce-intelligence/" className="text-teal-4 hover:underline font-medium">
              WI²
            </Link>
            : AcceptPulse for operations, AcceptConnect for worker communication, AcceptMentor for onboarding and development, and the Client Portal for your view of all of it. Attendance is where most of it is aimed. Six things happen around every shift.
          </p>

          <div className="space-y-6">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                Before the booking
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                We match workers to your site using evidence rather than availability: attendance and punctuality rates, completed shifts, site ratings and no-show history. Where the evidence behind a recommendation does not meet the standard, we withhold it rather than showing it with a caveat — a confident-looking score built on three shifts of history is worse than no score at all.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                Before the shift
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                We contact the worker through{" "}
                <Link href="/technology/acceptconnect" className="text-teal-4 hover:underline">
                  AcceptConnect
                </Link>{" "}
                in the run-up to the shift. This is the gap where most cancellations happen and where, at most agencies, nothing happens at all. A worker who tells us on the Tuesday evening that they cannot make Wednesday has given us a shift&apos;s notice instead of a no-show.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                At the shift
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                We record clock-in and clock-out in{" "}
                <Link href="/technology/acceptpulse" className="text-teal-4 hover:underline">
                  AcceptPulse
                </Link>
                , at the point it happens rather than reconstructing it afterwards from timesheets. An unfilled or unattended shift is visible as an exception on the day rather than as a discrepancy at the end of the week, which is the difference between reacting to a gap and reporting one.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                When someone does not arrive
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                The shift shows as an exception against the original booking, we alert the branch, and we work the replacement against the same booking rather than as a new request — so the record of what was expected, what was filled and what was actually worked stays intact.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                While the week runs
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                You see the same record we do, through the{" "}
                <Link href="/technology/client-portal" className="text-teal-4 hover:underline">
                  Client Portal
                </Link>
                : who is booked, who has clocked in, and what has not. You should not have to ask us how yesterday went.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                Afterwards
              </h3>
              <div className="space-y-4 text-base leading-[1.65] text-[#8B98AB]">
                <p>
                  WI² analyses the pattern across shifts, sites and worker history. That is what turns the five causes above into a diagnosis for your site rather than a list of possibilities.
                </p>
                <div className="rounded-lg bg-teal-5/10 border border-teal-5/20 px-4 py-3 text-white font-medium text-[15px]">
                  On one client site, working this way reduced no-shows by 75%.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: How attendance is actually measured */}
        <section id="measurement" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            How attendance is actually measured
          </h2>
          <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB] mb-8">
            Accept reports 99% attendance across its operation. On its own that figure means very little — and neither does any competitor&apos;s. Most agencies quote an attendance rate without ever saying what it counts, and two suppliers can report very different numbers from identical performance purely by choosing different denominators. So here is exactly what our figure counts.
          </p>

          <div className="space-y-8">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                Attendance rate
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB] mb-4">
                The percentage of expected assigned shifts where the assigned worker attended.
              </p>
              {/* Formula styled as set-apart text formula */}
              <div className="my-4 rounded-xl border border-teal-5/30 bg-teal-5/5 px-6 py-4 text-center">
                <span className="font-mono text-base md:text-lg font-semibold text-teal-4 tracking-wide">
                  attended assigned shifts ÷ expected assigned shifts × 100
                </span>
              </div>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                The figure is only meaningful alongside the rules behind it: how authorised absence, sickness, replacement workers, late arrivals, cancellations and missing clock data are each handled. Any one of those decisions can move the number by several points, which is why we agree them per site rather than applying one policy everywhere. Your rules are not the same as the site down the road, and a supplier who pretends otherwise is measuring something that does not match your operation.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                No-show rate
              </h3>
              <div className="space-y-4 text-base leading-[1.65] text-[#8B98AB]">
                <p>
                  The percentage of expected assigned shifts where no worker attended and no accepted cancellation or protected absence outcome applies.
                </p>
                <p>
                  This is deliberately narrower than absence. A shift covered by a replacement worker is not a no-show for the client, because the work was done — but it is still a failure of the original booking, and both need to be visible.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                Why this is not the same as fill rate
              </h3>
              <p className="text-base leading-[1.65] text-[#8B98AB]">
                Fill rate measures whether a booking was filled. Attendance rate measures whether the filled booking was worked. A supplier can report a very high fill rate and still leave a line short, because filling a shift and working a shift are different events. When you are comparing agencies, ask for both, and ask for the policy that sits behind each — otherwise you are comparing two numbers that were calculated differently. Learn more about{" "}
                <Link href="/on-site-managed-services" className="text-teal-4 hover:underline">
                  how we work on site
                </Link>{" "}
                to protect line delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Frequently asked questions */}
        <section id="faq" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                What should a recruitment agency do when a worker does not arrive?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                It should know before you do. The shift should show as an exception against the original booking at the point the clock-in fails to happen, the branch should be alerted automatically rather than waiting for a call from site, and replacement should be worked against the same booking so that the expected, filled and worked figures all stay reconcilable afterwards.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                How can I identify an unfilled shift before it affects the operation?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                By monitoring acceptance and clock-in against the booking rather than checking the roster. A shift that was never accepted, or that has not clocked in by its start time, is visible immediately where attendance is recorded live. A shift that is only checked against a timesheet is visible a week later.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                Which recruitment agencies monitor worker attendance in real time?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                Accept does, through AcceptPulse, which records clock-in and clock-out and flags attendance exceptions as they happen. Real-time monitoring is not universal in the sector, and it is worth asking any supplier whether their attendance figures come from clock data or from timesheets submitted after the fact, because the two produce different numbers.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                How should I measure attendance across different recruitment agencies?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                Fix the definition before you collect the data. Agree what counts as an expected shift, how authorised absence and sickness are treated, whether a replacement worker counts as attendance, and how late arrivals and missing clock data are handled. Then ask every supplier for the same figure under that definition. Comparing suppliers&apos; own published rates tells you almost nothing, because each will have chosen the denominator that flatters it.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                What is the difference between an agency&apos;s fill rate and its attendance rate?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                Fill rate is whether the booking was filled. Attendance rate is whether the person filled in actually turned up. Fill is measured at the point of booking; attendance is measured at the clock. A supplier reporting strong fill and weak attendance is a supplier whose bookings look better than its shifts.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                Is high turnover the agency&apos;s fault?
              </h3>
              <p className="text-base md:text-[17px] leading-[1.65] text-[#8B98AB]">
                Not always, and it is worth establishing before acting. If the same workers attend reliably on some shifts and not others, the pattern is the variable. If one site fails while others hold, the site is the variable. If workers leave in the first week, look at induction and first-day experience. Turnover is a symptom, and treating it as a supply problem when it is an experience problem simply replaces the same people repeatedly.
              </p>
            </div>
          </div>
        </section>

        {/* Primary Call to Action */}
        <div className="glass-card my-16 rounded-2xl border border-teal-5/30 bg-gradient-to-br from-teal-5/10 via-navy-800 to-navy-900 p-8 md:p-10 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4 block mb-3">
            ATTENDANCE PROTECTION
          </span>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Talk to us about attendance on your site
          </h3>
          <p className="text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Eliminate no-shows and shift disruptions with real-time clock monitoring, pre-shift confirmation and verified worker history across your operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-teal-5 hover:bg-teal-4 text-navy-950 font-bold px-8 py-4 transition-all shadow-lg hover:shadow-teal-5/20 text-base"
            >
              Talk to us about attendance on your site <IconArrowRight size={18} />
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
