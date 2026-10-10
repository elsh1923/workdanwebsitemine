import { Fragment } from "react"

// Renders translated text with light markup: **bold**, [[gold]] and ~~italic~~.
export function RichText({ text, boldClass = "", goldClass = "text-[#C59B27]" }: { text: string; boldClass?: string; goldClass?: string }) {
  const parts = text.split(/(\*\*.+?\*\*|\[\[.+?\]\]|~~.+?~~)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**")) return <strong key={i} className={boldClass}>{part.slice(2, -2)}</strong>
        if (part.startsWith("[[")) return <strong key={i} className={goldClass}>{part.slice(2, -2)}</strong>
        if (part.startsWith("~~")) return <em key={i}>{part.slice(2, -2)}</em>
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}
