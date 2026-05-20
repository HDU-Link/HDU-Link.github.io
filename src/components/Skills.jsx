import { profile } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-head">
        <span className="section-label">02</span>
        <h2>Tech Stack</h2>
      </div>
      <ul className="tech-grid">
        {profile.techStack.map((tech) => (
          <li key={tech.name}>
            <a
              href={tech.href}
              className="tech-card"
              target="_blank"
              rel="noreferrer"
              title={`Visit ${tech.name}`}
            >
              <img src={tech.icon} alt="" className="tech-logo" width={48} height={48} loading="lazy" />
              <span>{tech.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
