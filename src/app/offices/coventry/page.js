import CoventryOfficeClient from "./CoventryOfficeClient";

export const metadata = {
  title: "Recruitment Agency Coventry | Industrial & Warehouse Staffing | Accept Recruitment",
  description: "Coventry recruitment agency at Harnall Row supplying warehouse, manufacturing and driving staff across Coventry, Nuneaton, Rugby and the West Midlands.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/offices/coventry",
  },
  openGraph: {
    title: "Recruitment Agency Coventry | Accept Recruitment",
    description: "Coventry recruitment agency at Harnall Row supplying warehouse, manufacturing and driving staff across Coventry, Nuneaton, Rugby and the West Midlands.",
    url: "https://www.acceptrec.co.uk/offices/coventry",
    siteName: "Accept Recruitment",
    locale: "en_GB",
    type: "website",
  },
};

const coventrySchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: "Accept Recruitment Coventry",
  image: "https://www.acceptrec.co.uk/accept-logo.svg",
  telephone: "+44-24-7718-0356",
  email: "coventry@acceptrec.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "First Floor Office, 1 Harnall Row",
    addressLocality: "Coventry",
    postalCode: "CV1 5DW",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.4109,
    longitude: -1.5035,
  },
  url: "https://www.acceptrec.co.uk/offices/coventry",
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

export default function CoventryOfficePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coventrySchema) }}
      />
      <CoventryOfficeClient />
    </>
  );
}
