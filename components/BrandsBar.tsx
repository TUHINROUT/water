"use client";

import React, { useState, useEffect } from 'react';

const BRANDS_DATA = [
  {
    name: 'Dr. Aquagrand',
    subtext: 'Our Top Seller ★',
    logoBg: 'linear-gradient(135deg, #03045e 0%, #0077b6 100%)',
    border: '1px solid #0096c7',
    isFlagship: true,
    icon: (
      <span style={{
        color: '#fff', fontSize: '0.6rem', fontWeight: 900,
        letterSpacing: '0.04em', fontFamily: 'Arial, sans-serif', textAlign: 'center', lineHeight: 1.1
      }}>DR.<br/>AG</span>
    ),
  },
  {
    name: 'Aquaguard',
    subtext: 'by Eureka Forbes',
    logoBg: '#fff',
    border: '1px solid #e2e8f0',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14 3C14 3 5 11 5 17A9 9 0 0023 17C23 11 14 3 14 3Z" fill="#0077C8" />
        <path d="M14 9C14 9 9 14 9 17A5 5 0 0019 17C19 14 14 9 14 9Z" fill="#00AEEF" />
        <circle cx="14" cy="17" r="2.5" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Kent',
    subtext: 'RO Systems',
    logoBg: '#E8001D',
    border: '1px solid #E8001D',
    icon: (
      <span style={{
        color: '#fff', fontSize: '0.6rem', fontWeight: 900,
        letterSpacing: '0.05em', fontFamily: 'Arial, sans-serif',
      }}>KENT</span>
    ),
  },
  {
    name: 'Pureit',
    subtext: 'by HUL',
    logoBg: '#fff',
    border: '1px solid #e2e8f0',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="14" cy="14" r="13" fill="#003DA5" />
        <circle cx="14" cy="14" r="8" fill="#009CDE" />
        <circle cx="14" cy="14" r="3.5" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Livpure',
    subtext: 'Smart Purifiers',
    logoBg: '#fff',
    border: '1px solid #e2e8f0',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2L3 9v11a1 1 0 001 1h16a1 1 0 001-1V9l-9-7z" fill="#00AEEF" opacity="0.15" />
        <path d="M12 4.3L5 9.8V19h14V9.8L12 4.3zM12 2l9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9l9-7z" fill="#75237D" />
        <path d="M12 8a4 4 0 00-4 4c0 2.5 4 6 4 6s4-3.5 4-4a4 4 0 00-4-4z" fill="#00AEEF" />
      </svg>
    ),
  },
  {
    name: 'Blue Star',
    subtext: 'Cooling & RO',
    logoBg: '#002F6C',
    border: '1px solid #002F6C',
    icon: (
      <span style={{
        color: '#fff', fontSize: '0.55rem', fontWeight: 800,
        letterSpacing: '0.02em', fontFamily: 'Arial, sans-serif', textAlign: 'center', lineHeight: 1.1
      }}>BLUE<br/>STAR</span>
    ),
  },
  {
    name: 'Havells',
    subtext: 'Alkaline Water',
    logoBg: '#fff',
    border: '1px solid #e2e8f0',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 4h16v3H4V4zm0 6h16v10H4V10zm4 3v4h8v-4H8z" fill="#E31E24" />
      </svg>
    ),
  },
];

