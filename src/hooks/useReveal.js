import { useEffect } from "react";

export default function useReveal(selector = ".reveal", options = {}) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("reveal-in");
          obs.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.15, ...options });

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [selector, options]);
}
