import { useLandingPageLinks } from "@/shared/landing-page/hooks/use-landing-page-links.hook";
import Link from "next/link";

export function LandingPageLinks() {
  const links = useLandingPageLinks();

  return (
    <div className="hidden justify-center items-center gap-4 md:flex">
      {links.map((link) => (
        <Link
          href={link.href ?? ""}
          className="text-base font-"
          key={link.text}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}
