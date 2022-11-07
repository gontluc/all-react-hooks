import { useEffect } from 'react';

import './App.css';

import Header from './components/Header/Header'
import Hook from './components/Hook/Hook'

export default function App() {

  // useState
  const HookUseState = {
    'title': "useState",
    'descriptionJSX': "We can use this Hook to represent a state of a component <code>useState</code>.",
    'visualJSX': `
      <div className="use-state-hook" style="width:100%;height:300px;margin: 100px 0;background-color: rgb(222, 222, 222);">
        <div className="button" style="color: #fff;background-color: blue;padding: 5px 10px;">Button</div>
      </div>`
  }

  return (
    <>
      <Header />
      <Hook  
        hookTitle={HookUseState.title} 
        hookDescriptionJSX={HookUseState.descriptionJSX} 
        /* hookCodeJSX={} */
        hookVisualJSX={HookUseState.visualJSX}
      />
    </>
  )
}