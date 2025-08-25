import "./GlassDeckHero.css";

export default function GlassDeckHero() {
  return (
    <header id="home" className="glass-hero" aria-label="Hero">
      {/* background decorations */}
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-blur orb-a" aria-hidden="true" />
      <div className="bg-blur orb-b" aria-hidden="true" />

      <div className="hero-inner">
        {/* LEFT: headline */}
        <div className="col left">
          <span className="eyebrow">Full-Stack Developer</span>
          <h1 className="headline">
            Haileyesus <span className="accent">Mesfin</span>
          </h1>
          <p className="subtitle">
            I design and build fast, accessible web apps with{" "}
            <strong>React</strong>, <strong>Node.js</strong>,{" "}
            <strong>MongoDB</strong>, and <strong>Java/Spring Boot</strong>.
            I care about clean code, performance, and real-world impact.
          </p>

          <ul className="stats" aria-label="Quick stats">
            <li>
              <span className="num">3+</span>
              <span className="lab">Years Coding</span>
            </li>
            <li>
              <span className="num">7+</span>
              <span className="lab">Projects</span>
            </li>
            <li>
              <span className="num">10+</span>
              <span className="lab">Tech Stack</span>
            </li>
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

        {/* RIGHT: glass cards */}
        <div className="col right" aria-label="Highlights">
          <article className="card accent-border">
            <h2>What I Do</h2>
            <p>
              Full-stack apps, REST APIs, dashboards, and e-commerce — from
              data models to polished UI.
            </p>
            <div className="tags">
              <span>MERN</span><span>Spring Boot</span><span>MySQL</span>
            </div>
          </article>

          <article className="card">
            <h2>Core Skills</h2>
            <ul className="list">
              <li>React · Node.js · Express</li>
              <li>Java · Spring Boot</li>
              <li>MongoDB · MySQL</li>
              <li>REST API Design</li>
            </ul>
          </article>

          <article className="card">
            <h2>Currently Building</h2>
            <p>
              MERN e-commerce (Stripe) and a Spring Boot task manager with
              role-based dashboards.
            </p>
            <a href="#projects" className="link">See details →</a>
          </article>
        </div>
      </div>
    </header>
  );
}
