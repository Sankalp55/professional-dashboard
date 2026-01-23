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
            stakeholders to translate designs into high-quality user interfaces.
          </p>

          {/* UI & Development Approach */}
          <div className="pt-2">
            <h3 className="mb-2 text-sm font-semibold text-white">
              How I approach UI development
            </h3>

            <ul className="list-inside list-disc space-y-1 text-sm text-gray-400">
              <li>
                Build reusable, modular UI components using React and Next.js
              </li>
              <li>
                Implement smooth interactions and animations using{" "}
                <span className="font-medium text-white">
                  Framer Motion
                </span>
              </li>
              <li>
                Translate{" "}
                <span className="font-medium text-white">
                  Figma
                </span>{" "}
                designs into pixel-accurate, responsive layouts
              </li>
              <li>
                Work with{" "}
                <span className="font-medium text-white">
                  Wix-based workflows
                </span>{" "}
                when required, customizing and extending UI behavior beyond
                templates
              </li>
              <li>
                Integrate{" "}
                <span className="font-medium text-white">
                  REST APIs
                </span>{" "}
                and manage UI state, loading states, and error handling
              </li>
              <li>
                Ensure responsive layouts and consistent behavior across devices
              </li>
            </ul>
          </div>

          {/* AI-assisted development */}
          <p className="text-sm leading-relaxed text-gray-400">
            I’m comfortable working in{" "}
            <span className="font-medium text-white">
              AI-assisted development workflows
            </span>
            , using AI tools to accelerate UI iteration, debug issues, refactor
            components, and improve code readability—while still following clean
            code practices and maintaining quality standards.
          </p>

          {/* Future goals */}
          <p className="pt-2 text-sm leading-relaxed text-gray-400">
            I’m currently deepening my understanding of frontend architecture,
            state management patterns, and backend systems, with the goal of
            growing into a{" "}
            <span className="font-medium text-white">
              strong UI-focused full-stack engineer
            </span>{" "}
            who cares deeply about usability, performance, and maintainable code.
          </p>
        </div>
      </Section>
    </main>
  );
}
