import { Nav } from "./components/Nav";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Profile } from "./sections/Profile";
import { Timeline } from "./sections/Timeline";
import { Work } from "./sections/Work";
import { portfolio } from "./data/portfolio";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero data={portfolio} />
        <Work projects={portfolio.projects} />
        <Profile data={portfolio} />
        <Timeline experience={portfolio.experience} education={portfolio.education} activities={portfolio.activities} />
        <Contact data={portfolio} />
      </main>
    </>
  );
}
