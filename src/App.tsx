import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Strength } from "./components/Strength/Strength"
import { Footer } from "./components/Footer/Footer"

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About/>
      <Strength/>
      <Footer/>
    </div>
  )
}