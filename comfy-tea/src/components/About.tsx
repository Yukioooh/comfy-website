import { useState, useEffect } from 'react';

const images = [
  '/images/gateau1.jpg',
  '/images/cookie1.jpg',
  '/images/gateau3.jpg',
];

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="bg-emerald-800 relative overflow-hidden">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pb-32 md:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image with badge */}
          <div className="relative flex justify-center lg:justify-start lg:-ml-56 xl:-ml-72">
            {/* Badge */}
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 sm:left-16 sm:translate-x-0 z-10 bg-amber-50 text-emerald-800 px-4 sm:px-5 py-2 sm:py-3 rounded-full font-black uppercase text-[10px] sm:text-xs tracking-wide shadow-lg"
              style={{ transform: 'rotate(-12deg)' }}
            >
              <span className="block text-center leading-tight">Sans</span>
              <span className="block text-center leading-tight">Réservation</span>
            </div>

            {/* Image container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-lg overflow-hidden shadow-2xl">
              {images.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt={`Plat ${index + 1}`}
                  width={384}
                  height={384}
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right - Text content */}
          <div className="text-white space-y-6 sm:space-y-8 lg:-ml-12 xl:-ml-20">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight"
              style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
            >
              Cozy Drinks
              <br />
              & Brunches
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-lg">
              Comfy c'est la promesse de démocratiser le thé de spécialité à Besançon
              en proposant une carte à la fois décontractée et gourmande. Les incontournables
              du brunch qu'on a plaisir à déguster à toute heure de la journée revisités
              avec une touche d'originalité ! Laissez-vous surprendre par notre salon de thé
              en plein cœur de Besançon.
            </p>

            <button className="flex items-center gap-3 text-white font-bold uppercase tracking-wide hover:text-amber-200 transition-colors group text-sm sm:text-base">
              <span className="w-6 h-6 sm:w-7 sm:h-7 border-2 border-current rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-emerald-800 transition-all">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
              En lire plus
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling marquee - seamless loop with alternating backgrounds */}
      <div className="overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee" style={{ width: 'fit-content' }}>
          {/* First set */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`first-${i}`}
              className={`flex-shrink-0 ${i % 2 === 1 ? 'bg-amber-50' : ''}`}
            >
              <span
                className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black px-1 sm:px-2 block ${
                  i % 2 === 0 ? 'text-white' : 'text-emerald-800'
                }`}
                style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
              >
                C
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`second-${i}`}
              className={`flex-shrink-0 ${i % 2 === 1 ? 'bg-amber-50' : ''}`}
            >
              <span
                className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black px-1 sm:px-2 block ${
                  i % 2 === 0 ? 'text-white' : 'text-emerald-800'
                }`}
                style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
              >
                C
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
