import type { Metadata } from "next";
import "./components/styles/globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { syne } from '@/app/components/styles/fonts';

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
        className={`${syne.className} antialiased min-h-screen flex flex-col`}
      >
        <AppRouterCacheProvider options={{enableCssLayer: true}}>
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
