import React, { useState } from 'react'
import "./Header.scss"
import LanguageSwitcher from "../../LanguageSwitcher/Index"
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './HeaderItems';
import Logo from "../../../assets/Logo2.png"
import SideBar from './MobileMenu/Sidebar'

export default function Index() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <>
            <Nav>
                <NavLink exact to='/'>
                    <img src={Logo} style={{ width: '40%' }} />
                </NavLink>
                <Bars onClick={handleOpen} />
                <NavMenu>
                    <NavLink exact to='/' activeStyle>
                        Kryefaqja
          </NavLink>
                    <NavLink to='/RrethNesh' activeStyle>
                        Rreth Nesh
          </NavLink>
                    <NavLink to='/Krijo' activeStyle>
                        Krijo
          </NavLink>
                    <NavLink to='/Shembuj' activeStyle>
                        Shembuj
          </NavLink>
                    {/* Second Nav */}
                    <NavBtnLink to='/Regjistrohu'>Regjistrohu</NavBtnLink>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn> */}
            </Nav>
            <SideBar open={open} handleOpen={handleOpen} />

        </>


    )
}
