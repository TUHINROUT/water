'use client';

import { useEffect, useRef, useState, useCallback, Fragment } from 'react';

const WA_NUMBER = '918328907088';
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const SLIDER_DATA = [
  {
    image: '/water_tretment_plant.png',
    mainTitle: 'Industrial Scale.',
    mainHighlight: 'Water Treatment Plant.',
    mainDesc: 'Complete blueprint planning, turnkey engineering execution, and lifelong compliance maintenance for high-yield Water Treatment Plants across Odisha.',
    slideTitle: 'Water Treatment Plant Engineering',
    slideCaption: 'High-Capacity Custom Industrial Infrastructure',
  },
  {
    image: '/iron_remover_plant.png',
    mainTitle: 'Zero Rust.',
    mainHighlight: 'Iron Remover Plant.',
    mainDesc: 'Permanently eliminate heavy deep-borewell iron staining, metallic odor, and toxic plumbing scaling with high-performance catalytic media filtration systems.',
    slideTitle: 'Iron Remover Plants',
    slideCaption: 'Advanced Media Oxidation & Filtration',
  },
  {
    image: '/wtarer_killer.png',
    mainTitle: 'Total Elimination.',
    mainHighlight: 'Water Killer Units.',
    mainDesc: 'Deploying high-intensity micro-biological neutralization loops and heavy scale suppression frameworks to neutralize hard groundwater elements.',
    slideTitle: 'Water Killer Units',
    slideCaption: 'Biological & Hard Water Scale Mitigation',
  },
  {
    image: '/aquagard_services.png',
    mainTitle: 'Precision Tuning.',
    mainHighlight: 'Aquagard Services.',
    mainDesc: 'Certified maintenance cycles, authentic membrane calibrations, multi-layered element swaps, and direct circuit diagnostics for your Aquagard purifiers.',
    slideTitle: 'Aquagard Care & Repair',
    slideCaption: 'Genuine Maintenance Matrices For Your Home',
  },
  {
    image: '/kent_ro_services.png',
    mainTitle: 'Optimal TDS.',
    mainHighlight: 'Kent RO Services.',
    mainDesc: 'Comprehensive maintenance, mineral booster tracking, dynamic pressure calibration, and complete sediment purge for peak Kent RO performance.',
    slideTitle: 'Kent RO Support Matrix',
    slideCaption: 'Professional Diagnosis & Component Tuning',
  },
  {
    image: '/kent_aro_services.png',
    mainTitle: 'Sales & Care.',
    mainHighlight: 'RO Plant Sell & Services.',
    mainDesc: 'Your premium enterprise destination for immediate retail deployment, professional installation, and proactive structural corporate AMC packages.',
    slideTitle: 'RO Plant Sales & AMC Support',
    slideCaption: 'Commercial Capacity Deployment Matrix',
  },
  {
    image: '/liquaro_ro_services.png',
    mainTitle: 'Smart Diagnostics.',
    mainHighlight: 'Liquaro RO Services.',
    mainDesc: 'Targeted operational overhauls, diagnostic electrical maps, filter flushing, and structural safety verification for state-of-the-art Liquaro RO systems.',
    slideTitle: 'Liquaro RO Support Systems',
    slideCaption: 'Precision Calibration & Element Restoration',
  },
];

const STATS = [
  { target: 5000, suffix: '+', label: 'Happy Customers' },
  { target: 10, suffix: '+ Yrs', label: 'Experience' },
  { target: 24, suffix: '/7', label: 'Support' },
  { target: 100, suffix: '%', label: 'Genuine Products' },
];

/* ─── useCountUp ─────────────────────────────────────────────────────────── */
function useCountUp(target: number, suffix: string, triggered: boolean) {
  const [val, setVal] = useState('0' + suffix);

  useEffect(() => {
    if (!triggered) return;
    const dur = 1500;
    const step = 16;
    let cur = 0;
    const inc = target / (dur / step);

    const t = setInterval(() => {
      cur += inc;
      if (cur >= target) {
        clearInterval(t);
        setVal(target + suffix);
      } else {
        setVal(Math.floor(cur) + suffix);
      }
    }, step);

    return () => clearInterval(t);
  }, [triggered, target, suffix]);

  return val;
}

