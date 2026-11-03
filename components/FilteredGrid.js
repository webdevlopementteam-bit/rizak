"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Reveal from "@/components/Reveal";
import SeriesCard from "@/components/SeriesCard";
import { Eyebrow } from "@/components/ui";
import { categories, series } from "@/lib/catalogue";

const countFor = (id) => (id === "all" ? series.length : series.filter((s) => s.category === id).length);

export default function FilteredGrid() {
  const category = useSearchParams().get("category");
  const active = categories.some((c) => c.id === category) ? category : "all";
  const tabs = [{ id: "all", label: "All" }, ...categories];
  // "All" groups the grid by category; a filter shows just that group
  const groups = (active === "all" ? categories : categories.filter((c) => c.id === active))
    .map((c) => ({ ...c, items: series.filter((s) => s.category === c.id) }))
    .filter((g) => g.items.length);

  return (
    <>
      <div className="flex flex-col gap-6 border-b border-[#ece9e3] pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Eyebrow>The catalogue</Eyebrow>
          <h2 className="mt-5 text-3xl font-medium tracking-tight text-[#1c1f22] sm:text-[2.4rem]">
            {active === "all" ? "All series" : categories.find((c) => c.id === active).label}
          </h2>
        </div>
        <nav className="-mx-5 flex gap-1 overflow-x-auto px-5 sm:mx-0 sm:px-0" aria-label="Filter by category">
          {tabs.map((t) => {
            const on = active === t.id;
            return (
              <Link
                key={t.id}
                href={t.id === "all" ? "/products#series" : `/products?category=${t.id}#series`}
                scroll={false}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[13px] transition ${
                  on ? "bg-[#1c1f22] text-white" : "text-[#555] hover:bg-[#f4f4f3] hover:text-[#1c1f22]"
                }`}
              >
                {t.label}
                <span className={`text-[11px] ${on ? "text-[#d9b77a]" : "text-[#aaa]"}`}>{countFor(t.id)}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-12 space-y-20">
        {groups.map((g) => (
          <div key={g.id}>
            {groups.length > 1 && (
              <Reveal className="mb-8 flex items-center gap-4">
                <h3 className="text-xl font-medium text-[#1c1f22]">{g.label}</h3>
                <span className="h-px flex-1 bg-[#ece9e3]" />
                <span className="text-[13px] text-[#999]">
                  {g.items.length} series
                </span>
              </Reveal>
            )}
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 70}>
                  <SeriesCard s={s} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
