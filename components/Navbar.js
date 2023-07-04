import { useState } from 'react'

import NavbarLogo from './navbar/NavbarLogo'
import NavbarMenuItem from './navbar/NavbarMenuItem'
import NavbarMenuLogout from './navbar/NavbarMenuLogout'


const Navbar = () => {
    const [burgerActive, setBurger] = useState(false)

    const burgerToggle = () => {
        burgerActive ? setBurger(false) : setBurger(true) 
    }

    const isActiveClass = burgerActive ? "is-active" : ""
    const navbarBurgerClasses = `navbar-burger ${isActiveClass}`
    const navbarMenuClasses = `navbar-menu ${isActiveClass}`


    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavbarLogo />
                <a onClick={burgerToggle} role="button" className={navbarBurgerClasses} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true">{burgerActive}</span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className={navbarMenuClasses}>
                <div className="navbar-start">
                    <NavbarMenuItem 
                        url="/"
                        name="Home"
                    />
                    <NavbarMenuItem 
                        url="/accounts"
                        name="Accounts"
                    />
                    <NavbarMenuLogout />
                </div>
            </div>    
        </nav>
    )
}


export default Navbar