/* ─── Stat ───────────────────────────────────────────────────────────────── */
function Stat({
  target,
  suffix,
  label,
  triggered,
}: {
  target: number;
  suffix: string;
  label: string;
  triggered: boolean;
}) {
  const val = useCountUp(target, suffix, triggered);
  return (
    <div className="stat-item">
      <div className="stat-num">{val}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ─── ImageSlider ────────────────────────────────────────────────────────── */
function ImageSlider({
  currentSlide,
  onSlideChange,
}: {
  currentSlide: number;
  onSlideChange: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    onSlideChange((prev) => (prev + 1) % SLIDER_DATA.length);
  }, [onSlideChange]);

  const prevSlide = useCallback(() => {
    onSlideChange((prev) => (prev - 1 + SLIDER_DATA.length) % SLIDER_DATA.length);
  }, [onSlideChange]);

  const goToSlide = useCallback(
    (index: number) => {
      onSlideChange(index);
      setIsAutoPlay(false);
      setTimeout(() => setIsAutoPlay(true), 8000);
    },
    [onSlideChange],
  );

  useEffect(() => {
    if (!isAutoPlay) return;
    timerRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlay, nextSlide]);

  return (
    <div className="slider-container">
      <div className="slider-track">
        {SLIDER_DATA.map((slide, idx) => (
          <div
            key={`slide-${idx}`}
            className={idx === currentSlide ? 'slider-slide active' : 'slider-slide'}
            style={{
              backgroundImage: `url(${slide.image})`,
              opacity: idx === currentSlide ? 1 : 0,
              visibility: idx === currentSlide ? 'visible' : 'hidden',
            }}
          />
        ))}
      </div>

      <button className="slider-nav slider-nav-prev" onClick={prevSlide} aria-label="Previous slide">
        <i className="fas fa-chevron-left" />
      </button>
      <button className="slider-nav slider-nav-next" onClick={nextSlide} aria-label="Next slide">
        <i className="fas fa-chevron-right" />
      </button>

      <div className="slider-dots">
        {SLIDER_DATA.map((_, idx) => (
          <button
            key={`dot-${idx}`}
            className={idx === currentSlide ? 'dot active' : 'dot'}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [statsOn, setStatsOn] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const el = statsRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (([entry]) => {
        if (entry.isIntersecting) {
          setStatsOn(true);
          obs.disconnect();
        }
      }),
      { threshold: 0.1 },
    );

    const timeoutId = setTimeout(() => {
      obs.observe(el);
    }, 100);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      obs.disconnect();
    };
  }, [mounted]);

  if (!mounted) {
    return <section id="home" style={{ minHeight: '100vh', background: '#020b14' }} />;
  }

  const slideData = SLIDER_DATA[currentSlide] ?? SLIDER_DATA[0];

  return (
    <>
      <style>{`
        /* ── Slider Layout ── */
        .slider-container {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }
        .slider-track {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .slider-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), visibility 1s;
        }

        /* ── Nav Control Arrows ── */
        .slider-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          color: #fff;
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }
        .slider-nav:hover {
          background: rgba(0, 180, 216, 0.7);
          border-color: rgba(255,255,255,0.6);
          transform: translateY(-50%) scale(1.05);
        }
        .slider-nav-prev { left: 24px; }
        .slider-nav-next { right: 24px; }

        /* ── Dots Indicators ── */
        .slider-dots {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          gap: 8px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.35);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .dot.active {
          background: #48cae4;
          width: 24px;
          border-radius: 4px;
        }

        /* ── Backdrop Overlay ── */
        .h-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(135deg, rgb(2 12 22) 0%, rgb(4 28 48 / 37%) 50%, rgba(1, 7, 15, 0.75) 100%);
          pointer-events: none;
        }
        .h-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 60px;
          z-index: 4;
          pointer-events: none;
        }

        /* ── Main Layout Container ── */
        .h-body {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
          padding: 120px 40px 80px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        /* ── Header Badges ── */
        .h-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(2, 15, 30, 0.55);
          border: 1px solid rgba(72, 202, 228, 0.35);
          color: #90e0ef;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 20px;
          margin-bottom: 20px;
          width: fit-content;
          backdrop-filter: blur(8px);
          animation: fadeUpIn 0.6s ease both;
        }

        /* ── Typography Scale Updates ── */
        .h-subcaption-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.85rem, 1.5vw, 1.05rem);
          color: #00b4d8;
          margin: 0 0 10px 0;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          animation: fadeUpIn 0.6s ease 0.1s both;
        }

        .h-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 5vw, 4.2rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          margin: 0 0 20px;
          max-width: 800px;
          animation: fadeUpIn 0.6s ease 0.15s both;
        }
        .h-h1 .hl {
          display: inline-block;
          background: linear-gradient(135deg, #48cae4 0%, #b5f2ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .h-desc {
          color: rgba(255, 255, 255, 0.85);
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.95rem, 1.3vw, 1.1rem);
          font-weight: 400;
          max-width: 620px;
          line-height: 1.65;
          margin: 0 0 36px;
          animation: fadeUpIn 0.6s ease 0.2s both;
        }

        /* ── Action Buttons ── */
        .h-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 48px;
          animation: fadeUpIn 0.6s ease 0.25s both;
        }
        .btn-primary,
        .btn-outline {
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-size: 0.95rem;
          padding: 12px 26px;
        }
        .btn-primary {
          background: linear-gradient(135deg, #00b4d8 0%, #0077b6 100%);
          color: #fff;
          box-shadow: 0 4px 14px rgba(0, 180, 216, 0.25);
          border: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 180, 216, 0.4);
        }
        .btn-outline {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.35);
          color: #fff;
          backdrop-filter: blur(8px);
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.6);
          transform: translateY(-2px);
        }

        /* ── Stats Metric Elements ── */
        .h-stats {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          animation: fadeUpIn 0.6s ease 0.3s both;
          background: rgba(3, 18, 33, 0.75);
          padding: 18px 32px;
          border-radius: 10px;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: fit-content;
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
          margin-top: 10px;
        }
        .stat-item {
          text-align: left;
          padding-right: 32px;
        }
        .stat-num {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.4rem, 2.5vw, 1.85rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
        }
        .stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          color: #90e0ef;
          margin-top: 4px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-weight: 500;
        }
        .h-divider {
          width: 1px;
          height: 32px;
          background: rgba(255,255,255,0.15);
          margin-right: 32px;
          flex-shrink: 0;
        }

        /* ── Floating WhatsApp Widget ── */
        .h-wa {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #25d366;
          color: #fff;
          padding: 10px 18px;
          border-radius: 30px;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          box-shadow: 0 4px 16px rgba(37,211,102,0.35);
          transition: transform 0.3s, box-shadow 0.3s;
          animation: waPulse 3s ease-in-out infinite;
        }
        .h-wa:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(37,211,102,0.45);
        }

        @keyframes fadeUpIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes waPulse {
          0%, 100% { box-shadow: 0 4px 16px rgba(37,211,102,0.35); }
          50%       { box-shadow: 0 4px 16px rgba(37,211,102,0.35), 0 0 0 10px rgba(37,211,102,0.12); }
        }

        /* ── Fine-Tuned Media Responsiveness ── */
        @media (max-width: 991px) {
          .h-body { padding: 100px 32px 60px; }
          .slider-nav { width: 44px; height: 44px; font-size: 1rem; }
          .slider-nav-prev { left: 16px; }
          .slider-nav-next { right: 16px; }
          .stat-item { padding-right: 24px; }
          .h-divider { margin-right: 24px; }
        }
        @media (max-width: 768px) {
          .h-stats { padding: 16px 24px; width: 100%; justify-content: space-between; }
          .stat-item { padding-right: 0; text-align: center; width: 45%; }
          .h-divider { display: none; }
          .stat-item:nth-child(1), .stat-item:nth-child(2) { margin-bottom: 12px; }
        }
        @media (max-width: 640px) {
          .h-body { padding: 90px 20px 80px; }
          .h-btns { margin-bottom: 36px; gap: 10px; }
          .btn-primary, .btn-outline { padding: 11px 22px; font-size: 0.9rem; width: 100%; justify-content: center; }
          .slider-nav { display: none; }
          .slider-dots { bottom: 16px; }
          .h-wa { padding: 0; width: 46px; height: 46px; border-radius: 50%; justify-content: center; bottom: 16px; right: 16px; }
          .h-wa .wa-text { display: none; }
          .h-wa i { font-size: 1.3rem; }
        }
        @media (max-width: 480px) {
          .h-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 12px; padding: 16px; }
          .stat-item { text-align: center; width: 100%; margin-bottom: 0 !important; }
          .h-tag { font-size: 0.68rem; padding: 5px 12px; }
        }
      `}</style>

      <section id="home" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', background: '#020b14' }}>
        <ImageSlider currentSlide={currentSlide} onSlideChange={setCurrentSlide} />

        <div className="h-overlay" />
        <svg className="h-wave" viewBox="0 0 1440 72" fill="none" preserveAspectRatio="none">
          <path d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" fill="#f8fcff" />
        </svg>

        <div className="h-body">
          <div className="h-tag">
            <i className="fas fa-award" style={{ color: '#c9a84c' }} />
            Authorized Dealer — Sambalpur, Odisha
          </div>

          <p className="h-subcaption-title">{slideData.slideTitle}</p>

          <h1 className="h-h1">
            {slideData.mainTitle}{' '}
            <span className="hl">{slideData.mainHighlight}</span>
          </h1>
          <p className="h-desc">{slideData.mainDesc}</p>

          <div className="h-btns">
            <a href="#services" className="btn-primary">
              <i className="fas fa-screwdriver-wrench" /> View Our Services
            </a>
            <a
              href={waLink(`Hi! I'm interested in learning more about your "${slideData.slideTitle}" service in Sambalpur.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <i className="fab fa-whatsapp" /> Inquire Online
            </a>
          </div>

          <div className="h-stats" ref={statsRef}>
            {STATS.map((s, i) => (
              <Fragment key={s.label}>
                {i > 0 && <div className="h-divider" />}
                <Stat
                  target={s.target}
                  suffix={s.suffix}
                  label={s.label}
                  triggered={statsOn}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp FAB */}
      <a
        href={waLink('Hi! I want to enquire about RO purifiers and service options in Sambalpur.')}
        target="_blank"
        rel="noopener noreferrer"
        className="h-wa"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp" style={{ fontSize: '1.1rem' }} />
        <span className="wa-text">Chat with us</span>
      </a>
    </>
  );
}