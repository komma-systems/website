"use client"

import type { ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface AnimatedElementProps {
  children: ReactNode
  animation: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right"
  delay?: number
  className?: string
  threshold?: number
  rootMargin?: string
}

const ANIMATION_CLASSES = {
  "fade-up": "translate-y-10",
  "fade-in": "",
  "slide-in-left": "-translate-x-10",
  "slide-in-right": "translate-x-10",
} as const

export function AnimatedElement({
  children,
  animation,
  delay = 0,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
}: AnimatedElementProps) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce: true,
  })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-3000"
    const delayClass = delay ? `delay-${delay}` : ""
    const transformClass = !isIntersecting ? ANIMATION_CLASSES[animation] : "translate-y-0 translate-x-0"
    const opacityClass = isIntersecting ? "opacity-100" : "opacity-0"

    return `${baseClasses} ${transformClass} ${opacityClass} ${delayClass}`
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
