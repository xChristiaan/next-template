import { Fragment } from "react"

export interface OpenGraphProps {
  type?: string
  title?: string
  description?: string
  url?: string
}

export interface TwitterProps {
  cardType?: string
}

export interface DefaultSeoProps {
  title?: string
  description?: string
  openGraph?: OpenGraphProps
  twitter?: TwitterProps
}

interface DefaultSeoComponentProps extends DefaultSeoProps {}

export function DefaultSeo(_props: DefaultSeoComponentProps) {
  return <Fragment />
}
