import {Hero} from './components/sections/Hero'
import {About} from './components/sections/About'
import {Skills} from './components/sections/Skills'
import {Navbar} from './components/layout/Navbar'
import {Footer} from './components/layout/Footer'
import {Contact} from './components/sections/Contact'
import {Projects} from './components/sections/Projects'
import {WorkExperience} from './components/sections/WorkExperience'

function App() {
    return (
        <>
            <Navbar/>
            <main>
                <Hero/>
                <About/>
                <WorkExperience/>
                <Projects/>
                <Skills/>
                <Contact/>
            </main>
            <Footer/>
        </>
    )
}

export default App
