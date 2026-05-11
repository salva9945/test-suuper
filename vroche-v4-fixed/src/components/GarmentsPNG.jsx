import React from "react";

/* ─────────────────────────────────────────────────────────────
   Realistic garment SVGs designed to look like flat-lay PNG cutouts
   with transparent backgrounds. Detailed fabric, shadows, highlights.
   ───────────────────────────────────────────────────────────── */

// Tshirt (white, oversized)
export function GTshirt({ className = "", style }) {
  return (
    <svg viewBox="0 0 300 320" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="tee-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.5" stopColor="#F5F5F2" />
          <stop offset="1" stopColor="#D8D6D0" />
        </linearGradient>
        <linearGradient id="tee-shadow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0.18" />
          <stop offset="0.5" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.18" />
        </linearGradient>
        <filter id="tee-drop" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
          <feOffset dx="0" dy="6" result="off" />
          <feComponentTransfer><feFuncA type="linear" slope="0.45" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* sleeves */}
      <path d="M40 70 Q50 50 80 45 L100 75 L80 105 Q60 105 40 95 Z" fill="url(#tee-grad)" stroke="#C5C2BB" strokeWidth="1" filter="url(#tee-drop)" />
      <path d="M260 70 Q250 50 220 45 L200 75 L220 105 Q240 105 260 95 Z" fill="url(#tee-grad)" stroke="#C5C2BB" strokeWidth="1" filter="url(#tee-drop)" />
      {/* body */}
      <path
        d="M85 60 Q90 38 120 35 L140 50 Q150 56 160 50 L180 35 Q210 38 215 60 L220 105 L210 290 Q208 305 195 305 L105 305 Q92 305 90 290 L80 105 Z"
        fill="url(#tee-grad)"
        stroke="#C5C2BB"
        strokeWidth="1.2"
        filter="url(#tee-drop)"
      />
      {/* neckline shadow */}
      <ellipse cx="150" cy="45" rx="28" ry="8" fill="#000" opacity="0.12" />
      {/* fabric folds shading */}
      <path d="M90 200 L100 280" stroke="url(#tee-shadow)" strokeWidth="20" opacity="0.45" />
      <path d="M210 200 L200 280" stroke="url(#tee-shadow)" strokeWidth="20" opacity="0.45" />
    </svg>
  );
}

