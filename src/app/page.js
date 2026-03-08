import { Navbar } from "@/components/sections/Navbar";
import { AnnouncementBanner } from "@/components/sections/AnnouncementBanner";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Industries } from "@/components/sections/Industries";
import { Impact } from "@/components/sections/Impact";
import { AcceptDifference } from "@/components/sections/AcceptDifference";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <AnnouncementBanner />
      <Navbar />
      <Hero />
      <StatsBar />
      <Industries />
      <Impact />
      <AcceptDifference />
      <CaseStudies />
      <Footer />
    </main>
  );
}
