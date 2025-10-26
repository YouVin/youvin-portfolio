import { getProjectBySlug } from "@/lib/projects";
import Link from "next/link";

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

  return (
    <section className="space-y-10">
      {/* 헤더 */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h1 className="text-2xl font-bold text-neutral-900">
            {project.title}
          </h1>
          <span className="text-xs text-neutral-500">{project.period}</span>
        </div>

        <p className="text-base text-neutral-600">{project.summary}</p>

        {/* tech stack */}
        <ul className="flex flex-wrap gap-2 text-xs font-medium">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-neutral-700"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* links */}
        <div className="flex flex-wrap gap-3 text-sm pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-neutral-300 bg-white px-3 py-1.5 font-medium text-neutral-800 hover:bg-neutral-100"
          >
            GitHub Repo
          </a>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-neutral-300 bg-white px-3 py-1.5 font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Live Demo
            </a>
          ) : null}

          <Link
            href="/projects"
            className="rounded-lg border border-neutral-200 px-3 py-1.5 text-neutral-600 hover:bg-neutral-50"
          >
            ← Back to Projects
          </Link>
        </div>
      </header>

      {/* 상세 설명 */}
      <section className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">프로젝트 소개</h2>
          <div className="space-y-3 text-sm leading-relaxed text-neutral-700">
            {project.description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900">내 역할</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700">
            {project.role.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}
