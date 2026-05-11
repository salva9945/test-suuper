// ─── Vroche Brand Constants ─────────────────────────────────────────
export const BRAND = {
  mint: "#63D7B1",
  coral: "#FF5733",
  white: "#FCFFFE",
  black: "#040806",
  bone: "#F2EEE7",
  cream: "#ECE6DA",
};

export const VROCHE_LOGO_ICON = "https://i.postimg.cc/7ZnpbB79/vroche-Blanco.png";
export const VROCHE_LOGO_TEXT = "https://i.postimg.cc/0Qn4yrwr/vroche-Blanco-Texto.png";

export const APP_STORE_URL = "https://apps.apple.com/app/vroche";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.vroche";

export const LEGAL = {
  company: "VROCHE APP S.L.",
  cif: "B22761977",
  address: "Calle Don Abraham Quintanilla, 12, Madrid",
  email: "privacidad@info.vroche.com",
  domain: "vroche.com",
  dpo_email: "privacidad@info.vroche.com",
  aepd_url: "https://www.aepd.es",
};

// ─── Validation ─────────────────────────────────────────────────────
export function isValidWaitlistEmail(value) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

// ─── Cookie Consent Storage ─────────────────────────────────────────
export const COOKIE_KEY = "vroche_cookie_consent_v1";

export function getCookieConsent() {
  try { return JSON.parse(localStorage.getItem(COOKIE_KEY)); } catch { return null; }
}
export function setCookieConsent(value) {
  try { localStorage.setItem(COOKIE_KEY, JSON.stringify(value)); } catch {}
}
