import type { IconType } from "react-icons";
import { SiTistory, SiNotion, SiReact } from "react-icons/si";

export type BlogCard = {
  title: string;
  desc: string;
  href: string;
  icon: IconType;
  toneBg: string;
  meta: string;
};

export const BLOG_CARDS: BlogCard[] = [
  {
    title: "Tistory · UX / Cart 기록",
    desc: "장바구니 흐름, Optimistic UI, 렌더링 최적화 등 실제 문제 해결 과정을 정리합니다.",
    href: "https://youvin.tistory.com",
    icon: SiTistory,
    toneBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(248,113,113,0.18),transparent_60%)]",
    meta: "실전 트러블슈팅",
  },
  {
    title: "Notion · Deep-dive 노트",
    desc: "딥다이브 책을 기반으로 JavaScript 학습 내용을 구조적으로 정리하고, 다시 꺼내볼 수 있게 관리합니다.",
    href: "https://beeni.notion.site/DeepDive-1cdc20e89678807bb33cf08ef76a0ede?source=copy_link",
    icon: SiNotion,
    toneBg:
      "bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.20),transparent_60%)]",
    meta: "개념 정리",
  },
  {
    title: "Notion · SQL 첫걸음 하루 30분",
    desc: "SQL 첫걸음 하루 30분 책을 통한 기본 SQL문법 SELECT부터 JOIN까지 핵심 문법을 단계별로 정리합니다.",
    href: "https://www.notion.so/beeni/SQL-30-99e7ce3728e24e9b990bddecf6a48027",
    icon: SiNotion,
    toneBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.18),transparent_60%)]",
    meta: "Database",
  },
  {
    title: "Velog · 리액트를 다루는 기술 / Algorithm",
    desc: "리액트를 다루는 기술 책을 통한 React 학습 기록과 백준 문제 풀이를 정리합니다.",
    href: "https://velog.io/@timevelope/posts",
    icon: SiReact,
    toneBg:
      "bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_60%)]",
    meta: "학습 기록",
  },
];
