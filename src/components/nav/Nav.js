import { useState } from 'react'
import './nav.css'
import logo from '../../images/logo-bookmark.svg'

function Nav() {
    const [menu, setmenu] = useState(false)
    function menuClick() {
        setmenu(!menu)
    }
    return (
        <div className="menu">
            <div className="nav">
                <img className="nav__logo" src={logo} alt="logo" />
                <button className="nav__btn">LogIn</button>
                <img onClick={menuClick} className="nav__hamburger" src="https://img.icons8.com/ios/50/000000/menu.png" alt="icon"/>
            </div>
            {menu && <div className="mob-menu">
            <div className="mob-header">
                <img src={logo} alt="logo" />
                <img onClick={menuClick} src="https://img.icons8.com/ios/50/ffffff/delete-sign.png"/>
            </div>
            <ul className="mob-list">
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>
                    <button className="mob-nav__btn">LogIn</button>
                </li>
            </ul>
        </div>}
        </div>
    )
}

export default Nav
