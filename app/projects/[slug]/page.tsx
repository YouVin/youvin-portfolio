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
      <section className="space-y-6 px-4 sm:px-6 lg:px-10">
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

  // -------------------------------
  // 공통 스타일 (폰 프레임 크기 통일)
  // -------------------------------
  const PHONE_SIZE = "w-[200px] h-[380px] md:w-[200px] md:h-[380px]";
  const PHONE_FRAME =
    "relative rounded-[28px] border border-neutral-200 bg-white overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)]";
  const PHONE_IMG = "object-contain bg-white p-3 md:p-4";

  // --- 렌더링 헬퍼: 2열 레이아웃용 이미지 박스 ---
  function renderSectionImage(section: {
    layout: "single-vertical" | "single-horizontal" | "multi-vertical";
    images: string[];
    title: string;
    align?: "left" | "right";
  }) {
    // 공통 단일 카드
    const singleCard = (
      <div className={`${PHONE_FRAME} ${PHONE_SIZE}`}>
        <Image
          src={section.images[0]}
          alt={section.title}
          fill
          className={PHONE_IMG}
        />
      </div>
    );

    if (section.layout === "single-vertical") {
      return (
        <div className="flex justify-center items-center md:w-1/2">
          {singleCard}
        </div>
      );
    }

    if (section.layout === "single-horizontal") {
      return (
        <div className="flex justify-center items-center md:w-1/2">
          {singleCard}
        </div>
      );
    }

    // multi-vertical은 renderStage로 처리
    return null;
  }

  // --- 렌더링 헬퍼: 여러 이미지 스테이지 ---
  function renderStage(images: string[], title: string) {
    return (
      <div
        className="flex justify-center items-start gap-6 md:gap-10
                    mb-12 md:mb-20 pb-6 md:pb-12"
      >
        {" "}
        {images.map((imgSrc, i) => (
          <figure
            key={i}
            className={`${PHONE_FRAME} ${PHONE_SIZE} ${
              i === 1 ? "translate-y-6 md:translate-y-8" : ""
            }`}
          >
            <Image
              src={imgSrc}
              alt={`${title} UI-${i}`}
              fill
              sizes="(max-width: 768px) 200px, 200px"
              className={PHONE_IMG}
            />
          </figure>
        ))}
      </div>
    );
  }

  // -------------------------------------
  // 실제 렌더링 파트
  // -------------------------------------
  return (
    <section className="space-y-20 px-4 sm:px-6 lg:px-10">
      {/* HERO — Glass Overlay Card */}
      {project.heroImage ? (
        <section className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
          <div className="relative w-full h-60 md:h-[300px]">
            <Image
              src={project.heroImage!}
              alt={`${project.title} hero`}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

            <div className="absolute left-4 top-4 md:left-6 md:top-6 max-w-[680px]">
              <div className="backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-2xl p-4 md:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.15)] space-y-3">
                <div className="flex items-baseline justify-between gap-3">
                  <h1 className="text-lg md:text-2xl font-bold tracking-tight">
                    {project.title}
                  </h1>
                  <span className="text-[11px] md:text-xs text-white/80">
                    {project.period}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-[10px] md:text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/40 bg-white/10"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <p className="text-[12px] md:text-sm leading-relaxed line-clamp-2">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 text-[12px] md:text-sm font-medium">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-3 py-1.5 hover:bg-neutral-100 transition"
                  >
                    GitHub Repo
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-white/90 text-neutral-900 px-3 py-1.5 hover:bg-white transition"
                    >
                      Live Demo
                    </a>
                  )}

                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1 rounded-lg border border-white/40 bg-white/10 text-white px-3 py-1.5 hover:bg-white/20 transition"
                  >
                    ← Back to Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <header className="space-y-4" />
      )}

      {/* ② 기술 하이라이트 (간격 넉넉하게) */}
      {project.techSections && project.techSections.length > 0 ? (
        <section className="space-y-14">
          <h2 className="text-lg font-semibold text-neutral-900">
            기술 하이라이트
          </h2>

          {project.techSections.map((section, idx) => {
            const imgCount = section.images?.filter(Boolean)?.length ?? 0;
            const isStage = section.layout === "multi-vertical" && imgCount > 1;
            if (isStage) {
              return (
                <div key={idx} className="space-y-6 md:space-y-10">
                  <div
                    className="
          flex flex-col items-center text-center
          md:flex-row md:items-start md:justify-between md:text-left md:gap-24
        "
                  >
                    <h3
                      className="
            text-xl font-semibold text-neutral-900
            md:w-[32%] md:shrink-0 md:pr-8
          "
                    >
                      {section.title}
                    </h3>
                    <p
                      className="
            text-neutral-600 text-sm leading-7 whitespace-pre-line
            md:w-[68%] md:pl-4
          "
                    >
                      {section.body}
                    </p>
                  </div>

                  {renderStage(section.images, section.title)}
                </div>
              );
            }

            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row gap-12 ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                } items-center md:items-start`}
              >
                {renderSectionImage(section)}
                <div
                  className={`md:w-[45%] md:max-w-[400px] space-y-2 ${
                    idx % 2 === 1
                      ? "text-center md:text-right"
                      : "text-center md:text-left"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {section.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed tracking-normal whitespace-pre-line">
                    {section.body}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      ) : null}

      {/* 화면 미리보기 (그대로) */}
      {project.previewImages && project.previewImages.length > 0 ? (
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-neutral-900">
            화면 미리보기
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {project.previewImages.map((shot, idx) => (
              <div
                key={idx}
                className="relative w-full h-64 md:h-64 rounded-lg border border-neutral-200 bg-neutral-50 overflow-hidden shadow-sm"
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
