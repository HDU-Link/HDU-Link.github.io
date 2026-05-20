import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-badge">Full-Stack · AI · Mathematics</div>
        <h1 className="hero-title">
          Hi, I&apos;m <span className="highlight">{profile.name}</span>
        </h1>
        <p className="hero-role">{profile.title}</p>
        <p className="hero-degree">{profile.degree}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#research" className="btn btn-primary">
            View Research
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="avatar-ring">
          <img src={profile.avatar} alt="" className="avatar-img" width={200} height={200} />
        </div>
        <div className="orbit orbit-1" aria-hidden="true" />
        <div className="orbit orbit-2" aria-hidden="true" />
      </div>
    </section>
  )
}
