import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { theme } from "../../theme.ts";
import { ContainerDrawer, LogoContainer } from "./menu-drawer.styles.ts";
import { Navbar } from "../navbar/navbar.tsx";
import logo from '../../assets/img/logo.png'

interface MenuDrawer {
  
  isMobileOpen: boolean
  handleMobileToggle: () => void
}

export const MenuDrawer: React.FC<MenuDrawer> = ({isMobileOpen, handleMobileToggle}) => {
  
  return (
    
    <Drawer
      anchor={'left'}
      open={isMobileOpen}
      onClose={handleMobileToggle}
      
      PaperProps={{
        sx: {
          backgroundColor: theme["background-color"],
          backdropFilter: 'blur(20px)',
          boxShadow: theme["shadow-primary"]
        }
      }}
    >
      <ContainerDrawer>
        <LogoContainer>
          <img
            src={logo}
            alt="logo"
            style={{width: '120px'}}
          />
        </LogoContainer>
        
        <Navbar handleMobileToggle={handleMobileToggle} isMobileOpen={isMobileOpen}/>
      </ContainerDrawer>
    </Drawer>
  
  );
}
