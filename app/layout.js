import React from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={poppins.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
