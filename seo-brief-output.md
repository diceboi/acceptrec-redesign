__Accept Recruitment ÔÇö SEO Recovery Brief__

*Per\-page metadata, redirect mapping methodology, and on\-page H1 fixes ÔÇö for Peter*

# Context

The new website is a strong brand exercise but it has shipped with a small number of SEO defects that are very likely the cause of any rank drop on local Leicester/Coventry/Tamworth queries\. The three issues are:

1. Every page returns the identical title tag and meta description in the rendered HTML\. This is almost certainly a Next\.js metadata configuration error rather than 18 pages each having been mis\-set by hand\.
2. Brand\-led H1s have replaced the keyword\-led H1s of the old site\. The old homepage title was "Best Recruitment Agency in Leicester | Driving and Warehouse Specialists" ÔÇö that's the keyword space we used to own\. The new site has stripped most of that signal\.
3. Old URLs may not be 301\-redirecting to new equivalents\. If they aren't, every backlink earned over 11 years is hitting a 404 and we're losing all that domain authority\.

This document gives you everything needed to fix all three\. Work through it in the order it's written\.

# 1\. Per\-page metadata

## How to implement \(Next\.js App Router\)

Each page should export its own metadata object from the page\.tsx file\. Do NOT set metadata only in the root layout ÔÇö that's the bug pattern that gives every page the same title\.

// e\.g\. app/offices/leicester/page\.tsx
import type \{ Metadata \} from 'next';

export const metadata: Metadata = \{
  title: 'Recruitment Agency Leicester | Warehouse & Driving Staff | Accept Recruitment',
  description: 'Leicester recruitment agency on Oswin Road since 2015\. Warehouse, food production and driving staff across Leicester, Coalville, Loughborough, Hinckley, Lutterworth\.',
  alternates: \{ canonical: 'https://www\.acceptrec\.co\.uk/offices/leicester' \},
  openGraph: \{
    title: 'Recruitment Agency Leicester | Accept Recruitment',
    description: '\.\.\.',
    url: 'https://www\.acceptrec\.co\.uk/offices/leicester',
    siteName: 'Accept Recruitment',
    locale: 'en\_GB',
    type: 'website',
  \},
\};

export default function LeicesterOffice\(\) \{ \.\.\. \}

## Validation step

After deploying, view source \(Ctrl\+U\) on each page and confirm the <title> tag in the raw HTML is unique per page\. If it isn't, the metadata is being rendered client\-side via useEffect rather than server\-side ÔÇö that's a separate bug and Googlebot will not see the per\-page titles\.

Also remove the <meta name="keywords"> tag entirely\. Google has ignored it since 2009 and it just signals to anyone auditing the site that the SEO setup is dated\.

## The metadata set

Use the table below as the source of truth\. Title tags are kept under ~70 characters and descriptions under ~160 to avoid Google truncating them in search results\.

__Page \(URL\)__

__Title tag__

__Meta description__

/ \(homepage\)

Industrial Recruitment Agency Leicester, Coventry & Tamworth | Accept Recruitment

Industrial recruitment agency supplying warehouse, food production, manufacturing and driving staff across Leicester, Coventry and Tamworth\. 190\+ clients, 4\.8Ôśů rated\.

/offices/leicester

Recruitment Agency Leicester | Warehouse & Driving Staff | Accept Recruitment

Leicester recruitment agency on Oswin Road since 2015\. Warehouse, food production and driving staff across Leicester, Coalville, Loughborough, Hinckley, Lutterworth\.

/offices/coventry

Recruitment Agency Coventry | Industrial & Warehouse Staffing | Accept Recruitment

Coventry recruitment agency at Harnall Row supplying warehouse, manufacturing and driving staff across Coventry, Nuneaton, Rugby and the West Midlands\.

/offices/tamworth

Recruitment Agency Tamworth | Warehouse & Driving Staff | Accept Recruitment

