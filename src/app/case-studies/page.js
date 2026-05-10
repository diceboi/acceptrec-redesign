import CaseStudiesClient from "./CaseStudiesClient";

export const metadata = {
  title: "Recruitment Case Studies | InPost, Vistry, Poundstretcher | Accept Recruitment",
  description: "Real recruitment success stories. See how Accept Recruitment helps industry leaders scale operations with 98% attendance rates and 100% partner retention.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/case-studies",
  },
  openGraph: {
    title: "Recruitment Case Studies | Accept Recruitment",
    description: "Real recruitment success stories from InPost, Vistry Group and Poundstretcher.",
    url: "https://www.acceptrec.co.uk/case-studies",
    siteName: "Accept Recruitment",
    locale: "en_GB",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
