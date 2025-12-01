// components/PhotoCarousel/PhotoCarousel.jsx
"use client";

import { useState, useCallback } from "react";
import "./PhotoCarousel.css";

export default function PhotoCarousel({ slides = [], className = "" }) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goTo = useCallback(
    (index) => {
      if (!total) return;
      const newIndex = (index + total) % total;
      setCurrent(newIndex);
    },
    [total]
  );

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  if (!total) return null;

  const slide = slides[current];

  return (
    <div className={`photo-carousel ${className}`}>
      <div className="photo-carousel-main">
        <button
          type="button"
          className="photo-carousel-arrow photo-carousel-arrow-left"
          onClick={prev}
          aria-label="Image précédente"
        >
          ‹
        </button>

        <div className="photo-carousel-frame">
          <img
            key={slide.src}              
            src={slide.src}
            alt={slide.alt || ""}
            className="photo-carousel-image"
          />
          {slide.legend && (
            <p className="photo-carousel-legend">{slide.legend}</p>
          )}
        </div>

        <button
          type="button"
          className="photo-carousel-arrow photo-carousel-arrow-right"
          onClick={next}
          aria-label="Image suivante"
        >
          ›
        </button>
      </div>

      {total > 1 && (
        <div className="photo-carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={
                "photo-carousel-dot" +
                (index === current ? " photo-carousel-dot-active" : "")
              }
              onClick={() => goTo(index)}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
