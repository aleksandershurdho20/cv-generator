import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
export const Nav = styled.nav`
  background: white;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0px 39px;

//   padding: 0.5rem calc((100vw - 1000px) / 2);
  box-shadow:0 5px 20px 0 rgba(11,7,110,.04)
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #5f5f79;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #e74645;
  }
`;

export const Bars = styled(MenuIcon)`
display: none;
color: #fff;
@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
  color:#5f5f79;
}

`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
  display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
  display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #e74645;
padding: 10px 22px;
color: #fff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
}

`;
export const MobileNavMenu = styled.div`

display:flex;
flex-direction:column;
width:100%;
height:100%;
position:absolute;
top:80px;
left:-100px;
opacity:1;
transition:all 0.5s ease;

`