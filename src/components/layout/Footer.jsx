import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background-light border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">AntonellArt Studio</h3>
            <p className="text-text-muted mb-4">
              Pinturas al óleo únicas y encargos personalizados. Arte original creado a mano en Uruguay.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/antonellartstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/gallery" className="text-text-muted hover:text-primary transition-colors duration-200">Galería</Link></li>
              <li><Link href="/about" className="text-text-muted hover:text-primary transition-colors duration-200">Sobre Mí</Link></li>
              <li><Link href="/process" className="text-text-muted hover:text-primary transition-colors duration-200">Proceso</Link></li>
              <li><Link href="/pricing" className="text-text-muted hover:text-primary transition-colors duration-200">Precios</Link></li>
              <li><Link href="/blog" className="text-text-muted hover:text-primary transition-colors duration-200">Blog</Link></li>
              <li><Link href="/contact" className="text-text-muted hover:text-primary transition-colors duration-200">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Contacto</h4>
            <div className="space-y-2">
              <p className="text-text-muted">
                <strong>Email:</strong><br />
                <a href="mailto:antonella@antonellartstudio.com.uy" className="hover:text-primary transition-colors duration-200">
                  antonella@antonellartstudio.com.uy
                </a>
              </p>
              <p className="text-text-muted">
                <strong>WhatsApp:</strong><br />
                <a href="https://wa.me/59899123456" className="hover:text-primary transition-colors duration-200">
                  +598 99 123 456
                </a>
              </p>
              <p className="text-text-muted">
                <strong>Ubicación:</strong><br />
                Uruguay
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-text-muted">
            © 2024 AntonellArt Studio - Uruguay. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;