// Wide jeans / pants (dark wash denim)
export function GJeans({ className = "", style }) {
  return (
    <svg viewBox="0 0 280 460" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="jeans-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3A4F66" />
          <stop offset="0.4" stopColor="#2B3A50" />
          <stop offset="1" stopColor="#1A2434" />
        </linearGradient>
        <linearGradient id="jeans-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.16" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <filter id="jeans-drop" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
          <feOffset dx="0" dy="8" />
          <feComponentTransfer><feFuncA type="linear" slope="0.5" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* waistband */}
      <path d="M50 15 L230 15 L235 40 L45 40 Z" fill="#1A2434" stroke="#0F1622" strokeWidth="1" filter="url(#jeans-drop)" />
      {/* main body — left leg + right leg */}
      <path
        d="M45 40 L235 40 L238 75 Q240 130 235 200 L222 440 L195 445 L175 250 Q170 215 165 210 Q160 205 155 210 L143 250 L130 250 L120 250 Q115 205 110 210 Q105 215 100 250 L85 445 L58 440 L45 200 Q40 130 42 75 Z"
        fill="url(#jeans-grad)"
        stroke="#101820"
        strokeWidth="1"
        filter="url(#jeans-drop)"
      />
      {/* shine on left leg */}
      <path d="M75 80 Q85 200 95 420" stroke="url(#jeans-shine)" strokeWidth="14" fill="none" />
      {/* shine on right leg */}
      <path d="M195 80 Q200 200 205 420" stroke="url(#jeans-shine)" strokeWidth="14" fill="none" />
      {/* center seam */}
      <line x1="140" y1="40" x2="140" y2="240" stroke="#0E1620" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.6" />
      {/* belt loops */}
      <rect x="70" y="14" width="3" height="14" fill="#FCD24C" opacity="0.7" />
      <rect x="138" y="14" width="3" height="14" fill="#FCD24C" opacity="0.7" />
      <rect x="207" y="14" width="3" height="14" fill="#FCD24C" opacity="0.7" />
      {/* button */}
      <circle cx="115" cy="50" r="3.5" fill="#D1A24B" stroke="#7A5A24" strokeWidth="0.6" />
      {/* pockets */}
      <path d="M55 50 L78 48 L75 90 Q70 92 55 88 Z" fill="none" stroke="#0E1620" strokeWidth="0.8" opacity="0.5" />
      <path d="M225 50 L202 48 L205 90 Q210 92 225 88 Z" fill="none" stroke="#0E1620" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

// Sneakers (pair, white)
export function GSneakers({ className = "", style }) {
  return (
    <svg viewBox="0 0 360 180" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="snk-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E0DDD5" />
        </linearGradient>
        <filter id="snk-drop" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="6" />
          <feComponentTransfer><feFuncA type="linear" slope="0.5" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* left sneaker */}
      <g filter="url(#snk-drop)">
        <path d="M20 120 Q20 85 50 80 L95 60 Q140 60 158 92 Q168 115 162 138 L20 140 Q15 130 20 120 Z" fill="url(#snk-grad)" stroke="#A8A296" strokeWidth="1" />
        <path d="M20 140 L165 140 Q170 142 162 148 L18 148 Z" fill="#1A1A1A" />
        {/* laces */}
        <path d="M70 80 L78 92 M82 76 L90 88 M93 72 L101 84 M104 68 L112 80" stroke="#666" strokeWidth="1" />
        {/* swoosh detail */}
        <path d="M95 115 Q125 95 148 105" fill="none" stroke="#1A1A1A" strokeWidth="2.5" />
      </g>
      {/* right sneaker (mirrored, offset) */}
      <g filter="url(#snk-drop)" transform="translate(180, 0)">
        <path d="M20 120 Q20 85 50 80 L95 60 Q140 60 158 92 Q168 115 162 138 L20 140 Q15 130 20 120 Z" fill="url(#snk-grad)" stroke="#A8A296" strokeWidth="1" />
        <path d="M20 140 L165 140 Q170 142 162 148 L18 148 Z" fill="#1A1A1A" />
        <path d="M70 80 L78 92 M82 76 L90 88 M93 72 L101 84 M104 68 L112 80" stroke="#666" strokeWidth="1" />
        <path d="M95 115 Q125 95 148 105" fill="none" stroke="#1A1A1A" strokeWidth="2.5" />
      </g>
    </svg>
  );
}

// Cap (baseball, mint)
export function GCap({ className = "", style }) {
  return (
    <svg viewBox="0 0 260 160" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="cap-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7DE6BE" />
          <stop offset="1" stopColor="#3FB58F" />
        </linearGradient>
        <filter id="cap-drop" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="5" />
          <feComponentTransfer><feFuncA type="linear" slope="0.45" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter="url(#cap-drop)">
        {/* crown */}
        <path d="M50 85 Q50 35 130 30 Q210 35 210 85 L210 92 L50 92 Z" fill="url(#cap-grad)" stroke="#2A8965" strokeWidth="1" />
        {/* visor */}
        <path d="M30 92 Q35 110 65 115 L210 115 Q230 110 235 92 Z" fill="url(#cap-grad)" stroke="#2A8965" strokeWidth="1" />
        {/* panel seams */}
        <path d="M130 30 L130 90" stroke="#2A8965" strokeWidth="0.8" opacity="0.6" />
        <path d="M90 35 Q90 60 80 90" stroke="#2A8965" strokeWidth="0.6" opacity="0.5" fill="none" />
        <path d="M170 35 Q170 60 180 90" stroke="#2A8965" strokeWidth="0.6" opacity="0.5" fill="none" />
        {/* logo */}
        <text x="130" y="78" textAnchor="middle" fill="#0E2A22" fontFamily="DM Sans, sans-serif" fontSize="10" fontWeight="800" opacity="0.85">V</text>
        {/* button on top */}
        <circle cx="130" cy="33" r="3" fill="#2A8965" />
      </g>
    </svg>
  );
}

// Sunglasses (black)
export function GSunglasses({ className = "", style }) {
  return (
    <svg viewBox="0 0 300 120" className={className} style={style} aria-hidden="true">
      <defs>
        <radialGradient id="sg-lens" cx="0.3" cy="0.3" r="0.7">
          <stop offset="0" stopColor="#333" />
          <stop offset="0.6" stopColor="#0a0a0a" />
          <stop offset="1" stopColor="#000" />
        </radialGradient>
        <filter id="sg-drop" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="6" />
          <feComponentTransfer><feFuncA type="linear" slope="0.55" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter="url(#sg-drop)">
        {/* left lens */}
        <path d="M22 50 Q26 32 60 32 L120 32 Q138 35 138 55 L138 70 Q135 88 110 90 L52 90 Q26 88 22 70 Z" fill="url(#sg-lens)" stroke="#000" strokeWidth="1.5" />
        {/* right lens */}
        <path d="M162 55 Q162 35 180 32 L240 32 Q274 32 278 50 L278 70 Q274 88 248 90 L190 90 Q165 88 162 70 Z" fill="url(#sg-lens)" stroke="#000" strokeWidth="1.5" />
        {/* bridge */}
        <path d="M138 50 L162 50 L160 58 L140 58 Z" fill="#000" />
        {/* lens highlight */}
        <path d="M40 42 Q70 38 100 44" fill="none" stroke="#FFF" strokeWidth="1.5" opacity="0.35" />
        <path d="M180 42 Q210 38 240 44" fill="none" stroke="#FFF" strokeWidth="1.5" opacity="0.25" />
      </g>
    </svg>
  );
}

// Cross necklace (silver chain)
export function GNecklace({ className = "", style }) {
  return (
    <svg viewBox="0 0 220 260" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="chain-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E8E5E0" />
          <stop offset="1" stopColor="#8E8B82" />
        </linearGradient>
        <filter id="neck-drop">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="4" />
          <feComponentTransfer><feFuncA type="linear" slope="0.5" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter="url(#neck-drop)">
        {/* chain curve */}
        <path d="M30 20 Q110 90 190 20" fill="none" stroke="url(#chain-grad)" strokeWidth="3" strokeLinecap="round" />
        {/* chain dots */}
        {Array.from({ length: 24 }, (_, i) => {
          const t = i / 23;
          const x = 30 + t * 160;
          const y = 20 + Math.sin(t * Math.PI) * 70;
          return <circle key={i} cx={x} cy={y} r="2.5" fill="url(#chain-grad)" stroke="#5A5650" strokeWidth="0.4" />;
        })}
        {/* drop chain */}
        <line x1="110" y1="88" x2="110" y2="155" stroke="url(#chain-grad)" strokeWidth="2" strokeDasharray="2 2" />
        {/* cross pendant */}
        <g transform="translate(110, 175)">
          <rect x="-4" y="0" width="8" height="68" rx="1" fill="url(#chain-grad)" stroke="#5A5650" strokeWidth="0.8" />
          <rect x="-18" y="14" width="36" height="8" rx="1" fill="url(#chain-grad)" stroke="#5A5650" strokeWidth="0.8" />
          {/* shine */}
          <rect x="-3" y="2" width="2" height="60" fill="#FFF" opacity="0.5" />
        </g>
      </g>
    </svg>
  );
}

// Bag (shoulder bag, pink)
export function GBag({ className = "", style }) {
  return (
    <svg viewBox="0 0 280 230" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="bag-grad" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0" stopColor="#F7B8D2" />
          <stop offset="1" stopColor="#C97DA0" />
        </linearGradient>
        <filter id="bag-drop">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
          <feOffset dx="0" dy="8" />
          <feComponentTransfer><feFuncA type="linear" slope="0.55" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter="url(#bag-drop)">
        {/* strap */}
        <path d="M55 40 Q140 -15 225 40" fill="none" stroke="#9B5077" strokeWidth="3" />
        {/* body */}
        <path d="M30 80 Q30 65 50 65 L230 65 Q250 65 250 80 L245 185 Q243 205 222 207 L58 207 Q37 205 35 185 Z" fill="url(#bag-grad)" stroke="#9B5077" strokeWidth="1.2" />
        {/* studs */}
        {[
          [70, 105], [95, 125], [125, 95], [155, 130], [185, 105], [210, 135],
          [85, 145], [135, 155], [180, 160], [115, 175], [165, 185], [95, 175],
          [205, 165], [75, 130], [220, 110],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3" fill="#FFFFFF" opacity="0.95" />
            <circle cx={x - 0.5} cy={y - 0.5} r="1" fill="#FFFFFF" />
          </g>
        ))}
        {/* buckle */}
        <rect x="120" y="135" width="40" height="18" rx="3" fill="none" stroke="#AAA" strokeWidth="2" />
        <line x1="135" y1="135" x2="135" y2="153" stroke="#AAA" strokeWidth="1.5" />
        {/* shine */}
        <path d="M50 80 Q60 130 70 200" stroke="#FFF" strokeWidth="10" opacity="0.2" fill="none" />
      </g>
    </svg>
  );
}

