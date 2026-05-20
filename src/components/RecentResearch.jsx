import { profile } from '../data/profile'
import ResearchFigure from './ResearchFigure'

export default function RecentResearch() {
  return (
    <div className="highlight-list">
      {profile.recentResearch.map((item, index) => (
        <article key={item.title} className="highlight-card reveal-stagger" style={{ '--stagger': `${index * 90}ms` }}>
          <div className="highlight-num">{String(index + 1).padStart(2, '0')}</div>
          <div className="highlight-body">
            <h3 className="highlight-title">{item.title}</h3>
            <p className="highlight-desc">{item.description}</p>
            <div className="figure-grid">
              {item.images.map((fig) => (
                <ResearchFigure key={fig.src} fig={fig} />
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
