// app/(site)/page.tsx
import HeroSection from "@/app/components/sections/HeroSection";
import SkillsSection from "@/app/components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SiteHeader from "../components/SiteHeader";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <div className="mx-auto max-w-md px-6 -mt-[22vh] md:-mt-[20vh] lg:-mt-[18vh] mb-[12vh]">
        <SiteHeader dock topClass="top-6" />
      </div>

      <div className="space-y-[14vh] md:space-y-[18vh] lg:space-y-[20vh]">
        <SkillsSection variant="teaser" />
        <ProjectsSection />
      </div>
    </main>
  );
}
