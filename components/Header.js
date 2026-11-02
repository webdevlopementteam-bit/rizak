"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company } from "@/lib/catalogue";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/products?category=workstations", label: "Workstations" },
  { href: "/products?category=executive", label: "Executive" },
  { href: "/products?category=education", label: "Education" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent over the full-screen slider on the home page only.
  const solid = pathname !== "/" || scrolled || open;
  const tone = solid ? "text-[#333]" : "text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-white shadow-[0_1px_0_#e5e5e5]" : "bg-transparent"
      }`}
    >
      <div className={`border-b ${solid ? "border-[#ececec]" : "border-white/25"}`}>
        <div className={`mx-auto flex h-16 max-w-6xl items-center justify-between px-5 ${tone}`}>
          <a
            href={`tel:${company.phones[0].replace(/\s/g, "")}`}
            className="hidden items-center gap-2 text-xs tracking-wide sm:flex"
          >
            <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
            </svg>
            {company.phones[0]}
          </a>

          <Link href="/" className="flex items-center gap-2.5 sm:absolute sm:left-1/2 sm:-translate-x-1/2" aria-label="Rizak Industries home">
            <Image src="/catalogue/logo-t.png" alt="" width={344} height={265} className="h-9 w-auto" priority />
            <span className="leading-none">
              <span className="block text-lg font-semibold tracking-[0.12em]">RIZAK</span>
              <span className="block text-[8px] font-medium tracking-[0.42em] opacity-70">INDUSTRIES</span>
            </span>
          </Link>

          <Link href="/contact" className="hidden items-center gap-2 text-xs tracking-wide uppercase sm:flex">
            <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M4 4h16v16H4z" />
              <path d="m4 6 8 7 8-7" />
            </svg>
            Get a Quote
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative grid size-10 place-items-center sm:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`absolute h-0.5 w-5 bg-current transition ${open ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute h-0.5 w-5 bg-current transition ${open ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </div>

      <nav className={`hidden sm:block ${tone}`}>
        <ul className="mx-auto flex h-11 max-w-6xl items-center justify-center gap-10 px-5 text-[13px] lg:gap-14">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-opacity hover:opacity-60">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`grid bg-white transition-all duration-300 sm:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <nav className="overflow-hidden" onClick={(e) => e.target.closest("a") && setOpen(false)}>
          <ul className="px-5 pb-4">
            {links.map((l) => (
              <li key={l.href} className="border-b border-[#ececec]">
                <Link href={l.href} className="block py-3.5 text-sm text-[#333]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
