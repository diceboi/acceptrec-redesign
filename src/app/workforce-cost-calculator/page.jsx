import Link from "next/link";
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
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-6 mb-8">
          <div className="glass-card rounded-2xl border border-teal-5/20 bg-teal-5/5 p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-sm text-white/70">
              Evaluating competing agency proposals? Read our operational guide on{" "}
              <Link
                href="/workforce-intelligence/reducing-agency-labour-costs#compare"
                className="text-teal-4 hover:underline font-semibold"
              >
                how to compare quotes
              </Link>{" "}
              like for like.
            </p>
            <Link
              href="/workforce-intelligence/reducing-agency-labour-costs#compare"
              className="shrink-0 text-xs font-semibold uppercase tracking-wider text-teal-4 hover:text-white px-3.5 py-1.5 rounded-lg border border-teal-5/30 bg-teal-5/10 transition-colors"
            >
              Comparison Guide
            </Link>
          </div>
        </div>
        <WorkforceCostCalculator />
      </main>
      <Footer />
    </div>
  );
}
