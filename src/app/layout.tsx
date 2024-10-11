
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Helvetica.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Helvetica.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Masar By Sani - مسار من صانع",
  description: " مسار من صانع هو طريقك لتترجم اهتمامك في الذكاء الاصطناعي، هندسة البرمجيات، تجربة المستخدم، وإدارة المنتجات لمنتج رقمي جاهز",
  icons:[]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased gradient`}
      >
        {children}
      </body>
    </html>
  );
}
