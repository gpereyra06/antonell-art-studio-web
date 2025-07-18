import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-background via-background-light to-background">
        <div className="absolute inset-0 bg-[url('/art-background.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-text mb-6">
            Pinturas al Óleo <span className="text-primary">Únicas</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-muted mb-8 max-w-2xl mx-auto">
            Descubre obras de arte originales creadas a mano en Uruguay. 
            Explora mi galería de pinturas al óleo y solicita encargos personalizados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/gallery"
              className="bg-primary hover:bg-primary-dark text-background font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Ver Catálogo
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg"
            >
              Solicitar Encargo
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
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
            <div className="bg-glass border border-border rounded-lg p-8 backdrop-blur-sm">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <p className="text-text-muted text-center">
                  Imagen del<br />
                  Artista
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Preview */}
      <section className="py-20 px-4 bg-background-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text mb-4">Obras <span className="text-primary">Destacadas</span></h2>
            <p className="text-text-muted text-lg">Una selección de mis trabajos más recientes</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="bg-glass border border-border rounded-lg overflow-hidden backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <p className="text-text-muted">Obra {item}</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-text font-semibold text-lg mb-2">Título de la Obra {item}</h3>
                    <p className="text-text-muted mb-2">Óleo sobre lienzo</p>
                    <p className="text-text-muted text-sm">40 x 60 cm</p>
                    <p className="text-primary font-semibold text-lg mt-3">$XXX USD</p>
                  </div>
                </div>
              </div>
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
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
