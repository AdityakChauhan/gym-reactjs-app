import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-l from-rose-950 to-slate-950 text-white text-sm:text-base'>
      <Hero />
      <Generator />
      <Workout />
    </main>
  )
}

export default App
