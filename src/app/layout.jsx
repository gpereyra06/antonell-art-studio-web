import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "AntonellArt Studio - Pinturas al Óleo Únicas",
  description: "Galería de arte para venta de pinturas al óleo y encargos personalizados. Arte original creado a mano en Uruguay.",
  keywords: ["pintura", "óleo", "arte", "Uruguay", "galería", "encargos", "antonella"],
  authors: [{ name: "Antonella" }],
  openGraph: {
    title: "AntonellArt Studio - Pinturas al Óleo Únicas",
    description: "Arte original creado a mano en Uruguay",
    url: "https://antonellartstudio.com.uy",
    siteName: "AntonellArt Studio",
    locale: "es_UY",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
