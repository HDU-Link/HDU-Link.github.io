import { profile } from '../data/profile'

export default function Publications() {
  return (
    <section id="publications" className="section publications">
      <div className="section-head">
        <span className="section-label">04</span>
        <h2>Publications</h2>
      </div>

      <div className="publication-list">
        {profile.publications.map((paper) => (
          <article key={paper.title} className="publication-card">
            <div className="pub-badge">{paper.venue}</div>
            <h3 className="pub-title">{paper.title}</h3>
            <p className="pub-meta">
              <span>{paper.role}</span>
              <span className="dot" aria-hidden="true" />
              <span>{paper.year}</span>
            </p>

            <div className="pub-block">
              <h4>Abstract</h4>
              <p>{paper.abstract}</p>
            </div>

            <div className="pub-block">
              <h4>Keywords</h4>
              <ul className="keyword-list">
                {paper.keywords.map((kw) => (
                  <li key={kw}>{kw}</li>
                ))}
              </ul>
            </div>

            <div className="pub-links">
              {paper.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="pub-link"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
