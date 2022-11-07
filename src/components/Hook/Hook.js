import './Hook.css'

import { useEffect, useRef } from 'react';

export default function Hook({ hookTitle, hookDescriptionJSX, hookCodeJSX, hookVisualJSX }) {/* hokkTitle for id -> .lowercase and for title */

    const hookDescription = useRef(null)
    const codeVisualized = useRef(null)

    useEffect(() => {
        hookDescription.current.innerHTML = hookDescriptionJSX
        codeVisualized.current.innerHTML = hookVisualJSX
    }, [])

    return (
        <div id={hookTitle.toLowerCase()} className='hook'>
            <h2 className="hook-title">{hookTitle}</h2>
            <p className="hook-description" ref={hookDescription}></p>
            <div className="code-snippet">code(add jsx object)</div>
            <div className="code-visualized" ref={codeVisualized}></div>
        </div>
    )
}