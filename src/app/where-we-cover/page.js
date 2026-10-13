import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  IconArrowRight,
  IconCheck,
  IconMapPin,
  IconPhone,
  IconBrandWhatsapp,
  IconMail,
  IconClock,
  IconBuildingWarehouse,
} from "@tabler/icons-react";

export const metadata = {
  title: "Where We Cover: Midlands Recruitment Coverage | Accept",
  description:
    "Accept covers the Midlands from three branches in Leicester, Coventry and Tamworth — including multi-site accounts and sites that are hard to reach by public transport.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/where-we-cover/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "article",
    title: "Where We Cover: Midlands Recruitment Coverage",
    description:
      "Three Midlands branches, multi-site accounts, and sites that are hard to reach.",
    url: "https://www.acceptrec.co.uk/where-we-cover/",
    siteName: "Accept Recruitment",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where We Cover: Midlands Recruitment Coverage",
    description:
      "Three Midlands branches, multi-site accounts, and sites that are hard to reach.",
  },
};

export default function WhereWeCoverPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which recruitment agencies specialise in industrial and logistics staffing in the Midlands?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Accept supplies temporary workers across manufacturing, logistics, warehousing and food production in the Midlands, from three branches in Leicester, Coventry and Tamworth, and all three cover all of those sectors — the local industry mix differs, with more automotive around Coventry and more logistics along the M42 at Tamworth, but the capability does not. Driving and engineering are national teams rather than branch ones, because a class 1 driver or an engineer is recruited for a licence or a skill set rather than a postcode. A site outside the Midlands is still worth asking about; most site-based work is near the branches because that is where the established local pools are, which is where we are strongest rather than a boundary.",
        },
      },
      {
        "@type": "Question",
        name: "Can one recruitment agency manage staffing across Tamworth, Birmingham and Leicester?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, and the question worth asking any supplier is whether that means one account with visibility across all sites or several local arrangements under one name. The difference appears when you want to compare sites or understand why one performs differently from another, because that requires the data to sit in one place. Accept holds multiple sites on one account with access controlled by site, so local managers see their own operation and head office sees all of it.",
        },
      },
      {
        "@type": "Question",
        name: "How do we staff a site that is hard to reach for early, late and weekend shifts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Align shift times with an actual transport service where you can — moving a start by thirty minutes is often worth more than a rate rise. Recruit from the immediate area rather than the wider catchment, which is slower but far more durable. Coordinate car-sharing among workers on the same pattern rather than hoping it happens. And arrange organised transport for the shifts that cannot be solved any other way. Paying a premium for a journey that does not work buys an acceptance, not an attendance.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know whether Accept covers my site?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tell us the site postcode and the shift start and finish times. Coverage depends on whether workers can realistically reach the site at those times, which is a different question from distance from our nearest branch — a site half an hour away with a 6am start can be harder to staff than one an hour away starting at 8am. We would rather tell you at the outset that a pattern will be difficult than discover it together in week three.",
        },
      },
    ],
  };

  const branchItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Accept Recruitment branches",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "EmploymentAgency",
          name: "Accept Recruitment Leicester",
          url: "https://www.acceptrec.co.uk/offices/leicester",
          telephone: "+441162182133",
          email: "leicester@acceptrec.co.uk",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Unit 4, Oswin Road",
            addressLocality: "Leicester",
            postalCode: "LE3 1HR",
            addressCountry: "GB",
          },
          openingHours: "Mo-Fr 08:00-17:00",
          parentOrganization: {
            "@type": "Organization",
            name: "Accept Recruitment Ltd",
            url: "https://www.acceptrec.co.uk/",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "EmploymentAgency",
          name: "Accept Recruitment Coventry",
          url: "https://www.acceptrec.co.uk/offices/coventry",
          telephone: "+442477180356",
          email: "coventry@acceptrec.co.uk",
          address: {
            "@type": "PostalAddress",
            streetAddress: "First Floor, 1 Harnall Row",
            addressLocality: "Coventry",
            postalCode: "CV1 5DW",
            addressCountry: "GB",
          },
          openingHours: "Mo-Fr 08:00-17:00",
          parentOrganization: {
            "@type": "Organization",
            name: "Accept Recruitment Ltd",
            url: "https://www.acceptrec.co.uk/",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "EmploymentAgency",
          name: "Accept Recruitment Tamworth",
          url: "https://www.acceptrec.co.uk/offices/tamworth",
          telephone: "+441827438334",
          email: "tamworth@acceptrec.co.uk",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Unit 2, Manor Court, 95 Lichfield Street",
            addressLocality: "Tamworth",
            postalCode: "B79 7QF",
            addressCountry: "GB",
          },
          openingHours: "Mo-Fr 08:00-17:00",
          parentOrganization: {
            "@type": "Organization",
            name: "Accept Recruitment Ltd",
            url: "https://www.acceptrec.co.uk/",
          },
        },
      },
    ],
  };

  const organizationSupportSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Accept Recruitment Ltd",
    url: "https://www.acceptrec.co.uk/",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        description:
          "Out-of-hours support for clients. Contact details are issued at account set-up.",
        areaServed: "GB",
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "17:00",
          closes: "08:00",
        },
      },
    ],
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
        name: "About Accept",
        item: "https://www.acceptrec.co.uk/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Where We Cover",
      },
    ],
  };

  const tocItems = [
    { id: "branches", label: "The three branches" },
    { id: "how-far", label: "How far we cover" },
    { id: "national", label: "Driving and engineering work nationally" },
    { id: "sectors", label: "The same capability from every branch" },
    { id: "multi-site", label: "Multi-site accounts" },
    { id: "hard-to-reach", label: "Sites that are hard to reach" },
    { id: "faq", label: "Frequently asked questions" },
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-white selection:bg-teal-5 selection:text-navy-900">
      <Navbar />

      {/* JSON-LD Schemas: Note NO Article schema per spec */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(branchItemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSupportSchema) }}
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
          <Link href="/about" className="hover:text-teal-4 transition-colors">
            About Accept
          </Link>
          <span className="text-white/30">›</span>
          <span className="text-white/80 font-medium">Where We Cover</span>
        </nav>

        {/* Section Pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-5/20 bg-teal-5/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
          MIDLANDS RECRUITMENT COVERAGE
        </div>

        {/* Page Title: Exactly One H1 */}
        <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-white leading-[1.08] mb-8">
          Where We Cover
        </h1>

        {/* Answer-First Paragraph */}
        <section id="answer" className="mb-10 text-lg md:text-xl leading-relaxed text-white/90 font-normal">
          <p>
            Accept supplies temporary workers across the Midlands for industrial, warehouse, logistics, manufacturing and food production work, from three branches: Leicester, Coventry and Tamworth. Our driving and engineering teams work nationally. For site-based work, coverage is a matter of travel time for workers rather than a radius drawn on a map — whether we can staff your site depends on whether people can realistically get to it at the time your shift starts, which is a different question from how far away it is.
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

        {/* Section: The three branches */}
        <section id="branches" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            The three branches
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Each branch runs its own local worker pool and knows the sites in its area. Call the nearest one, or any of the three if you are not sure which covers you — they will put you through to the right team. Phone before visiting: the people who know your area are usually out on site rather than at a desk.
            </p>

            {/* Three Branch Cards */}
            <div className="space-y-6 my-8">
              {/* Leicester Branch */}
              <div className="glass-card rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    <Link href="/offices/leicester" className="hover:text-teal-4 transition-colors">
                      Leicester
                    </Link>
                  </h3>
                  <Link
                    href="/offices/leicester"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-4 hover:underline"
                  >
                    Branch details <IconArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <address className="not-italic space-y-2 text-white/80 text-[15px]">
                  <div className="flex items-start gap-2.5">
                    <IconMapPin className="h-4 w-4 text-teal-4 mt-1 shrink-0" />
                    <span>Unit 4, Oswin Road, Leicester LE3 1HR</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2">
                    <div className="flex items-center gap-2">
                      <IconPhone className="h-4 w-4 text-teal-4 shrink-0" />
                      <a href="tel:+441162182133" className="hover:text-teal-4 transition-colors">
                        0116 218 2133
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconBrandWhatsapp className="h-4 w-4 text-teal-4 shrink-0" />
                      <a href="https://wa.me/447495995406" target="_blank" rel="noopener noreferrer" className="hover:text-teal-4 transition-colors">
                        07495 995406
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconMail className="h-4 w-4 text-teal-4 shrink-0" />
                      <a href="mailto:leicester@acceptrec.co.uk" className="hover:text-teal-4 transition-colors">
                        leicester@acceptrec.co.uk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 text-xs text-white/50">
                    <IconClock className="h-3.5 w-3.5 text-teal-4/70 shrink-0" />
                    <span>Open 8am to 5pm, Monday to Friday</span>
                  </div>
                </address>
              </div>

              {/* Coventry Branch */}
              <div className="glass-card rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    <Link href="/offices/coventry" className="hover:text-teal-4 transition-colors">
                      Coventry
                    </Link>
                  </h3>
                  <Link
                    href="/offices/coventry"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-4 hover:underline"
                  >
                    Branch details <IconArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <address className="not-italic space-y-2 text-white/80 text-[15px]">
                  <div className="flex items-start gap-2.5">
                    <IconMapPin className="h-4 w-4 text-teal-4 mt-1 shrink-0" />
                    <span>First Floor, 1 Harnall Row, Coventry CV1 5DW</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2">
                    <div className="flex items-center gap-2">
                      <IconPhone className="h-4 w-4 text-teal-4 shrink-0" />
                      <a href="tel:+442477180356" className="hover:text-teal-4 transition-colors">
                        024 7718 0356
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconBrandWhatsapp className="h-4 w-4 text-teal-4 shrink-0" />
                      <a href="https://wa.me/447833945679" target="_blank" rel="noopener noreferrer" className="hover:text-teal-4 transition-colors">
                        07833 945679
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconMail className="h-4 w-4 text-teal-4 shrink-0" />
                      <a href="mailto:coventry@acceptrec.co.uk" className="hover:text-teal-4 transition-colors">
                        coventry@acceptrec.co.uk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 text-xs text-white/50">
                    <IconClock className="h-3.5 w-3.5 text-teal-4/70 shrink-0" />
                    <span>Open 8am to 5pm, Monday to Friday</span>
                  </div>
                </address>
              </div>

              {/* Tamworth Branch */}
              <div className="glass-card rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    <Link href="/offices/tamworth" className="hover:text-teal-4 transition-colors">
                      Tamworth
                    </Link>
                  </h3>
                  <Link
                    href="/offices/tamworth"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-4 hover:underline"
                  >
                    Branch details <IconArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <address className="not-italic space-y-2 text-white/80 text-[15px]">
                  <div className="flex items-start gap-2.5">
                    <IconMapPin className="h-4 w-4 text-teal-4 mt-1 shrink-0" />
                    <span>Unit 2, Manor Court, 95 Lichfield Street, Tamworth B79 7QF</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2">
                    <div className="flex items-center gap-2">
                      <IconPhone className="h-4 w-4 text-teal-4 shrink-0" />
                      <a href="tel:+441827438334" className="hover:text-teal-4 transition-colors">
                        01827 438 334
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconBrandWhatsapp className="h-4 w-4 text-teal-4 shrink-0" />
                      <a href="https://wa.me/447932787550" target="_blank" rel="noopener noreferrer" className="hover:text-teal-4 transition-colors">
                        07932 787550
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconMail className="h-4 w-4 text-teal-4 shrink-0" />
                      <a href="mailto:tamworth@acceptrec.co.uk" className="hover:text-teal-4 transition-colors">
                        tamworth@acceptrec.co.uk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 text-xs text-white/50">
                    <IconClock className="h-3.5 w-3.5 text-teal-4/70 shrink-0" />
                    <span>Open 8am to 5pm, Monday to Friday</span>
                  </div>
                </address>
              </div>
            </div>

            <p>
              Branch offices are open 8am to 5pm, Monday to Friday, and support does not stop when they close. Clients are given an out-of-hours contact when the account is set up, so the person who picks up at four in the morning already knows the site.
            </p>
            <p>
              That is not a detail. Shifts start at 5am and finish at 10pm, and the problems worth solving quickly — a worker who has not arrived, a line that is short for the morning, a request that has changed overnight — almost never happen between nine and five. An arrangement that only works during office hours is not much of an arrangement for a warehouse.
            </p>
          </div>
        </section>

        {/* Section: How far we cover */}
        <section id="how-far" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            How far we cover
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              The honest answer to “do you cover us” is that it depends on your shift times, not only on your postcode.
            </p>
            <p>
              A site thirty minutes from a branch with a 6am start may be harder to staff than a site an hour away starting at 8am, because the constraint is whether workers can get there rather than how far it is from our office. Early starts, night finishes and weekend shifts all narrow the realistic catchment considerably, and they narrow it differently depending on the route.
            </p>
            <p>
              So the useful conversation is about the specific site and the specific shift pattern. If you tell us where the site is and when the shifts start and finish, we can tell you straightforwardly whether we can staff it reliably — including when the answer is that we cannot, which is more useful to both of us than finding out in week three.
            </p>
          </div>
        </section>

        {/* Section: Driving and engineering work nationally */}
        <section id="national" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Driving and engineering work nationally
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Everything above describes site-based work, where the constraint is whether somebody can get to one place at one particular time.
            </p>
            <p>
              Driving and engineering are not like that. A class 1 driver is mobile by definition, and an engineer is recruited for a skill set rather than a postcode. For both, the useful questions are the licence or the qualification, the shift pattern and the start location — not which of the three offices is nearest to you. Both{" "}
              <Link
                href="/driving-recruitment"
                className="text-teal-4 hover:underline font-semibold"
              >
                driving
              </Link>{" "}
              and{" "}
              <Link
                href="/industries/technical"
                className="text-teal-4 hover:underline font-semibold"
              >
                engineering and technical
              </Link>{" "}
              teams work nationally.
            </p>
            <p>
              And if your site is outside the Midlands, it is still worth asking. Most of our site-based work is near the branches because that is where the local pools we have built up are, which is a statement about where we are strongest rather than a boundary. A large or long-term requirement somewhere else is a conversation, not a no — and we would rather tell you honestly what we could and could not cover than decline on principle.
            </p>
          </div>
        </section>

        {/* Section: The same capability from every branch */}
        <section id="sectors" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            The same capability from every branch
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              All three branches cover every sector — industrial and warehouse work of every kind, and each of these:
            </p>
            <ul className="space-y-3.5 my-6 pl-0 list-none">
              <li className="glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-teal-5/30 transition-colors">
                <Link
                  href="/industries/logistics"
                  className="flex items-center justify-between text-white font-semibold hover:text-teal-4 transition-colors"
                >
                  <span>Logistics and distribution</span>
                  <IconArrowRight className="h-4 w-4 text-teal-4" />
                </Link>
              </li>
              <li className="glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-teal-5/30 transition-colors">
                <Link
                  href="/industries/manufacturing"
                  className="flex items-center justify-between text-white font-semibold hover:text-teal-4 transition-colors"
                >
                  <span>Manufacturing and production</span>
                  <IconArrowRight className="h-4 w-4 text-teal-4" />
                </Link>
              </li>
              <li className="glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-teal-5/30 transition-colors">
                <Link
                  href="/industries/food-production"
                  className="flex items-center justify-between text-white font-semibold hover:text-teal-4 transition-colors"
                >
                  <span>Food production</span>
                  <IconArrowRight className="h-4 w-4 text-teal-4" />
                </Link>
              </li>
              <li className="glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-teal-5/30 transition-colors">
                <Link
                  href="/driving-recruitment"
                  className="flex items-center justify-between text-white font-semibold hover:text-teal-4 transition-colors"
                >
                  <span>Driving — a national team rather than a branch one, see below</span>
                  <IconArrowRight className="h-4 w-4 text-teal-4" />
                </Link>
              </li>
              <li className="glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-teal-5/30 transition-colors">
                <Link
                  href="/industries/technical"
                  className="flex items-center justify-between text-white font-semibold hover:text-teal-4 transition-colors"
                >
                  <span>Engineering and technical — also national, see below</span>
                  <IconArrowRight className="h-4 w-4 text-teal-4" />
                </Link>
              </li>
            </ul>
            <p>
              There is no specialist branch and no sector that only one office can cover.
            </p>
            <p>
              What differs is the local industry mix rather than the capability — there is more automotive work around Coventry and more logistics along the M42 at Tamworth, simply because that is what is there. It means each branch knows its local sites and the workers who have done that kind of work nearby, which is useful. It does not mean you need a particular branch for a particular sector.
            </p>
          </div>
        </section>

        {/* Section: Multi-site accounts */}
        <section id="multi-site" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Multi-site accounts
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              One agency can cover several Midlands sites, and for a multi-site operation there are real advantages in doing so — but only if the account is actually run as one.
            </p>
            <p>
              The thing to check with any supplier is whether multi-site means one account with visibility across all of it, or three separate local arrangements with the same logo. The difference shows up when you want to compare sites, move workers between them, or find out why one site performs differently from another — all of which require the data to sit in one place.
            </p>
            <p>
              For Accept clients, sites are held on{" "}
              <Link
                href="/technology/client-portal"
                className="text-teal-4 hover:underline font-semibold"
              >
                one account with access controlled by site
              </Link>
              , so a local manager sees their own operation and a head office user sees all of them. That is what makes comparison across sites possible rather than notional.
            </p>
          </div>
        </section>

        {/* Section: Sites that are hard to reach */}
        <section id="hard-to-reach" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
            Sites that are hard to reach
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-[16px]">
            <p>
              Distribution parks are frequently built where land is available rather than where buses go, and the consequences land on early, late and weekend shifts.
            </p>
            <p>
              There are only four things that genuinely work, and it is worth being direct about them:
            </p>
            <ul className="space-y-3.5 my-6 pl-0 list-none">
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Shift times that line up with a service that actually runs.</strong> This sometimes means moving a start by thirty minutes rather than raising a rate, and it is almost always the cheapest fix available.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Recruiting from the immediate area rather than the wider catchment.</strong> Slower to build and far more durable once built.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Car-sharing among workers on the same pattern.</strong> It needs coordinating rather than hoping — left to chance it does not happen.
                </span>
              </li>
              <li className="flex items-start gap-3.5 glass-card rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-5/10 text-teal-4">
                  <IconCheck className="h-3.5 w-3.5" />
                </div>
                <span>
                  <strong className="text-white font-semibold">Organised transport, for the shifts that cannot be solved any other way.</strong>
                </span>
              </li>
            </ul>
            <p>
              What does not work is paying more and expecting the problem to resolve itself. A premium can persuade someone to take a shift they cannot reliably get to; it cannot make the last bus run later. That is the pattern behind a great many sites whose{" "}
              <Link
                href="/workforce-intelligence/temporary-worker-attendance/"
                className="text-teal-4 hover:underline font-semibold"
              >
                attendance is blamed on worker reliability
              </Link>
              .
            </p>
            <p>
              If your site has this problem, say so at the start. A supplier who knows about it can recruit for it; a supplier who discovers it in week two will send people who leave.
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
            Tell us about your site
          </h2>
          <p className="text-white/70 max-w-[540px] mx-auto mb-8 text-[15px] leading-relaxed">
            Send us your location, shift times, and required volume. We&apos;ll tell you straightforwardly whether we can staff your operation reliably.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-5 px-6 py-3.5 text-sm font-semibold text-navy-1 shadow-lg shadow-teal-5/20 transition-all hover:bg-teal-4 hover:shadow-teal-5/30 hover:scale-[1.02]"
          >
            Tell us about your site
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
