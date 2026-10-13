import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconUserCheck,
  IconTrendingUp,
  IconAlertCircle,
} from "@tabler/icons-react";

export const metadata = {
  title: "Improving Temporary Worker Retention | Accept",
  description:
    "Why temporary workers leave, what to measure to find out, and how to get the same reliable people back on your shifts each week.",
  alternates: {
    canonical:
      "https://www.acceptrec.co.uk/workforce-intelligence/temporary-worker-retention/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "article",
    title: "How to Improve Temporary Worker Retention",
    description:
      "Why temporary workers leave, what to measure, and how to get the same people back each week.",
    url: "https://www.acceptrec.co.uk/workforce-intelligence/temporary-worker-retention/",
    siteName: "Accept Recruitment",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Improve Temporary Worker Retention",
    description:
      "Why temporary workers leave, what to measure, and how to get the same people back each week.",
  },
};

export default function WorkerRetentionPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I get the same reliable agency workers back each week?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Request named workers rather than a headcount, and make it a standing expectation rather than an occasional favour. Give as much notice as you can, because a worker choosing between a confirmed shift and a probable one takes the confirmed one. Keep the pattern consistent — the same days and start times matter more to most workers than a slightly higher rate on an unpredictable rota. And tell them you want them back; it costs nothing and almost nobody does it.",
        },
      },
      {
        "@type": "Question",
        name: "How do I improve temporary worker retention?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with the first fortnight, because that is when most departures are decided. Make sure someone is expecting each worker, the induction happens when it should, the PPE is there and somebody explains what the job actually involves. Then make the hours predictable. Pay is rarely the first thing that breaks — a content worker does not move for twenty pence, and an unhappy one will move for less.",
        },
      },
      {
        "@type": "Question",
        name: "What should I measure to understand why temporary workers leave?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Five things: leavers in the first two weeks as a proportion of starters, repeat workers as a proportion of weekly bookings, average assignment length split by shift pattern, the proportion who complete and then accept another assignment, and leaver reasons recorded consistently. Keep people who left separate from people who were not asked back — counting the second as the first makes a supply decision look like a retention problem.",
        },
      },
      {
        "@type": "Question",
        name: "How can better inductions improve temporary worker retention?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because most leaving decisions are made on day one. Whether someone was expecting the worker, whether the induction happened on time, whether the PPE was there, whether anyone explained the job — none of it costs money and all of it shows up in the first-fortnight leaver figure a month later. A rushed induction during a large intake is a false economy: processing forty people quickly and losing twelve within two weeks costs more than inducting them properly.",
        },
      },
      {
        "@type": "Question",
        name: "What can a recruitment agency do to improve continuity on my shifts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Match workers using history rather than availability — attendance, punctuality, previous performance at similar sites and travel practicality all predict whether someone is still there in a month. Prepare people before they arrive so the first shift is not the first time they hear what the work involves. Run onboarding as a continuing relationship rather than a registration event. And tell you honestly when the pattern points at your site rather than at supply, which is the test of a supplier worth keeping.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Improve Temporary Worker Retention",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.acceptrec.co.uk/workforce-intelligence/temporary-worker-retention/",
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
        name: "Worker Retention",
      },
    ],
  };

  const tocItems = [
    { id: "why-leave", label: "Why temporary workers leave" },
    { id: "measure", label: "What to measure" },
    { id: "induction", label: "The first shift decides most of it" },
    { id: "continuity", label: "Getting the same people back each week" },
    { id: "agency", label: "What an agency can actually do" },
    { id: "faq", label: "Frequently asked questions" },
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-white selection:bg-teal-5 selection:text-navy-900">
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

      {/* Atmospheric Background Effects */}
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
          <span className="text-white/80 font-medium">Worker Retention</span>
        </nav>

        {/* Section Pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-5/20 bg-teal-5/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
          UNDERSTAND YOUR WORKFORCE
        </div>

        {/* Page Title: Exactly One H1 */}
        <h1 className="text-4xl md:text-5xl lg:text-[50px] font-semibold tracking-tight text-white leading-[1.1] mb-8">
          How to Improve Temporary Worker Retention
        </h1>

        {/* Answer-First Paragraphs */}
        <section id="answer" className="mb-10 text-lg md:text-xl leading-relaxed text-white/90 font-normal space-y-4">
          <p>
            Temporary worker retention improves when the work is predictable, the first shift goes well, and returning is easier than starting somewhere new. Pay matters, but it is rarely the first thing that breaks. Most temporary workers leave a site for reasons that were visible in the first fortnight, and most of those reasons are fixable without changing the rate.
          </p>
          <p className="text-base text-white/70 leading-relaxed">
            Retention is one part of{" "}
            <Link
              href="/workforce-intelligence/"
              className="text-teal-4 hover:underline font-semibold"
            >
              Workforce Intelligence
            </Link>{" "}
            — WI², the set of systems behind Accept&apos;s service. It belongs there because almost everything on this page depends on knowing something: when people leave, which shift patterns lose them, who has worked well at your site before, and who came back afterwards. A site that cannot answer those four is guessing — and it will usually guess that the problem is the workers.
          </p>
        </section>

        {/* Table of Contents */}
        <div className="glass-card mb-14 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-4 mb-4">
            On this page
          </div>
          <nav aria-label="Table of contents">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-white/80">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-teal-4 transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <span className="text-teal-5/60 text-xs">#</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Section: Why temporary workers leave */}
        <section id="why-leave" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Why temporary workers leave
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Five reasons account for most departures in industrial and logistics work, and they are not evenly spread across the assignment.
            </p>
            <ul className="space-y-3.5 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Unpredictable hours</strong> — a worker who cannot tell whether they have three shifts or five next week cannot plan anything, and will take a job that lets them.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">A poor first day</strong> — nobody expecting them, no induction, standing around for an hour. This produces more departures than any other single cause and costs nothing to fix.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">The journey</strong> — early starts and late finishes on a site with no realistic transport. Often misread as unreliability.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">How they are treated</strong> — whether agency workers are spoken to like part of the operation or like a category. Workers notice this immediately and describe it to each other.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">A better offer nearby</strong> — which becomes decisive only when one of the four above is already true. A content worker does not move for twenty pence.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section: What to measure */}
        <section id="measure" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            What to measure
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Five measures, and the first two carry most of the diagnostic value.
            </p>
            <ol className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  1
                </span>
                <span>
                  <Link
                    href="/workforce-intelligence/temporary-worker-attendance/"
                    className="text-teal-4 hover:underline font-semibold"
                  >
                    first-fortnight leavers
                  </Link>
                  , as a proportion of starters. This isolates induction and first-day experience from everything that happens afterwards.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  2
                </span>
                <span>
                  Repeat workers as a proportion of each week&apos;s bookings. The cleanest single measure of whether people want to come back.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  3
                </span>
                <span>
                  Average assignment length, by shift pattern rather than overall. Night and weekend patterns usually behave differently and the average hides it.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  4
                </span>
                <span>
                  The proportion of workers who complete an assignment and then accept another at your site.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  5
                </span>
                <span>
                  Leaver reasons, recorded consistently at the point somebody leaves rather than reconstructed afterwards, and keeping the distinction between people who left and people who were not asked back.
                </span>
              </li>
            </ol>
            <p>
              That last distinction matters more than it sounds. Operations frequently count a worker they chose not to rebook as a leaver, which makes a supply decision look like a retention problem and points the fix in entirely the wrong direction.
            </p>
            <p>
              None of the five needs a new system to collect. They are already in{" "}
              <Link
                href="/workforce-intelligence/workforce-analytics/"
                className="text-teal-4 hover:underline font-semibold"
              >
                the records of who was booked, who attended and who came back
              </Link>
              , which is the practical reason to ask your agency for them rather than building a spreadsheet nobody maintains after March.
            </p>
          </div>
        </section>

        {/* Section: The first shift decides most of it */}
        <section id="induction" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            The first shift decides most of it
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              If a worker is going to leave, the decision is usually made on day one and acted on within a fortnight.
            </p>
            <p>
              The things that determine it are unglamorous: whether someone was expecting them at the gate, whether the induction happened at the time it was supposed to, whether they had the right PPE, whether anyone explained what the job actually involves, and whether they knew where to go for a break. None of that costs money. All of it is visible in the first-fortnight leaver figure a month later.
            </p>
            <p>
              This is also why a rushed induction during{" "}
              <Link
                href="/recruitment/high-volume/"
                className="text-teal-4 hover:underline font-semibold"
              >
                a large intake
              </Link>{" "}
              is a false economy. Processing forty people quickly and losing twelve of them within two weeks is more expensive than inducting them properly over three days, and the cost lands in a different budget so it rarely gets attributed to the decision that caused it.
            </p>
          </div>
        </section>

        {/* Section: Getting the same people back each week */}
        <section id="continuity" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Getting the same people back each week
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Continuity is the most valuable thing in temporary labour and the least deliberately managed. A worker who has done ten shifts on your line needs no induction, knows the product, works at pace and is far less likely to fail to arrive.
            </p>
            <p>
              Three things make continuity happen:
            </p>
            <ul className="space-y-3.5 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Book the same people rather than the same number.</strong> Request named workers who have performed well, and make that a standing expectation rather than an occasional favour.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Give as much notice as you can.</strong> A worker choosing between a confirmed shift and a probable one will take the confirmed one.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Be consistent about the pattern.</strong> The same days and the same start times matter more to most workers than a slightly higher rate on an unpredictable rota.
                </span>
              </li>
            </ul>
            <p>
              Where{" "}
              <Link
                href="/technology/worker-ratings"
                className="text-teal-4 hover:underline font-semibold"
              >
                worker ratings and site history
              </Link>{" "}
              are recorded against the worker, requesting the same people is a booking action rather than a negotiation — the record of who has worked well at your site exists at the point the shift is filled.
            </p>
            <p>
              And say it to them. A worker who is told they did well and that you want them back next week is a worker who will turn down a competing offer. This costs nothing and almost nobody does it.
            </p>
          </div>
        </section>

        {/* Section: What an agency can actually do */}
        <section id="agency" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            What an agency can actually do
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              An agency cannot fix a retention problem caused by your site, and any supplier claiming otherwise is selling something. What a supplier controls is narrower, and still worth having. Four things, and Accept does all four:
            </p>
            <ul className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Match on history rather than availability.</strong> Attendance, punctuality, previous performance at comparable sites and the practicality of the journey all predict whether somebody will still be there in a month — and all four sit on the worker&apos;s record at the moment a shift is being filled, rather than in somebody&apos;s memory.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Prepare people before they arrive.</strong> The first shift should not be the first time a worker hears what the job actually involves, and when it is, that is the single most common cause of a first-week departure.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Run onboarding and development as a continuing relationship, not a registration event.</strong> Coaching, feedback and recognition after the first week are what make somebody think of one agency as their agency — which is why they answer the phone when we call about next Tuesday. Learn more about{" "}
                  <Link
                    href="/technology/acceptmentor"
                    className="text-teal-4 hover:underline font-semibold"
                  >
                    onboarding and development
                  </Link>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Say so when the pattern points at your site.</strong> We would rather have an uncomfortable conversation than keep sending replacements into a problem replacements do not fix.
                </span>
              </li>
            </ul>
            <p>
              That last one is the test of a supplier worth keeping, and it is worth applying to us as much as to anybody else. An agency that always agrees the problem is worker quality will keep sending replacements indefinitely, and will be paid for every one of them.
            </p>
            <p>
              None of it substitutes for the things on your side of the line. A well-matched, well-prepared worker who arrives to find nobody expecting them will leave exactly as fast as a badly matched one.
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
            Talk to us about continuity on your shifts
          </h2>
          <p className="text-white/70 max-w-[540px] mx-auto mb-8 text-[15px] leading-relaxed">
            Discover how history-based matching, structured onboarding, and transparent leaver metrics protect output and reduce induction churn.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-5 px-6 py-3.5 text-sm font-semibold text-navy-1 shadow-lg shadow-teal-5/20 transition-all hover:bg-teal-4 hover:shadow-teal-5/30 hover:scale-[1.02]"
          >
            Talk to us about continuity on your shifts
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
