type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>

      <div className="rounded-xl border border-white/10 bg-[#14141c] p-6 shadow-sm hover:shadow-lg hover:-translate-y-1">
        {children}
      </div>

    </section>
  );
}
