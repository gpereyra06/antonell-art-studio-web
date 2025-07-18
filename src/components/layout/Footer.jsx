"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-background-light border-t border-border relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-1/4 left-1/6 w-16 h-16 bg-primary/5 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/5 w-12 h-12 bg-secondary/5 rounded-full blur-xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
          {/* Brand & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="text-xl font-semibold text-text mb-4 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              AntonellArt Studio
            </motion.h4>
            <div className="grid grid-cols-1 gap-y-1">
              <motion.a
                href="https://instagram.com/antonellartstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors duration-200 text-base text-center flex justify-center"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <motion.svg 
                  className="w-4 h-4" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                </motion.svg>
              </motion.a>
              <span className="text-text-muted text-base text-center">Instagram</span>
            </div>
          </motion.div>

          {/* Quick Links - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-text mb-4 text-center">Enlaces</h4>
            <div className="grid grid-cols-3 gap-x-2 gap-y-2">
              <Link 
                href="#about" 
                className="text-base text-center block py-1 transition-all duration-300"
                style={{
                  textDecoration: 'none',
                  color: '#cccccc'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#d4af37';
                  e.target.style.textDecoration = 'underline';
                  e.target.style.textDecorationColor = '#d4af37';
                  e.target.style.textDecorationThickness = '2px';
                  e.target.style.textUnderlineOffset = '4px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cccccc';
                  e.target.style.textDecoration = 'none';
                }}
              >
                Sobre Mí
              </Link>
              <Link 
                href="#gallery" 
                className="text-base text-center block py-1 transition-all duration-300"
                style={{
                  textDecoration: 'none',
                  color: '#cccccc'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#d4af37';
                  e.target.style.textDecoration = 'underline';
                  e.target.style.textDecorationColor = '#d4af37';
                  e.target.style.textDecorationThickness = '2px';
                  e.target.style.textUnderlineOffset = '4px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cccccc';
                  e.target.style.textDecoration = 'none';
                }}
              >
                Galería
              </Link>
              <Link 
                href="#process" 
                className="text-base text-center block py-1 transition-all duration-300"
                style={{
                  textDecoration: 'none',
                  color: '#cccccc'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#d4af37';
                  e.target.style.textDecoration = 'underline';
                  e.target.style.textDecorationColor = '#d4af37';
                  e.target.style.textDecorationThickness = '2px';
                  e.target.style.textUnderlineOffset = '4px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cccccc';
                  e.target.style.textDecoration = 'none';
                }}
              >
                Proceso
              </Link>
              <Link 
                href="#pricing" 
                className="text-base text-center block py-1 transition-all duration-300"
                style={{
                  textDecoration: 'none',
                  color: '#cccccc'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#d4af37';
                  e.target.style.textDecoration = 'underline';
                  e.target.style.textDecorationColor = '#d4af37';
                  e.target.style.textDecorationThickness = '2px';
                  e.target.style.textUnderlineOffset = '4px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cccccc';
                  e.target.style.textDecoration = 'none';
                }}
              >
                Precios
              </Link>
              <Link 
                href="#blog" 
                className="text-base text-center block py-1 transition-all duration-300"
                style={{
                  textDecoration: 'none',
                  color: '#cccccc'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#d4af37';
                  e.target.style.textDecoration = 'underline';
                  e.target.style.textDecorationColor = '#d4af37';
                  e.target.style.textDecorationThickness = '2px';
                  e.target.style.textUnderlineOffset = '4px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cccccc';
                  e.target.style.textDecoration = 'none';
                }}
              >
                Blog
              </Link>
              <Link 
                href="#contact" 
                className="text-base text-center block py-1 transition-all duration-300"
                style={{
                  textDecoration: 'none',
                  color: '#cccccc'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#d4af37';
                  e.target.style.textDecoration = 'underline';
                  e.target.style.textDecorationColor = '#d4af37';
                  e.target.style.textDecorationThickness = '2px';
                  e.target.style.textUnderlineOffset = '4px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#cccccc';
                  e.target.style.textDecoration = 'none';
                }}
              >
                Contacto
              </Link>
            </div>
          </motion.div>

          {/* Contact Info - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-text mb-4 text-center">Contacto</h4>
            <div className="grid grid-cols-1 gap-y-1">
              <motion.a 
                href="mailto:anguarilla@gmail.com" 
                className="text-text-muted hover:text-primary transition-colors duration-200 text-base text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                anguarilla@gmail.com
              </motion.a>
              <motion.a 
                href="https://wa.me/59899123456" 
                className="text-text-muted hover:text-primary transition-colors duration-200 text-base text-center flex items-center justify-center gap-1"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <motion.svg 
                  className="w-4 h-4" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </motion.svg>
                +598 99 123 456
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-border w-full text-center" 
          style={{ marginTop: '1rem', paddingTop: '1rem', paddingBottom: '1rem' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-text-muted">
            © 2025 AntonellArt Studio - Uruguay. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;