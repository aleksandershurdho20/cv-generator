import React, { useState } from "react";
import "./Header.scss";
import LanguageSwitcher from "../../LanguageSwitcher/Index";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./HeaderItems";
import Logo from "../../../assets/Logo2.png";
import SideBar from "./MobileMenu/Sidebar";

export default function Index() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={Logo} style={{ width: "40%" }} />
                </NavLink>
                <Bars onClick={handleOpen} />
                <NavMenu>
                    <NavLink to="/" activestyle={{color:" #e74645"}}>
                        Kryefaqja
                    </NavLink>
      
                    <NavLink to="/Krijo" activestyle={{color:" #e74645"}}>
                        Krijo
                    </NavLink>
                    <NavLink to="/Cv/shembuj" activestyle={{color:" #e74645"}}>
                        Shembuj
                    </NavLink>
                    <NavBtnLink to="/auth">Regjistrohu</NavBtnLink>
                </NavMenu>

            </Nav>
            {/* <SideBar open={open} handleOpen={handleOpen} /> */}
        </>
    );
}
