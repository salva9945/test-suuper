import React from "react";
import { useScrollProgress } from "../hooks";

// ─── Eyebrow / section label ────────────────────────────────────────
export function Eyebrow({ children, color = "currentColor", num }) {
  return (
    <div className="inline-flex items-center gap-3" style={{ color }}>
      {num && (
        <span className="font-sans text-[11px] font-medium tracking-[0.3em] opacity-50">{num}</span>
      )}
      <span className="h-[1px] w-8 bg-current opacity-40" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

// ─── Tag pill ────────────────────────────────────────────────────────
export function Tag({ children, color = "white", filled, className = "" }) {
  const baseStyle = filled
    ? { background: color === "mint" ? "#63D7B1" : color === "coral" ? "#FF5733" : color === "white" ? "#FCFFFE" : "#040806", color: "#040806", borderColor: "transparent" }
    : { color: color === "mint" ? "#63D7B1" : color === "coral" ? "#FF5733" : color, borderColor: "currentColor", background: "transparent" };
  return (
    <span className={"chip-outline " + className} style={baseStyle}>
      {children}
    </span>
  );
}

// ─── Badge (small + dot) ────────────────────────────────────────────
export function Badge({ children, dot = "mint", className = "" }) {
  const dotColor = dot === "coral" ? "#FF5733" : dot === "white" ? "#FCFFFE" : "#63D7B1";
  return (
    <span
      className={"inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md " + className}
      style={{ fontFamily: "DM Sans, sans-serif", fontSize: 10.5, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span
          className="absolute inset-0 rounded-full"
          style={{ background: dotColor, boxShadow: `0 0 10px ${dotColor}` }}
        />
        <span
          className="absolute inset-0 rounded-full live-dot"
          style={{ background: dotColor }}
        />
      </span>
      {children}
    </span>
  );
}

// ─── Scroll progress bar ────────────────────────────────────────────
export function ScrollProgressBar() {
  const p = useScrollProgress();
  return <div className="scroll-progress" style={{ width: `${p * 100}%` }} aria-hidden="true" />;
}

// ─── Asymmetric divider with label ──────────────────────────────────
export function SectionDivider({ label, color = "currentColor", num }) {
  return (
    <div className="flex items-center gap-5" style={{ color }}>
      {num && <span className="font-sans text-[11px] tracking-[0.3em] opacity-50">{num}</span>}
      <span className="h-[1px] flex-1 bg-current opacity-15" />
      {label && <span className="eyebrow opacity-70">{label}</span>}
      <span className="h-[1px] flex-1 bg-current opacity-15" />
    </div>
  );
}
