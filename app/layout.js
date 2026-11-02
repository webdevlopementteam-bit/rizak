import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, company } from "@/lib/catalogue";
import "./globals.css";

// Poppins is not a variable font, so every weight the site uses is listed
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} — Modular Office Furniture & Metal Leg Frames | ${company.brand}`,
    template: `%s | ${company.name}`,
  },
  description:
    "ISO & BIFMA certified manufacturer of modular workstations, metal leg frames, conference tables, executive desks and education furniture. Factory in Mundka, New Delhi.",
  openGraph: {
    siteName: company.name,
    images: ["/catalogue/lifestyle-1.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
