import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import type { ProjectItem } from "../types";

type WorkProps = {
  projects: ProjectItem[];
};

export function Work({ projects }: WorkProps) {
  return (
    <section id="work" className="section work-section">
      <Reveal>
        <SectionHeader
          eyebrow="Selected work"
          title="A portfolio shaped around real responsibility."
          description="The work below is framed as case-study evidence from the CV: backend delivery, mentoring, and early product execution."
        />
      </Reveal>
      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal className="project-item" key={project.title} delay={index * 0.05}>
            <div className="project-index">0{index + 1}</div>
            <div>
              <p className="eyebrow">{project.role}</p>
              <h3>{project.title}</h3>
              <p className="project-context">{project.context}</p>
            </div>
            <div className="project-detail">
              <ul>
                {project.contribution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="tech-row">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <p className="outcome">
                <ArrowUpRight size={16} /> {project.outcome}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
