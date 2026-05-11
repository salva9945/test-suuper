import React, { useEffect, useRef, useState } from "react";
import { useRevealAll } from "./hooks";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import { ScrollProgressBar } from "./components/UI";

import HeroSection from "./sections/Hero";
import Manifest from "./sections/Manifest";
import ScrollStory from "./sections/ScrollStory";
import Product from "./sections/Product";
import Community from "./sections/Community";
import Vision from "./sections/Vision";
import Download from "./sections/Download";

import LegalModal from "./legal/LegalModal";

export default function VrocheLandingPage() {
  const rootRef = useRef(null);
  useRevealAll(rootRef);

  const [legalPage, setLegalPage] = useState(null);

  // Re-attach reveals when DOM grows (after initial render)
  useEffect(() => {
    const reattach = () => {
      const els = document.querySelectorAll(".reveal:not(.in-view)");
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in-view"); obs.unobserve(e.target); }
        }),
        { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
      );
      els.forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    };
    const cleanup = reattach();
    return cleanup;
  }, []);

  return (
    <div ref={rootRef} className="bg-[#040806] text-[#FCFFFE]">
      <ScrollProgressBar />
      <NavBar />

      <main>
        <HeroSection />
        <Manifest />
        <ScrollStory />
        <Product />
        <Community />
        <Vision />
        <Download />
      </main>

      <Footer onOpenLegal={setLegalPage} />

      <CookieBanner onOpenPolicy={() => setLegalPage("cookies")} />

      {legalPage && <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />}
    </div>
  );
}
