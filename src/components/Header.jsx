import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = profile.nav.map((n) => document.getElementById(n.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
        <img src={profile.avatar} alt="" className="logo-avatar" width={36} height={36} />
        <span className="logo-text">{profile.name}</span>
      </a>
      <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        <ul>
          {profile.nav.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={active === item.id ? 'active' : ''}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
