import LeicesterOfficeClient from "./LeicesterOfficeClient";

export const metadata = {
  title: "Recruitment Agency Leicester | Warehouse & Driving Staff | Accept Recruitment",
  description: "Leicester recruitment agency on Oswin Road since 2015. Warehouse, food production and driving staff across Leicester, Coalville, Loughborough, Hinckley, Lutterworth.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/offices/leicester",
  },
  openGraph: {
    title: "Recruitment Agency Leicester | Accept Recruitment",
    description: "Leicester recruitment agency on Oswin Road since 2015. Warehouse, food production and driving staff across Leicester, Coalville, Loughborough, Hinckley, Lutterworth.",
    url: "https://www.acceptrec.co.uk/offices/leicester",
    siteName: "Accept Recruitment",
    locale: "en_GB",
    type: "website",
  },
};

const leicesterSchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: "Accept Recruitment Leicester",
  image: "https://www.acceptrec.co.uk/accept-logo.svg",
  telephone: "+44-116-218-2133",
  email: "leicester@acceptrec.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 4, Oswin Road, Forest Business Park",
    addressLocality: "Leicester",
    postalCode: "LE3 1HR",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.6369,
    longitude: -1.1686,
  },
  url: "https://www.acceptrec.co.uk/offices/leicester",
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

export default function LeicesterOfficePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leicesterSchema) }}
      />
      <LeicesterOfficeClient />
    </>
  );
}
