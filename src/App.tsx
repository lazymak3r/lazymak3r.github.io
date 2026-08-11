import {MotionConfig} from 'framer-motion';

import {Hero} from './components/sections/Hero';
import {About} from './components/sections/About';
import {Skills} from './components/sections/Skills';
import {Navbar} from './components/layout/Navbar';
import {Footer} from './components/layout/Footer';
import {Contact} from './components/sections/Contact';
import {Projects} from './components/sections/Projects';
import {AiSystems} from './components/sections/AiSystems';
import {Hackathons} from './components/sections/Hackathons';
import {WorkExperience} from './components/sections/WorkExperience';
import {SystemExpertise} from './components/sections/SystemExpertise';
import {IgamingExpertise} from './components/sections/IgamingExpertise';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AiSystems />
        <Projects />
        <WorkExperience />
        <Skills />
        <Hackathons />
        <IgamingExpertise />
        <SystemExpertise />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
