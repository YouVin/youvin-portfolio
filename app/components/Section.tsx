export function Section({
  id,
  className = "",
  children,
  fullHeight = false,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
}) {
  return (
    <section
      id={id}
      className={[
        fullHeight ? "min-h-[86vh] grid place-items-center" : "",
        "scroll-mt-28",
        "py-2 md:py-3",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}
