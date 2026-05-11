import React from "react";
import { Eyebrow, Tag } from "../components/UI";
import { Sparkles } from "../components/icons";

export default function Vision() {
  return (
    <section id="vision" className="relative overflow-hidden bg-[#F2EEE7] text-[#040806] py-24 md:py-36 grain">
      {/* deco arcs */}
      <div className="pointer-events-none absolute -right-40 -top-40 opacity-20">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" className="spin-slow">
          <circle cx="300" cy="300" r="280" stroke="#040806" strokeWidth="1" strokeDasharray="2 6" />
          <circle cx="300" cy="300" r="220" stroke="#040806" strokeWidth="0.8" />
          <circle cx="300" cy="300" r="160" stroke="#040806" strokeWidth="0.6" strokeDasharray="4 8" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-9">
        <div className="reveal mb-12">
          <Eyebrow num="05" color="#040806">Vision · The bigger picture</Eyebrow>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div className="reveal">
            <h2 className="section-display text-[#040806]">
              The new layer between
              <br />
              your <span className="font-instrument italic text-[#FF5733]">closet</span>, your
              <br />
              <span className="font-instrument italic">identity</span> & how
              <br />
              you shop online.
            </h2>
          </div>

          <div className="reveal reveal-delay-2 lg:pt-16">
            <p className="font-body text-base md:text-lg leading-[1.7] text-[#040806]/75">
              Vroche nace para una generación que decide en el móvil, se inspira en redes
              y espera experiencias visuales inmediatas.
            </p>
            <p className="font-body mt-5 text-base md:text-lg leading-[1.7] text-[#040806]/75">
              Combinamos utilidad diaria, AI personalizada y moda digital con
              una marca aspiracional. No un closet app más. Una nueva manera de
              entender el estilo.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Tag color="#040806" className="opacity-90">Daily — uso recurrente</Tag>
              <Tag color="#040806" className="opacity-90">Visual — decisión rápida</Tag>
              <Tag color="#040806" className="opacity-90">Social — viralidad natural</Tag>
              <Tag color="#FF5733" className="opacity-90">AI — núcleo del producto</Tag>
            </div>
          </div>
        </div>

        {/* Quote / signature */}
        <div className="reveal mt-24 border-t border-[#040806]/15 pt-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-instrument italic text-2xl md:text-3xl text-[#040806] max-w-2xl leading-tight">
              "Cada mañana, millones de personas decidirán qué ponerse con Vroche."
            </p>
            <p className="font-sans mt-4 text-[10.5px] tracking-[0.3em] uppercase text-[#040806]/55">
              — Vroche team · Madrid
            </p>
          </div>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#040806] text-[#63D7B1]">
            <Sparkles className="h-5 w-5" />
          </span>
        </div>
      </div>
    </section>
  );
}
