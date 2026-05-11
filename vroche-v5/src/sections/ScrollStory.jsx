import React, { useRef } from "react";
import { useSectionScrollProgress } from "../hooks";
import { Eyebrow } from "../components/UI";

/* ─────────────────────────────────────────────────────────────
   Scroll Story
   Real-product PNG cutouts composed into an outfit as you scroll.

   Composition order (logical outfit layering):
   1. Top (brown blouse)        — center, upper area
   2. Pants (white slim)        — below top
   3. Shoes (black slingback)   — at bottom
   4. Coat (beige with belt)    — slightly overlapping top (outer layer)
   5. Bag (burgundy)            — right side
   6. Sunglasses (oversized)    — upper right (accessory area)
   7. Ring (gold)               — small accent, lower left
   ───────────────────────────────────────────────────────────── */

const STEPS = [
  {
    title: "Escanea tu armario",
    subtitle: "Digital closet",
    text: "Sube prendas desde una foto, un enlace o tus capturas. La AI las identifica, las recorta y las clasifica automáticamente en tu armario digital.",
  },
  {
    title: "AI Stylist personal",
    subtitle: "Your taste, learned",
    text: "Vroche aprende tu estilo y compone outfits con tus prendas: según el plan, el clima, la ocasión y tu identidad visual.",
  },
  {
    title: "Virtual Try-On",
    subtitle: "Powered by Gemini",
    text: "Visualiza cualquier look sobre tu propia foto antes de salir o de comprar. Decide con criterio, no por impulso.",
  },
  {
    title: "Planifica la semana",
    subtitle: "Outfit calendar",
    text: "Universidad, trabajo, citas, viajes, eventos. Cada día tiene su outfit pensado — y se ajusta al clima en tiempo real.",
  },
  {
    title: "Inspiración real",
    subtitle: "Social fashion feed",
    text: "Comparte tus looks, recibe likes y descubre estilo real de otros usuarios. Una capa social hecha por y para quien viste con intención.",
  },
  {
    title: "Compra mejor",
    subtitle: "Smart shopping",
    text: "Antes de comprar, prueba cómo combina con lo que ya tienes. Menos compras impulsivas. Más prendas que sí encajan.",
  },
];

/* Outfit composition — real PNGs ordered logically as a person would dress.
   x,y in % (center anchor). size = % of stage width. zIndex for layering. */
const ITEMS = [
  // step 1: top (brown blouse) — center upper
  { key: "top",        start: 0.04, img: "/look/top.png",        x: 50, y: 30, size: 30, rot: 0,  z: 5 },
  // step 2: pants (white) — below top, slightly overlapping
  { key: "pants",      start: 0.18, img: "/look/pants.png",      x: 50, y: 62, size: 22, rot: 0,  z: 4 },
  // step 3: shoes (black slingback) — at bottom
  { key: "shoes",      start: 0.32, img: "/look/shoes.png",      x: 50, y: 91, size: 22, rot: 0,  z: 3 },
  // step 4: coat (beige) — outer layer, on top of blouse area, slightly larger
  { key: "coat",       start: 0.46, img: "/look/coat.png",       x: 50, y: 33, size: 38, rot: 0,  z: 6 },
  // step 5: bag (burgundy) — right side, mid
  { key: "bag",        start: 0.58, img: "/look/bag.png",        x: 84, y: 60, size: 20, rot: -4, z: 7 },
  // step 6: sunglasses — upper right (accessory)
  { key: "sunglasses", start: 0.72, img: "/look/sunglasses.png", x: 18, y: 18, size: 22, rot: -8, z: 7 },
  // step 7: ring — small accent, lower left
  { key: "ring",       start: 0.86, img: "/look/ring.png",       x: 14, y: 80, size: 12, rot: 6,  z: 7 },
];

function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
function itemAppear(progress, start, duration = 0.1) {
  const end = Math.min(1, start + duration);
  if (progress <= start) return 0;
  if (progress >= end) return 1;
  return (progress - start) / (end - start);
}

