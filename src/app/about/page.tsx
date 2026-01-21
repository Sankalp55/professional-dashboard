import Section from "../../components/Section" ;

export default function AboutPage() {
  return (
    <main>
      <Section title="About Me">
        <div className="space-y-4 border-l border-white/10 pl-4">
          {/* Intro */}
          <p className="text-sm leading-relaxed text-gray-300">
            I’m a <span className="font-medium text-white">Frontend-focused Full-Stack Developer</span> 
            with experience building responsive, scalable web applications using 
            <span className="font-medium text-white"> React, Next.js, and modern UI frameworks</span>.
            I enjoy turning complex problems into clean, intuitive user interfaces.
          </p>

          {/* Background */}
          <p className="text-sm leading-relaxed text-gray-400">
            Currently, I’m pursuing my B.Tech in Computer & Communication Engineering at 
            Manipal University Jaipur. Alongside academics, I’ve worked on real-world projects 
            and completed a frontend development internship where I collaborated closely with 
            backend teams and designers.
          </p>

          {/* How I work */}
          <div className="pt-2">
            <h3 className="mb-2 text-sm font-semibold text-white">
              How I work
            </h3>

            <ul className="list-inside list-disc space-y-1 text-sm text-gray-400">
              <li>Build reusable, scalable components with clean code practices</li>
              <li>Focus on UI/UX, accessibility, and performance</li>
              <li>Comfortable integrating REST APIs and backend services</li>
              <li>Use AI-assisted tools to speed up development without compromising quality</li>
            </ul>
          </div>

          {/* Future goals */}
          <p className="pt-2 text-sm leading-relaxed text-gray-400">
            I’m currently deepening my understanding of backend systems, system design, 
            and production-grade frontend architectures, with the goal of growing into a 
            <span className="font-medium text-white"> strong full-stack engineer</span>.
          </p>
        </div>
      </Section>
    </main>
  );
}
