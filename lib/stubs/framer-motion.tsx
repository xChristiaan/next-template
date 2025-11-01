"use client"

import { type ElementType, useEffect, useState } from "react"

type MotionValue = string | Record<string, unknown>

type MotionProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] & {
  initial?: MotionValue
  animate?: MotionValue
  transition?: Record<string, unknown>
  variants?: Record<string, Record<string, unknown>>
}

type MotionComponent<T extends keyof JSX.IntrinsicElements> = (
  props: MotionProps<T>
) => JSX.Element

function createMotionComponent<T extends keyof JSX.IntrinsicElements>(Component: T): MotionComponent<T> {
  return function MotionComponentWrapper({ children, ...rest }: MotionProps<T>) {
    const Comp = Component as unknown as ElementType
    return <Comp {...(rest as Record<string, unknown>)}>{children}</Comp>
  }
}

export const motion = {
  div: createMotionComponent("div"),
  section: createMotionComponent("section"),
}

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler)
    } else {
      mediaQuery.addListener(handler)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handler)
      } else {
        mediaQuery.removeListener(handler)
      }
    }
  }, [])

  return prefersReducedMotion
}
