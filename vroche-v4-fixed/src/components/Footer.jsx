import React from "react";
import { VROCHE_LOGO_TEXT, LEGAL } from "../constants";
import { ArrowUpRight } from "../components/icons";

export default function Footer({ onOpenLegal }) {
  return (
    <footer className="relative bg-[#040806] text-[#FCFFFE] border-t border-white/10">
      {/* Big closing display type */}
      <div className="overflow-hidden border-b border-white/10">
        <div className="marquee-track-reverse">
          {Array.from({ length: 4 }).map((_, k) => (
            <div key={k} className="flex flex-shrink-0 items-center gap-12 pr-12 py-10">
              {["VROCHE", "VROCHE", "VROCHE", "VROCHE"].map((t, i) => (
                <React.Fragment key={i}>
                  <span className="font-display italic text-7xl text-white/10 md:text-9xl whitespace-nowrap select-none">
                    {t}
                  </span>
                  <span className="text-[#63D7B1]/60 text-3xl">✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 md:px-9 py-14 md:py-20">
        {/* Top row */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <img
              src={VROCHE_LOGO_TEXT}
              alt="Vroche"
              style={{ height: 28, width: "auto", maxWidth: 140, objectFit: "contain" }}
              className="mb-6"
            />
            <p className="font-body text-sm text-white/55 max-w-sm leading-[1.7]">
              AI fashion app · Virtual try-on · Smart closet · Social styling.
              Built in Madrid for a generation that decides on phone.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-[#63D7B1] hover:text-[#040806]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-[#63D7B1] hover:text-[#040806]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M16 3v2.4a4.6 4.6 0 0 0 4.6 4.6V13a8 8 0 0 1-4.6-1.46V16.5a5.5 5.5 0 1 1-5.5-5.5h.5v3a2.5 2.5 0 1 0 2 2.45V3z" /></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-[#63D7B1] hover:text-[#040806]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M18 2h3l-7 8 8.4 12H16l-5-7-5.7 7H2l7.5-9L1 2h6.6l4.5 6.4z" /></svg>
              </a>
            </div>
          </div>

          {/* Product nav */}
          <div>
            <p className="eyebrow text-white/40 mb-5">Product</p>
            <ul className="space-y-3">
              {[
                ["AI Stylist", "#product"],
                ["Virtual Try-On", "#product"],
                ["Digital Closet", "#product"],
                ["Outfit Planner", "#product"],
                ["Social Feed", "#community"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="font-body text-sm text-white/65 under-link hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="eyebrow text-white/40 mb-5">Company</p>
            <ul className="space-y-3">
              <li><a href="#manifest" className="font-body text-sm text-white/65 under-link hover:text-white">Manifest</a></li>
              <li><a href="#vision" className="font-body text-sm text-white/65 under-link hover:text-white">Vision</a></li>
              <li><a href="mailto:hello@vroche.com" className="font-body text-sm text-white/65 under-link hover:text-white">Contact</a></li>
              <li><a href="mailto:press@vroche.com" className="font-body text-sm text-white/65 under-link hover:text-white">Press</a></li>
            </ul>
          </div>

          {/* Legal nav */}
          <div>
            <p className="eyebrow text-white/40 mb-5">Legal</p>
            <ul className="space-y-3">
              {[
                ["Aviso Legal", "legal"],
                ["Política de Privacidad", "privacy"],
                ["Términos y Condiciones", "terms"],
                ["Política de Cookies", "cookies"],
              ].map(([label, page]) => (
                <li key={page}>
                  <button
                    onClick={() => onOpenLegal?.(page)}
                    className="font-body text-sm text-white/65 under-link hover:text-white text-left"
                    style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom legal block */}
        <div className="mt-16 border-t border-white/10 pt-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-white/35">
            © {new Date().getFullYear()} {LEGAL.company} · CIF {LEGAL.cif}
          </p>
          <p className="font-body text-[11px] text-white/35">
            {LEGAL.address} ·{" "}
            <a href={`mailto:${LEGAL.email}`} className="under-link">
              {LEGAL.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
