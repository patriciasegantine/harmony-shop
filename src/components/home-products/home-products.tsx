import { RouterEnum } from "../../enum/router-enum.ts";
import { Grid } from "@mui/material";
import { HomeProductBox } from "./home-products.styles.ts";
import { CustomButton } from "../../global.styles.ts";
import { useNavigate } from "react-router-dom";

import productOne from '../../assets/products/product-01.png'
import productTwo from '../../assets/products/product-02.png'
import productThree from '../../assets/products/product-03.png'
import { ProductDescription, ProductTitle } from "../bestseller-products/bestseller-products.styles.ts";

interface IProducts {
  id: number
  name: string
  description: string
  img: string
  value: number
}

const products: IProducts[] = [
  {
    id: 1,
    name: 'Organic Vitamin C Anti-Aging Serum',
    description: ' Reveal your natural radiance with our organic vitamin C anti-aging serum.',
    img: productOne,
    value: 15,
  },
  {
    id: 2,
    name: 'Organic Chamomile Soap',
    description: 'Our organic chamomile soap is a gentle and soothing cleanser for your skin',
    img: productTwo,
    value: 20,
  },
  {
    id: 3,
    name: 'Organic Aloe Vera Serum',
    description: 'Soothes and hydrates the skin, providing relief from irritation and sunburn.',
    img: productThree,
    value: 20,
  },
]

export const HomeProducts = () => {
  
  const navigate = useNavigate()
  
  const handleGoToShop = () => {
    navigate(RouterEnum.shop)
  }
  
  return (
    <Grid container spacing={3}>
      {
        products.map(item => (
          <Grid item xs={4} key={item.id}>
            <HomeProductBox>
              <img src={item.img} alt={item.name}/>
              <ProductTitle>{item.name}</ProductTitle>
              <ProductDescription>{item.description}</ProductDescription>
            </HomeProductBox>
            <CustomButton onClick={handleGoToShop}>SHOP</CustomButton>
          
          </Grid>
        ))
      }
    </Grid>
  
  );
}
