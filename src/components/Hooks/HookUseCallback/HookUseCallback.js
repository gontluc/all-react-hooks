import './HookUseCallback.css'

import trafficLight from '../../../images/traffic-light.png'

import Button from '../../Reusable/Button/Button'
import Bus from './Bus/Bus'

import { useCallback, useState, useEffect } from 'react'

export default function HookUseCallback() {

    const [childrenSayGo, setChildrenSayGo] = useState(false)

    /* Set childrenSayGo to false after 3s everytime is toggled */
    useEffect(() => {
        childrenSayGo && setTimeout(() => {
            setChildrenSayGo(false)
        }, 3000)
    }, [activateDialogue])

    function activateDialogue() {
        setChildrenSayGo(true)
    }

    function moveBus() {
        console.log('Move bus')
    }

    const goWithCallback = useCallback(() => {
        console.log('Going with Callback')
        moveBus()
    }, [])

    const goWithoutCallback = () => {
        console.log('Going without Callback')
        moveBus()
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
                    <img src={trafficLight} alt="traffic light" />

                    <Bus childrenSayGo={childrenSayGo}/>

                    <div className="btns">
                        <Button onClickScript={activateDialogue} bgColor={"#2FB942"} borderColor={"#089223"} text={"Where are we going?"} uniqueClass={`btn1-usecallback`}/>
                        <Button onClickScript={goWithCallback} text={"Go with callback!"} uniqueClass={`btn2-usecallback`}/>
                        <Button onClickScript={goWithoutCallback} text={"Go without callback!"} uniqueClass={`btn3-usecallback`}/>
                    </div>
                </div>
            </div>
        </section>
    )
}