Tamworth recruitment agency on Lichfield Street\. Warehouse, logistics and driving staff across Tamworth, Lichfield, Burton\-on\-Trent and the wider West Midlands\.

/industries/logistics

Warehouse & Logistics Recruitment Agency | Midlands | Accept Recruitment

Warehouse and logistics recruitment across the Midlands\. Pickers, packers, FLT drivers, goods\-in clerks\. 98% fill rate, real\-time attendance, every worker rated\.

/industries/manufacturing

Manufacturing Recruitment Agency | Midlands Temp Staffing | Accept Recruitment

Manufacturing recruitment across Leicester, Coventry and Tamworth\. Production operatives, machine operators, assembly workers and quality inspectors\. Vetted and verified\.

/industries/food\-production

Food Production Recruitment Agency | BRC\-Accredited Sites | Accept Recruitment

Food production recruitment for BRC\-accredited sites across the Midlands\. Production operatives, line workers, packers and quality control\. Hygiene\-trained, ready to start\.

/driving\-recruitment

HGV & Driver Recruitment Agency | Class 1 & 2 Drivers Midlands | Accept Recruitment

Driver recruitment across the Midlands\. HGV Class 1, Class 2, 7\.5T, van and ADR drivers\. Every licence DVLA\-verified, every tacho checked, every driver vetted\.

/permanent\-recruitment

Permanent Recruitment Agency Midlands | Industrial & Logistics | Accept Recruitment

Permanent recruitment for industrial, logistics and food production roles across the Midlands\. From supervisors to senior leadership ÔÇö hire people who stay\.

/jobs

Warehouse & Driving Jobs in Leicester, Coventry & Tamworth | Accept Recruitment

Live warehouse, driving, food production and manufacturing jobs across Leicester, Coventry and Tamworth\. Apply on WhatsApp ÔÇö registration in under 10 minutes\.

/drivers

HGV & Driver Jobs Midlands | Class 1, Class 2, Van & 7\.5T | Accept Recruitment

HGV Class 1 & 2, 7\.5T, van driver and multi\-drop jobs across the Midlands\. Weekly pay, regular hours, ongoing work\. Apply via WhatsApp in minutes\.

/registration

Register for Work | Warehouse & Driving Jobs Midlands | Accept Recruitment

Register with Accept Recruitment for warehouse, driving and food production work in Leicester, Coventry and Tamworth\. Quick WhatsApp registration, weekly pay\.

/get\-started

Hire Temp & Permanent Staff Midlands | Get a Quote | Accept Recruitment

Find reliable temporary and permanent staff across the Midlands\. Tell us what you need ÔÇö we respond within the hour\. Warehouse, driving, food production, manufacturing\.

/technology

Recruitment Technology | AcceptPulse, AcceptRate, AcceptMatch | Accept Recruitment

Real\-time attendance tracking, worker rating, AI\-powered shift matching and WhatsApp orchestration\. The technology stack behind 1,200 daily placements across the Midlands\.

/about

About Accept Recruitment | Industrial Staffing Agency Since 2015

Founded in Leicester in 2015\. Now placing 1,200 industrial workers daily across the Midlands for 190\+ clients including DPD, Wayfair and InPost\. 4\.8Ôśů Google rating\.

/case\-studies

Recruitment Case Studies | InPost, Vistry, Poundstretcher | Accept Recruitment

Real client outcomes: 4,200\+ shifts for InPost in 17 days, doubled Vistry's workforce in 10 weeks, 9 years as Poundstretcher's sole supplier\. Results, not promises\.

/team

Meet the Team | Accept Recruitment Leicester, Coventry & Tamworth

Meet the people behind Accept Recruitment ÔÇö operations, sales, payroll and on\-site teams across our Leicester, Coventry and Tamworth offices\.

/contact

Contact Accept Recruitment | Leicester, Coventry & Tamworth Offices

Get in touch with Accept Recruitment by phone, WhatsApp or email\. Three Midlands offices: Leicester \(LE3 1HR\), Coventry \(CV1 5DW\), Tamworth \(B79 7QF\)\.

