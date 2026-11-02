import { SITE_URL, series } from "@/lib/catalogue";

export default function sitemap() {
  const lastModified = new Date();
  const pages = ["", "/products", "/about", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "daily",
    priority: path === "" ? 1 : 0.8,
  }));
  const products = series.map((s) => ({
    url: `${SITE_URL}/products/${s.slug}`,
    lastModified,
    changeFrequency: "daily",
    priority: 0.7,
  }));
  return [...pages, ...products];
}
