import TechnologyClient from "./TechnologyClient";

export const metadata = {
  title: "Recruitment Technology Platform | AcceptPulse & AcceptConnect | Accept Recruitment",
  description: "Technology-driven staffing solutions. AcceptPulse geo-fenced attendance, AcceptConnect workforce messaging, AI coaching and smart matching for recruitment.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/technology",
  },
  openGraph: {
    title: "Recruitment Technology | Accept Recruitment",
    description: "Technology-driven staffing solutions. AcceptPulse, AcceptConnect, AI coaching and smart matching.",
    url: "https://www.acceptrec.co.uk/technology",
    siteName: "Accept Recruitment",
    locale: "en_GB",
    type: "website",
  },
};

export default function TechnologyPage() {
  return <TechnologyClient />;
}
