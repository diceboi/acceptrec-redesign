import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { UrgentSalesEnquiryForm } from "@/components/forms/UrgentSalesEnquiryForm";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconAlertTriangle,
  IconShieldCheck,
  IconUsers,
  IconBuildingWarehouse,
} from "@tabler/icons-react";

export const metadata = {
  title: "How to Change Recruitment Supplier Safely | Accept",
  description:
    "What to do when a staffing supplier is failing, what evidence to demand before moving, and how to change agency without losing the workers who are good.",
  alternates: {
    canonical:
      "https://www.acceptrec.co.uk/employers/changing-recruitment-supplier/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "article",
    title: "How to Change Recruitment Supplier Safely",
    description:
      "What to do when a staffing supplier is failing, and how to change agency without losing the workers who are good.",
    url: "https://www.acceptrec.co.uk/employers/changing-recruitment-supplier/",
    siteName: "Accept Recruitment",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Change Recruitment Supplier Safely",
    description:
      "What to do when a staffing supplier is failing, and how to change agency without losing the workers who are good.",
  },
};

export default function ChangingRecruitmentSupplierPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Our agency has missed 18 people for tomorrow's early shift. What should I do in the next two hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Get the confirmed number in writing from your supplier now — how many people, by name, due at what time. Decide the minimum crew that keeps the critical line running. Call a second supplier this evening rather than in the morning, because same-day lead time is measured in hours and the useful ones are tonight. Ask your own team about overtime before going to the market, since people already inducted and on site are faster and safer cover. And write down what was booked, what was promised and what arrived, while it is fresh.",
        },
      },
      {
        "@type": "Question",
        name: "We are told bookings are covered and then people do not arrive. How should I challenge the supplier?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Separate allocated from accepted. A shift assigned to a worker who has not agreed to it is not cover, and many suppliers count it as a fill. Ask how many of tomorrow's shifts have been accepted by a named worker, how many of those workers have worked your site before, and what the difference between booked and attended was on your site in each of the last four weeks. A supplier who cannot produce that last figure is not measuring the thing they are being paid for.",
        },
      },
      {
        "@type": "Question",
        name: "What evidence should I demand before moving our warehouse labour to a new agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Booked against attended by week for a comparable site, with the definition behind it. How they distinguish an allocated shift from an accepted one. Compliance evidence including the licence number and the name it is held in. Their induction throughput per day, which determines how fast they can actually take over. What you will be able to see yourself without asking. And a reference from a client who changed supplier to them, because the transition is what you are buying.",
        },
      },
      {
        "@type": "Question",
        name: "How do we replace a failing supplier without losing the workers who are good?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Identify the people you want to keep before anything is announced, and make registering them the incoming supplier's first action — fast, on site if possible, with continuity of pay rate and shift pattern. Workers are not transferred with a contract; they decide within a day or two whether to follow, and the reliable ones decide fastest because they have options. Telling them directly that you want them to stay is both effective and rare.",
        },
      },
      {
        "@type": "Question",
        name: "We use three agencies and still have gaps. Is our supplier model or our booking process the problem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check whether anyone owns the total. If each supplier fills its own allocation, nobody is accountable for the shortfall between them. If the same workers are registered with all three, you are competing with yourself for a pool you already had. And if each books separately, nobody can see why the same shift keeps failing. Before replacing a supplier, look at how requirements are communicated and how late changes are handled — one well-run supplier usually beats three with an unclear process.",
        },
      },
      {
        "@type": "Question",
        name: "What contingency plan should I have if my main staffing supplier cannot deliver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A second supplier who has already worked your site and been through your induction, rather than a name on a list. A written minimum crew per line, so the early-morning decision is a lookup rather than a judgement call. A standing overtime understanding with your own team, agreed in advance rather than during the crisis. A booking cutoff you both hold to, with an agreed point at which a shortfall is escalated rather than quietly absorbed. Booked against attended reported weekly as routine, because most supplier failures appear in that figure two or three weeks before they appear on the floor. And one named person on each side with authority to commit, and a mobile number rather than a shared inbox.",
        },
      },
      {
        "@type": "Question",
        name: "What should a recovery plan include when an agency cannot cover a critical production shift?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The minimum crew that keeps the critical line moving and what can be stood down. A named decision-maker on each side and a time by which the position is confirmed rather than discussed. A second supplier contacted in the evening for a morning shift. Transport and start times confirmed for anyone newly booked. And a written record of what was requested, promised and delivered, because that record is what the supplier conversation afterwards depends on.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Changing Recruitment Supplier",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.acceptrec.co.uk/employers/changing-recruitment-supplier/",
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
        name: "Changing Recruitment Supplier",
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
          <span className="text-white/80 font-medium">Changing Recruitment Supplier</span>
        </nav>

        {/* Section Pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-5/20 bg-teal-5/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
          WORKING WITH ACCEPT
        </div>

        {/* Page Title: Exactly One H1 */}
        <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-white leading-[1.08] mb-8">
          Changing Recruitment Supplier
        </h1>

        {/* Answer-First Paragraph & Signpost */}
        <section id="answer" className="mb-8 text-lg md:text-xl leading-relaxed text-white/90 font-normal">
          <p className="mb-4">
            Changing staffing supplier safely means keeping the workers while replacing the agency. The people on your lines are your operation&apos;s memory — they know the site, the product and the pace — and a switch that loses them costs far more than the supplier ever did. Handle the labour first, the contract second, and never start a transfer on a Monday of a peak week.
          </p>
          <p className="text-sm md:text-base text-teal-4/90 bg-teal-5/10 border border-teal-5/20 rounded-xl p-3.5 font-medium">
            If you are reading this because tomorrow morning is short, skip to the next section. The rest will keep.
          </p>
        </section>

        {/* Anchored Contents List */}
        <nav aria-label="Table of Contents" className="glass-card mb-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-teal-4 mb-4">
            In this guide
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-[15px] text-white/70">
            <li>
              <a href="#today" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">01</span>
                If you are short for tomorrow&apos;s shift
              </a>
            </li>
            <li>
              <a href="#challenge" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">02</span>
                How to challenge a supplier who says bookings are covered
              </a>
            </li>
            <li>
              <a href="#model" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">03</span>
                Is it the supplier, or the model?
              </a>
            </li>
            <li>
              <a href="#evidence" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">04</span>
                What evidence to demand before you move
              </a>
            </li>
            <li>
              <a href="#workers" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">05</span>
                Keeping the workers who are good
              </a>
            </li>
            <li>
              <a href="#handover" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">06</span>
                How a handover should run
              </a>
            </li>
            <li>
              <a href="#contingency" className="hover:text-teal-4 transition-colors flex items-center gap-2 group">
                <span className="text-xs font-mono text-white/30 group-hover:text-teal-4">07</span>
                What to have in place before the next time
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

        {/* Section: If you are short for tomorrow's shift */}
        <section id="today" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            If you are short for tomorrow&apos;s shift
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Six things, in this order. Changing supplier is next week&apos;s problem; tonight is about the shift.
            </p>
            <ol className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  1
                </span>
                <span>Get the real number from your current supplier, in writing, now. Not “we are working on it” — how many people are confirmed, by name, and what time they are due.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  2
                </span>
                <span>Decide what you can run with. Identify the minimum crew that keeps the critical line moving and what you are prepared to stand down, before someone has to decide it at 6am.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  3
                </span>
                <span>Call a second supplier tonight, not tomorrow morning. Lead time on a same-day booking is measured in hours and the useful hours are the evening ones.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  4
                </span>
                <span>Ask your own team before you ask the market. Overtime from people already inducted and on site is faster, safer and usually cheaper than an emergency agency booking.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  5
                </span>
                <span>Confirm transport and start times for anything you do book. A confirmed worker who cannot get there at 5am is not cover.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  6
                </span>
                <span>Write down what happened while it is fresh — what was booked, what was promised, what arrived. If this becomes a supplier conversation, contemporaneous notes are worth more than recollection.</span>
              </li>
            </ol>
            <p>
              If you want us in the mix for tomorrow, the sales enquiry form below reaches our team directly rather than a general inbox — including in the evening, when the branches are shut. Tell us the site, the shift and the number, and somebody will come back to you.
            </p>

            {/* Urgent Sales Enquiry Form */}
            <UrgentSalesEnquiryForm />
          </div>
        </section>

        {/* Section: How to challenge a supplier who says bookings are covered */}
        <section id="challenge" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            How to challenge a supplier who says bookings are covered
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              “Bookings are covered” and “people will arrive” are different statements, and the gap between them is where most supplier failure lives. A booking that has been allocated but never accepted by a worker is not cover, and a supplier who does not separate the two cannot tell you which you have.
            </p>
            <p>
              Ask three specific questions:
            </p>
            <ol className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  1
                </span>
                <span>How many of tomorrow&apos;s shifts have been accepted by a named worker, as opposed to allocated to one?</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  2
                </span>
                <span>How many of those workers have worked this site before?</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  3
                </span>
                <span>
                  What was the difference between{" "}
                  <Link
                    href="/workforce-intelligence/temporary-worker-attendance/"
                    className="text-teal-4 hover:underline font-medium"
                  >
                    booked and attended
                  </Link>{" "}
                  on this site, for each of the last four weeks?
                </span>
              </li>
            </ol>
            <p>
              The last question is the one that matters. A supplier who cannot produce{" "}
              <Link
                href="/workforce-intelligence/temporary-worker-attendance/"
                className="text-teal-4 hover:underline font-medium"
              >
                booked against attended
              </Link>{" "}
              by week, by site, is not measuring the thing they are being paid to deliver. That is not an aggressive question and it should not produce a defensive answer — it is the basic record of the service.
            </p>
            <p>
              If the answers are vague, ask for them in writing with a deadline. A supplier who will not put their own delivery figures in an email is telling you something useful.
            </p>
          </div>
        </section>

        {/* Section: Is it the supplier, or the model? */}
        <section id="model" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Is it the supplier, or the model?
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              If you are using three agencies and still have gaps, changing one of them may not help. Multi-agency supply is often introduced to create competition and ends up creating ambiguity instead.
            </p>
            <p>
              The diagnostic is whether anybody owns the total. Three things tend to be true when nobody does:
            </p>
            <ul className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>Each supplier fills its own allocation, so nobody is accountable for the shortfall between the three, and each can point at the others.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>The same workers are registered with all three, so you are competing with yourself for a pool you already had.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>Each supplier books separately, so nobody sees the whole picture and no one can tell you why Thursday nights keep failing.</span>
              </li>
            </ul>
            <p>
              Before replacing a supplier, check whether the booking process is the problem: how requirements are communicated, how late changes are handled, how far ahead bookings are confirmed. A single well-run supplier with a clear process usually outperforms three suppliers with an unclear one — but only if the process is fixed as part of the change.
            </p>
          </div>
        </section>

        {/* Section: What evidence to demand before you move */}
        <section id="evidence" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            What evidence to demand before you move
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Ask every candidate supplier for the same seven things, and compare the answers rather than the presentations.
            </p>
            <ol className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  1
                </span>
                <span>Booked against attended, by week, for a comparable site. Not a headline percentage — the actual weekly figures, and the definition behind them.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  2
                </span>
                <span>How they distinguish an allocated shift from an accepted one, and which of the two their fill rate counts.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  3
                </span>
                <span>
                  <Link
                    href="/compliance/"
                    className="text-teal-4 hover:underline font-medium"
                  >
                    Compliance evidence
                  </Link>
                  : licence number and the name it is held in, right-to-work process, insurance cover, and how qualification expiry is tracked.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  4
                </span>
                <span>What their induction throughput per day is, which is what actually determines how fast they can take over.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  5
                </span>
                <span>How many workers they have who have already worked sites like yours, and how they will approach yours specifically.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  6
                </span>
                <span>What you will be able to see yourself — bookings, live attendance, timesheets — and whether you need to ask them for it.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  7
                </span>
                <span>A reference from a client who changed supplier to them, not a client who has always used them. The transition is what you are buying.</span>
              </li>
            </ol>
            <p>
              Accept answers all seven, and it is fair to hold us to that. Booked against attended comes from the records that run the shifts rather than from a report assembled for the meeting. The difference between an allocated shift and an accepted one is built into how we book, so we can tell you which you have. Our licence number and the name it is held in are on the{" "}
              <Link
                href="/compliance/"
                className="text-teal-4 hover:underline font-medium"
              >
                compliance page
              </Link>
              . And clients see bookings, live attendance and timesheets themselves rather than asking us to send them.
            </p>
            <p>
              We work across the Midlands from branches in Leicester, Coventry and Tamworth, which matters more than it sounds when a supplier is being replaced. Taking a site over quickly depends on having people who already live near it and have already worked that shift pattern — not on how fast an agency can recruit strangers.
            </p>
          </div>
        </section>

        {/* Section: Keeping the workers who are good */}
        <section id="workers" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Keeping the workers who are good
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              This is the part that determines whether the change works, and it is usually the part nobody plans.
            </p>
            <p>
              The workers on your site are not the property of the outgoing agency. They are individuals who will decide, within a day or two of hearing about the change, whether to register with the incoming supplier, go to a different site, or stay with the agency they know. The good ones decide fastest, because they have options.
            </p>
            <p>
              So identify the people you want to keep before anything is announced, and make sure the incoming supplier&apos;s first action is to register them — quickly, on site if possible, with continuity of pay rate and shift pattern. Uncertainty about either is what sends a reliable worker elsewhere. Say plainly that you want them to stay; it is remarkable how rarely anyone does.
            </p>
            <p>
              Where an{" "}
              <Link
                href="/on-site-managed-services"
                className="text-teal-4 hover:underline font-medium"
              >
                onsite managed service
              </Link>{" "}
              is being replaced rather than a supply arrangement, TUPE may apply to the agency&apos;s own on-site staff — the coordinators and account team, not the temporary workers. Establish early whether it applies, because the consultation obligations and timescales sit on the critical path of the change rather than alongside it. This is a legal question rather than a commercial one, and it is worth taking your own advice on it at the start rather than relying on the view of either agency, incoming or outgoing.
            </p>
          </div>
        </section>

        {/* Section: How a handover should run */}
        <section id="handover" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            How a handover should run
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              How long a change takes is set by the same thing that governs any large intake: how many people the incoming supplier can get{" "}
              <Link
                href="/recruitment/high-volume/"
                className="text-teal-4 hover:underline font-medium"
              >
                registered, compliant and inducted
              </Link>{" "}
              per day, and how quickly your own site can receive them. Headcount matters less than either. A like-for-like takeover where most of the workers stay and register with the new supplier runs over a small number of weeks. One where the workers do not follow is a recruitment exercise, and it takes as long as recruitment takes.
            </p>
            <p>
              So ask a candidate supplier for their registration and induction throughput per day rather than for a date. A supplier who offers you a date without first asking about your induction capacity has not worked out what the constraint is.
            </p>
            <ol className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  1
                </span>
                <span>Pick the date deliberately. Never the Monday of a peak week, never the week of a go-live, and ideally a period where a bad day is survivable.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  2
                </span>
                <span>Run parallel for at least one full cycle. The incoming supplier covers part of the requirement while the outgoing one still covers the rest, so a failure is a gap rather than a stoppage.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  3
                </span>
                <span>Register the workers you want to keep before the switch date, not on it.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  4
                </span>
                <span>
                  Transfer the information, not just the people: shift patterns, site-specific requirements, qualification records, who works which line, and the arrangements that exist by custom rather than in writing (see{" "}
                  <Link
                    href="/recruitment/high-volume/#plan"
                    className="text-teal-4 hover:underline font-medium"
                  >
                    what a mobilisation plan contains
                  </Link>
                  ).
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  5
                </span>
                <span>Agree what “working” looks like in week one — the attendance figure you expect, reviewed daily, with a named person on each side.</span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  6
                </span>
                <span>Keep the outgoing supplier informed and paid. A supplier who learns they are being replaced from their own workers has no reason to help you through the last four weeks.</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Section: What to have in place before the next time */}
        <section id="contingency" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            What to have in place before the next time
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Everything above is what to do once it has already gone wrong. This is what makes the next time survivable, and none of it takes long to set up:
            </p>
            <ul className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">A second supplier who has actually worked your site.</strong> A contingency supplier who has never been through your induction is a phone number, not a plan.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">An agreed minimum crew per line, written down.</strong> It turns the six o&apos;clock decision into a lookup rather than a judgement call made by whoever is there.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">A standing overtime understanding with your own team, agreed in advance rather than negotiated during a crisis.</strong>
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">A booking cutoff you both hold to, and an agreed point at which a shortfall is escalated rather than quietly absorbed.</strong>
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">
                    <Link
                      href="/workforce-intelligence/temporary-worker-attendance/"
                      className="text-teal-4 hover:underline"
                    >
                      Booked against attended
                    </Link>
                    , reported weekly as routine.
                  </strong>{" "}
                  Most supplier failures are visible in that figure two or three weeks before they are visible on the floor.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">One named person on each side with authority to commit, and their mobile number.</strong> Not a shared inbox.
                </span>
              </li>
            </ul>
            <p>
              The last two are the ones that prevent rather than mitigate. A weekly figure nobody looks at is not a control, and an escalation route that runs through a generic mailbox at nine in the evening is not one either.
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
            Considering a Supplier Change?
          </h2>
          <p className="text-white/70 max-w-[540px] mx-auto mb-8 text-[15px] leading-relaxed">
            Speak with our directors about safe supplier transition, retaining your reliable line workers, and audited attendance figures.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-5 px-6 py-3.5 text-sm font-semibold text-navy-1 shadow-lg shadow-teal-5/20 transition-all hover:bg-teal-4 hover:shadow-teal-5/30 hover:scale-[1.02]"
          >
            Talk to us about a change of supplier
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
