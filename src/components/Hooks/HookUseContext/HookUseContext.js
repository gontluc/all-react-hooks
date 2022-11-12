import { useContext, useState } from 'react'

import './HookUseContext.css'

import eyes from '../../../images/eyes-green.png'
import mouth from '../../../images/mouth-green.png'
import hands from '../../../images/hands-green.png'
import body from '../../../images/body-green.png'
import sketch from '../../../images/drawing.png'
import stand from '../../../images/drawing-stand.png'

import { GreenContext } from '../../../App'

import Button from '../../Reusable/Button/Button'

export default function HookUseContext() {

    return (
        <section id="usecontext" className='hook'>
            <h2 className="hook-title">useContext</h2>

            <p className="hook-description">
                With <code className="highlight">useContext</code> we can share data throughout multiple disconnected components without passing props to each and every one of them. In this example we will paint our character Green. We start by creating a context with <code className="highlight">createContext</code> outside of the scope of <code className="highlight">App.js</code>.
            </p>

            <div className="code-snippet"><code>
                <code className="purple">export const </code>
                <code className="orange">GreenContext </code>
                <code className="blue">= createContext</code>
                <code className="yellow">()</code>
            </code></div>

            <p className="hook-description">
                Then we use the context provider <code className="highlight">GreenContext.Provider</code> to scope an object that contains our tasks <code className="highlight">green</code>, a function to set our tasks <code className="highlight">setGreen</code> and a function to check if our tasks are completed <code className="highlight">completedTasks</code>. Now any child component can inherit that value without passing props to the children.
            </p>

            <div className="code-snippet"><code>
                <code className="purple">return (</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&#60;
                <code className="yellow">GreenContext.Provider </code>
                <code className="orange">value</code>=
                <code className="blue">&#123;</code>
                <code className="yellow">&#123;</code>
                <code className="red">green</code>,
                <code className="red"> setGreen</code>,
                <code className="red"> completedTasks</code>
                <code className="yellow">&#125;</code>
                <code className="blue">&#125;</code>&#62;
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#60;/
                <code className="yellow">HookUseContext </code>
                &#62;
                <br />
                &emsp;&emsp;&emsp;&emsp;&#60;/
                <code className="yellow">GreenContext.Provider </code>
                &#62;
            </code></div>

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
                <h2 className="use-context-hook-title">Let's paint Green!</h2>
                <div className="use-context-hook">
                    <ObjectivesDrawing />
                    <Drawing />
                    <DrawingChoice />
                </div>
            </div>
        </section>
    )
}

function ObjectivesDrawing() {

    const {green, setGreen} = useContext(GreenContext)

    function onClickScript() {
        setGreen({eyes: false, mouth: false, hands: false, body: false})
        console.log('Reseted Green drawing')
    }

    return (
        <div className='objectives-drawing'>
            <ul>
                <li className={`objective ${green.eyes ? 'green-objective' : 'red-objective'}`}>Eyes are <strong className={green.eyes ? 'remove' : ''}>NOT</strong> painted</li>
                <li className={`objective ${green.mouth ? 'green-objective' : 'red-objective'}`}>Mouth is <strong className={green.mouth ? 'remove' : ''}>NOT</strong> painted</li>
                <li className={`objective ${green.hands ? 'green-objective' : 'red-objective'}`}>Hands are <strong className={green.hands ? 'remove' : ''}>NOT</strong> painted</li>
                <li className={`objective ${green.body ? 'green-objective' : 'red-objective'}`}>Body is <strong className={green.body ? 'remove' : ''}>NOT</strong> painted</li>
            </ul>

            <Button onClickScript={onClickScript} text={"Reset"} uniqueClass={"btn3-usecontext"}/>
        </div>
    )
}

function Drawing() {

    const {green, completedTasks} = useContext(GreenContext)

    return (
        <div className="images">
            {green.eyes && <img src={eyes} alt="eyes green" className='eyes-green'/>}
            {green.mouth && <img src={mouth} alt="mouth green" className='mouth-green'/>}
            {green.hands && <img src={hands} alt="hands green" className='hands-green'/>}
            {green.body && <img src={body} alt="body green" className='body-green'/>}

            <img src={sketch} alt="sketch green" className={`sketch-green ${completedTasks && 'hiden'}`}/>

            <img src={stand} alt="drawing stand" className="drawing-stand"/>

            { completedTasks && <h1 className="completed-text">Completed!</h1>}
        </div>
    )
}

function DrawingChoice() {

    const {green, setGreen} = useContext(GreenContext)

    const [selectedPaint, setSelectedPaint] = useState(null)

    function onClickScript() {
        if (selectedPaint === null) {
            alert('Please select something to draw')
        } else {
            setGreen({...green, [selectedPaint]: !green[selectedPaint]})
        }
    }

    return (
        <div className="drawing-choice-container">
            <select name="drawing-selection" id="drawing-choices" defaultValue={"default"} onChange={(e) => {setSelectedPaint(e.target.value)}}>
                <option value="default" disabled hidden>Select here</option>
                <option value="eyes">Eyes</option>
                <option value="mouth">Mouth</option>
                <option value="hands">Hands</option>
                <option value="body">Body</option>
            </select>

            {!selectedPaint | !green[selectedPaint] 
                ? <Button onClickScript={onClickScript} color={"#fff"} bgColor={"#2FB942"} borderColor={"#089223"} text={"Paint"} uniqueClass={"btn1-usecontext"}/>
                : <Button onClickScript={onClickScript} color={"#fff"} bgColor={"#ec665f"} borderColor={"#BB3730"} text={"Erase"} uniqueClass={"btn2-usecontext"}/>
            }
        </div>
    )
}
