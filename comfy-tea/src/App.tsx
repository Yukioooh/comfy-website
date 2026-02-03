import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Instagram from './components/Instagram';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        {/* White background section with cards */}
        <section id="products" className="bg-amber-50 py-16 md:py-24">
          {/* Cards container - full width with gaps */}
          <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 md:px-6">

            {/* Card 1 - Boissons Fraiches */}
            <div className="flex-shrink-0 w-72 md:flex-1 snap-center bg-amber-50 border-2 border-emerald-800 rounded-3xl overflow-hidden flex flex-col min-h-[580px] md:min-h-[820px]">
              <div className="p-6 md:p-8 pt-8 md:pt-10">
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-black text-emerald-800 uppercase leading-tight"
                  style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
                >
                  Boissons<br />Fraiches
                </h3>
              </div>
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full h-full flex items-center justify-center rounded-2xl overflow-hidden">
                  <img
                    src="/images/cold-drink.png"
                    alt="Boisson Fraiche"
                    width={375}
                    height={666}
                    loading="lazy"
                    decoding="async"
                    className="w-auto max-w-[90%] h-[85%] object-contain drop-shadow-xl"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8 pb-8 md:pb-10">
                <button className="w-full py-3 md:py-4 px-6 text-white font-bold uppercase tracking-wide rounded-full transition-colors" style={{ backgroundColor: '#5D4037' }}>
                  Découvrir
                </button>
              </div>
            </div>

            {/* Card 2 - Boissons Chaudes */}
            <div className="flex-shrink-0 w-72 md:flex-1 snap-center bg-amber-50 border-2 border-emerald-800 rounded-3xl overflow-hidden flex flex-col min-h-[580px] md:min-h-[820px]">
              <div className="p-6 md:p-8 pt-8 md:pt-10">
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-black text-emerald-800 uppercase leading-tight"
                  style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
                >
                  Boissons<br />Chaudes
                </h3>
              </div>
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/images/hot-drink.jpg"
                    alt="Boisson Chaude"
                    width={736}
                    height={1226}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8 pb-8 md:pb-10">
                <button className="w-full py-3 md:py-4 px-6 text-white font-bold uppercase tracking-wide rounded-full transition-colors" style={{ backgroundColor: '#5D4037' }}>
                  Découvrir
                </button>
              </div>
            </div>

            {/* Card 3 - Formules Lunch */}
            <div className="flex-shrink-0 w-72 md:flex-1 snap-center bg-amber-50 border-2 border-emerald-800 rounded-3xl overflow-hidden flex flex-col min-h-[580px] md:min-h-[820px]">
              <div className="p-6 md:p-8 pt-8 md:pt-10">
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-black text-emerald-800 uppercase leading-tight"
                  style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
                >
                  Formules<br />Lunch
                </h3>
              </div>
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/images/sale1.jpg"
                    alt="Formule Lunch"
                    width={861}
                    height={1439}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8 pb-8 md:pb-10">
                <button className="w-full py-3 md:py-4 px-6 text-white font-bold uppercase tracking-wide rounded-full transition-colors" style={{ backgroundColor: '#5D4037' }}>
                  Découvrir
                </button>
              </div>
            </div>

            {/* Card 4 - Autres Spécialités */}
            <div className="flex-shrink-0 w-72 md:flex-1 snap-center bg-amber-50 border-2 border-emerald-800 rounded-3xl overflow-hidden flex flex-col min-h-[580px] md:min-h-[820px]">
              <div className="p-6 md:p-8 pt-8 md:pt-10">
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-black text-emerald-800 uppercase leading-tight"
                  style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
                >
                  Autres<br />Spécialités
                </h3>
              </div>
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full h-full flex items-center justify-center rounded-2xl overflow-hidden">
                  <img
                    src="/images/matcha-tea.png"
                    alt="Matcha Tea"
                    width={393}
                    height={636}
                    loading="lazy"
                    decoding="async"
                    className="w-auto max-w-[90%] h-[85%] object-contain drop-shadow-xl"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8 pb-8 md:pb-10">
                <button className="w-full py-3 md:py-4 px-6 text-white font-bold uppercase tracking-wide rounded-full transition-colors" style={{ backgroundColor: '#5D4037' }}>
                  Découvrir
                </button>
              </div>
            </div>

          </div>
        </section>
        <Instagram />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
