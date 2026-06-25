'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const WA_NUMBER = '918328907088';
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const YOUTUBE_ID = '6pyW8ZFIMG8';

// ── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div style={{
      textAlign: 'center', padding: '18px 12px', borderRadius: '14px',
      background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.13)',
      flex: '1 1 0', minWidth: '70px',
    }}>
      <div style={{
        fontFamily: 'var(--font-playfair,serif)',
        fontSize: 'clamp(1.4rem,2.5vw,1.9rem)',
        fontWeight: 800, color, lineHeight: 1, marginBottom: '6px',
      }}>{value}</div>
      <div style={{
        fontSize: '0.63rem', color: 'rgba(255,255,255,0.5)',
        textTransform: 'uppercase', letterSpacing: '0.08em',
        fontWeight: 600, lineHeight: 1.3,
      }}>{label}</div>
    </div>
  );
}

// ── Video Player ──────────────────────────────────────────────────────────────
function VideoPlayer() {
  const playerDivId = 'yt-player-about';
  const [userClicked, setUserClicked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const playerRef = useRef<any>(null);
  const initiated = useRef(false);

  useEffect(() => {
    if (initiated.current) return;
    initiated.current = true;

    const initPlayer = () => {
      // @ts-ignore
      playerRef.current = new window.YT.Player(playerDivId, {
        videoId: YOUTUBE_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          loop: 0,
        },
        events: {
          onReady: (e: any) => {
            e.target.mute();
            e.target.playVideo();
          },
        },
      });
    };

    // @ts-ignore
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      // Load the YouTube IFrame API script if not already loaded
      if (!document.getElementById('yt-iframe-api')) {
        const tag = document.createElement('script');
        tag.id = 'yt-iframe-api';
        tag.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(tag);
      }
      // @ts-ignore
      const prev = window.onYouTubeIframeAPIReady;
      // @ts-ignore
      window.onYouTubeIframeAPIReady = () => {
        if (prev) prev();
        initPlayer();
      };
    }
  }, []);

  // When user clicks the overlay, unmute and play
  const handleUnmute = () => {
    setUserClicked(true);
    if (playerRef.current) {
      playerRef.current.unMute();
      playerRef.current.playVideo();
    }
  };

  return (
    <div
      style={{ position: 'relative', aspectRatio: '16/9', borderRadius: '18px', overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(0,0,0,0.45)', background: '#000', cursor: userClicked ? 'default' : 'pointer' }}
      onClick={!userClicked ? handleUnmute : undefined}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* YouTube player div */}
      <div
        id={playerDivId}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}
      />

      {/* Click-to-unmute overlay — shown until user clicks */}
      {!userClicked && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '12px',
          background: 'rgba(6,46,72,0.45)',
          backdropFilter: 'blur(2px)',
          transition: 'background 0.2s ease',
        }}>
          {/* Unmute / Play button */}
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#0a4f7a', fontSize: '1.4rem',
            boxShadow: hovering ? '0 12px 44px rgba(0,180,216,0.6)' : '0 8px 32px rgba(0,0,0,0.35)',
            transform: hovering ? 'scale(1.12)' : 'scale(1)',
            transition: 'all 0.25s ease',
          }}>
            <i className="fas fa-volume-up" />
          </div>
          <div style={{
            color: 'rgba(255,255,255,0.92)', fontSize: '0.78rem',
            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            Click to Unmute
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function About() {
  return (
    <section id="about" style={{
      padding: '100px 0',
      background: 'linear-gradient(160deg, #062e48 0%, #0a4f7a 45%, #1a7bb8 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* dot pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />
      {/* glow blob */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '420px', height: '420px', borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(0,180,216,0.13) 0%, transparent 65%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '56px',
          alignItems: 'center',
        }}>

          {/* ══ LEFT — Video ══ */}
          <div style={{ position: 'relative' }}>
            {/* decorative rings */}
            <div style={{
              position: 'absolute', top: '-18px', left: '-18px', right: '-18px', bottom: '-18px',
              borderRadius: '26px', border: '1.5px solid rgba(0,180,216,0.22)', pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', top: '-34px', left: '-34px', right: '-34px', bottom: '-34px',
              borderRadius: '32px', border: '1px solid rgba(0,180,216,0.09)', pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <VideoPlayer />
            </div>

            {/* trust badges */}
            <div style={{
              display: 'flex', gap: '8px', marginTop: '18px',
              flexWrap: 'wrap', position: 'relative', zIndex: 1,
            }}>
              {[
                { icon: 'fas fa-shield-alt', text: 'ISI / CE / FDA Certified' },
                { icon: 'fas fa-award', text: 'Top Selling Brand 2024' },
                { icon: 'fas fa-tools', text: 'Free Installation' },
                { icon: 'fas fa-star', text: '4.8 ★ Rated' },
              ].map(b => (
                <div key={b.text} style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)',
                  color: 'rgba(255,255,255,0.88)', padding: '6px 12px',
                  borderRadius: '30px', fontSize: '0.7rem', fontWeight: 600, whiteSpace: 'nowrap',
                }}>
                  <i className={b.icon} style={{ color: '#48cae4' }} /> {b.text}
                </div>
              ))}
            </div>
          </div>

          {/* ══ RIGHT — Text ══ */}
          <div style={{ color: '#fff' }}>

            {/* eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(0,180,216,0.18)', border: '1px solid rgba(0,180,216,0.35)',
              color: '#48cae4', fontSize: '0.68rem', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '6px 16px', borderRadius: '30px', marginBottom: '18px',
            }}>
              <i className="fas fa-droplet" /> About Watercare Aqua
            </div>

            {/* heading */}
            <h2 style={{
              fontFamily: 'var(--font-playfair,serif)',
              fontSize: 'clamp(1.8rem,3.5vw,2.8rem)',
              fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: '16px',
            }}>
              Sambalpur&apos;s Most Trusted<br />
              <span style={{ color: '#48cae4' }}>Water Purifier Dealer</span>
            </h2>

            {/* body */}
            <p style={{
              color: 'rgba(255,255,255,0.72)', fontSize: '0.93rem',
              lineHeight: 1.78, marginBottom: '12px',
            }}>
              <strong style={{ color: '#fff' }}>Watercare Aqua</strong> is Sambalpur&apos;s
              authorized dealer for Dr. Aquagrand, Kent, and Black+Decker RO purifiers. For
              over a decade we have brought certified, genuine water purification technology
              to homes, offices, and industries across Odisha — backed by expert installation
              and same-day service.
            </p>
            <p style={{
              color: 'rgba(255,255,255,0.66)', fontSize: '0.9rem',
              lineHeight: 1.78, marginBottom: 0,
            }}>
              Our flagship brand,{' '}
              <strong style={{ color: '#48cae4' }}>Dr. Aquagrand</strong>, is India&apos;s{' '}
              <strong style={{ color: '#fff' }}>#1 fastest-growing RO brand</strong> — trusted
              by lakhs of families for its patented Active Copper, Alkaline, and Mineral Charge
              technologies that deliver truly healthy, great-tasting water at every TDS level.
            </p>

            {/* stats */}
            <div style={{ display: 'flex', gap: '10px', margin: '28px 0', flexWrap: 'wrap' }}>
              <StatCard value="5000+" label="Customers Served" color="#48cae4" />
              <StatCard value="10+ Yrs" label="Years in Business" color="#c9a84c" />
              <StatCard value="99%" label="Satisfaction Rate" color="#74c69d" />
              <StatCard value="24/7" label="After-Sales Support" color="#90e0ef" />
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link
                href="/product"
                className="btn-primary"
                style={{ fontSize: '0.9rem', padding: '13px 26px' }}
              >
                <i className="fas fa-box-open" /> View Products
              </Link>
              <a
                href={waLink('Hi! I want to know more about Watercare Aqua and Dr. Aquagrand purifiers.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ fontSize: '0.9rem', padding: '12px 24px' }}
              >
                <i className="fab fa-whatsapp" /> Talk to Us
              </a>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        #yt-player-about { pointer-events: none; }
        @media (max-width: 640px) {
          #about { padding: 72px 0 !important; }
        }
      `}</style>
    </section>
  );
}