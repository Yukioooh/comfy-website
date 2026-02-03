import { useState, useRef } from 'react';

const instagramPosts = [
  { id: 1, image: '/images/interieur.jpg' },
  { id: 2, image: '/images/cookie1.jpg' },
  { id: 3, image: '/images/vitrine.jpg' },
  { id: 4, image: '/images/gateau1.jpg' },
  { id: 5, image: '/images/interieur2.jpg' },
  { id: 6, image: '/images/gateau3.jpg' },
];

export default function Instagram() {
  const [stack, setStack] = useState(instagramPosts);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });

  const handleStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    startPos.current = { x: clientX, y: clientY };
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    const deltaX = clientX - startPos.current.x;
    const deltaY = clientY - startPos.current.y;
    setDragOffset({ x: deltaX, y: deltaY });
  };

  const handleEnd = () => {
    if (!isDragging) return;

    // If dragged enough, move card to back
    const threshold = 80;
    if (Math.abs(dragOffset.x) > threshold || Math.abs(dragOffset.y) > threshold) {
      setStack((prev) => {
        const newStack = [...prev];
        const firstCard = newStack.shift();
        if (firstCard) {
          newStack.push(firstCard);
        }
        return newStack;
      });
    }

    setIsDragging(false);
    setDragOffset({ x: 0, y: 0 });
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd();
    }
  };

  return (
    <section id="instagram" className="bg-amber-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-emerald-800 uppercase text-center leading-tight mb-12 md:mb-16"
          style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
        >
          Suivez nos aventures<br />quotidiennes sur nos<br />réseaux sociaux !
        </h2>

        {/* Mobile: Image Stack with swipe (visible on mobile only) */}
        <div
          className="flex sm:hidden justify-center items-center"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative w-64 h-64 select-none">
            {stack.map((post, index) => {
              // Only show first 4 cards in stack
              if (index > 3) return null;

              const isTop = index === 0;
              const offset = index * 8;
              const scale = 1 - index * 0.05;
              const rotate = index * 3 - 4;

              // Calculate drag transform for top card
              const dragTransform = isTop && isDragging
                ? `translate(${dragOffset.x}px, ${dragOffset.y}px) rotate(${dragOffset.x * 0.1}deg)`
                : `translateY(${offset}px) scale(${scale}) rotate(${rotate}deg)`;

              const opacity = isTop && isDragging && (Math.abs(dragOffset.x) > 50 || Math.abs(dragOffset.y) > 50)
                ? 1 - Math.min(Math.abs(dragOffset.x) + Math.abs(dragOffset.y), 150) / 200
                : 1;

              return (
                <div
                  key={post.id}
                  className={`absolute inset-0 rounded-2xl overflow-hidden shadow-xl cursor-grab active:cursor-grabbing transition-all ${
                    isTop && isDragging ? 'duration-0' : 'duration-300'
                  } ease-out`}
                  style={{
                    zIndex: 10 - index,
                    transform: dragTransform,
                    opacity,
                  }}
                  onTouchStart={isTop ? handleTouchStart : undefined}
                  onTouchMove={isTop ? handleTouchMove : undefined}
                  onTouchEnd={isTop ? handleEnd : undefined}
                  onMouseDown={isTop ? handleMouseDown : undefined}
                >
                  {/* Image */}
                  <div className="w-full h-full bg-emerald-700 pointer-events-none">
                    <img
                      src={post.image}
                      alt={`Instagram ${post.id}`}
                      width={256}
                      height={256}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                      draggable={false}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/*<span className="text-white/50 text-sm">Photo {post.id}</span>*/}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* Desktop/Tablet: Instagram Grid (hidden on mobile) */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/comfy_besancon"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              {/* Image */}
              <div className="w-full h-full bg-emerald-700">
                <img
                  src={post.image}
                  alt={`Instagram ${post.id}`}
                  width={340}
                  height={340}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/*<span className="text-white/50 text-sm">Photo {post.id}</span>*/}
                </div>
              </div>
              {/* Hover overlay - Instagram gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-45 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
              >
                <svg
                  className="w-8 h-8 md:w-12 md:h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center mt-16 md:mt-16">
          <a
            href="https://instagram.com/comfy_besancon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 py-3 md:py-4 px-8 md:px-10 bg-emerald-800 text-white font-bold uppercase tracking-wide rounded-full hover:bg-emerald-700 transition-colors"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Nous suivre
          </a>
        </div>
      </div>
    </section>
  );
}