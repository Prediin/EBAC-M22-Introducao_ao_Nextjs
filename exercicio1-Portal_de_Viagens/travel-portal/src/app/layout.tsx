import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Travel Portal",
  icons: {
    icon: "/travel-portal-icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900 antialiased selection:bg-teal-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
