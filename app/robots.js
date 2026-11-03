import { SITE_URL } from "@/lib/catalogue";

// Generated once at build time for the static export
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
