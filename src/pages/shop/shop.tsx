import { ShopContainer } from "./shop.styles.ts";
import comingSoon from '../../assets/img/coming-soon.png'

export const Shop = () => {
  return (
    <ShopContainer>
      <img src={comingSoon} alt="Coming Soon" style={{width: '100%'}}/>
    </ShopContainer>
  );
};
