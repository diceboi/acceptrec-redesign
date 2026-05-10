import PermanentRecruitmentClient from "./PermanentRecruitmentClient";

export const metadata = {
  title: "Permanent Recruitment Agency Midlands | Industrial & Logistics | Accept Recruitment",
  description: "Permanent recruitment for operations, logistics and manufacturing roles across the Midlands. 12-week replacement guarantee. 92% retention rate after 12 months.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/permanent-recruitment",
  },
  openGraph: {
    title: "Permanent Recruitment | Accept Recruitment",
    description: "Permanent recruitment for operations, logistics and manufacturing roles. 12-week replacement guarantee.",
    url: "https://www.acceptrec.co.uk/permanent-recruitment",
    siteName: "Accept Recruitment",
    locale: "en_GB",
    type: "website",
  },
};

export default function PermanentRecruitmentPage() {
  return <PermanentRecruitmentClient />;
}
