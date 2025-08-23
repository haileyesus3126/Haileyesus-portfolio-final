import { motion } from "framer-motion";
import "./Projects.css";

// ====== IMPORT IMAGES FROM ASSETS ======
import taskSystem from "../assets/projects/task-system.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
import mernBlog from "../assets/projects/mern-blog.jpg";
import ecommerce from "../assets/projects/ecommerce.jpg";
import inventoryApp from "../assets/projects/inventory-app.jpg";
import socialApp from "../assets/projects/social-app.jpg";
import chatApp from "../assets/projects/chat-app.jpg";

// ====== DATA ======
const PROJECTS = [
  {
    title: "Task Management System",
    desc: "Full-stack app with role-based dashboards, task assignment, file uploads, and progress tracking.",
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    image: taskSystem,
    live: "#",
    code: "https://github.com/yourname/task-management-system",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React, responsive CSS, and smooth animations.",
    tech: ["React", "CSS", "Vite"],
    image: portfolio,
    live: "#",
    code: "https://github.com/yourname/portfolio",
  },
  {
    title: "MERN Blog Platform",
    desc: "Full-stack blog with JWT authentication, CRUD posts, categories, and comments.",
    tech: ["MongoDB", "Express", "React", "Node"],
    image: mernBlog,
    live: "#",
    code: "https://github.com/yourname/mern-blog",
  },
  {
    title: "E-Commerce Website",
    desc: "MERN-based store with cart, wishlist, filters, Stripe checkout, and admin panel.",
    tech: ["MongoDB", "Express", "React", "Node", "Stripe"],
    image: ecommerce,
    live: "#",
    code: "https://github.com/yourname/ecommerce",
  },
  {
    title: "Inventory & Invoice Manager",
    desc: "Business-focused system to manage stock, suppliers, and generate invoices with PDF export.",
    tech: ["Java", "Spring Boot", "MySQL", "React"],
    image: inventoryApp,
    live: "#",
    code: "https://github.com/yourname/inventory-manager",
  },
  {
    title: "Social Media App",
    desc: "MERN social app with user profiles, posts, likes, comments, and real-time chat.",
    tech: ["MongoDB", "Express", "React", "Node", "Socket.io"],
    image: socialApp,
    live: "#",
    code: "https://github.com/yourname/social-media-app",
  },
  {
    title: "Real-Time Chat App",
    desc: "Secure chat app with JWT authentication, private/group chats, and file sharing.",
    tech: ["MongoDB", "Express", "React", "Node", "WebSockets"],
    image: chatApp,
    live: "#",
    code: "https://github.com/yourname/chat-app",
  },
];

// ====== ANIMATION VARIANTS ======
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="projects-title">Projects</h2>
          <p className="projects-lead">
            Selected work across <strong>MERN</strong> and{" "}
            <strong>Java / Spring Boot</strong>.
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.article
              key={p.title + idx}
              className="project-card"
              variants={cardVariants}
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="project-thumb">
                <img src={p.image} alt={p.title} loading="lazy" decoding="async" />
                <span className="badge">{p.tech[0]}</span>
                <span className="shine" />
              </div>

              <div className="project-body">
                <h3 className="project-name">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <ul className="project-tech">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              <div className="project-actions">
                <a
                  className="btn primary"
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  className="btn ghost"
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
