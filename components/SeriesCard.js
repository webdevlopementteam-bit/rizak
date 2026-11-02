import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./ui";
import { categories } from "@/lib/catalogue";

export default function SeriesCard({ s }) {
  const alt = s.variants.find((v) => v.image !== s.cover && !(s.dark && v.image === s.hero)) ?? s.variants[0];
  const category = categories.find((c) => c.id === s.category)?.label;

  return (
    <Link
      href={`/products/${s.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-18px_rgb(0_0_0/0.25)] ring-1 ring-[#ece9e3] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-22px_rgb(0_0_0/0.3)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f4f4f3]">
        <Image
          src={s.cover}
          alt={`${s.name} series`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
        />
        <Image
          src={alt.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="scale-105 object-cover opacity-0 transition duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
        />
        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] tracking-[0.08em] text-[#1c1f22] backdrop-blur">
          {category}
        </span>
        <span className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-full bg-[#1b1d1f]/75 px-3 py-1 text-[11px] text-white backdrop-blur">
          <svg viewBox="0 0 20 20" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <rect x="3" y="3" width="6" height="6" rx="1" />
            <rect x="11" y="3" width="6" height="6" rx="1" />
            <rect x="3" y="11" width="6" height="6" rx="1" />
            <rect x="11" y="11" width="6" height="6" rx="1" />
          </svg>
          {s.variants.length} views
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] tracking-[0.18em] text-[#a8763a] uppercase">{s.frame}</p>
        <h3 className="mt-2 text-xl font-medium text-[#1c1f22] transition-colors group-hover:text-[#1f5c6b]">{s.name}</h3>
        <p className="mt-3 line-clamp-2 text-[14px] leading-relaxed text-[#666]">{s.blurb}</p>
        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="text-[13px] font-medium text-[#1c1f22]">Explore series</span>
          <span className="grid size-9 place-items-center rounded-full border border-[#e3ded4] text-[#1c1f22] transition duration-300 group-hover:border-[#1f5c6b] group-hover:bg-[#1f5c6b] group-hover:text-white">
            <Arrow className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
