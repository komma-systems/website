import type { MetadataRoute } from "next"
import { getSiteBaseUrl } from "@/lib/site-url"

const paths = ["", "/meld", "/about", "/contact", "/team/charlie", "/team/clara", "/team/rita", "/impressum", "/datenschutz"]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteBaseUrl()
  return ["en", "de"].flatMap((locale) =>
    paths.map((path) => ({
      url: `${base}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.6,
    }))
  )
}
