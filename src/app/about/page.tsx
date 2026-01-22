import Section from "../../components/Section";

export default function AboutPage() {
  return (
    <main>
      <Section title="About Me">
        <div className="space-y-4 border-l border-white/10 pl-4">
          {/* Intro */}
          <p className="text-sm leading-relaxed text-gray-300">
            I’m a{" "}
            <span className="font-medium text-white">
              frontend-focused full-stack developer
            </span>{" "}
            with a strong interest in UI engineering. I build clean, scalable, and
            responsive user interfaces using{" "}
            <span className="font-medium text-white">
              React, Next.js, TypeScript, and modern UI frameworks
            </span>
            , with a focus on component quality, layout clarity, and interaction
            details.
          </p>

          {/* Background */}
          <p className="text-sm leading-relaxed text-gray-400">
            I’m currently pursuing my B.Tech in Computer & Communication Engineering
            at Manipal University Jaipur. Alongside academics, I’ve worked on
            real-world frontend projects and completed a frontend development
            internship, where I collaborated closely with backend teams and product
            stakeholders to build and refine user-facing features.
          </p>

          {/* UI & Development Approach */}
          <div className="pt-2">
            <h3 className="mb-2 text-sm font-semibold text-white">
              How I approach UI development
            </h3>

            <ul className="list-inside list-disc space-y-1 text-sm text-gray-400">
              <li>Design and build reusable, modular UI components</li>
              <li>Focus on spacing, visual hierarchy, and interaction feedback</li>
              <li>Ensure responsive layouts and cross-device compatibility</li>
              <li>Integrate REST APIs and handle UI state and user interactions</li>
            </ul>
          </div>

          {/* AI-assisted development */}
          <p className="text-sm leading-relaxed text-gray-400">
            I’m comfortable working in{" "}
            <span className="font-medium text-white">
              AI-assisted development workflows
            </span>
            , using AI tools for rapid UI iteration, debugging, refactoring, and
            improving code readability—while still following clean code practices
            and maintaining quality standards.
          </p>

          {/* Future goals */}
          <p className="pt-2 text-sm leading-relaxed text-gray-400">
            I’m currently deepening my understanding of frontend architecture,
            state management patterns, and backend systems, with the goal of
            growing into a{" "}
            <span className="font-medium text-white">
              strong UI-focused full-stack engineer
            </span>{" "}
            who cares deeply about both usability and maintainable code.
          </p>
        </div>
      </Section>
    </main>
  );
}
