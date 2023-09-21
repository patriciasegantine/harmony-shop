import { HeaderNavbar, LinkName, NavLinkComponent } from "./navbar.styles.ts";
import React, { useState } from "react";
import { faBagShopping, faEnvelope, faHouseChimneyWindow } from "@fortawesome/free-solid-svg-icons";
import { faDiscourse, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RouterEnum } from "../../enum/router-enum.ts";

export type LinksType = "home" | "about" | "courses" | "shop" | "contact" | string

interface NaveBar {
  isMobileOpen: boolean
}

interface Links {
  name: string
  icon: IconDefinition
  router: string
  
}

export const Navbar: React.FC<NaveBar> = ({isMobileOpen}) => {
  const [active, setActive] = useState<LinksType>('home')
  
  const handleLink = (linkType: string) => {
    setActive(linkType)
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
  
  return (
    <HeaderNavbar type={isMobileOpen ? 'mobile' : 'desktop'}>
      {
        links.map(item =>
          (
            <NavLinkComponent
              to={item.router}
              key={item.name}
              active={active === item.name}
              onClick={() => handleLink(item.name)}
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
