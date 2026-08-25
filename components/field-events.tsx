"use client"

import { useState } from "react"

type FieldItem = {
  tag: string
  meta: string[]
  title: string
  body: string
  cta?: string | null
  href?: string | null
}

const TAG_COLORS: Record<string, string> = {
  Forum: "#575757",
  Event: "#9c9c9c",
  Veranstaltung: "#9c9c9c",
  Participate: "#737373",
  Mitmachen: "#737373",
}

const proseClasses = "[text-wrap:pretty] text-[1.125rem] leading-[1.8] text-slate-100"

export function FieldEvents({ items, locale }: { items: readonly FieldItem[]; locale: string }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {items.map((item, idx) => {
        const Row = (
          <div className="grid grid-cols-1 gap-x-9 gap-y-3 border-t border-white/25 py-8 transition-colors hover:bg-white/[0.04] sm:grid-cols-[130px_1fr]">
            <div>
              <p
                className="font-silkscreen text-[0.65rem] uppercase tracking-widest"
                style={{ color: TAG_COLORS[item.tag] ?? "#f5f2e8" }}
              >
                {item.tag}
              </p>
              <p className="mt-1.5 font-mono text-[13px] leading-relaxed text-white/60">
                {item.meta.map((m, i) => (
                  <span key={m}>
                    {i > 0 ? <br /> : null}
                    {m}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light tracking-tight text-white sm:text-2xl sm:mt-[19px]">
                {item.title}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setOpen(open === idx ? null : idx)
                  }}
                  aria-expanded={open === idx}
                  aria-label="Toggle event details"
                  className="ml-3 text-lg text-white/50 transition-transform duration-200 hover:text-white"
                  style={{ transform: open === idx ? "rotate(45deg)" : "none", display: "inline-block" }}
                >
                  +
                </button>
              </h3>
              {open === idx && (
                <p className={`${proseClasses} mt-2 text-gray-300`}>{item.body}</p>
              )}
              {item.cta && (
                <p className="mt-4">
                  <span
                    className={
                      item.tag === "Participate" || item.tag === "Mitmachen"
                        ? "btn-field inline-block rounded-full px-5 py-2.5 font-mono text-[13px] font-semibold text-white transition-[filter] group-hover:brightness-110"
                        : "btn-field-outline inline-block rounded-full px-4 py-2 font-mono text-[13px] transition-[filter] group-hover:brightness-125"
                    }
                  >
                    {item.cta}
                  </span>
                </p>
              )}
            </div>
          </div>
        )
        return item.href ? (
          <a
            key={item.title}
            href={item.href.startsWith("/") ? `/${locale}${item.href}` : item.href}
            target={item.href.startsWith("/") ? undefined : "_blank"}
            rel={item.href.startsWith("/") ? undefined : "noopener noreferrer"}
            className="group block cursor-pointer"
          >
            {Row}
          </a>
        ) : (
          <div key={item.title}>{Row}</div>
        )
      })}
    </div>
  )
}