/blog

Recruitment & Staffing Insights | Accept Recruitment Blog

Practical insights on industrial recruitment, workforce technology, compliance and the temporary staffing market ÔÇö from a Midlands agency placing 1,200 workers daily\.

/faq

FAQ | Accept Recruitment | Worker & Employer Questions Answered

Common questions from workers and employers about registering, pay, holiday, compliance, getting staff and how Accept Recruitment works\. Quick answers, plain English\.

__Note on duplication: __The current homepage description \("Accept Recruitment specialises in temporary staffing for warehousing, manufacturing, food production, and logistics across Leicester, Coventry & Tamworth\. 190\+ clients, 98% retention rate\."\) is fine for the homepage\. The bug is that it's being inherited by every other page\. Once each page has its own metadata, the homepage description can stay or be replaced with the one above ÔÇö both work\.

# 2\. Old\-to\-new URL redirect map

## Why this matters

11 years of backlinks point at old URLs\. If those URLs now 404, all that link equity is lost\. 301 redirects pass ~95%\+ of link equity to the new URL\. This is the single highest\-leverage SEO fix after the metadata, and it's time\-sensitive ÔÇö Google will deindex 404 pages within weeks\.

## Step 1: Build the actual old URL list

The table below is a best\-guess based on common patterns, but you need the real list\. Two ways to get it:

1. __Wayback Machine: __Go to web\.archive\.org and enter acceptrec\.co\.uk\. Use the URL view \(the Ôő» menu Ôćĺ "URLs"\) to see every URL the Internet Archive crawled\. Export the full list\. This is the most reliable source\.
2. __Google Search Console \(old property\): __If we still have the old GSC property, the Pages report shows every URL Google has ever indexed for the domain\. Export that\.
3. __Old sitemap\.xml: __If there's a copy of the old sitemap in version control or backups, that's the cleanest source\.

Combine these into a single deduplicated list\. That becomes the left column of your real redirect map\.

## Step 2: Map each old URL to its new equivalent

Use this table as a starting template ÔÇö it covers the most likely patterns\. Replace and extend it once you have the actual old URL list\.

__Likely old URL__

__New URL__

__Why__

/leicester\-recruitment\-agency

/offices/leicester

Direct location match ÔÇö preserve old keyword authority\.

/coventry\-recruitment\-agency

/offices/coventry

Direct location match\.

/tamworth\-recruitment\-agency

/offices/tamworth

Direct location match\.

/contact\-us

/contact

Standard URL slug change\.

/contact\-us/leicester

/offices/leicester

Office\-specific contact page\.

/contact\-us/coventry

/offices/coventry

Office\-specific contact page\.

/contact\-us/tamworth

/offices/tamworth

Office\-specific contact page\.

/about\-us

/about

Standard URL slug change\.

/our\-team

/team

Standard URL slug change\.

/services/warehouse\-recruitment

/industries/logistics

Old service\-style URL Ôćĺ new industry page\.

/services/driving\-recruitment

/driving\-recruitment

Service URL likely unchanged\.

/services/industrial\-recruitment

/industries/manufacturing

Old industrial Ôćĺ new manufacturing\.

/services/food\-production

/industries/food\-production

Service URL Ôćĺ industry page\.

/services/permanent\-recruitment

/permanent\-recruitment

Service URL likely unchanged\.

/jobs/warehouse

/jobs?category=warehouse

Use a query param if jobs are filtered, or a category slug if SEO\-friendly\.

/jobs/driving

/drivers

Driver\-specific jobs landing\.

/jobs/leicester

/jobs?location=leicester

Location\-filtered jobs feed\.

/jobs/coventry

/jobs?location=coventry

Location\-filtered jobs feed\.

/jobs/tamworth

/jobs?location=tamworth

Location\-filtered jobs feed\.

/register

/registration

Slug change\.

/clients

/employers

Audience renamed\.

