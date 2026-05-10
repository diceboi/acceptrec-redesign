import DriversClient from "./DriversClient";

export const metadata = {
  title: "HGV & Driver Jobs Midlands | Class 1, Class 2, Van & 7.5T | Accept Recruitment",
  description: "Driver jobs across Leicester and the Midlands. Van, 7.5T, HGV Class 1 & 2 positions. £12.50-£23/hour with career progression and license upgrade support.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/drivers",
  },
  openGraph: {
    title: "Driver Jobs Midlands | Accept Recruitment",
    description: "Van, 7.5T, HGV Class 1 & 2 driver jobs across Leicester and the Midlands. £12.50-£23/hour.",
    url: "https://www.acceptrec.co.uk/drivers",
    siteName: "Accept Recruitment",
    locale: "en_GB",
    type: "website",
  },
};

export default function DriversPage() {
  return <DriversClient />;
}
