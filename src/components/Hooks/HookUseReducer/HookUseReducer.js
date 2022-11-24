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
                The <code className="highlight">useReducer</code> <i>Hook</i> is similar to the <code className="highlight">useState</code> <i>Hook</i> but instead of updating the state directly, you dispatch actions that go to a reducer function and this function determines how to compute the next state. We'll be popping ballons in this one. First we create our reducer function <code className="highlight">reducerBallons</code> outside the scope of our component.
            </p>

            <div className="code-snippet"><code>
                <code className="purple">function </code>
                <code className="blue">reducerBallons</code>
                <code className="yellow">(</code>
                state, action
                <code className="yellow">) &#123;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="purple">switch (</code>
                action.
                <code className="red">type</code>
                <code className="purple">) &#123;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="purple">case </code>
                <code className="green">'pop-red'</code>:
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="purple">return </code>
                <code className="blue">&#123;...</code>state,
                <code className="red"> red</code>
                <code className="blue">: </code>
                <code className="orange">false</code>
                <code className="blue">&#125;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="purple">case </code>
                <code className="green">'pop-green'</code>:
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="purple">return </code>
                <code className="blue">&#123;...</code>state,
                <code className="red"> green</code>
                <code className="blue">: </code>
                <code className="orange">false</code>
                <code className="blue">&#125;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="purple">case </code>
                <code className="green">'pop-blue'</code>:
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="purple">return </code>
                <code className="blue">&#123;...</code>state,
                <code className="red"> blue</code>
                <code className="blue">: </code>
                <code className="orange">false</code>
                <code className="blue">&#125;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="purple">case </code>
                <code className="green">'reset'</code>:
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="purple">return </code>
                <code className="blue">&#123;</code>
                <code className="red">red</code>
                <code className="blue">: </code>
                <code className="orange">true</code>,
                <code className="red"> green</code>
                <code className="blue">: </code>
                <code className="orange">true</code>,
                <code className="red"> blue</code>
                <code className="blue">: </code>
                <code className="orange">true</code>
                <code className="blue">&#125;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="purple">default</code>:
                <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <code className="purple">throw new </code>
                <code className="blue">Error()</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="purple">&#125;</code>
                <br />
                <code className="yellow">&#125;</code>
            </code></div>

            <p className="hook-description">
                Then we initialize our ballons' state with <code className="highlight">useReducer</code>. Like <code className="highlight">useState</code> it returns an array of two values. The first one is our state and the second one is a function that can dispatch our action. We pass as arguments of the <i>Hook</i> our reducer function and the initial state of our ballons.
            </p>

            <div className="code-snippet"><code>
                <code className="purple">const </code>
                <code className="yellow">[</code>
                <code className="orange">ballonState</code>,
                <code className="orange"> dispatchBallons</code>
                <code className="yellow">] </code>
                <code className="blue">= useReducer</code>
                <code className="yellow">(</code>reducerBallons, 
                <code className="purple"> &#123;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="green">'red'</code>
                <code className="blue">: </code>
                <code className="orange">true</code>,
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="green">'green'</code>
                <code className="blue">: </code>
                <code className="orange">true</code>,
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="green">'blue'</code>
                <code className="blue">: </code>
                <code className="orange">true</code>
                <br />
                <code className="purple">&#125;</code>
                <code className="yellow">)</code>
            </code></div>

            <p className="hook-description">
                Now, an action is just an object that can have a <code className="highlight">type</code> that can be a string of our choice and an optional payload. In this case we dispatch an action when we click on the ballons.
            </p>

            <div className="code-snippet"><code>
                &#60;
                <code className="red">img</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="orange">draggable</code>=
                <code className="yellow">&#123;</code>
                <code className="orange">false</code>
                <code className="yellow">&#125;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="orange">src</code>=
                <code className="yellow">&#123;</code>redBallon
                <code className="yellow">&#125;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="orange">alt</code>=
                <code className="green">"red ballon"</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="orange">className</code>=
                <code className="yellow">&#123;</code>
                <code className="green">`red-ballon </code>
                <code className="purple">$&#123;</code>!ballonState.
                <code className="red">red </code>&&
                <code className="green"> 'hides'</code>
                <code className="purple">&#125;</code>
                <code className="green">`</code>
                <code className="yellow">&#125;</code>
                <br />
                &emsp;&emsp;&emsp;&emsp;
                <code className="orange">onClick</code>=
                <code className="yellow">&#123;</code>
                <code className="purple">() =&#62; </code>
                <code className="blue">dispatchBallons</code>
                <code className="purple">(</code>
                <code className="blue">&#123;</code>
                <code className="red">type</code>
                <code className="blue">: </code>
                <code className="green">'pop-red'</code>
                <code className="blue">&#125;</code>
                <code className="purple">)</code>
                <code className="yellow">&#125;</code>
                <br />/&#62;
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