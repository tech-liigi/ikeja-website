import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import 'react-multi-carousel/lib/styles.css'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export const metadata: Metadata = {
  title: "Ikeja Football News, Fixtures, Scores & Results",
  description: "For all the latest Ikeja news, visit the official website of the Ikeja.",
  icons: {
    icon: "/Ikeja_FC_Logo.png"
  },
  openGraph: {
    title: 'Ikeja Football News, Fixtures, Scores & Results',
    description: "For all the latest Ikeja news, visit the official website of the Ikeja.",
    images: ["/Ikeja_FC_Logo.png"]
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
