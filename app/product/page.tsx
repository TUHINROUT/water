'use client';
import Link from 'next/link';

const WA_NUMBER = '918328907088';

function waLink(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ─── DATA ───

const AQUAGRAND_PRODUCTS = [
  {
    id: 'ag-1',
    name: 'Dr. Aquagrand Classic Blue',
    technology: 'Mineral Charge Technology',
    purification: 'RO + UV + TA',
    storage: '10 Litres',
    tds: 'Up to 2,000 ppm',
    price: '₹**,900',
    badge: 'Best Seller',
    badgeType: 'primary',
    color: '#0a4f7a',
    accent: '#00b4d8',
    features: ['Mineral Charge Technology', 'RO + UV + UV Led', 'Taste Adjuster', 'Zero Pressure Operation', 'Multiple Water Sources'],
  },
  {
    id: 'ag-2',
    name: 'Dr. Aquagrand Copper Pro',
    technology: 'Patented Active Copper Technology',
    purification: 'RO + UV + TA',
    storage: '10 Litres',
    tds: 'Up to 2,000 ppm',
    price: '₹**,900',
    badge: 'Copper Rich',
    badgeType: 'copper',
    color: '#b5541a',
    accent: '#e07830',
    features: ['Active Copper Technology', 'RO + UV + UV Led', 'Taste Adjuster', 'Zero Pressure Operation', 'Multiple Water Sources'],
  },
  {
    id: 'ag-3',
    name: 'Dr. Aquagrand Pro Black',
    technology: 'Patented Active Copper Technology',
    purification: 'RO + UV + TA',
    storage: '10 Litres',
    tds: 'Up to 2,000 ppm',
    price: '₹**,500',
    badge: 'Premium',
    badgeType: 'gold',
    color: '#1a1a1a',
    accent: '#c9a84c',
    features: ['Active Copper Technology', 'RO + UV + UV Led', 'Digital Display Panel', 'Zero Pressure Operation', 'FDA & CE Certified'],
  },
  {
    id: 'ag-4',
    name: 'Dr. Aquagrand Copper Infusion',
    technology: 'Mineral Charge Technology',
    purification: 'RO + UV + TA',
    storage: '10 Litres',
    tds: 'Up to 2,000 ppm',
    price: '₹**,500',
    badge: 'Popular',
    badgeType: 'primary',
    color: '#0077b6',
    accent: '#48cae4',
    features: ['Mineral Charge Technology', 'Copper Infusion Filter', 'RO + UV + UV Led', 'Taste Adjuster', 'Zero Pressure Operation'],
  },
  {
    id: 'ag-5',
    name: 'Dr. Aquagrand Alkaline Green',
    technology: 'Patented Alkaline Technology',
    purification: 'RO + UV + TA',
    storage: '10 Litres',
    tds: 'Up to 2,000 ppm',
    price: '₹**,500',
    badge: 'Alkaline',
    badgeType: 'green',
    color: '#2d6a4f',
    accent: '#74c69d',
    features: ['Patented Alkaline Technology', 'RO + UV + UV Led', 'Taste Adjuster', 'pH Balanced Water', 'Zero Pressure Operation'],
  },
  {
    id: 'ag-6',
    name: 'Dr. Aquagrand Copper Elite',
    technology: 'Patented Active Copper Technology',
    purification: 'RO + UV + TA',
    storage: '10 Litres',
    tds: 'Up to 2,000 ppm',
    price: '₹**,500',
    badge: 'New',
    badgeType: 'accent',
    color: '#7b2d00',
    accent: '#e07830',
    features: ['Active Copper Technology', 'RO + UV + UV Led', 'Taste Adjuster', 'Zero Pressure Operation', 'Multiple Water Sources'],
  },
];

const KENT_PRODUCTS: {
  id: string;
  name: string;
  tag: string;
  tagType: string;
  purification: string;
  storage: string;
  flow: string;
  features: string[];
  price?: string;
}[] = [
    {
      id: 'kt-1',
      name: 'KENT Grand Plus',
      tag: 'Most Popular',
      tagType: 'gold',
      purification: 'RO + UV + UF + TDS Control + UV in Tank',
      storage: '9 Litres',
      flow: '20 L/hr',
      features: ['Multi-stage RO+UV+UF purification', 'UV LED in storage tank', 'Zero Water Wastage Technology™', 'Retains natural minerals', 'Digital display', 'Auto on/off'],
    },
    {
      id: 'kt-2',
      name: 'KENT Grand Star',
      tag: 'Digital Display',
      tagType: 'primary',
      purification: 'RO + UV + UF + TDS Control + UV in Tank',
      storage: '9 Litres',
      flow: '20 L/hr',
      features: ['Digital display of minerals & purity', 'Real-time TDS monitoring', 'UV LED storage tank protection', 'Zero Water Wastage™', 'Filter life & RO flow display', 'Auto-flushing alert'],
    },
    {
      id: 'kt-3',
      name: 'KENT Crystal Star',
      tag: 'New',
      tagType: 'accent',
      purification: 'RO + UV + UF + TDS Control + UV in Tank',
      storage: '11 Litres',
      flow: '20 L/hr',
      features: ['Digital display of minerals & purity', '11L tank with water level indicator', 'Mineral Saving Technology', 'UV LED in tank', 'Zero Water Wastage™', 'Computer controlled'],
    },
    {
      id: 'kt-4',
      name: 'KENT Pearl Star',
      tag: 'New',
      tagType: 'accent',
      purification: 'RO + UV + UF + TDS Control + Detachable Tank',
      storage: '11 Litres',
      flow: '20 L/hr',
      features: ['Transparent detachable tank', 'Easy on-site cleaning', 'Mineral Saving Technology', 'Digital display', 'Zero Water Wastage™', 'Removes dissolved impurities'],
    },
    {
      id: 'kt-5',
      name: 'KENT Pearl',
      tag: 'Popular',
      tagType: 'primary',
      purification: 'RO + UV + UF + TDS Control',
      storage: '8 Litres',
      flow: '20 L/hr',
      features: ['Transparent detachable 8L tank', 'Easy regular cleaning', 'Retains natural minerals', 'Zero Water Wastage™', 'Removes bacteria & viruses', 'High purification capacity'],
    },
    {
      id: 'kt-6',
      name: 'KENT Gold Plus',
      tag: 'Non-Electric',
      tagType: 'green',
      purification: 'UF Purification',
      storage: '20 Litres',
      flow: 'No Electricity',
      features: ['Works without electricity', 'Hollow Fiber UF Membrane', 'Removes bacteria & cysts', 'Activated Carbon Filter', 'Food grade plastic', 'Suitable for rural/low TDS water'],
    },
  ];

const BD_PRODUCTS: {
  id: string;
  name: string;
  purification: string;
  storage: string;
  flow: string;
  badge: string;
  features: string[];
  price?: string;
}[] = [
    {
      id: 'bd-1',
      name: 'BLACK+DECKER Zenith',
      purification: 'RO + UV + UF + Copper + Alkaline + Mineral Controller',
      storage: '8 Litres',
      flow: '20 L/hr',
      badge: 'Premium International',
      features: ['Multi-stage purification (6-in-1)', 'Copper infusion for health', 'Alkaline water technology', 'Retains essential minerals', 'ISI Certified', 'Stylish modern design'],
    },
    {
      id: 'bd-2',
      name: 'BLACK+DECKER Crest',
      purification: 'RO + UV + UF + Mineral Controller',
      storage: '8 Litres',
      flow: '20 L/hr',
      badge: 'Easy Clean',
      features: ['Detachable tank — easy cleaning', 'Multi-stage RO+UV+UF purification', 'Mineral Controller retains minerals', 'Tastier & healthier water', 'ISI Certified', 'Kitchen-aesthetic design'],
    },
  ];

const COMMERCIAL_PRODUCTS = [
  {
    id: 'comm-1',
    name: 'Commercial RO Plant',
    capacity: '25–30 LPH',
    type: 'RO Plant',
    filtration: '5 Stage Filtration',
    price: '₹34,880',
    priceNote: 'Premium White — Incl. all Taxes',
    uvPrice: '₹14,500',
    uvCapacity: '60–80 LPH',
    forUse: 'Small offices, clinics, shops',
    color: '#0a4f7a',
  },
  {
    id: 'comm-2',
    name: 'Commercial RO Plant',
    capacity: '50–55 LPH',
    type: 'RO Plant',
    filtration: '5 Stage Filtration',
    price: '₹44,880',
    priceNote: 'Premium White — Incl. all Taxes',
    uvPrice: '₹22,500',
    uvCapacity: '100–120 LPH',
    forUse: 'Restaurants, medium offices',
    color: '#0a4f7a',
  },
  {
    id: 'comm-3',
    name: 'Commercial RO Plant',
    capacity: '100–110 LPH',
    type: 'RO Plant',
    filtration: '5 Stage Filtration',
    price: '₹95,000',
    priceNote: 'Premium White — Incl. all Taxes',
    uvPrice: '₹34,500',
    uvCapacity: '200–220 LPH',
    forUse: 'Hotels, hospitals, schools',
    color: '#0a4f7a',
  },
];

const INDUSTRIAL_PRODUCTS = [
  { id: 'ind-1', name: '250 LPH Plant', price: '₹1,05,000', note: '+ GST', forUse: 'Small industries, hostels' },
  { id: 'ind-2', name: '500 LPH Plant', price: '₹1,45,000', note: '+ GST', forUse: 'Medium industries, factories' },
  { id: 'ind-3', name: '1000 LPH Plant', price: '₹1,95,000', note: '+ GST', forUse: 'Large industries, townships' },
  { id: 'ind-4', name: '2000 LPH Plant', price: '₹3,05,000', note: '+ GST', forUse: 'Very large industries, municipal' },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function ProductPage() {
  return (
    <main className="page-shell">
      {/* ── HERO ── */}
      <section className="page-hero page-hero-product">
        <div className="container">
          <div className="section-tag">Our Products</div>
          <h1 className="section-title" style={{ color: '#fff' }}>
            Premium RO Purifiers &amp; <span style={{ color: 'var(--accent-2)' }}>Genuine Filters</span>
          </h1>
          <p className="section-sub">
            Dr. Aquagrand, Kent, and Black+Decker systems — from compact home purifiers to large industrial plants. All products supplied with installation &amp; after-sales support.
          </p>
          <div className="hero-actions">
            <a
              href={waLink('Hi! I want to enquire about an RO purifier from your product range.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <i className="fab fa-whatsapp" /> WhatsApp Enquiry
            </a>
            <Link href="/contact" className="btn-ghost">
              Book Free Water Test
            </Link>
          </div>
        </div>
      </section>

      {/* ── AQUAGRAND PRODUCTS ── */}
      <section id="aquagrand" className="container page-content">
        <div className="section-header center" style={{ marginBottom: '48px' }}>
          <div className="section-tag">Dr. Aquagrand</div>
          <h2 className="section-title">
            Home RO <span style={{ color: 'var(--accent)' }}>Purifiers</span>
          </h2>
          <p className="section-sub">
            Advanced RO+UV+TA systems with Mineral Charge, Active Copper, and Alkaline technologies. All models handle TDS up to 2,000 ppm and work at zero water pressure.
          </p>
        </div>

        <div className="products-grid">
          {AQUAGRAND_PRODUCTS.map(p => (
            <article key={p.id} className="product-card" style={{ borderTop: `4px solid ${p.accent}` }}>
              <div
                className="product-badge-tag"
                style={{ background: `linear-gradient(135deg,${p.color},${p.accent})`, color: '#fff' }}
              >
                {p.badge}
              </div>

              <div className="product-img-wrap" style={{ background: `linear-gradient(180deg,${p.color}18 0%,${p.accent}10 100%)`, minHeight: '180px' }}>
                <img
                  src="https://5.imimg.com/data5/EX/QH/MY-25030051/aquagrand-15-litres-aqua-natural-ro-auto-tds-controll-2cro-uv-250x250.png"
                  alt={p.name}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}></div>
              </div>

              <div className="product-body">
                <div className="product-model">{p.purification}</div>
                <h3 className="product-name">{p.name}</h3>

                <ul className="product-features">
                  {p.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', gap: '12px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.75rem', background: 'var(--water-1)', color: 'var(--primary)', padding: '4px 10px', borderRadius: '20px', fontWeight: 600 }}>
                    {p.storage}
                  </span>
                  <span style={{ fontSize: '0.75rem', background: 'var(--water-1)', color: 'var(--primary)', padding: '4px 10px', borderRadius: '20px', fontWeight: 600 }}>
                    TDS {p.tds}
                  </span>
                </div>

                <div className="product-footer">
                  <div className="product-price">
                    <small>MRP</small>
                    <span style={{ color: p.color }}>{p.price}</span>
                  </div>
                  <a
                    href={waLink(`Hi! I'm interested in the ${p.name} (${p.price}). Please share details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-product"
                    style={{ background: `linear-gradient(135deg,${p.color},${p.accent})` }}
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="page-quote" style={{ marginTop: '48px' }}>
          <h3>All Dr. Aquagrand models include</h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: '12px', lineHeight: 1.7 }}>
            ✅ Works at <strong>Zero Water Pressure</strong> | ✅ Suitable for <strong>Tap, Tanker &amp; Borewell</strong> water | TDS up to <strong>2,000 ppm</strong> | <strong>10 Litre</strong> storage tank | UV Led disinfection | Taste Adjuster
          </p>
          <div style={{ marginTop: '24px' }}>
            <a
              href={waLink('Hi! I want to know more about Dr. Aquagrand RO purifiers. Please help me choose the right model.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              Ask Our Expert
            </a>
          </div>
        </div>
      </section>

      {/* ── KENT PRODUCTS ── */}
      <section id="kent" className="container page-content" style={{ paddingTop: '80px' }}>
        <div className="section-header center" style={{ marginBottom: '48px' }}>
          <div className="section-tag">Kent RO</div>
          <h2 className="section-title">
            Kent <span style={{ color: 'var(--accent)' }}>Water Purifiers</span>
          </h2>
          <p className="section-sub">
            World-renowned Mineral RO™ purifiers with Zero Water Wastage Technology™, WQA &amp; NSF certified, with 1-year warranty + 3-year extended FREE service.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '48px' }}>
          {['WQA Certified (USA)', 'NSF Certified', 'IAMPO Certified', '4 Years Free Service', 'UNESCO Award Winner'].map(b => (
            <span key={b} style={{ background: 'var(--water-1)', color: 'var(--primary)', padding: '8px 16px', borderRadius: '30px', fontSize: '0.78rem', fontWeight: 700, border: '1px solid var(--water-2)' }}>
              ✓ {b}
            </span>
          ))}
        </div>

        <div className="products-grid">
          {KENT_PRODUCTS.map(p => (
            <article key={p.id} className={`product-card${p.tag === 'Most Popular' || p.tag === 'Popular' ? ' featured' : ''}`}>
              {p.tag === 'Most Popular' || p.tag === 'Popular' ? (
                <div className="product-badge-tag" style={{ background: 'linear-gradient(135deg,#c9a84c,#f0cc6c)', color: '#062e48' }}>
                  {p.tag}
                </div>
              ) : (
                <div className="product-badge-tag">{p.tag}</div>
              )}

              <div className="product-img-wrap kent-bg" style={{ minHeight: '160px' }}>
                <img
                  src="https://5.imimg.com/data5/EX/QH/MY-25030051/aquagrand-15-litres-aqua-natural-ro-auto-tds-controll-2cro-uv-250x250.png"
                  alt={p.name}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>

              <div className="product-body">
                <div className="product-model">Kent</div>
                <h3 className="product-name">{p.name}</h3>

                <ul className="product-features">
                  {p.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.72rem', background: 'var(--water-1)', color: 'var(--primary)', padding: '4px 10px', borderRadius: '20px', fontWeight: 600 }}>
                    {p.storage}
                  </span>
                  <span style={{ fontSize: '0.72rem', background: 'var(--water-1)', color: 'var(--primary)', padding: '4px 10px', borderRadius: '20px', fontWeight: 600 }}>
                    {p.flow}
                  </span>
                </div>

                <div className="product-footer">
                  <div className="product-price">
                    <small>Price</small>
                    <span style={{ fontSize: '1rem', color: 'var(--text-mid)' }}>{p.price ?? 'Call for Price'}</span>
                  </div>
                  <a
                    href={waLink(`Hi! I'm interested in ${p.name}. Please share the price and availability.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-product"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="page-quote" style={{ marginTop: '48px' }}>
          <h3>Kent — House of Purity</h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: '12px', lineHeight: 1.7 }}>
            Kent RO systems remove arsenic, fluoride, lead, pesticides, bacteria &amp; viruses. Zero Water Wastage Technology™ ensures no drop is wasted. All models retain essential natural minerals via TDS Control.
          </p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={waLink('Hi! I want to buy a Kent RO purifier. Please help me choose the right model for my home.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              <i className="fab fa-whatsapp" /> Get Kent Price
            </a>
          </div>
        </div>
      </section>

      {/* ── BLACK+DECKER ── */}
      <section id="blackdecker" className="container page-content" style={{ paddingTop: '80px' }}>
        <div className="section-header center" style={{ marginBottom: '48px' }}>
          <div className="section-tag">Black+Decker</div>
          <h2 className="section-title">
            International <span style={{ color: 'var(--accent)' }}>RO Purifiers</span>
          </h2>
          <p className="section-sub">
            BLACK+DECKER RO Water Purifiers — an international brand now available in India, manufactured &amp; serviced by Kent RO. ISI certified with modern kitchen aesthetics.
          </p>
        </div>

        <div style={{ background: '#1a1a1a', borderRadius: 'var(--radius)', padding: '28px 32px', display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '6px' }}>BLACK+DECKER — Pure Water, Healthy Life</p>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              International brand brought to India by Kent RO. Multi-stage purification with Copper &amp; Alkaline technology for tastier, healthier drinking water.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ background: '#fff', color: '#1a1a1a', padding: '6px 14px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>ISI Certified</span>
            <span style={{ background: '#fff', color: '#1a1a1a', padding: '6px 14px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>20 L/hr</span>
            <span style={{ background: '#fff', color: '#1a1a1a', padding: '6px 14px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700 }}>Kent Serviced</span>
          </div>
        </div>

        <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {BD_PRODUCTS.map(p => (
            <article key={p.id} className="product-card featured" style={{ borderTop: '4px solid #1a1a1a' }}>
              <div className="product-badge-tag" style={{ background: '#1a1a1a', color: '#fff' }}>
                {p.badge}
              </div>

              <div className="product-img-wrap" style={{ background: 'linear-gradient(180deg,#2a2a2a18 0%,#1a1a1a08 100%)', minHeight: '180px' }}>
                <img
                  src="https://5.imimg.com/data5/EX/QH/MY-25030051/aquagrand-15-litres-aqua-natural-ro-auto-tds-controll-2cro-uv-250x250.png"
                  alt={p.name}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>

              <div className="product-body">
                <div className="product-model" style={{ color: '#888' }}>Black+Decker by Kent RO</div>
                <h3 className="product-name">{p.name}</h3>

                <ul className="product-features">
                  {p.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.72rem', background: '#f0f0f0', color: '#1a1a1a', padding: '4px 10px', borderRadius: '20px', fontWeight: 600 }}>
                    {p.storage}
                  </span>
                  <span style={{ fontSize: '0.72rem', background: '#f0f0f0', color: '#1a1a1a', padding: '4px 10px', borderRadius: '20px', fontWeight: 600 }}>
                    {p.flow}
                  </span>
                </div>

                <div className="product-footer">
                  <div className="product-price">
                    <small>Price</small>
                    <span style={{ fontSize: '1rem', color: 'var(--text-mid)' }}>{p.price ?? 'Call for Price'}</span>
                  </div>
                  <a
                    href={waLink(`Hi! I'm interested in the ${p.name} RO purifier. Please share price and details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-product"
                    style={{ background: 'linear-gradient(135deg,#1a1a1a,#444)' }}
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ background: 'linear-gradient(135deg,#1a1a1a,#333)', borderRadius: 'var(--radius)', padding: '40px', color: '#fff', marginTop: '48px' }}>
          <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem,2.5vw,2rem)', marginBottom: '12px' }}>Service: 1800 203 4255</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '24px', lineHeight: 1.7 }}>
            Black+Decker RO purifiers are manufactured, sold &amp; serviced by Kent RO in India. Contact us for pricing, availability, and installation in your area.
          </p>
          <a
            href={waLink('Hi! I want to enquire about Black+Decker RO purifiers. Please share price and details.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white"
          >
            Get Price on WhatsApp
          </a>
        </div>
      </section>

      {/* ── COMMERCIAL ── */}
      <section id="commercial" className="container page-content" style={{ paddingTop: '80px' }}>
        <div className="section-header center" style={{ marginBottom: '48px' }}>
          <div className="section-tag">Commercial &amp; Industrial</div>
          <h2 className="section-title">
            High-Capacity <span style={{ color: 'var(--accent)' }}>RO Plants</span>
          </h2>
          <p className="section-sub">
            Dr. Aquagrand commercial RO systems for offices, restaurants, schools, hospitals, and industries — from 25 LPH to 2000 LPH with 5-stage filtration.
          </p>
        </div>

        <h3 style={{ fontFamily: 'var(--font-playfair)', color: 'var(--primary-dark)', marginBottom: '28px' }}>Small Commercial Plants (RO + UV)</h3>
        <div className="commercial-grid">
          {COMMERCIAL_PRODUCTS.map(p => (
            <article key={p.id} className="commercial-card">
              <div className="comm-icon" style={{ fontSize: '1.8rem' }}>🏭</div>
              <h3>{p.name}</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.8rem', marginBottom: '4px' }}>{p.forUse}</p>

              <ul className="comm-specs">
                <li><span>RO Capacity</span> <span>{p.capacity}</span></li>
                <li><span>Filtration</span> <span>{p.filtration}</span></li>
                <li><span>RO MRP</span> <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{p.price}</span></li>
                <li><span>UV Variant</span> <span>{p.uvCapacity}</span></li>
                <li><span>UV MRP</span> <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{p.uvPrice}</span></li>
              </ul>

              <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginBottom: '16px' }}>{p.priceNote}</p>

              <a
                href={waLink(`Hi! I'm interested in the Dr. Aquagrand Commercial RO Plant (${p.capacity}). Please share details.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-product"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <i className="fab fa-whatsapp" /> Get Quote
              </a>
            </article>
          ))}
        </div>

        <h3 style={{ fontFamily: 'var(--font-playfair)', color: 'var(--primary-dark)', margin: '56px 0 28px' }}>Industrial RO Plants</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {INDUSTRIAL_PRODUCTS.map(p => (
            <article
              key={p.id}
              className="commercial-card"
              style={{ textAlign: 'center', background: 'linear-gradient(180deg,var(--water-1),#fff)', border: '2px solid var(--water-2)' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🏗️</div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', color: 'var(--primary-dark)', fontSize: '1.1rem', marginBottom: '6px' }}>{p.name}</h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginBottom: '16px' }}>{p.forUse}</p>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', lineHeight: 1 }}>{p.price}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-light)', marginBottom: '16px' }}>{p.note}</div>
              <a
                href={waLink(`Hi! I need a quote for Dr. Aquagrand ${p.name}. Please share details and installation info.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-product"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.78rem' }}
              >
                <i className="fab fa-whatsapp" /> Get Quote
              </a>
            </article>
          ))}
        </div>

        <div className="page-quote" style={{ marginTop: '48px' }}>
          <h3>Need a Custom Capacity?</h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: '12px', lineHeight: 1.7 }}>
            We design and install RO plants beyond 2000 LPH for large industries, townships, and government projects. All plants come with 5-stage filtration, high-pressure pumps, sand &amp; carbon media, and UPVC piping.
          </p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={waLink('Hi! I need a custom commercial/industrial RO plant. Please help me with a site survey and quotation.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              <i className="fab fa-whatsapp" /> Request Site Survey
            </a>
            <Link href="/contact" className="btn-ghost">
              Call Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="cta-strip">
        <div className="container">
          <div>
            <h2>Not sure which RO is right for you?</h2>
            <p>We test your water and recommend the perfect system — free of charge.</p>
          </div>
          <div className="cta-btns">
            <a
              href={waLink('Hi! I need help choosing the right RO purifier. Can you help me with a free water test?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              <i className="fab fa-whatsapp" /> WhatsApp Us
            </a>
            <Link href="/contact" className="btn-ghost">
              Book Free Test
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}