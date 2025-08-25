import { useEffect, useRef } from "react";
import "./AuroraHero.css";

export default function AuroraHero() {
  const ref = useRef(null);

  // subtle spotlight follows cursor
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", move);
    return () => el.removeEventListener("pointermove", move);
  }, []);

  return (
    <header id="home" className="aurora-hero" ref={ref} aria-label="Hero">
      <div className="aurora-bg" aria-hidden="true" />
      <div className="aurora-inner">
        {/* LEFT */}
        <div className="aurora-left">
          <p className="kicker">Full-Stack Developer</p>
          <h1 className="title">
            Hi, I’m <span className="accent">Haileyesus Mesfin</span>
          </h1>
          <p className="sub">
            I craft fast, accessible web apps using <strong>React</strong>,{" "}
            <strong>Node.js</strong>, <strong>MongoDB</strong>, and{" "}
            <strong>Java/Spring Boot</strong>.
          </p>

          <ul className="pills" aria-label="Key skills">
            <li>Performance</li>
            <li>Clean Code</li>
            <li>REST APIs</li>
            <li>MySQL & MongoDB</li>
          </ul>

          <div className="actions">
            <a href="#projects" className="btn primary" aria-label="View my projects">
              View Projects
            </a>
            <a href="#contact" className="btn ghost" aria-label="Contact me">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="aurora-right" aria-hidden="true">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="card">
            <img
              src="/myphoto.jpg"
              alt=""
              className="photo"
              width="420"
              height="420"
              loading="eager"
              decoding="async"
            />
            <div className="chip-row">
              <span className="chip">MERN</span>
              <span className="chip">Spring Boot</span>
              <span className="chip">TypeScript/JS</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll" aria-label="Scroll to About">
        <span />
      </a>
    </header>
  );
}
