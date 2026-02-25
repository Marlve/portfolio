import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Derich Marlve",
  description: "a student's portfoliop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmMono.className} pl-4 pr-6`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
