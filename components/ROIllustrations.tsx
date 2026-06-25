// ──────────────────────────────────────────────────────────────────
// Custom brand-matched SVG illustrations for the RO Services page.
// No external images — fully self-contained, crisp at any size,
// and themed to the Aquagrand palette (primary / accent / gold).
// ──────────────────────────────────────────────────────────────────

/** Under-the-counter domestic RO unit with wall mount + tank + faucet */
export function DomesticROIllustration() {
  return (
    <svg viewBox="0 0 360 320" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Domestic RO purifier installation diagram">
      <defs>
        <linearGradient id="dom-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e7f6fb" />
        </linearGradient>
        <linearGradient id="dom-tank" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#48cae4" />
          <stop offset="100%" stopColor="#0a4f7a" />
        </linearGradient>
        <linearGradient id="dom-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#caf0f8" />
          <stop offset="100%" stopColor="#00b4d8" />
        </linearGradient>
      </defs>

      {/* wall */}
      <rect x="0" y="0" width="360" height="320" fill="#f3fafd" />
      <rect x="0" y="260" width="360" height="60" fill="#dceef5" />

      {/* wall bracket lines */}
      <rect x="30" y="40" width="14" height="170" rx="4" fill="#cfe8f0" />
      <rect x="306" y="40" width="14" height="170" rx="4" fill="#cfe8f0" />

      {/* purifier body */}
      <rect x="60" y="40" width="180" height="200" rx="18" fill="url(#dom-body)" stroke="#9fd8e8" strokeWidth="2" />

      {/* top panel / display */}
      <rect x="78" y="58" width="144" height="36" rx="10" fill="#0a4f7a" />
      <circle cx="96" cy="76" r="5" fill="#48cae4" />
      <rect x="112" y="70" width="80" height="6" rx="3" fill="rgba(255,255,255,0.35)" />
      <rect x="112" y="82" width="56" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />

      {/* filter stages */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={84 + i * 44} y="112" width="32" height="90" rx="14" fill="#ffffff" stroke="#bfe3ee" strokeWidth="2" />
          <rect x={88 + i * 44} y="120" width="24" height="74" rx="10" fill={i === 1 ? 'url(#dom-water)' : '#eaf7fb'} />
        </g>
      ))}

      {/* faucet arm */}
      <path d="M240 150 H268 a10 10 0 0 1 10 10 V190" stroke="#0a4f7a" strokeWidth="8" strokeLinecap="round" fill="none" />
      <rect x="264" y="186" width="16" height="14" rx="4" fill="#c9a84c" />

      {/* storage tank */}
      <rect x="252" y="206" width="56" height="78" rx="16" fill="url(#dom-tank)" />
      <rect x="260" y="216" width="40" height="10" rx="5" fill="rgba(255,255,255,0.25)" />
      <circle cx="280" cy="252" r="3.5" fill="rgba(255,255,255,0.5)" />

      {/* tubing */}
      <path d="M116 240 V 252 H 252" stroke="#48cae4" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M160 240 V 264 H 240 V 248" stroke="#c9a84c" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* glass + droplet at base */}
      <path d="M150 280 h26 l-4 26 a9 9 0 0 1 -18 0 z" fill="#caf0f8" stroke="#90e0ef" strokeWidth="2" />
      <path d="M163 252 c8 10 8 16 0 20 c-8 -4 -8 -10 0 -20 z" fill="#00b4d8" />
    </svg>
  );
}

/** Wall-mounted whole-home / point-of-entry RO setup with pipe routing */
export function WallMountROIllustration() {
  return (
    <svg viewBox="0 0 360 320" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wall mounted RO installation diagram">
      <defs>
        <linearGradient id="wm-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a4f7a" />
          <stop offset="100%" stopColor="#062e48" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="360" height="320" fill="#f3fafd" />

      {/* mounting plate */}
      <rect x="50" y="30" width="260" height="230" rx="20" fill="url(#wm-panel)" />
      <rect x="50" y="30" width="260" height="230" rx="20" fill="rgba(255,255,255,0.03)" />

      {/* mounting bolts */}
      {[ [66, 46], [294, 46], [66, 244], [294, 244] ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill="#48cae4" opacity="0.6" />
      ))}

      {/* pressure gauge */}
      <circle cx="100" cy="90" r="26" fill="#ffffff" stroke="#c9a84c" strokeWidth="4" />
      <line x1="100" y1="90" x2="112" y2="78" stroke="#0a4f7a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="90" r="3" fill="#0a4f7a" />

      {/* membrane housings (3 long cylinders) */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={150 + i * 38} y="55" width="26" height="150" rx="13" fill="#ffffff" />
          <rect x={154 + i * 38} y="64" width="18" height="36" rx="8" fill="#90e0ef" />
          <rect x={154 + i * 38} y="106" width="18" height="90" rx="8" fill="#caf0f8" />
        </g>
      ))}

      {/* control valves top */}
      <rect x="148" y="40" width="142" height="10" rx="5" fill="#48cae4" />
      <rect x="148" y="210" width="142" height="10" rx="5" fill="#48cae4" />

      {/* inlet / outlet pipes */}
      <path d="M50 130 H20" stroke="#9fb7c4" strokeWidth="8" strokeLinecap="round" />
      <path d="M310 130 H340" stroke="#00b4d8" strokeWidth="8" strokeLinecap="round" />
      <circle cx="20" cy="130" r="6" fill="#9fb7c4" />
      <circle cx="340" cy="130" r="6" fill="#00b4d8" />

      {/* base feet */}
      <rect x="80" y="262" width="20" height="18" rx="4" fill="#0a4f7a" />
      <rect x="260" y="262" width="20" height="18" rx="4" fill="#0a4f7a" />

      {/* floor */}
      <rect x="0" y="290" width="360" height="30" fill="#dceef5" />

      {/* label tag */}
      <rect x="106" y="248" width="148" height="26" rx="13" fill="#ffffff" stroke="#c9a84c" strokeWidth="2" />
      <text x="180" y="265" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0a4f7a" fontFamily="DM Sans, sans-serif">
        WHOLE-HOME RO UNIT
      </text>
    </svg>
  );
}

