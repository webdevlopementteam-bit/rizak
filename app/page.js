import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { certifications, clientLogos, company, machinery, series } from "@/lib/catalogue";

const slides = [
  {
    title: "Office Workstations",
    heading: "Workstations engineered for everyday work.",
    text: "Modular desking on our own metal leg frames — from single desks to long benching runs, made to your layout and finish.",
    image: "/catalogue/slide-lifestyle-1.webp",
    href: "/products?category=workstations",
  },
  {
    title: "Conference Tables",
    heading: "Meeting rooms that leave an impression.",
    text: "Boardroom and conference tables with tapered steel legs and integrated cable management, sized for your room.",
    image: "/catalogue/slide-y6-b.webp",
    href: "/products?category=conference",
  },
  {
    title: "Executive Cabins",
    heading: "Cabins finished in rich wood laminates.",
    text: "Executive desks, L-tables and storage crafted on our in-house wood line, with matching cabinets and credenzas.",
    image: "/catalogue/slide-exec-1-1.webp",
    href: "/products?category=executive",
  },
  {
    title: "Manager Desks",
    heading: "Bright, modern cabins for leaders.",
    text: "Manager and director desks with matching storage and modesty panels — designed for light-filled, contemporary offices.",
    image: "/catalogue/slide-j26-1.webp",
    href: "/products?category=executive",
  },
];

const reasons = [
  {
    title: "Project Consultation",
    text: "We understand your space, suggest the right models, materials and specifications to match your needs.",
    image: "/catalogue/why-consult.webp",
    accent: "#0f4f4a",
    tint: "#e6f0ee",
    icon: "M8 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2 20v-1a6 6 0 0 1 9.5-4.9M14 4h6a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 20 11h-2l-2.5 2v-2H14a1.5 1.5 0 0 1-1.5-1.5v-4A1.5 1.5 0 0 1 14 4z",
  },
  {
    title: "Metal Fabrication",
    text: "Leg frames are laser-cut, bent and powder-coated in our factory.",
    image: "/catalogue/why-metal.webp",
    accent: "#1d4fa8",
    tint: "#e8eef9",
    icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z",
  },
  {
    title: "Wood Processing",
    text: "Tops, storages and cabins are cut and edged on CNC wood machinery for precise finishing.",
    image: "/catalogue/why-wood.webp",
    accent: "#a8763a",
    tint: "#f8efe2",
    icon: "M12 3 2 8l10 5 10-5zM2 12l10 5 10-5M2 16l10 5 10-5",
  },
  {
    title: "Installation & Support",
    text: "Dedicated teams for installation and reliable after-sales support.",
    image: "/catalogue/why-install.webp",
    accent: "#0f4f4a",
    tint: "#e6f0ee",
    icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z",
  },
];

const featured = [
  { label: "Workstations", href: "/products?category=workstations", image: "/catalogue/lifestyle-1.webp" },
  { label: "Executive Desks", href: "/products?category=executive", image: "/catalogue/exec-1-1.webp" },
  { label: "Manager Desks", href: "/products/ri-j26", image: "/catalogue/j26-1.webp" },
  { label: "Conference Tables", href: "/products?category=conference", image: "/catalogue/y6-b.webp", wide: true },
  { label: "Open-Plan Benching", href: "/products?category=workstations", image: "/catalogue/lifestyle-2.webp", wide: true },
];

