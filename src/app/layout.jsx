import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "AntonellartStudio - Pinturas al Óleo",
  description: "Galería de arte para venta de pinturas al óleo y encargos personalizados.",
  keywords: ["pintura", "óleo", "arte", "Uruguay", "galería", "encargos", "antonella"],
  authors: [{ name: "Antonella Guarilla" }],
  openGraph: {
    title: "AntonellartStudio - Pinturas al Óleo",
    description: "Galería de arte para venta de pinturas al óleo y encargos personalizados.",
    url: "https://antonellartstudio.com.uy",
    siteName: "AntonellartStudio",
    locale: "es_UY",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
