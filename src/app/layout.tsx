'use client'
import { poppins } from "@/lib/fonts";
import '@/style/globals.css'
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
          <>
            {children}
          </>
        )}
      </body>
    </html>
  );
}
