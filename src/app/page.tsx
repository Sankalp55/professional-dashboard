import { Metadata } from "next";
import SkillTag from "@/src/components/SkillTag";

export const metadata: Metadata = {
  title: "Sankalp Tyagi | Frontend Developer",
  description:
    "Frontend developer skilled in React and Next.js, building scalable user interfaces.",
};


import Header from "@/src/components/Header";
import Section from "@/src/components/Section";
import { internship } from "@/src/data/internship";
import { projects } from "@/src/data/projects";

export default function HomePage() {
  return (
    <main>
      <Header />

      <Section title="Internship">
          <div className="space-y-4">
            {/* Text content */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                {internship.company}
              </h3>

              <p className="text-sm font-medium text-gray-400">
                {internship.role}
              </p>

              <p className="text-sm leading-relaxed text-gray-300">
                {internship.description}
              </p>
            </div>

            {/* Video demo */}
            <div className="pt-2">
              <p className="mb-2 text-xs uppercase tracking-wide text-gray-500">
                UI walkthrough
              </p>

              <video
                src="/crivey-ui-demo.mp4.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full rounded-lg border border-white/10 bg-black"
              />

            </div>
          </div>
      </Section>



      <Section title="Projects">
  <div className="space-y-6">
    {projects.map((project, index) => (
      <div
        key={index}
        className="rounded-lg border border-white/10 bg-[#111118] p-5"
      >
        {/* Project Title */}
        <h3 className="text-lg font-semibold text-white">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="mt-2 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((skill) => (
            <SkillTag key={skill} label={skill} />
          ))}
        </div>
      </div>
    ))}
  </div>
</Section>

    </main>
  );
}
