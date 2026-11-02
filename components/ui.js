import Image from "next/image";
import Link from "next/link";

export function Eyebrow({ children, className = "", light = false }) {
  return (
    <p
      className={`flex items-center gap-3 text-[12px] font-medium tracking-[0.22em] uppercase ${
        light ? "text-white/85" : "text-[#1f5c6b]"
      } ${className}`}
    >
      <span className="h-px w-10 shrink-0 bg-[#c9a66b]" />
      {children}
    </p>
  );
}

export function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const styles = {
    primary: "bg-[#2b2b2b] text-white hover:bg-[#1f5c6b]",
    outline: "border border-[#2b2b2b]/25 text-[#2b2b2b] hover:border-[#1f5c6b] hover:bg-[#1f5c6b] hover:text-white",
    secondary: "border border-[#c5dadd] bg-white text-[#1f5c6b] hover:bg-[#e7eff0]",
    light: "bg-[#d9b77a] text-[#2e261f] hover:bg-[#e6c993]",
  };

  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-[14px] font-medium transition-all duration-300 ${styles[variant] || styles.primary} ${className}`}
    >
      <span>{children}</span>
      <Arrow className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function TextLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 py-1 text-[14px] font-medium text-[#2b2b2b] transition-colors hover:text-[#1f5c6b] ${className}`}
    >
      <span className="relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#c9a66b] after:transition-transform after:duration-300 group-hover:after:scale-x-100">
        {children}
      </span>
      <Arrow className="size-4 text-[#c9a66b] transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function Arrow({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M3.5 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Inner-page banner: photo with a warm dark wash, matching the home page sections.
export function PageHero({ eyebrow, title, image = "/catalogue/slide-lifestyle-1.webp", children }) {
  return (
    <section className="relative overflow-hidden bg-[#2e2a26] pt-16 text-white sm:pt-[108px]">
      <Image src={image} alt="" fill priority quality={90} sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b18]/90 via-[#2e2a26]/65 to-[#2e2a26]/15" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 [&_p]:!text-white/80">
        {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.1] font-medium tracking-tight sm:text-5xl lg:text-[3.6rem]">{title}</h1>
        {children}
      </div>
    </section>
  );
}
