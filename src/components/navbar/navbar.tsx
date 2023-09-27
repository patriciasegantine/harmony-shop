import { HeaderNavbar, LinkName, NavLinkComponent } from "./navbar.styles.ts";
import React, { useEffect, useState } from "react";
import { faBagShopping, faEnvelope, faHouseChimneyWindow } from "@fortawesome/free-solid-svg-icons";
import { faDiscourse, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RouterEnum } from "../../enum/router-enum.ts";
import { useLocation } from "react-router-dom";

export type LinksType = "home" | "about" | "courses" | "shop" | "contact" | string

interface NaveBar {
  isMobileOpen: boolean
  handleMobileToggle: () => void
}

interface Links {
  name: string
  icon: IconDefinition
  router: string
}

const links: Links[] = [
  {
    name: 'home',
    icon: faHouseChimneyWindow,
    router: RouterEnum.home
  },
  {
    name: 'courses',
    icon: faDiscourse,
    router: RouterEnum.courses
  },
  {
    name: 'shop',
    icon: faBagShopping,
    router: RouterEnum.shop
  },
  {
    name: 'contact',
    icon: faEnvelope,
    router: RouterEnum.contact
  },
]

export const Navbar: React.FC<NaveBar> = ({isMobileOpen, handleMobileToggle}) => {
  const [active, setActive] = useState<string>(RouterEnum.home)
  
  const {pathname} = useLocation()
  
  const handleLink = () => {
    if (isMobileOpen) handleMobileToggle()
  }
  
  useEffect(() => {
    setActive(pathname)
  }, [pathname]);
  
  return (
    <HeaderNavbar type={isMobileOpen ? 'mobile' : 'desktop'}>
      {
        links.map(item =>
          (
            <NavLinkComponent
              to={item.router}
              key={item.name}
              active={active === item.router ? 'active' : 'inactive'}
              onClick={handleLink}
            >
              {
                isMobileOpen && (
                  <FontAwesomeIcon icon={item.icon} size={'lg'}/>
                )}
              <LinkName>{item.name}</LinkName>
            </NavLinkComponent>
          ))
      }
    </HeaderNavbar>
  );
};
