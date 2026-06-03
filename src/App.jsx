import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Workflow from './components/Workflow'
import Features from './components/Features'
import KineSection from './components/KineSection'
import Trust from './components/Trust'
import Privacy from './components/Privacy'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Workflow />
        <Features />
        <KineSection />
        <Trust />
        <Privacy />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  )
}

export default App
