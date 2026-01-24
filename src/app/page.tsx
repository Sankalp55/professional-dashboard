import { Metadata } from "next";
import Image from "next/image";

import Header from "@/src/components/Header";
import Section from "@/src/components/Section";
import SkillTag from "@/src/components/SkillTag";
import ContactForm from "@/src/components/ContactForm";

import { internship } from "@/src/data/internship";
import { projects } from "@/src/data/projects";

export const metadata: Metadata = {
  title: "Sankalp Tyagi | Frontend Developer",
  description:
    "Frontend developer skilled in React and Next.js, building scalable user interfaces.",
};

export default function HomePage() {
  return (
    <main>
      <Header />

      <Section title="Internship">
        <div className="space-y-4">
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
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>

              {project.images?.length ? (
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {project.images.map((img, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-md border border-white/10"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        width={800}
                        height={500}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((skill) => (
                  <SkillTag key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Contact">
        <p className="text-sm text-gray-400">
          For contact, leave a message
        </p>

        <ContactForm />
      </Section>
    </main>
  );
}
