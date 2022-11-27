import './HookOther.css'

import trafficLight from '../../../images/traffic-light.png'

import Button from '../../Reusable/Button/Button'
import Bus from './Bus/Bus'

import { useCallback, useState, useEffect } from 'react'

export default function HookOther() {

    const [childrenSayGo, setChildrenSayGo] = useState(false)

    const [translateBus, setTranslateBus] = useState(false)

    const [showBus, setShowBus] = useState(true)

    /* Set childrenSayGo to false after 3s everytime it's toggled */
    useEffect(() => {
        childrenSayGo && setTimeout(() => {
            setChildrenSayGo(false)
        }, 3000)
    }, [activateDialogue])

    /* Set translateBus to false after 3s everytime it's toggled */
    useEffect(() => {
        translateBus && setTimeout(() => {
            setTranslateBus(false)
            setShowBus(false)
        }, 3000)
    }, [moveBus])

    /* useEffect(() => {
        setShowBus(!showBus)
        setShowBus(!showBus)
    }, [rerenderBus]) */

    /* function rerenderBus() {
        console.log('Rendering Bus')
    } */

    function activateDialogue() {
        setChildrenSayGo(true)
        setShowBus(true)
    }

    function moveBus() {
        console.log('Moving bus')
        setTranslateBus(true)
    }

    const goWithCallback = useCallback(() => {
        console.log('Going with Callback')
        moveBus()
    }, [showBus])

    const goWithoutCallback = () => {
        console.log('Going without Callback')
        activateDialogue()
        moveBus()
    }

    return (
        <section id="usecallback" className='hook'>
            <h2 className="hook-title">HookOther</h2>

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
                <div className="other-hook">
                    <img src={trafficLight} alt="traffic light" className='traffic-light-img'/>

                    {showBus && <Bus childrenSayGo={childrenSayGo} translateBus={translateBus} activateDialogue={activateDialogue}/>}

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