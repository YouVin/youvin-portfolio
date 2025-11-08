import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  title,
  tags,
  href,
  src,
}: {
  title: string;
  tags: string[];
  href: string;
  src: string; // /public 경로 또는 원격 이미지
}) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-4">
        <div className="font-semibold tracking-tight">{title}</div>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-md border px-2 py-1 text-[11px] text-neutral-600"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
