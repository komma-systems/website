"use client"

import type React from "react"

import { useState, useEffect, useRef, type ReactNode } from "react"

interface RippleButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export function RippleButton({ children, onClick, className = "" }: RippleButtonProps) {
  const [isRippling, setIsRippling] = useState(false)
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLDivElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return

    // Get the button's position relative to the viewport
    const rect = buttonRef.current.getBoundingClientRect()

    // Calculate the position of the click relative to the button
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Set the ripple position
    setRipplePosition({ x, y })

    // Trigger the ripple animation
    setIsRippling(true)

    // Call the onClick handler if provided
    if (onClick) onClick()
  }

  // Reset the ripple state after animation completes
  useEffect(() => {
    if (isRippling) {
      const timer = setTimeout(() => {
        setIsRippling(false)
      }, 600) // Match this to the CSS animation duration

      return () => clearTimeout(timer)
    }
  }, [isRippling])

  return (
    <div ref={buttonRef} className={`relative overflow-hidden cursor-pointer ${className}`} onClick={handleClick}>
      {children}

      {isRippling && (
        <span
          className="absolute rounded-full bg-white/30 animate-ripple"
          style={{
            top: ripplePosition.y,
            left: ripplePosition.x,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  )
}
