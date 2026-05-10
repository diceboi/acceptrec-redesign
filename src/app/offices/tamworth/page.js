import TamworthOfficeClient from "./TamworthOfficeClient";

export const metadata = {
  title: "Recruitment Agency Tamworth | Warehouse & Driving Staff | Accept Recruitment",
  description: "Tamworth recruitment agency on Lichfield Street. Warehouse, logistics and driving staff across Tamworth, Lichfield, Burton-on-Trent and the wider West Midlands.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/offices/tamworth",
  },
  openGraph: {
    title: "Recruitment Agency Tamworth | Accept Recruitment",
    description: "Tamworth recruitment agency on Lichfield Street. Warehouse, logistics and driving staff across Tamworth, Lichfield, Burton-on-Trent and the wider West Midlands.",
    url: "https://www.acceptrec.co.uk/offices/tamworth",
    siteName: "Accept Recruitment",
    locale: "en_GB",
    type: "website",
  },
};

const tamworthSchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: "Accept Recruitment Tamworth",
  image: "https://www.acceptrec.co.uk/accept-logo.svg",
  telephone: "+44-1827-438-334",
  email: "tamworth@acceptrec.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 2, Manor Court, 95 Lichfield Street",
    addressLocality: "Tamworth",
    postalCode: "B79 7QF",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.6343,
    longitude: -1.6924,
  },
  url: "https://www.acceptrec.co.uk/offices/tamworth",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "950",
  },
};

export default function TamworthOfficePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tamworthSchema) }}
      />
      <TamworthOfficeClient />
    </>
  );
}
