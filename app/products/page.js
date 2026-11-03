import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import FilteredGrid from "@/components/FilteredGrid";
import Reveal from "@/components/Reveal";
import { Eyebrow, PageHero } from "@/components/ui";
import { categories, series } from "@/lib/catalogue";

export const metadata = {
  title: "Modular Furniture Series & Workstations",
  description:
    "Explore the complete Rizak Industries catalogue — 18+ modular metal leg frame series, executive desks, conference tables, classroom and computer furniture.",
};

const options = [
  { title: "Any size", text: "Lengths, depths and seat counts built to your floor plan.", icon: "M3 7h18M3 17h18M7 3v18M17 3v18" },
  { title: "Powder-coat colours", text: "Leg frames finished in the shade your interior needs.", icon: "M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z" },
  { title: "Laminate finishes", text: "Wood, white and solid tops in premium laminates.", icon: "M4 6h16v4H4zM4 14h16v4H4z" },
  { title: "Screens & storage", text: "Modesty panels, fabric screens and matching pedestals.", icon: "M4 4h16v10H4zM8 20h8M12 14v6" },
];

const countFor = (id) => (id === "all" ? series.length : series.filter((s) => s.category === id).length);

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <PageHero image="/catalogue/slide-lifestyle-1.webp" eyebrow="Our Collection" title="Furniture engineered for every workspace.">
        <p className="mt-5 max-w-xl text-base sm:text-lg">
          {series.length} series across metal and wood — each available in the grade, size and finish your project needs.
        </p>
      </PageHero>

      {/* CATEGORY TILES */}
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20">
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>Browse by category</Eyebrow>
            <h2 className="mt-5 text-3xl leading-tight font-medium tracking-tight text-[#1c1f22] sm:text-[2.4rem]">
              Find the right fit <span className="text-[#1f5c6b]">for your space.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={i * 70} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
              <Link href={`/collections/${c.id}`} className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-[#eee]">
                <Image src={c.image} alt={c.label} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1d1f]/85 via-[#1b1d1f]/20 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 text-white">
                  <p className="text-[11px] tracking-[0.18em] text-[#d9b77a] uppercase">{countFor(c.id)} series</p>
                  <h3 className="mt-1 text-[17px] leading-snug font-medium">{c.label}</h3>
                  <p className="mt-1 hidden text-[12px] leading-snug text-white/70 sm:block">{c.note}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERIES GRID */}
      <section id="series" className="mx-auto max-w-7xl scroll-mt-28 px-5 pt-20 pb-24 sm:px-8 sm:pt-24">
        <Suspense fallback={<div className="h-[60vh]" />}>
          <FilteredGrid />
        </Suspense>
      </section>

      {/* MADE TO SPEC */}
      <section className="bg-[#f7f5f1] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-30px_rgb(0_0_0/0.35)]">
              <Image src="/catalogue/hero-j27.webp" alt="Rizak leg frames in custom powder-coat colours" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-white px-6 py-4 shadow-xl sm:left-10">
              <p className="text-[11px] tracking-[0.18em] text-[#a8763a] uppercase">Every order</p>
              <p className="mt-1 text-lg font-medium text-[#1c1f22]">Made to your specification</p>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Customisation</Eyebrow>
              <h2 className="mt-5 text-3xl leading-tight font-medium tracking-tight text-[#1c1f22] sm:text-[2.4rem]">
                Your size. Your finish. <span className="text-[#1f5c6b]">Our factory.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[#666]">
                Our products are available in various grades and specifications as per the requirement of the customers — manufactured in-house and installed by our own team.
              </p>
            </Reveal>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {options.map((o, i) => (
                <Reveal key={o.title} delay={i * 80} className="rounded-2xl border border-[#ebe7df] bg-white p-5">
                  <span className="grid size-11 place-items-center rounded-full bg-[#e7eff0] text-[#1f5c6b]">
                    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={o.icon} />
                    </svg>
                  </span>
                  <h3 className="mt-4 text-[16px] font-medium text-[#1c1f22]">{o.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#666]">{o.text}</p>
                </Reveal>
              ))}
            </div>
            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#1c1f22] px-8 py-3.5 text-[15px] font-medium text-white transition hover:bg-[#1f5c6b]"
            >
              Discuss your requirement
              <svg viewBox="0 0 20 20" className="size-4 transition-transform group-hover:translate-x-1" fill="none" aria-hidden="true">
                <path d="M3 10h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
