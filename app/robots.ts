import type { MetadataRoute } from "next"
import { getSiteBaseUrl } from "@/lib/site-url"

export default function robots(): MetadataRoute.Robots {
  const base = getSiteBaseUrl()
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/portal/", "/login", "/api/"] }],
    sitemap: `${base}/sitemap.xml`,
  }
}
