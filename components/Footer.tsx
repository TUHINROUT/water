'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const WA_NUMBER = '919938884401';

function waLink(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const footerStyles = `
  .footer-wrap {
    background: linear-gradient(175deg, #062e48 0%, #041f33 60%, #021525 100%);
    position: relative;
    overflow: hidden;
  }
  .footer-wrap::before {
    content: ' ';
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,180,216,0.07) 0%, transparent 70%);
    top: -160px;
    right: -100px;
    pointer-events: none;
  }
  .footer-wrap::after {
    content: ' ';
    position: absolute;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,119,182,0.08) 0%, transparent 70%);
    bottom: 40px;
    left: -80px;
    pointer-events: none;
  }
  .footer-top-band {
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 36px 0;
    position: relative;
    z-index: 1;
  }
  .footer-top-band .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
  }
  .footer-band-text {
    font-size: 0.88rem;
    color: rgba(255,255,255,0.55);
  }
  .footer-band-text strong {
    color: rgba(255,255,255,0.85);
    font-weight: 600;
  }
  .footer-band-btns {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  .footer-wa-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #25d366;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 700;
    padding: 11px 22px;
    border-radius: 50px;
    text-decoration: none;
    transition: all 0.25s ease;
    box-shadow: 0 4px 16px rgba(37,211,102,0.3);
  }
  .footer-wa-btn:hover {
    background: #22c55e;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37,211,102,0.4);
  }
  .footer-call-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    color: rgba(255,255,255,0.85);
    font-size: 0.85rem;
    font-weight: 600;
    padding: 11px 22px;
    border-radius: 50px;
    text-decoration: none;
    transition: all 0.25s ease;
  }
  .footer-call-btn:hover {
    background: rgba(255,255,255,0.14);
    transform: translateY(-2px);
  }
  .footer-main {
    padding: 60px 0 48px;
    position: relative;
    z-index: 1;
  }
  .footer-main-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.4fr;
    gap: 48px;
  }
  .footer-brand-col p {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.5);
    line-height: 1.75;
    margin: 18px 0 24px;
    max-width: 260px;
  }
  .footer-address {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px;
    padding: 14px 16px;
    margin-bottom: 22px;
  }
  .footer-address i {
    color: var(--accent);
    margin-top: 2px;
    flex-shrink: 0;
    font-size: 0.85rem;
  }
  .footer-address span {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.5);
    line-height: 1.6;
  }
  .footer-socials {
    display: flex;
    gap: 8px;
  }
  .footer-social-btn {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.55);
    text-decoration: none;
    font-size: 0.88rem;
    transition: all 0.25s ease;
  }
  .footer-social-btn:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: #fff;
    transform: translateY(-3px);
  }
  .footer-social-btn.wa:hover {
    background: #25d366;
    border-color: #25d366;
  }
  .footer-link-col h4 {
    font-family: var(--font-playfair), serif;
    font-size: 0.95rem;
    font-weight: 600;
    color: rgba(255,255,255,0.9);
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }
  .footer-link-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .footer-link-list li a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    color: rgba(255,255,255,0.48);
    text-decoration: none;
    transition: all 0.22s ease;
  }
  .footer-link-list li a::before {
    content: ' ';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(0,180,216,0.4);
    flex-shrink: 0;
    transition: all 0.22s ease;
    display: inline-block;
  }
  .footer-link-list li a:hover {
    color: var(--accent-2);
    transform: translateX(4px);
  }
  .footer-link-list li a:hover::before {
    background: var(--accent);
  }
  .footer-cert-col h4 {
    font-family: var(--font-playfair), serif;
    font-size: 0.95rem;
    font-weight: 600;
    color: rgba(255,255,255,0.9);
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }
  .footer-cert-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 22px;
  }
  .footer-cert-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.83rem;
    color: rgba(255,255,255,0.55);
  }
  .footer-cert-icon {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: rgba(201,168,76,0.12);
    border: 1px solid rgba(201,168,76,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent-gold);
    font-size: 0.75rem;
    flex-shrink: 0;
  }
  .footer-phone-card {
    background: linear-gradient(135deg, rgba(0,180,216,0.12), rgba(26,123,184,0.12));
    border: 1px solid rgba(0,180,216,0.2);
    border-radius: 14px;
    padding: 16px 18px;
  }
  .footer-phone-card small {
    display: block;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 6px;
  }
  .footer-phone-card a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95rem;
    font-weight: 700;
    color: rgba(255,255,255,0.9);
    text-decoration: none;
    margin-bottom: 4px;
    transition: color 0.2s;
  }
  .footer-phone-card a:hover {
    color: var(--accent-2);
  }
  .footer-phone-card a i {
    color: var(--accent);
    font-size: 0.85rem;
  }
  .footer-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent 100%);
    position: relative;
    z-index: 1;
  }
  .footer-bottom-bar {
    padding: 20px 0;
    position: relative;
    z-index: 1;
  }
  .footer-bottom-bar .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .footer-bottom-bar p {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.3);
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
  }
  .footer-bottom-bar a {
    color: var(--accent-2);
    text-decoration: none;
    opacity: 0.75;
    transition: opacity 0.2s;
  }
  .footer-bottom-bar a:hover {
    opacity: 1;
  }
  .footer-sep {
    display: inline-block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    vertical-align: middle;
    flex-shrink: 0;
  }
  @media (max-width: 1024px) {
    .footer-main-grid {
      grid-template-columns: 1fr 1fr;
      gap: 36px;
    }
  }
  @media (max-width: 600px) {
    .footer-main-grid {
      grid-template-columns: 1fr;
      gap: 28px;
    }
    .footer-main {
      padding: 44px 0 36px;
    }
    .footer-top-band .container {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const waHref = mounted
    ? waLink('Hi! I need help choosing the right RO purifier.')
    : `https://wa.me/${WA_NUMBER}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: footerStyles }} />

      <footer className="footer-wrap">

        {/* ── Top CTA Band ── */}
        <div className="footer-top-band">
          <div className="container">
            <div className="footer-band-text">
              <strong>Need help choosing the right RO?</strong><br />
              Our experts are available Mon&ndash;Sat, 9 AM &ndash; 7 PM.
            </div>
            <div className="footer-band-btns">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-wa-btn"
              >
                <i className="fab fa-whatsapp" /> WhatsApp Us
              </a>
              <a href="tel:+919938884401" className="footer-call-btn">
                <i className="fas fa-phone" /> Call Now
              </a>
            </div>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="footer-main">
          <div className="container">
            <div className="footer-main-grid">

              {/* Brand Column */}
              <div className="footer-brand-col">
                <Link href="/" className="nav-logo">
                  <Image
                    src="/water-care-brand-logo.png"
                    alt="Aquagrand Water Purifiers"
                    width={140}
                    height={65}
                    style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
                  />
                </Link>
                <p>
                  Your trusted RO water purifier dealer in Sambalpur, Odisha.
                  Pure water, premium support, and on-time service.
                </p>
                <div className="footer-address">
                  <i className="fas fa-map-marker-alt" />
                  <span>
                    Meher Nivas, Ainthapali Road, Opp. LIC Office,
                    Sambalpur, Odisha &ndash; 768 004
                  </span>
                </div>
                <div className="footer-socials">
                  <a href="#" className="footer-social-btn" aria-label="Facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="footer-social-btn" aria-label="Instagram">
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://wa.me/919938884401"
                    className="footer-social-btn wa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <i className="fab fa-whatsapp" />
                  </a>
                  <a href="#" className="footer-social-btn" aria-label="YouTube">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-link-col">
                <h4>Quick Links</h4>
                <ul className="footer-link-list">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/product">Products</Link></li>
                  <li><Link href="/ro-services">RO Services</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div className="footer-link-col">
                <h4>Our Services</h4>
                <ul className="footer-link-list">
                  <li><Link href="/ro-services">RO Installation</Link></li>
                  <li><Link href="/ro-services">AMC Plans</Link></li>
                  <li><Link href="/ro-services">Filter Replacement</Link></li>
                  <li><Link href="/ro-services">Repair &amp; Service</Link></li>
                  <li><Link href="/ro-services">Commercial RO Plants</Link></li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="footer-cert-col">
                <h4>Why Choose Us</h4>
                <div className="footer-cert-list">
                  {[
                    { icon: 'fa-award', label: 'Authorized Dealer' },
                    { icon: 'fa-shield-alt', label: 'Quality Assurance' },
                    { icon: 'fa-check-double', label: 'Genuine Parts Only' },
                    { icon: 'fa-star', label: '5\u2605 Customer Support' },
                  ].map(({ icon, label }) => (
                    <div className="footer-cert-item" key={label}>
                      <div className="footer-cert-icon">
                        <i className={`fas ${icon}`} />
                      </div>
                      {label}
                    </div>
                  ))}
                </div>
                <div className="footer-phone-card">
                  <small>Call Us Directly</small>
                  <a href="tel:+919938884401">
                    <i className="fas fa-phone" /> +91 99388 84401
                  </a>
                  <a href="tel:+919090807429">
                    <i className="fas fa-wrench" /> +91 90908 07429
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="footer-divider" />

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom-bar">
          <div className="container">
            <p>
              &copy; 2025 Aquagrand
              <span className="footer-sep" aria-hidden="true" />
              <a href="https://watercareaqua.in" target="_blank" rel="noopener noreferrer">
                watercareaqua.in
              </a>
              <span className="footer-sep" aria-hidden="true" />
              Sambalpur, Odisha. All Rights Reserved.
            </p>
            <p>
              Designed &amp; Developed by{' '}
              <a href="https://somniatetech.com" target="_blank" rel="noopener noreferrer">
                Somniate Tech
              </a>
            </p>
          </div>
        </div>

      </footer>
    </>
  );
}