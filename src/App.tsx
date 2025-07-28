import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Text} from './components/Text'
import {Navbar} from './components/Navbar/Navbar'
import {Hero} from './components/Hero/hero'
import { Kakes } from './components/Cakescollection/Kakes'
import { Creamy } from './components/Creamycollection/Creamy' 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <Kakes/>
     <Creamy/>
     
     
     

     
      </>
  )
}

export default App
