import React from "react";
import { Eyebrow, Tag } from "../components/UI";
import { Heart, ChevronRight } from "../components/icons";

/* Curated editorial / fashion photos from Unsplash.
   Selected for: outfit-focused, magazine quality, diverse styles. */
const FEED = [
  {
    user: "@valeria",
    caption: "Streetstyle Madrid · noche",
    likes: "24K",
    saves: "1.3K",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=85",
    style: "Streetwear",
  },
  {
    user: "@rodiigb",
    caption: "Black on black · concierto",
    likes: "45K",
    saves: "2K",
    img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=700&q=85",
    style: "Minimal",
  },
  {
    user: "@kapi",
    caption: "Vintage finds · café day",
    likes: "12K",
    saves: "856",
    img: "https://images.unsplash.com/photo-1485518882345-15568b007407?auto=format&fit=crop&w=700&q=85",
    style: "Vintage",
  },
  {
    user: "@miaroma",
    caption: "Editorial · presentation",
    likes: "8.4K",
    saves: "412",
    img: "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=85",
    style: "Editorial",
  },
  {
    user: "@sofiia",
    caption: "Old money · brunch",
    likes: "16K",
    saves: "934",
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85",
    style: "Old money",
  },
  {
    user: "@inestcr",
    caption: "Y2K vibes · friday",
    likes: "31K",
    saves: "1.8K",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=700&q=85",
    style: "Y2K",
  },
];

function FeedCard({ post }) {
  return (
    <article className="reveal relative w-[280px] flex-shrink-0 md:w-[320px]">
      <div className="relative h-[480px] w-full overflow-hidden rounded-[28px] bg-[#1a1a1a]">
        <img
          src={post.img}
          alt={post.user}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* top + bottom gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)",
          }}
        />

        {/* Style tag top left */}
        <div className="absolute left-4 top-4 z-10">
          <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-white bg-black/45 backdrop-blur-md rounded-full px-3 py-1">
            {post.style}
          </span>
        </div>

        {/* Right side stats */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-5 z-10">
          <div className="flex flex-col items-center gap-1">
            <Heart className="h-6 w-6 text-[#FF5733] drop-shadow-lg" strokeWidth={2} />
            <span className="font-sans text-[10px] font-bold text-white drop-shadow-lg">{post.likes}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white drop-shadow-lg" aria-hidden="true">
              <path d="M5 3v18l7-4 7 4V3z" />
            </svg>
            <span className="font-sans text-[10px] font-bold text-white drop-shadow-lg">{post.saves}</span>
          </div>
        </div>

        {/* Bottom user info */}
        <div className="absolute left-4 right-4 bottom-4 z-10">
          <p className="font-sans text-[12px] font-semibold text-white drop-shadow">{post.user}</p>
          <p className="font-body text-[11px] text-white/85 mt-0.5 drop-shadow">{post.caption}</p>
        </div>
      </div>
    </article>
  );
}

export default function Community() {
  return (
    <section id="community" className="relative bg-[#040806] text-[#FCFFFE] py-24 md:py-32 grain">
      <div className="glow-blob" style={{ width: 600, height: 600, top: "20%", left: -200, background: "rgba(102,16,181,0.18)" }} />
      <div className="glow-blob" style={{ width: 500, height: 500, bottom: "10%", right: -160, background: "rgba(99,215,177,0.12)" }} />

      <div className="relative z-10">
        <div className="mx-auto max-w-[1440px] px-5 md:px-9">
          <div className="reveal mb-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <Eyebrow num="04" color="#63D7B1">Community · Social fashion</Eyebrow>
              <h2 className="section-display mt-7 text-white">
                Real outfits.
                <br />
                <span className="font-instrument italic text-[#63D7B1]">Real people.</span>
              </h2>
            </div>
            <p className="font-body text-base leading-[1.7] text-white/55 max-w-md justify-self-end">
              Vroche también es comunidad. Sigue a creadores con tu mismo estilo,
              guarda looks que te inspiren y comparte los tuyos. Sin filtros forzados.
              Solo moda real.
            </p>
          </div>

          <div className="reveal mb-10 flex flex-wrap gap-2.5">
            {["Y2K", "Minimal", "Streetwear", "Editorial", "Vintage", "Quiet luxury", "Old money", "Coquette", "Techwear"].map((t) => (
              <Tag key={t} color="#FCFFFE" className="opacity-70 hover:opacity-100 transition-opacity">{t}</Tag>
            ))}
          </div>
        </div>

        <div className="reveal relative">
          <div className="flex gap-5 overflow-x-auto pl-5 md:pl-9 pr-5 pb-4 no-scrollbar">
            {FEED.map((post, i) => (
              <FeedCard key={i} post={post} />
            ))}
            <div className="w-[280px] md:w-[320px] flex-shrink-0">
              <div className="relative h-[480px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] flex flex-col items-center justify-center text-center px-7">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15">
                  <ChevronRight className="h-5 w-5 text-[#63D7B1]" />
                </div>
                <p className="font-display italic text-3xl text-white leading-tight">
                  And thousands more inside the app.
                </p>
                <p className="font-body mt-4 text-sm text-white/50">Descarga Vroche para descubrirlas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
