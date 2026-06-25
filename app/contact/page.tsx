'use client';
import Link from 'next/link';
import { useState } from 'react';

const WA_NUMBER = '919938884401';
function waLink(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const QUICK_TOPICS = [
  { icon: '💧', label: 'Buy a Purifier', wa: 'Hi! I want to buy an RO purifier. Please help me choose the right model.' },
  { icon: '🔧', label: 'Book Installation', wa: 'Hi! I need RO installation at my home. Please schedule a visit.' },
  { icon: '⚙️', label: 'Request Repair', wa: 'Hi! My RO purifier needs repair. Can you send a technician?' },
  { icon: '📋', label: 'AMC Plans', wa: 'Hi! I want to know about AMC plans for my RO purifier.' },
  { icon: '🧪', label: 'Free Water Test', wa: 'Hi! I want a free water quality test at my home. Please schedule a visit.' },
  { icon: '🔄', label: 'Filter Change', wa: 'Hi! I need a filter replacement for my RO purifier. Please share details.' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', topic: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hi! My name is ${formData.name}. Phone: ${formData.phone}. Topic: ${formData.topic || 'General'}. ${formData.message}`;
    window.open(waLink(msg), '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <main className="page-shell">

      {/* ── HERO ── */}
      <section className="page-hero page-hero-alt page-hero-contact">
        <div className="container">
          <div className="section-tag">Contact Us</div>
          <h1 className="section-title" style={{ color: '#fff' }}>
            We're in Sambalpur. <br />
            <span style={{ color: 'var(--accent-2)' }}>We'll be at your door fast.</span>
          </h1>
          <p className="section-sub">
            Call, WhatsApp, or send us a message — our local team responds quickly for sales, installation, AMC, repair, and water testing.
          </p>
          <div className="hero-actions">
            <a href="tel:+919938884401" className="btn-primary">
              <i className="fas fa-phone" /> Call +91 99388 84401
            </a>
            <a
              href={waLink('Hi! I need help with my water purifier.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <i className="fab fa-whatsapp" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT STRIP ── */}
      <div style={{ background: 'var(--primary-dark)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { icon: '📞', label: 'Sales', value: '+91 99388 84401', href: 'tel:+919938884401' },
              { icon: '🛠️', label: 'Service', value: '+91 90908 07429', href: 'tel:+919090807429' },
              { icon: '✉️', label: 'Email', value: 'manasbarik25822@gmail.com', href: 'mailto:manasbarik25822@gmail.com' },
              { icon: '📍', label: 'Location', value: 'Ainthapali, Sambalpur', href: '#map' },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                style={{
                  padding: '22px 24px',
                  textAlign: 'center',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  textDecoration: 'none',
                  flexShrink: 0,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{c.icon}</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '3px' }}>{c.label}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--accent-2)', fontWeight: 600 }}>{c.value}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="container page-content">

        {/* ── QUICK TOPIC BUTTONS ── */}
        <div style={{ marginBottom: '72px' }}>
          <div className="section-header center" style={{ marginBottom: '36px' }}>
            <div className="section-tag">Quick Connect</div>
            <h2 className="section-title">
              What do you need help with <span style={{ color: 'var(--accent)' }}>today?</span>
            </h2>
            <p className="section-sub">Tap any topic below to open a pre-filled WhatsApp message — the fastest way to reach us.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
          }}>
            {QUICK_TOPICS.map((t) => (
              <a
                key={t.label}
                href={waLink(t.wa)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '28px 16px',
                  background: 'var(--water-1)',
                  border: '1px solid var(--water-2)',
                  borderRadius: 'var(--radius)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--primary)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  (e.currentTarget.querySelector('.topic-label') as HTMLElement).style.color = '#fff';
                  (e.currentTarget.querySelector('.topic-icon') as HTMLElement).style.transform = 'scale(1.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--water-1)';
                  e.currentTarget.style.borderColor = 'var(--water-2)';
                  (e.currentTarget.querySelector('.topic-label') as HTMLElement).style.color = 'var(--primary-dark)';
                  (e.currentTarget.querySelector('.topic-icon') as HTMLElement).style.transform = 'scale(1)';
                }}
              >
                <div className="topic-icon" style={{ fontSize: '2rem', transition: 'transform 0.2s' }}>{t.icon}</div>
                <div className="topic-label" style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--primary-dark)', textAlign: 'center', transition: 'color 0.2s' }}>{t.label}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <i className="fab fa-whatsapp" /> WhatsApp
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── CONTACT CARDS + FORM ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '72px',
          alignItems: 'start',
        }}>

          {/* Contact details column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Sales card */}
            <div style={{
              background: '#fff',
              border: '1px solid var(--water-2)',
              borderTop: '4px solid var(--accent)',
              borderRadius: 'var(--radius)',
              padding: '28px',
              boxShadow: '0 2px 12px rgba(0,60,100,0.06)',
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>💧</div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', color: 'var(--primary-dark)', fontSize: '1.1rem', marginBottom: '8px' }}>Sales & Product Help</h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.87rem', lineHeight: 1.65, marginBottom: '16px' }}>
                Need a purifier recommendation or want to compare models? We'll help you choose the best system for your water and budget.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="tel:+919938884401" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                  <i className="fas fa-phone" style={{ color: 'var(--accent)', width: '16px' }} /> +91 99388 84401
                </a>
                <a href="mailto:manasbarik25822@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none' }}>
                  <i className="fas fa-envelope" style={{ color: 'var(--accent)', width: '16px' }} /> manasbarik25822@gmail.com
                </a>
                <a
                  href={waLink('Hi! I want to buy an RO purifier. Can you help me choose the right model?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#25d366', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', marginTop: '4px' }}
                >
                  <i className="fab fa-whatsapp" style={{ width: '16px' }} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Service card */}
            <div style={{
              background: '#fff',
              border: '1px solid var(--water-2)',
              borderTop: '4px solid #c9a84c',
              borderRadius: 'var(--radius)',
              padding: '28px',
              boxShadow: '0 2px 12px rgba(0,60,100,0.06)',
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>🛠️</div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', color: 'var(--primary-dark)', fontSize: '1.1rem', marginBottom: '8px' }}>Service & AMC Requests</h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.87rem', lineHeight: 1.65, marginBottom: '16px' }}>
                Book installation, maintenance, repair, or a free water test. Our Sambalpur-based team responds same day.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="tel:+919090807429" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                  <i className="fas fa-phone" style={{ color: '#c9a84c', width: '16px' }} /> +91 90908 07429
                </a>
                <Link href="/services" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none' }}>
                  <i className="fas fa-arrow-right" style={{ color: '#c9a84c', width: '16px' }} /> View all services
                </Link>
                <a
                  href={waLink('Hi! I need service for my RO purifier. Can you help?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#25d366', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', marginTop: '4px' }}
                >
                  <i className="fab fa-whatsapp" style={{ width: '16px' }} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Hours */}
            <div style={{
              background: 'var(--water-1)',
              border: '1px solid var(--water-2)',
              borderRadius: 'var(--radius)',
              padding: '24px 28px',
            }}>
              <div style={{ fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '12px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-clock" style={{ color: 'var(--accent)' }} /> Working Hours
              </div>
              {[
                { day: 'Monday – Saturday', time: '9:00 AM – 7:00 PM' },
                { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
                { day: 'Emergency Service', time: 'Available on WhatsApp' },
              ].map((h) => (
                <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.82rem' }}>
                  <span style={{ color: 'var(--text-mid)' }}>{h.day}</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div style={{
            background: 'linear-gradient(145deg, var(--primary-dark), var(--primary))',
            borderRadius: 'var(--radius)',
            padding: '40px 36px',
            boxShadow: '0 8px 40px rgba(0,60,100,0.2)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-playfair)', color: '#fff', fontSize: '1.4rem', marginBottom: '6px' }}>
              Send us a message
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '28px' }}>
              We'll reply via WhatsApp within minutes.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={formData.name}
                  onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fff', fontSize: '0.9rem', boxSizing: 'border-box',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Mobile number"
                  value={formData.phone}
                  onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fff', fontSize: '0.9rem', boxSizing: 'border-box',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Topic
                </label>
                <select
                  value={formData.topic}
                  onChange={e => setFormData(p => ({ ...p, topic: e.target.value }))}
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(30,70,110,0.95)',
                    color: formData.topic ? '#fff' : 'rgba(255,255,255,0.4)',
                    fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none',
                  }}
                >
                  <option value="">Select a topic…</option>
                  <option value="Buy a Purifier">Buy a Purifier</option>
                  <option value="Installation">Book Installation</option>
                  <option value="Repair">Request Repair</option>
                  <option value="AMC">AMC Plans</option>
                  <option value="Filter Change">Filter Change</option>
                  <option value="Water Test">Free Water Test</option>
                  <option value="Commercial">Commercial / Industrial</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you need…"
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fff', fontSize: '0.9rem', boxSizing: 'border-box',
                    outline: 'none', resize: 'vertical', fontFamily: 'inherit',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  padding: '14px 24px',
                  borderRadius: '6px',
                  background: submitted
                    ? 'linear-gradient(135deg,#2d6a4f,#74c69d)'
                    : 'linear-gradient(135deg,#25d366,#128c7e)',
                  color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                  border: 'none', cursor: 'pointer', transition: 'all 0.3s',
                  marginTop: '4px',
                }}
              >
                {submitted ? (
                  <><i className="fas fa-check" /> Opening WhatsApp…</>
                ) : (
                  <><i className="fab fa-whatsapp" /> Send via WhatsApp</>
                )}
              </button>

              <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textAlign: 'center', lineHeight: 1.5 }}>
                Submitting opens WhatsApp with your message pre-filled. We reply within minutes.
              </p>
            </form>
          </div>
        </div>

        {/* ── MAP ── */}
        <div id="map" style={{ marginBottom: '0' }}>
          <div className="section-header center" style={{ marginBottom: '32px' }}>
            <div className="section-tag">Find Us</div>
            <h2 className="section-title">
              We're based in <span style={{ color: 'var(--accent)' }}>Ainthapali, Sambalpur.</span>
            </h2>
            <p className="section-sub">Our technicians cover all areas of Sambalpur district for installation, service, and repair visits.</p>
          </div>

          <div style={{
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            border: '1px solid var(--water-2)',
            boxShadow: '0 4px 24px rgba(0,60,100,0.1)',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.342!2d83.975!3d21.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1f34!2sAinthapali%2C%20Sambalpur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aquagrand Location — Ainthapali, Sambalpur"
            />
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="cta-strip">
        <div className="container">
          <div>
            <h2>Need water care help right now?</h2>
            <p>Our Sambalpur team is one WhatsApp away — we'll get to you the same day.</p>
          </div>
          <div className="cta-btns">
            <a
              href={waLink('Hi! I need help with my water purifier today.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              <i className="fab fa-whatsapp" /> WhatsApp Now
            </a>
            <a href="tel:+919938884401" className="btn-ghost">
              <i className="fas fa-phone" /> Call Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}