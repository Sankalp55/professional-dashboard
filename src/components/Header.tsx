import { profile } from "../data/profile";
import Link from "next/link";

export default function Header() {
  return (
    <section className="mb-16 animate-fade-up">

      <h1 className="text-4xl font-bold tracking-tight">
        {profile.name}
      </h1>

      <p className="mt-2 text-xl text-gray-400">
        {profile.role}
      </p>

      <p className="mt-4 max-w-2xl text-gray-400">
        {profile.summary}
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex gap-4">
        <Link
          href={profile.links.resume}
          className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 hover:-translate-y-0.5"

        >
          Resume
        </Link>

        <Link
          href={profile.links.github}
          target="_blank"
          className="rounded-md border border-white/20 px-4 py-2 text-sm hover:bg-white/10 hover:-translate-y-0.5"

        >
          GitHub
        </Link>

        <Link
          href={profile.links.linkedin}
          target="_blank"
          className="rounded-md border border-white/20 px-4 py-2 text-sm hover:bg-white/10 hover:-translate-y-0.5"

        >
          LinkedIn
        </Link>
      </div>
    </section>
  );
}
