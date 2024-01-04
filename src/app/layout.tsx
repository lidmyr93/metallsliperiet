import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Stockholm Metallsliperi",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={twMerge(raleway.className, "bg-mainBg")}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
