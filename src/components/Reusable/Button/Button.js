import { useEffect, useRef } from 'react'
import './Button.css'

export default function Button({ onClickScript, color, bgColor, borderColor, text, uniqueID }) {

    const button = useRef(null)

    useEffect(() => {
        button.current.style.setProperty('--btn-color', color)
        button.current.style.setProperty('--btn-bg-color', bgColor)
        button.current.style.setProperty('--btn-border-color', borderColor)
    })

    return (
        <div className={`button ${uniqueID}`} ref={button} onClick={() => onClickScript()}>
            <code>{text}</code>
        </div>
    )
}