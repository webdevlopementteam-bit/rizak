"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Arrow } from "./ui";

export default function SeriesShowcase({ items }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((i) => (i + 1) % items.length), 5500);
    return () => clearInterval(t);
  }, [paused, items.length]);

  const current = items[active];

  return (
    <div
      className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_1.3fr] lg:gap-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* SELECTOR LIST */}
      <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs">
        <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Select Frame Geometry
          </span>
          <span className="text-xs font-semibold text-[#1f5c6b]">
            {active + 1} of {items.length}
          </span>
        </div>

        <div className="space-y-2">
          {items.map((s, i) => {
            const isSelected = i === active;
            return (
              <button
                key={s.slug}
                type="button"
                onClick={() => setActive(i)}
                onFocus={() => setPaused(true)}
                className={`group relative flex w-full items-start gap-4 rounded-xl p-3.5 text-left transition-all ${
                  isSelected
                    ? "border border-[#c5dadd] bg-[#e7eff0]/70 shadow-xs"
                    : "border border-transparent hover:border-slate-200 hover:bg-slate-50/80"
                }`}
                aria-current={isSelected}
              >
                <span
                  className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-semibold transition-colors ${
                    isSelected ? "bg-[#1f5c6b] text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-base font-semibold transition-colors ${
                        isSelected ? "text-[#1f5c6b]" : "text-slate-800"
                      }`}
                    >
                      {s.name} Series
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {s.variants.length} Views
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-slate-500 truncate">
                    {s.frame}
                  </p>
                </div>

                {isSelected && (
                  <div className="absolute inset-x-0 -bottom-px h-0.5 overflow-hidden rounded-full bg-[#d5e5e7]">
                    <div
                      key={`${active}-${paused}`}
                      className={`h-full bg-[#1f5c6b] ${paused ? "w-full" : "w-full animate-[marquee_5.5s_linear_infinite]"}`}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-4 border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-500">
          <span>*Click any series to switch preview</span>
          <Link href="/products" className="font-semibold text-[#1f5c6b] hover:underline">
            View full catalogue →
          </Link>
        </div>
      </div>

      {/* HERO PREVIEW CARD */}
      <div className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-5 shadow-xs">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50">
          {items.map((s, i) => (
            <Image
              key={s.slug}
              src={s.hero}
              alt={`${s.name} metal leg frame`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={`object-cover transition-all duration-700 ease-out ${
                i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}

          {/* Floating Spec Pill */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/80 bg-white/95 p-3 shadow-md backdrop-blur-xs">
            <div>
              <p className="text-sm font-semibold text-slate-900">{current.name} Frame</p>
              <p className="text-xs text-slate-500">{current.frame}</p>
            </div>
            <Link
              href={`/products/${current.slug}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#1f5c6b] px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-[#174652]"
            >
              <span>Explore Series</span>
              <Arrow className="size-3" />
            </Link>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-center text-xs">
          <div className="rounded-lg bg-slate-50 p-2">
            <span className="block font-semibold text-slate-800">Precision Laser</span>
            <span className="text-[11px] text-slate-500">CNC Cut Steel</span>
          </div>
          <div className="rounded-lg bg-slate-50 p-2">
            <span className="block font-semibold text-slate-800">Modular Gangable</span>
            <span className="text-[11px] text-slate-500">2 to 8-Seaters</span>
          </div>
          <div className="rounded-lg bg-slate-50 p-2">
            <span className="block font-semibold text-slate-800">Custom Powder Coat</span>
            <span className="text-[11px] text-slate-500">Any RAL Shade</span>
          </div>
        </div>
      </div>
    </div>
  );
}
