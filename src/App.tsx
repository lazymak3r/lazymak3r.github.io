import {Hero} from './components/sections/Hero'
import {About} from './components/sections/About'
import {Skills} from './components/sections/Skills'
import {Navbar} from './components/layout/Navbar'
import {Footer} from './components/layout/Footer'
import {Contact} from './components/sections/Contact'
import {Projects} from './components/sections/Projects'
import {CrashGame} from './components/sections/CrashGame'
import {Hackathons} from './components/sections/Hackathons'
import {WorkExperience} from './components/sections/WorkExperience'
import {SystemExpertise} from './components/sections/SystemExpertise'
import {IgamingExpertise} from './components/sections/IgamingExpertise'

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <WorkExperience/>
        <Projects/>
        <Hackathons/>
        <Skills/>
        <IgamingExpertise/>
        <SystemExpertise/>
        <CrashGame/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
