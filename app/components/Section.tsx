// "@/components/Section.tsx"
export function Section({
  id,
  className = "",
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={[
        "scroll-mt-28",
        "min-h-[88vh]",
        "py-24 md:py-36 lg:py-40",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}
