export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-lg border bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm hover:bg-neutral-50">
      {label}
    </span>
  );
}
