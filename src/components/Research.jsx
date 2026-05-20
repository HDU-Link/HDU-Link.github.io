import { profile } from '../data/profile'
import RecentResearch from './RecentResearch'

export default function Research() {
  return (
    <section id="research" className="section research">
      <div className="section-head">
        <span className="section-label">03</span>
        <h2>Recent research</h2>
      </div>

      <RecentResearch />
    </section>
  )
}
