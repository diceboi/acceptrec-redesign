import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import WorkforceCostCalculator from "./WorkforceCostCalculator";

export const metadata = {
  title: "Temporary Workforce Cost Calculator | WI² | Accept Recruitment",
  description:
    "Use your own figures to estimate how released administrative capacity, avoided additional headcount and improved retention could offset your recruitment agency margin.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WorkforceCostCalculatorPreviewPage() {
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
