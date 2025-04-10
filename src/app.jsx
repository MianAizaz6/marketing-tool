import { useState } from 'preact/hooks'
import './app.css'
import LandingPage from './pages/home'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />
    </>
  )
}
