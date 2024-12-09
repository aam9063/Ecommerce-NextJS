import type { Metadata } from "next";
import { inter } from "@/config/fonts";

import "./globals.css";


export const metadata: Metadata = {
  title: "Niki Shop",
  description: "A simple e-commerce shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
