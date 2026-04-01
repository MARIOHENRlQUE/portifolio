import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mario Henrique — AI Engineer",
  description:
    "AI Engineer especializado em Backend, sistemas distribuídos, LLMs, RAG e agentes autônomos. Feira de Santana, BA — Remoto.",
  keywords: ["AI Engineer", "Backend Engineer", "LLM", "RAG", "Node.js", "TypeScript"],
  openGraph: {
    title: "Mario Henrique — AI Engineer",
    description: "Construindo ecossistemas de IA em produção.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
