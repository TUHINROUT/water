import Link from 'next/link';
import FadeIn from './FadeIn';

const WA_NUMBER = '918328907088';
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

// ─────────────────────────────────────────────
// WHY US
// ─────────────────────────────────────────────
const whyItems = [
  { icon: 'fas fa-award',             title: 'Authorized Dealer',  desc: 'Official partner for Aquaguard, Kent & Pureit — 100% genuine products guaranteed.',                     accent: '#3b82f6', light: '#eff6ff' },
  { icon: 'fas fa-tools',             title: 'Expert Service',     desc: 'Certified technicians with 10+ years experience in RO installation and maintenance.',                    accent: '#f97316', light: '#fff7ed' },
  { icon: 'fas fa-indian-rupee-sign', title: 'Best Price',         desc: 'Price match guarantee. We offer the most competitive rates in Sambalpur & Odisha.',                     accent: '#22c55e', light: '#f0fdf4' },
  { icon: 'fas fa-headset',           title: '24/7 Support',       desc: 'Round-the-clock customer support for all your water purification emergencies.',                         accent: '#a855f7', light: '#faf5ff' },
  { icon: 'fas fa-shield-alt',        title: '1 Year Warranty',    desc: 'Comprehensive warranty coverage on all products with hassle-free claims.',                               accent: '#0ea5e9', light: '#f0f9ff' },
  { icon: 'fas fa-water',             title: 'Water Testing',      desc: 'Free water quality testing to recommend the perfect purification solution for you.',                     accent: '#06b6d4', light: '#ecfeff' },
  { icon: 'fas fa-recycle',           title: 'AMC Plans',          desc: 'Affordable annual maintenance contracts to keep your purifier in top condition.',                        accent: '#eab308', light: '#fefce8' },
  { icon: 'fas fa-map-marker-alt',    title: 'Pan Sambalpur',      desc: 'Serving all areas of Sambalpur and Western Odisha with quick delivery and installation.',               accent: '#ef4444', light: '#fef2f2' },
];

