import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Research from './components/Research'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollControls from './components/ScrollControls'
import Reveal from './components/Reveal'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <ScrollControls />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Research />
        </Reveal>
        <Reveal>
          <Publications />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
