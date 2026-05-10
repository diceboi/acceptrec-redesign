import GetStartedClient from "./GetStartedClient";

export const metadata = {
  title: "Hire Temp & Permanent Staff Midlands | Get a Quote | Accept Recruitment",
  description: "Get started with Accept Recruitment. Request a staffing quote for warehouse, manufacturing, food production or driving staff across Leicester, Coventry and Tamworth.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/get-started",
  },
  openGraph: {
    title: "Get Started | Accept Recruitment",
    description: "Request a staffing quote for warehouse, manufacturing, food production or driving staff across the Midlands.",
    url: "https://www.acceptrec.co.uk/get-started",
    siteName: "Accept Recruitment",
    locale: "en_GB",
    type: "website",
  },
};

export default function GetStartedPage() {
  return <GetStartedClient />;
}
