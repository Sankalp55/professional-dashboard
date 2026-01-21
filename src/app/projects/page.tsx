import Section from "@/src/components/Section";
import { projects } from "@/src/data/projects";
import SkillTag from "../../components/SkillTag";


export default function ProjectsPage() {
  return (
    <main>
      <Section title="Projects">
  <div className="grid gap-6">
    {projects.map((project, index) => (
      <article
          key={index}
          style={{ animationDelay: `${index * 120}ms` }}
          className="animate-fade-up rounded-lg border border-white/10 bg-[#111118] p-5 hover:-translate-y-1 hover:shadow-md">
        

        <h3 className="text-lg font-semibold">
          {project.title}
        </h3>

        <p className="mt-2 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((skill: string) => (
            <SkillTag key={skill} label={skill} />
          ))}
        </div>

      </article>
    ))}
  </div>
</Section>

    </main>
  );
}
