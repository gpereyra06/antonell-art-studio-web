"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-background via-background-light to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('/art-background.jpg')] bg-cover bg-center opacity-20"></div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
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
          className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="relative z-10 text-center w-full px-4 flex flex-col items-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-text mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Pinturas al Óleo <motion.span 
              className="text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Únicas
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-text-muted mb-8 max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Descubre obras de arte originales creadas a mano en Uruguay. 
            Explora mi galería de pinturas al óleo y solicita encargos personalizados.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/gallery"
                className="bg-primary hover:bg-primary-dark text-background font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl inline-block"
              >
                Ver Catálogo
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl inline-block backdrop-blur-sm bg-glass"
              >
                Solicitar Encargo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="" style={{ paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center">
            <div className="max-w-md mx-auto">
              <h2 className="text-4xl font-bold text-text mb-6">Sobre <span className="text-primary">Antonella</span></h2>
              <p className="text-text-muted text-lg mb-6 leading-relaxed">
                Soy una artista uruguaya apasionada por la pintura al óleo. Cada obra que creo 
                es única y refleja mi visión personal del mundo que nos rodea. Mi trabajo abarca 
                desde paisajes hasta retratos, siempre buscando capturar la esencia y emoción 
                en cada pincelada.
              </p>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                Ofrezco tanto obras originales como encargos personalizados, trabajando 
                estrechamente con cada cliente para crear piezas que superen sus expectativas.
              </p>
              <Link 
                href="/about"
                className="text-primary hover:text-primary-dark font-semibold text-lg border-b-2 border-primary hover:border-primary-dark transition-colors duration-200"
              >
                Conoce mi historia →
              </Link>
            </div>
            <motion.div 
              className="bg-glass border border-border rounded-xl p-6 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 max-w-md mx-auto"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotate: 1 }}
            >
              <motion.div 
                className="aspect-square w-full rounded-xl relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Works Preview */}
      <section className="bg-background-light" style={{ paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text mb-4">Obras <span className="text-primary">Destacadas</span></h2>
            <p className="text-text-muted text-lg">Una selección de mis trabajos más recientes</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {obrasDestacadas.map((obra, index) => (
              <motion.div 
                key={obra.id} 
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-glass border border-border rounded-xl overflow-hidden backdrop-blur-md hover:bg-white/20 transition-all duration-500 shadow-lg hover:shadow-2xl hover:border-primary/30">
                  <div className="aspect-square relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <img 
                      src={obra.imagen}
                      alt={obra.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <motion.div 
                    className="p-6"
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-text font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {obra.titulo}
                    </h3>
                    <p className="text-text-muted mb-2">{obra.tecnica}</p>
                    <p className="text-text-muted text-sm">{obra.dimensiones}</p>
                    <motion.p 
                      className="text-primary font-semibold text-lg mt-3"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      ${obra.precio} USD
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/gallery"
              className="bg-primary hover:bg-primary-dark text-background font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Ver Todas las Obras
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="" style={{ paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-text mb-6">¿Tienes una <span className="text-primary">Visión Especial</span>?</h2>
          <p className="text-text-muted text-lg mb-8">
            Trabajo con encargos personalizados para crear la obra perfecta que se adapte a tu espacio y gustos.
          </p>
          <Link 
            href="/process"
            className="bg-secondary hover:bg-secondary/80 text-text font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
          >
            Conoce mi Proceso
          </Link>
        </div>
      </section>
    </div>
  );
}
