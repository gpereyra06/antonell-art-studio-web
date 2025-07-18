"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Proceso', href: '#process' },
    { name: 'Precios', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300"
      style={{ 
        background: 'var(--gradient-hero-reverse)',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.3)' : '0 4px 6px rgba(0,0,0,0.1)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between h-20 w-full px-8">
        {/* Logo y Título */}
        <motion.div 
          className="flex items-center gap-3" 
          style={{ marginLeft: '1rem' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/AntonellartStudio.jpg"
                alt="AntonellartStudio Logo"
                width={120}
                height={40}
                priority
                className="h-8 sm:h-10 w-auto object-contain rounded-lg"
              />
            </motion.div>
            {/* Título visible en mobile */}
            <motion.span
              className="md:hidden text-xl font-semibold"
              style={{ color: 'var(--text-light)' }}
              whileHover={{ color: 'var(--accent)' }}
              transition={{ duration: 0.2 }}
            >
              AntonellartStudio
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation - Centered */}
        <motion.div 
          className="hidden md:flex absolute left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.05, delay: 0.2 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-text font-medium text-lg transition-all duration-300"
                  style={{
                    borderBottom: '2px solid transparent',
                    color: '#ffffff'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--accent)';
                    e.target.style.borderBottomColor = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.borderBottomColor = 'transparent';
                  }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Instagram Link */}
        <motion.div 
          className="hidden md:flex items-center" 
          style={{ marginRight: '2rem' }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="https://instagram.com/antonellartstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text transition-colors duration-300 p-3 rounded-full hover:bg-glass"
            style={{ 
              color: '#ffffff',
              '--hover-color': 'var(--accent)'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#ffffff';
            }}
            aria-label="Instagram"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Mobile menu button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-text focus:outline-none p-3 rounded-lg transition-all duration-300"
          style={{ 
            color: '#ffffff',
            backgroundColor: isMenuOpen ? 'var(--glass)' : 'transparent',
            border: '1px solid',
            borderColor: isMenuOpen ? 'var(--accent)' : 'transparent'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = 'var(--accent)';
            e.target.style.backgroundColor = 'var(--glass)';
            e.target.style.borderColor = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#ffffff';
            e.target.style.backgroundColor = isMenuOpen ? 'var(--glass)' : 'transparent';
            e.target.style.borderColor = isMenuOpen ? 'var(--accent)' : 'transparent';
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <motion.svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            ) : (
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.svg>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-sm rounded-b-lg" style={{ 
            background: 'var(--gradient-hero-reverse)'
          }}>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-text hover:bg-glass transition-all duration-200 font-medium text-lg rounded-md"
                style={{ color: '#ffffff' }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#ffffff';
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t mt-4 pt-4" style={{ borderTopColor: 'var(--border)' }}>
              <a
                href="https://instagram.com/antonellartstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-3 text-text hover:bg-glass transition-all duration-200 font-medium text-lg rounded-md"
                style={{ color: '#ffffff' }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#ffffff';
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram @antonellartstudio
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;