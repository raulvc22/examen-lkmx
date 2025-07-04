import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./components/styles/globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Navbar from './components/layout/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Examen LKMX",
  description: "Software Engineer Test  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <Navbar />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
