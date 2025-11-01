"use client"

import { useMDXComponent } from "next-contentlayer/hooks"
import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { Fragment } from "react"

import { cn } from "@/lib/utils"

const components = {
  a: ({ className, ...props }: ComponentPropsWithoutRef<"a">) => (
    <a className={cn("font-semibold text-primary underline-offset-4 hover:underline", className)} {...props} />
  ),
  ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul className={cn("ml-6 list-disc space-y-2", className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol className={cn("ml-6 list-decimal space-y-2", className)} {...props} />
  ),
  li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className={cn("leading-relaxed", className)} {...props} />
  ),
}

interface MdxContentProps {
  code: string
  className?: string
}

function renderFallbackMarkdown(markdown: string) {
  const lines = markdown.split(/\r?\n/)
  const elements: ReactNode[] = []
  let paragraph: string[] = []
  let listItems: string[] | null = null
  let isOrderedList = false

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      elements.push(
        <p key={`p-${elements.length}`} className="leading-relaxed text-foreground/80">
          {paragraph.join(" ")}
        </p>
      )
      paragraph = []
    }
  }

  const flushList = () => {
    if (listItems && listItems.length > 0) {
      const ListTag = isOrderedList ? "ol" : "ul"
      elements.push(
        <ListTag key={`list-${elements.length}`} className="ml-6 space-y-2 text-foreground/80">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ListTag>
      )
    }
    listItems = null
    isOrderedList = false
  }

  lines.forEach((line) => {
    const trimmed = line.trim()

    if (!trimmed) {
      flushParagraph()
      flushList()
      return
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph()
      if (!listItems) {
        listItems = []
        isOrderedList = false
      }
      listItems.push(trimmed.slice(2).trim())
      return
    }

    const orderedMatch = /^\d+\.\s+/.exec(trimmed)
    if (orderedMatch) {
      flushParagraph()
      if (!listItems) {
        listItems = []
        isOrderedList = true
      }
      listItems.push(trimmed.slice(orderedMatch[0].length).trim())
      return
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph()
      flushList()
      elements.push(
        <h2 key={`h2-${elements.length}`} className="text-2xl font-semibold text-foreground">
          {trimmed.slice(3).trim()}
        </h2>
      )
      return
    }

    if (trimmed.startsWith("# ")) {
      flushParagraph()
      flushList()
      elements.push(
        <h1 key={`h1-${elements.length}`} className="text-3xl font-semibold text-foreground">
          {trimmed.slice(2).trim()}
        </h1>
      )
      return
    }

    paragraph.push(trimmed)
  })

  flushParagraph()
  flushList()

  return <Fragment>{elements}</Fragment>
}

function isCompiledMdx(code: string) {
  return /function MDXContent/.test(code) || code.includes("MDXContent.isMDXComponent")
}

export function MdxContent({ code, className }: MdxContentProps) {
  if (isCompiledMdx(code)) {
    const MDXContent = useMDXComponent(code)
    return (
      <div className={cn("mdx", className)}>
        <MDXContent components={components} />
      </div>
    )
  }

  return <div className={cn("mdx space-y-4", className)}>{renderFallbackMarkdown(code)}</div>
}
