import { useContext, useState } from 'react'

import './HookUseContext.css'

import eyes from '../../../images/eyes-green.png'
import mouth from '../../../images/mouth-green.png'
import hands from '../../../images/hands-green.png'
import body from '../../../images/body-green.png'
import sketch from '../../../images/drawing.png'

import { GreenContext } from '../../../App'

import Button from '../../Reusable/Button/Button'

export default function HookUseContext() {

    return (
        <section id="usecontext" className='hook'>
            <h2 className="hook-title">useContext</h2>

            <p className="hook-description">
                With <code className="highlight">useContext</code> we can share data throughout multiple disconnected components without passing props to each and every one of them. We create a context with <code className="highlight">createContext</code> that references the object that contains our "moods".
            </p>

            <div className="code-snippet"><code>
                <code className="blue">useEffect</code>
                <code className="purple">(</code>
                <code className="blue">() </code>
                <code className="purple">=&#62; </code>
                <code className="blue">&#123;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="blue">setTimeout</code>
                <code className="yellow">(</code>
                <code className="purple">() =&#62; &#123;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="purple">if </code>
                <code className="blue">(</code>
                <code className="red">timer </code>
                <code className="blue">=== </code>
                <code className="red">wait</code>
                <code className="blue">) &#123;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="blue">setTimeout</code>
                <code className="yellow">(</code>
                <code className="purple">() =&#62; &#123; </code>
                <code className="blue">setTimer(</code>
                <code className="orange">0</code>
                <code className="blue">) </code>
                <code className="purple">&#125;</code>,
                <code className="red"> animationDuration</code>
                <code className="yellow">)</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="blue">&#125; </code>
                <code className="purple">else </code>
                <code className="blue">&#123;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="blue">setTimer</code>
                <code className="yellow">(</code>
                <code className="red">timer </code>
                <code className="blue">+ </code>
                <code className="orange">10</code>
                <code className="yellow">)</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="blue">&#125;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="purple">&#125;</code>,
                <code className="orange"> 10</code>
                <code className="yellow">)</code>
                <br />
                <code className="blue">&#125; </code>,
                <code className="blue">[</code>
                <code className="red">timer</code>
                <code className="blue">]</code>
                <code className="purple">)</code>
            </code></div>

            <p className="hook-description">
                Then we use the context provider <code className="highlight">MoodContext.Provider</code> to scope the "happy mood" <code className="highlight">moods.happy</code> inside of (explain where). Now any child component can inherit that value without passing props to the children.
            </p>

            <div className="code-snippet"><code>
                <code className="blue">useEffect</code>
                <code className="purple">(</code>
                <code className="blue">() </code>
                <code className="purple">=&#62; </code>
                <code className="blue">&#123;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="blue">setTimeout</code>
                <code className="yellow">(</code>
                <code className="purple">() =&#62; &#123;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="purple">if </code>
                <code className="blue">(</code>
                <code className="red">timer </code>
                <code className="blue">=== </code>
                <code className="red">wait</code>
                <code className="blue">) &#123;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="blue">setTimeout</code>
                <code className="yellow">(</code>
                <code className="purple">() =&#62; &#123; </code>
                <code className="blue">setTimer(</code>
                <code className="orange">0</code>
                <code className="blue">) </code>
                <code className="purple">&#125;</code>,
                <code className="red"> animationDuration</code>
                <code className="yellow">)</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="blue">&#125; </code>
                <code className="purple">else </code>
                <code className="blue">&#123;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="blue">setTimer</code>
                <code className="yellow">(</code>
                <code className="red">timer </code>
                <code className="blue">+ </code>
                <code className="orange">10</code>
                <code className="yellow">)</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="blue">&#125;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="purple">&#125;</code>,
                <code className="orange"> 10</code>
                <code className="yellow">)</code>
                <br />
                <code className="blue">&#125; </code>,
                <code className="blue">[</code>
                <code className="red">timer</code>
                <code className="blue">]</code>
                <code className="purple">)</code>
            </code></div>

            <p className="hook-description">
                The <code className="highlight">useContext</code> <i>Hook</i> allows us to access the <code className="highlight">value</code> from the context provider. In this case we want our character AAAAA to... 
            </p>

            <div className="code-snippet"><code>
                <code className="blue">useEffect</code>
                <code className="purple">(</code>
                <code className="blue">() </code>
                <code className="purple">=&#62; </code>
                <code className="blue">&#123;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="blue">setTimeout</code>
                <code className="yellow">(</code>
                <code className="purple">() =&#62; &#123;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="purple">if </code>
                <code className="blue">(</code>
                <code className="red">timer </code>
                <code className="blue">=== </code>
                <code className="red">wait</code>
                <code className="blue">) &#123;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="blue">setTimeout</code>
                <code className="yellow">(</code>
                <code className="purple">() =&#62; &#123; </code>
                <code className="blue">setTimer(</code>
                <code className="orange">0</code>
                <code className="blue">) </code>
                <code className="purple">&#125;</code>,
                <code className="red"> animationDuration</code>
                <code className="yellow">)</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="blue">&#125; </code>
                <code className="purple">else </code>
                <code className="blue">&#123;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="blue">setTimer</code>
                <code className="yellow">(</code>
                <code className="red">timer </code>
                <code className="blue">+ </code>
                <code className="orange">10</code>
                <code className="yellow">)</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="blue">&#125;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="purple">&#125;</code>,
                <code className="orange"> 10</code>
                <code className="yellow">)</code>
                <br />
                <code className="blue">&#125; </code>,
                <code className="blue">[</code>
                <code className="red">timer</code>
                <code className="blue">]</code>
                <code className="purple">)</code>
            </code></div>

            <div className="code-visualized">
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

    return (
        <div className='objectives-drawing' onClick={() => {
            /* setGreen({...green, eyes: !green.eyes})
            setGreen({...green, mouth: !green.mouth})
            setGreen({...green, hands: !green.hands})
            setGreen({...green, body: !green.body}) */
            setGreen({eyes: !green.eyes, mouth: !green.mouth, hands: !green.hands, body: !green.body})
            console.log(green)
        }}>
            <ul>
                <li className={`objective ${green.eyes ? 'green-objective' : 'red-objective'}`}>Eyes are <strong className={green.eyes ? 'remove' : ''}>NOT</strong> painted</li>
                <li className={`objective ${green.mouth ? 'green-objective' : 'red-objective'}`}>Mouth is <strong className={green.mouth ? 'remove' : ''}>NOT</strong> painted</li>
                <li className={`objective ${green.hands ? 'green-objective' : 'red-objective'}`}>Hands are <strong className={green.hands ? 'remove' : ''}>NOT</strong> painted</li>
                <li className={`objective ${green.body ? 'green-objective' : 'red-objective'}`}>Body is <strong className={green.body ? 'remove' : ''}>NOT</strong> painted</li>
            </ul>
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
            console.log(typeof selectedPaint)
            setGreen({...green, /* bug here */selectedPaint/*  */: !green[selectedPaint]})/*  */
            console.log(green)
        }
    }

    return (
        <div className="drawing-choice-container">
            <select name="drawing-selection" id="drawing-choices" defaultValue={"default"} onChange={(e) => {setSelectedPaint(e.target.value)}}>
                <option value="default" disabled hidden>Select</option>
                <option value="eyes">Eyes</option>
                <option value="mouth">Mouth</option>
                <option value="hands">Hands</option>
                <option value="body">Body</option>
            </select>

            <Button onClickScript={onClickScript} color={"#fff"} bgColor={"#2FB942"} borderColor={"#089223"} text={"Paint"}/>
        </div>
    )
}
