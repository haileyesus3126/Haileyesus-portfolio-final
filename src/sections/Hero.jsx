import "./Hero.css";

const Hero = () => {
  return (
    <header id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-tag">Full-Stack Developer (MERN & Java/Spring Boot)</p>

          <h1 className="hero-title">
            Hi, I’m <span className="accent">Haileyesus Mesfin</span>.
          </h1>

          <p className="hero-sub">
            I design and build <strong>fast, modern, and user-friendly web applications</strong> 
            using <strong>React, Node.js, MongoDB</strong>, and <strong>Java/Spring Boot</strong>.  
            Passionate about clean code, performance, and real-world solutions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary" aria-label="View my projects">View Projects</a>
            <a href="#contact" className="btn ghost" aria-label="Contact me">Contact Me</a>
          </div>

          {/* Scroll indicator */}
          <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
            <span className="dot" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