function FlatLayStage({ progress }) {
  return (
    <div className="relative h-full w-full">
      <div
        className="absolute inset-4 md:inset-6 rounded-[28px] overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(99,215,177,0.16) 0%, rgba(4,8,6,0) 60%), radial-gradient(ellipse at 70% 80%, rgba(255,87,51,0.09) 0%, rgba(4,8,6,0) 55%), linear-gradient(180deg, #0c1310 0%, #040806 100%)",
        }}
      >
        {/* grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #FCFFFE 1px, transparent 1px), linear-gradient(to bottom, #FCFFFE 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* progress meter */}
        <div className="absolute left-5 right-5 top-5 flex items-center gap-3 z-30">
          <span className="font-sans text-[10px] tracking-[0.28em] text-white/55 uppercase">Composing look</span>
          <div className="relative flex-1 h-[2px] bg-white/12 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[#63D7B1] transition-all duration-200"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <span className="font-sans text-[10px] tracking-[0.18em] text-[#63D7B1]">{Math.round(progress * 100)}%</span>
        </div>

        {/* corner labels */}
        <div className="absolute left-5 bottom-5 flex flex-col gap-1 z-30">
          <span className="font-sans text-[10px] tracking-[0.28em] text-white/45 uppercase">Outfit · Spring 2026</span>
          <span className="font-display italic text-2xl text-white/85">Look</span>
        </div>
        <div className="absolute right-5 bottom-5 text-right z-30">
          <span className="font-sans text-[10px] tracking-[0.28em] text-[#63D7B1] uppercase">Built by AI</span>
          <p className="font-sans text-[10px] tracking-[0.18em] text-white/40 mt-1">22° · Madrid</p>
        </div>

        {/* Composed outfit — real PNG cutouts */}
        {ITEMS.map((it) => {
          const a = easeOut(itemAppear(progress, it.start, 0.1));
          if (a <= 0) return null;
          return (
            <div
              key={it.key}
              className="absolute"
              style={{
                left: `${it.x}%`,
                top: `${it.y}%`,
                width: `${it.size}%`,
                transform: `translate(-50%, -50%) rotate(${it.rot}deg) scale(${0.88 + 0.12 * a})`,
                opacity: a,
                transition: "opacity 0.55s ease, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
                zIndex: it.z,
              }}
            >
              <img
                src={it.img}
                alt=""
                loading="lazy"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  filter: `drop-shadow(0 22px 28px rgba(0,0,0,${0.55 * a}))`,
                }}
              />
            </div>
          );
        })}

        {/* watermark */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none" style={{ zIndex: 1 }}>
          <span
            className="font-display italic text-white/[0.02]"
            style={{ fontSize: "min(28vw, 280px)", letterSpacing: "-0.05em", lineHeight: 1 }}
          >
            vroche
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ScrollStory() {
  const sectionRef = useRef(null);
  const progress = useSectionScrollProgress(sectionRef);

  const stepProgress = progress * STEPS.length;
  const activeIdx = Math.min(STEPS.length - 1, Math.floor(stepProgress));

  return (
    <section
      id="scrollstory"
      ref={sectionRef}
      className="relative bg-[#040806] text-[#FCFFFE] grain"
      style={{ height: `${STEPS.length * 90}vh` }}
    >
      <div className="scroll-story-sticky">
        <div className="mx-auto grid h-full max-w-[1440px] grid-cols-1 gap-0 lg:grid-cols-[1.05fr_1fr] lg:gap-10 px-5 md:px-9">

          {/* Left: visual stage — vertically centered */}
          <div className="relative h-full flex items-center py-14 md:py-20">
            <div className="relative w-full" style={{ aspectRatio: "1 / 1.15", maxHeight: "78vh" }}>
              <FlatLayStage progress={progress} />
            </div>
          </div>

          {/* Right: text panel */}
          <div className="relative flex h-full flex-col justify-center pb-10 lg:pb-0">
            <div className="mb-6">
              <Eyebrow num="02" color="#63D7B1">How it works</Eyebrow>
            </div>

            <h2 className="section-display text-white mb-2">
              The look,
              <br />
              <span className="font-instrument italic text-[#63D7B1]">composed.</span>
            </h2>
            <p className="font-body text-sm md:text-base text-white/55 mb-8 max-w-md leading-[1.7]">
              Vroche te acompaña paso a paso. Aquí va el flujo real, mientras desplazas:
            </p>

            <ol className="space-y-1">
              {STEPS.map((s, i) => {
                const active = i === activeIdx;
                const past = i < activeIdx;
                return (
                  <li key={s.title} className="border-t border-white/10">
                    <div
                      className="flex items-start gap-5 py-4 transition-all duration-500"
                      style={{ opacity: active ? 1 : past ? 0.45 : 0.32 }}
                    >
                      <span
                        className="font-sans text-[11px] tracking-[0.3em] uppercase transition-colors duration-500"
                        style={{ color: active ? "#63D7B1" : "rgba(255,255,255,0.4)", width: 8, marginTop: 8 }}
                      >
                        ●
                      </span>
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between gap-3">
                          <h3
                            className="font-display italic text-2xl md:text-3xl transition-colors duration-500"
                            style={{ color: active ? "#FFFFFF" : "rgba(255,255,255,0.55)" }}
                          >
                            {s.title}
                          </h3>
                          <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/30 hidden md:block">
                            {s.subtitle}
                          </span>
                        </div>
                        <div
                          className="grid transition-all duration-500"
                          style={{ gridTemplateRows: active ? "1fr" : "0fr" }}
                        >
                          <div className="overflow-hidden">
                            <p className="font-body text-sm leading-[1.7] text-white/55 pt-3 max-w-md">
                              {s.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
              <li className="border-t border-white/10" />
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
