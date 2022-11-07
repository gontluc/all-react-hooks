import './NavMenu.css'

export default function NavMenu({ setToggleMenu, menu }) {
    return (
        <nav onClick={() => setToggleMenu(false)} ref={menu}>
            <a href="#usestate"><code className='nav-link'>useState</code></a>
            <a href="#"><code className='nav-link'>useEffect</code></a>
            <a href="#"><code className='nav-link'>useContext</code></a>
            <a href="#"><code className='nav-link'>useReducer</code></a>
            <a href="#"><code className='nav-link'>useCallback</code></a>
            <a href="#"><code className='nav-link'>useMemo</code></a>
            <a href="#"><code className='nav-link'>useRef</code></a>
            <a href="#"><code className='nav-link'>useImperativeHandle</code></a>
            <a href="#"><code className='nav-link'>useLayoutEffect</code></a>
            <a href="#"><code className='nav-link'>useDebugValue</code></a>
            <a href="#"><code className='nav-link'>useDefferedValue</code></a>
            <a href="#"><code className='nav-link'>useTransition</code></a>
            <a href="#"><code className='nav-link'>useId</code></a>
        </nav>
    )
}