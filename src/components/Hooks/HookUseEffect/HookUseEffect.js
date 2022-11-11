import './HookUseEffect.css'

import green from '../../../images/green.png'
import tongue from '../../../images/tongue.png'

import { useEffect, useState } from 'react'

export default function HookUseEffect() {

    const [timer, setTimer] = useState(0)
    const [rotationNeedle, setRotationNeedle] = useState(0)

    const wait = 4500
    const animationDuration = 500

    useEffect(() => {
        setTimeout(() => {
            if (timer === wait) {
                setTimeout(() => { setTimer(0) }, animationDuration)
            } else {
                setTimer(timer + 10)
            }
        }, 10)

        setRotationNeedle(timer * 360 / wait)
    }, [timer])

    return (
        <section id="useeffect" className='hook'>
            <h2 className="hook-title">useEffect</h2>

            <p className="hook-description">
                The <code className="highlight">useEffect</code> <i>Hook</i> takes a function as its first argument and React will execute it after the DOM has updated and run it every time a certain value changes, in this case our dependency will be our <code className="highlight">timer</code>. In this scenario the tongue of our character Green will shake after the <code className="highlight">timer</code> reaches the number we set as a wait interval between shakes. 
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
                <div className="use-effect-hook">

                    <div className="images">
                        <h3 className='greens-hello'>I'm Green <br /> and <br /> I won't bite you!</h3>
                        <img src={tongue} alt="tongue green rainbow friends" className={`tongue ${timer === wait && 'animate-tongue'}`}/>
                        <img src={green} alt="tongueless green rainbow friends" className='green'/>
                    </div>

                    <div className='clock'>
                        <svg /* className={timer === wait && 'animate-clock'}  */width="236" height="236" viewBox="0 0 236 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="flat-color-icons:alarm-clock">
                                <path id="Vector" d="M189.292 219.283L169.625 199.617L179.95 189.292L199.617 208.958C202.567 211.908 202.567 216.333 199.617 219.283C197.158 221.742 192.242 221.742 189.292 219.283ZM46.7084 219.283L66.3751 199.617L56.0501 189.292L36.3834 208.958C33.4334 211.908 33.4334 216.333 36.3834 219.283C38.8417 221.742 43.7584 221.742 46.7084 219.283Z" fill="#37474F"/>
                                <path id="Vector_2" d="M118 216.333C172.308 216.333 216.333 172.308 216.333 118C216.333 63.692 172.308 19.6666 118 19.6666C63.6918 19.6666 19.6665 63.692 19.6665 118C19.6665 172.308 63.6918 216.333 118 216.333Z" fill="#C62828"/>
                                <path id="Vector_3" d="M118 196.667C161.447 196.667 196.667 161.446 196.667 118C196.667 74.5536 161.447 39.3334 118 39.3334C74.5538 39.3334 39.3335 74.5536 39.3335 118C39.3335 161.446 74.5538 196.667 118 196.667Z" fill="#EEEEEE"/>
                                <path id="needle" d="M74.2218 164.61L71.439 161.827L116.628 116.638L119.411 119.416L74.2218 164.61Z" fill="#E53935" transform={`rotate(${rotationNeedle + 135})`} style={{transformOrigin: 'center'}}/>
                                <path id="Vector_5" d="M113.083 54.0834H122.917V118H113.083V54.0834Z" fill="black"/>
                                <path id="Vector_6" d="M153.818 145.799L145.828 153.793L113.85 121.815L121.845 113.816L153.818 145.799Z" fill="black"/>
                                <path id="Vector_7" d="M118 127.833C123.431 127.833 127.833 123.431 127.833 118C127.833 112.569 123.431 108.167 118 108.167C112.569 108.167 108.167 112.569 108.167 118C108.167 123.431 112.569 127.833 118 127.833Z" fill="black"/>
                                <path id="Vector_8" d="M118 122.917C120.716 122.917 122.917 120.715 122.917 118C122.917 115.285 120.716 113.083 118 113.083C115.285 113.083 113.083 115.285 113.083 118C113.083 120.715 115.285 122.917 118 122.917Z" fill="#C62828"/>
                                <path id="Vector_9" d="M108.167 4.91663H127.833V19.6666H108.167V4.91663ZM218.3 79.65C230.592 62.4416 228.625 38.35 213.383 23.1083C198.142 7.86663 174.05 5.89996 156.842 18.1916L218.3 79.65ZM17.7001 79.65C5.40845 62.4416 7.37512 38.35 22.6168 23.1083C37.8585 7.86663 61.9501 5.89996 79.1585 18.1916L17.7001 79.65V79.65Z" fill="#37474F"/>
                            </g>
                        </svg>
                    </div>
                </div>
                {/* {timer} / {rotationNeedle} */}
            </div>
        </section>
    )
}