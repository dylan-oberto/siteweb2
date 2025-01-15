import React, { useState, useRef, useEffect } from 'react';

const beforeAfterImages = [
  {
    before: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    after: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Entretien de Bureaux"
  },
  {
    before: "https://images.unsplash.com/photo-1562516155-e0c1ee44059b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    after: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Nettoyage Centre Médical"
  },
  {
    before: "https://images.unsplash.com/photo-1517245386807-9b4d0d6f9a60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    after: "https://images.unsplash.com/photo-1517245276819-14b0862b7dd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Entretien Restaurant"
  }
];

const BeforeAfterSlider = ({ beforeImage, afterImage, title }: { beforeImage: string; afterImage: string; title: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-xl">
      <div
        ref={containerRef}
        className="absolute inset-0 cursor-col-resize"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* After Image (Full) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImage})` }}
        />

        {/* Before Image (Sliding) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${beforeImage})`,
            width: `${sliderPosition}%`,
            borderRight: '3px solid white'
          }}
        />

        {/* Labels */}
        <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
          <div className="bg-black/50 text-white px-4 py-2 m-4 rounded shadow-text">
            Avant
          </div>
          <div className="bg-black/50 text-white px-4 py-2 m-4 rounded shadow-text">
            Après
          </div>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white text-xl font-semibold text-center shadow-text">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const BeforeAfterGallery = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Réalisations</h2>
        <div className="grid grid-cols-1 gap-12">
          {beforeAfterImages.map((image, index) => (
            <BeforeAfterSlider
              key={index}
              beforeImage={image.before}
              afterImage={image.after}
              title={image.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;