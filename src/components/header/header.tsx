import { Navbar } from "../navbar/navbar.tsx";
import logo from "../../assets/img/logo.png"
import { useEffect, useState } from "react";
import { FlexContainer, HeaderContainer, HeaderContent, Logo } from "./header.styles.ts";
import { MenuDrawer } from "../menu-drawer/menu-drawer.tsx";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Login } from "../login/login.tsx";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { RouterEnum } from "../../enum/router-enum.ts";

export const Header = () => {
  
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false)
  
  const navigate = useNavigate()
  
  const handleGoToHome = () => navigate(RouterEnum.home)
  
  const handleMobileToggle = () => {
    setIsMobileOpen((prevState) => !prevState)
  }
  
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsMenuFixed(true)
    } else {
      setIsMenuFixed(false)
    }
  }
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.addEventListener('scroll', handleScroll)
    }
  }, [])
  
  useEffect(() => {
    if (windowWidth < 768) {
      setShowMenuMobile(true)
    } else {
      setShowMenuMobile(false)
      setIsMobileOpen(false)
    }
  }, [windowWidth])
  
  const handleOpenCartModal = () => {
    console.log('cart is open')
  };
  
  return (
    <HeaderContainer fixed={isMenuFixed ? 'fixed' : 'not-fixed'}>
      <HeaderContent>
        
        {showMenuMobile &&
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMobileToggle}
            color="inherit"
          >
            <MenuIcon/>
          </IconButton>
        }
        
        <Logo onClick={handleGoToHome}>
          <img src={logo} alt="logo"/>
        </Logo>
        
        {
          !showMenuMobile && <Navbar isMobileOpen={isMobileOpen} handleMobileToggle={handleMobileToggle}/>
        }
        
        <FlexContainer>
          <Login/>
          
          <IconButton aria-label="cart" onClick={handleOpenCartModal}>
            <ShoppingCartIcon fontSize={"medium"}/>
          </IconButton>
        
        </FlexContainer>
      
      </HeaderContent>
      
      <MenuDrawer
        isMobileOpen={isMobileOpen}
        handleMobileToggle={handleMobileToggle}
      />
    
    </HeaderContainer>
  );
};
