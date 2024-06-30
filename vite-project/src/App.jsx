import { useState } from 'react'
import Nav from './components/nav/Nav.jsx'
import Intro from './components/intro/Intro.jsx'
import Treding from './components/treding/Treding.jsx'
import Leaderboard from './components/leaderboard/Leaderboard.jsx'
import Featured  from './components/featured/Featured.jsx'
import Explore from './components/explore/Explore.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
          <Nav/>
          <Intro/>
          <Treding/>
          <Featured/>
          <Leaderboard />
          <Explore />
        </div>
      
    </>
  )
}

export default App
