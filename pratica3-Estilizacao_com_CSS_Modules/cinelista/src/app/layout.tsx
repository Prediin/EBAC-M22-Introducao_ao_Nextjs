import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

export const metadata: Metadata = {
  title: "Cinelista",
  description: "No Cinelista, você encontra os títulos mais populares, em alta e melhor avaliados em um só lugar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
