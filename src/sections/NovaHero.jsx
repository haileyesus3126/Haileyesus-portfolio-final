import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import "./NovaHero.css";

const ROLES = [
  "Full-Stack Developer (MERN & Java/Spring Boot)",
  
];

const TECHS = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Java",
  "Spring Boot",
  "MySQL",
  "REST APIs",
];

const MARQUEE_TEXT =
  "HTML • CSS • JavaScript • React • Node • Express • MongoDB • Java • Spring Boot • MySQL • REST APIs •";

// Typewriter hook with cleanup + reduced-motion support
function useTypewriter(words, { pause = 1200, typingSpeed = 60, deletingSpeed = 35, enabled = true } = {}) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) {
      // If motion is reduced, just show the full current role
      setTyped(words[roleIndex]);
      return;
    }

    let timer;
    const full = words[roleIndex];
    const speed = deleting ? deletingSpeed : typingSpeed;

    const step = () => {
      if (!deleting) {
        const next = full.slice(0, typed.length + 1);
        setTyped(next);
        if (next === full) {
          timer = setTimeout(() => setDeleting(true), pause);
        } else {
          timer = setTimeout(step, speed);
        }
      } else {
        const next = full.slice(0, typed.length - 1);
        setTyped(next);
        if (next.length === 0) {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % words.length);
        } else {
          timer = setTimeout(step, speed);
        }
      }
    };

    timer = setTimeout(step, speed);
    return () => clearTimeout(timer);
  }, [typed, deleting, roleIndex, words, pause, typingSpeed, deletingSpeed, enabled]);

  return typed;
}

export default function NovaHero() {
  const prefersReducedMotion = useReducedMotion();
  const typed = useTypewriter(ROLES, { enabled: !prefersReducedMotion });
  const ref = useRef(null);

  // Spotlight cursor
  const handlePointerMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    ref.current.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
  };

  return (
    <header
      id="home"
      className="nova-hero"
      ref={ref}
      onPointerMove={handlePointerMove}
      aria-label="Portfolio hero section"
    >
      <div className="nova-inner">
        {/* LEFT */}
        <div className="nova-text">
          <p className="kicker">Hi, I’m</p>

          <h1 className="name" aria-label="Haileyesus Mesfin">
            <span className="stroke">Haileyesus</span>
            <span className="stroke second">Mesfin</span>
          </h1>

          <p className="role" role="status" aria-live="polite">
            <span className="cursor">{typed}</span>
          </p>

          <p className="blurb">
            I build modern, fast, and accessible web applications with{" "}
            <strong>React</strong>, <strong>Node.js</strong>, and{" "}
            <strong>Java/Spring Boot</strong>. I care about clean code, performance, and real-world impact.
          </p>

          <div className="cta-row">
            <a href="#projects" className="btn primary" aria-label="View my projects">
              View Projects
            </a>
            <a href="#contact" className="btn ghost" aria-label="Contact me">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="nova-visual" aria-hidden="true">
          <div className="ring hollow"></div>
          {TECHS.map((tech, i) => (
            <div key={tech} className={`chip chip-${i + 1}`}>
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="track">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>{MARQUEE_TEXT}</span>
          ))}
        </div>
      </div>
    </header>
  );
}
