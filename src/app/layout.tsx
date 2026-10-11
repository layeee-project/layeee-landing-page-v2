import type { Metadata, Viewport } from "next";
import { Google_Sans, Space_Mono } from "next/font/google";
import Sprite from "@/components/layout/Sprite";
import "./globals.css";

const fontSans = Google_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-google-sans",
  /* next/font has no fallback metrics for Google Sans */
  adjustFontFallback: false,
});

const fontMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Layeee",
  description:
    "Layeee is a 3D printer and an app. Find a model, shape it in the builder, and print it on your S1 or at a printer near you.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F37820",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="bg-bg font-sans text-[clamp(15px,1.17vw,16.5px)] leading-[1.6] text-fg antialiased">
        <Sprite />
        {children}
      </body>
    </html>
  );
}
