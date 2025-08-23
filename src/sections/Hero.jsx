import "./Hero.css";

const Hero = () => {
  return (
    <header id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-tag">Full-Stack Developer</p>
          <h1 className="hero-title">
            Hi, I’m <span className="accent">Haileyesus</span>.
          </h1>
          <p className="hero-sub">
            I build fast, modern, and user-friendly web applications with React,
            Node, and Java/Spring.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn ghost">Contact Me</a>
          </div>

          {/* Optional: scroll indicator */}
          <a href="#about" className="scroll-indicator" aria-label="Scroll to About">
            <span className="dot" />
          </a>
        </div>
       
      </div>
    </header>
  );
};

export default Hero;
