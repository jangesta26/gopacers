'use client'
import '@/style/globals.css'
import { ThemeProvider } from "@/context/ThemeProvider";
import DefaultLayout from "@/components/Layout/DefaultLayout";


export default function UserRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
    >
      <DefaultLayout>
        {children}
      </DefaultLayout>
  </ThemeProvider>

  );
}
