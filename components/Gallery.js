"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Gallery({ items }) {
  const [index, setIndex] = useState(null);
  const open = index !== null;

  const step = useCallback(
    (d) => setIndex((i) => (i + d + items.length) % items.length),
    [items.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((v, i) => (
          <button
            key={`${v.image}-${i}`}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 text-left transition-all duration-300 hover:border-[#8fb3b8] hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-50">
              <Image
                src={v.image}
                alt={v.label}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#123a44]/0 opacity-0 transition-all duration-300 group-hover:bg-[#123a44]/20 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-900 shadow-md">
                  <svg className="size-3.5 text-[#1f5c6b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <span>Enlarge</span>
                </span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between px-1 pb-1">
              <span className="text-sm font-semibold text-slate-800 group-hover:text-[#1f5c6b] transition-colors">
                {v.label}
              </span>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500">
                Layout #{String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[index].label}
          className="fixed inset-0 z-[60] flex flex-col bg-white/95 backdrop-blur-xl"
          onClick={() => setIndex(null)}
        >
          {/* TOP BAR */}
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-[#e7eff0] px-2.5 py-1 text-xs font-semibold text-[#1f5c6b]">
                {index + 1} of {items.length}
              </span>
              <p className="text-lg font-semibold text-slate-900">
                {items[index].label}
              </p>
            </div>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold tracking-wider text-slate-700 uppercase transition hover:bg-slate-100 hover:text-slate-900"
              aria-label="Close"
              onClick={() => setIndex(null)}
            >
              <span>Close</span>
              <span className="text-base leading-none">✕</span>
            </button>
          </div>

          {/* IMAGE VIEW */}
          <div className="relative flex-1 p-4 sm:p-12" onClick={(e) => e.stopPropagation()}>
            <Image
              src={items[index].image}
              alt={items[index].label}
              fill
              sizes="100vw"
              className="object-contain"
            />
            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous image"
                  className="absolute top-1/2 left-4 sm:left-8 -translate-y-1/2 flex size-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-md transition hover:bg-slate-100 active:scale-95"
                >
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next image"
                  className="absolute top-1/2 right-4 sm:right-8 -translate-y-1/2 flex size-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-md transition hover:bg-slate-100 active:scale-95"
                >
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* BOTTOM CAPTION */}
          <div className="border-t border-slate-100 py-3 text-center text-xs text-slate-500">
            Press Left / Right arrows to navigate • ESC to exit
          </div>
        </div>
      )}
    </>
  );
}
