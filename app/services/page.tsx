import Link from 'next/link';

const WA_NUMBER = '919938884401';
function waLink(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// Group 1: Heavy Industrial & Treatment Systems
const PLANT_SERVICES = [
  {
    icon: '🏭',
    label: 'Industrial & Domestic',
    title: 'Water Treatment Plant',
    body: 'Complete planning, setup, and lifelong maintenance of customized Water Treatment Plants. Built for high-capacity purification across residential apartments, hotels, clinics, and manufacturing hubs.',
    highlights: ['Custom structural engineering blueprints', 'Heavy duty, high-flow output models', 'Low-maintenance multi-port valves', 'Free on-site parameter evaluations'],
    accent: '#00b4d8',
    wa: 'Hi! I am inquiring about setting up or servicing a heavy-duty Water Treatment Plant. Please guide me.',
  },
  {
    icon: '⏳',
    label: 'Media Filtration',
    title: 'Iron Remover Plant',
    body: 'Say goodbye to rusty water, stained bathroom fixtures, and scale-clogged pipelines. Our specialty catalytic media filters oxidize, trap, and flush away high iron concentrations right at the source.',
    highlights: ['Zero harsh chemicals or additives', 'Eliminates red water and metallic taste', 'Automatic or manual backwash systems', 'Complimentary pre & post iron profiling'],
    accent: '#e07830',
    wa: 'Hi! I am facing heavy iron issues in my borewell water. Please share quotes for an Iron Remover Plant.',
  },
  {
    icon: '⚡',
    label: 'Advanced Elimination',
    title: 'Water Killer Units',
    body: 'High-performance inline biological and scale-neutralizing units designed to terminate stubborn bacterial loads and permanently disrupt mineral crystallization profiles.',
    highlights: ['Neutralizes high microbial hazards', 'Advanced hard-water scale mitigation', 'Compact inline layout footprint', '100% safe mechanical purification'],
    accent: '#7b2d00',
    wa: 'Hi! I need expert guidance on installing a Water Killer purification asset.',
  },
];

// Group 2: Consumer Purifier & Domestic Brand Ecosystem
const RO_SERVICES = [
  {
    icon: '🛡️',
    label: 'Brand Maintenance',
    title: 'Aquagard Services',
    body: 'Complete maintenance cycles, circuit debugging, and membrane restoration protocols for Aquagard models. Restoring your system back to factory standards with flawless precision.',
    highlights: ['Certified companion technicians', 'Genuine element swap-outs', 'Thorough voltage & pump test', 'Flat transparent servicing rates'],
    accent: '#0d6fa8',
    wa: 'Hi! I need an expert technician to service/repair my Aquagard water purifier.',
  },
  {
    icon: '💧',
    label: 'Premium Diagnostics',
    title: 'Kent RO Services',
    body: 'Expert multi-stage tune-ups exclusively engineered for Kent RO purifiers. We flush dense sediment filters, adjust dynamic mineral controllers, and secure complete component seals.',
    highlights: ['Mineral RO controller adjustments', 'Total Dissolved Solids balancing', 'Zero-drip pipe routing overhauls', 'Prompt home visits across Sambalpur'],
    accent: '#0077b6',
    wa: 'Hi! My Kent RO system requires a professional filter update/service. Please book a slot.',
  },
  {
    icon: '🛒',
    label: 'Commercial Scaling',
    title: 'RO Plant Sell & Services',
    body: 'Your premium provider for corporate RO plants ranging from 25 LPH up to 2000+ LPH. We balance full turn-key retail sales alongside priority enterprise annual care contracts.',
    highlights: ['All plant capacities ready to dispatch', 'Flexible corporate AMC packages', 'Rapid technical breakdown support', 'Premium old-system trade evaluations'],
    accent: '#2d6a4f',
    wa: 'Hi! I want to purchase or request immediate servicing for a Commercial RO Plant.',
  },
  {
    icon: '💎',
    label: 'Smart Water Diagnostics',
    title: 'Liquaro RO Services',
    body: 'Targeted maintenance matrix for modern Liquaro purifiers. Our technicians address critical structural performance, multi-cartridge layers, and verify crisp, clean output profiles.',
    highlights: ['Perfect specification matching', 'Internal system disinfection run', 'Electrical continuity mapping', 'Immediate post-service TDS reading'],
    accent: '#c9a84c',
    wa: 'Hi! I am looking for genuine repair/support services for my Liquaro RO system.',
  },
];

const AMC_PLANS = [
  {
    name: 'Basic',
    visits: '2 visits/year',
    includes: ['Pre & Post Carbon Filter Change', 'Sediment Filter Change', 'System Sanitization', 'Performance Check'],
    tag: null,
    tagStyle: {},
  },
  {
    name: 'Standard',
    visits: '4 visits/year',
    includes: ['All Basic inclusions', 'RO Membrane Check', 'UV Lamp Check', 'Priority Service Calls', 'Free Minor Repairs'],
    tag: 'Most Popular',
    tagStyle: { background: 'linear-gradient(135deg,#c9a84c,#f0cc6c)', color: '#062e48' },
  },
  {
    name: 'Premium',
    visits: '4 visits/year + On-call',
    includes: ['All Standard inclusions', 'RO Membrane Replacement', 'UV Lamp Replacement', '24hr Emergency Support', 'Free Labour on All Repairs'],
    tag: 'Best Coverage',
    tagStyle: { background: 'linear-gradient(135deg,var(--primary),var(--accent))', color: '#fff' },
  },
];

export default function ServicesPage() {
  return (
    <main className="page-shell">

      {/* ── HERO ── */}
      <section className="page-hero page-hero-alt page-hero-services">
        <div className="container">
          <div className="section-tag">All-In-One Water Ecosystem</div>
          <h1 className="section-title" style={{ color: '#fff' }}>
            Complete Water Care, <br />
            <span style={{ color: 'var(--accent-2)' }}>Start to Finish.</span>
          </h1>
          <p className="section-sub">
            From heavy industrial water plants and bespoke iron removal setups to premium home brand maintenance across Sambalpur. We deliver pristine parts, clear pricing, and reliable support.
          </p>
          <div className="hero-actions">
            <a
              href={waLink('Hi! I need help with my water purifier system. Please assist me.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <i className="fab fa-whatsapp" /> Request Immediate Visit
            </a>
            <Link href="/product" className="btn-ghost">
              Shop RO Products
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE PROCESS STRIP ── */}
      <div style={{ background: 'var(--primary-dark)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            gap: '0',
            overflowX: 'auto',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {[
              { step: '01', label: 'Call or WhatsApp us' },
              { step: '→', label: '' },
              { step: '02', label: 'We schedule a visit' },
              { step: '→', label: '' },
              { step: '03', label: 'Technician arrives' },
              { step: '→', label: '' },
              { step: '04', label: 'Job done, water tested' },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '24px 20px',
                  textAlign: 'center',
                  flexShrink: 0,
                }}
              >
                {s.label ? (
                  <>
                    <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.3rem', color: 'var(--accent-2)', fontWeight: 700, marginBottom: '4px' }}>{s.step}</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{s.label}</div>
                  </>
                ) : (
                  <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.4rem', paddingTop: '4px' }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION 1: PLANT INFRASTRUCTURE & HEAVY FILTRATION ── */}
      <section className="container page-content" style={{ paddingTop: '60px', paddingBottom: '40px' }}>
        <div className="section-header" style={{ marginBottom: '40px', borderBottom: '2px solid var(--water-2)', paddingBottom: '20px' }}>
          <div className="section-tag" style={{ background: 'var(--primary-dark)', color: '#fff' }}>Category 01</div>
          <h2 className="section-title" style={{ marginTop: '10px' }}>
            Heavy Filtration & <span style={{ color: 'var(--accent)' }}>Plant Infrastructure</span>
          </h2>
          <p className="section-sub" style={{ marginLeft: 0 }}>
            Engineered setups built for high-demand groundwater problems, deep iron filtration requirements, and multi-tenant commercial structures.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '40px',
        }}>
          {PLANT_SERVICES.map((s) => (
            <article
              key={s.title}
              style={{
                background: '#fff',
                border: '1px solid var(--water-2)',
                borderTop: `4px solid ${s.accent}`,
                borderRadius: 'var(--radius)',
                padding: '32px 28px',
                boxShadow: '0 4px 20px rgba(0,60,100,0.05)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontSize: '2.4rem', marginBottom: '14px' }}>{s.icon}</div>
              <div style={{
                fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: s.accent, marginBottom: '8px',
              }}>
                {s.label}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.35rem',
                color: 'var(--primary-dark)',
                marginBottom: '12px',
                lineHeight: 1.3,
              }}>
                {s.title}
              </h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '20px' }}>
                {s.body}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', marginTop: 'auto' }}>
                {s.highlights.map((h) => (
                  <li key={h} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '0.83rem', color: 'var(--text-mid)' }}>
                    <i className="fas fa-check-circle" style={{ color: s.accent, fontSize: '0.75rem', flexShrink: 0 }} />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(s.wa)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: '6px',
                  background: s.accent,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  textDecoration: 'none',
                  alignSelf: 'flex-start',
                }}
              >
                <i className="fab fa-whatsapp" /> Inquire About Setup
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── SECTION 2: RESIDENTIAL & BRANDED RO SYSTEMS ── */}
      <section className="container page-content" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        <div className="section-header" style={{ marginBottom: '40px', borderBottom: '2px solid var(--water-2)', paddingBottom: '20px' }}>
          <div className="section-tag" style={{ background: 'var(--accent)', color: '#fff' }}>Category 02</div>
          <h2 className="section-title" style={{ marginTop: '10px' }}>
            Residential RO Care & <span style={{ color: 'var(--primary)' }}>Brand Diagnostics</span>
          </h2>
          <p className="section-sub" style={{ marginLeft: 0 }}>
            Precision home care and cartridge replacements for major domestic and workspace water purification brands.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '60px',
        }}>
          {RO_SERVICES.map((s) => (
            <article
              key={s.title}
              style={{
                background: '#fff',
                border: '1px solid var(--water-2)',
                borderTop: `4px solid ${s.accent}`,
                borderRadius: 'var(--radius)',
                padding: '32px 28px',
                boxShadow: '0 4px 20px rgba(0,60,100,0.05)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontSize: '2.4rem', marginBottom: '14px' }}>{s.icon}</div>
              <div style={{
                fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: s.accent, marginBottom: '8px',
              }}>
                {s.label}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.35rem',
                color: 'var(--primary-dark)',
                marginBottom: '12px',
                lineHeight: 1.3,
              }}>
                {s.title}
              </h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '20px' }}>
                {s.body}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', marginTop: 'auto' }}>
                {s.highlights.map((h) => (
                  <li key={h} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '0.83rem', color: 'var(--text-mid)' }}>
                    <i className="fas fa-check-circle" style={{ color: s.accent, fontSize: '0.75rem', flexShrink: 0 }} />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(s.wa)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: '6px',
                  background: s.accent,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  textDecoration: 'none',
                  alignSelf: 'flex-start',
                }}
              >
                <i className="fab fa-whatsapp" /> Book Brand Service
              </a>
            </article>
          ))}
        </div>

        {/* ── AMC PLANS ── */}
        <div style={{ marginBottom: '80px', marginTop: '40px' }}>
          <div className="section-header center" style={{ marginBottom: '48px' }}>
            <div className="section-tag">AMC Packages</div>
            <h2 className="section-title">
              Pick an alternative plan that keeps your <span style={{ color: 'var(--accent)' }}>water safe all year.</span>
            </h2>
            <p className="section-sub">
              Enjoy continuous protection metrics with scheduled maintenance, pristine parts, and priority on-demand routing.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {AMC_PLANS.map((plan) => (
              <article
                key={plan.name}
                style={{
                  background: plan.tag === 'Most Popular'
                    ? 'linear-gradient(145deg, var(--primary-dark), var(--primary))'
                    : '#fff',
                  border: plan.tag === 'Most Popular'
                    ? 'none'
                    : '1px solid var(--water-2)',
                  borderRadius: 'var(--radius)',
                  padding: '36px 28px',
                  boxShadow: plan.tag === 'Most Popular'
                    ? '0 8px 40px rgba(0,60,100,0.25)'
                    : '0 2px 12px rgba(0,60,100,0.06)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {plan.tag && (
                  <div style={{
                    position: 'absolute', top: '16px', right: '16px',
                    padding: '4px 12px', borderRadius: '20px',
                    fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em',
                    ...plan.tagStyle,
                  }}>
                    {plan.tag}
                  </div>
                )}

                <div style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: plan.tag === 'Most Popular' ? '#fff' : 'var(--primary-dark)',
                  marginBottom: '4px',
                }}>
                  {plan.name}
                </div>
                <div style={{
                  fontSize: '0.78rem',
                  color: plan.tag === 'Most Popular' ? 'rgba(255,255,255,0.6)' : 'var(--text-light)',
                  marginBottom: '24px',
                  fontWeight: 600,
                }}>
                  {plan.visits}
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px' }}>
                  {plan.includes.map((item) => (
                    <li key={item} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '8px',
                      marginBottom: '10px', fontSize: '0.85rem',
                      color: plan.tag === 'Most Popular' ? 'rgba(255,255,255,0.85)' : 'var(--text-mid)',
                    }}>
                      <i className="fas fa-check-circle" style={{
                        color: plan.tag === 'Most Popular' ? 'var(--accent-2)' : 'var(--accent)',
                        fontSize: '0.75rem', flexShrink: 0, marginTop: '3px',
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Hi! I want to look into the ${plan.name} AMC package. Please forward local rates.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    borderRadius: '6px',
                    background: plan.tag === 'Most Popular'
                      ? 'linear-gradient(135deg,var(--accent-2),var(--accent))'
                      : 'var(--water-1)',
                    color: plan.tag === 'Most Popular' ? '#062e48' : 'var(--primary)',
                    fontWeight: 700,
                    fontSize: '0.83rem',
                    textDecoration: 'none',
                    border: plan.tag === 'Most Popular' ? 'none' : '1px solid var(--water-2)',
                  }}
                >
                  <i className="fab fa-whatsapp" /> Get {plan.name} Price
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* ── TRUST QUOTE ── */}
        <div className="page-quote">
          <h3>Every job done right, every time — that's our only standard.</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '12px', lineHeight: 1.7 }}>
            Aquagrand technicians are trained, local, and accountable. We use genuine parts, quote prices upfront, and don't leave until your water quality is confirmed.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={waLink('Hi! My system needs immediate attention. Can you route a technician today?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              <i className="fab fa-whatsapp" /> WhatsApp for Service
            </a>
            <a href="tel:+919938884401" className="btn-ghost">
              <i className="fas fa-phone" style={{ marginRight: '6px' }} /> Call Operations Center
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="cta-strip">
        <div className="container">
          <div>
            <h2>Need an expert engineer today?</h2>
            <p>Our dynamic service dispatch teams are ready — contact us right now.</p>
          </div>
          <div className="cta-btns">
            <a
              href={waLink('Hi! I want to schedule a technician visit right away.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              <i className="fab fa-whatsapp" /> WhatsApp Now
            </a>
            <a href="tel:+919938884401" className="btn-ghost" style={{ border: '1px solid #fff', color: '#fff' }}>
              <i className="fas fa-phone" /> Call +91 99388 84401
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}