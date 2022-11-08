import './Header.css'

import logo from '../../logo.svg';
import arrow from '../../images/arrow-down.png';
import line from '../../images/line.png'

import NavMenu from './NavMenu/NavMenu'

import { useState, useEffect, useRef } from 'react';

export default function Header() {

    // Script for the NavMenu

    const [toggleMenu, setToggleMenu] = useState(false)

    const menu = useRef(null)

    const [height, setHeight] = useState('')

    useEffect(() => {
        /* Script @media(max-width: 1200px) */
        if (window.innerWidth > 1200) {
            /* set 200px */
            setHeight('200')
        } else {
            /* set to 100px */
            setHeight('100')
        }
    }, [])

    useEffect(() => {
        /* Change variable on arrow icon toggle */
        if (toggleMenu) {
            header.current.style.setProperty('--menu-top', `${height}px`)
            console.log('Navigation Menu Toggle: Active')
        } else {
            height && header.current.style.setProperty('--menu-top', `-${height}px`)
            console.log('Navigation Menu Toggle: Hidden')
        }
    }, [toggleMenu, height])

    // Make header smaller on scoll position != (0,0)

    const header = useRef(null)

    useEffect(() => {

        function smallerHeader() {
            if (window.scrollY !== 0) {
                /* header and navbar menu*/
                header.current.style.setProperty('--header-height', '100px')
                header.current.classList.add('smaller')
                menu.current.classList.add('smaller')
                setHeight('100')

                window.removeEventListener("scroll", smallerHeader)
            }
        }

        window.addEventListener("scroll", smallerHeader)
    }, [])

    return (<>
        <div className='header-container' ref={header}>
            <header>
                <div 
                    className="header-content" 
                    onMouseOver={() => setToggleMenu(true)}
                    onClick={() => setToggleMenu(!toggleMenu)}
                >
                    <img src={logo} alt="react logo" className='react-logo'/>
                    <h1>All React <i>Hooks</i></h1>
                    <img 
                        src={arrow} 
                        alt="drop down menu icon" 
                        className='drop-down-icon' 
                        style={{transform: toggleMenu ? 'rotate(180deg)' : 'rotate(0deg)'}}
                    />
                </div>
            </header>

            <NavMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} menu={menu}/>
        </div>

        <img src={line} alt="separation line" className='separation-line1'/>

        <div className="project-description">Using every <p className='react-blue'>React</p> <i>Hook</i> and making a visual representation with UI components using characters from <p className='red'>R</p><p className='orange'>a</p><p className='yellow'>i</p><p className='green'>n</p><p className='blue'>b</p><p className='purple'>o</p><p className='pink'>w</p> Friends since I play it with my little brother</div>

        <img src={line} alt="separation line" className='separation-line2'/>
    </>)
}