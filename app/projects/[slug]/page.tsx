import { getProjectBySlug } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="space-y-6">
        <h1 className="text-xl font-bold text-red-600">
          프로젝트를 찾을 수 없어요.
        </h1>
        <Link
          href="/projects"
          className="text-sm text-neutral-600 underline underline-offset-4"
        >
          ← Projects로 돌아가기
        </Link>
      </section>
    );
  }

  // --- 렌더링 헬퍼: 이미지 영역 ---
  function renderSectionImage(section: {
    layout: "single-vertical" | "single-horizontal" | "multi-vertical";
    images: string[];
    title: string;
    align?: "left" | "right";
  }) {
    const singleVerticalBox = (
      <div className="relative w-[200px] h-[380px] rounded-2xl overflow-hidden border border-neutral-200 shadow-lg bg-white">
        <Image
          src={section.images[0]}
          alt={section.title}
          fill
          className="object-contain bg-white"
        />
      </div>
    );

    if (section.layout === "single-vertical") {
      return (
        <div
          className={["flex justify-center items-center md:w-1/2"].join(" ")}
        >
          {singleVerticalBox}
        </div>
      );
    }

    if (section.layout === "single-horizontal") {
      return (
        <div
          className={[
            "flex justify-center items-center",
            "w-full md:w-1/2",
          ].join(" ")}
        >
          <div className="relative w-full h-[180px] rounded-xl overflow-hidden border border-neutral-200 shadow-lg bg-white">
            <Image
              src={section.images[0]}
              alt={section.title}
              fill
              className="object-contain bg-white"
            />
          </div>
        </div>
      );
    }

    if (section.layout === "multi-vertical") {
      return (
        <div
          className={["flex justify-center items-center gap-4 md:w-1/2"].join(
            " "
          )}
        >
          {section.images.map((imgSrc, i) => (
            <div
              key={i}
              className="relative w-[200px] h-[380px] rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-white"
            >
              <Image
                src={imgSrc}
                alt={`${section.title}-${i}`}
                fill
                className="object-contain bg-white"
              />
            </div>
          ))}
        </div>
      );
    }

    return null;
  }

  return (
    <section className="space-y-16">
      {/* 1. HERO 영역 (그대로 두고) */}
      {project.heroImage ? (
        <section className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
          <div className="relative w-full h-[220px] md:h-[260px]">
            <Image
              src={project.heroImage}
              alt={`${project.title} hero`}
              fill
              className="object-cover object-center"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

            <div className="absolute left-5 top-5 md:left-8 md:top-8 max-w-[80%] text-white space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1">
                  <h1 className="text-xl md:text-2xl font-bold leading-tight text-white">
                    {project.title}
                  </h1>
                  <p className="text-xs md:text-sm text-white/80 font-medium">
                    {project.period}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 text-[10px] md:text-[11px] font-medium">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/10 px-2 py-1 text-white border border-white/30 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-[11px] md:text-sm leading-relaxed text-white/90">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 text-[11px] md:text-sm font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-white text-neutral-900 px-3 py-1.5 hover:bg-neutral-100 transition"
                >
                  GitHub Repo
                </a>

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-white/90 text-neutral-900 px-3 py-1.5 hover:bg-white transition"
                  >
                    Live Demo
                  </a>
                ) : null}

                <Link
                  href="/projects"
                  className="inline-block rounded-lg bg-white/20 border border-white/30 text-white px-3 py-1.5 hover:bg-white/30 transition"
                >
                  ← Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <header className="space-y-4">{/* ... */}</header>
      )}

      {/* 2. 기술 하이라이트 */}
      {project.techSections && project.techSections.length > 0 ? (
        <section className="space-y-12">
          <h2 className="text-lg font-semibold text-neutral-900">
            기술 하이라이트
          </h2>

          {project.techSections.map((section, idx) => {
            const isReversed = idx % 2 === 1; // 0,2번째는 기본 / 1,3번째는 반전

            const alignSide = isReversed ? "right" : "left";

            return (
              <div
                key={idx}
                className={[
                  "flex flex-col items-center gap-10",
                  isReversed ? "md:flex-row-reverse" : "md:flex-row",
                ].join(" ")}
              >
                {/* 이미지 영역 */}
                {renderSectionImage({
                  ...section,
                  align: alignSide,
                })}

                {/* 텍스트 영역 */}
                <div
                  className={[
                    "md:w-1/2 space-y-3",
                    isReversed
                      ? "text-center md:text-right"
                      : "text-center md:text-left",
                  ].join(" ")}
                >
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {section.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {section.body}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      ) : null}

      {/* 3. 화면 미리보기 (원래 섹션, 그대로 두되 높이 좀만 줄여도 됨) */}
      {project.previewImages && project.previewImages.length > 0 ? (
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-neutral-900">
            화면 미리보기
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {project.previewImages.map((shot, idx) => (
              <div
                key={idx}
                className="relative w-full h-44 md:h-56 rounded-lg border border-neutral-200 bg-neutral-50 overflow-hidden shadow-sm"
              >
                <Image
                  src={shot.src}
                  alt={shot.caption || `preview ${idx + 1}`}
                  fill
                  className="object-cover object-center"
                />

                {shot.caption ? (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white p-4">
                    <p className="text-xs font-medium leading-snug">
                      {shot.caption}
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
}
