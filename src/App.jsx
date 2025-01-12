import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SpeechToText from './components/speechTotext'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <SpeechToText/>
    </>
  )
}

export default App
