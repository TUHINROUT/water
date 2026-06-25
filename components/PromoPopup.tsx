'use client';

import { useEffect, useState } from 'react';

/* ─────────────────────────────────────────────────────
   PromoPopup — Aquagrand Best Sellers Edition
   • Showcases curated premium top-selling models
   • Click tags route straight to a localized WhatsApp channel
   ───────────────────────────────────────────────────── */

const STORAGE_KEY = 'aquagrand_products_popup_closed';

// Top-selling items tailored to your core catalog
const TOP_PRODUCTS = [
  {
    id: 'aquagrand-copper',
    name: 'Aquagrand Plus Copper RO',
    tag: 'Best Seller',
    image: '/kent_ro_services.png', // Swap out with your dedicated product asset path
    price: '₹7,999',
    originalPrice: '₹12,500',
    waText: 'Hi, I am interested in the Aquagrand Plus Copper RO top-seller model.'
  },
  {
    id: 'aquagrand-active-copper',
    name: 'Aquagrand Eco Mineral RO',
    tag: 'Top Rated',
    image: '/kent_ro_services.png', // Swap out with your dedicated product asset path
    price: '₹6,499',
    originalPrice: '₹9,999',
    waText: 'Hi, I am interested in the Aquagrand Eco Mineral RO model.'
  }
];

export default function PromoPopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const already = sessionStorage.getItem(STORAGE_KEY);
    if (!already) {
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, '1');
  };

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible]);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [visible]);

  if (!mounted || !visible) return null;

  return (
    <>
      {/* ── Backdrop Overlays ── */}
      <div
        onClick={close}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(6, 46, 72, 0.78)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          animation: 'popupFadeIn 0.3s ease-out',
        }}
      >
        {/* ── Card Deck Container ── */}
        <div
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Top Selling Products Showcase"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 480,
            background: '#ffffff',
            borderRadius: 24,
            overflow: 'hidden',
            boxShadow: '0 30px 70px rgba(0,0,0,0.35)',
            animation: 'popupSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Header Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #062e48 0%, #0b456b 100%)',
            padding: '24px 24px 20px',
            textAlign: 'center', // Fixed: Changed from textCenter to textAlign
            color: '#fff'
          }}>
            <span style={{
              background: '#48cae4',
              color: '#062e48',
              fontSize: '11px',
              fontWeight: 800,
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: '20px',
              letterSpacing: '1px',
              display: 'inline-block',
              marginBottom: '10px'
            }}>
              🔥 Store Best Sellers
            </span>
            <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0, letterSpacing: '-0.3px' }}>
              Top Selling Purifiers
            </h3>
            <p style={{ fontSize: '13px', color: '#90e0ef', margin: '4px 0 0', opacity: 0.9 }}>
              Grab verified premium RO systems with Free Installation this week.
            </p>
          </div>

          {/* Product Items Loop List */}
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px', background: '#f8fafc' }}>
            {TOP_PRODUCTS.map((product) => {
              const itemWaUrl = `https://wa.me/919938884401?text=${encodeURIComponent(product.waText)}`;
              return (
                <a
                  key={product.id}
                  href={itemWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: '#ffffff',
                    borderRadius: '14px',
                    padding: '12px',
                    border: '1px solid #e2e8f0',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#48cae4';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Left Side Thumbnail */}
                  <div style={{ width: '80px', height: '80px', background: '#f1f5f9', borderRadius: '10px', overflow: 'hidden', flexShrink: 0, padding: '4px' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>

                  {/* Info Details Section */}
                  <div style={{ flex: 1, paddingLeft: '14px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <span style={{ fontSize: '10px', color: '#ffb703', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {product.tag}
                    </span>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, margin: 0, color: '#1e293b' }}>
                      {product.name}
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '2px' }}>
                      <span style={{ fontSize: '16px', fontWeight: 800, color: '#0284c7' }}>{product.price}</span>
                      <span style={{ fontSize: '12px', color: '#94a3b8', textDecoration: 'line-through' }}>{product.originalPrice}</span>
                    </div>
                  </div>

                  {/* Quick Action Button Pillar */}
                  <div style={{
                    width: '36px',
                    height: '36px',
                    background: '#e0f2fe',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0284c7',
                    fontSize: '14px',
                    flexShrink: 0
                  }}>
                    →
                  </div>
                </a>
              );
            })}
          </div>

          {/* Bottom Callout Global CTA */}
          <div style={{ padding: '16px 20px', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
            <a
              href="https://wa.me/919938884401?text=Hi%2C+I+want+to+explore+all+your+top+selling+water+purifiers."
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              style={{
                display: 'block',
                background: '#25D366',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '14px',
                padding: '12px 20px',
                borderRadius: '50px',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              💬 Chat With Water Experts
            </a>
          </div>

          {/* ── High-Contrast Close Button ── */}
          <button
            onClick={close}
            aria-label="Close modal preview window"
            style={{
              position: 'absolute',
              top: 14,
              right: 14,
              width: 30,
              height: 30,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#ffffff',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s',
              zIndex: 2,
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          >
            ✕
          </button>
        </div>
      </div>

      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes popupSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}