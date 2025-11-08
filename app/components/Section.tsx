// components/Section.tsx
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
        "min-h-[86vh]",
        "grid place-items-center",
        "py-16 md:py-24",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}
