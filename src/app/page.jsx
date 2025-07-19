"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "../components/forms/ContactForm";

export default function Home() {
  // Datos de prueba para las obras destacadas
  const obrasDestacadas = [
    {
      id: 1,
      titulo: "Atardecer en Montevideo",
      tecnica: "Óleo sobre lienzo",
      dimensiones: "60 x 80 cm",
      precio: 450,
      categoria: "paisaje",
      disponible: true,
      imagen: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop"
    },
    {
      id: 2,
      titulo: "Retrato de Esperanza",
      tecnica: "Óleo sobre lienzo",
      dimensiones: "40 x 50 cm",
      precio: 380,
      categoria: "retrato",
      disponible: false,
      imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop"
    },
    {
      id: 3,
      titulo: "Flores del Campo",
      tecnica: "Óleo sobre lienzo",
      dimensiones: "30 x 40 cm",
      precio: 220,
      categoria: "naturaleza",
      disponible: true,
      imagen: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop"
    },
    {
      id: 4,
      titulo: "Abstracción Azul",
      tecnica: "Óleo sobre lienzo",
      dimensiones: "70 x 90 cm",
      precio: 520,
      categoria: "abstracto",
      disponible: true,
      imagen: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop"
    },
    {
      id: 5,
      titulo: "Bodegón con Frutas",
      tecnica: "Óleo sobre lienzo",
      dimensiones: "45 x 60 cm",
      precio: 320,
      categoria: "naturaleza-muerta",
      disponible: true,
      imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop"
    },
    {
      id: 6,
      titulo: "Paisaje Rural",
      tecnica: "Óleo sobre lienzo",
      dimensiones: "50 x 70 cm",
      precio: 390,
      categoria: "paisaje",
      disponible: false,
      imagen: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop"
    },
    {
      id: 7,
      titulo: "Marina Celestial",
      tecnica: "Óleo sobre lienzo",
      dimensiones: "80 x 100 cm",
      precio: 680,
      categoria: "paisaje",
      disponible: true,
      imagen: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=500&fit=crop"
    }
  ];

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
        <div className="w-full relative z-10">
          {/* Section Title */}
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-4xl font-bold text-text"
              style={{ marginBottom: '1.5rem' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
              className="text-lg"
              style={{ color: 'var(--text-light)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Conoce a la artista detrás de cada obra
            </motion.p>
          </div>
          
          <div className="flex justify-center px-4 sm:px-6 lg:px-8" style={{ marginTop: '3rem' }}>
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 w-full max-w-6xl">
              {/* Text Content */}
              <motion.div 
                className="flex-1 md:max-w-lg text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
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
              
              {/* Image Content */}
              <motion.div 
                className="flex-1 md:max-w-lg flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="relative w-full max-w-sm">
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
                </div>
              </motion.div>
            </div>
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
          
          {/* Modern Grid of Featured Artworks */}
          <motion.div 
            className="flex justify-center w-full px-4 sm:px-6 lg:px-8"
            style={{ marginTop: '3rem', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 justify-items-center max-w-7xl">
              {obrasDestacadas.slice(0, 3).map((obra, index) => (
                <motion.div
                  key={obra.id}
                  className="group w-full max-w-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="bg-glass border border-border rounded-2xl overflow-hidden backdrop-blur-md shadow-lg hover:shadow-2xl hover:border-accent/40 transition-all duration-500">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 z-10"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <img 
                        src={obra.imagen}
                        alt={obra.titulo}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay gradient */}
                      <div 
                        className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                        style={{ background: 'linear-gradient(to top, rgba(26, 26, 46, 0.8) 0%, transparent 60%)' }}
                      />
                      
                      {/* Hover overlay with action buttons */}
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex gap-3">
                          <motion.button
                            className="backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium transition-all duration-300"
                            style={{ 
                              backgroundColor: 'rgba(78, 205, 196, 0.9)', 
                              color: 'var(--bg-dark)',
                              border: '1px solid var(--accent)'
                            }}
                            whileHover={{ scale: 1.05, backgroundColor: 'var(--accent)' }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Ver Detalles
                          </motion.button>
                          <motion.button
                            className="backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium transition-all duration-300"
                            style={{ 
                              backgroundColor: 'rgba(26, 26, 46, 0.9)', 
                              color: 'var(--accent)',
                              border: '1px solid var(--accent)'
                            }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(26, 26, 46, 0.95)' }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Encargar Similar
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <motion.h3 
                        className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300"
                        style={{ color: 'var(--text-light)' }}
                      >
                        {obra.titulo}
                      </motion.h3>
                      
                      <div className="space-y-2 mb-4">
                        <p className="text-sm lg:text-base" style={{ color: 'var(--text-muted)' }}>
                          {obra.tecnica}
                        </p>
                        <p className="text-sm lg:text-base" style={{ color: 'var(--text-muted)' }}>
                          {obra.dimensiones}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <motion.p 
                          className="text-2xl lg:text-3xl font-bold"
                          style={{ color: 'var(--accent)' }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          ${obra.precio} USD
                        </motion.p>
                        
                        <motion.div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: obra.disponible ? 'var(--success)' : 'var(--error)' }}
                          whileHover={{ scale: 1.2 }}
                          title={obra.disponible ? 'Disponible' : 'Vendida'}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

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

    </div>
  );
}
