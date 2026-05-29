import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import type { TimelineItem } from "../types";

type TimelineProps = {
  experience: TimelineItem[];
  education: TimelineItem[];
  activities: TimelineItem[];
};

function TimelineGroup({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <Reveal className="timeline-group">
      <h3>{title}</h3>
      <div className="timeline-list">
        {items.map((item) => (
          <article className="timeline-item" key={`${item.organization}-${item.title}`}>
            <div>
              <p className="period">{item.period}</p>
              <h4>{item.title}</h4>
              <p className="organization">{item.organization}</p>
            </div>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Reveal>
  );
}

export function Timeline({ experience, education, activities }: TimelineProps) {
  return (
    <section id="experience" className="section timeline-section">
      <Reveal>
        <SectionHeader
          eyebrow="Trajectory"
          title="Academic strength, production practice, and public-facing responsibility."
          description="A compact timeline of the experience, education, and activities documented in the CV."
        />
      </Reveal>
      <div className="timeline-layout">
        <TimelineGroup title="Experience" items={experience} />
        <TimelineGroup title="Education" items={education} />
        <TimelineGroup title="Leadership & Activities" items={activities} />
      </div>
    </section>
  );
}
