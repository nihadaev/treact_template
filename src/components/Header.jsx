import { NavLink } from "react-router-dom";
import { useState } from "react";
import './Header.css'
function Header() {
    const [mobile,setMobile] = useState(false)
    return (
        <header >
            <div>
                <NavLink href="#" className='logo'>
                    <img src="https://treact.owaiskhan.me/static/media/logo.2c489fc453a1783cbadacf914efa3df6.svg" alt="" />
                    <span>Treact</span>
                </NavLink>
            </div>
            <ul className={mobile ? 'mobile' : ''}>
                <li>
                    <NavLink>About</NavLink>
                </li>
                <li>
                    <NavLink>Blog</NavLink>
                </li>
                <li>
                    <NavLink>Pricing</NavLink>
                </li>
                <li>
                    <NavLink>Login</NavLink>
                </li>
            </ul>
            <div className="mobile-menu_opener" onClick={() => setMobile(!mobile)}>
                <span className={mobile? "line clicked" : 'line'}>
                </span>
                <span className={mobile? "line clicked" : 'line'}>
                </span>
                <span className={mobile? "line clicked" : 'line'}>
                </span>
            </div>
        </header>
    );
}

export default Header;
