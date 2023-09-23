import { Navbar } from "../navbar/navbar.tsx";
import logo from "../../assets/img/logo.png"
import { useEffect, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FlexContainer, HeaderContainer, HeaderContent, Logo, MobileButton, StyledBadge } from "./header.styles.ts";
import { MenuDrawer } from "../menu-drawer/menu-drawer.tsx";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Login } from "../login/login.tsx";
import { PlusOne } from "@mui/icons-material";

export const Header = () => {
  
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false)
  const [cartQuantity, setCartQuantity] = useState<number>(0)
  
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
  
  return (
    <HeaderContainer fixed={isMenuFixed ? 'fixed' : 'not-fixed'}>
      <HeaderContent>
        <Logo>
          <img src={logo} alt="logo"/>
        </Logo>
        
        <div>
          {
            showMenuMobile
              ? <MobileButton icon={faBars} onClick={handleMobileToggle} size={"xl"}/>
              : <Navbar isMobileOpen={isMobileOpen}/>
          }
        </div>
        
        <FlexContainer>
          <IconButton onClick={() => setCartQuantity(cartQuantity + 1)}>
            <PlusOne fontSize={"medium"}/>
          </IconButton>
          
          <IconButton aria-label="cart">
            <StyledBadge
              badgeContent={cartQuantity}
              color="secondary">
              <ShoppingCartIcon fontSize={"medium"}/>
            </StyledBadge>
          </IconButton>
          
          <Login/>
        
        
        </FlexContainer>
      
      </HeaderContent>
      
      <MenuDrawer
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
    
    </HeaderContainer>
  );
};
