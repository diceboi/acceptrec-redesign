import { Navbar } from "@/components/sections/Navbar";
// import { Hero } from "@/components/sections/Hero"; // ← régi hero, kommentelve
import { HeroV2 } from "@/components/sections/HeroV2";
import { WI2Section } from "@/components/sections/WI2Section";
import { StatsBar } from "@/components/sections/StatsBar";
import { Industries } from "@/components/sections/Industries";
import { Impact } from "@/components/sections/Impact";
import { AcceptDifference } from "@/components/sections/AcceptDifference";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Blog } from "@/components/sections/Blog";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Hero /> */}
      <HeroV2 />
      <WI2Section />
      <StatsBar />
      <Industries />
      <Impact />
      <AcceptDifference />
      <CaseStudies />
      <Blog />
      <CtaBanner />
      <Footer />
    </main>
  );
}
