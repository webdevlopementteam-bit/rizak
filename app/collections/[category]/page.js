import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import SeriesCard from "@/components/SeriesCard";
import { ButtonLink, Eyebrow, TextLink } from "@/components/ui";
import { categories, company, getCategory, series } from "@/lib/catalogue";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) return {};
  return {
    title: `${c.label} | Rizak Industries`,
    description: c.intro,
    openGraph: { images: [c.image] },
  };
}

export default async function CollectionPage({ params }) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) notFound();

  const items = series.filter((s) => s.category === c.id);
  const views = items.reduce((n, s) => n + s.variants.length, 0);
  // A one-series collection (executive, education, computer) shows its photos directly.
  const single = items.length === 1 ? items[0] : null;
  const others = categories.filter((o) => o.id !== c.id);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#2e2a26] pt-16 text-white sm:pt-[108px]">
        <Image src={c.banner} alt="" fill priority quality={90} sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b18]/90 via-[#2e2a26]/60 to-[#2e2a26]/10" />
        <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
          <nav className="flex items-center gap-2 text-[12px] tracking-wider text-white/60 uppercase" aria-label="Breadcrumb">
            <Link href="/products" className="transition hover:text-white">Catalogue</Link>
            <span>/</span>
            <span className="text-white">{c.label}</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] font-medium tracking-tight sm:text-5xl lg:text-[3.6rem]">{c.heading}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{c.intro}</p>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/20 pt-6">
            {[
              { label: items.length === 1 ? "Collection" : "Series", value: String(items.length).padStart(2, "0") },
              { label: "Designs shown", value: views },
              { label: "Made in", value: "New Delhi" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="text-[11px] tracking-[0.2em] text-[#d9b77a] uppercase">{s.label}</dt>
                <dd className="mt-1 text-2xl font-medium">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CATEGORY SWITCHER */}
      <nav className="sticky top-16 z-30 border-b border-[#ece9e3] bg-white/95 backdrop-blur sm:top-[108px]" aria-label="Collections">
        <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 py-3 sm:px-8">
          {categories.map((o) => {
            const on = o.id === c.id;
            return (
              <li key={o.id} className="shrink-0">
                <Link
                  href={`/collections/${o.id}`}
                  aria-current={on ? "page" : undefined}
                  className={`block rounded-full px-4 py-2 text-[13px] transition ${
                    on ? "bg-[#1c1f22] text-white" : "text-[#555] hover:bg-[#f4f4f3] hover:text-[#1c1f22]"
                  }`}
                >
                  {o.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-8 sm:pt-16">
        <div className={`grid gap-px overflow-hidden rounded-2xl border border-[#ece9e3] bg-[#ece9e3] sm:grid-cols-2 ${c.highlights.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {c.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className="bg-white p-6">
              <p className="text-[13px] font-semibold text-[#b08a52]">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 text-[17px] font-medium text-[#1c1f22]">{h.title}</h2>
              <p className="mt-1 text-[14px] leading-relaxed text-[#666]">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {single ? (
        /* PHOTO COLLECTION */
        <section className="mx-auto max-w-7xl px-5 pt-16 pb-24 sm:px-8 sm:pt-20">
          <Reveal className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Eyebrow>The collection</Eyebrow>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#1c1f22] sm:text-[2.4rem]">{single.name}</h2>
              <p className="mt-2 max-w-2xl text-[15px] text-[#666]">{single.blurb} Click any design to enlarge.</p>
            </div>
            <TextLink href={`/products/${single.slug}`}>Full series page</TextLink>
          </Reveal>
          <Gallery items={single.variants} />
        </section>
      ) : (
        <>
          {/* FRAME LINEUP — the leg-frame renders as a quick index into the grid */}
          {items.length > 3 && (
            <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20">
              <Reveal>
                <Eyebrow>Frame lineup</Eyebrow>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#1c1f22] sm:text-[2.4rem]">
                  Pick a frame, <span className="text-[#1f5c6b]">we build the desk.</span>
                </h2>
              </Reveal>
              <div className="-mx-5 mt-8 flex snap-x gap-3 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0">
                {items.map((s) => (
                  <a key={s.slug} href={`#${s.slug}`} className="group w-36 shrink-0 snap-start sm:w-40">
                    <span className="relative block aspect-[3/4] overflow-hidden rounded-xl bg-[#1c1f22]">
                      <Image src={s.hero} alt={`${s.name} frame`} fill sizes="160px" className="object-cover transition duration-500 group-hover:scale-105" />
                    </span>
                    <span className="mt-2 block text-[13px] font-medium text-[#1c1f22] group-hover:text-[#1f5c6b]">{s.name}</span>
                    <span className="block truncate text-[11px] text-[#999]">{s.frame}</span>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* SERIES GRID */}
          <section className="mx-auto max-w-7xl px-5 pt-16 pb-24 sm:px-8 sm:pt-20">
            <Reveal className="mb-10 flex items-center gap-4">
              <h2 className="text-xl font-medium text-[#1c1f22]">All {c.label.toLowerCase()}</h2>
              <span className="h-px flex-1 bg-[#ece9e3]" />
              <span className="text-[13px] text-[#999]">{items.length} series</span>
            </Reveal>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((s, i) => (
                <Reveal key={s.slug} id={s.slug} delay={(i % 3) * 70} className="scroll-mt-48">
                  <SeriesCard s={s} />
                </Reveal>
              ))}
            </div>
          </section>
        </>
      )}

      {/* QUOTE BAND */}
      <section className="bg-[#1c1f22] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[12px] tracking-[0.22em] text-[#d9b77a] uppercase">Factory pricing</p>
            <h2 className="mt-3 max-w-xl text-2xl leading-snug font-medium sm:text-3xl">
              Planning {c.label.toLowerCase()} for your project? Share your layout — we&apos;ll quote within a day.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="/contact" variant="light">Request a Quote</ButtonLink>
            <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="text-[14px] text-white/80 transition hover:text-white">
              or call {company.phones[0]}
            </a>
          </div>
        </div>
      </section>

      {/* OTHER COLLECTIONS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal>
          <Eyebrow>Keep exploring</Eyebrow>
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-[#1c1f22] sm:text-3xl">Other collections</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {others.map((o, i) => (
            <Reveal key={o.id} delay={i * 70}>
              <Link href={`/collections/${o.id}`} className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-[#eee]">
                <Image src={o.image} alt={o.label} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1d1f]/80 to-transparent" />
                <span className="absolute inset-x-4 bottom-4 text-[15px] font-medium text-white">{o.label}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
