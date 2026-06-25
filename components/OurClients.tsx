import FadeIn from './FadeIn';

const WA_NUMBER = '918328907088';
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

// ─────────────────────────────────────────────
// Logo files are now properly set with paths.
// Ensure these files exist in /public/clients/:
// - adani.png
// - tata.png
// - amns.png
// - ntpc.png
// - nalco.png
// - vedanta.png
// Recommended logo files: transparent PNG/SVG, roughly 200x80px, light background safe.
// ─────────────────────────────────────────────
const clients = [
  { name: 'Adani Group', short: 'A', color: '#1d4ed8', logo: '/clients/adani.png' },
  { name: 'Tata Group', short: 'T', color: '#0f172a', logo: '/clients/tata.png' },
  { name: 'AMNS', short: 'AM', color: '#dc2626', logo: '/clients/amns.png' },
  { name: 'NTPC', short: 'N', color: '#0369a1', logo: '/clients/ntpc.png' },
  { name: 'NALCO', short: 'NL', color: '#15803d', logo: '/clients/nalco.png' },
  { name: 'Vedanta', short: 'V', color: '#9333ea', logo: '/clients/vedanta.png' },
];

// Duplicate the list so the scrolling track can loop seamlessly.
const marqueeClients = [...clients, ...clients];

const supplyItems = [
  {
    icon: 'fas fa-industry',
    title: 'Industrial RO Plant Setup',
    desc: 'End-to-end design, supply & installation of high-capacity RO plants for corporate campuses, factories & industrial sites.',
    accent: '#3b82f6',
    light: '#eff6ff',
  },
  {
    icon: 'fas fa-truck',
    title: 'Bulk Drinking Water Supply',
    desc: 'Regular bulk supply of purified drinking water via cans & tankers for offices, plants, townships & project sites.',
    accent: '#0ea5e9',
    light: '#f0f9ff',
  },
  {
    icon: 'fas fa-handshake',
    title: 'Long-Term Corporate Contracts',
    desc: 'Dedicated AMC & supply contracts with priority service for large enterprise & PSU clients across Odisha.',
    accent: '#22c55e',
    light: '#f0fdf4',
  },
];

export default function OurClients() {
  return (
    <section id="our-clients" style={{ padding: '96px 0', background: '#f8fafc' }}>
      <div className="container">

        {/* ── Header ── */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#e0f2fe', color: '#0369a1',
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', padding: '6px 16px',
              borderRadius: '30px', marginBottom: '16px',
            }}>
              <i className="fas fa-city" aria-hidden="true" /> Trusted by Industry Leaders
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
              fontWeight: 800, color: '#0f172a',
              lineHeight: 1.15, margin: '0 0 14px',
            }}>
              Our <span style={{ color: '#0ea5e9' }}>Corporate Clients</span>
            </h2>
            <p style={{
              color: '#64748b', fontSize: '0.95rem',
              lineHeight: 1.7, maxWidth: '560px', margin: '0 auto',
            }}>
              We supply industrial RO plants and bulk drinking water to some of India&apos;s
              largest corporate houses and PSUs operating in Odisha.
            </p>
          </div>
        </FadeIn>

        {/* ── Client logo auto-scroll marquee ── */}
        <FadeIn>
          <div className="clients-marquee-wrap" style={{ marginBottom: '56px' }}>
            <div className="clients-marquee-track">
              {marqueeClients.map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="client-logo-card"
                  style={{
                    background: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '20px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    textAlign: 'center',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                    flex: '0 0 auto',
                  }}
                >
                  {client.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      style={{ height: '70px', maxWidth: '140px', objectFit: 'contain' }}
                    />
                  ) : (
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '13px',
                      background: client.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: `0 6px 16px ${client.color}44`,
                    }}>
                      <span style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.02em' }}>
                        {client.short}
                      </span>
                    </div>
                  )}
                  <p style={{
                    margin: 0, fontSize: '0.76rem', fontWeight: 700,
                    color: '#0f172a', lineHeight: 1.3, whiteSpace: 'nowrap',
                  }}>
                    {client.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ── What we supply to them ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {supplyItems.map((item) => (
            <FadeIn key={item.title}>
              <div
                className="supply-card-premium"
                style={{
                  background: '#fff',
                  borderRadius: '18px',
                  border: '1px solid #e2e8f0',
                  padding: '28px 26px',
                  height: '100%',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '13px',
                  background: item.light,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <i className={item.icon} style={{ color: item.accent, fontSize: '1.1rem' }} aria-hidden="true" />
                </div>
                <h3 style={{
                  fontSize: '1.02rem', fontWeight: 800,
                  color: '#0f172a', margin: '0 0 8px', lineHeight: 1.3,
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
            </FadeIn>
          ))}
        </div>

        {/* ── CTA ── */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a
              href={waLink('Hi! We are interested in bulk RO plant / drinking water supply for our company. Please share corporate pricing details.')}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: '#0ea5e9', color: '#fff',
                fontSize: '0.88rem', fontWeight: 700,
                padding: '14px 28px', borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(14,165,233,0.35)',
              }}
            >
              <i className="fab fa-whatsapp" aria-hidden="true" /> Get Corporate / Bulk Supply Quote
            </a>
          </div>
        </FadeIn>

      </div>

      <style>{`
        .clients-marquee-wrap {
          overflow: hidden;
          position: relative;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
        }
        .clients-marquee-track {
          display: flex;
          align-items: stretch;
          gap: 18px;
          width: max-content;
          animation: clients-scroll-left 32s linear infinite;
        }
        .clients-marquee-wrap:hover .clients-marquee-track {
          animation-play-state: paused;
        }
        @keyframes clients-scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .client-logo-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .client-logo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(0,0,0,0.08);
        }
        .supply-card-premium:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.09) !important;
        }
        @media (max-width: 640px) {
          #our-clients { padding: 64px 0 !important; }
          .clients-marquee-track { animation-duration: 22s; }
        }
        @media (prefers-reduced-motion: reduce) {
          .clients-marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}