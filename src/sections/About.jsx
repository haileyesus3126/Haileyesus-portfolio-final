import "./About.css";
import { motion, useReducedMotion } from "framer-motion";

const STATS = [
  { num: "3+", label: "Years Coding" },      // was 2+, aligned to your CV
  { num: "7+", label: "Projects" },
  { num: "10+", label: "Tech Stack" },
];

const listParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  const leftInitial = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -80, scale: 0.9 };
  const rightInitial = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 80 };
  const leftWhileInView = prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 };
  const rightWhileInView = prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 };

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-aurora" aria-hidden="true" />
      <div className="about-inner">
        {/* LEFT: Photo + ring */}
        <motion.div
          className="about-visual"
          initial={leftInitial}
          whileInView={leftWhileInView}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <figure className="about-ring">
            <img
              src="/myphoto.jpg"
              alt="Haileyesus Mesfin — Junior Full-Stack Developer (MERN & Java/Spring Boot) and Data Assistant"
              className="about-portrait"
              width="560"
              height="560"
              decoding="async"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption className="sr-only">Portrait of Haileyesus Mesfin</figcaption>
          </figure>
        </motion.div>

        {/* RIGHT: Text */}
        <motion.div
          className="about-text"
          initial={rightInitial}
          whileInView={rightWhileInView}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="about-title" id="about-title">About Me</h2>

          <p className="about-lead">
            I’m <strong>Haileyesus</strong>, a <strong>Full-Stack Developer</strong> (MERN &amp; Java/Spring Boot)
            and <strong>Data Assistant</strong> who loves building modern, accessible, and user-friendly web apps.
            I work with <strong>MongoDB, Express.js, React.js, Node.js</strong>, and also
            <strong> Java</strong>/<strong>Spring Boot</strong>, plus core <strong>HTML, CSS, JavaScript</strong>.
            I care about clean code, performance, and real business impact.
          </p>

          {/* Quick stats */}
          <motion.ul
            className="about-stats"
            initial="hidden"
            whileInView="visible"
            variants={prefersReducedMotion ? undefined : listParent}
            viewport={{ once: true }}
            aria-label="Personal statistics"
          >
            {STATS.map((stat) => (
              <motion.li
                key={stat.label}
                variants={prefersReducedMotion ? undefined : listItem}
                transition={{ duration: 0.6 }}
              >
                <span className="num" aria-hidden="true">{stat.num}</span>
                <span className="label">{stat.label}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Details list */}
          <ul className="about-list">
            <li><span>Location:</span> Addis Ababa, Ethiopia</li>
            <li><span>Focus:</span> MERN stack, Java/Spring Boot, REST APIs</li>
            <li><span>Databases:</span> MongoDB, MySQL</li>
            <li><span>Interests:</span> UI/UX, performance optimization, clean code</li>
            <li><span>Currently:</span> E-commerce (MERN + Stripe) and Task Manager (Spring Boot + Thymeleaf)</li>
          </ul>

          <div className="about-actions">
            <a className="btn primary" href="#projects">See Projects</a>
            <a
              className="btn ghost"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open CV as PDF in a new tab"
              download
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