export function WhyUs() {
  return (
    <section style={{ padding: '96px 0', background: 'linear-gradient(160deg,#062e48 0%,#0a4f7a 50%,#1a7bb8 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* dot pattern */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* header row */}
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '52px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,180,216,0.18)', border: '1px solid rgba(0,180,216,0.35)', color: '#48cae4', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '14px' }}>
                <i className="fas fa-star" aria-hidden="true" /> Why Choose Us
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(1.9rem,3.5vw,2.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, margin: '0 0 10px' }}>
                Why <span style={{ color: '#48cae4' }}>Aquagrand?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.92rem', margin: 0 }}>The most trusted water purifier dealer in Sambalpur.</p>
            </div>
            <a href="tel:+919938884401" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: '#0a4f7a', fontSize: '0.85rem', fontWeight: 700, padding: '13px 24px', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.18)', whiteSpace: 'nowrap' }}>
              <i className="fas fa-phone" aria-hidden="true" /> Call Us Today
            </a>
          </div>
        </FadeIn>

        {/* grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '16px' }}>
          {whyItems.map((item) => (
            <FadeIn key={item.title}>
              <div className="why-card-premium" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '18px', padding: '22px 20px', backdropFilter: 'blur(8px)', transition: 'background 0.2s,transform 0.2s' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: item.light, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', boxShadow: `0 4px 14px ${item.accent}33` }}>
                  <i className={item.icon} style={{ color: item.accent, fontSize: '1rem' }} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', margin: '0 0 7px', lineHeight: 1.25 }}>{item.title}</h3>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        .why-card-premium:hover { background: rgba(255,255,255,0.11) !important; transform: translateY(-3px); }
        @media(max-width:640px){ #why-us-section{ padding:64px 0 !important; } }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────
const services = [
  { icon: 'fas fa-tools',          title: 'RO Installation',    desc: 'Professional installation by certified technicians. Same-day installation available across Sambalpur.',    tag: 'Free Installation', accent: '#3b82f6', light: '#eff6ff', dark: '#1e3a5f' },
  { icon: 'fas fa-calendar-check', title: 'AMC Plans',           desc: 'Annual maintenance contracts starting at just ₹999/year. Includes filter changes and service visits.',     tag: 'From ₹999/yr',      accent: '#f97316', light: '#fff7ed', dark: '#7c2d12' },
  { icon: 'fas fa-filter',         title: 'Filter Replacement',  desc: 'Genuine OEM filters for all brands. Quick replacement with doorstep service.',                             tag: 'Genuine Parts',     accent: '#22c55e', light: '#f0fdf4', dark: '#14532d' },
  { icon: 'fas fa-wrench',         title: 'Repair & Service',    desc: 'Fast turnaround repair service. Most issues resolved within 24 hours of complaint.',                        tag: '24hr Response',     accent: '#a855f7', light: '#faf5ff', dark: '#4a1d96' },
  { icon: 'fas fa-flask',          title: 'Water Testing',       desc: 'Free TDS, pH and bacterial contamination testing. Helps choose the right purifier for your water.',         tag: 'Free of Cost',      accent: '#06b6d4', light: '#ecfeff', dark: '#164e63' },
  { icon: 'fas fa-industry',       title: 'Commercial Systems',  desc: 'Custom commercial RO solutions for restaurants, offices, schools, and industries.',                         tag: 'Custom Solutions',  accent: '#eab308', light: '#fefce8', dark: '#713f12' },
];

export function Services() {
  return (
    <section style={{ padding: '96px 0', background: '#f8fafc' }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#e0f2fe', color: '#0369a1', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '14px' }}>
              <i className="fas fa-concierge-bell" aria-hidden="true" /> Our Services
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(1.9rem,3.5vw,2.8rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, margin: '0 0 12px' }}>
              Complete Water <span style={{ color: '#0ea5e9' }}>Care Services</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
              From installation to annual maintenance — we handle every aspect of your water purification needs.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '20px' }}>
          {services.map((s) => (
            <FadeIn key={s.title}>
              <div className="service-card-premium" style={{ background: '#fff', borderRadius: '18px', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 10px rgba(0,0,0,0.04)', transition: 'transform 0.22s,box-shadow 0.22s' }}>
                {/* top tinted zone */}
                <div style={{ background: s.light, padding: '24px 22px 18px', position: 'relative' }}>
                  {/* tag */}
                  <div style={{ position: 'absolute', top: '14px', right: '14px', background: s.accent, color: '#fff', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '20px' }}>
                    {s.tag}
                  </div>
                  <div style={{ width: '48px', height: '48px', borderRadius: '13px', background: s.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 6px 18px ${s.accent}44`, marginBottom: '14px' }}>
                    <i className={s.icon} style={{ color: '#fff', fontSize: '1.1rem' }} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 7px', lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>

                {/* CTA */}
                <div style={{ padding: '14px 22px' }}>
                  <a
                    href={waLink(`Hi! I need help with: ${s.title}. Please share details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '7px', justifyContent: 'center', background: s.light, color: s.dark, fontSize: '0.78rem', fontWeight: 700, padding: '10px 16px', borderRadius: '9px', textDecoration: 'none', border: `1px solid ${s.accent}33`, transition: 'background 0.2s' }}
                  >
                    <i className="fab fa-whatsapp" style={{ color: s.accent }} aria-hidden="true" /> Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── View All RO Services CTA ── */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginTop: '52px' }}>
            <p style={{ color: '#64748b', marginBottom: '22px', fontSize: '0.92rem', lineHeight: 1.6 }}>
              This is a quick look — see full details on installation steps, plant types, and AMC pricing.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/ro-services" className="btn-primary">
                <i className="fas fa-screwdriver-wrench" /> View All RO Services
              </Link>
              <a
                href={waLink('Hi! I want to know more about your RO services. Please help.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ color: '#0f172a', border: '2px solid #cbd5e1' }}
              >
                <i className="fab fa-whatsapp" /> Ask on WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .service-card-premium:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.09) !important; }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────
