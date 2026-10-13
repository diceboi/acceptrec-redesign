import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  IconArrowRight,
  IconCheck,
  IconCalculator,
  IconClock,
  IconChartBar,
  IconCoins,
  IconFileText,
  IconShieldCheck,
  IconLayersLinked,
  IconUsers,
} from "@tabler/icons-react";

export const metadata = {
  title: "Reducing Agency Labour Costs | What's In the Rate | Accept",
  description:
    "What sits inside a temporary worker hourly charge, the costs that never reach your invoice, and how to reduce agency spend without losing reliable people.",
  alternates: {
    canonical:
      "https://www.acceptrec.co.uk/workforce-intelligence/reducing-agency-labour-costs/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "article",
    title: "Reducing Agency Labour Costs",
    description:
      "What sits inside the hourly charge, the costs that never reach your invoice, and how to reduce agency spend.",
    url: "https://www.acceptrec.co.uk/workforce-intelligence/reducing-agency-labour-costs/",
    siteName: "Accept Recruitment",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reducing Agency Labour Costs",
    description:
      "What sits inside the hourly charge, the costs that never reach your invoice, and how to reduce agency spend.",
  },
};

export default function ReducingAgencyLabourCostsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is included in a temporary recruitment agency's hourly charge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The worker's pay rate, employer's National Insurance, workplace pension contributions, holiday pay accrual, the Apprenticeship Levy where it applies, and the agency's margin. The first five are statutory and identical for every supplier. The margin is the only part an agency controls, which means a quote is really a price for the service wrapped around costs everybody pays the same.",
        },
      },
      {
        "@type": "Question",
        name: "Why do recruitment agencies quote different rates for the same role?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually one of four reasons: they are assuming a different pay rate to the worker, they have included different things, they treat overtime and premium hours differently, or they have assumed a different engagement type. Margin difference is often the smallest of the four. Fix the pay rate and the inclusions list yourself and most of the apparent gap disappears.",
        },
      },
      {
        "@type": "Question",
        name: "How do I compare agency quotes on a like for like basis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "State the pay rate yourself rather than letting each supplier assume one, ask for the charge rate broken into pay, each statutory on-cost and margin, fix the engagement type across all quotes, and give every supplier the same list of what you expect included. Then apply their overtime and premium rates to your real shift profile rather than to basic hours.",
        },
      },
      {
        "@type": "Question",
        name: "Can a cheaper agency rate lead to higher overall staffing costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Frequently. A rate advantage is small and visible; the costs it transfers to you are larger and hidden. Unfilled shifts become permanent-staff overtime, poor retention becomes repeated recruitment and induction, and unsuitable workers become supervisory time. None of those appear on the agency invoice. Multiply the rate advantage by your annual hours and compare it against your overtime bill before deciding which supplier is cheaper.",
        },
      },
      {
        "@type": "Question",
        name: "How should I measure the total cost of agency labour, including training and turnover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Measure cost per hour actually worked rather than per hour booked, then add the costs sitting outside the invoice: overtime covering gaps, the recruitment and induction cost of replacing leavers, and supervisory time spent managing attendance rather than the operation. Tracking those alongside the rate is what turns a procurement decision into an operational one.",
        },
      },
      {
        "@type": "Question",
        name: "How can I avoid paying for more agency workers than I need?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stop overbooking against the risk of no-shows and improve the prediction instead. Overbooking is paying for the problem twice: once for the buffer and once for the underlying unreliability. Book to actual requirement, monitor acceptance and attendance against the booking as the week runs, and address the specific cause of the shortfall rather than padding the number.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Reducing Agency Labour Costs",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.acceptrec.co.uk/workforce-intelligence/reducing-agency-labour-costs/",
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
        name: "Reducing Agency Labour Costs",
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
          <span className="text-white/80 font-medium">Labour Costs</span>
        </nav>

        {/* Section Pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-5/20 bg-teal-5/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
          MANAGE YOUR WORKFORCE
        </div>

        {/* Page Title: Exactly One H1 */}
        <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-white leading-[1.08] mb-8">
          Reducing Agency Labour Costs
        </h1>

        {/* Answer-First Paragraph */}
        <section id="answer" className="mb-8 text-lg md:text-xl leading-relaxed text-white/90 font-normal">
          <p>
            Most of what agency labour costs you is not in the hourly rate. Shifts that go unfilled and get covered by permanent-staff overtime, workers who leave inside a month and have to be recruited and inducted all over again, supervisors spending their day chasing attendance instead of running the operation — none of it appears on an agency invoice, and added together it is usually larger than the margin everybody argues about. Reducing it means being able to see it, which is what Accept&apos;s Workforce Intelligence is for: the systems behind our service record what was requested, what was accepted, who attended and who left, so the costs that normally stay invisible become numbers you can act on. The rate still matters, and this page sets out exactly what is in it — but it is the smaller half of the problem.
          </p>
        </section>

        {/* Calculator CTA - Between Answer and Table of Contents */}
        <section id="calc-cta" className="mb-12">
          <div className="glass-card rounded-2xl border border-teal-5/25 bg-teal-5/5 p-6 md:p-7 text-center">
            <Link
              href="/workforce-cost-calculator"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-teal-5/40 px-6 py-3.5 text-sm font-semibold text-teal-4 hover:text-white transition-all shadow-md group"
            >
              <IconCalculator className="h-4 w-4 text-teal-4 group-hover:scale-110 transition-transform" />
              Work it out with your own figures
              <IconArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-3 text-xs md:text-sm text-white/60">
              Our workforce cost calculator, using your hours, your margin and your attrition rate.
            </p>
          </div>
        </section>

        {/* Anchored Contents List */}
        <nav aria-label="Table of Contents" className="glass-card mb-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-teal-4 mb-4">
            In this guide
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-[15px] text-white/70">
            <li>
              <a href="#real-cost" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">01</span>
                Where agency labour cost actually sits
              </a>
            </li>
            <li>
              <a href="#data" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">02</span>
                Why most of this is invisible without the data
              </a>
            </li>
            <li>
              <a href="#reduce" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">03</span>
                How to reduce the cost without losing reliable people
              </a>
            </li>
            <li>
              <a href="#roi" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">04</span>
                How to tell whether it is actually paying for itself
              </a>
            </li>
            <li>
              <a href="#admin" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">05</span>
                Reducing the administration
              </a>
            </li>
            <li>
              <a href="#breakdown" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">06</span>
                What sits inside the hourly charge
              </a>
            </li>
            <li>
              <a href="#why-differ" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">07</span>
                Why two agencies quote differently for the same role
              </a>
            </li>
            <li>
              <a href="#compare" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">08</span>
                How to compare quotes like for like
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

        {/* Section: Where agency labour cost actually sits */}
        <section id="real-cost" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Where agency labour cost actually sits
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              The hourly rate is the visible part of agency labour cost and frequently not the largest part. A cheaper supplier that delivers less reliably transfers cost onto your operation, where it turns up under three other headings and is rarely added back to the comparison.
            </p>

            <div className="space-y-8 mt-6">
              <div className="glass-card rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Overtime covering the gaps
                </h3>
                <p className="text-white/80 leading-relaxed text-[15px]">
                  Every shift that runs short is covered by somebody, usually your permanent team, usually at a premium. A rate that is twenty pence cheaper and produces two unfilled shifts a week is not cheaper. The overtime does not appear on the agency invoice, which is precisely why it gets missed.
                </p>
              </div>

              <div className="glass-card rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Turnover and repeat inductions
                </h3>
                <p className="text-white/80 leading-relaxed text-[15px]">
                  Every replacement worker carries recruitment, compliance, induction and a first-week productivity cost, and none of it shows on the rate. A supplier with worse retention costs more per hour worked even when it charges less per hour booked.
                </p>
              </div>

              <div className="glass-card rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Supervisory time
                </h3>
                <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
                  <p>
                    The least measured of the three. If supervisors are spending their time chasing attendance, re-planning lines and managing unsuitable workers, that is real cost being absorbed by people who were hired to do something else.
                  </p>
                  <p>
                    The practical test is simple: take the cheaper supplier&apos;s rate advantage, multiply it by your annual hours, and set it against your overtime bill and your turnover rate. The answer is often uncomfortable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Why most of this is invisible without the data */}
        <section id="data" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Why most of this is invisible without the data
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Every cost in the section above is real and almost none of it reaches an invoice. That is the actual reason agency spend is difficult to control: the expensive parts are not the parts anybody measures, so the conversation defaults to the one number everybody can see, which is the rate.
            </p>
            <p>
              Accept&apos;s answer to that is{" "}
              <Link
                href="/workforce-intelligence/"
                className="text-teal-4 hover:underline font-medium"
              >
                Workforce Intelligence
              </Link>{" "}
              — the systems behind our service, which record what was requested, what was accepted, who attended and who left, as the work happens rather than in a report afterwards. It turns the three costs above from impressions into arithmetic:
            </p>
            <ul className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Unfilled shifts</strong> become a figure you can set against your overtime bill, rather than a sense that you are short a lot.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Early leavers</strong> become a four-week attrition rate you can track, rather than a feeling that people do not stick.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Supervisory load</strong> becomes visible in how many attendance exceptions somebody had to chase last week.
                </span>
              </li>
            </ul>
            <p>
              None of that reduces a cost by itself, and we would not claim otherwise. What it does is tell you which cost is worth attacking, which is the part most operations are guessing at. Taking twenty pence off a rate is easy to do and easy to measure. Working out that your night shift loses people in their second week because induction only runs on days is harder, worth considerably more, and impossible without the records of{" "}
              <Link
                href="/workforce-intelligence/temporary-worker-attendance/"
                className="text-teal-4 hover:underline font-medium"
              >
                attendance
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Section: How to reduce the cost without losing reliable people */}
        <section id="reduce" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            How to reduce the cost without losing reliable people
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <ol className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  1
                </span>
                <span>
                  Reduce the number of workers you need rather than the rate you pay.{" "}
                  <Link
                    href="/workforce-intelligence/temporary-worker-attendance/"
                    className="text-teal-4 hover:underline font-medium"
                  >
                    Better attendance
                  </Link>{" "}
                  means fewer bookings to cover the same output, and that saving is larger than any margin negotiation.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  2
                </span>
                <span>
                  Keep the{" "}
                  <Link
                    href="/workforce-intelligence/temporary-worker-retention/"
                    className="text-teal-4 hover:underline font-medium"
                  >
                    workers who already know your site
                  </Link>
                  . A returning worker needs no induction, is productive immediately and is far less likely to leave — all of which is cheaper than a lower rate on a new person.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  3
                </span>
                <span>
                  Book to what you actually need. Overbooking against the risk of no-shows is paying for the problem twice; the answer is better prediction, not a bigger buffer.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  4
                </span>
                <span>
                  Look at shift patterns and start times before pay. Transport access frequently unlocks availability that money does not, and it costs nothing.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  5
                </span>
                <span>
                  Measure cost per hour worked rather than per hour booked. They are different numbers and only one of them reflects what you actually got.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  6
                </span>
                <span>
                  Challenge the margin openly rather than shopping the rate. A supplier who itemises can have a real conversation about margin; a supplier who quotes one number can only move it by taking something out.
                </span>
              </li>
            </ol>
            <p>
              There is one decision this list does not settle, and it comes up every peak: whether to raise the pay rate to stabilise staffing. The cost of a rise is easy to work out and easy to underestimate, because it applies to every hour worked by everybody — including the people who were turning up reliably at the old rate. Set that total against what the instability is actually costing you in premium overtime hours, in replacement recruitment and induction, and in output you did not get.
            </p>
            <p>
              Do that arithmetic before raising the rate rather than after, and test the specific cause first. If people are leaving because the shift starts before the first bus, a pay rise is an expensive way to not fix it. Where pay genuinely is the cause, the sum usually favours the rise — but it should be a calculation you can show, because it is very hard to reverse.
            </p>
          </div>
        </section>

        {/* Section: How to tell whether it is actually paying for itself */}
        <section id="roi" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            How to tell whether it is actually paying for itself
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Any supplier can tell you their service saves money. The measurement is straightforward if you set it up before you start, and close to impossible afterwards, so it is worth doing in the first week.
            </p>
            <p>
              Take a baseline across four things before anything changes:
            </p>
            <ol className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  1
                </span>
                <span>Cost per hour actually worked, rather than per hour booked.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  2
                </span>
                <span>Premium overtime hours covering gaps.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  3
                </span>
                <span>Replacement workers recruited and inducted.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  4
                </span>
                <span>Supervisory hours spent on attendance and re-planning rather than on the operation.</span>
              </li>
            </ol>
            <p>
              Write down the definition of each one, including what is counted and over what period. Then measure the same four the same way, over a comparable period, allowing for seasonality — comparing a January against a November tells you about Christmas, not about your supplier.
            </p>
            <p>
              Accept does not publish a headline return-on-investment figure, and you should treat any agency that does with caution. A number like that depends entirely on assumptions about the client&apos;s overtime rate, turnover cost and administrative load, and none of those transfer from one operation to another. What we publish instead is the calculation itself: our{" "}
              <Link
                href="/workforce-cost-calculator"
                className="text-teal-4 hover:underline font-medium"
              >
                workforce cost calculator
              </Link>{" "}
              asks for your annual hours, your margin, your administrative position and your four-week attrition rate, and works out the value against the margin you actually pay. If the answer is unconvincing on your numbers, that is a more useful thing to find out than a figure from somebody else&apos;s.
            </p>
            <p>
              Beyond that, we will agree the four measures above with you at the start of an engagement and report against them, which is a claim you can check rather than one you have to take on trust.
            </p>
          </div>
        </section>

        {/* Section: Reducing the administration */}
        <section id="admin" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Reducing the administration
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Agency administration is mostly reconciliation: working out whether the people booked are the people who worked, and whether the invoice reflects either. It is unglamorous, it consumes management time, and almost all of it exists because the booking, the attendance record and the invoice come from different places.
            </p>
            <p>
              Where booking, clock-in and timesheet data sit in one system, that reconciliation largely stops being necessary. Accept clients see booked shifts, live attendance and timesheets through the{" "}
              <Link
                href="/technology/client-portal"
                className="text-teal-4 hover:underline font-medium"
              >
                Client Portal
              </Link>
              , which means the question “does this invoice match what happened” is answered as the week runs rather than after it.
            </p>
            <p>
              The practical value is in finance seeing labour cost accumulate during the week rather than discovering it on the invoice. A discrepancy found on Wednesday is a conversation; the same discrepancy found three weeks later is a credit note and an argument.
            </p>
          </div>
        </section>

        {/* Section: What sits inside the hourly charge */}
        <section id="breakdown" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            What sits inside the hourly charge
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Six things make up a temporary worker charge rate. Only one of them is the agency&apos;s.
            </p>
            <ul className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Pay rate</strong> — what the worker actually receives per hour before deductions.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Employer&apos;s National Insurance</strong> — paid by the employer on earnings above the secondary threshold, at the prevailing rate.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Workplace pension</strong> — employer contributions for auto-enrolled workers, calculated on qualifying earnings.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Holiday pay accrual</strong> — statutory paid leave, accrued as the worker works and paid when taken.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Apprenticeship Levy</strong> — where the employing business&apos;s pay bill exceeds the threshold.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Agency margin</strong> — recruitment, compliance, payroll, account management and the agency&apos;s profit.
                </span>
              </li>
            </ul>
            <p>
              The first five are statutory. An agency cannot reduce them, and any supplier whose charge rate implies they have is either absorbing the cost from margin — which is unsustainable and usually precedes a service problem — or has made an assumption about the engagement type that you want to know about before it becomes your problem.
            </p>
            <p>
              That leaves margin as the only variable an agency genuinely controls. This is worth stating plainly because the sector generally does not: a quote is not a price for labour, it is a price for the service wrapped around statutory costs and statutory on-costs that every supplier pays identically.
            </p>
          </div>
        </section>

        {/* Section: Why two agencies quote differently for the same role */}
        <section id="why-differ" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Why two agencies quote differently for the same role
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Four things explain almost every gap between two quotes, and only one of them is margin.
            </p>
            <ul className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-5/10 text-teal-4 text-xs font-mono font-bold">
                  01
                </span>
                <span>
                  <strong className="text-white font-semibold">The assumed pay rate.</strong> A supplier quoting a lower charge rate may simply be assuming a lower rate to the worker, which shows up later as difficulty filling the shift or as people who leave when a nearby site pays more. Ask what pay rate each quote assumes before comparing the charge rates at all.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-5/10 text-teal-4 text-xs font-mono font-bold">
                  02
                </span>
                <span>
                  <strong className="text-white font-semibold">What is included.</strong> Induction time, PPE, transport arrangements, on-site supervision, out-of-hours cover and replacement of a worker who does not arrive may be inside one quote and charged separately in another. The cheaper rate is frequently the one with less in it.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-5/10 text-teal-4 text-xs font-mono font-bold">
                  03
                </span>
                <span>
                  <strong className="text-white font-semibold">The treatment of premium hours.</strong> A rate that looks lower at basic can be higher in practice at a site with significant overtime, weekend or bank holiday working.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-5/10 text-teal-4 text-xs font-mono font-bold">
                  04
                </span>
                <span>
                  <strong className="text-white font-semibold">Engagement type</strong>, which changes the statutory picture underneath. If two quotes differ materially and nothing else explains it, this is usually why.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section: How to compare quotes like for like */}
        <section id="compare" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            How to compare quotes like for like
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Six things to fix before you compare, so that you are comparing the same thing.
            </p>
            <ol className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  1
                </span>
                <span>State the pay rate yourself rather than letting each supplier assume one. This single step removes most of the apparent difference between quotes.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  2
                </span>
                <span>Ask for the charge rate broken into pay, each statutory on-cost, and margin. A supplier who will not itemise is asking you to trust a number rather than understand it.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  3
                </span>
                <span>Fix the engagement type across all quotes, because it changes the statutory costs underneath.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  4
                </span>
                <span>List what you expect included — induction, PPE, supervision, replacement cover, out-of-hours contact — and require each supplier to confirm against the same list.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  5
                </span>
                <span>Ask for overtime, weekend and bank holiday rates, and apply them to your actual shift profile rather than to basic hours.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  6
                </span>
                <span>Ask what happens when a worker does not arrive: whether replacement is charged again, and whether the original booking is credited.</span>
              </li>
            </ol>
            <p className="pt-2 text-sm text-white/60">
              For an interactive tool to model statutory components, explore our{" "}
              <Link
                href="/technology/rate-calculator"
                className="text-teal-4 hover:underline font-medium"
              >
                rate calculator
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
            Need Transparent Agency Rates?
          </h2>
          <p className="text-white/70 max-w-[540px] mx-auto mb-8 text-[15px] leading-relaxed">
            Get an open, itemised rate breakdown showing statutory on-costs and transparent margins for your specific roles and shift profiles.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-5 px-6 py-3.5 text-sm font-semibold text-navy-1 shadow-lg shadow-teal-5/20 transition-all hover:bg-teal-4 hover:shadow-teal-5/30 hover:scale-[1.02]"
          >
            Ask us for an itemised rate breakdown
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
