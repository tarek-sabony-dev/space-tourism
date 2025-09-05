import { Bellefair, Barlow } from "next/font/google";
import "./globals.css";

const bellefair = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
  weight: ["400"]
})

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata = {
  metadataBase: new URL("https://space-tourism-eosin-xi.vercel.app"),
  title: {
    default: "Space Tourism",
    template: "%s | Space Tourism"
  },
  description: "Explore destinations, meet the crew, and discover the technology behind space travel.",
  openGraph: {
    title: "Space Tourism",
    description: "Explore destinations, meet the crew, and discover the technology behind space travel.",
    url: "/",
    siteName: "Space Tourism",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Space Tourism",
    description: "Explore destinations, meet the crew, and discover the technology behind space travel."
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${barlow.variable} antialiased blue-900`}
      >
        {children}
      </body>
    </html>
  );
}
