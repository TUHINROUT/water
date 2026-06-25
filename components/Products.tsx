'use client';

import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';
import Link from 'next/link';

const WA_NUMBER = '918328907088';
function waLink(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

interface Product {
  id: string;
  badge: string;
  badgeColor: string;
  badgeText: string;
  featured?: boolean;
  name: string;
  tagline: string;
  purification: string;
  storage: string;
  tds: string;
  features: string[];
  price: string;
  accentLight: string;
  accentMid: string;
  accentDark: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'ag-1',
    badge: 'Best Seller',
    badgeColor: '#e0f2fe',
    badgeText: '#0369a1',
    name: 'Classic Blue',
    tagline: 'Mineral Charge Technology',
    purification: 'RO + UV + TA',
    storage: '10 L',
    tds: 'Up to 2,000 ppm',
    features: ['Mineral Charge', 'RO + UV + UV Led', 'Taste Adjuster', 'Zero Pressure', 'Multi Source'],
    price: '₹18,900',
    accentLight: '#f0fdfa',
    accentMid: '#0ea5e9',
    accentDark: '#0c4a6e',
    image: 'https://5.imimg.com/data5/EX/QH/MY-25030051/aquagrand-15-litres-aqua-natural-ro-auto-tds-controll-2cro-uv-250x250.png',
  },
  {
    id: 'ag-2',
    badge: 'Copper Rich',
    badgeColor: '#ffedd5',
    badgeText: '#ea580c',
    name: 'Copper Pro',
    tagline: 'Patented Active Copper Technology',
    purification: 'RO + UV + TA',
    storage: '10 L',
    tds: 'Up to 2,000 ppm',
    features: ['Active Copper', 'RO + UV + UV Led', 'Taste Adjuster', 'Zero Pressure', 'Multi Source'],
    price: '₹18,900',
    accentLight: '#fff7ed',
    accentMid: '#f97316',
    accentDark: '#7c2d12',
    image: 'https://5.imimg.com/data5/EX/QH/MY-25030051/aquagrand-15-litres-aqua-natural-ro-auto-tds-controll-2cro-uv-250x250.png',
  },
  {
    id: 'ag-3',
    badge: 'Premium Edition',
    badgeColor: '#fef9c3',
    badgeText: '#a16207',
    featured: true,
    name: 'Pro Black',
    tagline: 'Active Copper + Digital Display',
    purification: 'RO + UV + TA',
    storage: '10 L',
    tds: 'Up to 2,000 ppm',
    features: ['Active Copper', 'RO + UV + UV Led', 'Digital Display', 'Zero Pressure', 'FDA Certified'],
    price: '₹21,500',
    accentLight: '#fefce8',
    accentMid: '#eab308',
    accentDark: '#422006',
    image: 'https://5.imimg.com/data5/EX/QH/MY-25030051/aquagrand-15-litres-aqua-natural-ro-auto-tds-controll-2cro-uv-250x250.png',
  },
  {
    id: 'ag-5',
    badge: 'Alkaline',
    badgeColor: '#dcfce7',
    badgeText: '#16a34a',
    name: 'Alkaline Green',
    tagline: 'pH Balanced Healthy Water',
    purification: 'RO + UV + TA',
    storage: '10 L',
    tds: 'Up to 2,000 ppm',
    features: ['Alkaline Tech', 'RO + UV + UV Led', 'Taste Adjuster', 'pH Balanced', 'Zero Pressure'],
    price: '₹21,500',
    accentLight: '#f0fdf4',
    accentMid: '#22c55e',
    accentDark: '#14532d',
    image: 'https://5.imimg.com/data5/EX/QH/MY-25030051/aquagrand-15-litres-aqua-natural-ro-auto-tds-controll-2cro-uv-250x250.png',
  },
  {
    id: 'kt-1',
    badge: 'Most Popular',
    badgeColor: '#f3e8ff',
    badgeText: '#7e22ce',
    name: 'KENT Grand Plus',
    tagline: 'Mineral RO™ — Zero Wastage',
    purification: 'RO + UV + UF + TDS',
    storage: '9 L',
    tds: 'All TDS levels',
    features: ['Multi-stage RO', 'UV Tank LED', 'Zero Wastage', 'Natural Mineral', 'Auto On/Off'],
    price: 'Call for Price',
    accentLight: '#faf5ff',
    accentMid: '#a855f7',
    accentDark: '#4a044e',
    image: 'https://5.imimg.com/data5/EX/QH/MY-25030051/aquagrand-15-litres-aqua-natural-ro-auto-tds-controll-2cro-uv-250x250.png',
  },
  {
    id: 'kt-6',
    badge: 'Non-Electric',
    badgeColor: '#e1f5fe',
    badgeText: '#0288d1',
    name: 'KENT Gold Plus',
    tagline: 'Hollow Fiber UF — No Power',
    purification: 'UF Purification',
    storage: '20 L',
    tds: 'Low TDS / Rural',
    features: ['Zero Electric', 'UF Membrane', 'Removes Bacteria', 'Carbon Filter', 'Rural Friendly'],
    price: 'Call for Price',
    accentLight: '#f0f9ff',
    accentMid: '#0288d1',
    accentDark: '#01579b',
    image: 'https://5.imimg.com/data5/EX/QH/MY-25030051/aquagrand-15-litres-aqua-natural-ro-auto-tds-controll-2cro-uv-250x250.png',
  },
];

