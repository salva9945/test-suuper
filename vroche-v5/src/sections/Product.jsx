import React from "react";
import { Eyebrow } from "../components/UI";
import {
  IconAIStylist, IconCloset, IconTryOn, IconPlanner,
  IconSocial, IconShopping, IconTravel, IconPrivacy,
} from "../components/FeatureIcons";

/* Flip cards: front shows feature, back shows real app screenshot (9:16) */

const FEATURES = [
  {
    Icon: IconAIStylist,
    title: "AI Stylist",
    sub: "Tu estilista 24/7",
    text: "Looks generados en segundos a partir de tu armario, identidad visual, plan del día y el clima real.",
    accent: "mint",
    img: "/app/ai-stylist.jpg",
  },
  {
    Icon: IconCloset,
    title: "Digital Closet",
    sub: "Wardrobe inteligente",
    text: "Sube prendas con foto o link. La AI las identifica, recorta y clasifica por tipo, color y estilo.",
    accent: "default",
    img: "/app/digital-closet.jpg",
  },
  {
    Icon: IconTryOn,
    title: "Virtual Try-On",
    sub: "Powered by Gemini",
    text: "Pruébate cualquier outfit sobre tu propia foto. Decide antes de salir o de comprar.",
    accent: "coral",
    img: "/app/outfit-workspace.jpg",
  },
  {
    Icon: IconPlanner,
    title: "Outfit Planner",
    sub: "Tu calendario de looks",
    text: "Planifica tu semana — universidad, eventos, viajes — con outfits adaptados al contexto.",
    accent: "default",
    img: "/app/outfit-planner.jpg",
  },
  {
    Icon: IconSocial,
    title: "Social Feed",
    sub: "Inspiración real",
    text: "Comparte looks, recibe likes y descubre estilo de personas reales.",
    accent: "default",
    img: "/app/social-feed.jpg",
  },
  {
    Icon: IconShopping,
    title: "Smart Shopping",
    sub: "Compra mejor",
    text: "Antes de comprar, prueba cómo combina con lo que ya tienes. Menos devoluciones.",
    accent: "mint",
    img: "/app/profile.jpg",
  },
  {
    Icon: IconTravel,
    title: "Travel Planner",
    sub: "Outfits + viajes",
    text: "Planifica tu maleta para cualquier ciudad. Outfits según destino, fechas y clima.",
    accent: "default",
    img: "/app/travel-planner.jpg",
  },
  {
    Icon: IconPrivacy,
    title: "Privacy first",
    sub: "Tus prendas, tu data",
    text: "Tus fotos, tu armario y tus preferencias nunca se venden. Privacidad por diseño.",
    accent: "coral",
    img: null,
  },
];

function FlipCard({ f }) {
  const isMint = f.accent === "mint";
  const isCoral = f.accent === "coral";
  const Icon = f.Icon;

  const frontBg = isMint
    ? "linear-gradient(165deg, #63D7B1 0%, #4FBF99 100%)"
    : isCoral
    ? "linear-gradient(165deg, #FF5733 0%, #E84823 100%)"
    : "#F2EEE7";

  return (
    <div
      className="reveal group relative"
      style={{
        perspective: "1400px",
        // 9:16 aspect ratio container
        aspectRatio: "9 / 14",
      }}
    >
      <div
        className="relative h-full w-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: "var(--flip, rotateY(0deg))",
        }}
        onMouseEnter={(e) => e.currentTarget.style.setProperty("--flip", "rotateY(180deg)")}
        onMouseLeave={(e) => e.currentTarget.style.setProperty("--flip", "rotateY(0deg)")}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-[#040806]/10 p-6 md:p-7"
          style={{
            background: frontBg,
            color: "#040806",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="flex items-start justify-between">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-current/15"
              style={{ background: "rgba(4,8,6,0.06)" }}
            >
              <Icon className="h-6 w-6" />
            </span>
            {f.img && (
              <span className="font-sans text-[9px] tracking-[0.24em] uppercase opacity-50">Hover →</span>
            )}
          </div>

          <div>
            <h3 className="font-display italic text-3xl md:text-4xl leading-[0.95] tracking-tight">
              {f.title}
            </h3>
            <p className="font-sans mt-3 text-[10px] tracking-[0.28em] uppercase opacity-55">{f.sub}</p>
            <p className="font-body mt-4 text-[13px] md:text-sm leading-[1.6] opacity-75">
              {f.text}
            </p>
          </div>
        </div>

        {/* BACK — app screenshot (9:16 vertical phone) */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden border border-[#040806]/10"
          style={{
            background: "#0a0a0a",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {f.img ? (
            <>
              <img
                src={f.img}
                alt={f.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.85) 100%)" }}
              />
              <div className="absolute left-5 bottom-5 right-5">
                <p className="font-display italic text-2xl text-white">{f.title}</p>
                <p className="font-sans text-[10px] tracking-[0.24em] uppercase text-white/55 mt-1">{f.sub}</p>
              </div>
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center text-center px-6">
              <div>
                <Icon className="h-12 w-12 text-[#63D7B1] mx-auto mb-4" />
                <p className="font-display italic text-2xl text-white">{f.title}</p>
                <p className="font-body mt-3 text-sm text-white/60">{f.text}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  return (
    <section id="product" className="relative bg-[#FCFFFE] text-[#040806] py-24 md:py-32 grain">
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-9">
        <div className="reveal mb-14 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <Eyebrow num="03" color="#040806">Product · The toolkit</Eyebrow>
            <h2 className="section-display mt-7">
              <span className="font-instrument italic text-[#FF5733]">Eight</span> tools.
              <br />
              One operating system for style.
            </h2>
          </div>
          <p className="font-body text-base leading-[1.7] text-[#040806]/60 max-w-md justify-self-end">
            Pasa el cursor sobre cada tarjeta para ver la función dentro de la app. Cada herramienta existe para convertir el "no sé qué ponerme" en una decisión rápida y tuya.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <FlipCard key={f.title} f={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
