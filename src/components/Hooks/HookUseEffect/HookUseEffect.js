import './HookUseEffect.css'

import green from '../../../images/green.png'
import tongue from '../../../images/tongue.png'

import { useEffect, useState } from 'react'

export default function HookUseEffect() {

    const [timer, setTimer] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if (timer === 2000) {
                setTimeout(() => {
                    setTimer(0)
                }, [500])
            } else {
                setTimer(timer + 10)
            }
        }, 10)
    }, [timer])

    return (
        <section id="useeffect" className='hook'>
            <h2 className="hook-title">useEffect</h2>

            <p className="hook-description">
                The purpose of <code className="highlight">useState</code> is to handle reactive data. It re-renders the UI when data changes. We can set the state <code className='highlight'>happy</code> as the mood of our character Blue and use the function <code className='highlight'>setHappy</code> to change the mood when the button is clicked. We initialize the value with <code className="highlight">true</code> being the first state.
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

            <div className="code-visualized">
                <div className="use-effect-hook">
                    <h3 className='greens-hello'>I'm Green <br /> and <br /> I won't bite!</h3>

                    <div className="images">
                        <img src={tongue} alt="tongue green rainbow friends" className='tongue'/>
                        <img src={green} alt="tongueless green rainbow friends" className='green'/>
                    </div>

                    <div className="clock">
                        {timer}
                    </div>
                </div>
            </div>
        </section>
    )
}