/** Commercial / industrial multi-stage RO plant with tanks and pipe network */
export function CommercialPlantIllustration() {
  return (
    <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Commercial RO plant installation diagram">
      <defs>
        <linearGradient id="cp-tankA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#48cae4" />
          <stop offset="100%" stopColor="#0077b6" />
        </linearGradient>
        <linearGradient id="cp-tankB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#90e0ef" />
          <stop offset="100%" stopColor="#0a4f7a" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="420" height="320" fill="#f3fafd" />
      <rect x="0" y="270" width="420" height="50" fill="#dceef5" />

      {/* skid frame base */}
      <rect x="30" y="240" width="360" height="14" rx="4" fill="#9fb7c4" />
      {[50, 150, 250, 350].map((x, i) => (
        <rect key={i} x={x} y="240" width="8" height="34" fill="#9fb7c4" />
      ))}

      {/* pre-filter cartridges (3 short) */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={50 + i * 36} y="150" width="26" height="92" rx="10" fill="#ffffff" stroke="#bfe3ee" strokeWidth="2" />
          <rect x={54 + i * 36} y="158" width="18" height="40" rx="6" fill="#caf0f8" />
        </g>
      ))}

      {/* membrane housing bank (4 long, horizontal) */}
      <g>
        <rect x="170" y="120" width="150" height="14" rx="7" fill="#0a4f7a" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="178" y={134 + i * 17} width="134" height="11" rx="5.5" fill={i % 2 === 0 ? '#48cae4' : '#90e0ef'} />
        ))}
        <rect x="170" y="206" width="150" height="14" rx="7" fill="#0a4f7a" />
      </g>

      {/* control panel */}
      <rect x="330" y="120" width="50" height="100" rx="10" fill="#062e48" />
      <rect x="338" y="130" width="34" height="20" rx="4" fill="#48cae4" opacity="0.85" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={348 + i * 10} cy="168" r="4" fill={i === 0 ? '#22c55e' : i === 1 ? '#c9a84c' : '#ef4444'} />
      ))}
      <rect x="338" y="186" width="34" height="22" rx="4" fill="#0a4f7a" />

      {/* storage tanks behind */}
      <rect x="34" y="70" width="44" height="80" rx="14" fill="url(#cp-tankA)" />
      <rect x="40" y="80" width="14" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
      <rect x="92" y="55" width="50" height="95" rx="14" fill="url(#cp-tankB)" />
      <rect x="100" y="66" width="16" height="8" rx="4" fill="rgba(255,255,255,0.3)" />

      {/* pipe network connecting tanks to membrane bank */}
      <path d="M56 150 V160 H170" stroke="#0077b6" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M117 150 V170 H170" stroke="#0a4f7a" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M320 162 H330" stroke="#48cae4" strokeWidth="6" strokeLinecap="round" fill="none" />

      {/* output pipe to right edge */}
      <path d="M380 162 H400" stroke="#00b4d8" strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="400" cy="162" r="6" fill="#00b4d8" />

      {/* capacity tag */}
      <rect x="150" y="246" width="120" height="26" rx="13" fill="#ffffff" stroke="#0a4f7a" strokeWidth="2" />
      <text x="210" y="263" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0a4f7a" fontFamily="DM Sans, sans-serif">
        COMMERCIAL RO PLANT
      </text>
    </svg>
  );
}

/** Small inline step icon: technician with toolbox (used in process timeline) */
export function TechnicianIcon({ color = '#00b4d8' }: { color?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill={color} opacity="0.12" />
      <circle cx="32" cy="22" r="9" fill={color} />
      <path d="M16 50c0-9 7.2-15 16-15s16 6 16 15" stroke={color} strokeWidth="4" strokeLinecap="round" fill="none" />
      <rect x="24" y="40" width="16" height="12" rx="3" fill="#ffffff" stroke={color} strokeWidth="2.5" />
      <line x1="29" y1="46" x2="35" y2="46" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** Decorative water-drop divider used between sections */
export function DropDivider({ color = '#00b4d8' }: { color?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 6c10 12 10 19 0 24c-10 -5 -10 -12 0 -24z" fill={color} />
    </svg>
  );
}