const testimonials = [
  { stars: 5, text: 'Excellent service! Got our Aquaguard installed within hours of ordering. The technician was professional and explained everything clearly. Highly recommend Aquagrand.', name: 'Priya Sharma',  loc: 'Ainthapali, Sambalpur', initial: 'P', color: '#3b82f6', light: '#eff6ff' },
  { stars: 5, text: 'Best RO dealer in Sambalpur. Got Kent Grand Plus at a better price than online stores. AMC service is also very responsive. Water quality is excellent now.',           name: 'Rajesh Patel',  loc: 'Budharaja, Sambalpur',  initial: 'R', color: '#f97316', light: '#fff7ed' },
  { stars: 5, text: 'Their commercial RO system for our restaurant has been running perfectly for 2 years now. No maintenance issues. Great after-sales support from the Aquagrand team.', name: 'Sunita Nanda',  loc: 'Sambalpur City',         initial: 'S', color: '#22c55e', light: '#f0fdf4' },
];

export function Testimonials() {
  return (
    <section style={{ padding: '96px 0', background: '#fff' }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fef9c3', color: '#713f12', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '14px' }}>
              <i className="fas fa-star" aria-hidden="true" /> Customer Reviews
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(1.9rem,3.5vw,2.8rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, margin: 0 }}>
              What Our <span style={{ color: '#0ea5e9' }}>Customers Say</span>
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '22px' }}>
          {testimonials.map((t) => (
            <FadeIn key={t.name}>
              <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
                {/* large quote mark */}
                <div style={{ position: 'absolute', top: '8px', right: '18px', fontSize: '5rem', lineHeight: 1, color: t.light, fontFamily: 'Georgia,serif', userSelect: 'none', pointerEvents: 'none', zIndex: 0 }}>&ldquo;</div>

                {/* stars */}
                <div style={{ display: 'flex', gap: '3px', zIndex: 1 }}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <i key={i} className="fas fa-star" style={{ color: '#eab308', fontSize: '0.8rem' }} aria-hidden="true" />
                  ))}
                </div>

                {/* text */}
                <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.75, margin: 0, zIndex: 1, flex: 1 }}>
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* divider */}
                <div style={{ height: '1px', background: '#f1f5f9' }} />

                {/* author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 1 }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: t.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 800, flexShrink: 0, boxShadow: `0 4px 12px ${t.color}44` }}>
                    {t.initial}
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>{t.name}</p>
                    <p style={{ margin: 0, fontSize: '0.72rem', color: '#94a3b8' }}>{t.loc}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// CTA STRIP
// ─────────────────────────────────────────────
export function CTAStrip() {
  return (
    <div style={{ background: 'linear-gradient(135deg,#062e48 0%,#0a4f7a 50%,#1a7bb8 100%)', padding: '64px 0', position: 'relative', overflow: 'hidden' }}>
      {/* dot pattern */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
      {/* glow */}
      <div style={{ position: 'absolute', left: '-80px', top: '-80px', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,180,216,0.15) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '28px' }}>
          <div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#48cae4', margin: '0 0 10px' }}>
              Free Consultation
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair,Georgia,serif)', fontSize: 'clamp(1.6rem,3vw,2.3rem)', fontWeight: 800, color: '#fff', margin: '0 0 8px', lineHeight: 1.2 }}>
              Ready for Pure, Clean Water?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.92rem', margin: 0 }}>
              Get a free water quality test and expert consultation — no obligation.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="tel:+919938884401" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: '#fff', color: '#0a4f7a', fontSize: '0.88rem', fontWeight: 700, padding: '14px 24px', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', whiteSpace: 'nowrap' }}>
              <i className="fas fa-phone" aria-hidden="true" /> Call +91 99388 84401
            </a>
            <a href={waLink('Hi! I want a free water quality test and consultation. Please help.')} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: '#25d366', color: '#fff', fontSize: '0.88rem', fontWeight: 700, padding: '14px 24px', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(37,211,102,0.35)', whiteSpace: 'nowrap' }}>
              <i className="fab fa-whatsapp" aria-hidden="true" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}