import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";



export const metadata: Metadata = {
  title: "Figma Design",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
