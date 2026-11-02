import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Eyebrow, PageHero } from "@/components/ui";
import { certifications, clientLogos, clients, company, machinery, profile, series } from "@/lib/catalogue";

export const metadata = {
  title: "About Our Factory & Manufacturing Process | Rizak Industries",
  description:
    "Rizak Industries (Kakoo Metal) is an ISO 9001, Greenguard & BIFMA certified modular office furniture manufacturer with its factory in Mundka, New Delhi.",
};

const stats = [
  { value: String(company.since), label: "Year established" },
  { value: `${series.length}`, label: "Product series" },
  { value: String(certifications.length), label: "Certifications" },
  { value: `${clients.length}+`, label: "Institutional clients" },
];

const principles = [
  {
    title: "Our Mission",
    text: "To manufacture reliable, cost-effective office furniture of premium quality — and deliver it on time, every time.",
    icon: "M12 3v3M12 18v3M3 12h3M18 12h3M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  },
  {
    title: "Our Approach",
    text: "Attention to the minutest detail — from suggesting the right model, to precise machine-made production and skilled installation.",
    icon: "M4 19h16M6 15l4-4 3 3 5-6",
  },
  {
    title: "Our Promise",
    text: "The best possible raw materials, the highest level of workmanship, and supportive after-sales service on every project.",
    icon: "M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6zM9 12l2 2 4-4",
  },
];

const steps = [
  { title: "Consultation", text: "We study your space and suggest the right model, grade and specification.", image: "/catalogue/why-consult.webp" },
  { title: "Metal Fabrication", text: "Leg frames are laser-cut, bent and powder-coated on our CNC line.", image: "/catalogue/why-metal.webp" },
  { title: "Wood Processing", text: "Tops, storages and cabins are cut and edged on CNC wood machinery.", image: "/catalogue/why-wood.webp" },
  { title: "Installation", text: "Dedicated teams install on site and stay on for after-sales support.", image: "/catalogue/why-install.webp" },
];

const highlights = ["Factory-direct, no middlemen", "Mostly machine-made production", "Dedicated installation team"];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHero
        image="/catalogue/slide-j26-1.webp"
        eyebrow="About Rizak Industries"
        title="Crafting workspaces in steel & wood since 2018."
      >
        <p className="mt-5 max-w-xl text-base sm:text-lg">
          {company.name} ({company.brand}) — a certified manufacturer of modular workstations, executive desks and institutional furniture in New Delhi.
        </p>
      </PageHero>

      {/* WHO WE ARE */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative pr-6 pb-16 sm:pr-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#eee] shadow-[0_30px_60px_-30px_rgb(0_0_0/0.35)]">
            <Image src="/catalogue/slide-exec-1-1.webp" alt="Rizak executive cabin" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute right-0 bottom-0 w-[55%] overflow-hidden rounded-2xl border-[6px] border-white shadow-[0_25px_50px_-20px_rgb(0_0_0/0.35)]">
            <div className="relative aspect-[4/3]">
              <Image src="/catalogue/why-metal.webp" alt="Laser cutting in the Rizak factory" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
            </div>
          </div>
          <div className="absolute top-8 -left-3 rounded-2xl bg-[#1f5c6b] px-6 py-5 text-white shadow-xl sm:-left-6">
            <p className="text-[11px] tracking-[0.2em] text-white/70 uppercase">Since</p>
            <p className="text-3xl font-medium">{company.since}</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-5 text-3xl leading-tight font-medium tracking-tight text-[#1c1f22] sm:text-[2.6rem]">
              A factory-direct partner for <span className="text-[#1f5c6b]">modern offices.</span>
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-[#444]">{profile[0]}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#666]">{profile[1]}</p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-8 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-[15px] text-[#333]">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#e7eff0] text-[#1f5c6b]">
                    <svg viewBox="0 0 20 20" className="size-3.5" fill="none" aria-hidden="true">
                      <path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex items-center gap-4 border-t border-[#eee] pt-7">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#f8efe2] text-[#a8763a]">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
              </span>
              <p className="text-[14px] leading-relaxed text-[#666]">
                <span className="block font-medium text-[#1c1f22]">{company.factoryArea} manufacturing unit</span>
                {company.address}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-[#1b1d1f] text-white">
        <div className="pointer-events-none absolute -top-32 -left-32 size-[420px] rounded-full bg-[#1f5c6b]/30 blur-[110px]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className={`px-4 py-12 text-center sm:py-14 ${i % 2 ? "border-l border-white/10" : ""} ${i === 2 ? "lg:border-l lg:border-white/10" : ""} ${i < 2 ? "border-b border-white/10 lg:border-b-0" : ""}`}
            >
              <p className="text-4xl font-medium text-[#d9b77a] sm:text-5xl">{s.value}</p>
              <p className="mt-3 text-[13px] tracking-[0.18em] text-white/60 uppercase">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MISSION / APPROACH / PROMISE */}
      <section className="bg-[#f7f5f1] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">What drives us</Eyebrow>
            <h2 className="mt-5 text-3xl leading-tight font-medium tracking-tight text-[#1c1f22] sm:text-[2.6rem]">
              Built on quality, precision <span className="text-[#1f5c6b]">& trust.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 100}
                className="group rounded-2xl border border-[#ebe7df] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgb(0_0_0/0.2)] sm:p-10"
              >
                <span className="grid size-14 place-items-center rounded-full bg-[#e7eff0] text-[#1f5c6b] transition group-hover:bg-[#1f5c6b] group-hover:text-white">
                  <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={p.icon} />
                  </svg>
                </span>
                <h3 className="mt-7 text-xl font-medium text-[#1c1f22]">{p.title}</h3>
                <span className="mt-3 block h-px w-10 bg-[#d9b77a]" />
                <p className="mt-4 text-[15px] leading-relaxed text-[#666]">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-5 text-3xl leading-tight font-medium tracking-tight text-[#1c1f22] sm:text-[2.6rem]">
                From first drawing <span className="text-[#1f5c6b]">to final fit.</span>
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-[#666]">{profile[5]}</p>
          </Reveal>

          <div className="relative mt-14">
            <div className="absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-[#d9b77a]/60 to-transparent lg:block" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 100} className="group">
                  <span className="relative grid size-12 place-items-center rounded-full border border-[#d9b77a] bg-white text-[15px] font-medium text-[#a8763a]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl bg-[#eee]">
                    <Image src={s.image} alt={s.title} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-[#1c1f22]">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#666]">{s.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section id="machinery" className="scroll-mt-28 bg-[#f4f4f3] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Infrastructure</Eyebrow>
              <h2 className="mt-5 text-3xl leading-tight font-medium tracking-tight text-[#1c1f22] sm:text-[2.6rem]">
                In-house metal <span className="text-[#1f5c6b]">& wood lines.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-[#666]">{profile[3]}</p>
              <ul className="mt-8 divide-y divide-[#e3e3e3] border-y border-[#e3e3e3]">
                {machinery.map((m) => (
                  <li key={m.name} className="flex items-center justify-between gap-4 py-4">
                    <span className="text-[15px] text-[#1c1f22]">{m.name}</span>
                    <span className={`shrink-0 rounded-full px-3 py-1 text-[11px] tracking-[0.12em] uppercase ${m.group === "Metal" ? "bg-[#e7eff0] text-[#1f5c6b]" : "bg-[#f8efe2] text-[#a8763a]"}`}>
                      {m.group}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              {machinery.map((m, i) => (
                <Reveal key={m.name} delay={i * 80} className={`overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-18px_rgb(0_0_0/0.25)] ${i % 2 ? "translate-y-8" : ""}`}>
                  <div className="relative aspect-square">
                    <Image src={m.image} alt={m.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-contain p-5" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center">
            <Eyebrow className="justify-center">Certified quality</Eyebrow>
            <h2 className="mt-5 text-3xl font-medium tracking-tight text-[#1c1f22] sm:text-[2.4rem]">Accreditations we hold</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] text-[#666]">{profile[5].split(". ").slice(-1)[0]}</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {certifications.map((c, i) => (
              <Reveal key={c} delay={i * 50} className="flex flex-col items-center rounded-2xl border border-[#eee] bg-white px-3 py-6 text-center transition hover:border-[#d9b77a]">
                <span className="grid size-12 place-items-center rounded-full bg-[#f8efe2] text-[#a8763a]">
                  <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="9" r="6" />
                    <path d="m9 9 2 2 4-4M8.5 14 7 21l5-3 5 3-1.5-7" />
                  </svg>
                </span>
                <span className="mt-4 text-[14px] font-medium text-[#1c1f22]">{c}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="scroll-mt-28 border-t border-[#eee] bg-[#f7f5f1] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Our clients</Eyebrow>
              <h2 className="mt-5 max-w-xl text-3xl leading-tight font-medium tracking-tight text-[#1c1f22] sm:text-[2.6rem]">
                Trusted by institutions <span className="text-[#1f5c6b]">across India.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] text-[#666]">Banks, IITs, NITs, IIMs, naval bases and schools rely on Rizak for durable, well-finished furniture.</p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {clientLogos
              .filter((c) => c.logo)
              .map((c, i) => (
                <Reveal key={c.name} delay={i * 50} className="grid h-28 place-items-center rounded-2xl bg-white p-5 shadow-[0_8px_24px_-16px_rgb(0_0_0/0.2)]">
                  <span className="relative block h-full w-full">
                    <Image src={c.logo} alt={c.name} fill sizes="160px" className="object-contain" />
                  </span>
                </Reveal>
              ))}
          </div>

          <ul className="mt-10 flex flex-wrap gap-2.5">
            {clients.map((c) => (
              <li key={c} className="rounded-full border border-[#e3ded4] bg-white px-4 py-2 text-[13px] text-[#555]">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
}
