import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MyFirstRow — Event Data Infrastructure",
    template: "%s | MyFirstRow",
  },
  description:
    "Real-time event data infrastructure. Access Ticketmaster inventory, pricing, and availability through a reliable, well-documented API.",
  metadataBase: new URL("https://myfirstrow.com"),
  openGraph: {
    title: "MyFirstRow — Event Data Infrastructure",
    description:
      "Access real-time Ticketmaster inventory, pricing, and availability through a clean, well-documented API.",
    url: "https://myfirstrow.com",
    siteName: "MyFirstRow",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