export default function Products() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="ro-purifiers" className="premium-products-section">
      <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 24px' }}>

        {/* ── Section Header ── */}
        <FadeIn className="section-header-premium">
          <div className="premium-badge-prefix">
            <span className="pulse-dot"></span>
            ENGINEERED PURIFICATION
          </div>
          <h2 className="premium-main-heading">
            Elite RO Water <span className="gradient-text">Systems</span>
          </h2>
          <p className="premium-sub-heading">
            Discover precision water filtration equipment. Authorized sales, authentic parts, and dynamic continuous service engineering across Sambalpur.
          </p>
        </FadeIn>

        {/* ── Product Workspace Grid ── */}
        <div className="premium-grid-layout">
          {PRODUCTS.map((p) => (
            <FadeIn key={p.id}>
              <article
                className={`premium-corporate-card ${p.featured ? 'is-featured-glow' : ''}`}
                itemScope
                itemType="https://schema.org/Product"
              >
                {/* Image Canopy */}
                <div className="card-canopy-frame" style={{ background: `radial-gradient(circle at top left, ${p.accentLight} 0%, #ffffff 100%)` }}>
                  <div className="card-floating-badge" style={{ background: p.badgeColor, color: p.badgeText }}>
                    {p.badge}
                  </div>
                  
                  {p.featured && <div className="flagship-top-label">FLAGSHIP</div>}

                  <div className="product-image-pedestal">
                    <img
                      src={p.image}
                      alt={p.name}
                      itemProp="image"
                      loading="lazy"
                    />
                    <div className="pedestal-reflection"></div>
                  </div>
                </div>

                {/* Card Architecture Details */}
                <div className="card-architect-body">
                  <div className="tech-row-strip">
                    <span className="purification-pill" style={{ color: p.accentMid, background: `${p.accentMid}10` }}>
                      {p.purification}
                    </span>
                    <span className="tagline-text">{p.tagline}</span>
                  </div>

                  <h3 className="product-brand-title" itemProp="name">
                    {p.name}
                  </h3>

                  {/* High Tech Architecture Specification Features Array */}
                  <div className="inline-spec-matrix">
                    {p.features.map((f) => (
                      <span key={f} className="matrix-spec-pill">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4L3.5 6.5L9 1" stroke={p.accentMid} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Data Secondary Footer Specs */}
                  <div className="secondary-spec-row">
                    <div className="sec-pill"><strong>Storage:</strong> {p.storage}</div>
                    <div className="sec-pill"><strong>Source Limit:</strong> {p.tds}</div>
                  </div>

                  {/* Pricing and Action Matrix */}
                  <div className="card-pricing-engine">
                    <div className="pricing-left">
                      <span className="pricing-mrp-label">COMMERCIAL MRP</span>
                      <span className="pricing-value-amount" style={{ color: p.accentDark }}>{p.price}</span>
                    </div>
                    
                    <a
                      href={waLink(`Hi! I'm interested in the ${p.name}${p.price !== 'Call for Price' ? ` (${p.price})` : ''}. Please share procurement details.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="premium-action-cta"
                      style={{ background: p.accentDark }}
                    >
                      <i className="fab fa-whatsapp"></i>
                      {p.price === 'Call for Price' ? 'Enquire' : 'Order Now'}
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* ── Dynamic Footer Context ── */}
        <FadeIn>
          <div className="grid-bottom-panel">
            <p className="bottom-panel-text">
              Displaying elite domestic configurations. We engineer custom commercial modular treatment setups and industrial water treatment installations on request.
            </p>
            <div className="bottom-action-cluster">
              <Link href="/product" className="primary-corporate-btn">
                Browse Full Catalog
              </Link>
              <a
                href={waLink('Hi! I want to examine your commercial & household RO systems pricing catalog. Connect me with an engineer.')}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-corporate-btn"
              >
                <i className="fab fa-whatsapp" /> Request Custom Quote
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      {mounted && (
        <style>{`
          .premium-products-section {
            padding: 120px 0;
            background: #ffffff;
            width: 100%;
          }

          /* Header Style System */
          .section-header-premium {
            text-align: center;
            margin-bottom: 72px;
          }
          
          .premium-badge-prefix {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #f1f5f9;
            color: #475569;
            font-size: 0.68rem;
            font-weight: 800;
            letter-spacing: 0.18em;
            padding: 6px 16px;
            border-radius: 100px;
            margin-bottom: 20px;
            border: 1px solid #e2e8f0;
          }

          .pulse-dot {
            width: 6px;
            height: 6px;
            background: #0ea5e9;
            border-radius: 50%;
            display: inline-block;
            animation: premiumPulse 2s infinite;
          }

          .premium-main-heading {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            font-size: clamp(2.2rem, 4.5vw, 3.2rem);
            font-weight: 900;
            color: #0f172a;
            letter-spacing: -0.03em;
            line-height: 1.1;
            margin: 0 0 16px 0;
          }

          .gradient-text {
            background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .premium-sub-heading {
            color: #64748b;
            font-size: 1.05rem;
            line-height: 1.65;
            max-width: 640px;
            margin: 0 auto;
          }

          /* Grid Workspace */
          .premium-grid-layout {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 32px;
          }

          /* Premium Structural Corporate Card Layout */
          .premium-corporate-card {
            background: #ffffff;
            border-radius: 16px;
            border: 1px solid rgba(15, 23, 42, 0.07);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            height: 100%;
          }

          .premium-corporate-card:hover {
            transform: translateY(-6px);
            border-color: rgba(14, 165, 233, 0.4);
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
          }

          .is-featured-glow {
            border-color: rgba(234, 179, 8, 0.35);
            box-shadow: 0 4px 24px rgba(234, 179, 8, 0.04);
          }

          /* Canopy Media Area */
          .card-canopy-frame {
            padding: 40px 24px 24px 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            min-height: 250px;
            border-bottom: 1px solid rgba(15, 23, 42, 0.03);
          }

          .card-floating-badge {
            position: absolute;
            top: 16px;
            left: 16px;
            font-size: 0.65rem;
            font-weight: 800;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            padding: 4px 12px;
            border-radius: 6px;
          }

          .flagship-top-label {
            position: absolute;
            top: 16px;
            right: 16px;
            background: #0f172a;
            color: #ffffff;
            font-size: 0.6rem;
            font-weight: 900;
            letter-spacing: 0.1em;
            padding: 4px 10px;
            border-radius: 4px;
          }

          .product-image-pedestal {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 2;
          }

          .product-image-pedestal img {
            max-width: 155px;
            height: auto;
            object-fit: contain;
            filter: drop-shadow(0 16px 20px rgba(15, 23, 42, 0.12));
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .premium-corporate-card:hover .product-image-pedestal img {
            transform: scale(1.05) translateY(-4px);
          }

          .pedestal-reflection {
            width: 100px;
            height: 12px;
            background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.15) 0%, transparent 70%);
            margin-top: 8px;
            pointer-events: none;
          }

          /* Architect Content Body */
          .card-architect-body {
            padding: 24px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          }

          .tech-row-strip {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 8px;
          }

          .purification-pill {
            font-size: 0.68rem;
            font-weight: 800;
            letter-spacing: 0.05em;
            padding: 3px 8px;
            border-radius: 4px;
          }

          .tagline-text {
            font-size: 0.72rem;
            color: #64748b;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .product-brand-title {
            font-family: 'Inter', system-ui, sans-serif;
            font-size: 1.35rem;
            font-weight: 800;
            color: #0f172a;
            margin: 0 0 16px 0;
            letter-spacing: -0.01em;
          }

          /* High Tech Matrix Inline Specs */
          .inline-spec-matrix {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 16px;
          }

          .matrix-spec-pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.74rem;
            color: #475569;
            background: #f8fafc;
            padding: 4px 10px;
            border-radius: 6px;
            border: 1px solid rgba(15, 23, 42, 0.03);
            font-weight: 500;
          }

          .secondary-spec-row {
            display: flex;
            gap: 12px;
            border-top: 1px solid #f1f5f9;
            padding-top: 12px;
            margin-bottom: 24px;
          }

          .sec-pill {
            font-size: 0.72rem;
            color: #64748b;
          }
          .sec-pill strong {
            color: #334155;
          }

          /* Pricing System */
          .card-pricing-engine {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
            padding-top: 16px;
            border-top: 1px solid #f1f5f9;
          }

          .pricing-left {
            display: flex;
            flex-direction: column;
          }

          .pricing-mrp-label {
            font-size: 0.58rem;
            font-weight: 800;
            color: #94a3b8;
            letter-spacing: 0.08em;
            margin-bottom: 2px;
          }

          .pricing-value-amount {
            font-size: 1.35rem;
            font-weight: 800;
            letter-spacing: -0.02em;
            line-height: 1;
          }

          .premium-action-cta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #ffffff;
            font-size: 0.8rem;
            font-weight: 700;
            padding: 10px 20px;
            border-radius: 8px;
            text-decoration: none;
            transition: opacity 0.2s ease;
          }

          .premium-action-cta:hover {
            opacity: 0.9;
          }

          /* Dynamic Context Footer Row */
          .grid-bottom-panel {
            text-align: center;
            margin-top: 80px;
            border-top: 1px solid #e2e8f0;
            padding-top: 48px;
          }

          .bottom-panel-text {
            color: #64748b;
            font-size: 0.95rem;
            margin-bottom: 24px;
            line-height: 1.6;
          }

          .bottom-action-cluster {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .primary-corporate-btn {
            background: #0f172a;
            color: #ffffff;
            font-size: 0.85rem;
            font-weight: 700;
            padding: 12px 28px;
            border-radius: 8px;
            text-decoration: none;
            transition: background 0.2s ease;
          }

          .primary-corporate-btn:hover {
            background: #1e293b;
          }

          .secondary-corporate-btn {
            background: #ffffff;
            color: #334155;
            font-size: 0.85rem;
            font-weight: 700;
            padding: 12px 28px;
            border-radius: 8px;
            text-decoration: none;
            border: 1px solid #cbd5e1;
            transition: background 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }

          .secondary-corporate-btn:hover {
            background: #f8fafc;
          }

          @keyframes premiumPulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.5); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(14, 165, 233, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(14, 165, 233, 0); }
          }

          @media (max-width: 640px) {
            .premium-products-section { padding: 80px 0; }
            .premium-grid-layout { grid-template-columns: 1fr; }
          }
        `}</style>
      )}
    </section>
  );
}