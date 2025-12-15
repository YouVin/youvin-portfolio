// app/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import ThemeWrapper from "@/app/components/ThemeWrapper";

export const metadata: Metadata = {
  title: "YouVin Portfolio",
  description: "프론트엔드 개발자 유빈 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased transition-colors">
        <ThemeWrapper>
          <main className="min-h-screen bg-background">
            <div className="mx-auto max-w-5xl px-4">{children}</div>
          </main>
          <footer className="mx-auto max-w-5xl px-4 py-12 text-xs bg-background text-neutral-600">
            © {new Date().getFullYear()} YouVin — Frontend Developer
          </footer>
        </ThemeWrapper>
      </body>
    </html>
  );
}
