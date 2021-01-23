import React from 'react'
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
export default function Index() {
    return (
        <>
            <Nav>
                <NavLink exact to='/'>
                    <img src={Logo} style={{ width: '40%' }} />
                </NavLink>
                <Bars />
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

        </>


    )
}
