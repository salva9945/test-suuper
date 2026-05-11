import React, { useEffect, useState } from "react";
import { BRAND, getCookieConsent, setCookieConsent } from "../constants";
import { Cookie as CookieIcon, ChevronDown } from "./icons";

function CookieToggle({ title, desc, checked, disabled, onChange }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
      <div>
        <p style={{ color: "#FCFFFE", fontSize: 13, fontWeight: 600, margin: 0, fontFamily: "DM Sans, sans-serif" }}>{title}</p>
        <p style={{ color: "rgba(252,255,254,0.48)", fontSize: 12, margin: "2px 0 0", lineHeight: 1.5, fontFamily: "Roboto, sans-serif" }}>{desc}</p>
      </div>
      <label style={{ flexShrink: 0, position: "relative", cursor: disabled ? "not-allowed" : "pointer" }}>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.checked)}
          style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
        />
        <div
          style={{
            width: 40, height: 22, borderRadius: 999,
            background: checked ? BRAND.mint : "rgba(255,255,255,0.15)",
            transition: "background 0.2s",
            display: "flex", alignItems: "center", padding: 2,
            opacity: disabled ? 0.5 : 1,
          }}
        >
          <div
            style={{
              width: 18, height: 18, borderRadius: "50%", background: "#FCFFFE",
              transform: checked ? "translateX(18px)" : "translateX(0)",
              transition: "transform 0.2s",
            }}
          />
        </div>
      </label>
    </div>
  );
}

export default function CookieBanner({ onOpenPolicy }) {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      // Show almost immediately on first load
      const t = setTimeout(() => setVisible(true), 300);
      return () => clearTimeout(t);
    }
  }, []);

  function acceptAll() {
    setCookieConsent({ analytics: true, marketing: true, necessary: true, ts: Date.now() });
    setVisible(false);
  }
  function rejectAll() {
    setCookieConsent({ analytics: false, marketing: false, necessary: true, ts: Date.now() });
    setVisible(false);
  }
  function savePrefs() {
    setCookieConsent({ ...prefs, necessary: true, ts: Date.now() });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Consentimiento de cookies"
      style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999,
        padding: "0 0 env(safe-area-inset-bottom)",
        fontFamily: "DM Sans, sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(4,8,6,0.97)",
          backdropFilter: "blur(24px)",
          borderTop: "1px solid rgba(99,215,177,0.18)",
          padding: "20px 24px",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <CookieIcon className="h-5 w-5" />
            <div style={{ flex: 1 }}>
              <p style={{ color: "#FCFFFE", fontSize: 14, fontWeight: 700, margin: 0, fontFamily: "DM Sans, sans-serif" }}>
                Vroche usa cookies
              </p>
              <p style={{ color: "rgba(252,255,254,0.62)", fontSize: 13, margin: "4px 0 0", lineHeight: 1.6, fontFamily: "Roboto, sans-serif" }}>
                Usamos cookies necesarias para el funcionamiento de la web y, con tu consentimiento, cookies analíticas (Google Analytics) para mejorar tu experiencia.{" "}
                <button
                  onClick={onOpenPolicy}
                  style={{ color: BRAND.mint, background: "none", border: "none", cursor: "pointer", fontSize: 13, padding: 0, textDecoration: "underline" }}
                >
                  Política de cookies
                </button>
              </p>
            </div>
          </div>

          {/* Expandable details */}
          {showDetails && (
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 14,
                padding: "14px 16px",
                marginBottom: 14,
                display: "flex", flexDirection: "column", gap: 10,
              }}
            >
              <CookieToggle
                title="Cookies necesarias"
                desc="Imprescindibles para el funcionamiento de la web. No se pueden desactivar."
                checked={true}
                disabled={true}
              />
              <CookieToggle
                title="Cookies analíticas (Google Analytics)"
                desc="Nos permiten entender cómo usas la web. Los datos son anónimos."
                checked={prefs.analytics}
                onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
              <CookieToggle
                title="Cookies de marketing"
                desc="Para mostrarte anuncios relevantes. Actualmente no activas."
                checked={prefs.marketing}
                onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              />
            </div>
          )}

          {/* Actions */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
            <button
              onClick={() => setShowDetails((d) => !d)}
              style={{
                background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(252,255,254,0.7)", borderRadius: 999, padding: "9px 16px",
                fontSize: 12, fontWeight: 600, cursor: "pointer",
                display: "flex", alignItems: "center", gap: 5,
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              {showDetails ? "Ocultar opciones" : "Personalizar"}
              <ChevronDown
                className="h-3 w-3"
                style={{ transform: showDetails ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
              />
            </button>
            {showDetails && (
              <button
                onClick={savePrefs}
                style={{
                  background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)",
                  color: "#FCFFFE", borderRadius: 999, padding: "9px 18px",
                  fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "DM Sans, sans-serif",
                }}
              >
                Guardar preferencias
              </button>
            )}
            <div style={{ marginLeft: "auto", display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button
                onClick={rejectAll}
                style={{
                  background: "transparent", border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(252,255,254,0.65)", borderRadius: 999, padding: "9px 18px",
                  fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "DM Sans, sans-serif",
                }}
              >
                Solo necesarias
              </button>
              <button
                onClick={acceptAll}
                style={{
                  background: BRAND.mint, border: "none",
                  color: BRAND.black, borderRadius: 999, padding: "9px 20px",
                  fontSize: 12, fontWeight: 800, cursor: "pointer", letterSpacing: "0.08em",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                Aceptar todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
