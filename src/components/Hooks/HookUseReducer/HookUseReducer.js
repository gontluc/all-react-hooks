import './HookUseReducer.css'

import { useEffect, useReducer, useState } from 'react'

import redBallon from '../../../images/ballon-red.png'
import blueBallon from '../../../images/ballon-blue.png'
import greenBallon from '../../../images/ballon-green.png'
import pow1 from '../../../images/pow1.png'
import pow2 from '../../../images/pow2.png'
import pow3 from '../../../images/pow3.png'

import Button from '../../Reusable/Button/Button'

function reducerBallons(state, action) {
    switch (action.type) {
        case 'pop-red':
            console.log('Popped red ballon')
            return {...state, red: false}

        case 'pop-green':
            console.log('Popped green ballon')
            return {...state, green: false}

        case 'pop-blue':
            console.log('Popped blue ballon')
            return {...state, blue: false}

        case 'reset':
            console.log('Ballons resetted')
            return {red: true, green: true, blue: true}

        default:
            throw new Error()
    }
}

export default function HookUseReducer() {

    const [ballonState, dispatchBallons] = useReducer(reducerBallons, {
        'red': true,
        'green': true,
        'blue': true
    })

    const [allBallonsPopped, setAllBallonsPopped] = useState(false)

    function allPopped() {
        const ballonStates = Object.keys(ballonState)
        let popped = false
    
        ballonStates.forEach((ballon) => {
            popped = popped | ballonState[ballon] 
        })
    
        return !popped
    }

    useEffect(() => {
       setAllBallonsPopped(!!allPopped())
    }, [ballonState])

    function resetBallons() {
        dispatchBallons({type: 'reset'})
    }

    return (
        <section id="usereducer" className='hook'>
            <h2 className="hook-title">useReducer</h2>

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
                <div className="use-reducer-hook">
                    <h2 className="visual-title">Click to pop the ballons</h2>

                    <div className="images">
                        <div className="img-container">
                            <img draggable={false} src={redBallon} alt="red ballon" className={`red-ballon ${!ballonState.red && 'hides'}`} onClick={() => dispatchBallons({type: 'pop-red'})}/>
                            <img draggable={false} src={pow1} alt="pow ballon" className={`pow ${ballonState.red && 'remove'}`}/>
                        </div>

                        <div className="img-container">
                            <img draggable={false} src={greenBallon} alt="green ballon" className={`green-ballon ${!ballonState.green && 'hides'}`} onClick={() => dispatchBallons({type: 'pop-green'})}/>
                            <img draggable={false} src={pow2} alt="boom ballon" className={`pow ${ballonState.green && 'remove'}`}/>
                        </div>

                        <div className="img-container">
                            <img draggable={false} src={blueBallon} alt="blue ballon" className={`blue-ballon ${!ballonState.blue && 'hides'}`} onClick={() => dispatchBallons({type: 'pop-blue'})}/>
                            <img draggable={false} src={pow3} alt="bang ballon" className={`pow ${ballonState.blue && 'remove'}`}/>
                        </div>
                    </div>

                    <Button onClickScript={resetBallons} text={"Again!"} uniqueClass={`btn1-usereducer ${!allBallonsPopped && 'hides'}`}/>
                </div>
            </div>
        </section>
    )
}