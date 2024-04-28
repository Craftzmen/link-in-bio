import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Craftzmen | Link in Bio page",
  description: "Abdullah Imran, An Indie app developer currently living in pakistan persuing in tech, Has the ability to add creativity to anything. Loves to code anything #programmer",
  keywords: "portfolio, links, developer"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
