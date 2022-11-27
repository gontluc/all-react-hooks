import './Notes.css'

import { useEffect, useState } from 'react'

export default function Notes({ getNotes, notepad, withCallback }) {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        console.log('Rendering Notes and Confetti' + withCallback)
        setNotes(getNotes())
    }, [getNotes])

    return (
        <ul className="notes">
            <img src={notepad} alt="notebook" className='notebook'/>
            <li className="notes-title">Notes with{!withCallback && 'out'} Callback</li>

            {notes.map((note) => {
                return (
                    <li key={note.class} className={note.class}>{note.text}</li>
                )
            })}
        </ul>
    )
}