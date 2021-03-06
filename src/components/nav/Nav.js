import { useState, useRef, useEffect } from 'react'
import './nav.css'
import logo from '../../images/logo-bookmark.svg'
import logoMB from '../../images/logo-bookmark.png'
import gsap from 'gsap'

function Nav() {
    const hearder = useRef()
    const theList = useRef()
    const themenu = useRef()
    const icons = useRef()
    const [menu, setmenu] = useState(false)
    function menuClick() {
        setmenu(!menu)
    }
    useEffect(() => {
        if (menu) {
            gsap.to(hearder.current, 2,{
                opacity: 0,
                ease: "power2.out",
            })
            gsap.to(theList.current, 0.5 ,{
                opacity: 1,
                y: 30,
                delay: 0.2,
                ease: "power2.out",
            })
            gsap.to(themenu.current, 1 ,{
                opacity: 1,
                ease: "power2.out",
            })
            gsap.to(icons.current,1 ,{
                opacity: 1,
                y: 20,
                delay: 0.8,
                ease: "power2.out",
            })
            document.body.style.overflow = 'hidden'
        } else {
            gsap.to(hearder.current, 2,{
                opacity: 1,
                ease: "power2.out",
            })
            document.body.style.overflow = 'scroll'
        }
    }, [menu])
    return (
        <div className="menu">
            <div ref={hearder} className="nav">
                <img className="nav__logo" src={logo} alt="logo" />
                <ul className="nav__list">
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
                <button className="nav__btn">LogIn</button>
                <img onClick={menuClick} className="nav__hamburger" src="https://img.icons8.com/ios/50/000000/menu.png" alt="menu icon"/>
            </div>
            {menu && <div ref={themenu} className="mob-menu">
            <div className="mob-header">
                <img className="logomb" src={logoMB}alt="logomb" />
                <img className="close" onClick={menuClick} src="https://img.icons8.com/ios/50/ffffff/delete-sign.png" alt="menu close icon"/>
            </div>
                <ul ref={ theList}className="mob-list">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                <li>
                    <button className="mob-nav__btn">LogIn</button>
                </li>
                </ul>
                <div ref={icons} className="mob-icons">
                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png" alt="facebook"/>
                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png" alt="twitter"/>
                </div>
        </div>}
        </div>
    )
}

export default Nav
