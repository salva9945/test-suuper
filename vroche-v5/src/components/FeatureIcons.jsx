import React from "react";

/* Premium feature icons — duotone, geometric, distinctive */

function Wrap({ children, className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      {children}
    </svg>
  );
}

// AI Stylist — sparkle + intelligence
export const IconAIStylist = (p) => (
  <Wrap {...p}>
    <path d="M16 4l2.5 7L26 13.5l-7.5 2.5L16 24l-2.5-8L6 13.5 13.5 11z" fill="currentColor" opacity="0.25" />
    <path d="M16 4l2.5 7L26 13.5l-7.5 2.5L16 24l-2.5-8L6 13.5 13.5 11z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="24" cy="6" r="1.6" fill="currentColor" />
    <circle cx="6" cy="26" r="1.2" fill="currentColor" />
    <path d="M27 24l1 2.5L30.5 27.5l-2.5 1L27 31l-1-2.5L23.5 27.5l2.5-1z" fill="currentColor" opacity="0.7" />
  </Wrap>
);

// Digital Closet — hanger + grid
export const IconCloset = (p) => (
  <Wrap {...p}>
    <path d="M16 9a2 2 0 110-4 2 2 0 011.5 3.4L26 14H6l7.5-5.6A2 2 0 0116 9z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <rect x="4" y="17" width="9" height="11" rx="1" stroke="currentColor" strokeWidth="1.4" />
    <rect x="15" y="17" width="13" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
    <rect x="15" y="24" width="13" height="4" rx="1" stroke="currentColor" strokeWidth="1.4" />
    <rect x="4" y="17" width="9" height="11" rx="1" fill="currentColor" opacity="0.18" />
  </Wrap>
);

// Virtual Try-On — camera + person silhouette
export const IconTryOn = (p) => (
  <Wrap {...p}>
    <rect x="3" y="9" width="26" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" />
    <path d="M10 9l2-3h8l2 3" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="16" cy="18" r="5.5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="16" cy="18" r="3" fill="currentColor" opacity="0.25" />
    <circle cx="24" cy="13" r="1.2" fill="currentColor" />
    <path d="M26 23l1.5 1L29 23" stroke="currentColor" strokeWidth="1" />
  </Wrap>
);

// Outfit Planner — calendar + star
export const IconPlanner = (p) => (
  <Wrap {...p}>
    <rect x="4" y="6" width="24" height="22" rx="3" stroke="currentColor" strokeWidth="1.4" />
    <path d="M4 12h24" stroke="currentColor" strokeWidth="1.4" />
    <path d="M10 3v6M22 3v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M16 16l1 2.4L19.5 19l-2 1L16 22l-0.5-2-2-1 2.5-0.6z" fill="currentColor" />
    <rect x="8" y="22" width="4" height="2.5" rx="0.5" fill="currentColor" opacity="0.4" />
    <rect x="20" y="22" width="4" height="2.5" rx="0.5" fill="currentColor" opacity="0.25" />
  </Wrap>
);

// Social Feed — heart + connection
export const IconSocial = (p) => (
  <Wrap {...p}>
    <path d="M16 27c-5-3.5-10-7.5-10-13a5 5 0 019-3 5 5 0 019 3c0 5.5-5 9.5-10 13z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M16 27c-5-3.5-10-7.5-10-13a5 5 0 019-3 5 5 0 019 3c0 5.5-5 9.5-10 13z" fill="currentColor" opacity="0.22" />
    <circle cx="11" cy="11" r="1.4" fill="currentColor" />
    <circle cx="21" cy="11" r="1.4" fill="currentColor" />
  </Wrap>
);

// Smart Shopping — bag with check
export const IconShopping = (p) => (
  <Wrap {...p}>
    <path d="M6 11l3-6h14l3 6v15a3 3 0 01-3 3H9a3 3 0 01-3-3V11z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M6 11h20" stroke="currentColor" strokeWidth="1.4" />
    <path d="M11 14a5 5 0 0010 0" stroke="currentColor" strokeWidth="1.4" />
    <path d="M11 22l3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 11l3-6h14l3 6v15a3 3 0 01-3 3H9a3 3 0 01-3-3V11z" fill="currentColor" opacity="0.15" />
  </Wrap>
);

// Travel Planner — plane + globe
export const IconTravel = (p) => (
  <Wrap {...p}>
    <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.4" />
    <ellipse cx="16" cy="16" rx="5" ry="11" stroke="currentColor" strokeWidth="1" />
    <path d="M5 16h22" stroke="currentColor" strokeWidth="1" />
    <path d="M22 8l5 2-3 4-3-1z" fill="currentColor" />
    <circle cx="16" cy="16" r="11" fill="currentColor" opacity="0.1" />
  </Wrap>
);

// Privacy — shield + lock
export const IconPrivacy = (p) => (
  <Wrap {...p}>
    <path d="M16 3l11 4v10c0 7-4 11-11 12-7-1-11-5-11-12V7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M16 3l11 4v10c0 7-4 11-11 12-7-1-11-5-11-12V7z" fill="currentColor" opacity="0.2" />
    <rect x="12" y="15" width="8" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.4" fill="rgba(0,0,0,0.15)" />
    <path d="M13.5 15v-2a2.5 2.5 0 015 0v2" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="16" cy="18.5" r="1" fill="currentColor" />
  </Wrap>
);
