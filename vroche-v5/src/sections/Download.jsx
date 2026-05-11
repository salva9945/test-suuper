import React from "react";
import { APP_STORE_URL, PLAY_STORE_URL, VROCHE_LOGO_ICON } from "../constants";
import { AppleLogo, GoogleLogo, ArrowUpRight } from "../components/icons";
import { Eyebrow } from "../components/UI";

export default function Download() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-[#040806] text-[#FCFFFE] py-24 md:py-36 grain grain-strong"
    >
      {/* big glow */}
      <div className="glow-blob" style={{ width: 700, height: 700, top: "-20%", left: "50%", transform: "translateX(-50%)", background: "rgba(99,215,177,0.22)" }} />
      <div className="glow-blob" style={{ width: 500, height: 500, bottom: "-10%", right: "-10%", background: "rgba(255,87,51,0.12)" }} />

      {/* watermark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none z-0">
        <img
          src={VROCHE_LOGO_ICON}
          alt=""
          style={{ width: "min(70vw, 720px)", height: "auto", objectFit: "contain", opacity: 0.04, filter: "brightness(2)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-9 text-center">
        <div className="reveal mb-3">
          <Eyebrow num="06" color="#63D7B1">Download</Eyebrow>
        </div>

        <h2 className="reveal section-display mt-7 mx-auto max-w-5xl">
          Be one of the first
          <br />
          <span className="font-instrument italic text-[#63D7B1]">to wear the future.</span>
        </h2>

        <p className="reveal font-body mt-7 mx-auto max-w-2xl text-base md:text-lg leading-[1.7] text-white/55">
          Descarga Vroche y empieza a usar tu armario como nunca antes. Disponible en App Store y Google Play.
        </p>

        {/* Store buttons big */}
        <div className="reveal mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full max-w-xs items-center justify-between gap-4 rounded-full bg-white px-7 py-4 text-[#040806] transition-all hover:scale-[1.02]"
          >
            <span className="flex items-center gap-3">
              <AppleLogo className="h-7 w-7" />
              <span className="text-left">
                <span className="block font-sans text-[10px] uppercase tracking-[0.2em] opacity-50">Download on the</span>
                <span className="block font-sans text-base font-bold">App Store</span>
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full max-w-xs items-center justify-between gap-4 rounded-full bg-white px-7 py-4 text-[#040806] transition-all hover:scale-[1.02]"
          >
            <span className="flex items-center gap-3">
              <GoogleLogo className="h-7 w-7" />
              <span className="text-left">
                <span className="block font-sans text-[10px] uppercase tracking-[0.2em] opacity-50">Get it on</span>
                <span className="block font-sans text-base font-bold">Google Play</span>
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </div>
    </section>
  );
}
