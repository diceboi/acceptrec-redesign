import LogisticsClient from "./LogisticsClient";

export const metadata = {
  title: "Warehouse & Logistics Recruitment Agency | Midlands | Accept Recruitment",
  description: "Specialist warehouse and logistics recruitment across Leicester, Coventry and Tamworth. Pickers, packers, FLT drivers and warehouse operatives. 98% fill rate.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/industries/logistics",
  },
  openGraph: {
    title: "Warehouse & Logistics Recruitment | Accept Recruitment",
    description: "Specialist warehouse and logistics recruitment across Leicester, Coventry and Tamworth. Pickers, packers, FLT drivers and warehouse operatives.",
    url: "https://www.acceptrec.co.uk/industries/logistics",
    siteName: "Accept Recruitment",
    locale: "en_GB",
    type: "website",
  },
};

export default function LogisticsPage() {
  return <LogisticsClient />;
}
