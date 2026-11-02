"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function HeroSlider({ slides }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((d) => setActive((i) => (i + d + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [paused, go]);

  const s = slides[active];

  return (
    <section
      className="relative h-[100svh] min-h-[620px] overflow-hidden bg-[#2b2b2b] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((sl, i) => (
        <Image
          key={sl.image}
          src={sl.image}
          alt={sl.title}
          fill
          priority={i === 0}
          quality={90}
          sizes="100vw"
          className={`object-cover transition-all duration-[1600ms] ease-out ${
            i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-black/40" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="relative mx-auto h-full max-w-6xl px-5">
        <ol className="absolute top-40 left-5 space-y-1 sm:top-44">
          {slides.map((sl, i) => (
            <li key={sl.title}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`flex items-baseline gap-3 text-left text-2xl font-medium transition-all duration-500 sm:text-[2rem] ${
                  i === active ? "text-white" : "text-white/55 hover:text-white/85"
                }`}
              >
                <span className={`w-6 text-sm font-semibold text-[#d9b77a] transition-opacity ${i === active ? "opacity-100" : "opacity-0"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {sl.title}
              </button>
            </li>
          ))}
        </ol>

        <div className="absolute right-5 bottom-14 left-5 sm:left-auto sm:w-[420px]">
          <h1 key={s.heading} className="animate-[fadeUp_0.8s_ease-out] text-3xl leading-tight font-medium sm:text-[2.2rem]">
            {s.heading}
          </h1>
          <p key={s.text} className="mt-4 animate-[fadeUp_1s_ease-out] text-[14px] leading-relaxed text-white/85">
            {s.text}
          </p>
          <div className="mt-7 flex items-center gap-3">
            {[
              { d: -1, label: "Previous slide", path: "M12.5 4 6.5 10l6 6" },
              { d: 1, label: "Next slide", path: "m7.5 4 6 6-6 6" },
            ].map((b) => (
              <button
                key={b.label}
                type="button"
                onClick={() => go(b.d)}
                aria-label={b.label}
                className="grid size-10 place-items-center rounded-full bg-white text-[#333] transition hover:bg-[#1f5c6b] hover:text-white"
              >
                <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden="true">
                  <path d={b.path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
            <Link href={s.href} className="ml-3 text-[13px] underline-offset-4 hover:underline">
              Explore →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
