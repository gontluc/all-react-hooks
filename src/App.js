import './App.css';

import { useState, createContext, useEffect } from 'react';

import Header from './components/Header/Header'
import HookUseState from './components/Hooks/HookUseState/HookUseState'
import HookUseEffect from './components/Hooks/HookUseEffect/HookUseEffect'
import HookUseContext from './components/Hooks/HookUseContext/HookUseContext'
import Footer from './components/Footer/Footer'

export const GreenContext = createContext()

export default function App() {

  /* useContext Hook Section */
  const [green, setGreen] = useState({
    'eyes': false,
    'mouth': false,
    'hands': false,
    'body': false
  })

  function isCompleted() {
    const greenParts = Object.keys(green)
    let completed = true

    greenParts.forEach((part) => {
        completed = completed & green[part] 
    })

    return completed
  }

  useEffect(() => {
    setCompletedTasks(!!isCompleted())
  }, [green])

  const [completedTasks, setCompletedTasks] = useState(!!isCompleted())

  return (
    <>
      <Header />

      <HookUseState />

      <HookUseEffect />

      <GreenContext.Provider value={{green, setGreen, completedTasks}}>
        <HookUseContext />
      </GreenContext.Provider>

      <Footer />
    </>
  )
}