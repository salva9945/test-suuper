import React, { useMemo, useRef, useEffect, useState } from "react";
import { VROCHE_LOGO_ICON, APP_STORE_URL, PLAY_STORE_URL } from "../constants";
import { ArrowDown, AppleLogo, GoogleLogo } from "../components/icons";

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function buildLogoField(count = 90, seed = 7) {
  const rand = seededRandom(seed);
  return Array.from({ length: count }, (_, i) => ({
    id: `logo-${i}`,
    size: 16 + rand() * 30,
    left: 1 + rand() * 98,
    top: 2 + rand() * 96,
    rotate: -32 + rand() * 64,
    opacity: 0.05 + rand() * 0.07,
    dx: -1 + rand() * 2,
    dy: -1 + rand() * 2,
    amp: 8 + rand() * 14,
    period: 8 + rand() * 12,
    phase: rand() * Math.PI * 2,
  }));
}

/* Background logo field with cursor reveal */
function LogoField() {
  const items = useMemo(() => buildLogoField(90, 7), []);
  const containerRef = useRef(null);
  const revealRef = useRef(null);
  const itemRefsBase = useRef([]);
  const itemRefsReveal = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const reveal = revealRef.current;
    if (!container || !reveal) return;
    let raf = null;
    let lastX = -9999, lastY = -9999;
    function update() {
      raf = null;
      reveal.style.setProperty("--reveal-x", `${lastX}px`);
      reveal.style.setProperty("--reveal-y", `${lastY}px`);
      reveal.style.setProperty("--reveal-opacity", lastX < 0 ? "0" : "1");
    }
    function onMove(e) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) { lastX = -9999; lastY = -9999; }
      else { lastX = x; lastY = y; }
      if (raf) return;
      raf = requestAnimationFrame(update);
    }
    function onLeave() { lastX = -9999; lastY = -9999; if (raf) return; raf = requestAnimationFrame(update); }
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    let raf = null;
    let start = performance.now();
    function tick(now) {
      const t = (now - start) / 1000;
      for (let i = 0; i < items.length; i++) {
        const it = items[i];
        const x = Math.sin((t / it.period) * Math.PI * 2 + it.phase) * it.amp * it.dx;
        const y = Math.cos((t / it.period) * Math.PI * 2 + it.phase * 0.7) * it.amp * it.dy;
        const transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${it.rotate}deg)`;
        if (itemRefsBase.current[i]) itemRefsBase.current[i].style.transform = transform;
        if (itemRefsReveal.current[i]) itemRefsReveal.current[i].style.transform = transform;
      }
      raf = requestAnimationFrame(tick);
    }
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      raf = requestAnimationFrame(tick);
    }
    return () => { if (raf) cancelAnimationFrame(raf); };
  }, [items]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0">
        {items.map((it, i) => (
          <div key={`b-${it.id}`} ref={(el) => (itemRefsBase.current[i] = el)} style={{ position: "absolute", left: `${it.left}%`, top: `${it.top}%`, width: it.size, height: it.size, transform: `translate(-50%, -50%) rotate(${it.rotate}deg)`, opacity: it.opacity }}>
            <img src={VROCHE_LOGO_ICON} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "brightness(2)" }} />
          </div>
        ))}
      </div>
      <div ref={revealRef} className="absolute inset-0" style={{
        opacity: "var(--reveal-opacity, 0)",
        transition: "opacity 0.25s ease-out",
        WebkitMaskImage: "radial-gradient(circle 220px at var(--reveal-x, -9999px) var(--reveal-y, -9999px), rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0) 100%)",
        maskImage: "radial-gradient(circle 220px at var(--reveal-x, -9999px) var(--reveal-y, -9999px), rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0) 100%)",
      }}>
        {items.map((it, i) => (
          <div key={`r-${it.id}`} ref={(el) => (itemRefsReveal.current[i] = el)} style={{ position: "absolute", left: `${it.left}%`, top: `${it.top}%`, width: it.size, height: it.size, transform: `translate(-50%, -50%) rotate(${it.rotate}deg)` }}>
            <img src={VROCHE_LOGO_ICON} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "brightness(0) saturate(100%) invert(78%) sepia(35%) saturate(497%) hue-rotate(108deg) brightness(91%) contrast(86%)" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ULTRA 3D Logo
   - Multi-layer parallax depth (5 stacked copies at different Z)
   - Continuous Y-axis rotation
   - Mouse-tracked tilt (rotateX/Y)
   - Orbiting accent ring + glow
   - Particles emitting upward
   - Color shift on hover/scroll (white → mint → coral)
   ───────────────────────────────────────────────────────────── */
function Logo3D() {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  // Cursor-tracked 3D tilt
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf = null;
    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const ry = Math.max(-35, Math.min(35, dx * 45));
        const rx = Math.max(-35, Math.min(35, -dy * 45));
        el.style.setProperty("--rx", `${rx}deg`);
        el.style.setProperty("--ry", `${ry}deg`);
      });
    }
    function onLeave() {
      el.style.setProperty("--rx", `0deg`);
      el.style.setProperty("--ry", `0deg`);
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Scroll percentage for color shift
  useEffect(() => {
    function onScroll() {
      const max = window.innerHeight;
      setScrollPct(Math.min(1, window.scrollY / max));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Color filter logic
  const mintFilter = "brightness(0) saturate(100%) invert(78%) sepia(35%) saturate(497%) hue-rotate(108deg) brightness(91%) contrast(86%)";
  const coralFilter = "brightness(0) saturate(100%) invert(45%) sepia(72%) saturate(2475%) hue-rotate(346deg) brightness(99%) contrast(101%)";
  const whiteFilter = "brightness(2)";

  // Active color based on state
  let activeFilter, glowColor;
  if (hovered) {
    activeFilter = coralFilter;
    glowColor = "rgba(255,87,51,0.55)";
  } else if (scrollPct > 0.1) {
    activeFilter = mintFilter;
    glowColor = "rgba(99,215,177,0.45)";
  } else {
    activeFilter = whiteFilter;
    glowColor = "rgba(99,215,177,0.25)";
  }

  // Particles config (stable across renders)
  const particles = useMemo(() => {
    const rand = seededRandom(42);
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: 35 + rand() * 30,
      delay: rand() * 4,
      duration: 3 + rand() * 3,
      size: 3 + rand() * 5,
    }));
  }, []);

  return (
    <div
      ref={wrapRef}
      className="logo3d-wrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        perspective: "1200px",
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer glow (behind everything) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor} 0%, rgba(0,0,0,0) 55%)`,
          filter: "blur(50px)",
          transition: "background 0.6s ease",
        }}
      />

      {/* Particles rising */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <span
            key={p.id}
            className="logo3d-particle"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              background: hovered ? "#FF5733" : "#63D7B1",
            }}
          />
        ))}
      </div>

      {/* Orbiting ring (behind logo) */}
      <div className="logo3d-orbit-wrap absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="logo3d-orbit" style={{ "--orbit-color": hovered ? "#FF5733" : "#63D7B1" }}>
          <span className="logo3d-orbit-dot" />
        </div>
      </div>

      {/* The 3D logo stack */}
      <div
        ref={innerRef}
        className="logo3d-inner"
        style={{
          width: "min(75%, 340px)",
          aspectRatio: "1",
          position: "relative",
          transformStyle: "preserve-3d",
          transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
          transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          animation: "logo3d-spin 14s linear infinite",
        }}
      >
        {/* Depth shadow layer (far back, very blurred) */}
        <img
          src={VROCHE_LOGO_ICON}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "brightness(0) blur(14px)",
            opacity: 0.5,
            transform: "translateZ(-80px) scale(0.94)",
          }}
        />
        {/* Back mint layer (glow effect) */}
        <img
          src={VROCHE_LOGO_ICON}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: `${activeFilter} blur(6px)`,
            opacity: 0.7,
            transform: "translateZ(-30px) scale(0.99)",
            transition: "filter 0.5s ease",
          }}
        />
        {/* Middle layer (semi-transparent for depth) */}
        <img
          src={VROCHE_LOGO_ICON}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: activeFilter,
            opacity: 0.35,
            transform: "translateZ(15px)",
            transition: "filter 0.5s ease",
          }}
        />
        {/* Main logo (frontmost) */}
        <img
          src={VROCHE_LOGO_ICON}
          alt="Vroche logo"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: activeFilter,
            transform: "translateZ(50px)",
            transition: "filter 0.5s ease",
            display: "block",
          }}
        />
        {/* Edge highlight (front, very thin) */}
        <img
          src={VROCHE_LOGO_ICON}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
            opacity: 0.18,
            transform: "translateZ(60px) scale(1.005)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/35">
          Hover · Move · Scroll
        </span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#040806] text-[#FCFFFE] grain"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <LogoField />

      <div className="glow-blob" style={{ width: 600, height: 600, top: -200, left: -180, background: "rgba(99,215,177,0.18)" }} />
      <div className="glow-blob" style={{ width: 500, height: 500, bottom: -220, right: -140, background: "rgba(255,87,51,0.10)" }} />

      <div className="h-32 md:h-36 flex-shrink-0" />

      <div className="relative z-20 flex-1 flex items-center mx-auto w-full max-w-[1440px] px-5 md:px-9">
        <div className="grid w-full gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h1 className="hero-display text-white">
              Your <span className="text-[#63D7B1]">wardrobe</span>,
              <br />
              <span className="font-display-up not-italic">UPGRADED</span>
              <span className="font-instrument italic"> by AI.</span>
            </h1>
            <p className="font-body mt-8 max-w-xl text-base leading-[1.65] text-white/65 md:text-lg">
              Vroche convierte tu armario en una experiencia inteligente, visual y social.
              <span className="text-white"> AI Stylist</span>, virtual try-on, planner y feed de moda real
              en una sola app.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 rounded-full bg-white px-6 py-4 text-[#040806] transition-all hover:scale-[1.02] sm:max-w-xs">
                <span className="flex items-center gap-3">
                  <AppleLogo className="h-6 w-6" />
                  <span className="text-left">
                    <span className="block font-sans text-[10px] uppercase tracking-[0.2em] opacity-50">Download on the</span>
                    <span className="block font-sans text-base font-bold">App Store</span>
                  </span>
                </span>
              </a>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md px-6 py-4 text-white transition-all hover:bg-white hover:text-[#040806] sm:max-w-xs">
                <span className="flex items-center gap-3">
                  <GoogleLogo className="h-6 w-6" />
                  <span className="text-left">
                    <span className="block font-sans text-[10px] uppercase tracking-[0.2em] opacity-50">Get it on</span>
                    <span className="block font-sans text-base font-bold">Google Play</span>
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Right: 3D logo */}
          <div className="relative hidden lg:block" style={{ height: 480 }}>
            <Logo3D />
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto mt-auto flex w-full max-w-[1440px] items-center justify-end gap-3 px-5 pb-8 md:px-9 md:pb-10">
        <a href="#manifest" className="group flex items-center gap-3 text-white/55 hover:text-[#63D7B1] transition-colors">
          <span className="font-sans text-[10.5px] tracking-[0.28em] uppercase">Scroll</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current">
            <ArrowDown className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>

      <div className="relative z-10 overflow-hidden border-y border-white/10 py-5">
        <div className="marquee-track">
          {Array.from({ length: 4 }).map((_, k) => (
            <div key={k} className="flex flex-shrink-0 items-center gap-12 pr-12">
              {["AI STYLIST", "VIRTUAL TRY-ON", "DIGITAL CLOSET", "SOCIAL FASHION", "OUTFIT PLANNER", "SMART SHOPPING"].map((t, i) => (
                <React.Fragment key={i}>
                  <span className="font-display italic text-5xl text-white/85 md:text-7xl whitespace-nowrap">{t}</span>
                  <span className="text-[#63D7B1] text-3xl">✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
