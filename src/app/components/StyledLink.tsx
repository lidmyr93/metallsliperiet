import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function StyledLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={twMerge(
        "text-slate-200 hover:text-white hover:underline",
        className
      )}
      target="_blank"
    >
      {children}
    </a>
  );
}
