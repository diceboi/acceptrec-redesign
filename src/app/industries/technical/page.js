import TechnicalClient from "./TechnicalClient";

export const metadata = {
  title: "Engineering & Technical Recruitment | Midlands Temp & Perm Staffing | Accept Recruitment",
  description: "Specialist engineering and technical recruitment across the Midlands. CNC machinists, maintenance engineers, quality inspectors, assembly technicians and fabrication specialists.",
  alternates: {
    canonical: "https://www.acceptrec.co.uk/industries/technical",
  },
  openGraph: {
    title: "Engineering & Technical Recruitment | Accept Recruitment",
    description: "Specialist engineering and technical recruitment across the Midlands. Precision engineering, manufacturing, and technical specialists.",
    url: "https://www.acceptrec.co.uk/industries/technical",
    siteName: "Accept Recruitment",
    locale: "en_GB",
    type: "website",
  },
};

export default function TechnicalPage() {
  return <TechnicalClient />;
}