const stats = [
  { value: String(company.since), label: "Established", icon: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4M8 14h1M12 14h1M16 14h1M8 17h1M12 17h1" },
  { value: `${series.length}`, label: "Product Series", icon: "M12 3 4 7v10l8 4 8-4V7zM4 7l8 4 8-4M12 11v10" },
  { value: String(certifications.length), label: "Certifications", icon: "M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6zM9 12l2 2 4-4" },
  { value: company.factoryArea, label: "Factory Area", icon: "M3 21V10l5 3V10l5 3V10l5 3V5h3v16zM7 17h2M12 17h2M17 17h2" },
];

const explore = [
  { tag: "Products", title: "Browse every workstation and leg-frame series", href: "/products", image: "/catalogue/c50-b.webp" },
  { tag: "Company", title: "Learn about Rizak Industries and our certifications", href: "/about", image: "/catalogue/3060-b.webp" },
  { tag: "Quotation", title: "Share your floor plan and request factory pricing", href: "/contact", image: "/catalogue/2575-b.webp" },
];

function SectionTitle({ title, sub }) {
  return (
    <Reveal className="text-center">
      <h2 className="text-2xl font-semibold tracking-wide text-[#222] uppercase sm:text-[2rem]">{title}</h2>
      {sub && <p className="mx-auto mt-3 max-w-2xl text-[14px] text-[#666]">{sub}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <HeroSlider slides={slides} />

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-[#f4f4f3] py-14 sm:py-16">
        {/* soft background arcs */}
        <div className="pointer-events-none absolute -top-40 -left-40 size-[520px] rounded-full bg-white/60" />
        <div className="pointer-events-none absolute -right-48 -bottom-56 size-[620px] rounded-full bg-white/50" />

        <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <Reveal className="text-center">
            <p className="flex items-center justify-center gap-5 text-[12px] font-semibold tracking-[0.45em] text-[#2f4a3a] uppercase sm:text-[13px]">
              <span className="h-px w-12 bg-[#b08a52] sm:w-20" />
              Our Process
              <span className="h-px w-12 bg-[#b08a52] sm:w-20" />
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#1c1f22] uppercase sm:text-5xl">
              Why Choose <span className="text-[#0f4f4a]">Rizak</span>
            </h2>
            <p className="mx-auto mt-3 max-w-4xl text-[14px] text-[#666] sm:text-[16px]">
              From the first drawing to final installation, we handle every stage of your furniture project.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 90} className="group flex flex-col overflow-hidden bg-white shadow-[0_8px_30px_-14px_rgb(0_0_0/0.18)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgb(0_0_0/0.25)]">
                <div className="flex-1 px-6 pt-5 pb-5 lg:px-7">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[22px] font-semibold" style={{ color: r.accent }}>{String(i + 1).padStart(2, "0")}</p>
                      <span className="mt-1.5 block h-0.5 w-12" style={{ backgroundColor: r.accent }} />
                    </div>
                    <span className="grid size-14 place-items-center rounded-full" style={{ backgroundColor: r.tint }}>
                      <svg viewBox="0 0 24 24" className="size-6 text-[#1c1f22]" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d={r.icon} />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-4 text-[17px] font-semibold whitespace-nowrap text-[#1c1f22] xl:text-[19px]">{r.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#666]">{r.text}</p>
                </div>
                <div className="relative aspect-[16/8] overflow-hidden">
                  <Image src={r.image} alt={r.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
          <SectionTitle title="Featured Products" sub="Furniture designed to work harder for your team — in the grade and finish your project needs." />
          <div className="mt-14 grid gap-3 sm:grid-cols-6">
            {featured.map((f, i) => (
              <Reveal key={f.label} delay={(i % 3) * 90} className={f.wide ? "sm:col-span-3" : "sm:col-span-2"}>
                <Link href={f.href} className="group relative block overflow-hidden bg-[#eee]">
                  <div className={`relative ${f.wide ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                    <Image src={f.image} alt={f.label} fill sizes={f.wide ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 640px) 33vw, 100vw"} className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-[15px] font-medium text-white">{f.label}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="relative overflow-hidden bg-[#423930] text-white">
        <Image
          src="/catalogue/banner-office.webp"
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* warm brown wash behind the copy, clearing toward the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b231c]/80 via-[#3a3027]/45 via-45% to-transparent to-70%" />

        <Reveal className="relative mx-auto flex max-w-[1600px] flex-col justify-center px-6 py-16 sm:px-12 sm:py-20 lg:aspect-[3/1] lg:px-24 lg:py-8">
          <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-white/80 uppercase sm:gap-5 sm:text-[14px] sm:tracking-[0.35em]">
            <span className="h-0.5 w-8 shrink-0 bg-[#d9b77a] sm:w-12" />
            <span className="flex gap-3 sm:gap-5">
              <span>Create</span>
              <span>Inspire</span>
              <span>Collaborate</span>
            </span>
          </p>

          <h2 className="mt-6 text-4xl leading-[1.12] font-medium sm:text-5xl xl:text-[3.6rem]">
            Let’s Build Your
            <br />
            <span className="text-[#d9b77a]">Next Office</span> Together
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/85 sm:text-[17px] xl:text-[19px]">
            Workstations, cabins, conference rooms and classrooms — manufactured and installed by one team.
          </p>

          <Link
            href="/contact"
            className="group mt-7 inline-flex w-fit items-center gap-4 rounded-full bg-[#d9b77a] px-9 py-4 text-[16px] font-medium text-[#2e261f] transition hover:bg-[#e6c993]"
          >
            Request a Quote
            <svg viewBox="0 0 24 24" className="size-5 transition-transform group-hover:translate-x-1" fill="none" aria-hidden="true">
              <path d="M3 12h17m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <ul className="mt-9 flex flex-wrap">
            {[
              { label: ["Modern", "Workspaces"], icon: "M8 3h8a1 1 0 0 1 1 1v7H7V4a1 1 0 0 1 1-1zM5 9v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9M12 15v4M7 21l5-2 5 2M9 21h0M15 21h0" },
              { label: ["Custom", "Solutions"], icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" },
              { label: ["End-to-End", "Support"], icon: "M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM5.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM7 20v-2a5 5 0 0 1 10 0v2zM2 19v-1.5A3.5 3.5 0 0 1 6.5 14M22 19v-1.5a3.5 3.5 0 0 0-4.5-3.5" },
              { label: ["Quality", "Assured"], icon: "M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6zM9 12l2 2 4-4" },
            ].map((f, i) => (
              <li key={f.label[0]} className={`flex w-1/2 flex-col items-center px-4 py-3 text-center sm:w-auto sm:px-8 ${i ? "sm:border-l sm:border-white/25" : "sm:pl-0"} ${i % 2 ? "border-l border-white/25 sm:border-l" : ""}`}>
                <svg viewBox="0 0 24 24" className="size-10 text-[#d9b77a] xl:size-11" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={f.icon} />
                </svg>
                <span className="mt-4 text-[14px] leading-snug font-medium text-white sm:text-[15px]">
                  {f.label[0]}
                  <br />
                  {f.label[1]}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ABOUT + STATS */}
      <section className="relative overflow-hidden bg-[#f7f5f1] py-20 sm:py-28">
        {/* faint flowing lines, bottom-left */}
        <svg className="pointer-events-none absolute -bottom-10 -left-20 h-64 w-[640px] text-[#d9d4ca]" viewBox="0 0 640 260" fill="none" aria-hidden="true">
          {Array.from({ length: 9 }, (_, i) => (
            <path key={i} d={`M0 ${200 + i * 7} C 180 ${120 + i * 9}, 360 ${250 - i * 4}, 640 ${150 + i * 8}`} stroke="currentColor" strokeWidth="1" />
          ))}
        </svg>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="flex items-center gap-3 text-[13px] font-semibold tracking-[0.12em] text-[#1f5c6b] uppercase">
              <span className="h-0.5 w-10 bg-[#1f5c6b]" />
              Built for better workspaces
            </p>
            <h2 className="mt-5 text-4xl leading-[1.05] font-medium tracking-tight text-[#2b2b2b] uppercase sm:text-6xl">
              About Rizak
              <br />
              Industries
            </h2>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-[#555] sm:text-[17px]">
              An ISO, Greenguard &amp; BIFMA certified manufacturer of modular office furniture, working from our {company.factoryArea} factory in Mundka, New Delhi since {company.since}.
            </p>

            <div className="mt-9 grid max-w-xl grid-cols-2 gap-3 sm:gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 80} className="flex items-center gap-3 rounded-2xl border border-[#ebe7df] bg-white/80 p-3.5 sm:gap-4 shadow-[0_6px_20px_-12px_rgb(0_0_0/0.15)] sm:p-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#e7eff0] sm:size-11 text-[#1f5c6b]">
                    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={s.icon} />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[17px] leading-tight font-semibold whitespace-nowrap text-[#2b2b2b] sm:text-[1.7rem]">{s.value}</span>
                    <span className="block text-[13px] text-[#666] sm:text-[14px]">{s.label}</span>
                  </span>
                </Reveal>
              ))}
            </div>

            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#2b2b2b] px-8 py-4 text-[15px] font-semibold text-white transition hover:bg-[#1f5c6b]"
            >
              Discover Our Story
              <svg viewBox="0 0 20 20" className="size-4 transition-transform group-hover:translate-x-1" fill="none" aria-hidden="true">
                <path d="M3 10h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>

          <Reveal delay={150} className="relative pt-10 pr-4 pb-10 sm:pr-6">
            {/* teal panel peeking out behind the photo */}
            <div className="absolute top-0 right-0 bottom-0 left-[40%] origin-top-right -skew-y-3 rounded-[2rem] bg-[#1f5c6b]" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgb(0_0_0/0.4)]">
              <Image src="/catalogue/lifestyle-1.webp" alt="Rizak workstations in a modern office" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
              <div className="absolute right-4 bottom-4 flex items-center divide-x divide-[#ddd] rounded-2xl bg-white px-2 py-3 shadow-lg sm:right-5 sm:bottom-5 sm:px-3 sm:py-4">
                <span className="flex items-center gap-1.5 px-3 text-lg font-semibold tracking-tight text-[#1b4fa0] sm:px-4 sm:text-2xl">
                  <svg viewBox="0 0 24 24" className="size-5 sm:size-6" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
                  </svg>
                  ISO
                </span>
                <span className="px-3 text-[11px] font-semibold tracking-wide text-[#3d9a3a] uppercase sm:px-4 sm:text-[13px]">Greenguard</span>
                <span className="px-3 text-base font-semibold tracking-wide text-[#2b2b2b] sm:px-4 sm:text-xl">BIFMA</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLIENTS STRIP */}
      <section className="border-y border-[#eee] py-10">
        <p className="mb-8 text-center text-[12px] font-semibold tracking-[0.25em] text-[#999] uppercase">Trusted by leading institutions</p>
        <div className="[mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <Marquee
            separator=""
            items={clientLogos.map((c) =>
              c.logo ? (
                <span key={c.name} className="relative block h-14 w-36 transition duration-300 hover:scale-105">
                  <Image src={c.logo} alt={c.name} fill sizes="144px" className="object-contain" />
                </span>
              ) : (
                <span key={c.name} className="flex h-14 items-center text-[13px] font-semibold tracking-[0.1em] whitespace-nowrap text-[#9a9a9a] uppercase">
                  {c.name}
                </span>
              )
            )}
          />
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="bg-[#f5f5f5] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle title="Explore More With Rizak" sub="Products, company information and project support — everything you need to plan your next space." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {explore.map((e, i) => (
              <Reveal key={e.title} delay={i * 90}>
                <Link href={e.href} className="group block bg-white transition hover:shadow-[0_10px_30px_-12px_rgb(0_0_0/0.2)]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#eee]">
                    <Image src={e.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-[12px] text-[#999]">{e.tag}</p>
                    <h3 className="mt-2 min-h-[44px] text-[15px] leading-snug font-semibold text-[#222]">{e.title}</h3>
                    <span className="mt-6 grid size-8 place-items-center rounded-full border border-[#ccc] text-[#555] transition group-hover:border-[#1f5c6b] group-hover:bg-[#1f5c6b] group-hover:text-white">
                      <svg viewBox="0 0 20 20" className="size-3.5" fill="none" aria-hidden="true">
                        <path d="M6 14 14 6m0 0H7m7 0v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSIDE OUR FACTORY */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle title="Inside Our Factory" sub="Manufacturing is mostly machine made — ensuring fewer errors and lower maintenance costs." />
          <div className="mt-14 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
            <Reveal className="group relative overflow-hidden rounded-xl bg-[#eee]">
              <div className="relative aspect-[16/11]">
                <Image src={machinery[2].image} alt={machinery[2].name} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-16">
                <p className="text-xl font-semibold text-white">{machinery[2].name}</p>
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {[machinery[3], machinery[0], machinery[1]].map((m, i) => (
                <Reveal key={m.name} delay={i * 90} className="flex items-center gap-4 rounded-xl bg-[#f5f5f5] p-3">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-white">
                    <Image src={m.image} alt="" fill sizes="80px" className="object-contain p-1" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#222]">{m.name}</p>
                    <p className="mt-1 text-[12px] text-[#999]">{m.group} line</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
