import React from "react";

// Base wrapper
function Icon({ children, className = "h-5 w-5", strokeWidth = 1.5 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p) => (<Icon {...p}><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></Icon>);
export const ArrowDown = (p) => (<Icon {...p}><path d="M12 5v14" /><path d="M6 13l6 6 6-6" /></Icon>);
export const ArrowUpRight = (p) => (<Icon {...p}><path d="M7 17L17 7" /><path d="M8 7h9v9" /></Icon>);
export const Sparkles = (p) => (<Icon {...p}><path d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5L12 3z" /><path d="M19 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" /><path d="M5 18l.5 1.2 1.2.5-1.2.5L5 21.5l-.5-1.2-1.2-.5 1.2-.5L5 18z" /></Icon>);
export const Camera = (p) => (<Icon {...p}><path d="M4 7h3l2-2h6l2 2h3a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z" /><circle cx="12" cy="13" r="4" /></Icon>);
export const Hanger = (p) => (<Icon {...p}><path d="M12 8.5a2.5 2.5 0 110-5 2.5 2.5 0 011.7 4.3L21 14H3l7.3-6.2A2.5 2.5 0 0112 8.5z" /></Icon>);
export const Calendar = (p) => (<Icon {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M8 3v4" /><path d="M16 3v4" /></Icon>);
export const Heart = (p) => (<Icon {...p}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></Icon>);
export const Lock = (p) => (<Icon {...p}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 118 0v3" /></Icon>);
export const ShoppingBag = (p) => (<Icon {...p}><path d="M6 2l-3 6v12a2 2 0 002 2h14a2 2 0 002-2V8l-3-6z" /><path d="M3 8h18" /><path d="M16 12a4 4 0 01-8 0" /></Icon>);
export const Check = (p) => (<Icon {...p}><path d="M5 12l5 5L20 7" /></Icon>);
export const Cloud = (p) => (<Icon {...p}><path d="M18 18a4 4 0 100-8 6 6 0 00-11.5 2A4 4 0 007 18h11z" /></Icon>);
export const Globe = (p) => (<Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a13 13 0 010 18" /><path d="M12 3a13 13 0 000 18" /></Icon>);
export const Plus = (p) => (<Icon {...p}><path d="M12 5v14" /><path d="M5 12h14" /></Icon>);
export const Minus = (p) => (<Icon {...p}><path d="M5 12h14" /></Icon>);
export const X = (p) => (<Icon {...p}><path d="M18 6L6 18" /><path d="M6 6l12 12" /></Icon>);
export const ChevronDown = (p) => (<Icon {...p}><path d="M6 9l6 6 6-6" /></Icon>);
export const ChevronRight = (p) => (<Icon {...p}><path d="M9 6l6 6-6 6" /></Icon>);
export const Cookie = (p) => (<Icon {...p}><path d="M12 2a10 10 0 1010 10 5 5 0 01-5-5 5 5 0 01-5-5z" /><circle cx="9" cy="13" r=".5" fill="currentColor" /><circle cx="14" cy="9" r=".5" fill="currentColor" /><circle cx="15" cy="15" r=".5" fill="currentColor" /></Icon>);

// Apple / Google logos for store badges
export const AppleLogo = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.05 12.04c-.03-3.04 2.49-4.5 2.6-4.57-1.42-2.07-3.62-2.36-4.4-2.39-1.87-.19-3.65 1.1-4.6 1.1-.96 0-2.42-1.08-3.98-1.05-2.04.03-3.94 1.18-5 2.99-2.13 3.7-.55 9.18 1.53 12.18 1.02 1.47 2.23 3.12 3.81 3.06 1.53-.06 2.11-.99 3.97-.99 1.85 0 2.38.99 4 .96 1.65-.03 2.7-1.5 3.71-2.97 1.17-1.7 1.66-3.36 1.69-3.45-.04-.02-3.24-1.24-3.27-4.93zM14.51 4.36c.84-1.02 1.41-2.44 1.25-3.85-1.21.05-2.68.81-3.55 1.83-.78.91-1.46 2.36-1.28 3.74 1.35.1 2.74-.69 3.58-1.72z" />
  </svg>
);

export const GoogleLogo = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M3.6 1.4c-.4.4-.6.9-.6 1.6v18c0 .7.2 1.2.6 1.6l9.6-9.6L3.6 1.4z" opacity="0.9" />
    <path d="M16.4 8.4l-2.6-1.5L4.6 1.1c-.1 0-.3-.1-.4-.1-.2 0-.4 0-.6.1l9.6 9.6 3.2-2.3z" />
    <path d="M20.5 10.6L16.4 8.4l-3.2 3.2 3.2 3.2 4.1-2.2c1-.6 1-2 0-2z" opacity="0.85" />
    <path d="M3.6 22.6c.2.1.4.2.6.2.1 0 .3 0 .4-.1l9.2-5.2 2.6-1.5-3.2-3.2L3.6 22.6z" opacity="0.7" />
  </svg>
);

// Vroche custom mark (for deco)
export const VrocheMark = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2L3 7l9 13 9-13-9-5zm0 3.5l5.5 3-5.5 8L6.5 8.5 12 5.5z" />
  </svg>
);
