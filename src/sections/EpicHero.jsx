import { useEffect, useMemo, useRef, useState } from "react";
import "./EpicHero.css";

/* ----------------- tiny hooks ----------------- */

// Scramble the text to a target string (mount + on hover trigger)
function useScramble(target, speed = 18) {
  const [text, setText] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
  const frame = useRef(0);
  const raf = useRef(null);

  const run = () => {
    cancelAnimationFrame(raf.current);
    const from = text || "".padEnd(target.length, " ");
    const to = target;
    const max = Math.max(from.length, to.length);
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / (speed * max));
      const out = [];
      for (let i = 0; i < max; i++) {
        const show = i < Math.floor(t * max);
        out.push(show ? to[i] ?? "" : letters[Math.floor(Math.random() * letters.length)]);
      }
      setText(out.join(""));
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  };

  useEffect(() => { run(); return () => cancelAnimationFrame(raf.current); /* mount */ }, []);
  return { text, run };
}

// Mouse parallax: returns style transform for depth layers
function useParallax(mult = 1) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - (r.left + r.width / 2)) / r.width) * mult;
      const y = ((e.clientY - (r.top + r.height / 2)) / r.height) * mult;
      el.style.transform = `translate3d(${x * 14}px, ${y * 14}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mult]);
  return ref;
}

// Magnetic hover for buttons
function useMagnetic() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const strength = 28;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${(x / r.width) * strength}px, ${(y / r.height) * strength}px)`;
    };
    const reset = () => (el.style.transform = "translate(0,0)");
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);
  return ref;
}

/* ----------------- component ----------------- */

export default function EpicHero() {
  const headline = useScramble("Haileyesus Mesfin");
  const role = useScramble("MERN + Java / Spring Boot");
  const parallaxImg = useParallax(1);
  const magBtn1 = useMagnetic();
  const magBtn2 = useMagnetic();

  // split name into two lines for balance
  const nameParts = useMemo(() => headline.text.split(" "), [headline.text]);
  const first = nameParts.slice(0, 1).join(" ");
  const last = nameParts.slice(1).join(" ");

  return (
    <header id="home" className="epic-hero">
      <div className="epic-bg" aria-hidden="true" />
      <div className="epic-inner">
        {/* LEFT - text block */}
        <div className="epic-text">
          <span
            className="tag reveal"
            onMouseEnter={role.run}
            title="Click or hover to scramble"
          >
            {role.text || "Full-Stack Developer"}
          </span>

          <h1 className="title">
            <span className="title-line gradient-noise" onMouseEnter={headline.run}>
              {first || "Haileyesus"}
            </span>
            <span className="title-line gradient-noise" onMouseEnter={headline.run}>
              {last || "Mesfin"}
            </span>
          </h1>

          <p className="lead reveal" data-delay="1">
            I craft fast, accessible, and beautiful web apps —
            <br />
            <strong>MERN stack</strong> on the front, <strong>Java/Spring Boot</strong> on the back.
          </p>

          <div className="cta-row">
            <div className="magnet-wrap" ref={magBtn1}>
              <a href="#projects" className="btn primary goo">View Projects</a>
            </div>
            <div className="magnet-wrap" ref={magBtn2}>
              <a href="#contact" className="btn ghost">Contact Me</a>
            </div>
          </div>
        </div>

        {/* RIGHT - portrait / blob / orbits */}
        <div className="epic-visual">
          <div className="blob-frame">
            <img
              ref={parallaxImg}
              className="portrait"
              src="/myphoto.jpg"
              alt="Haileyesus"
              loading="eager"
            />
            {/* orbiting chips */}
            <div className="orbit orbit-1">React</div>
            <div className="orbit orbit-2">Node</div>
            <div className="orbit orbit-3">Java</div>
            <div className="orbit orbit-4">Spring</div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-ind" aria-label="Scroll to About">
        <span className="dot" />
      </a>
    </header>
  );
}
