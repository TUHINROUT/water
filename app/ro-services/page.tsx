import Link from 'next/link';
import type { Metadata } from 'next';
import {
  DomesticROIllustration,
  WallMountROIllustration,
  CommercialPlantIllustration,
  TechnicianIcon,
  DropDivider,
} from '@/components/ROIllustrations';

export const metadata: Metadata = {
  title: 'RO Services & Installation in Sambalpur | Aquagrand Water Purifiers',
  description:
    'Complete RO water purifier services in Sambalpur — professional installation, AMC plans, filter & membrane replacement, repair, free water testing, and commercial RO plant setup. Genuine parts, certified technicians.',
  keywords:
    'RO installation Sambalpur, RO service Sambalpur, water purifier installation Odisha, RO plant installation, RO AMC Sambalpur, RO repair Sambalpur, commercial RO plant installation',
  alternates: { canonical: 'https://watercareaqua.in/ro-services' },
  openGraph: {
    type: 'website',
    url: 'https://watercareaqua.in/ro-services',
    title: 'RO Services & Installation in Sambalpur | Aquagrand',
    description:
      'Professional RO installation, AMC, repair, filter replacement, and commercial RO plant setup — all under one roof in Sambalpur, Odisha.',
  },
};

const WA_NUMBER = '918328907088';
function waLink(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ───────────────────────── DATA ───────────────────────── */

const INSTALL_STEPS = [
  {
    step: '01',
    title: 'Site Visit & Water Test',
    body: 'A technician visits your home or site, tests your water source for TDS, hardness, and contamination, and checks plumbing & electrical points.',
  },
  {
    step: '02',
    title: 'System Recommendation',
    body: 'Based on the test results and your daily water need, we recommend the right RO/UV/UF configuration — never an oversized or undersized system.',
  },
  {
    step: '03',
    title: 'Mounting & Plumbing',
    body: 'The unit is wall-mounted or placed under the counter, inlet/outlet pipes are connected, and the storage tank and faucet are fitted securely.',
  },
  {
    step: '04',
    title: 'Electrical & Safety Check',
    body: 'Power connections are wired through a stabilizer/surge point, earthing is verified, and all joints are leak-tested under pressure.',
  },
  {
    step: '05',
    title: 'Flush, Test & Handover',
    body: 'The system is flushed, first-fill water is discarded, output TDS is measured and shown to you, and the unit is handed over with a demo.',
  },
];

const RO_SERVICES = [
  {
    icon: 'fas fa-tools',
    label: 'Installation',
    title: 'New RO Installation',
    body: 'End-to-end installation of domestic, wall-mounted, and under-sink RO purifiers — correct plumbing, electrical safety, secure mounting, and a full test run before we leave.',
    points: ['Free site & water survey', 'Same-day installation available', 'All brands & models supported', 'Post-install TDS report'],
    accent: '#00b4d8',
    accentLight: '#e0f7fc',
    wa: 'Hi! I need a new RO purifier installed. Please help me schedule a visit.',
  },
  {
    icon: 'fas fa-industry',
    label: 'Commercial',
    title: 'Commercial RO Plant Setup',
    body: 'Design, supply, and installation of commercial and industrial RO plants for offices, restaurants, schools, hospitals, and factories — from 25 LPH to 2000+ LPH.',
    points: ['Capacity-matched system design', 'Skid-mounted multi-stage plants', 'Site survey & layout planning', 'Civil & electrical coordination'],
    accent: '#0a4f7a',
    accentLight: '#e7f0f7',
    wa: 'Hi! I need a commercial/industrial RO plant installed. Please share details.',
  },
  {
    icon: 'fas fa-calendar-check',
    label: 'AMC',
    title: 'Annual Maintenance Contracts',
    body: 'Scheduled AMC visits that cover filter changes, membrane checks, full system sanitization, and priority breakdown support — so your water stays safe all year round.',
    points: ['2 or 4 visits per year', 'Genuine filter replacements', 'Full system sanitization', 'Priority emergency response'],
    accent: '#c9a84c',
    accentLight: '#faf3e3',
    wa: 'Hi! I want to know more about your AMC plans for RO purifiers.',
  },
  {
    icon: 'fas fa-filter',
    label: 'Filter Change',
    title: 'Filter & Membrane Replacement',
    body: 'Genuine OEM sediment filters, carbon filters, and RO membranes — fitted on schedule with a reminder system so performance never drops unnoticed.',
    points: ['All filter & membrane types', 'Genuine brand parts only', 'Service reminder alerts', 'Price quoted before work starts'],
    accent: '#0077b6',
    accentLight: '#e1f0f8',
    wa: 'Hi! I need filter or membrane replacement for my RO purifier.',
  },
  {
    icon: 'fas fa-wrench',
    label: 'Repair',
    title: 'Repair & Spare Parts',
    body: 'Fast diagnosis and repair for pump failures, leakages, low output, motor issues, and membrane faults — using 100% genuine spare parts across all major brands.',
    points: ['Same-day response in Sambalpur', 'Genuine OEM spare parts', 'All brands supported', 'Transparent cost upfront'],
    accent: '#e07830',
    accentLight: '#fdebe0',
    wa: 'Hi! My RO purifier needs repair. Can you send a technician?',
  },
  {
    icon: 'fas fa-flask',
    label: 'Water Testing',
    title: 'Free Water Quality Testing',
    body: 'We measure TDS, hardness, and contamination profile of your water source before recommending any product or service — so the solution actually fits your water.',
    points: ['TDS & hardness measurement', 'Contamination screening', 'Completely free of charge', 'No purchase obligation'],
    accent: '#2d6a4f',
    accentLight: '#e6f3ec',
    wa: 'Hi! I want a free water quality test at my home. Please help me schedule.',
  },
  {
    icon: 'fas fa-house-chimney',
    label: 'Relocation',
    title: 'Uninstallation & Relocation',
    body: "Moving homes or renovating? We safely uninstall your RO unit, transport it, and reinstall it at the new location with a fresh leak and performance check.",
    points: ['Safe disconnect & packing', 'Reinstallation at new site', 'Full leak & pressure test', 'Same warranty terms apply'],
    accent: '#7b2d00',
    accentLight: '#f3e6e0',
    wa: 'Hi! I need to relocate my RO purifier to a new address. Please help.',
  },
  {
    icon: 'fas fa-headset',
    label: 'Support',
    title: '24/7 Emergency Support',
    body: 'Sudden leak, no output, or strange odour in the water? Our support line is open round the clock for emergency diagnosis and urgent technician dispatch.',
    points: ['24/7 WhatsApp & phone support', 'Urgent dispatch in Sambalpur', 'Remote troubleshooting first', 'Covered under Premium AMC'],
    accent: '#a855f7',
    accentLight: '#f3eafd',
    wa: 'Hi! I have an urgent issue with my RO purifier. Please help immediately.',
  },
];

const PLANT_TYPES = [
  {
    Illustration: DomesticROIllustration,
    title: 'Domestic Under-Counter RO',
    desc: 'Compact RO+UV+UF units for kitchens — fits under the counter or on the wall, with a separate storage tank and dedicated faucet.',
    specs: [
      { label: 'Capacity', value: '8–15 LPH' },
      { label: 'Storage', value: '7–15 L Tank' },
      { label: 'Best for', value: 'Homes & Apartments' },
    ],
    accent: '#00b4d8',
  },
  {
    Illustration: WallMountROIllustration,
    title: 'Whole-Home Point-of-Entry RO',
    desc: 'A higher-capacity wall-mounted system installed at the main water inlet, purifying water for the entire house — kitchen, bathrooms, and storage tank.',
    specs: [
      { label: 'Capacity', value: '50–200 LPH' },
      { label: 'Stages', value: '5–7 Stage' },
      { label: 'Best for', value: 'Villas & Large Homes' },
    ],
    accent: '#0a4f7a',
  },
  {
    Illustration: CommercialPlantIllustration,
    title: 'Commercial & Industrial RO Plant',
    desc: 'Skid-mounted, multi-membrane RO plants with dedicated control panels — built for restaurants, offices, schools, hospitals, and factories.',
    specs: [
      { label: 'Capacity', value: '25–2000+ LPH' },
      { label: 'Control', value: 'Auto Panel + Gauges' },
      { label: 'Best for', value: 'Business & Institutions' },
    ],
    accent: '#c9a84c',
  },
];

const AMC_PLANS = [
  {
    name: 'Basic',
    visits: '2 visits/year',
    includes: ['Pre & post carbon filter change', 'Sediment filter change', 'System sanitization', 'Performance check & report'],
    tag: null as string | null,
    tagStyle: {},
  },
  {
    name: 'Standard',
    visits: '4 visits/year',
    includes: ['All Basic inclusions', 'RO membrane condition check', 'UV lamp check', 'Priority service calls', 'Free minor repairs'],
    tag: 'Most Popular',
    tagStyle: { background: 'linear-gradient(135deg,#c9a84c,#f0cc6c)', color: '#062e48' },
  },
  {
    name: 'Premium',
    visits: '4 visits/year + on-call',
    includes: ['All Standard inclusions', 'RO membrane replacement', 'UV lamp replacement', '24hr emergency support', 'Free labour on all repairs'],
    tag: 'Best Coverage',
    tagStyle: { background: 'linear-gradient(135deg,var(--primary),var(--accent))', color: '#fff' },
  },
];

const WHY_US = [
  { icon: 'fas fa-user-check', title: 'Certified Technicians', body: 'Every technician is trained on RO, UV, and UF systems across all major brands before going on-site.' },
  { icon: 'fas fa-shield-halved', title: '100% Genuine Parts', body: 'We only fit OEM membranes, filters, and spares — never duplicate or third-party parts that shorten system life.' },
  { icon: 'fas fa-indian-rupee-sign', title: 'Transparent Pricing', body: 'You receive the full cost — parts and labour — before any work begins. No hidden charges, ever.' },
  { icon: 'fas fa-bolt', title: 'Fast Local Response', body: 'Based in Sambalpur, our team typically reaches your location within hours, not days.' },
  { icon: 'fas fa-flask-vial', title: 'Test Before & After', body: 'We measure water quality before recommending anything, and again after every install or service.' },
  { icon: 'fas fa-headset', title: 'Real Human Support', body: 'Call or WhatsApp and speak with someone who actually knows your installation and service history.' },
];

const FAQS = [
  {
    q: 'How long does RO installation take?',
    a: 'A standard domestic RO installation takes 45–90 minutes once the technician arrives, including water testing, mounting, plumbing, and a final demo. Commercial plant installation depends on capacity and site readiness and is scheduled after a site survey.',
  },
  {
    q: 'Do I need to buy the purifier from you to get installation service?',
    a: 'No. We install, service, and repair RO purifiers of any brand, whether or not you purchased it from Aquagrand. Genuine spare parts and filters are available for all major brands.',
  },
  {
    q: 'How often should RO filters and membranes be replaced?',
    a: 'Pre-filters are typically replaced every 4–6 months and RO membranes every 12–18 months, depending on input water quality. Our AMC plans schedule these automatically so you never miss a change.',
  },
  {
    q: 'Is the water testing really free?',
    a: 'Yes. We test TDS, hardness, and basic contamination indicators at your location at no cost and with no obligation to purchase — it simply helps us (and you) choose the right system.',
  },
  {
    q: 'Can you set up an RO plant for a restaurant, school, or office?',
    a: 'Yes. We design and install commercial RO plants from 25 LPH up to 2000+ LPH, including skid-mounted systems with control panels, suitable for restaurants, offices, schools, clinics, and factories across Sambalpur and Western Odisha.',
  },
  {
    q: 'What happens if my RO purifier leaks or stops working after installation?',
    a: 'All installations include a leak and pressure test before handover. If an issue arises afterward, AMC customers get priority response, and all customers can reach our 24/7 support line for urgent diagnosis and dispatch.',
  },
];

/* ───────────────────────── PAGE ───────────────────────── */

export default function ROServicesPage() {
  return (
    <main className="page-shell">

      {/* ══════════════ HERO ══════════════ */}
      <section className="page-hero page-hero-services">
        <div className="container">
          <div className="section-tag">RO Services &amp; Installation</div>
          <h1 className="section-title" style={{ color: '#fff' }}>
            Every RO Service You Need, <br />
            <span style={{ color: 'var(--accent-2)' }}>Done Right the First Time.</span>
          </h1>
          <p className="section-sub">
            From free water testing to professional installation, AMC, filter changes, repairs, and full commercial RO plant setup — our Sambalpur-based technicians handle it all with genuine parts and transparent pricing.
          </p>
          <div className="hero-actions">
            <a
              href={waLink('Hi! I need RO installation/service. Please help me schedule a visit.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <i className="fab fa-whatsapp" /> Book Installation
            </a>
            <Link href="/product" className="btn-ghost">
              <i className="fas fa-droplet" /> Shop RO Purifiers
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ TRUST STRIP ══════════════ */}
      <div style={{ background: 'var(--primary-dark)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            textAlign: 'center',
          }}>
            {[
              { num: '5,000+', label: 'Installations Done' },
              { num: '10+', label: 'Years of Service' },
              { num: 'Same Day', label: 'Installation Slots' },
              { num: '24/7', label: 'Emergency Support' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '28px 16px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 700, color: 'var(--accent-2)', marginBottom: '4px' }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════ FULL SERVICES GRID ══════════════ */}
      <section className="container page-content">
        <div className="section-header center" style={{ marginBottom: '56px' }}>
          <div className="section-tag">What We Offer</div>
          <h2 className="section-title">
            Everything your RO system needs, <span style={{ color: 'var(--accent)' }}>under one roof.</span>
          </h2>
          <p className="section-sub" style={{ margin: '10px auto 0' }}>
            Eight dedicated services, one accountable local team — every job carried out by trained technicians using 100% genuine parts and pre-agreed, transparent pricing.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '90px',
        }}>
          {RO_SERVICES.map((s) => (
            <article
              key={s.title}
              className="ro-service-card"
              style={{
                background: '#fff',
                border: '1px solid var(--water-2)',
                borderTop: `4px solid ${s.accent}`,
                borderRadius: 'var(--radius)',
                padding: '30px 26px',
                boxShadow: '0 2px 16px rgba(0,60,100,0.06)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.22s ease, box-shadow 0.22s ease',
              }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: s.accentLight, display: 'flex', alignItems: 'center',
                justifyContent: 'center', marginBottom: '18px',
              }}>
                <i className={s.icon} style={{ color: s.accent, fontSize: '1.25rem' }} aria-hidden="true" />
              </div>

              <div style={{
                display: 'inline-block', fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: s.accent, marginBottom: '8px',
              }}>
                {s.label}
              </div>

              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.18rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '10px', lineHeight: 1.3 }}>
                {s.title}
              </h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.87rem', lineHeight: 1.7, marginBottom: '18px' }}>
                {s.body}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                {s.points.map((h) => (
                  <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--text-mid)' }}>
                    <i className="fas fa-check-circle" style={{ color: s.accent, fontSize: '0.75rem', marginTop: '3px', flexShrink: 0 }} />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(s.wa)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  padding: '11px 18px', borderRadius: '8px', background: s.accent, color: '#fff',
                  fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none', alignSelf: 'flex-start',
                }}
              >
                <i className="fab fa-whatsapp" /> Book This Service
              </a>
            </article>
          ))}
        </div>

        {/* ══════════════ INSTALLATION PROCESS (TIMELINE) ══════════════ */}
        <div style={{ marginBottom: '90px' }}>
          <div className="section-header center" style={{ marginBottom: '52px' }}>
            <div className="section-tag">How Installation Works</div>
            <h2 className="section-title">
              Five steps from <span style={{ color: 'var(--accent)' }}>booking to pure water.</span>
            </h2>
            <p className="section-sub" style={{ margin: '10px auto 0' }}>
              Every installation — domestic or commercial — follows the same disciplined process, so nothing is left to chance.
            </p>
          </div>

          <div className="ro-timeline">
            {INSTALL_STEPS.map((s, i) => (
              <div key={s.step} className="ro-timeline-item">
                <div className="ro-timeline-marker">
                  <TechnicianIcon color="#00b4d8" />
                  <span className="ro-timeline-num">{s.step}</span>
                </div>
                <div className="ro-timeline-content">
                  <h4 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '8px' }}>
                    {s.title}
                  </h4>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                    {s.body}
                  </p>
                </div>
                {i < INSTALL_STEPS.length - 1 && <div className="ro-timeline-connector" />}
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════ PLANT TYPES (ILLUSTRATED) ══════════════ */}
        <div style={{ marginBottom: '90px' }}>
          <div className="section-header center" style={{ marginBottom: '52px' }}>
            <div className="section-tag">RO Systems We Install</div>
            <h2 className="section-title">
              The right plant for every <span style={{ color: 'var(--accent)' }}>space and need.</span>
            </h2>
            <p className="section-sub" style={{ margin: '10px auto 0' }}>
              From a single kitchen tap to a multi-stage commercial plant — here's what installation looks like at each scale.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}>
            {PLANT_TYPES.map((p) => (
              <article
                key={p.title}
                style={{
                  background: '#fff',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--water-2)',
                  overflow: 'hidden',
                  boxShadow: '0 2px 16px rgba(0,60,100,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ background: 'linear-gradient(160deg, #eaf7fb 0%, #ffffff 100%)' }}>
                  <p.Illustration />
                </div>
                <div style={{ padding: '24px 22px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.12rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '10px', lineHeight: 1.3 }}>
                    {p.title}
                  </h3>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '18px' }}>
                    {p.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #f1f5f9', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', marginTop: 'auto' }}>
                    {p.specs.map((spec, si) => (
                      <div key={spec.label} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '9px 14px', background: si % 2 === 0 ? '#f8fafc' : '#fff',
                        borderBottom: si < p.specs.length - 1 ? '1px solid #f1f5f9' : 'none',
                      }}>
                        <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>{spec.label}</span>
                        <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--primary-dark)', background: `${p.accent}1a`, padding: '3px 10px', borderRadius: '20px' }}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={waLink(`Hi! I'm interested in the ${p.title}. Please share installation details and pricing.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      background: p.accent, color: '#fff', fontSize: '0.82rem', fontWeight: 700,
                      padding: '12px 18px', borderRadius: '10px', textDecoration: 'none',
                    }}
                  >
                    <i className="fab fa-whatsapp" /> Get Installation Quote
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ══════════════ WHY CHOOSE US ══════════════ */}
        <div style={{ marginBottom: '90px' }}>
          <div className="section-header center" style={{ marginBottom: '48px' }}>
            <div className="section-tag">Why Choose Our Service</div>
            <h2 className="section-title">
              Six reasons our installations <span style={{ color: 'var(--accent)' }}>just keep working.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {WHY_US.map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: '16px', background: 'var(--water-1)', border: '1px solid var(--water-2)', borderRadius: 'var(--radius)', padding: '24px 20px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={item.icon} style={{ color: 'var(--primary)', fontSize: '1.05rem' }} aria-hidden="true" />
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '6px', fontSize: '0.95rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.85rem', lineHeight: 1.65 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════ AMC PLANS ══════════════ */}
        <div style={{ marginBottom: '90px' }}>
          <div className="section-header center" style={{ marginBottom: '48px' }}>
            <div className="section-tag">AMC Plans</div>
            <h2 className="section-title">
              Pick a plan that keeps your <span style={{ color: 'var(--accent)' }}>water safe all year.</span>
            </h2>
            <p className="section-sub" style={{ margin: '10px auto 0' }}>
              Annual Maintenance Contracts with scheduled visits, genuine filters, and priority support. Call us for exact pricing based on your model.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {AMC_PLANS.map((plan) => (
              <article
                key={plan.name}
                style={{
                  background: plan.tag === 'Most Popular' ? 'linear-gradient(145deg, var(--primary-dark), var(--primary))' : '#fff',
                  border: plan.tag === 'Most Popular' ? 'none' : '1px solid var(--water-2)',
                  borderRadius: 'var(--radius)',
                  padding: '36px 28px',
                  boxShadow: plan.tag === 'Most Popular' ? '0 8px 40px rgba(0,60,100,0.25)' : '0 2px 12px rgba(0,60,100,0.06)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {plan.tag && (
                  <div style={{ position: 'absolute', top: '16px', right: '16px', padding: '4px 12px', borderRadius: '20px', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', ...plan.tagStyle }}>
                    {plan.tag}
                  </div>
                )}
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.6rem', fontWeight: 700, color: plan.tag === 'Most Popular' ? '#fff' : 'var(--primary-dark)', marginBottom: '4px' }}>
                  {plan.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: plan.tag === 'Most Popular' ? 'rgba(255,255,255,0.6)' : 'var(--text-light)', marginBottom: '24px', fontWeight: 600 }}>
                  {plan.visits}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px' }}>
                  {plan.includes.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '10px', fontSize: '0.85rem', color: plan.tag === 'Most Popular' ? 'rgba(255,255,255,0.85)' : 'var(--text-mid)' }}>
                      <i className="fas fa-check-circle" style={{ color: plan.tag === 'Most Popular' ? 'var(--accent-2)' : 'var(--accent)', fontSize: '0.75rem', flexShrink: 0, marginTop: '3px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hi! I want to know about the ${plan.name} AMC plan. Please share pricing and details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    padding: '12px 20px', borderRadius: '6px',
                    background: plan.tag === 'Most Popular' ? 'linear-gradient(135deg,var(--accent-2),var(--accent))' : 'var(--water-1)',
                    color: plan.tag === 'Most Popular' ? '#062e48' : 'var(--primary)',
                    fontWeight: 700, fontSize: '0.83rem', textDecoration: 'none',
                    border: plan.tag === 'Most Popular' ? 'none' : '1px solid var(--water-2)',
                  }}
                >
                  <i className="fab fa-whatsapp" /> Get {plan.name} Price
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* ══════════════ FAQ ══════════════ */}
        <div style={{ marginBottom: '20px' }}>
          <div className="section-header center" style={{ marginBottom: '48px' }}>
            <div className="section-tag">Common Questions</div>
            <h2 className="section-title">
              RO service <span style={{ color: 'var(--accent)' }}>questions, answered.</span>
            </h2>
          </div>

          <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQS.map((f) => (
              <details key={f.q} className="ro-faq-item">
                <summary className="ro-faq-question">
                  {f.q}
                  <i className="fas fa-chevron-down ro-faq-chevron" aria-hidden="true" />
                </summary>
                <p className="ro-faq-answer">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* ══════════════ TRUST QUOTE ══════════════ */}
        <div className="page-quote">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
            <DropDivider color="#ffffff" />
          </div>
          <h3 style={{ textAlign: 'center' }}>Every installation done right, every time — that's our only standard.</h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: '12px', lineHeight: 1.7, textAlign: 'center', maxWidth: '640px', marginInline: 'auto' }}>
            Aquagrand technicians are trained, local, and accountable. We use genuine parts, quote prices upfront, and don't leave until your water quality is confirmed in front of you.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href={waLink('Hi! I need help with RO installation or service. Can you send a technician?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              <i className="fab fa-whatsapp" /> WhatsApp for Service
            </a>
            <Link href="/contact" className="btn-ghost">
              Call Us
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ CTA STRIP ══════════════ */}
      <section className="cta-strip">
        <div className="container">
          <div>
            <h2>Ready to get your RO system installed?</h2>
            <p>Our Sambalpur team is ready — WhatsApp us and we'll schedule your visit today.</p>
          </div>
          <div className="cta-btns">
            <a
              href={waLink('Hi! I need RO installation today. Please help me schedule a visit.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              <i className="fab fa-whatsapp" /> WhatsApp Now
            </a>
            <Link href="/contact" className="btn-ghost">
              Contact Page
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
