import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";


const embedCode = Geist_Mono({
  variable: "--font-embed-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pétition en ligne",
  description: "Pétition en ligne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${embedCode.variable} antialiased  bg-[#F4F4F4] h-[100vh]`}
      >
         <Header />
        {children}
      </body>
    </html>
  );
}
