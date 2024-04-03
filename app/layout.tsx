import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "./components/Navbar";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shirt shop",
  description: "A simple shirt shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${poppins.className} h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
