'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home', icon: 'fa-house' },
  { href: '/about', label: 'About Us', icon: 'fa-circle-info' },
  { href: '/product', label: 'Product', icon: 'fa-droplet' },
  { 
    href: '/services', 
    label: 'Services', 
    icon: 'fa-wrench',
    submenu: [
      { href: '/services', label: 'Water Treatment Plant', icon: 'fa-industry' },
      { href: '/services', label: 'Iron Remover Plant', icon: 'fa-filter' },
      { href: '/services', label: 'Water Killer', icon: 'fa-skull-crossbones' },
      { href: '/services', label: 'Aquagard Services', icon: 'fa-shield-halved' },
      { href: '/services', label: 'Kent RO Services', icon: 'fa-hand-holding-droplet' },
      { href: '/services', label: 'RO Plant Sell and Services', icon: 'fa-cart-shopping' },
      { href: '/services', label: 'Liquaro RO Services', icon: 'fa-bolt' },
    ]
  },
  { href: '/ro-services', label: 'RO Services', icon: 'fa-screwdriver-wrench' },
  { href: '/contact', label: 'Contact Us', icon: 'fa-phone' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setMobileSubmenuOpen(false);
  }, [pathname]);

  return (
    <>
      <style>{`
        /* ── DESKTOP SUBMENU DROPDOWN ── */
        .nav-item-has-submenu {
          position: relative;
        }
        .desktop-submenu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: #ffffff;
          min-width: 280px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.02);
          border: 1px solid #e2e8f0;
          padding: 8px;
          list-style: none;
          margin: 0;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
          z-index: 100;
        }
        .nav-item-has-submenu:hover .desktop-submenu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        .desktop-submenu-item a {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 8px;
          color: #334155;
          font-size: 0.92rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .desktop-submenu-item a:hover {
          background: #f1f5f9;
          color: #00b4d8;
        }
        .desktop-submenu-item i {
          width: 20px;
          text-align: center;
          font-size: 0.95rem;
          color: #0d6fa8;
        }

        /* ── MOBILE SUBMENU TOGGLE SYSTEM ── */
        .mob-submenu-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .mob-submenu-list {
          list-style: none;
          padding: 4px 0 4px 44px;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mob-submenu-list.submenu-open {
          max-height: 400px;
        }
        .mob-submenu-item a {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 0.98rem;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .mob-submenu-item a:hover,
        .mob-submenu-item a.mob-sub-active {
          color: #fff;
          background: rgba(255,255,255,0.05);
        }
        .mob-submenu-item i {
          font-size: 0.85rem;
          color: #90e0ef;
        }
        .mob-caret-icon {
          transition: transform 0.2s ease;
          color: rgba(255,255,255,0.4);
        }
        .mob-caret-icon.caret-rotated {
          transform: rotate(90deg);
          color: #fff;
        }

        /* ── MOBILE OVERLAY ── */
        .mob-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: linear-gradient(160deg, #062e48 0%, #0a4f7a 55%, #0d6fa8 100%);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* animated water blobs */
        .mob-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .mob-blob-1 {
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(0,180,216,0.18) 0%, transparent 70%);
          top: -80px; right: -80px;
          animation: blobFloat 7s ease-in-out infinite;
        }
        .mob-blob-2 {
          width: 240px; height: 240px;
          background: radial-gradient(circle, rgba(72,202,228,0.12) 0%, transparent 70%);
          bottom: 60px; left: -60px;
          animation: blobFloat 9s ease-in-out infinite reverse;
        }
        @keyframes blobFloat {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-20px) scale(1.06); }
        }

        /* top bar inside overlay */
        .mob-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px 0;
          position: relative;
          z-index: 2;
        }

        /* divider */
        .mob-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          margin: 20px 24px 0;
          position: relative;
          z-index: 2;
        }

        /* nav list */
        .mob-nav-list {
          list-style: none;
          padding: 8px 20px;
          margin: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 4px;
          position: relative;
          z-index: 2;
          overflow-y: auto;
        }

        .mob-nav-item {
          display: flex;
          flex-direction: column;
        }

        .mob-nav-item a, .mob-submenu-toggle {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          border-radius: 16px;
          text-decoration: none;
          color: rgba(255,255,255,0.75);
          font-size: 1.15rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          border: 1px solid transparent;
        }
        .mob-nav-item a:hover, .mob-submenu-toggle:hover {
          color: #fff;
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.12);
          transform: translateX(6px);
        }
        .mob-nav-item a.mob-active, .mob-submenu-toggle.mob-active {
          color: #fff;
          background: rgba(0,180,216,0.18);
          border-color: rgba(0,180,216,0.35);
          font-weight: 700;
        }

        .mob-nav-icon {
          width: 40px; height: 40px;
          border-radius: 12px;
          background: rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.85rem;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }
        .mob-nav-item a.mob-active .mob-nav-icon, .mob-submenu-toggle.mob-active .mob-nav-icon {
          background: rgba(0,180,216,0.35);
          color: #90e0ef;
        }
        .mob-nav-item a:hover .mob-nav-icon, .mob-submenu-toggle:hover .mob-nav-icon {
          background: rgba(255,255,255,0.15);
        }

        .mob-nav-arrow {
          margin-left: auto;
          opacity: 0;
          transform: translateX(-6px);
          transition: all 0.25s ease;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.5);
        }
        .mob-nav-item a:hover .mob-nav-arrow,
        .mob-nav-item a.mob-active .mob-nav-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* bottom CTA */
        .mob-footer {
          padding: 16px 24px 32px;
          position: relative;
          z-index: 2;
        }
        .mob-cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 16px;
          border-radius: 16px;
          background: linear-gradient(135deg, #1a7bb8, #00b4d8);
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 8px 28px rgba(0,180,216,0.35);
          letter-spacing: 0.02em;
          transition: all 0.25s ease;
        }
        .mob-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(0,180,216,0.45);
        }
        .mob-cta-note {
          text-align: center;
          margin-top: 10px;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.04em;
        }

        /* close button */
        .mob-close-btn {
          width: 42px; height: 42px;
          border-radius: 12px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: rgba(255,255,255,0.9);
          font-size: 1.1rem;
          transition: all 0.2s ease;
        }
        .mob-close-btn:hover {
          background: rgba(255,255,255,0.18);
          transform: rotate(90deg);
        }

        /* slide-in animation */
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100%); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .mob-overlay {
          animation: slideInRight 0.32s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>

      <header>
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation">
          <div className="container">
            <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
              <Image
                src="/water-care-brand-logo.png"
                alt="Aquagrand Water Purifiers"
                width={163}
                height={85}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <ul className="nav-links" role="list">
              {navLinks.map(({ href, label, submenu }) => (
                <li key={href} className={submenu ? 'nav-item-has-submenu' : ''}>
                  <Link href={href} className={pathname === href || (submenu && pathname.startsWith(href)) ? 'active' : ''}>
                    {label} {submenu && <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem', marginLeft: '4px' }} />}
                  </Link>
                  {submenu && (
                    <ul className="desktop-submenu">
                      {submenu.map((sub, index) => (
                        <li key={index} className="desktop-submenu-item">
                          <Link href={sub.href}>
                            <i className={`fas ${sub.icon}`} />
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <a href="tel:+919938884401" className="btn-primary nav-cta">
              <i className="fas fa-phone"></i> Call Now
            </a>

            <button
              className={`hamburger${open ? ' open' : ''}`}
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {/* ── PREMIUM MOBILE OVERLAY ── */}
        {open && (
          <div className="mob-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
            {/* Decorative blobs */}
            <div className="mob-blob mob-blob-1" />
            <div className="mob-blob mob-blob-2" />

            {/* Top: logo + close */}
            <div className="mob-top">
              <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
                <Image
                  src="/water-care-brand-logo.png"
                  alt="Aquagrand"
                  width={130}
                  height={60}
                  priority
                  style={{ filter: 'brightness(0) invert(1)', opacity: 0.95 }}
                />
              </Link>
              <button className="mob-close-btn" onClick={() => setOpen(false)} aria-label="Close menu">
                <i className="fas fa-xmark" />
              </button>
            </div>

            <div className="mob-divider" />

            {/* Nav links */}
            <ul className="mob-nav-list" role="list">
              {navLinks.map(({ href, label, icon, submenu }) => (
                <li key={href} className="mob-nav-item">
                  {submenu ? (
                    <>
                      <button 
                        className={`mob-submenu-toggle ${pathname.startsWith(href) ? 'mob-active' : ''}`}
                        onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                      >
                        <span className="mob-nav-icon">
                          <i className={`fas ${icon}`} />
                        </span>
                        {label}
                        <i className={`fas fa-chevron-right mob-caret-icon ${mobileSubmenuOpen ? 'caret-rotated' : ''}`} style={{ marginLeft: 'auto', fontSize: '0.85rem' }} />
                      </button>
                      <ul className={`mob-submenu-list ${mobileSubmenuOpen ? 'submenu-open' : ''}`}>
                        {submenu.map((sub, index) => (
                          <li key={index} className="mob-submenu-item">
                            <Link 
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className={pathname === sub.href ? 'mob-sub-active' : ''}
                            >
                              <i className={`fas ${sub.icon}`} />
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={pathname === href ? 'mob-active' : ''}
                    >
                      <span className="mob-nav-icon">
                        <i className={`fas ${icon}`} />
                      </span>
                      {label}
                      <i className="fas fa-chevron-right mob-nav-arrow" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Bottom CTA */}
            <div className="mob-footer">
              <a href="tel:+919938884401" className="mob-cta-btn" onClick={() => setOpen(false)}>
                <i className="fas fa-phone" />
                Call Us Now
              </a>
              <p className="mob-cta-note">Sambalpur, Odisha · Mon–Sat 9am–7pm</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}