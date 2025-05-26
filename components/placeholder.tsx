"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface PlaceholderProps {
  className?: string
  width?: string | number
  height?: string | number
  animate?: boolean
  type?: "text" | "image" | "card" | "avatar"
  lines?: number
  rounded?: "none" | "sm" | "md" | "lg" | "full"
  color?: string
}

export function Placeholder({
  className,
  width = "100%",
  height,
  animate = true,
  type = "text",
  lines = 3,
  rounded = "md",
  color = "bg-gray-200",
}: PlaceholderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const roundedClass = {
    none: "",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  }[rounded]

  const widthClass = typeof width === "number" ? `w-[${width}px]` : width === "100%" ? "w-full" : `w-[${width}]`
  const heightClass = height ? (typeof height === "number" ? `h-[${height}px]` : `h-[${height}]`) : ""

  const pulseAnimation = animate ? "animate-pulse" : ""

  switch (type) {
    case "image":
      return (
        <div
          className={cn(widthClass, heightClass || "aspect-video", roundedClass, color, pulseAnimation, className)}
          aria-hidden="true"
        />
      )
    case "avatar":
      return (
        <div
          className={cn("rounded-full", color, pulseAnimation, widthClass || "w-10", heightClass || "h-10", className)}
          aria-hidden="true"
        />
      )
    case "card":
      return (
        <div className={cn("overflow-hidden", roundedClass, "border", className)}>
          <div className={cn(widthClass || "w-full", "aspect-video", color, pulseAnimation)} aria-hidden="true" />
          <div className="p-4 space-y-3">
            {Array.from({ length: lines }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-4",
                  color,
                  pulseAnimation,
                  roundedClass,
                  i === lines - 1 && lines > 1 ? "w-2/3" : "w-full",
                )}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      )
    case "text":
    default:
      return (
        <div className={cn("space-y-3", widthClass, className)}>
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-4",
                color,
                pulseAnimation,
                roundedClass,
                i === lines - 1 && lines > 1 ? "w-2/3" : "w-full",
              )}
              aria-hidden="true"
            />
          ))}
        </div>
      )
  }
}
