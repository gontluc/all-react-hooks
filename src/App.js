import './App.css';

import Header from './components/Header/Header'
import HookUseState from './components/Hooks/HookUseState/HookUseState'
import HookUseEffect from './components/Hooks/HookUseEffect/HookUseEffect'
import Footer from './components/Footer/Footer'

export default function App() {

  return (
    <>
      <Header />
      <HookUseState />
      <HookUseEffect />
      <Footer />
    </>
  )
}