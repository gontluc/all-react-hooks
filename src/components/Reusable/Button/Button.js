import { useEffect, useRef } from 'react'
import './Button.css'

export default function Button({ onClickScript, color="#fff", bgColor="#0D5BE3", borderColor="#032B8C", text, uniqueClass }) {

    const button = useRef(null)

    useEffect(() => {
        button.current.style.setProperty('--btn-color', color)
        button.current.style.setProperty('--btn-bg-color', bgColor)
        button.current.style.setProperty('--btn-border-color', borderColor)
    })

    return (
        <div className={`button ${uniqueClass}`} ref={button} onClick={() => onClickScript()}>
            <code>{text}</code>
        </div>
    )
}