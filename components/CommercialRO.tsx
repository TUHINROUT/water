import FadeIn from './FadeIn';

const WA_NUMBER = '918328907088';
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const items = [
  {
    icon: 'fas fa-industry',
    title: 'Industrial RO Systems',
    desc: 'High-capacity purification for factories, plants & large facilities across Odisha.',
    accent: '#3b82f6',
    accentLight: '#eff6ff',
    accentDark: '#1e3a5f',
    specs: [
      { label: 'Capacity', value: '500–10,000+ LPH' },
      { label: 'TDS Reduction', value: '95–99%' },
      { label: 'Warranty', value: '2 Years' },
    ],
    wa: 'Hi! I need a quote for an Industrial RO System (500–10,000 LPH). Please share details.',
  },
  {
    icon: 'fas fa-utensils',
    title: 'Restaurant & Hotel RO',
    desc: 'Purpose-built systems for hospitality — safe water for cooking, beverages & guests.',
    accent: '#f97316',
    accentLight: '#fff7ed',
    accentDark: '#7c2d12',
    specs: [
      { label: 'Capacity', value: '100–500 LPH' },
      { label: 'Stages', value: '5–7 Stage' },
      { label: 'Maintenance', value: 'Quarterly' },
    ],
    wa: 'Hi! I need a quote for a Restaurant/Hotel RO System. Please share details.',
  },
  {
    icon: 'fas fa-school',
    title: 'School & Office RO',
    desc: 'Compact commercial units for schools, offices and institutes with moderate daily needs.',
    accent: '#22c55e',
    accentLight: '#f0fdf4',
    accentDark: '#14532d',
    specs: [
      { label: 'Capacity', value: '25–100 LPH' },
      { label: 'Tank', value: 'Stainless Steel' },
      { label: 'Installation', value: 'Free' },
    ],
    wa: 'Hi! I need a quote for a School/Office RO System. Please share details.',
  },
];

export default function CommercialRO() {
  return (
    <section id="commercial-ro" style={{ padding: '96px 0', background: '#fff' }}>
      <div className="container">

        {/* ── Header ── */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#e0f2fe', color: '#0369a1',
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', padding: '6px 16px',
              borderRadius: '30px', marginBottom: '16px',
            }}>
              <i className="fas fa-building" aria-hidden="true" /> Commercial Solutions
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
              fontWeight: 800, color: '#0f172a',
              lineHeight: 1.15, margin: '0 0 14px',
            }}>
              Commercial <span style={{ color: '#0ea5e9' }}>RO Systems</span>
            </h2>
            <p style={{
              color: '#64748b', fontSize: '0.95rem',
              lineHeight: 1.7, maxWidth: '500px', margin: '0 auto',
            }}>
              Scalable water purification for businesses, institutions, and industries across Odisha.
            </p>
          </div>
        </FadeIn>

        {/* ── Cards ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '24px',
        }}>
          {items.map((item, idx) => (
            <FadeIn key={item.title}>
              <div
                className="comm-card-premium"
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                }}
              >
                {/* Top accent strip + icon */}
                <div style={{
                  background: item.accentLight,
                  padding: '32px 28px 24px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* large number watermark */}
                  <div style={{
                    position: 'absolute', right: '16px', bottom: '-10px',
                    fontSize: '5rem', fontWeight: 900, lineHeight: 1,
                    color: item.accent, opacity: 0.08,
                    fontFamily: 'Georgia, serif',
                    userSelect: 'none', pointerEvents: 'none',
                  }}>
                    0{idx + 1}
                  </div>

                  {/* icon box */}
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '14px',
                    background: item.accent,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '18px',
                    boxShadow: `0 6px 20px ${item.accent}44`,
                  }}>
                    <i className={item.icon} style={{ color: '#fff', fontSize: '1.2rem' }} aria-hidden="true" />
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-playfair, Georgia, serif)',
                    fontSize: '1.18rem', fontWeight: 800,
                    color: '#0f172a', margin: '0 0 8px', lineHeight: 1.25,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '0.82rem', color: '#64748b',
                    lineHeight: 1.65, margin: 0,
                  }}>
                    {item.desc}
                  </p>
                </div>

                {/* Specs */}
                <div style={{ padding: '20px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    display: 'flex', flexDirection: 'column', gap: '0',
                    border: '1px solid #f1f5f9', borderRadius: '12px',
                    overflow: 'hidden', marginBottom: '20px',
                  }}>
                    {item.specs.map((spec, si) => (
                      <div key={spec.label} style={{
                        display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center', padding: '10px 16px',
                        background: si % 2 === 0 ? '#f8fafc' : '#fff',
                        borderBottom: si < item.specs.length - 1 ? '1px solid #f1f5f9' : 'none',
                      }}>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
                          {spec.label}
                        </span>
                        <span style={{
                          fontSize: '0.78rem', fontWeight: 700,
                          color: item.accentDark,
                          background: item.accentLight,
                          padding: '3px 10px', borderRadius: '20px',
                        }}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={waLink(item.wa)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      gap: '8px', marginTop: 'auto',
                      background: item.accent, color: '#fff',
                      fontSize: '0.82rem', fontWeight: 700,
                      padding: '12px 20px', borderRadius: '10px',
                      textDecoration: 'none',
                      boxShadow: `0 4px 14px ${item.accent}44`,
                      transition: 'opacity 0.2s',
                    }}
                  >
                    <i className="fab fa-whatsapp" aria-hidden="true" /> Get a Free Quote
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>

      <style>{`
        .comm-card-premium:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.09) !important;
        }
        @media (max-width: 640px) {
          #commercial-ro { padding: 64px 0 !important; }
        }
      `}</style>
    </section>
  );
}