// Belt
export function GBelt({ className = "", style }) {
  return (
    <svg viewBox="0 0 360 60" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="belt-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2A2A2A" />
          <stop offset="0.5" stopColor="#1A1A1A" />
          <stop offset="1" stopColor="#0A0A0A" />
        </linearGradient>
        <filter id="belt-drop">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="4" />
          <feComponentTransfer><feFuncA type="linear" slope="0.5" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter="url(#belt-drop)">
        <rect x="10" y="22" width="340" height="16" rx="2" fill="url(#belt-grad)" stroke="#000" strokeWidth="0.6" />
        {/* buckle */}
        <rect x="135" y="14" width="32" height="32" rx="3" fill="#C5C2BB" stroke="#666" strokeWidth="1.5" />
        <rect x="148" y="14" width="3" height="32" fill="#666" />
        {/* holes */}
        {[40, 60, 80, 100].map((x) => <circle key={x} cx={x} cy="30" r="1.5" fill="#000" />)}
        {/* shine */}
        <rect x="10" y="24" width="340" height="2" fill="#FFF" opacity="0.1" />
      </g>
    </svg>
  );
}

// Watch
export function GWatch({ className = "", style }) {
  return (
    <svg viewBox="0 0 120 180" className={className} style={style} aria-hidden="true">
      <defs>
        <radialGradient id="watch-face" cx="0.3" cy="0.3" r="0.7">
          <stop offset="0" stopColor="#1A1A1A" />
          <stop offset="1" stopColor="#000" />
        </radialGradient>
        <filter id="watch-drop">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="4" />
          <feComponentTransfer><feFuncA type="linear" slope="0.5" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter="url(#watch-drop)">
        {/* straps */}
        <path d="M42 12 L78 12 L80 50 L40 50 Z" fill="#2A2A2A" stroke="#000" strokeWidth="0.5" />
        <path d="M40 130 L80 130 L78 168 L42 168 Z" fill="#2A2A2A" stroke="#000" strokeWidth="0.5" />
        {/* strap detail */}
        {[20, 28, 36, 142, 150, 158].map((y, i) => <line key={i} x1="44" y1={y} x2="76" y2={y} stroke="#0A0A0A" strokeWidth="0.5" />)}
        {/* case */}
        <rect x="28" y="50" width="64" height="80" rx="10" fill="#444" stroke="#000" strokeWidth="1.5" />
        {/* face */}
        <circle cx="60" cy="90" r="28" fill="url(#watch-face)" stroke="#666" strokeWidth="1" />
        {/* hour markers */}
        {[0, 90, 180, 270].map((d) => {
          const x1 = 60 + 24 * Math.cos((d * Math.PI) / 180);
          const y1 = 90 + 24 * Math.sin((d * Math.PI) / 180);
          const x2 = 60 + 27 * Math.cos((d * Math.PI) / 180);
          const y2 = 90 + 27 * Math.sin((d * Math.PI) / 180);
          return <line key={d} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FCFFFE" strokeWidth="1.5" />;
        })}
        {/* hands */}
        <line x1="60" y1="90" x2="60" y2="70" stroke="#FCFFFE" strokeWidth="2" />
        <line x1="60" y1="90" x2="76" y2="90" stroke="#63D7B1" strokeWidth="1.5" />
        <circle cx="60" cy="90" r="2.5" fill="#63D7B1" />
      </g>
    </svg>
  );
}
