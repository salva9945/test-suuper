import React from "react";
import { Eyebrow } from "../components/UI";

export default function Manifest() {
  return (
    <section id="manifest" className="relative bg-[#FCFFFE] text-[#040806] py-24 md:py-36 grain">
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-9">

        {/* Header row */}
        <div className="reveal mb-14">
          <Eyebrow num="01" color="#040806">Manifest · Why Vroche</Eyebrow>
        </div>

        {/* Editorial pull-quote */}
        <div className="reveal grid items-end gap-12 lg:grid-cols-[1fr_0.55fr]">
          <h2 className="section-display text-[#040806]">
            We have <span className="line-through opacity-30">closets</span> full of clothes
            <br />
            and still ask <span className="font-instrument italic text-[#FF5733]">"what do I wear?"</span>
          </h2>
          <div className="border-l border-[#040806]/15 pl-7 max-w-md">
            <p className="font-body text-base leading-[1.65] text-[#040806]/65">
              Cada mañana, millones de personas abren su armario, se pierden en Pinterest,
              repiten outfits, se sienten desconectadas de su propio estilo — y acaban
              comprando ropa que ya tenían.
            </p>
            <p className="font-body mt-4 text-base leading-[1.65] text-[#040806]/65">
              Vroche no es otra red social. Es una capa nueva entre tu armario,
              tu identidad y la decisión diaria de vestirte.
            </p>
          </div>
        </div>

        {/* Stats grid — clean, no overlap */}
        <div className="mt-24 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              num: "47%",
              label: "de la gente no usa ni la mitad de la ropa que tiene",
            },
            {
              num: "30 min",
              label: "se pierden todos los días solo en decidir qué ponerse",
            },
            {
              num: "1×",
              label: "app que une todo: AI, closet, planner y social",
            },
          ].map((s, i) => (
            <div key={s.num} className={`reveal reveal-delay-${i + 1} border-t border-[#040806]/20 pt-7`}>
              <p
                className="font-display italic text-[#040806] leading-[0.85]"
                style={{
                  fontSize: "clamp(4rem, 9vw, 8rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                {s.num}
              </p>
              <p className="font-body mt-6 max-w-[260px] text-[15px] leading-[1.55] text-[#040806]/65">
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