/news

/blog

Common rename\.

/news/\[slug\]

/blog/\[slug\]

Apply pattern across all news posts\.

/privacy

/privacy\-policy

Slug change\.

/terms

/privacy\-policy

If no separate terms page exists, redirect to closest equivalent\.

/\[anything\-else\]

/

Catch\-all 301 to homepage as fallback \(only after specific rules\)\.

## Step 3: Implement in next\.config\.js

Next\.js handles 301s natively in next\.config\.js\. This is server\-side and reliable\. Do NOT use client\-side redirects \(router\.push\) ÔÇö Googlebot does not pass link equity through those\.

// next\.config\.js
module\.exports = \{
  async redirects\(\) \{
    return \[
      \{
        source: '/leicester\-recruitment\-agency',
        destination: '/offices/leicester',
        permanent: true, // 301
      \},
      \{
        source: '/contact\-us/:slug\*',
        destination: '/offices/:slug\*',
        permanent: true,
      \},
      \{
        source: '/news/:slug\*',
        destination: '/blog/:slug\*',
        permanent: true,
      \},
      // \.\.\. add every entry from the redirect map above
    \];
  \},
\};

## Step 4: Verify

- Pick 10 redirects at random and curl \-I https://www\.acceptrec\.co\.uk/old\-url ÔÇö confirm HTTP/2 308 or 301 with the correct Location header\.
- Submit the new sitemap\.xml in Google Search Console \(Sitemaps Ôćĺ Add sitemap Ôćĺ /sitemap\.xml\)\.
- In GSC, go to URL Inspection and request indexing on the homepage and the three office pages to accelerate recrawl\.
- Check Coverage report 7 days later ÔÇö "Page with redirect" count should jump, "Not found \(404\)" should fall\.

# 3\. On\-page H1 fixes

The brand straplines are great\. The mistake is that they're sitting in the H1 slot, which is the second\-strongest on\-page ranking signal after the title tag\. Fix by demoting the strapline to H2 \(or visual hero overlay\) and adding a keyword\-led H1 above or below\.

This does not change the visual design at all\. It only changes the heading hierarchy in the HTML\. Visually the page can look exactly the same ÔÇö the H1 can be smaller and styled differently from the visual hero\. What matters is that the keyword phrase is wrapped in <h1> in the DOM\.

__Page__

__Current H1 \(brand\-only\)__

__Recommended H1 \(keyword\-led\)__

__Keep as H2 / hero overlay__

Homepage

We Give a Shift\.

Industrial Recruitment Across Leicester, Coventry & Tamworth

We Give a Shift\.

/offices/leicester

Leicester Office

Recruitment Agency in Leicester

The heart of East Midlands food production and logistics recruitment

/offices/coventry

Coventry Office

Recruitment Agency in Coventry

\[brand line\]

/offices/tamworth

Tamworth Office

Recruitment Agency in Tamworth

\[brand line\]

/industries/logistics

Your Warehouse Never Stops

Warehouse & Logistics Recruitment in the Midlands

Your Warehouse Never Stops

/industries/manufacturing

\[unknown ÔÇö verify\]

Manufacturing Recruitment in the Midlands

\[brand line\]

/industries/food\-production

\[unknown ÔÇö verify\]

Food Production Recruitment for BRC\-Accredited Sites

\[brand line\]

/driving\-recruitment

Drivers Who Actually Deliver

HGV & Driver Recruitment in the Midlands

Drivers Who Actually Deliver

/permanent\-recruitment

\[unknown ÔÇö verify\]

Permanent Recruitment in the Midlands

\[brand line\]

__Implementation note: __There should be exactly one <h1> per page\. The current homepage appears to have one H1 \("We Give a Shift\."\) followed by multiple H2s with the same text \("Looking for work?" and "They trust us\. Every single day\."\) ÔÇö confirm the section headers are correctly hierarchical and unique\.

# 4\. Other fixes worth doing while you're in there

### LocalBusiness schema on each office page

