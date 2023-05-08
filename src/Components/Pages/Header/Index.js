import React, { useState } from "react";
import "./Header.scss";
import LanguageSwitcher from "../../LanguageSwitcher/Index";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./HeaderItems";
import Logo from "../../../assets/Logo2.png";
import SideBar from "./MobileMenu/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserProfile } from "redux/slices/User";

export default function Index() {
    const [open, setOpen] = useState(false);
    const {userInfo}= useSelector((state) => state.userSlice);
    console.log(userInfo,'userInfo')
    const dispatch = useDispatch()
    const handleOpen = () => {
        setOpen(!open);
    };
    useEffect(()=>{
        dispatch(getUserProfile())
    },[])



    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={Logo} style={{ width: "40%" }} />
                </NavLink>
                <Bars onClick={handleOpen} />
                <NavMenu>
                    {userInfo ? userInfo.role[0] === "company" ? <>
                    <NavLink to="/dashboard" activestyle={{color:" #e74645"}}>
                        Kryefaqja
                    </NavLink>
                    
                    <NavLink to="/jobs/all" activestyle={{color:" #e74645"}}>
                        Te gjitha punet
                    </NavLink>
                    <NavLink to="/applicants" activestyle={{color:" #e74645"}}>
                        Aplikimet
                    </NavLink>
                    <NavLink to="/messages" activestyle={{color:" #e74645"}}>
                    Mesazhet
                </NavLink>
                <NavLink to="/profile" activestyle={{color:" #e74645"}}>
                    Profili
                </NavLink>
                    </> : 
                    <>
                        <NavLink to="/jobs/list" activestyle={{color:" #e74645"}}>
                        Te gjitha punet
                    </NavLink>
                    <NavLink to="/applicants" activestyle={{color:" #e74645"}}>
                    Aplikimet
                </NavLink>
                <NavLink to="/messages" activestyle={{color:" #e74645"}}>
                    Mesazhet
                </NavLink>

                <NavLink to="/profile" activestyle={{color:" #e74645"}}>
                    Profili
                </NavLink>
                    
                    </>
                    
                    : <>
                    
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
                    </> }
                    
                </NavMenu>

            </Nav>
            {/* <SideBar open={open} handleOpen={handleOpen} /> */}
        </>
    );
}
