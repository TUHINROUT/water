'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

const WA_SALES = '919938884401';
const WA_SERVICE = '919090807429';

function waLink(msg: string, num = WA_SALES) {
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}

const contactStyles = `
  .contact-section {
    padding: 100px 0;
    background: var(--off-white);
  }
  .contact-layout {
    display: grid;
    grid-template-columns: 1fr 1.35fr;
    gap: 40px;
    margin-top: 56px;
    align-items: start;
  }
  .contact-left {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .wa-card {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 60%, #059669 100%);
    border-radius: var(--radius);
    padding: 32px 28px;
    color: #fff;
    position: relative;
    overflow: hidden;
  }
  .wa-card::before {
    content: ' ';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
    top: -60px;
    right: -60px;
  }
  .wa-card::after {
    content: ' ';
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: rgba(255,255,255,0.04);
    bottom: -40px;
    left: 40px;
  }
  .wa-card-label {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.6);
    margin-bottom: 10px;
  }
  .wa-card h3 {
    font-family: var(--font-playfair), serif;
    font-size: 1.35rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 6px;
    line-height: 1.3;
  }
  .wa-card p {
    font-size: 0.84rem;
    color: rgba(255,255,255,0.7);
    margin-bottom: 22px;
    line-height: 1.6;
  }
  .wa-btn-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    z-index: 1;
  }
  .wa-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px 18px;
    border-radius: 14px;
    text-decoration: none;
    font-size: 0.88rem;
    font-weight: 600;
    transition: all 0.25s ease;
  }
  .wa-btn-primary {
    background: #25d366;
    color: #fff;
    box-shadow: 0 4px 18px rgba(37,211,102,0.35);
  }
  .wa-btn-primary:hover {
    background: #22c55e;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37,211,102,0.45);
  }
  .wa-btn-secondary {
    background: rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.9);
    border: 1px solid rgba(255,255,255,0.2);
  }
  .wa-btn-secondary:hover {
    background: rgba(255,255,255,0.2);
    transform: translateY(-2px);
  }
  .wa-btn i {
    font-size: 1.1rem;
    flex-shrink: 0;
  }
  .wa-btn-text small {
    display: block;
    font-size: 0.7rem;
    font-weight: 400;
    opacity: 0.75;
    margin-top: 1px;
  }
  .contact-info-stack {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .contact-info-card {
    background: #fff;
    border: 1px solid rgba(10,79,122,0.1);
    border-radius: var(--radius-sm);
    padding: 18px 20px;
    display: flex;
    align-items: flex-start;
    gap: 14px;
    transition: all 0.25s ease;
  }
  .contact-info-card:hover {
    border-color: var(--accent);
    box-shadow: 0 4px 20px rgba(0,180,216,0.1);
    transform: translateX(4px);
  }
  .cic-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--water-1), var(--water-2));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    font-size: 1rem;
    flex-shrink: 0;
  }
  .cic-body strong {
    display: block;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 4px;
  }
  .cic-body span,
  .cic-body a {
    display: block;
    font-size: 0.88rem;
    color: var(--text-mid);
    text-decoration: none;
    line-height: 1.55;
  }
  .cic-body a:hover {
    color: var(--accent);
  }
  .hours-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: linear-gradient(135deg, var(--water-1), var(--water-2));
    color: var(--primary);
    font-size: 0.72rem;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 20px;
    margin-top: 6px;
  }
  .contact-form-card {
    background: #fff;
    border-radius: var(--radius);
    border: 1px solid rgba(10,79,122,0.1);
    box-shadow: 0 8px 40px rgba(0,80,140,0.1);
    overflow: hidden;
  }
  .form-card-header {
    background: linear-gradient(135deg, var(--primary-dark), var(--primary));
    padding: 28px 32px;
    position: relative;
    overflow: hidden;
  }
  .form-card-header::after {
    content: ' ';
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.08);
    bottom: -60px;
    right: -40px;
  }
  .form-card-header h3 {
    font-family: var(--font-playfair), serif;
    font-size: 1.3rem;
    color: #fff;
    margin-bottom: 4px;
    position: relative;
    z-index: 1;
  }
  .form-card-header p {
    font-size: 0.83rem;
    color: rgba(255,255,255,0.65);
    position: relative;
    z-index: 1;
  }
  .form-card-body {
    padding: 28px 32px 32px;
  }
  .cf-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .cf-group {
    margin-bottom: 18px;
  }
  .cf-group label {
    display: block;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--text-mid);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 7px;
  }
  .cf-group label .req {
    color: var(--accent);
    margin-left: 2px;
  }
  .cf-input {
    width: 100%;
    background: var(--off-white);
    border: 1.5px solid rgba(10,79,122,0.12);
    border-radius: 12px;
    padding: 12px 16px;
    font-family: var(--font-dm-sans), sans-serif;
    font-size: 0.9rem;
    color: var(--text-dark);
    outline: none;
    transition: all 0.25s ease;
    appearance: none;
  }
  .cf-input:focus {
    border-color: var(--accent);
    background: #fff;
    box-shadow: 0 0 0 4px rgba(0,180,216,0.1);
  }
  .cf-input::placeholder {
    color: var(--text-light);
  }
  textarea.cf-input {
    min-height: 100px;
    resize: vertical;
    line-height: 1.6;
  }
  .form-submit-row {
    display: flex;
    gap: 14px;
    align-items: center;
    margin-top: 8px;
    flex-wrap: wrap;
  }
  .btn-submit {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: linear-gradient(135deg, var(--primary-light), var(--accent));
    color: #fff;
    border: none;
    padding: 14px 28px;
    border-radius: 50px;
    font-family: var(--font-dm-sans), sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.28s ease;
    box-shadow: 0 6px 24px rgba(0,180,216,0.3);
  }
  .btn-submit:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 32px rgba(0,180,216,0.42);
  }
  .btn-submit:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  .wa-alt-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #f0fdf4;
    color: #065f46;
    border: 1.5px solid #bbf7d0;
    padding: 13px 20px;
    border-radius: 50px;
    font-size: 0.88rem;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.25s ease;
    white-space: nowrap;
  }
  .wa-alt-btn:hover {
    background: #dcfce7;
    transform: translateY(-2px);
  }
  .form-success-bar {
    display: none;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    color: #065f46;
    border-radius: 12px;
    padding: 14px 18px;
    font-size: 0.88rem;
    font-weight: 600;
    margin-top: 16px;
  }
  .form-success-bar.show {
    display: flex;
  }
  .contact-map {
    margin-top: 48px;
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid rgba(10,79,122,0.1);
    box-shadow: 0 4px 24px rgba(0,80,140,0.1);
  }
  .contact-map iframe {
    width: 100%;
    height: 360px;
    border: 0;
    display: block;
  }
  @media (max-width: 900px) {
    .contact-layout {
      grid-template-columns: 1fr;
    }
    .cf-row {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 480px) {
    .form-card-header {
      padding: 22px 20px;
    }
    .form-card-body {
      padding: 20px;
    }
    .form-submit-row {
      flex-direction: column;
    }
    .btn-submit,
    .wa-alt-btn {
      width: 100%;
      justify-content: center;
    }
  }
`;

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 4000);
    }, 1400);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: contactStyles }} />

      <section id="contact" className="contact-section">
        <div className="container">
          <FadeIn className="section-header center">
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-title">
              Contact <span style={{ color: 'var(--accent)' }}>Aquagrand</span>
            </h2>
            <p className="section-sub">
              Visit our store, call us, or drop a WhatsApp — we respond within the hour.
            </p>
          </FadeIn>

          <div className="contact-layout">
            {/* ── LEFT ── */}
            <FadeIn className="contact-left">
              <div className="wa-card">
                <div className="wa-card-label">Fastest Response</div>
                <h3>Chat on WhatsApp</h3>
                <p>Get instant replies, product recommendations, and service bookings directly on WhatsApp.</p>
                <div className="wa-btn-group">
                  <a
                    href={waLink('Hi! I want to enquire about an RO purifier. Please help me choose the right model.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wa-btn wa-btn-primary"
                  >
                    <i className="fab fa-whatsapp" />
                    <span className="wa-btn-text">
                      Sales Enquiry
                      <small>+91 99388 84401</small>
                    </span>
                  </a>
                  <a
                    href={waLink('Hi! I need service or repair for my RO purifier.', WA_SERVICE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wa-btn wa-btn-secondary"
                  >
                    <i className="fas fa-wrench" />
                    <span className="wa-btn-text">
                      Service &amp; Repair
                      <small>+91 90908 07429</small>
                    </span>
                  </a>
                </div>
              </div>

              <div className="contact-info-stack">
                <div className="contact-info-card">
                  <div className="cic-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="cic-body">
                    <strong>Store Address</strong>
                    <span>Meher Nivas, Ainthapali Road</span>
                    <span>Opp. LIC Office, Sambalpur</span>
                    <span>Odisha – 768 004</span>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="cic-icon">
                    <i className="fas fa-phone" />
                  </div>
                  <div className="cic-body">
                    <strong>Phone</strong>
                    <a href="tel:+919938884401">
                      +91 99388 84401{' '}
                      <small style={{ display: 'inline', opacity: 0.6 }}>(Sales)</small>
                    </a>
                    <a href="tel:+919090807429">
                      +91 90908 07429{' '}
                      <small style={{ display: 'inline', opacity: 0.6 }}>(Service)</small>
                    </a>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="cic-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="cic-body">
                    <strong>Email</strong>
                    <a href="mailto:manasbarik25822@gmail.com">manasbarik25822@gmail.com</a>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="cic-icon">
                    <i className="fas fa-clock" />
                  </div>
                  <div className="cic-body">
                    <strong>Business Hours</strong>
                    <span>Monday – Saturday: 9:00 AM – 7:00 PM</span>
                    <span>Sunday: 10:00 AM – 5:00 PM</span>
                    <span className="hours-badge">
                      <i className="fas fa-circle" style={{ fontSize: '0.45rem', color: '#22c55e' }} />
                      Open Today
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* ── RIGHT — FORM ── */}
            <FadeIn className="contact-form-card">
              <div className="form-card-header">
                <h3>Send an Enquiry</h3>
                <p>We&apos;ll get back to you within a few hours.</p>
              </div>
              <div className="form-card-body">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="cf-row">
                    <div className="cf-group">
                      <label htmlFor="fname">
                        Full Name <span className="req">*</span>
                      </label>
                      <input
                        className="cf-input"
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="cf-group">
                      <label htmlFor="phone">
                        Phone <span className="req">*</span>
                      </label>
                      <input
                        className="cf-input"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>
                  <div className="cf-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      className="cf-input"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="cf-group">
                    <label htmlFor="product">Product Interest</label>
                    <select className="cf-input" id="product" name="product">
                      <option value="">— Select a product —</option>
                      <optgroup label="Dr. Aquagrand">
                        <option>Dr. Aquagrand Classic Blue (₹18,900)</option>
                        <option>Dr. Aquagrand Copper Pro (₹18,900)</option>
                        <option>Dr. Aquagrand Pro Black (₹21,500)</option>
                        <option>Dr. Aquagrand Alkaline Green (₹21,500)</option>
                      </optgroup>
                      <optgroup label="Kent RO">
                        <option>Kent Grand Plus</option>
                        <option>Kent Grand Star</option>
                        <option>Kent Pearl</option>
                      </optgroup>
                      <optgroup label="Commercial / Industrial">
                        <option>Commercial RO Plant (25–100 LPH)</option>
                        <option>Industrial RO Plant (250–2000 LPH)</option>
                      </optgroup>
                      <option>AMC / Service / Repair</option>
                      <option>Free Water Test</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="cf-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="cf-input"
                      id="message"
                      name="message"
                      placeholder="Tell us your requirement, water source, budget, or any question…"
                    />
                  </div>
                  <div className="form-submit-row">
                    <button type="submit" className="btn-submit" disabled={sending}>
                      {sending ? (
                        <>
                          <i className="fas fa-spinner fa-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane" /> Send Enquiry
                        </>
                      )}
                    </button>
                    <a
                      href={waLink('Hi! I want to send an enquiry about your RO purifiers.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wa-alt-btn"
                    >
                      <i className="fab fa-whatsapp" style={{ fontSize: '1.1rem' }} />
                      WhatsApp
                    </a>
                  </div>
                  <div
                    className={`form-success-bar${sent ? ' show' : ''}`}
                    role="alert"
                  >
                    <i
                      className="fas fa-check-circle"
                      style={{ fontSize: '1.1rem', color: '#059669' }}
                    />
                    Thank you! We&apos;ll contact you shortly.
                  </div>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* Map */}
          <FadeIn className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0!2d83.9667!3d21.4669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2097c765625f4f%3A0x0!2sAinthapali+Road%2C+Sambalpur%2C+Odisha!5e0!3m2!1sen!2sin!4v1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aquagrand Store Location"
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}