import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import type { PortfolioData } from "../types";

type ProfileProps = {
  data: PortfolioData;
};

export function Profile({ data }: ProfileProps) {
  return (
    <section id="profile" className="section profile-section">
      <Reveal>
        <SectionHeader
          eyebrow="Profile"
          title="Backend engineering with a practical, team-first edge."
          description="Ilkin's CV points to a clear pattern: security-minded backend work, mentoring, strong academic performance, and comfort in high-pressure event environments."
        />
      </Reveal>
      <div className="profile-grid">
        <Reveal className="narrative">
          <p>
            I am a Computer Engineering student at UNEC focused on backend systems that are understandable, secure,
            and dependable. My current work centers on Java, Spring Boot, Spring Security, API protection, testing,
            deployment, and technical documentation.
          </p>
          <p>
            Alongside engineering delivery, I mentor junior backend developers and contribute structured feedback on
            REST API design, Dockerized deployments, documentation, and problem solving. That mix of building and
            teaching keeps my engineering habits clear and practical.
          </p>
        </Reveal>
        <Reveal className="skills-panel" delay={0.08}>
          <h3>Working strengths</h3>
          <div className="skill-cloud">
            {data.skills.professional.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <h3>Languages</h3>
          <div className="language-list">
            {data.skills.languages.map((language) => (
              <p key={language}>{language}</p>
            ))}
          </div>
        </Reveal>
      </div>
      <Reveal className="technical-band">
        {data.skills.technical.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </Reveal>
    </section>
  );
}
