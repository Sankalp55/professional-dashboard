type SkillTagProps = {
  label: string;
};

export default function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-gray-300">
      {label}
    </span>
  );
}
