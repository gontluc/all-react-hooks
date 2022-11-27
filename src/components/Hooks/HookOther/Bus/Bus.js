import './Bus.css'

import bus from '../../../../images/bus.png'

import { useEffect } from 'react'

export default function Bus({ childrenSayGo, translateBus, activateDialogue }) {

    useEffect(() => {
        console.log('Rendered Bus')
        activateDialogue()
    }, [])

    return (
        <div className="images" style={{ transform: translateBus ? 'translateX(-2000px)' : 'translateX(0px)'}}>
            <img src={bus} alt="school bus" className="bus-img"/>

            {childrenSayGo && 
                <div className="lets-go-container">
                    <h3 className="lets-go">To Odd World !</h3>
                    <h3 className="triangle1"></h3>
                    <h3 className="triangle2"></h3>
                    <h3 className="triangle3"></h3>
                </div>
            }
        </div>
    )
}