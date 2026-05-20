import { useEffect, useState } from 'react'

function isGifSrc(url) {
  return /\.gif(\?|$)/i.test(url.split('?')[0])
}

export default function ResearchFigure({ fig }) {
  const [src, setSrc] = useState(fig.src)
  const isGif = isGifSrc(fig.src)
  const baseSrc = fig.src.split('?')[0]

  useEffect(() => {
    if (!isGif || fig.forceLoop === false) return undefined

    const restart = () => setSrc(`${baseSrc}?r=${Date.now()}`)

    const period = (fig.loopSeconds ?? 5) * 1000
    const id = window.setInterval(restart, period)
    return () => window.clearInterval(id)
  }, [baseSrc, isGif, fig.forceLoop, fig.loopSeconds])

  return (
    <figure className="research-figure">
      <img src={src} alt={fig.caption} loading="lazy" />
    </figure>
  )
}
