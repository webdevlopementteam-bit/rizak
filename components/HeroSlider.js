"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const INTERVAL = 6000;

export default function HeroSlider({ slides, video, poster }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((d) => setActive((i) => (i + d + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), INTERVAL);
    return () => clearInterval(t);
  }, [paused, go, active]);

  const s = slides[active];

  return (
    <section
      className="relative h-[100svh] min-h-[620px] overflow-hidden bg-[#2b2b2b] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* poster stays underneath so the hero never flashes empty while the video loads */}
      <Image src={poster} alt="" fill priority quality={85} sizes="100vw" className="object-cover" />
      <video
        className="absolute inset-0 size-full object-cover motion-reduce:hidden"
        src={video}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/40" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />

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
                <span className="relative">
                  {sl.title}
                  {/* thin gold timer under the active title */}
                  {i === active && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full overflow-hidden bg-white/15">
                      <span
                        key={`${active}-${paused}`}
                        className={`block h-full origin-left bg-[#d9b77a] ${paused ? "scale-x-100" : "animate-[grow_6s_linear]"}`}
                      />
                    </span>
                  )}
                </span>
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

        <span className="absolute bottom-6 left-5 hidden items-center gap-3 text-[11px] tracking-[0.3em] text-white/70 uppercase sm:flex">
          <span className="relative h-10 w-px overflow-hidden bg-white/25">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollCue_2s_ease-in-out_infinite] bg-white" />
          </span>
          Scroll
        </span>
      </div>
    </section>
  );
}
