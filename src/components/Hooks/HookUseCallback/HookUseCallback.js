import './HookUseCallback.css'

import Button from '../../Reusable/Button/Button'

import Notes from './Notes/Notes'

import { useCallback, useState } from 'react'

import notepad1 from '../../../images/n1.png'
import notepad2 from '../../../images/n2.jpg'
import notepad3 from '../../../images/n3.png'
import notepad4 from '../../../images/n4.png'

export default function HookUseCallback() {

    const allNotes = [
        {
            'text': 'Blue is hungry',
            'class': 'blue-note'
        },
        {
            'text': 'Green is blind',
            'class': 'green-note'
        },
        {
            'text': 'Orange is fast',
            'class': 'orange-note'
        },
        {
            'text': 'Purple is hiding',
            'class': 'purple-note'
        }
    ]

    const allNotepads = [notepad1, notepad2, notepad3, notepad4]

    const [notes, setNotes] = useState([])

    const [notepad, setNotepad] = useState(notepad1)

    function changeNotepad() {
        console.log('Changed Notepad')

        const notepadIndex = () => {
            let index = allNotepads.indexOf(notepad) + 1

            if (index === allNotepads.length) {
                index = 0
            }

            return index 
        }

        setNotepad(allNotepads[notepadIndex()])
    }

    function addNote() {
        console.log('Added note')
        setNotes(allNotes.slice(0, notes.length + 1))
    }

    function resetNotes() {
        console.log('Resetted notes')
        setNotes([])
    }

    const getNoteswithCallback = useCallback(() => {
        console.log('Getting notes with Callback')
        return notes
    }, [notes])

    function getNoteswithoutCallback() {
        console.log('Getting notes without Callback')
        return notes
    }

    return (
        <section id="usecallback" className='hook'>
            <h2 className="hook-title">useCallback</h2>

            <p className="hook-description">
                The <code className="highlight">useContext</code> <i>Hook</i> allows us to access the <code className="highlight">value</code> in this case <code className="highlight">&#123;green, setGreen, completedTasks&#125;</code> from the context provider. 
            </p>

            <div className="code-snippet"><code>
                <code className="purple">const &#123;</code>
                <code className="orange">green</code>,
                <code className="orange"> setGreen</code>,
                <code className="orange"> completedTasks</code>
                <code className="purple">&#125; </code>
                <code className="blue">= useContext</code>
                <code className="purple">(</code>GreenContext
                <code className="purple">)</code>
            </code></div>

            <div className="code-visualized">
                <div className="use-callback-hook">

                    <Notes getNotes={getNoteswithCallback} notepad={notepad} withCallback={true}/>
                    <Notes getNotes={getNoteswithoutCallback} notepad={notepad} withCallback={false}/>

                    <div className="btns">
                        <Button onClickScript={changeNotepad} bgColor={"#2FB942"} borderColor={"#089223"} text={"Change Notepad"} uniqueClass={`btn1-usecallback`}/>
                        <Button onClickScript={addNote} text={"Add Note"} uniqueClass={`btn2-usecallback`}/>
                        <Button onClickScript={resetNotes} bgColor={"#ec665f"} borderColor={"#BB3730"} text={"Reset Notes"} uniqueClass={`btn3-usecallback`}/>
                    </div>
                </div>
            </div>
        </section>
    )
}