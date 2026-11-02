"use client";

import { useState } from "react";

export default function EnquiryForm({ email, seriesNames }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget));
    const body = [
      `Client Name: ${f.name}`,
      `Company / Organization: ${f.company || "Not specified"}`,
      `Direct Phone: ${f.phone}`,
      `Series of Interest: ${f.series}`,
      `Estimated Workstations / Desks: ${f.quantity || "To be discussed"}`,
      "",
      "Project Requirements & Finishes:",
      f.message,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      `Project Quotation Request — ${f.series} [${f.name}]`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-[#e6e2da] bg-[#faf9f7] px-4 py-3.5 text-[14px] text-[#1c1f22] transition outline-none placeholder:text-[#aaa] focus:border-[#1f5c6b] focus:bg-white focus:ring-4 focus:ring-[#1f5c6b]/10";
  const labelClass = "mb-2 block text-[12px] font-medium tracking-[0.08em] text-[#555] uppercase";

  return (
    <form onSubmit={onSubmit} className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
      <div>
        <label className={labelClass}>Your Full Name *</label>
        <input
          required
          name="name"
          className={inputClass}
          placeholder="e.g. Rahul Sharma"
          autoComplete="name"
        />
      </div>

      <div>
        <label className={labelClass}>Phone / WhatsApp Number *</label>
        <input
          required
          name="phone"
          type="tel"
          className={inputClass}
          placeholder="+91 98765 43210"
          autoComplete="tel"
        />
      </div>

      <div>
        <label className={labelClass}>Company / Architecture Studio</label>
        <input
          name="company"
          className={inputClass}
          placeholder="e.g. Acme Architects / Bank HQ"
          autoComplete="organization"
        />
      </div>

      <div>
        <label className={labelClass}>Estimated Units / Seaters</label>
        <input
          name="quantity"
          className={inputClass}
          placeholder="e.g. 50 Workstations / 1 Boardroom"
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass}>Select Product Line or Series</label>
        <select
          name="series"
          className={`${inputClass} cursor-pointer`}
          defaultValue="General Workstation Inquiry"
        >
          <option>General Workstation Inquiry</option>
          <option>Complete Office Turnkey Project</option>
          <option>Executive Desks & Cabins</option>
          <option>Conference & Boardroom Tables</option>
          <option>Education / Computer Lab Furniture</option>
          <option disabled>──────────</option>
          {seriesNames.map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass}>Project Requirements & Finishes *</label>
        <textarea
          required
          name="message"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your floor plan, desired powder-coat shades, laminate preferences, timeline, and delivery location..."
        />
      </div>

      <div className="flex flex-col gap-4 border-t border-[#efece6] pt-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[13px] leading-relaxed text-[#777]">
          {sent
            ? "Your default mail client has opened with this inquiry pre-filled."
            : "Factory direct pricing. We respond with formal drawings & BOQ within 24 hours."}
        </p>
        <button
          type="submit"
          className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#1c1f22] px-8 py-4 text-[14px] font-medium text-white transition hover:bg-[#1f5c6b] active:scale-[0.98]"
        >
          Send Enquiry
          <svg viewBox="0 0 20 20" className="size-4 transition-transform group-hover:translate-x-1" fill="none" aria-hidden="true">
            <path d="M3 10h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </form>
  );
}
