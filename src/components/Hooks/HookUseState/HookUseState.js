import { useState } from 'react'

import './HookUseState.css'

import mouthless from '../../../images/mouthless.png'
import mouth from '../../../images/mouth.png'

export default function HookUseState() {

    const [happy, setHappy] = useState(true)

    const [rotationAngle, setRotationAngle] = useState(0)

    return (
        <section id="usestate" className='hook'>
            <h2 className="hook-title">useState</h2>

            <p className="hook-description">
                We can use this Hook to represent the state <code className='highlight'>happy</code> of a component and a function to set the state <code className='highlight'>setHappy</code>.
            </p>

            <div className="code-snippet">code(add jsx object)</div>

            <div className="code-visualized">
                <div className="use-state-hook">
                    <div 
                        className="button" 
                        onClick={() => {
                            console.log(`Mouth Toggle: ${!happy ? 'Happy' : 'Sad'}`)
                            setHappy(!happy)
                            !happy && setRotationAngle(rotationAngle + 360)
                        }}
                    >
                        <code>Change my mood</code>
                    </div>
                    
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