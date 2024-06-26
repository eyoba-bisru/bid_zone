import type { Metadata } from "next";

import "./globals.css";
import { Poppins as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "BidZone",
  description: "Discover amazing deals through bidding",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ScrollToTop />
          <Navbar />

          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
