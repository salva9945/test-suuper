import { useEffect, useRef, useState } from "react";

// Reveal a single element when in view (toggles class .in-view)
export function useReveal(threshold = 0.18) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in-view");
            obs.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

// Auto-attach reveal class on first render to all .reveal children inside container
export function useRevealAll(rootRef, threshold = 0.18) {
  useEffect(() => {
    const root = rootRef?.current ?? document;
    const elements = root.querySelectorAll?.(".reveal") ?? [];
    if (!elements.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [rootRef, threshold]);
}

// Mouse pos tracker (throttled with rAF)
export function useMousePosition() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  useEffect(() => {
    let raf = null;
    let last = { x: 0, y: 0 };
    function onMove(e) {
      last = { x: e.clientX, y: e.clientY };
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        setPos(last);
      });
    }
    function onLeave() { setPos({ x: -9999, y: -9999 }); }
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return pos;
}

// Scroll progress 0..1
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = null;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return progress;
}

// Track section progress (0..1) of a ref element being scrolled past viewport
export function useSectionScrollProgress(ref) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = null;
    function onScroll() {
      const el = ref?.current;
      if (!el) return;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const rect = el.getBoundingClientRect();
        const winH = window.innerHeight;
        const total = rect.height - winH;
        if (total <= 0) {
          setProgress(rect.top < 0 ? 1 : 0);
          return;
        }
        const scrolled = -rect.top;
        const p = Math.min(1, Math.max(0, scrolled / total));
        setProgress(p);
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);
  return progress;
}
