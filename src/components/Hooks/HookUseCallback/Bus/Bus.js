import './Bus.css'

import bus from '../../../../images/bus.png'

import { useEffect } from 'react'

export default function Bus({ childrenSayGo }) {

    useEffect(() => {
        console.log('Rendering Bus')
    }, [childrenSayGo])

    return (
        <div className="images">
            <img src={bus} alt="school bus" />

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