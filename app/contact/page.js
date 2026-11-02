import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import { Eyebrow, PageHero } from "@/components/ui";
import { company, series } from "@/lib/catalogue";

export const metadata = {
  title: "Contact Factory & Request Project Quotation | Rizak Industries",
  description: `Contact Rizak Industries (Kakoo Metal). Request an OEM quote, schedule a factory visit, or discuss floor plans. Factory at ${company.address}.`,
};

const icons = {
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
  mail: "M4 5h16v14H4zM4 7l8 6 8-6",
  pin: "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
};

const tel = (p) => `tel:${p.replace(/\s/g, "")}`;

const channels = [
  { label: "Call us", icon: icons.phone, lines: company.phones.map((p) => ({ text: p, href: tel(p) })), note: "Monday to Saturday, 9:00 AM – 7:00 PM IST" },
  { label: "Email us", icon: icons.mail, lines: [{ text: company.email, href: `mailto:${company.email}` }], note: "Send floor plans, CAD drawings or BOQ lists" },
  { label: "Visit the factory", icon: icons.pin, lines: [{ text: company.address }], note: `${company.factoryArea} manufacturing unit` },
];

const nextSteps = [
  { title: "We review your brief", text: "Our team studies your space, quantities and preferred finishes." },
  { title: "We recommend & price", text: "You get the right series, specification and factory-direct pricing." },
  { title: "We make & install", text: "Manufactured in our Mundka factory and installed by our own team." },
];

function Icon({ d, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#f7f5f1]">
      <PageHero image="/catalogue/slide-y6-b.webp" eyebrow="Contact us" title="Let’s plan your next workspace together.">
        <p className="mt-5 max-w-xl text-base sm:text-lg">
          Share your floor plan or requirement — our team will recommend the right series and send factory-direct pricing.
        </p>
      </PageHero>

      {/* CONTACT CHANNELS */}
      <section className="relative z-10 mx-auto -mt-14 max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 90} className="group rounded-2xl bg-white p-7 shadow-[0_20px_45px_-25px_rgb(0_0_0/0.3)] ring-1 ring-[#ece9e3] transition duration-300 hover:-translate-y-1">
              <span className="grid size-12 place-items-center rounded-full bg-[#e7eff0] text-[#1f5c6b] transition group-hover:bg-[#1f5c6b] group-hover:text-white">
                <Icon d={c.icon} className="size-5" />
              </span>
              <p className="mt-6 text-[12px] tracking-[0.18em] text-[#a8763a] uppercase">{c.label}</p>
              <div className="mt-2 space-y-1">
                {c.lines.map((l) =>
                  l.href ? (
                    <a key={l.text} href={l.href} className="block text-[17px] font-medium break-all text-[#1c1f22] transition hover:text-[#1f5c6b] sm:break-normal">
                      {l.text}
                    </a>
                  ) : (
                    <p key={l.text} className="text-[15px] leading-relaxed font-medium text-[#1c1f22]">{l.text}</p>
                  )
                )}
              </div>
              <p className="mt-3 text-[13px] text-[#888]">{c.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FORM + SIDE PANEL */}
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.85fr_1.5fr]">
        <Reveal className="relative overflow-hidden rounded-[1.75rem] bg-[#1b1d1f] p-8 text-white sm:p-10">
          <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-[#1f5c6b]/40 blur-[90px]" />
          <div className="relative">
            <Eyebrow light>How it works</Eyebrow>
            <h2 className="mt-5 text-2xl leading-snug font-medium sm:text-[1.9rem]">
              From enquiry to <span className="text-[#d9b77a]">installation.</span>
            </h2>
            <ol className="mt-9 space-y-8">
              {nextSteps.map((s, i) => (
                <li key={s.title} className="relative flex gap-5">
                  {i < nextSteps.length - 1 && <span className="absolute top-11 bottom-[-1.5rem] left-[19px] w-px bg-white/15" />}
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#d9b77a]/60 text-[13px] text-[#d9b77a]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-medium">{s.title}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-white/60">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#d9b77a]/15 text-[#d9b77a]">
                <Icon d={icons.clock} className="size-5" />
              </span>
              <p className="text-[14px] leading-relaxed text-white/75">
                <span className="block text-white">Working hours</span>
                Monday to Saturday, 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="rounded-[1.75rem] bg-white p-7 shadow-[0_20px_50px_-30px_rgb(0_0_0/0.3)] ring-1 ring-[#ece9e3] sm:p-10">
          <Eyebrow>Request a quote</Eyebrow>
          <h2 className="mt-5 text-2xl leading-snug font-medium text-[#1c1f22] sm:text-[1.9rem]">
            Tell us about <span className="text-[#1f5c6b]">your project.</span>
          </h2>
          <p className="mt-3 mb-9 text-[15px] text-[#666]">Fill in the details below and your email app will open with the enquiry ready to send.</p>
          <EnquiryForm email={company.email} seriesNames={series.map((s) => `${s.name} Series`)} />
        </Reveal>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-[#ece9e3]">
          <iframe
            title="Rizak Industries factory location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
            className="h-[420px] w-full bg-[#eee] grayscale-[0.4]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-5 left-5 max-w-sm rounded-2xl bg-white p-6 shadow-xl sm:bottom-8 sm:left-8">
            <p className="text-[12px] tracking-[0.18em] text-[#a8763a] uppercase">Factory address</p>
            <p className="mt-2 text-[15px] leading-relaxed text-[#1c1f22]">{company.address}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-[#1f5c6b] hover:underline"
            >
              Get directions →
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
