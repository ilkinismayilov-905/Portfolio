import { ArrowDown, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { PortfolioData } from "../types";

type HeroProps = {
  data: PortfolioData;
};

export function Hero({ data }: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero-shell">
      <div className="hero-grid">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hero-copy"
        >
          <p className="eyebrow">{data.person.location}</p>
          <h1>{data.person.name}</h1>
          <p className="hero-headline">{data.person.headline}</p>
          <p className="hero-intro">{data.person.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              View my work <ArrowDown size={18} />
            </a>
            <a className="button secondary" href={`mailto:${data.person.email}`}>
              Contact me <Mail size={18} />
            </a>
          </div>
        </motion.div>
        <motion.aside
          className="hero-panel"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img className="profile-image" src="/assets/ilkin-profile.jpg" alt="Ilkin Ismayilov" />
          <div className="signal-card">
            <span>Current focus</span>
            <strong>Secure Java backend systems</strong>
          </div>
          <div className="highlight-stack">
            {data.highlights.map((highlight) => (
              <p key={highlight}>{highlight}</p>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
