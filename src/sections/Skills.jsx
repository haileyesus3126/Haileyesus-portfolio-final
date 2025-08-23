import { useEffect } from "react";
import "./Skills.css";

const SKILLS = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "Java", "Spring Boot"],
  Database: ["MongoDB", "MySQL"],
  "Tools & Others": ["Git", "GitHub", "VS Code", "Postman", "REST APIs"],
};

export default function Skills() {
  // reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll(".sk-reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // tiny tilt
  const onTilt = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const py = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    card.style.setProperty("--rx", `${(py * 4).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${(-px * 4).toFixed(2)}deg`);
  };
  const resetTilt = (e) => {
    const c = e.currentTarget;
    c.style.setProperty("--rx", `0deg`);
    c.style.setProperty("--ry", `0deg`);
  };

  return (
    <section id="skills" className="skills" aria-label="Skills">
      <div className="skills-inner" onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        e.currentTarget.style.setProperty("--spot-x", `${x}px`);
        e.currentTarget.style.setProperty("--spot-y", `${y}px`);
      }}>
        <h2 className="skills-title">Skills</h2>
        <p className="skills-lead">
          A snapshot of the technologies I work with as a{" "}
          <strong>MERN stack</strong> and <strong>Java / Spring Boot</strong> developer.
        </p>

        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, items], i) => (
            <article
              key={category}
              className="skills-card sk-reveal"
              style={{ "--i": i }}
              onMouseMove={onTilt}
              onMouseLeave={resetTilt}
            >
              <h3 className="skills-head">{category}</h3>
              <ul className="skills-list">
                {items.map((skill) => (
                  <li key={skill} className="chip" title={skill}>
                    <span className="dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* toolbelt marquee */}
        <div className="skills-marquee" aria-hidden="true">
          <div className="track">
            <span>HTML • CSS • JavaScript • React • Node • Express • MongoDB • Java • Spring Boot • MySQL • Git • Postman • REST APIs •</span>
            <span>HTML • CSS • JavaScript • React • Node • Express • MongoDB • Java • Spring Boot • MySQL • Git • Postman • REST APIs •</span>
          </div>
        </div>
      </div>
    </section>
  );
}
