import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

const fontSans = Plus_Jakarta_Sans({
  subsets:["latin"],
  weight:["300", "400", "500", "600", "700"],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: "CarePulse",
  description: "A patient management system with NextJs, React, Tailwind, AppWrite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}>{children}</body>
    </html>
  );
}
