import { ShopContainer } from "./shop.styles.ts";
import { CarouselBanner } from "../../components/carousel-banner/carousel-banner.tsx";
import { ProductsShop } from "../../components/products-shop/products-shop.tsx";

export const Shop = () => {
  return (
    <ShopContainer>
      <CarouselBanner/>
      
      <ProductsShop/>
    </ShopContainer>
  );
};
