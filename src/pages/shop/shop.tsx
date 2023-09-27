import { ShopContainer } from "./shop.styles.ts";
import comingSoon from '../../assets/img/coming-soon.png'
import { useEffect } from "react";

export const Shop = () => {
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  }, []);
  
  return (
    <ShopContainer>
      <img src={comingSoon} alt="Coming Soon" style={{width: '100%'}}/>
    </ShopContainer>
  );
};
