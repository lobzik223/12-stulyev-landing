import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const serif = Cormorant_Garamond({ 
  subsets: ["latin", "cyrillic"], 
  weight: ["400","600","700"], 
  variable: "--font-serif" 
});

const sans = Inter({ 
  subsets: ["latin", "cyrillic"], 
  variable: "--font-sans" 
});

export const metadata: Metadata = {
  title: "«12 стульев» — театральный спектакль",
  description: "Гастрольное путешествие по городам. Остап Бендер, юмор и охота за сокровищем.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans bg-[#0e0b09] text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
