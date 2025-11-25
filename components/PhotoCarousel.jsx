"use client";

import { useEffect, useState, useCallback } from "react";

const slides = [
  {
    src: "/1.JPG",
    alt: "L'Amour Après - Lecture au festival d'avignon",
    legend: "L’Amour Après — Lecture au festival d'avignon",
  },
  {
    src: "/2.JPG",
    alt: "Ann-Gisel Glass sur scène",
    legend: "Lecture au festival d'avignon ",
  },
  {
    src: "/3.JPG",
    alt: "Travail de table autour du texte",
    legend: "Lecture au festival d'avignon",
  },
  {
    src: "/4.JPG",
    alt: "Travail de table autour du texte",
    legend: "Lecture au festival d'avignon",
  }
];

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const total = slides.length;

  const goTo = useCallback(
    (index) => {
      if (!total) return;
      const newIndex = (index + total) % total;
      setCurrent(newIndex);
    },
    [total]
  );

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  // Auto-play (pause au survol)
  useEffect(() => {
    if (isHovered || total <= 1) return;

    const id = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % total);
    }, 6000); // 6s

    return () => clearInterval(id);
  }, [isHovered, total]);

  if (!total) return null;

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide.src} alt={slide.alt} className="carousel-image" />
            {slide.legend && (
              <div className="carousel-legend">
                <p>{slide.legend}</p>
              </div>
            )}
            <div className="carousel-gradient" />
          </div>
        ))}
      </div>

      {/* Flèches */}
      {total > 1 && (
        <>
          <button
            type="button"
            className="carousel-arrow carousel-arrow-left"
            onClick={prev}
            aria-label="Photo précédente"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-arrow carousel-arrow-right"
            onClick={next}
            aria-label="Photo suivante"
          >
            ›
          </button>
        </>
      )}

      {/* Points */}
      {total > 1 && (
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={
                "carousel-dot" + (index === current ? " carousel-dot-active" : "")
              }
              onClick={() => goTo(index)}
              aria-label={`Aller à la photo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
