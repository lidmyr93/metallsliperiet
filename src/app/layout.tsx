import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

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
      </body>
    </html>
  );
}