export default function BrandsBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const doubledBrands = [...BRANDS_DATA, ...BRANDS_DATA, ...BRANDS_DATA];

  return (
    <div className="brands-bar-section">
      <div className="brands-outer-container">
        <div className="brands-wrapper">
          
          <div className="brands-label-container">
            <p className="brands-label-top">Authorized Sales & Service</p>
            <p className="brands-label-bottom">Trusted Top Brands</p>
          </div>

          <div className="brands-marquee-viewport">
            <div className="brands-marquee-track">
              {doubledBrands.map((brand, idx) => (
                <div key={`brand-item-${brand.name}-${idx}`} className="brand-track-bundle">
                  <div className={`brand-small-card ${brand.isFlagship ? 'flagship-premium' : ''}`}>
                    <div 
                      className="brand-icon-box"
                      style={{ background: brand.logoBg, border: brand.border }}
                    >
                      {brand.icon}
                    </div>
                    <div className="brand-text-box">
                      <p className="brand-title">{brand.name}</p>
                      <p className="brand-subtitle">{brand.subtext}</p>
                    </div>
                  </div>
                  <div className="brand-dot-divider" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {mounted && (
        <style>{`
          .brands-bar-section {
            background: #ffffff;
            border-top: 1px solid #e2e8f0;
            border-bottom: 1px solid #e2e8f0;
            padding: 14px 0;
            overflow: hidden;
            width: 100%;
          }

          .brands-outer-container {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 24px;
            width: 100%;
            box-sizing: border-box;
          }

          .brands-wrapper {
            display: flex;
            align-items: center;
            gap: 24px;
            width: 100%;
          }

          .brands-label-container {
            flex-shrink: 0;
            border-right: 2px solid #e2e8f0;
            padding-right: 24px;
            background: #ffffff;
            z-index: 5;
          }
          .brands-label-top {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            font-size: 0.65rem;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #64748b;
            margin: 0 0 3px 0;
            line-height: 1;
          }
          .brands-label-bottom {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            margin: 0;
            font-size: 0.95rem;
            font-weight: 700;
            color: #0f172a;
            line-height: 1.1;
          }

          .brands-marquee-viewport {
            flex-grow: 1;
            overflow: hidden;
            display: flex;
            align-items: center;
            position: relative;
            mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
          }

          .brands-marquee-track {
            display: flex;
            align-items: center;
            gap: 20px;
            width: max-content;
            animation: premiumMarqueeRun 30s linear infinite;
          }

          .brands-marquee-track:hover {
            animation-play-state: paused;
          }

          .brand-track-bundle {
            display: flex;
            align-items: center;
            gap: 20px;
            flex-shrink: 0;
          }

          .brand-small-card {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 6px 12px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            transition: all 0.2s ease-in-out;
            flex-shrink: 0;
          }

          .brand-small-card:hover {
            background: #ffffff;
            border-color: #cbd5e1;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
            transform: translateY(-1px);
          }

          .brand-icon-box {
            width: 32px;
            height: 32px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
            flex-shrink: 0;
            overflow: hidden;
          }
          
          .brand-text-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          .brand-title {
            font-family: 'Inter', system-ui, sans-serif;
            margin: 0 0 1px 0;
            font-size: 0.82rem;
            font-weight: 700;
            color: #1e293b;
            line-height: 1.2;
          }
          
          .brand-subtitle {
            font-family: 'Inter', system-ui, sans-serif;
            margin: 0;
            font-size: 0.64rem;
            color: #64748b;
            letter-spacing: 0.01em;
            white-space: nowrap;
            line-height: 1.1;
          }

          .brand-small-card.flagship-premium {
            background: rgba(0, 180, 216, 0.04);
            border: 1px dashed rgba(0, 119, 182, 0.3);
          }
          
          .brand-small-card.flagship-premium:hover {
            background: rgba(0, 180, 216, 0.07);
            box-shadow: 0 4px 12px rgba(0, 119, 182, 0.06);
          }
          
          .brand-small-card.flagship-premium .brand-title { 
            color: #03045e; 
          }
          
          .brand-small-card.flagship-premium .brand-subtitle { 
            color: #0077b6; 
            font-weight: 600; 
          }

          .brand-dot-divider {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #e2e8f0;
            flex-shrink: 0;
          }

          @keyframes premiumMarqueeRun {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-33.333% - 6.66px)); }
          }

          @media (max-width: 900px) {
            .brands-wrapper {
              flex-direction: column;
              align-items: flex-start;
              gap: 14px;
            }
            .brands-label-container {
              border-right: none;
              padding-right: 0;
              border-bottom: 1px solid #e2e8f0;
              padding-bottom: 8px;
              width: 100%;
            }
          }
        `}</style>
      )}
    </div>
  );
}