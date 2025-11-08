// app/(site)/page.tsx
import AboutSection from "@/app/components/sections/AboutSection";
import SkillsSection from "@/app/components/sections/SkillsSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="space-y-[14vh] md:space-y-[18vh] lg:space-y-[20vh]">
        <AboutSection variant="teaser" />
        <SkillsSection variant="teaser" />
        <ProjectsSection variant="teaser" />
      </div>
    </main>
  );
}
