import { useState, useEffect } from 'react';

const carouselItems = [
  { image: '/images/cup.png', label: 'Ice Coffee' },
  { image: '/images/thai-tea.png', label: 'Thé Thaï' },
  { image: '/images/matcha-tea.png', label: 'Matcha Latte' },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: '#14463A' }}
    >
      {/* Animated decoration - bottom left (same level as badge on mobile) */}
      <div className="absolute -left-8 sm:left-6 md:left-12 lg:left-20 bottom-[6%] sm:bottom-[30%] md:bottom-[32%] z-[15] pointer-events-none">
        <img
          src="/images/anim2.webp"
          alt=""
          width={288}
          height={288}
          loading="lazy"
          decoding="async"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain"
        />
      </div>

      {/* Animated decoration - top right (cookie, cropped on mobile) */}
      <div className="absolute -right-16 sm:right-6 md:right-12 lg:right-20 top-20 sm:top-20 md:top-24 z-[15] pointer-events-none">
        <img
          src="/images/anim4.webp"
          alt=""
          width={320}
          height={320}
          loading="lazy"
          decoding="async"
          className="w-40 h-40 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
        />
      </div>

      {/* Rotating Carousel of drinks */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[25%] sm:bottom-[14%] md:bottom-[13%] z-10">
        <div className="relative w-[90vw] max-w-[560px] sm:w-[500px] sm:max-w-none md:w-[540px] lg:w-[650px] h-[500px] sm:h-[580px] md:h-[650px] lg:h-[720px]">
          {carouselItems.map((item, index) => (
            <div
              key={item.image}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                index === currentImage
                  ? 'opacity-100 scale-100 rotate-0'
                  : 'opacity-0 scale-90 rotate-12'
              }`}
            >
              <img
                src={item.image}
                alt={item.label}
                width={400}
                height={628}
                fetchPriority={index === 0 ? 'high' : 'low'}
                decoding={index === 0 ? 'sync' : 'async'}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              {/* Étiquette penchée - bas droite */}
              <div
                className="absolute bottom-[15%] sm:bottom-[12%] md:bottom-[10%] right-[5%] sm:right-[8%] md:right-[10%] bg-amber-50 text-emerald-800 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-black uppercase text-xs sm:text-sm md:text-base tracking-wide shadow-lg"
                style={{ transform: 'rotate(12deg)', fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Description Text - hidden on mobile */}
      <div className="hidden sm:block absolute left-6 md:left-12 lg:left-20 bottom-[18%] md:bottom-[20%] max-w-[180px] md:max-w-sm z-20 animate-fade-in-up-delay-2">
        <p className="text-white/90 text-xs md:text-base leading-relaxed">
          Découvrez un univers de saveurs raffinées avec nos boissons et nos brunchs gourmands, préparés avec passion.
        </p>
      </div>

      {/* Badge - Été 2025 - bottom right (hidden on mobile) */}
      <div className="hidden sm:block absolute sm:right-6 md:right-12 lg:right-20 sm:bottom-[18%] md:bottom-[20%] z-20 animate-fade-in-up-delay-3">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 border-2 border-white rounded-full flex flex-col items-center justify-center text-white animate-pulse-scale cursor-pointer hover:bg-white/10 transition-colors duration-300">
          <span className="text-[6px] sm:text-[7px] md:text-[9px] lg:text-[10px] uppercase tracking-wider">Été</span>
          <span
            className="text-base sm:text-lg md:text-2xl lg:text-3xl font-black"
            style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
          >
            2025
          </span>
          <span className="text-[6px] sm:text-[7px] md:text-[9px] lg:text-[10px] uppercase tracking-wider">Besançon</span>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-3 md:py-6 overflow-hidden animate-fade-in-up-delay-2" style={{ backgroundColor: '#14463A' }}>
        <div className="flex whitespace-nowrap animate-marquee-hero" style={{ width: 'fit-content' }}>
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span
                className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-black text-white uppercase px-3 sm:px-4 md:px-8"
                style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
              >
                Thés de Spécialité
              </span>
              <span className="text-emerald-400 text-base sm:text-xl md:text-2xl animate-pulse">✦</span>
              <span
                className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-black text-white uppercase px-3 sm:px-4 md:px-8"
                style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
              >
                Brunch All-Day
              </span>
              <span className="text-emerald-400 text-base sm:text-xl md:text-2xl animate-pulse">✦</span>
              <span
                className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-black text-white uppercase px-3 sm:px-4 md:px-8"
                style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
              >
                Boissons Fraiches
              </span>
              <span className="text-emerald-400 text-base sm:text-xl md:text-2xl animate-pulse">✦</span>
              <span
                className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-black text-white uppercase px-3 sm:px-4 md:px-8"
                style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
              >
                Boissons Chaudes
              </span>
              <span className="text-emerald-400 text-base sm:text-xl md:text-2xl animate-pulse">✦</span>
              <span
                className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-black text-white uppercase px-3 sm:px-4 md:px-8"
                style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
              >
                Pâtisseries
              </span>
              <span className="text-emerald-400 text-base sm:text-xl md:text-2xl animate-pulse">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}