import React, { useEffect, useState } from "react";
import { VROCHE_LOGO_TEXT, APP_STORE_URL, PLAY_STORE_URL } from "../constants";
import { ArrowUpRight, AppleLogo, GoogleLogo } from "./icons";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 30); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function jump(id) {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#040806]/85 backdrop-blur-xl" : "bg-transparent"
        }`}
        style={{ borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent" }}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-9 md:py-4">
          {/* Logo */}
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center" aria-label="Vroche home">
            <img
              src={VROCHE_LOGO_TEXT}
              alt="Vroche"
              style={{ height: 26, width: "auto", maxWidth: 130, objectFit: "contain" }}
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-9 md:flex">
            {[
              ["Manifest", "manifest"],
              ["Build", "scrollstory"],
              ["Product", "product"],
              ["Community", "community"],
            ].map(([label, id]) => (
              <li key={id}>
                <button
                  onClick={() => jump(id)}
                  className="font-sans text-[12px] font-medium tracking-[0.18em] uppercase text-white/70 transition-colors hover:text-[#63D7B1]"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA — mint Get the app */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on App Store"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-colors hover:bg-white hover:text-[#040806]"
            >
              <AppleLogo className="h-4 w-4" />
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-colors hover:bg-white hover:text-[#040806]"
            >
              <GoogleLogo className="h-4 w-4" />
            </a>
            <button
              onClick={() => jump("download")}
              className="group inline-flex items-center gap-2 rounded-full bg-[#63D7B1] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#040806] transition-all hover:bg-white"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Get the app
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
            </button>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Open menu"
          >
            <span className={`block h-[1.5px] w-7 bg-white transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-7 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-7 bg-white transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ background: "rgba(4,8,6,0.97)", backdropFilter: "blur(24px)" }}
      >
        <div className="flex h-full flex-col px-7 pb-12 pt-28">
          <ul className="flex flex-col gap-1">
            {[
              ["Manifest", "manifest", "01"],
              ["Build your look", "scrollstory", "02"],
              ["Product", "product", "03"],
              ["Community", "community", "04"],
              ["Vision", "vision", "05"],
              ["Download", "download", "06"],
            ].map(([label, id, num]) => (
              <li key={id} className="border-b border-white/10">
                <button
                  onClick={() => jump(id)}
                  className="flex w-full items-baseline justify-between py-5 text-left"
                >
                  <span className="font-display italic text-4xl text-white">{label}</span>
                  <span className="font-sans text-[11px] tracking-[0.3em] text-white/30">{num}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-full bg-[#63D7B1] px-5 py-3.5 text-[#040806]"
            >
              <span className="flex items-center gap-3">
                <AppleLogo className="h-5 w-5" />
                <span className="font-sans text-sm font-bold">Download on App Store</span>
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-full bg-white px-5 py-3.5 text-[#040806]"
            >
              <span className="flex items-center gap-3">
                <GoogleLogo className="h-5 w-5" />
                <span className="font-sans text-sm font-bold">Get it on Google Play</span>
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
