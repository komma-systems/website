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

export const TAG_COLORS: Record<string, string> = {
  Forum: "#575757",
  Event: "#9c9c9c",
  Veranstaltung: "#9c9c9c",
  Residence: "#8a8a8a",
  Residenz: "#8a8a8a",
  Keynote: "#737373",
  Workshop: "#9c9c9c",
  Participate: "#737373",
  Mitmachen: "#737373",
}

const proseClasses = "[text-wrap:pretty] text-[1.125rem] leading-[1.8] text-slate-100"

// Renders [text](url) links inside event descriptions; everything else is plain text.
export function renderEventBody(body: string) {
  const parts = body.split(/(\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (!match) return part
    return (
      <a
        key={i}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="border-b border-white/30 hover:text-cream hover:border-cream transition-colors"
      >
        {match[1]}
      </a>
    )
  })
}

export function FieldEvents({
  items,
  pastItems = [],
  pastLabel,
  locale,
}: {
  items: readonly FieldItem[]
  pastItems?: readonly FieldItem[]
  pastLabel?: string
  locale: string
}) {
  const [open, setOpen] = useState<number | null>(null)
  const [showPast, setShowPast] = useState(false)

  const renderItems = (list: readonly FieldItem[], offset: number) => (
    <div>
      {list.map((item, i) => {
        const idx = offset + i
        const alwaysOpen = item.tag === "Participate" || item.tag === "Mitmachen"
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
                {!alwaysOpen && (
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
                )}
              </h3>
              {(alwaysOpen || open === idx) && (
                <p className={`${proseClasses} mt-2 text-gray-300`}>{renderEventBody(item.body)}</p>
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

  return (
    <div>
      {renderItems(items, 0)}
      {pastItems.length > 0 && (
        <div className="border-t border-white/25">
          <button
            type="button"
            onClick={() => setShowPast(!showPast)}
            aria-expanded={showPast}
            className="flex w-full items-center gap-3 py-6 text-left font-silkscreen text-[0.7rem] uppercase tracking-widest text-white/50 transition-colors hover:text-white"
          >
            <span
              className="inline-block text-base transition-transform duration-200"
              style={{ transform: showPast ? "rotate(45deg)" : "none" }}
            >
              +
            </span>
            {pastLabel} ({pastItems.length})
          </button>
          {showPast && <div className="opacity-55">{renderItems(pastItems, items.length)}</div>}
        </div>
      )}
    </div>
  )
}
