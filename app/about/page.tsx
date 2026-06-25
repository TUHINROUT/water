import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="page-shell">

            {/* ── HERO ── */}
            <section className="page-hero page-hero-alt">
                <div className="container">
                    <div className="section-tag">About Us</div>
                    <h1 className="section-title" style={{ color: '#fff' }}>
                        Sambalpur's Most Trusted <br />
                        <span style={{ color: 'var(--accent-2)' }}>Water Purification Expert</span>
                    </h1>
                    <p className="section-sub">
                        Since our founding, Aquagrand has served thousands of homes and businesses across Sambalpur — with genuine products, expert installation, and service you can count on.
                    </p>
                    <div className="hero-actions">
                        <Link href="/contact" className="btn-primary">
                            Contact Our Team
                        </Link>
                        <Link href="/services" className="btn-ghost">
                            View Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── STATS BAR ── */}
            <div style={{ background: 'var(--primary-dark)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                        gap: '0',
                        textAlign: 'center',
                    }}>
                        {[
                            { num: '5,000+', label: 'Happy Customers' },
                            { num: '10+', label: 'Years in Sambalpur' },
                            { num: '3', label: 'Premium Brands' },
                            { num: 'Same Day', label: 'Installation' },
                        ].map((s, i) => (
                            <div
                                key={i}
                                style={{
                                    padding: '32px 16px',
                                    borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                                }}
                            >
                                <div style={{
                                    fontFamily: 'var(--font-playfair)',
                                    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                                    fontWeight: 700,
                                    color: 'var(--accent-2)',
                                    lineHeight: 1,
                                    marginBottom: '6px',
                                }}>
                                    {s.num}
                                </div>
                                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── OUR STORY ── */}
            <section className="container page-content">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '64px',
                    alignItems: 'center',
                    marginBottom: '80px',
                }}>
                    {/* Left — story text */}
                    <div>
                        <div className="section-tag">Our Story</div>
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                            Born out of a simple belief: <span style={{ color: 'var(--accent)' }}>clean water is not a luxury.</span>
                        </h2>
                        <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                            Aquagrand started as a single-person operation in Sambalpur with one mission — bring the same quality of water purification that big cities take for granted to every home in our district.
                        </p>
                        <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
                            Over the years, we became an authorized dealer for Dr. Aquagrand, Kent RO, and Black+Decker. Today, our trained technicians handle everything from TDS testing and system selection to installation, AMC, and emergency repairs — all under one roof.
                        </p>
                        <p style={{ color: 'var(--text-mid)', lineHeight: 1.8 }}>
                            We are proud to be Sambalpur's most referred water care brand — not because of advertising, but because of the trust our customers extend to us every day.
                        </p>
                    </div>

                    {/* Right — pull-quote card */}
                    <div style={{
                        background: 'linear-gradient(145deg, var(--primary-dark), var(--primary))',
                        borderRadius: 'var(--radius)',
                        padding: '48px 40px',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        {/* decorative quote mark */}
                        <div style={{
                            position: 'absolute',
                            top: '-10px',
                            left: '24px',
                            fontFamily: 'Georgia, serif',
                            fontSize: '160px',
                            color: 'rgba(255,255,255,0.05)',
                            lineHeight: 1,
                            userSelect: 'none',
                        }}>
                            "
                        </div>
                        <p style={{
                            fontFamily: 'var(--font-playfair)',
                            fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                            color: '#fff',
                            lineHeight: 1.6,
                            fontStyle: 'italic',
                            position: 'relative',
                            zIndex: 1,
                            marginBottom: '28px',
                        }}>
                            We don't just sell purifiers. We make sure the water coming out of it is genuinely safe — and we stand behind that promise with every service call.
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', position: 'relative', zIndex: 1 }}>
                            <div style={{
                                width: '44px', height: '44px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--accent-2), var(--accent))',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.2rem',
                            }}>
                                💧
                            </div>
                            <div>
                                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>Aquagrand Team</div>
                                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem' }}>Sambalpur, Odisha</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── MISSION / VISION / PROMISE ── */}
                <div style={{ marginBottom: '80px' }}>
                    <div className="section-header center" style={{ marginBottom: '48px' }}>
                        <div className="section-tag">What Drives Us</div>
                        <h2 className="section-title">
                            Principles we work by, <span style={{ color: 'var(--accent)' }}>every single day.</span>
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '24px',
                    }}>
                        {[
                            {
                                icon: '🎯',
                                label: 'Mission',
                                title: 'Make pure water easy for everyone.',
                                body: 'We bring premium water purification to every home in Sambalpur with clear pricing, expert advice, and no-hassle support.',
                                accent: 'var(--accent)',
                            },
                            {
                                icon: '🔭',
                                label: 'Vision',
                                title: 'A city where no family worries about water quality.',
                                body: 'Every household deserves a properly installed, well-maintained RO system — and a local expert they can call when anything goes wrong.',
                                accent: 'var(--accent-2)',
                            },
                            {
                                icon: '🤝',
                                label: 'Promise',
                                title: 'Genuine products. Honest service. Real results.',
                                body: 'We only supply products we trust, quote prices we stand behind, and show up when you need us — no fine print, no runaround.',
                                accent: '#c9a84c',
                            },
                        ].map((item) => (
                            <article
                                key={item.label}
                                style={{
                                    background: '#fff',
                                    border: '1px solid var(--water-2)',
                                    borderTop: `4px solid ${item.accent}`,
                                    borderRadius: 'var(--radius)',
                                    padding: '36px 28px',
                                    boxShadow: '0 2px 16px rgba(0,60,100,0.06)',
                                }}
                            >
                                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{item.icon}</div>
                                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: item.accent, marginBottom: '8px' }}>
                                    {item.label}
                                </div>
                                <h3 style={{
                                    fontFamily: 'var(--font-playfair)',
                                    fontSize: '1.15rem',
                                    color: 'var(--primary-dark)',
                                    marginBottom: '12px',
                                    lineHeight: 1.4,
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                                    {item.body}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                {/* ── WHY CHOOSE US ── */}
                <div style={{ marginBottom: '80px' }}>
                    <div className="section-header center" style={{ marginBottom: '48px' }}>
                        <div className="section-tag">Why Aquagrand</div>
                        <h2 className="section-title">
                            Six reasons families across <span style={{ color: 'var(--accent)' }}>Sambalpur trust us.</span>
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '20px',
                    }}>
                        {[
                            { icon: '✅', title: '100% Genuine Products', body: 'Authorized dealer for Dr. Aquagrand, Kent, and Black+Decker. Every machine, filter, and part is brand-authentic.' },
                            { icon: '🧪', title: 'Free Water Quality Test', body: 'We test your water TDS, hardness, and contamination level before recommending any product — no sales pressure.' },
                            { icon: '⚡', title: 'Same-Day Installation', body: 'Our technicians are based in Sambalpur. Book in the morning, get your purifier running by evening.' },
                            { icon: '🛡️', title: 'AMC & Warranty Support', body: 'Annual Maintenance Contracts with scheduled filter changes, system cleaning, and priority call-outs.' },
                            { icon: '💰', title: 'Transparent Pricing', body: 'You get a full-cost quote before we begin. No hidden service fees, no surprise parts charges.' },
                            { icon: '📞', title: 'Responsive Local Team', body: 'Call or WhatsApp us — our Sambalpur-based team responds fast and knows your local water conditions.' },
                        ].map((item) => (
                            <div
                                key={item.title}
                                style={{
                                    display: 'flex',
                                    gap: '16px',
                                    background: 'var(--water-1)',
                                    border: '1px solid var(--water-2)',
                                    borderRadius: 'var(--radius)',
                                    padding: '24px 20px',
                                }}
                            >
                                <div style={{ fontSize: '1.8rem', flexShrink: 0, lineHeight: 1, marginTop: '2px' }}>{item.icon}</div>
                                <div>
                                    <h4 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '6px', fontSize: '0.97rem' }}>
                                        {item.title}
                                    </h4>
                                    <p style={{ color: 'var(--text-mid)', fontSize: '0.87rem', lineHeight: 1.65 }}>
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── BRANDS WE CARRY ── */}
                <div style={{
                    background: 'linear-gradient(145deg, var(--primary-dark), var(--primary))',
                    borderRadius: 'var(--radius)',
                    padding: '56px 48px',
                    marginBottom: '0',
                    textAlign: 'center',
                }}>
                    <div className="section-tag" style={{ justifyContent: 'center', display: 'flex', marginBottom: '12px' }}>Authorized Dealer</div>
                    <h2 style={{
                        fontFamily: 'var(--font-playfair)',
                        fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                        color: '#fff',
                        marginBottom: '12px',
                    }}>
                        Brands we proudly carry
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '40px', maxWidth: '520px', margin: '0 auto 40px' }}>
                        Every brand below has authorized Aquagrand as their official dealer in Sambalpur. You get genuine products with full manufacturer warranty.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                        {[
                            { name: 'Dr. Aquagrand', tag: 'RO + UV + Copper + Alkaline', emoji: '💧', color: '#00b4d8' },
                            { name: 'Kent RO', tag: 'Mineral RO™ · UNESCO Award Winner', emoji: '🏆', color: '#c9a84c' },
                            { name: 'Black+Decker', tag: 'ISI Certified · Kent Serviced', emoji: '⚫', color: '#aaa' },
                        ].map((brand) => (
                            <div
                                key={brand.name}
                                style={{
                                    background: 'rgba(255,255,255,0.07)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    borderRadius: 'var(--radius)',
                                    padding: '28px 32px',
                                    minWidth: '200px',
                                    flex: '1 1 200px',
                                    maxWidth: '260px',
                                }}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{brand.emoji}</div>
                                <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>{brand.name}</div>
                                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>{brand.tag}</div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '40px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/products" className="btn-white">
                            Browse All Products
                        </Link>
                        <Link href="/contact" className="btn-ghost">
                            Talk to an Expert
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── CTA STRIP ── */}
            <section className="cta-strip">
                <div className="container">
                    <div>
                        <h2>Ready for cleaner water in your home?</h2>
                        <p>We'll test your water, recommend the right system, and install it — same day.</p>
                    </div>
                    <div className="cta-btns">
                        <Link href="/contact" className="btn-white">
                            Book Free Water Test
                        </Link>
                        <Link href="/products" className="btn-ghost">
                            View Products
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}