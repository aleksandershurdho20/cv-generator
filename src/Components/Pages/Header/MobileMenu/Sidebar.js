import React from 'react'
import { SidebarContainer, Icon, CloseMobileIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
const Sidebar = ({ handleOpen, open }) => {
    return (
        <SidebarContainer open={open}>
            <Icon>
                <CloseMobileIcon onClick={handleOpen} />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink exact to='/' activeStyle >
                        Kryefaqja
                    </SidebarLink>
                    {/* <SidebarLink onClick={()} activeStyle>
                        RrethNesh
                    </SidebarLink> */}
                    <SidebarLink to="/Krijo" activeStyle>
                        Krijo
                    </SidebarLink>
                    <SidebarLink to="/Cv/shembuj" activeStyle>
                        Shembuj
                    </SidebarLink>

                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/Regjistrohu" activeStyle>Regjistrohu</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar