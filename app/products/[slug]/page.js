import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import SeriesCard from "@/components/SeriesCard";
import { ButtonLink, Eyebrow, TextLink } from "@/components/ui";
import { categories, company, getSeries, series } from "@/lib/catalogue";

export function generateStaticParams() {
  return series.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getSeries(slug);
  if (!s) return {};
  return {
    title: `${s.name} Modular Series | Rizak Industries`,
    description: s.blurb,
    openGraph: { images: [s.hero] },
  };
}

export default async function SeriesPage({ params }) {
  const { slug } = await params;
  const s = getSeries(slug);
  if (!s) notFound();

  const category = categories.find((c) => c.id === s.category);
  const related = series.filter((r) => r.category === s.category && r.slug !== s.slug).slice(0, 3);
  const others = related.length ? related : series.filter((r) => r.slug !== s.slug).slice(0, 3);
  const mail = `mailto:${company.email}?subject=${encodeURIComponent(
    `Quotation Request: ${s.name} Series Workstations`
  )}&body=${encodeURIComponent(
    `Hello Rizak Industries Team,\n\nI am interested in getting a project quotation for the ${s.name} Series (${s.frame}).\n\nPlease let me know the technical drawing and pricing details.\n\nThank you!`
  )}`;

  return (
    <div className="bg-white">
      {/* PRODUCT HERO */}
      <section className="mx-auto max-w-7xl px-5 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider" aria-label="Breadcrumb">
          <Link href="/products" className="hover:text-[#1f5c6b] transition">
            Catalogue
          </Link>
          <span className="text-slate-300">/</span>
          <Link href={`/products?category=${s.category}`} className="hover:text-[#1f5c6b] transition">
            {category?.label || "Workstations"}
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800">{s.name}</span>
        </nav>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#c5dadd] bg-[#e7eff0] px-3 py-1 text-xs font-semibold text-[#1f5c6b] uppercase tracking-wider">
                {category?.label || "Series"}
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                {s.variants.length} Configurations
              </span>
            </div>

            <h1 className="mt-4 text-4xl font-medium tracking-tight text-slate-900 sm:text-6xl">
              {s.name} Series
            </h1>

            <p className="mt-2 text-lg font-semibold text-[#1f5c6b]">
              {s.frame}
            </p>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {s.blurb}
            </p>

            {/* TECH SPECIFICATIONS GRID */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-y border-slate-200 py-6 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3.5">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Profile Type
                </span>
                <span className="mt-1 block text-sm font-semibold text-slate-800 truncate">
                  {s.frame}
                </span>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3.5">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Manufacture
                </span>
                <span className="mt-1 block text-sm font-semibold text-slate-800">
                  Mundka, New Delhi
                </span>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3.5">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Quality Standard
                </span>
                <span className="mt-1 block text-sm font-semibold text-emerald-700">
                  BIFMA & ISO Certified
                </span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={mail}
                className="inline-flex items-center justify-center rounded-full bg-[#1f5c6b] px-7 py-3.5 text-xs font-semibold tracking-wider text-white uppercase shadow-sm transition hover:bg-[#174652] hover:shadow-md active:scale-95"
              >
                Request Quotation For {s.name}
              </a>
              <ButtonLink href="#gallery" variant="secondary">
                View All {s.variants.length} Views
              </ButtonLink>
            </div>
          </div>

          {/* MAIN COVER IMAGE */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg sm:aspect-[5/4]">
            <div className="relative size-full overflow-hidden rounded-xl bg-slate-50">
              <Image
                src={s.cover}
                alt={`${s.name} Series Cover View`}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / CONFIGURATIONS */}
      <section id="gallery" className="scroll-mt-24 border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Eyebrow>Layout Options</Eyebrow>
              <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                {s.name} Configurations & Views
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Click any layout to enlarge. All dimensions, screen partitions, and raceway troughs are manufactured to your project specifications.
              </p>
            </div>
            <a
              href={`tel:${company.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              <span>Consult Factory: {company.phones[0]}</span>
            </a>
          </div>

          <Gallery items={s.variants} />
        </div>
      </section>

      {/* RELATED SERIES */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <Eyebrow>Catalogue Exploration</Eyebrow>
              <h2 className="mt-3 text-2xl font-medium tracking-tight text-slate-900 sm:text-4xl">
                Similar Modular Systems
              </h2>
            </div>
            <TextLink href="/products">All 18 Series</TextLink>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((r, i) => (
              <Reveal key={r.slug} delay={i * 80}>
                <SeriesCard s={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
