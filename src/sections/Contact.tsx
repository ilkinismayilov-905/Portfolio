import { Linkedin, Mail, MapPin } from "lucide-react";
import { Reveal } from "../components/Reveal";
import type { PortfolioData } from "../types";

type ContactProps = {
  data: PortfolioData;
};

export function Contact({ data }: ContactProps) {
  return (
    <section id="contact" className="contact-section">
      <Reveal className="contact-card">
        <p className="eyebrow">Contact</p>
        <h2>Open to focused backend, internship, and technology roles.</h2>
        <p>
          For recruitment, collaboration, or technical conversations, email is the cleanest starting point. CV download
          is intentionally withheld until public publication is approved.
        </p>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${data.person.email}`}>
            <Mail size={18} /> {data.person.email}
          </a>
          <a className="button secondary" href={data.person.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
        <div className="location-line">
          <MapPin size={17} /> {data.person.location}
        </div>
      </Reveal>
      <footer>
        <span>{data.person.name}</span>
        <span>Java Backend Portfolio</span>
      </footer>
    </section>
  );
}
