import Section from "../../components/Section";
import { projects } from "../../data/projects";
import SkillTag from "../../components/SkillTag";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main>
      <Section title="Projects">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg border border-white/10 bg-[#111118] p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Project Title */}
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>

              {/* Images (ONLY if present and non-empty) */}
              {project.images?.length ? (
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {project.images.map((img: string, i: number) => (
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

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((skill: string) => (
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
