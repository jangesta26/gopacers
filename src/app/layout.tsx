'use client'
import { poppins } from "@/lib/fonts";
import '@/style/globals.css'
import { ThemeProvider } from "@/context/ThemeProvider";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import Head from "./head";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);


  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body
        className={poppins.className}
      >
        {loading ? (
          <Loader />
        ) : (
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
          >
            <DefaultLayout>
              {children}
            </DefaultLayout>
        </ThemeProvider>
        )}
      </body>
    </html>
  );
}
