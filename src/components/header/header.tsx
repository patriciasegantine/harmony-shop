import { Navbar } from "../navbar/navbar.tsx";
import logo from "../../assets/img/logo.png"
import { useEffect, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HeaderContainer, HeaderContent, Logo, MobileButton } from "./header.styles.ts";
import { MenuDrawer } from "../menu-drawer/menu-drawer.tsx";

export const Header = () => {
  
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false)
  
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
      </HeaderContent>
      
      <MenuDrawer
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
    
    </HeaderContainer>
  );
};
