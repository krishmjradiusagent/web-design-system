import React from "react";

/** Radius UI — Carousel. Horizontal slide viewport with prev/next + dots. */
export function Carousel({ slides = [], className = "" }) {
  const [i, setI] = React.useState(0);
  const n = slides.length;
  const go = (x) => setI(Math.max(0, Math.min(n - 1, x)));
  return (
    <div className={["rds-carousel", className].filter(Boolean).join(" ")}>
      <div className="rds-carousel__viewport">
        <div className="rds-carousel__track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {slides.map((s, idx) => <div className="rds-carousel__slide" key={idx}>{s}</div>)}
        </div>
      </div>
      <button className="rds-carousel__btn rds-carousel__btn--prev" onClick={() => go(i - 1)} disabled={i === 0} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
      </button>
      <button className="rds-carousel__btn rds-carousel__btn--next" onClick={() => go(i + 1)} disabled={i === n - 1} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
      </button>
      <div className="rds-carousel__dots">
        {slides.map((_, idx) => <button key={idx} className="rds-carousel__dot" data-active={idx === i} onClick={() => go(idx)} aria-label={`Slide ${idx + 1}`} />)}
      </div>
    </div>
  );
}
