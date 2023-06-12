import React, { useState } from "react";
import "./Header.scss";
import LanguageSwitcher from "../../LanguageSwitcher/Index";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./HeaderItems";
import Logo from "../../../assets/Logo2.png";
import SideBar from "./MobileMenu/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserProfile, logUserOut } from "redux/slices/User";
import useSocket from "hooks/useSocket";

export default function Index() {
  const [open, setOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  // useSocket()
  const handleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  const handleLogout = () => dispatch(logUserOut())
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} style={{ width: "40%" }} />
        </NavLink>
        <Bars onClick={handleOpen} />
        <NavMenu>
          {userInfo ? (
            userInfo.role &&userInfo?.role[0] === "company" ? (
              <>
                <NavLink to="/users/list" activestyle={{ color: " #e74645" }}>
                  Kryefaqja
                </NavLink>
                <NavLink to="/dashboard" activestyle={{ color: " #e74645" }}>
                  Statistika
                </NavLink>

                <NavLink to="/jobs/all" activestyle={{ color: " #e74645" }}>
                  Te gjitha punet
                </NavLink>
                <NavLink to="/applicants" activestyle={{ color: " #e74645" }}>
                  Aplikimet
                </NavLink>
                <NavLink to="/messages" activestyle={{ color: " #e74645" }}>
                  Mesazhet
                </NavLink>
                <NavLink to="/profile" activestyle={{ color: " #e74645" }}>
                  Profili
                </NavLink>
                <a style={{color:"#5f5f79",padding:"0 1rem"}} onClick={handleLogout} >
                  Dil
                </a>
              </>
            ) : (
              <>
                <NavLink to="/jobs/list" activestyle={{ color: " #e74645" }}>
                    Kryefaqja
                </NavLink>
                     <NavLink to="/dashboard" activestyle={{ color: " #e74645" }}>
                  Statistika
                </NavLink>
                <NavLink to="/applicants" activestyle={{ color: " #e74645" }}>
                  Aplikimet
                </NavLink>
                <NavLink to="/messages" activestyle={{ color: " #e74645" }}>
                  Mesazhet
                </NavLink>
                <NavLink to="/jobs/saved" activestyle={{ color: " #e74645" }}>
                  Punet E preferuara
                </NavLink>
                <NavLink to="/profile" activestyle={{ color: " #e74645" }}>
                  Profili
                </NavLink>
                <a style={{color:"#5f5f79",padding:"0 1rem"}} onClick={handleLogout} >
                  Dil
                </a>
              </>
            )
          ) : (
            <>
              <NavLink to="/" activestyle={{ color: " #e74645" }}>
                Kryefaqja
              </NavLink>

              <NavLink to="/Krijo" activestyle={{ color: " #e74645" }}>
                Krijo
              </NavLink>
              <NavLink to="/Cv/shembuj" activestyle={{ color: " #e74645" }}>
                Shembuj
              </NavLink>
              <NavBtnLink to="/auth">Identifikohu</NavBtnLink>
            </>
          )}
        </NavMenu>
      </Nav>
      {/* <SideBar open={open} handleOpen={handleOpen} /> */}
    </>
  );
}
