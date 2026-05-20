import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-head">
        <span className="section-label">01</span>
        <h2>Introduction</h2>
      </div>
      <div className="about-grid">
        <p className="about-lead">
          {profile.bio}
          <br></br>
          I build end-to-end intelligent systems: modeling, optimization, and machine-learning pipelines, and modern web interfaces and agent orchestration. My academic work centers on multi-agent systems, Riemannian manifolds and partial differential equations; I translate that foundation into reliable AI products and research prototypes.
        </p>
        <ul className="about-facts">
          <li>
            <strong>Research Area and Major</strong>
            <span>{profile.degree}</span>
            <span>Systems Sciences & Artificial Intelligence</span>
          </li>
          <li>
            <strong>Recent Research Interests</strong>
            <span>Partial Differential Equations</span>
            <span>Riemannian Manifolds</span>
            <span>Multi-agent Systems </span>
          </li>
          <li>
            <strong>Engineering Skills</strong>
            <span>Full-stack AI</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