Adds rich snippet eligibility \(star rating, hours, address\) and is the strongest signal for local pack rankings\. Use JSON\-LD in the <head>:

<script type="application/ld\+json">
\{
  "@context": "https://schema\.org",
  "@type": "EmploymentAgency",
  "name": "Accept Recruitment Leicester",
  "image": "https://www\.acceptrec\.co\.uk/\.\.\.",
  "telephone": "\+44\-116\-218\-2133",
  "email": "leicester@acceptrec\.co\.uk",
  "address": \{
    "@type": "PostalAddress",
    "streetAddress": "Unit 4, Oswin Road, Forest Business Park",
    "addressLocality": "Leicester",
    "postalCode": "LE3 1HR",
    "addressCountry": "GB"
  \},
  "geo": \{ "@type": "GeoCoordinates", "latitude": 52\.6369, "longitude": \-1\.1686 \},
  "url": "https://www\.acceptrec\.co\.uk/offices/leicester",
  "openingHoursSpecification": \[\{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": \["Monday","Tuesday","Wednesday","Thursday","Friday"\],
    "opens": "08:00", "closes": "18:00"
  \}\],
  "aggregateRating": \{
    "@type": "AggregateRating",
    "ratingValue": "4\.8",
    "reviewCount": "950"
  \}
\}
</script>

Repeat for Coventry and Tamworth, with the appropriate address, phone and geo\. Validate using Google's Rich Results Test\.

### JobPosting schema on individual job listings

Without this, jobs do not appear in Google Jobs \(the boxed jobs results that now dominate "warehouse jobs Leicester" type queries\)\. Bill should be able to wire this up off the existing IQX feed ÔÇö schema\.org/JobPosting is well\-documented\.

### Animated counters showing as "0"

On the homepage the stat blocks render as "0\+ Clients", "0% Retention", etc\. in the static HTML\. If these are CSS counters that animate up to the real numbers in the DOM, that's fine for users ÔÇö but Googlebot may be reading them as zero\. The real numbers \(190\+, 98%, etc\.\) need to be present in the server\-rendered HTML, with the animation purely a visual effect\. Worth checking with view source\.

### robots\.txt and sitemap\.xml

I couldn't fetch either directly\. Confirm both exist:

- /robots\.txt should at minimum allow all crawlers and reference the sitemap\.
- /sitemap\.xml should include every indexable page \(Next\.js can generate this automatically with app/sitemap\.ts\)\.
- Submit the sitemap in Google Search Console\.

### Internal linking

The Leicester office page mentions Magna Park, Coalville, Loughborough, Hinckley, Lutterworth ÔÇö those are good local\-intent terms but they're not linked anywhere\. If we ever build /jobs?location=coalville style pages, link to them from the Leicester page\. For now, at minimum add a footer link or sidebar block on each office page that links to the other two office pages and to the main industry pages, so internal link equity flows properly\.

# 5\. Suggested order of work

1. __Day 1: __Fix per\-page metadata in Next\.js\. Deploy\. View source on 5 representative pages and confirm unique titles in raw HTML\.
2. __Day 1: __Pull old URL list from Wayback Machine and/or GSC\. Build redirect map\.
3. __Day 2: __Implement redirects in next\.config\.js\. Deploy\. Verify with curl\.
4. __Day 2: __Submit sitemap in GSC\. Request indexing on homepage and office pages\.
5. __Day 3: __Fix H1s on each templated page type\.
6. __Day 4ÔÇô5: __Add LocalBusiness schema to office pages\. Add JobPosting schema to job listings \(coordinate with Bill\)\.
7. __Week 2 onwards: __Monitor GSC Performance report\. Compare impressions and average position week\-on\-week\. Most recovery should be visible within 2ÔÇô4 weeks of metadata \+ redirects fix\.

*If you don't already have access to Google Search Console for the domain, get that set up first ÔÇö without it you're flying blind on which queries we're losing and which we're recovering\.*

