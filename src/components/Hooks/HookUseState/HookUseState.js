import { useState } from 'react'

import './HookUseState.css'

import mouthless from '../../../images/mouthless.png'
import mouth from '../../../images/mouth.png'

import Button from '../../Reusable/Button/Button'

export default function HookUseState() {

    const [happy, setHappy] = useState(true)

    const [rotationAngle, setRotationAngle] = useState(0)

    function onClickScript() {
        console.log(`Mouth Toggle: ${!happy ? 'Happy' : 'Sad'}`)
        setHappy(!happy)
        !happy && setRotationAngle(rotationAngle + 360)
    }

    return (
        <section id="usestate" className='hook'>
            <h2 className="hook-title">useState</h2>

            <p className="hook-description">
                The purpose of <code className="highlight">useState</code> is to handle reactive data. It re-renders the UI when data changes. We can set the state <code className='highlight'>happy</code> as the mood of our character Blue and use the function <code className='highlight'>setHappy</code> to change the mood when the button is clicked. We initialize the state with a value of <code className="highlight">true</code>.
            </p>

            <div className="code-snippet"><code>
                <code className='purple'>const [</code>
                <code className='orange'>happy</code>,
                <code className='orange'> setHappy</code>
                <code className='purple'>] </code>
                <code className="blue"> = useState</code>
                <code className='purple'>(</code>
                <code className='orange'>true</code>
                <code className='purple'>)</code>
            </code></div>

            <p className="hook-description">
                We handle the button click event with <code className="highlight">setHappy</code> by changing the state of <code className="highlight">happy</code> everytime we click on the button.
            </p>

            <div className="code-snippet"><code>
                &#60;
                <code className='red'>div </code>
                <code className='orange'>className</code>=
                <code className="green">"button" </code>
                <code className="orange">onClick</code>=
                <code className="blue">&#123;</code>
                <code className="yellow">() </code>
                <code className="purple">=&#62; </code>
                <code className="yellow">&#123;</code>
                <br />
                {/* &emsp;&emsp;&emsp;&emsp;console.
                <code className="blue">log</code>
                <code className="purple">(</code>
                <code className="green">`Mouth Toggle: </code>
                <code className="blue">$&#123;</code>!
                <code className="red">happy </code>?
                <code className="green"> 'Happy' </code>:
                <code className="green"> 'Sad' </code>
                <code className="blue">&#125;</code>
                <code className="green">`</code>
                <code className="purple">)</code>
                <br /> */}
                &emsp;&emsp;&emsp;&emsp;
                <code className="blue">setHappy</code>
                <code className="purple">(</code>!
                <code className="red">happy</code>
                <code className="purple">)</code>
                <br />
                <code className="yellow">&#125;</code>
                <code className="blue">&#125;</code>&#62;
            </code></div>

            <div className="code-visualized">
                <div className="use-state-hook">
                    <Button onClickScript={onClickScript} text={"Change my mood"} uniqueClass={"btn1-usestate"}/>
                    
                    <div className="images">
                        <img src={mouth} alt="mouth" className='mouth' style={{transform: happy 
                            ? `rotate(${rotationAngle}deg)`
                            : `rotate(${rotationAngle + 180}deg)`, top: happy
                            ? '125px'
                            : '130px'
                            }}
                        />
                        <img src={mouthless} alt="mouthless blue rainbow friends" className='mouthless'/>
                        <h3 className='blues-mood'>Hi! My name is Blue and I am {happy ? 'Happy :)' : 'Sad :('}</h3>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}