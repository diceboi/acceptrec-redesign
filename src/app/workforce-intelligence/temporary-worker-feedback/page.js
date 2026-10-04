import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  IconArrowRight,
  IconCheck,
  IconStarFilled,
  IconAlertCircle,
  IconMessageCircle,
  IconUserCheck,
  IconX,
  IconClock,
  IconHelpCircle,
} from "@tabler/icons-react";

export const metadata = {
  title: "Temporary Worker Feedback and Ratings | Accept",
  description:
    "How to give an agency useful feedback about temporary workers, what workers tell you through behaviour, and how to tell a recruitment problem from a site problem.",
  alternates: {
    canonical:
      "https://www.acceptrec.co.uk/workforce-intelligence/temporary-worker-feedback/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "article",
    title: "Worker Feedback: What Your Site Is Telling You",
    description:
      "How to give an agency useful feedback, and how to tell a recruitment problem from a site problem.",
    url: "https://www.acceptrec.co.uk/workforce-intelligence/temporary-worker-feedback/",
    siteName: "Accept Recruitment",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Worker Feedback: What Your Site Is Telling You",
    description:
      "How to give an agency useful feedback, and how to tell a recruitment problem from a site problem.",
  },
};

export default function WorkerFeedbackPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How should I give an agency feedback about worker performance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Through structured ratings rather than conversations, and promptly. Authorised users at your site can rate a worker across punctuality, work quality, attitude and communication with an optional comment. Rate the shift rather than the person in general, rate the good workers as well as the poor ones, and keep comments for when something specific happened. Feedback given verbally to whoever is nearest rarely reaches the person who books next week's shifts.",
        },
      },
      {
        "@type": "Question",
        name: "How do we stop the same unsuitable temporary workers being sent back?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Make sure the feedback is recorded against the worker rather than mentioned to a coordinator. Where ratings are held against the individual, their history at your site is visible at the point of booking. Where the concern was raised in conversation, it depends entirely on one person remembering, and that person will eventually be on holiday. If someone genuinely should not return, record it explicitly rather than implying it.",
        },
      },
      {
        "@type": "Question",
        name: "How can supervisors give useful feedback without creating more admin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Keep it to four taps and an optional comment, at the end of the shift. Feedback that costs a supervisor ten minutes will not happen during a busy shift, and expecting it to is how feedback systems quietly die. Rating four named dimensions is quicker than writing a sentence and produces something that can actually be compared between shifts and between sites.",
        },
      },
      {
        "@type": "Question",
        name: "How can I collect feedback from temporary workers about their experience on site?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Two ways, and the first is free. Ask them yourself: early and in person rather than at the end of an assignment, about specifics rather than satisfaction, and through somebody who is not their supervisor — a worker asked by the person who allocates their shifts will say it is fine. Ask leavers too, and quickly, because somebody who left last week has nothing to gain by being tactful. The second way is behaviour, which is the more reliable of the two: whether workers accept the next shift, attend it, return the following week and how long they stay are decisions about your site rather than opinions about it, and much harder to give a polite answer to than a questionnaire. Accept does not run a post-shift survey of workers; where they raise something directly it reaches us through the branch teams and the development side of the service, which is human-led rather than automated.",
        },
      },
      {
        "@type": "Question",
        name: "How can I distinguish a recruitment problem from a workplace retention problem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Four checks. Do the same workers perform well at other sites? Does the problem concentrate on one shift, line or supervisor while the rest holds? When do people leave — first fortnight points at induction and first-day experience, three months points at the work, pay or a better offer nearby? And is there any reason for a good worker to stay, in terms of consistent shifts and being asked back? If the answers point at the site, more supply will not fix it.",
        },
      },
      {
        "@type": "Question",
        name: "How can I identify sites or supervisors with unusually high worker turnover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Compare like with like — the same shift pattern across sites, or the same site over time — and account for the structural differences first, such as start times, transport access and the proportion of night work. Where a difference remains after that, look at first-fortnight leavers specifically, because that figure isolates induction and first-day experience from everything else that happens later.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Temporary Worker Feedback: What Your Site Is Actually Telling You",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.acceptrec.co.uk/workforce-intelligence/temporary-worker-feedback/",
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
        name: "Worker Feedback",
      },
    ],
  };

  const tocItems = [
    { id: "two-ways", label: "Feedback runs in two directions" },
    { id: "giving", label: "Giving useful feedback about workers" },
    { id: "no-repeat", label: "Stopping the same unsuitable workers coming back" },
    { id: "behaviour", label: "What workers tell you without being asked" },
    { id: "asking", label: "Asking your workers yourself" },
    { id: "patterns", label: "Aggregated patterns, and what gets withheld" },
    { id: "diagnose", label: "Recruitment problem, or workplace problem?" },
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
          <span className="text-white/80 font-medium">Worker Feedback</span>
        </nav>

        {/* Section Pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-5/20 bg-teal-5/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
          UNDERSTAND YOUR WORKFORCE
        </div>

        {/* Page Title: Exactly One H1 */}
        <h1 className="text-4xl md:text-5xl lg:text-[48px] font-semibold tracking-tight text-white leading-[1.12] mb-8">
          Temporary Worker Feedback: What Your Site Is Actually Telling You
        </h1>

        {/* Answer-First Paragraphs */}
        <section id="answer" className="mb-10 text-lg md:text-xl leading-relaxed text-white/90 font-normal space-y-4">
          <p>
            Useful feedback about temporary workers runs in two directions, and most operations only use one of them. What your supervisors make of the people on site is what lets an agency send better ones next time, and it works best rated against specific things — punctuality, work quality, attitude, communication — rather than as a general impression. What the workers make of your site reaches you mainly through behaviour rather than words: whether they accept the next shift, whether they turn up, whether they come back next week, and how long they stay. The first changes who arrives. The second tells you whether the people were ever the problem.
          </p>
          <p className="text-base text-white/70 leading-relaxed">
            Feedback is one part of{" "}
            <Link
              href="/workforce-intelligence/"
              className="text-teal-4 hover:underline font-semibold"
            >
              Workforce Intelligence
            </Link>{" "}
            — WI², the set of systems behind Accept&apos;s service. The ratings your supervisors give, the attendance and retention records behind them, and the conversations workers have with our onboarding and coaching side all sit under it. What makes feedback worth collecting is not the collecting. It is that it lands in the same place as the booking, so it can change who gets sent next week.
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

        {/* Section: Feedback runs in two directions */}
        <section id="two-ways" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Feedback runs in two directions
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              One direction is yours: what your supervisors think of the workers on site, which the agency needs in order to send better people next time. The other is theirs: what workers make of your site, which determines whether the good ones come back.
            </p>
            <p>
              These get conflated, and they should not be. A site with a worker quality problem and a site with a worker experience problem look identical on a headcount report and need opposite responses. Treating the second as the first is the most expensive mistake available in temporary labour, because it means replacing people who were never the problem — repeatedly, at full recruitment and induction cost each time.
            </p>
          </div>
        </section>

        {/* Section: Giving useful feedback about workers */}
        <section id="giving" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Giving useful feedback about workers
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Authorised users at your sites can submit{" "}
              <Link
                href="/technology/worker-ratings"
                className="text-teal-4 hover:underline font-semibold"
              >
                worker ratings
              </Link>{" "}
              across four named dimensions — punctuality, work quality, attitude and communication — on a five-star scale, with an optional comment. The overall score is the mean of the four.
            </p>

            {/* REQUIRED: Stylised graphic of ratings form */}
            <div
              role="figure"
              aria-label="Stylised graphic of worker rating form with four dimensions"
              className="glass-card my-8 rounded-2xl border border-white/10 bg-navy-950/70 p-6 md:p-8 backdrop-blur-md"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-teal-4 font-bold text-sm">
                    JS
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Rate Shift: Worker #4829 (Picker/Packer)</div>
                    <div className="text-xs text-white/50">Tuesday Morning Shift · Midlands DC</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-teal-4 px-2.5 py-1 rounded bg-teal-5/10 border border-teal-5/20">
                  Authorised Supervisor View
                </span>
              </div>

              {/* 4 Dimensions Grid */}
              <div className="space-y-4 mb-6">
                {[
                  { name: "Punctuality", stars: 5, note: "On time, clocked in 06:55" },
                  { name: "Work Quality", stars: 4, note: "Pick rate above target" },
                  { name: "Attitude", stars: 5, note: "Supported line handover" },
                  { name: "Communication", stars: 4, note: "Clear check-in with team lead" },
                ].map((dim, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                  >
                    <div>
                      <span className="text-sm font-semibold text-white">{dim.name}</span>
                      <span className="block text-xs text-white/40">{dim.note}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-teal-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <IconStarFilled
                          key={s}
                          className={`h-4 w-4 ${s <= dim.stars ? "text-teal-4" : "text-white/10"}`}
                        />
                      ))}
                      <span className="text-xs font-mono text-white/70 ml-2">{dim.stars}.0</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Optional Comment Field */}
              <div className="mb-4">
                <label className="block text-xs font-medium text-white/60 mb-1.5">
                  Optional Shift Comment (Keep for specific events)
                </label>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs text-white/60 font-mono">
                  &quot;Completed full run without errors; helped train new induction worker during afternoon pick.&quot;
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-white/40">
                <span>Mean Score: 4.5 / 5.0</span>
                <span>Submitted by authorised user · 4 taps to complete</span>
              </div>
              <p className="text-xs text-center text-white/50 leading-relaxed pt-3">
                Illustrative preview: The four-dimension rating form submitted by authorised site supervisors.
              </p>
            </div>

            <p>
              Rating four specific things rather than giving one overall impression is what makes the result usable. “Good worker” means different things to different supervisors and cannot be compared across a site, let alone between sites. Punctuality can. It also separates the fixable from the unfixable: a worker rated low on punctuality but high on work quality has a transport or shift-pattern problem, not a capability problem, and replacing them would be a waste of someone who is good at the job.
            </p>
            <p>
              Four things make feedback worth the thirty seconds it takes:
            </p>
            <ul className="space-y-3.5 my-4 pl-0 list-none">
              <li className="flex items-start gap-3 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Rate the shift, not the person in general.</strong> A bad Tuesday is information; a general impression formed over a month is not.
                </span>
              </li>
              <li className="flex items-start gap-3 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Rate promptly.</strong> Feedback given at the end of the week has already been smoothed by memory.
                </span>
              </li>
              <li className="flex items-start gap-3 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Use the comment when something specific happened, and leave it blank when nothing did.</strong> A comment on every record trains everyone to ignore comments.
                </span>
              </li>
              <li className="flex items-start gap-3 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Rate the good ones too.</strong> A site that only submits negative ratings gives an agency no way to identify who to send back, which is the more valuable half of the information.
                </span>
              </li>
            </ul>
            <p>
              And it has to be low-effort for supervisors, because feedback that costs a supervisor ten minutes will not be given during a busy shift and should not be expected. Four taps and an optional comment is the design point, not a compromise.
            </p>
          </div>
        </section>

        {/* Section: Stopping the same unsuitable workers coming back */}
        <section id="no-repeat" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Stopping the same unsuitable workers coming back
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              This is the most common frustration with agency labour and it usually has a mundane cause: the feedback never reached the booking decision. A supervisor mentions it to a coordinator, the coordinator is not the person who books the shift next Tuesday, and nothing in the system records it.
            </p>

            {/* REQUIRED: The feedback-to-booking diagram */}
            <div
              role="figure"
              aria-label="Diagram showing feedback attached to worker record reaching next booking decision vs unrecorded verbal path"
              className="glass-card my-8 rounded-2xl border border-white/10 bg-navy-950/70 p-6 md:p-8 backdrop-blur-md"
            >
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-4">
                  Workflow Contrast · Booking Integration
                </span>
                <h4 className="text-base font-semibold text-white mt-1">
                  Diagram: Feedback-to-Booking Mechanism vs Informal Remark
                </h4>
              </div>

              <div className="flex justify-center">
                <svg
                  viewBox="0 0 680 260"
                  className="w-full max-w-[620px] h-auto font-sans"
                  aria-label="Feedback to booking architecture comparison"
                >
                  <defs>
                    <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6 Z" fill="#2dd4bf" />
                    </marker>
                    <marker id="arrowGray" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6 Z" fill="#64748b" />
                    </marker>
                  </defs>

                  {/* ACTIVE PATH: Structured Rating */}
                  <g>
                    <rect x="20" y="25" width="160" height="75" rx="10" fill="rgba(45,212,191,0.06)" stroke="#00A99D" strokeWidth="1.5" />
                    <text x="100" y="52" fill="#2dd4bf" fontSize="12" fontWeight="700" textAnchor="middle">Structured Rating</text>
                    <text x="100" y="70" fill="#ffffff" fontSize="10" textAnchor="middle">4 Dimensions + Record</text>
                    <text x="100" y="85" fill="rgba(255,255,255,0.6)" fontSize="9" textAnchor="middle">Submitted in portal</text>

                    {/* Arrow 1 */}
                    <path d="M 180 62 L 260 62" stroke="#2dd4bf" strokeWidth="2" markerEnd="url(#arrowGreen)" />

                    <rect x="270" y="25" width="160" height="75" rx="10" fill="rgba(45,212,191,0.06)" stroke="#00A99D" strokeWidth="1.5" />
                    <text x="350" y="52" fill="#2dd4bf" fontSize="12" fontWeight="700" textAnchor="middle">Worker Record</text>
                    <text x="350" y="70" fill="#ffffff" fontSize="10" textAnchor="middle">Site History Attached</text>
                    <text x="350" y="85" fill="rgba(255,255,255,0.6)" fontSize="9" textAnchor="middle">Persistent & Actionable</text>

                    {/* Arrow 2 */}
                    <path d="M 430 62 L 500 62" stroke="#2dd4bf" strokeWidth="2" markerEnd="url(#arrowGreen)" />

                    <rect x="510" y="20" width="150" height="85" rx="10" fill="#00A99D" fillOpacity="0.15" stroke="#2dd4bf" strokeWidth="2" />
                    <text x="585" y="48" fill="#2dd4bf" fontSize="12" fontWeight="700" textAnchor="middle">Next Booking</text>
                    <text x="585" y="66" fill="#ffffff" fontSize="10" fontWeight="600" textAnchor="middle">Visible at Allocation</text>
                    <text x="585" y="82" fill="#2dd4bf" fontSize="9" textAnchor="middle">✓ Right worker chosen</text>
                    <text x="585" y="95" fill="#2dd4bf" fontSize="9" textAnchor="middle">✓ Exclusions enforced</text>
                  </g>

                  {/* FAILED PATH: Greyed Out Verbal Remark */}
                  <g opacity="0.45">
                    <rect x="20" y="150" width="160" height="75" rx="10" fill="rgba(255,255,255,0.02)" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />
                    <text x="100" y="177" fill="#94a3b8" fontSize="12" fontWeight="600" textAnchor="middle">Verbal Remark</text>
                    <text x="100" y="195" fill="#64748b" fontSize="10" textAnchor="middle">Mentioned to coordinator</text>
                    <text x="100" y="210" fill="#64748b" fontSize="9" textAnchor="middle">&quot;Don&apos;t send them again&quot;</text>

                    {/* Arrow 1 gray */}
                    <path d="M 180 187 L 260 187" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrowGray)" />

                    <rect x="270" y="150" width="160" height="75" rx="10" fill="rgba(255,255,255,0.02)" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />
                    <text x="350" y="177" fill="#94a3b8" fontSize="12" fontWeight="600" textAnchor="middle">Unrecorded</text>
                    <text x="350" y="195" fill="#ef4444" fontSize="10" textAnchor="middle">Person on holiday</text>
                    <text x="350" y="210" fill="#64748b" fontSize="9" textAnchor="middle">Nothing in system</text>

                    {/* Arrow 2 gray */}
                    <path d="M 430 187 L 500 187" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrowGray)" />

                    <rect x="510" y="150" width="150" height="75" rx="10" fill="rgba(239,68,68,0.05)" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" />
                    <text x="585" y="177" fill="#f87171" fontSize="12" fontWeight="600" textAnchor="middle">Next Booking</text>
                    <text x="585" y="195" fill="#ef4444" fontSize="10" textAnchor="middle">History Invisible</text>
                    <text x="585" y="210" fill="#94a3b8" fontSize="9" textAnchor="middle">✗ Same issue repeats</text>
                  </g>
                </svg>
              </div>
              <p className="text-xs text-center text-white/50 leading-relaxed pt-4">
                The feedback-to-booking mechanism: structured ratings persist against worker records to govern allocations, whereas informal corridor remarks fail when staff change shifts.
              </p>
            </div>

            <p>
              Where ratings are recorded against the worker, site history is visible at the point of booking rather than existing as something someone was told once. That is the mechanism — not a policy, not an assurance, a record attached to the person who is being allocated.
            </p>
            <p>
              Where someone genuinely should not return to your site, say so explicitly and in the system rather than in passing. A recorded exclusion is actionable; a remark in a corridor is not, and the person who heard it will eventually be on holiday.
            </p>
            <p>
              The same record works the other way, and that is the half worth more. Where a worker has been rated well at your site, that history sits against them when shifts are being filled — so “send us more people like the ones who worked out” becomes something the booking can act on rather than a hope expressed on a call. It improves with use: the more your supervisors rate, the better the matching gets, which is the practical reason to rate the good shifts as well as the bad ones.
            </p>
          </div>
        </section>

        {/* Section: What workers tell you without being asked */}
        <section id="behaviour" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            What workers tell you without being asked
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Accept does not run a post-shift survey of temporary workers, and it is worth being straightforward about that rather than implying otherwise.
            </p>
            <p>
              What exists instead is behavioural: whether a worker accepts the next shift offered, whether they attend it, whether they return the following week, how long they stay, and whether they leave in the first fortnight. Those are not opinions about a site — they are decisions about it, taken by people who have worked there, and they are considerably harder to give a polite answer to than a questionnaire.
            </p>
            <p>
              Where a worker does raise something directly, it reaches us through the people who deal with them — the branch teams, and{" "}
              <Link
                href="/technology/acceptmentor"
                className="text-teal-4 hover:underline font-semibold"
              >
                the development side of the service
              </Link>
              , where coaching and recognition conversations happen. That is human-led rather than automated, which makes it slower and less structured, and also more honest.
            </p>
            <p>
              The practical consequence for a site manager: if you want to know what your workers think of your site, look at what proportion of them come back. It is a more reliable measure than anything they would write down.
            </p>
            <p>
              So if you are shopping for an agency that supplies worker feedback data, be precise about which kind you mean. Ratings your own team submits, and anonymised patterns in attendance and retention, are things we provide. Survey responses from workers about their experience are not, because we do not collect them. An agency offering you those is worth two questions: what proportion of workers actually reply, and what happens to the experience of the ones who do not — because the people most unhappy with a site are the least likely to fill anything in.
            </p>
          </div>
        </section>

        {/* Section: Asking your workers yourself */}
        <section id="asking" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Asking your workers yourself
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Nothing stops you asking directly, and a site that does it well learns things no agency report will tell it. Four things separate useful answers from polite ones:
            </p>
            <ul className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Ask early, and in person.</strong> The first week is the most informative, because someone has not yet decided how they feel about the place and still notices things a long-standing worker has stopped seeing.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Ask about specifics, not satisfaction.</strong> “Was the induction clear about what you would actually be doing?” gets a usable answer. “How are you finding it?” does not.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Ask someone who is not their supervisor.</strong> A temporary worker asked by the person who allocates their shifts will say it is fine.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Ask the ones who leave, and ask quickly.</strong> Somebody who left last week has nothing to gain by being tactful, which makes them the most honest source available to you and the hardest to reach a month later.
                </span>
              </li>
            </ul>
            <p>
              Then change one thing visibly. A site that asks and changes nothing gets asked-and-changed-nothing answers next time, and workers tell each other which sites those are.
            </p>
          </div>
        </section>

        {/* Section: Aggregated patterns, and what gets withheld */}
        <section id="patterns" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Aggregated patterns, and what gets withheld
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Some of what workers experience shows up only in aggregate — across a site, a shift pattern or a group who started together, rather than in any one person&apos;s record. Accept reports these to clients as anonymised patterns in attendance, reliability and retention. They come from the operational record and from the conversations described above, not from a survey, and no individual is identifiable in them.
            </p>
            <p>
              Absence that is protected in law is separated out and is not counted against a worker or reported as a reliability signal. That is a safeguard rather than a feature. It is also why an absence figure we give you may be lower than the one you would reach by counting days yourself, and it is worth knowing that before the two numbers are compared in a meeting.
            </p>
            <p>
              Governed also means withheld. Where the data is not fresh enough, where the sample is too small to mean anything, or where a particular cut would make an individual identifiable, you are told that rather than given a number. A pattern drawn from six workers over two weeks is not a finding, and presenting it as one would be worse than saying nothing at all.
            </p>
            <p>
              That matters most at the moment you ask for a breakdown and do not get one. “The sample is too small to tell you anything” is a more useful answer than a confident figure built on very little, and being given it is the difference between a report and a decoration.
            </p>
          </div>
        </section>

        {/* Section: Recruitment problem, or workplace problem? */}
        <section id="diagnose" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Recruitment problem, or workplace problem?
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Four checks will usually tell you which one you have, and they take an afternoon rather than a project:
            </p>
            <ol className="space-y-4 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  1
                </span>
                <span>
                  Do the same workers perform well elsewhere? If people who struggle on your site attend reliably at other sites, the variable is the site.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  2
                </span>
                <span>
                  Does the problem concentrate on one shift, one line or one supervisor while the rest of the operation holds? If so the cause is local, and no amount of supply will fix it. Review{" "}
                  <Link
                    href="/workforce-intelligence/temporary-worker-attendance/"
                    className="text-teal-4 hover:underline font-semibold"
                  >
                    attendance by shift pattern
                  </Link>{" "}
                  to see where anomalies emerge.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  3
                </span>
                <span>
                  When do people leave? Departures in the first fortnight point at induction, the first day and how people are treated on arrival. Departures at three months point at the work itself, the pay, or a better offer nearby. Tracking{" "}
                  <Link
                    href="/workforce-intelligence/temporary-worker-retention/"
                    className="text-teal-4 hover:underline font-semibold"
                  >
                    first-fortnight leavers
                  </Link>{" "}
                  isolates induction quality from wider retention issues.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4 text-xs font-bold">
                  4
                </span>
                <span>
                  What happens to the ones who stay? Are they asked back, do they get consistent shifts, is there any reason for them to be loyal?
                </span>
              </li>
            </ol>
            <p>
              Answering those four honestly is uncomfortable, and cheaper than the alternative — which is replacing the same roles indefinitely and concluding that agency workers are unreliable.
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
            Talk to us about worker quality on your site
          </h2>
          <p className="text-white/70 max-w-[540px] mx-auto mb-8 text-[15px] leading-relaxed">
            Discover how structured supervisor feedback and behavioural intelligence build a consistent, high-performing temporary workforce.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-5 px-6 py-3.5 text-sm font-semibold text-navy-1 shadow-lg shadow-teal-5/20 transition-all hover:bg-teal-4 hover:shadow-teal-5/30 hover:scale-[1.02]"
          >
            Talk to us about worker quality on your site
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
