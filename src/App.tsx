import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/hero'
import { Kakes } from './components/Cakescollection/Kakes'
import { Creamy } from './components/Creamycollection/Creamy'
import { Footer } from './components/Footer/Footer'
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Kakes />
      <Creamy />
      <Footer />
    </>
  )
}

export default App
