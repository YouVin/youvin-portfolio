import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-neutral-900">Projects</h1>
        <p className="max-w-2xl text-sm text-neutral-600">
          다양한 스택으로 직접 설계하고 구현한 작업들입니다.
        </p>
      </header>

      <ul className="grid gap-6">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="rounded-xl border border-neutral-200 p-5 hover:bg-neutral-50 transition-colors"
          >
            <div className="flex flex-col md:flex-row gap-5">
              {/* 썸네일 */}
              {project.thumbnail && (
                <div className="relative w-full md:w-60 h-36 rounded-lg overflow-hidden border border-neutral-200">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 240px"
                    priority
                  />
                </div>
              )}

              {/* 텍스트 정보 */}
              <div className="flex flex-col justify-between flex-1">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="text-lg font-semibold text-neutral-900">
                      {project.title}
                    </h2>
                    <span className="text-xs text-neutral-500">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600">{project.summary}</p>

                  {/* tech stack badges */}
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
                </div>

                {/* 링크들 */}
                <div className="flex flex-wrap gap-3 pt-3 text-sm">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:opacity-80"
                  >
                    자세히 보기 →
                  </Link>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 underline underline-offset-4 hover:opacity-80"
                  >
                    GitHub
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 underline underline-offset-4 hover:opacity-80"
                    >
                      Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
