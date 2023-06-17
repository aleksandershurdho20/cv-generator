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
                    <SidebarLink  to='/' activestyle={{color:" #e74645"}} onClick={handleOpen} >
                        Kryefaqja
                    </SidebarLink>
           
                    <SidebarLink to="/auth" activestyle={{color:" #e74645"}} onClick={handleOpen}>
                        Identifikohu
                    </SidebarLink>
                    {/* <SidebarLink to="/Cv/shembuj" activestyle={{color:" #e74645"}}>
                        Shembuj
                    </SidebarLink> */}

                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to="/Regjistrohu" activestyle={{color:" #e74645"}}>Regjistrohu</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar