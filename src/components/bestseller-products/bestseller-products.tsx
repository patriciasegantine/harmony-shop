import { HomeBlock, HomeDividerHeader, HomeSubtitle, HomeTitle } from '../../pages/home/home.styles.ts'
import { HomeProducts } from "../home-products/home-products.tsx";

export const BestsellerProducts = () => {
  
  return (
    <HomeBlock>
      <HomeDividerHeader>
        <HomeTitle>Our Bestseller Products</HomeTitle>
        <HomeSubtitle>Explore our shop and take home the beauty of nature</HomeSubtitle>
      </HomeDividerHeader>
      
      <HomeProducts/>
    </HomeBlock>
  )
}
