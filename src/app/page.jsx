"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ContactForm from "../components/forms/ContactForm";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Datos de prueba para las obras destacadas
  const obrasDestacadas = [
    {
      id: 1,
      titulo: "Atardecer en Montevideo",
      tecnica: "Óleo sobre lienzo",
      dimensiones: "60 x 80 cm",
      precio: 450,
      categoria: "paisaje",
      imagen: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop"
    },
    {
      id: 2,
      titulo: "Retrato de Esperanza",
      tecnica: "Óleo sobre lienzo",
      dimensiones: "40 x 50 cm",
      precio: 380,
      categoria: "retrato",
      imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop"
    },
    {
      id: 3,
      titulo: "Flores del Campo",
      tecnica: "Óleo sobre lienzo",
      dimensiones: "30 x 40 cm",
      precio: 220,
      categoria: "naturaleza",
      imagen: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop"
    },
    {
      id: 4,
      titulo: "Abstracción Azul",
      tecnica: "Óleo sobre lienzo",
      dimensiones: "70 x 90 cm",
      precio: 520,
      categoria: "abstracto",
      imagen: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop"
    },
    {
      id: 5,
      titulo: "Bodegón con Frutas",
      tecnica: "Óleo sobre lienzo",
      dimensiones: "45 x 60 cm",
      precio: 320,
      categoria: "naturaleza-muerta",
      imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop"
    },
    {
      id: 6,
      titulo: "Paisaje Rural",
      tecnica: "Óleo sobre lienzo",
      dimensiones: "50 x 70 cm",
      precio: 390,
      categoria: "paisaje",
      imagen: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop"
    },
    {
      id: 7,
      titulo: "Marina Celestial",
      tecnica: "Óleo sobre lienzo",
      dimensiones: "80 x 100 cm",
      precio: 680,
      categoria: "paisaje",
      imagen: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=500&fit=crop"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % obrasDestacadas.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [obrasDestacadas.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % obrasDestacadas.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + obrasDestacadas.length) % obrasDestacadas.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden" style={{ padding: '5rem 1rem', background: 'var(--gradient-hero)' }}>
        <div className="absolute inset-0 bg-[url('/art-background.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center w-full px-4 flex flex-col items-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-text"
            style={{ marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Antonell<motion.span 
              style={{ color: 'var(--accent)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              artStudio
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-2xl text-center"
            style={{ color: 'var(--text-light)', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Descubre obras de arte originales creadas a mano en Uruguay. 
            Explora mi galería de pinturas al óleo y solicita encargos personalizados.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center"
            style={{ gap: '2rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="#gallery"
                className="font-semibold text-base inline-block transition-all duration-300 text-center"
                style={{ 
                  backgroundColor: 'var(--primary)',
                  color: 'var(--text-light)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: '2px solid var(--primary)',
                  boxShadow: 'var(--shadow-lg)',
                  width: '160px'
                }}
              >
                Ver galería
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                className="font-semibold text-base inline-block transition-all duration-300 text-center"
                style={{ 
                  backgroundColor: 'var(--glass)',
                  color: 'var(--accent)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: '2px solid var(--accent)',
                  boxShadow: 'var(--shadow-lg)',
                  backdropFilter: 'blur(8px)',
                  width: '160px'
                }}
              >
                Quiero el mío
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <motion.section 
        id="about"
        className="relative overflow-hidden" 
        style={{ padding: '5rem 1rem', background: 'var(--gradient-hero-reverse)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >  
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center justify-items-center">
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl font-bold mb-6"
                style={{ color: 'var(--text-light)' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Sobre <motion.span 
                  style={{ color: 'var(--accent)' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Antonella
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-lg mb-6 leading-relaxed"
                style={{ color: 'var(--text-light)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                Soy una artista uruguaya apasionada por la pintura al óleo. Cada obra que creo 
                es única y refleja mi visión personal del mundo que nos rodea. Mi trabajo abarca 
                desde paisajes hasta retratos, siempre buscando capturar la esencia y emoción 
                en cada pincelada.
              </motion.p>
              <motion.p 
                className="text-lg mb-8 leading-relaxed"
                style={{ color: 'var(--text-light)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                Ofrezco tanto obras originales como encargos personalizados, trabajando 
                estrechamente con cada cliente para crear piezas que superen sus expectativas.
              </motion.p>
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  href="/about"
                  className="font-semibold text-lg border-b-2 transition-all duration-300 inline-block"
                  style={{ 
                    color: 'var(--accent)',
                    borderBottomColor: 'var(--accent)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--primary)';
                    e.target.style.borderBottomColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'var(--accent)';
                    e.target.style.borderBottomColor = 'var(--accent)';
                  }}
                >
                  Conoce mi historia →
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative mx-auto"
              style={{ maxWidth: '20rem' }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-20 h-20 rounded-full blur-xl"
                style={{ backgroundColor: 'rgba(78, 205, 196, 0.1)' }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full blur-xl"
                style={{ backgroundColor: 'rgba(45, 156, 219, 0.1)' }}
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              
              <motion.div 
                className="bg-glass border border-border rounded-xl p-6 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 relative"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="aspect-square w-full rounded-xl relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1) 0%, rgba(45, 156, 219, 0.1) 100%)' }}
                    animate={{ 
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop&crop=face"
                    alt="Antonella - Artista"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <motion.div 
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(26, 26, 46, 0.4) 0%, transparent 100%)' }}
                    whileHover={{ opacity: 0.7 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 rounded-xl opacity-0 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(78, 205, 196, 0.2)' }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="text-white text-center"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-lg font-semibold">Antonella</p>
                      <p className="text-sm">Artista Uruguaya</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Works Preview */}
      <section id="gallery" className="relative overflow-hidden" style={{ padding: '5rem 1rem', background: 'var(--gradient-hero)' }}>  
        <div className="w-full relative z-10">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-4xl font-bold text-text"
              style={{ marginBottom: '1.5rem' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Obras <motion.span 
                style={{ color: 'var(--accent)' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Destacadas
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg"
              style={{ color: 'var(--text-light)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Una selección de mis trabajos más recientes
            </motion.p>
          </div>
          
          {/* Modern Single Artwork Carousel */}
          <div className="flex justify-center w-full" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <div className="relative mx-auto" style={{ paddingLeft: '1rem', paddingRight: '1rem', maxWidth: '28rem' }}>
              <div className="overflow-hidden rounded-2xl group">
              <motion.div 
                className="flex"
                animate={{ x: `${-currentSlide * 100}%` }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              >
                {obrasDestacadas.map((obra, index) => (
                  <motion.div 
                    key={obra.id}
                    className="w-full flex-shrink-0"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-glass border border-border rounded-xl overflow-hidden backdrop-blur-md shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
                      <div className="aspect-[4/3] sm:aspect-[5/3] lg:aspect-[16/9] relative overflow-hidden rounded-xl">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <img 
                          src={obra.imagen}
                          alt={obra.titulo}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 rounded-xl"
                        />
                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(26, 26, 46, 0.6) 0%, transparent 100%)' }} />
                        
                        {/* Always Visible Info */}
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <div className="backdrop-blur-sm rounded-lg p-4 sm:p-6" style={{ backgroundColor: 'rgba(26, 26, 46, 0.8)' }}>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>{obra.titulo}</h3>
                            <p className="text-sm sm:text-base text-gray-200 mb-1">{obra.tecnica}</p>
                            <p className="text-sm sm:text-base text-gray-200 mb-3">{obra.dimensiones}</p>
                            <p className="font-bold text-lg sm:text-xl lg:text-2xl" style={{ color: 'var(--accent)' }}>${obra.precio} USD</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 sm:mt-10 lg:mt-12 space-x-3">
              {obrasDestacadas.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentSlide ? 'scale-125' : ''
                  }`}
                  style={{ backgroundColor: index === currentSlide ? 'var(--accent)' : 'rgba(78, 205, 196, 0.3)' }}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.1 }}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <motion.button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 backdrop-blur-sm rounded-full p-3 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: 'rgba(26, 26, 46, 0.8)' }}
              onClick={prevSlide}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(26, 26, 46, 0.9)' }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 backdrop-blur-sm rounded-full p-3 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: 'rgba(26, 26, 46, 0.8)' }}
              onClick={nextSlide}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(26, 26, 46, 0.9)' }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
            </div>
          </div>

          <motion.div 
            className="text-center px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="#gallery"
                className="font-semibold text-base inline-block transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--primary)',
                  color: 'var(--text-light)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: '2px solid var(--primary)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                Ver Galería Completa
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="relative overflow-hidden" 
        style={{ padding: '5rem 1rem', background: 'var(--gradient-hero-reverse)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold"
              style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              ¡<span style={{ color: 'var(--accent)' }}>Conectemos</span>!
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-center"
              style={{ 
                color: 'var(--text-light)', 
                opacity: 0.9, 
                marginBottom: '1.5rem',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Me encantaría escuchar de ti y ayudarte a crear algo único. No dudes en escribirme.
            </motion.p>
          </div>

          {/* Formulario */}
          <div className="w-full flex justify-center" style={{ marginBottom: '3rem' }}>
            <div className="w-full max-w-2xl">
              <ContactForm />
            </div>
          </div>

        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        id="process"
        className="relative overflow-hidden" 
        style={{ padding: '5rem 1rem', background: 'var(--gradient-hero)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold"
            style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Mi <span style={{ color: 'var(--accent)' }}>Proceso</span>
          </motion.h2>
          <motion.p 
            className="text-lg"
            style={{ color: 'var(--text-light)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Conoce cómo transformo ideas en obras de arte únicas
          </motion.p>
          <motion.div 
            className="text-lg"
            style={{ color: 'var(--text-light)', marginTop: '2rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>Contenido del proceso creativo próximamente...</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        id="pricing"
        className="relative overflow-hidden" 
        style={{ padding: '5rem 1rem', background: 'var(--gradient-hero-reverse)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold"
            style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span style={{ color: 'var(--accent)' }}>Precios</span> y Tamaños
          </motion.h2>
          <motion.p 
            className="text-lg"
            style={{ color: 'var(--text-light)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Información sobre precios y opciones de encargo
          </motion.p>
          <motion.div 
            className="text-lg"
            style={{ color: 'var(--text-light)', marginTop: '2rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>Tabla de precios próximamente...</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Section */}
      <motion.section 
        id="blog"
        className="relative overflow-hidden" 
        style={{ padding: '5rem 1rem', background: 'var(--gradient-hero)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold"
            style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span style={{ color: 'var(--accent)' }}>Blog</span> Artístico
          </motion.h2>
          <motion.p 
            className="text-lg"
            style={{ color: 'var(--text-light)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Historias, inspiraciones y proceso creativo
          </motion.p>
          <motion.div 
            className="text-lg"
            style={{ color: 'var(--text-light)', marginTop: '2rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>Artículos del blog próximamente...</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
