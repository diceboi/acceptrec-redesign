import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { IconArrowRight } from "@tabler/icons-react";

export const metadata = {
  title: "Employer FAQs: Agency Labour Questions | Accept",
  description:
    "Straight answers for employers on agency pay rates, attendance, turnover cost, shift patterns and competing for temporary workers in a busy local market.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/employers/faq/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "article",
    title: "Employer FAQs: Agency Labour Questions",
    description:
      "Straight answers on agency pay rates, attendance, turnover cost and shift patterns.",
    url: "https://www.acceptrec.co.uk/employers/faq/",
    siteName: "Accept Recruitment",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Employer FAQs: Agency Labour Questions",
    description:
      "Straight answers on agency pay rates, attendance, turnover cost and shift patterns.",
  },
};

export default function EmployerFaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I compare our warehouse pay rates with nearby employers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with what is actually advertised rather than what is published in national surveys, because local warehouse pay moves faster than any survey cycle. Look at live job adverts within a realistic travelling distance of your site, and compare like for like — the same role, the same shift pattern, and basic rate against basic rate, since shift premiums and attendance bonuses distort the comparison badly. Then ask your agency what rate is actually filling shifts nearby, which is a more useful number than the advertised one: adverts show what employers hope to pay, fill data shows what workers accept.",
        },
      },
      {
        "@type": "Question",
        name: "Why do temporary warehouse workers leave?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Five reasons account for most of it, and pay is rarely the first to break. Unpredictable hours, because a worker who cannot tell whether they have three shifts or five next week will take a job that lets them plan. A poor first day — nobody expecting them, no induction, standing around. The journey, particularly early starts and late finishes where transport does not work. How they are treated once on site. And a better offer nearby, which becomes decisive only when one of the other four is already true. Most departures are decided in the first fortnight.",
        },
      },
      {
        "@type": "Question",
        name: "How much does temporary worker turnover cost a warehouse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "More than the recruitment fee, and the largest components sit outside the agency invoice. Each replacement carries compliance checking, induction time, a first-week productivity gap, and supervisory attention that was not planned for. On top of that sits the cost of the shifts that ran short while the replacement was found, which is usually covered by permanent-staff overtime in a different budget line. To size it for your own operation, take your monthly leavers, multiply by your induction hours plus the first-week output gap, and add the overtime that covered the shortfall. Keep what you have measured separate from what you have estimated, and exclude anything already covered by the agency charge, or you will count it twice. The number is normally larger than expected.",
        },
      },
      {
        "@type": "Question",
        name: "How do I compete for temporary workers when nearby warehouses are also hiring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Compete on the things that cost less than pay. Predictable hours and a consistent shift pattern are worth more to most temporary workers than a small rate difference, because they make the rest of life plannable. Being asked back by name matters more than people expect. A first day where someone is expecting you and the induction happens on time is genuinely rare, and workers talk to each other about which sites are like that. If you do move on rate, move it for returning workers rather than across the board — it is cheaper and it rewards the behaviour you want.",
        },
      },
      {
        "@type": "Question",
        name: "How do I work out whether increasing pay would improve retention enough to justify the cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Establish first whether pay is actually the binding constraint, because frequently it is not. If your leavers are concentrated in the first fortnight, the problem is induction and first-day experience and a rate rise will not touch it. If people leave at three months for a site paying slightly more, pay may be the lever. Then compare like for like: the annual cost of the increase across all hours, against your current turnover cost plus the overtime covering gaps. A rise that reduces turnover by a third often pays for itself; one applied to a site with an induction problem usually buys nothing but a higher cost base.",
        },
      },
      {
        "@type": "Question",
        name: "Why do agency workers accept shifts and then fail to attend?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Three common causes. The acceptance was not a real acceptance — the shift was allocated rather than agreed, and the worker never confirmed it. Nothing happened between booking and start, so a shift booked on Thursday for the following Wednesday has had five days to be forgotten or superseded. Or the journey does not work at that time of day, which looks like unreliability and is actually transport. The useful diagnostic is whether failures cluster on particular shift patterns or start times; if they do, the cause is structural rather than individual.",
        },
      },
      {
        "@type": "Question",
        name: "How do travel distance and transport options affect worker attendance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Substantially, and it is the most under-measured factor in temporary labour. What matters is not distance but whether the journey works at the specific time the shift starts and ends. A site twenty minutes away is unreachable for a 6am start if the first bus arrives at 6:15, and a 10pm finish is a different proposition from a 6pm one on the same route. Before concluding that a shift pattern has an attendance problem, check what the journey to it actually looks like — it is frequently the whole explanation.",
        },
      },
      {
        "@type": "Question",
        name: "Do pre-shift reminders help improve temporary worker attendance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They help, and the mechanism is worth understanding: a reminder does not persuade someone to attend, it surfaces the people who were never going to. A worker who responds to a reminder by saying they cannot make it has given you a shift's notice instead of a no-show, which is the difference between a gap you can cover and a gap you discover. Timing matters more than wording — the evening before is more useful than the morning of, because it leaves time to act on the answer.",
        },
      },
      {
        "@type": "Question",
        name: "How can I identify which shifts have the biggest attendance problems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Split the figure rather than averaging it. Look at booked against attended by shift pattern, by day of week and by start time, for each site separately. An overall attendance percentage hides exactly the information you need, because a site running at 95% overall can be running at 99% on days and 80% on nights, and those need entirely different responses. If you can only get an aggregate figure from your supplier, that is itself worth knowing.",
        },
      },
      {
        "@type": "Question",
        name: "How do shift patterns affect the retention of agency workers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "More than pay does, in most industrial operations. Consistency is the main factor: workers who know which days they are working can arrange childcare, second jobs and transport, and they stay. Rotating patterns and week-to-week variation produce the highest turnover even at competitive rates. Start and finish times interact with transport, which quietly filters who can sustain the pattern at all. And where a pattern is genuinely unpopular — permanent nights, split shifts, weekend-only — the answer is usually a small, targeted premium for that pattern rather than a rate rise across the whole site.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Employer FAQs: Agency Labour, Pay, Attendance and Turnover",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.acceptrec.co.uk/employers/faq/",
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
        name: "Employer FAQs",
      },
    ],
  };

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
          <Link href="/employers" className="hover:text-teal-4 transition-colors">
            Employers
          </Link>
          <span className="text-white/30">›</span>
          <span className="text-white/80 font-medium">Employer FAQs</span>
        </nav>

        {/* Section Pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-5/20 bg-teal-5/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
          WORKING WITH ACCEPT
        </div>

        {/* Page Title: Exactly One H1 */}
        <h1 className="text-4xl md:text-5xl lg:text-[48px] font-semibold tracking-tight text-white leading-[1.12] mb-8">
          Employer FAQs: Agency Labour, Pay, Attendance and Turnover
        </h1>

        {/* Answer-First Section */}
        <section id="answer" className="mb-12 text-lg md:text-xl leading-relaxed text-white/90 font-normal space-y-4">
          <p>
            These are the questions employers actually ask us about temporary labour, answered as directly as we can manage. They come from running industrial, warehouse, logistics and driving staffing day to day, rather than from a survey — so where the honest answer is “it depends”, we have said what it depends on instead of leaving it there.
          </p>
          <p className="text-base text-white/70 leading-relaxed">
            Several of these deserve properly published research rather than a paragraph, and that research is being worked on. Until it exists with a stated method and a date behind it, a considered answer is better than a confident number nobody can check.
          </p>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-8">
            Questions employers ask
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

        {/* More Information Section (Houses All 5 Outbound Links) */}
        <section id="more" className="mb-16 scroll-mt-24 border-t border-white/10 pt-10 text-white/80 leading-relaxed text-[16px] space-y-6">
          <p>
            If your question is not here, ask it. A specific question about your site, your shift patterns and your start times gets a more useful answer than any general one on this page — and where the honest answer is that we do not know, or that it depends on something only you can tell us, we will say so rather than guess.
          </p>
          <p>
            If you are at the due-diligence stage rather than the researching stage, the{" "}
            <Link
              href="/compliance/"
              className="text-teal-4 hover:underline font-semibold"
            >
              compliance evidence
            </Link>{" "}
            is set out separately and does not require a conversation first.
          </p>
          <p>
            Four of the answers above have a page behind them with a good deal more in it:{" "}
            <Link
              href="/workforce-intelligence/temporary-worker-attendance/"
              className="text-teal-4 hover:underline font-semibold"
            >
              attendance and no-shows
            </Link>
            ,{" "}
            <Link
              href="/workforce-intelligence/temporary-worker-retention/"
              className="text-teal-4 hover:underline font-semibold"
            >
              why temporary workers leave
            </Link>
            ,{" "}
            <Link
              href="/workforce-intelligence/reducing-agency-labour-costs/"
              className="text-teal-4 hover:underline font-semibold"
            >
              what agency labour actually costs
            </Link>
            , and{" "}
            <Link
              href="/workforce-intelligence/workforce-analytics/"
              className="text-teal-4 hover:underline font-semibold"
            >
              what you should be able to see for yourself
            </Link>{" "}
            without asking an agency for it. Worth reading before a tender rather than during one.
          </p>
        </section>

        {/* Call to Action Banner */}
        <div className="glass-card rounded-2xl border border-teal-5/30 bg-gradient-to-br from-teal-5/10 to-transparent p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Ask us something that is not here
          </h2>
          <p className="text-white/70 max-w-[540px] mx-auto mb-8 text-[15px] leading-relaxed">
            Have a specific operational question about shift fill, compliance, or local labour availability? Talk directly to our team.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-5 px-6 py-3.5 text-sm font-semibold text-navy-1 shadow-lg shadow-teal-5/20 transition-all hover:bg-teal-4 hover:shadow-teal-5/30 hover:scale-[1.02]"
          >
            Ask us something that is not here
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
