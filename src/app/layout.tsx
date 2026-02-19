import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-cursive",
  subsets: ["latin"],
});

import Navbar from "@/components/layout/Navbar";
import RightSidebar from "@/components/layout/RightSidebar";

export const metadata: Metadata = {
  title: "AsmaSmiles | Photographer & Content Creator",
  description: "Portfolio of AsmaSmiles, professional photographer and content creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dancingScript.variable} antialiased bg-black text-white font-sans selection:bg-white selection:text-black`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="sm:pr-16 md:pr-20">
          {children}
        </main>
        <RightSidebar />
      </body>
    </html>
  );
}
