import { Cairo as FontSans, Fira_Code as FontMono } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["Inter", "system-ui", "sans-serif"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
