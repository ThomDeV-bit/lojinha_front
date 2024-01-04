import { useState } from 'react'
import './App.css'
import LoginScreen from './modules/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LoginScreen></LoginScreen>
    </div>
  )
}

export default App
