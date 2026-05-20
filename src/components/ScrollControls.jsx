import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const SECTION_IDS = profile.nav.map((n) => n.id)

export default function ScrollControls() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 280)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const idx = SECTION_IDS.indexOf(visible.target.id)
        if (idx >= 0) setActiveIndex(idx)
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0, 0.2, 0.45] },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToIndex = (index) => {
    const id = SECTION_IDS[index]
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const isHome = activeIndex === 0
  const isLastSection = activeIndex >= SECTION_IDS.length - 1
  const showScrollDown = !isHome && !isLastSection

  const scrollNext = () => {
    if (!showScrollDown) return
    scrollToIndex(activeIndex + 1)
  }

  return (
    <>

      {showTop && (
        <button
          type="button"
          className="back-to-top"
          onClick={() => scrollToIndex(0)}
          aria-label="Back to top"
          title="Back to Home"
        >
          ↑
        </button>
      )}
    </>
  )
}
