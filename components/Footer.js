import Image from "next/image";
import Link from "next/link";
import { certifications, company, categories, series } from "@/lib/catalogue";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "Company Profile" },
      { href: "/about#machinery", label: "Our Factory" },
      { href: "/about#clients", label: "Our Clients" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Products",
    links: categories.map((c) => ({ href: `/products?category=${c.id}`, label: c.label })),
  },
  {
    title: "Popular Series",
    links: series.slice(0, 5).map((s) => ({ href: `/products/${s.slug}`, label: `${s.name} Series` })),
  },
];

const icons = {
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
  mail: "M4 5h16v14H4zM4 7l8 6 8-6",
  pin: "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
};

function Icon({ d }) {
  return (
    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-[#d9b77a]">
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={d} />
      </svg>
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1b1d1f] text-white/70">
      {/* soft teal glow, top-right */}
      <div className="pointer-events-none absolute -top-40 -right-40 size-[520px] rounded-full bg-[#1f5c6b]/25 blur-[120px]" />

      {/* CTA band */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="flex items-center gap-3 text-[12px] font-medium tracking-[0.22em] text-[#d9b77a] uppercase">
              <span className="h-px w-10 bg-[#d9b77a]" />
              Start your project
            </p>
            <h2 className="mt-3 text-2xl leading-snug font-medium text-white sm:text-[2rem]">
              Planning a new office? <span className="text-[#d9b77a]">Let’s talk.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#d9b77a] px-7 py-3.5 text-[14px] font-medium text-[#2e261f] transition hover:bg-[#e6c993]"
            >
              Request a Quote
              <svg viewBox="0 0 20 20" className="size-4 transition-transform group-hover:translate-x-1" fill="none" aria-hidden="true">
                <path d="M3 10h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href={`tel:${company.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center rounded-full border border-white/20 px-7 py-3.5 text-[14px] font-medium text-white transition hover:border-white/50 hover:bg-white/5"
            >
              Call {company.phones[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_0.9fr_1.4fr] lg:gap-10">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 rounded-xl bg-white px-4 py-2.5">
            <Image src="/catalogue/logo-t.png" alt="Rizak Industries" width={344} height={265} className="h-10 w-auto" />
            <span className="leading-none text-[#1b1d1f]">
              <span className="block text-lg font-semibold tracking-[0.12em]">RIZAK</span>
              <span className="block text-[8px] font-medium tracking-[0.42em] text-[#888]">INDUSTRIES</span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-[14px] leading-relaxed">
            {company.intro}. Manufacturing modular office furniture in Mundka, New Delhi since {company.since}.
          </p>
          <ul className="mt-7 space-y-4 text-[14px]">
            <li className="flex items-start gap-3 leading-relaxed">
              <Icon d={icons.pin} />
              <span className="pt-1.5">{company.address}</span>
            </li>
          </ul>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-[13px] font-medium tracking-[0.18em] text-white uppercase">{col.title}</h3>
            <span className="mt-3 block h-px w-8 bg-[#d9b77a]" />
            <ul className="mt-6 space-y-3 text-[14px]">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group inline-flex items-center gap-2 transition hover:text-white">
                    <span className="h-px w-0 bg-[#d9b77a] transition-all duration-300 group-hover:w-3" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-[13px] font-medium tracking-[0.18em] text-white uppercase">Get in Touch</h3>
          <span className="mt-3 block h-px w-8 bg-[#d9b77a]" />
          <ul className="mt-6 space-y-4 text-[14px]">
            {company.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p.replace(/\s/g, "")}`} className="flex items-center gap-3 transition hover:text-white">
                  <Icon d={icons.phone} />
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 break-all transition hover:text-white lg:break-normal lg:whitespace-nowrap lg:text-[13.5px]">
                <Icon d={icons.mail} />
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Certifications */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-5 py-6 text-[12px] tracking-[0.12em] text-white/45 uppercase sm:px-8">
          <span className="text-[#d9b77a]">Certified</span>
          {certifications.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {company.name}. All rights reserved.</p>
          <p>
            {company.brand} · <span className="text-white/60">{company.tagline}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
