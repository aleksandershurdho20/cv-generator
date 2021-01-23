import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import { NavLink as LinkR } from 'react-router-dom';

export const SidebarContainer = styled.aside`
position:fixed;
z-index:999;
width:100%;
height:100%
background:red !important;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity: ${({ open }) => (open ? '100%' : '0')};
top:${({ open }) => (open ? '0' : '-100%')}

`;

export const CloseMobileIcon = styled(CloseIcon)`
color:#e74645;
`;

export const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
outline:none;
cursor:pointer;
`;


export const SidebarWrapper = styled.div`
color:#e74645;
background:#FFF;
height:100%;

`;

export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(6,80px);
text-align:center;
@media screen and (max-width : 480px){
    grid-template-rows:repeat(6,60px);
}
`
export const SidebarLink = styled(LinkR)`
display:flex;
align-items:center;
justify-content:center;
// font-size:1.5rem;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;
color: #5f5f79;
cursor:pointer;
&:hover{
    color:red;
    transition:0.2s ease-in-out;
}
&.active {
    color: #e74645;
  }

`;

export const SideBtnWrap = styled.div`
display:flex;
justify-content:center;

`;
export const SidebarRoute = styled(LinkR)`
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

