import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiGit,
  SiGithub,
  SiCloudinary,
  SiNotion,
  SiSlack,
  SiVercel,
  SiJsonwebtokens,
} from "react-icons/si";

export type Variant = "teaser" | "full";

export type SkillIcon = {
  label: string;
  src?: string;
};

export type SkillCategoryId = "frontend" | "backend" | "design" | "tools";

export type SkillCategory = {
  id: SkillCategoryId;
  title: string;
  toneBg: string;
  skills: SkillIcon[];
};

export const ICON_MAP: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  "Tailwind CSS": SiTailwindcss,

  "Node.js": SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  "JWT Auth": SiJsonwebtokens,

  Figma: SiFigma,

  Git: SiGit,
  GitHub: SiGithub,
  Cloudinary: SiCloudinary,
  Notion: SiNotion,
  Slack: SiSlack,
  Vercel: SiVercel,
};

export const BRAND_COLOR: Record<string, string> = {
  React: "#61DAFB",
  "Next.js": "#000000",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  HTML5: "#E34F26",
  "Tailwind CSS": "#38BDF8",

  "Node.js": "#539E43",
  Express: "#000000",
  MongoDB: "#47A248",
  "JWT Auth": "#000000",

  Figma: "#F24E1E",

  Git: "#F05032",
  GitHub: "#181717",
  Cloudinary: "#3448C5",
  Notion: "#000000",
  Slack: "#4A154B",
  Vercel: "#000000",
};

export const TAB_COLOR: Record<SkillCategoryId, string> = {
  frontend: "text-[#d9a8a8]",
  backend: "text-[#9bc7b5]",
  design: "text-[#a7c0e8]",
  tools: "text-[#d6c3a4]",
};

export const CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    toneBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(248,113,113,0.18),transparent_60%)]",
    skills: [
      { label: "React", src: "/icons/frontend/react.svg" },
      { label: "Next.js", src: "/icons/frontend/nextdotjs.svg" },
      { label: "TypeScript", src: "/icons/frontend/typescript.svg" },
      { label: "JavaScript", src: "/icons/frontend/javascript.svg" },
      { label: "HTML5", src: "/icons/frontend/html5.svg" },
      { label: "Tailwind CSS", src: "/icons/frontend/tailwindcss.svg" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    toneBg:
      "bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.20),transparent_60%)]",
    skills: [
      { label: "Node.js", src: "/icons/backend/nodedotjs.svg" },
      { label: "Express", src: "/icons/backend/express.svg" },
      { label: "MongoDB", src: "/icons/backend/mongodb.svg" },
      { label: "JWT Auth", src: "/icons/backend/nodedotjs.svg" },
    ],
  },
  {
    id: "design",
    title: "Design",
    toneBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_60%)]",
    skills: [{ label: "Figma", src: "/icons/design/figma.svg" }],
  },
  {
    id: "tools",
    title: "Tools",
    toneBg:
      "bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_60%)]",
    skills: [
      { label: "Git", src: "/icons/tools/git.svg" },
      { label: "GitHub", src: "/icons/tools/github.svg" },
      { label: "Cloudinary", src: "/icons/tools/cloudinary.svg" },
      { label: "Notion", src: "/icons/tools/notion.svg" },
      { label: "Slack", src: "/icons/tools/slack.svg" },
      { label: "Vercel", src: "/icons/tools/vercel.svg" },
    ],
  },
];
