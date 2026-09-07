import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import WorkforceCostCalculator from "./WorkforceCostCalculator";

export const metadata = {
  title: "Temporary Workforce Cost Calculator | WI² | Accept Recruitment",
  description:
    "Could your recruitment agency pay for itself? Use your own figures to calculate how avoided headcount, released administrative capacity and reduced early attrition compare with agency margin.",
  keywords: [
    "workforce cost calculator",
    "temporary recruitment ROI",
    "workforce intelligence",
    "agency margin comparison",
    "worker retention cost",
    "Accept Recruitment WI2",
  ],
  alternates: {
    canonical: "https://www.acceptrec.co.uk/workforce-cost-calculator",
  },
  openGraph: {
    title: "Temporary Workforce Cost Calculator | WI² | Accept Recruitment",
    description:
      "Could your recruitment agency pay for itself? Compare your agency margin against released admin capacity and avoided early attrition.",
    url: "https://www.acceptrec.co.uk/workforce-cost-calculator",
    siteName: "Accept Recruitment",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Temporary Workforce Cost Calculator | Accept Recruitment",
    description:
      "Could your recruitment agency pay for itself? Calculate the net operational value of released capacity and improved worker retention.",
  },
};

export default function WorkforceCostCalculatorLivePage() {
  return (
    <div className="min-h-screen bg-navy-950 text-white selection:bg-teal-5 selection:text-white font-sans">
      <Navbar />
      <main className="pt-16">
        <WorkforceCostCalculator />
      </main>
      <Footer />
    </div>
  );
}
