import { useEffect, useRef, useState } from "react";
import "./NovaHero.css";

const ROLES = [
  "MERN Stack Developer",
  "Java & Spring Boot Dev",
  "Frontend Developer",
  "Creative Problem Solver",
];

const MARQUEE_TEXT = `HTML • CSS • JavaScript • React • Node • Express • MongoDB • Java • Spring Boot • MySQL • REST APIs •`;

// ⌨️ Custom Hook for typewriter effect
function useTypewriter(words, pause = 1200, typingSpeed = 60, deletingSpeed = 35) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let frame;
    const full = words[roleIndex];
    const speed = deleting ? deletingSpeed : typingSpeed;

    const step = () => {
      if (!deleting) {
        const next = full.slice(0, typed.length + 1);
        setTyped(next);
        if (next === full) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          frame = setTimeout(step, speed);
        }
      } else {
        const next = full.slice(0, typed.length - 1);
        setTyped(next);
        if (next.length === 0) {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % words.length);
        } else {
          frame = setTimeout(step, speed);
        }
      }
    };

    frame = setTimeout(step, speed);
    return () => clearTimeout(frame);
  }, [typed, deleting, roleIndex, words, pause, typingSpeed, deletingSpeed]);

  return typed;
}

export default function NovaHero() {
  const typed = useTypewriter(ROLES);
  const ref = useRef(null);

  // 🌟 spotlight cursor
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
    >
      <div className="nova-inner">
        {/* LEFT */}
        <div className="nova-text">
          <p className="kicker">Hi, I’m</p>

          <h1 className="name">
            <span className="stroke">Haileyesus</span>
            <span className="stroke second">Mesfin</span>
          </h1>

          <p className="role" aria-live="polite">
            <span className="cursor">{typed}</span>
          </p>

          <p className="blurb">
            I build modern, fast, and accessible web applications with{" "}
            <strong>React</strong>, <strong>Node</strong>, and{" "}
            <strong>Java/Spring Boot</strong>.
          </p>

          <div className="cta-row">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn ghost">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="nova-visual" aria-hidden="true">
          <div className="ring hollow"></div>
          {[, , , , , , , ].map(
            (tech, i) => (
              <div key={i} className={`chip chip-${i + 1}`}>
                {tech}
              </div>
            )
          )}
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="track">
          {Array(4)
            .fill(MARQUEE_TEXT)
            .map((text, i) => (
              <span key={i}>{text}</span>
            ))}
        </div>
      </div>
    </header>
  );
}
