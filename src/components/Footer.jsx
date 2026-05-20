export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p>© {year} Jing-Xiang Lin · Built with React &amp; Vite</p>
    </footer>
  )
}
