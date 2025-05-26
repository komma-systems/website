"use client"

import { useState, useEffect, useRef, useCallback } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef<T | null>(null)

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const isElementIntersecting = entry.isIntersecting

      if (triggerOnce && hasTriggered) return

      setIsIntersecting(isElementIntersecting)

      if (isElementIntersecting && triggerOnce) {
        setHasTriggered(true)
      }
    },
    [triggerOnce, hasTriggered]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    })

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, handleIntersection])

  return { ref, isIntersecting }
}
