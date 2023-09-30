import { ShopContainer } from "./shop.styles.ts";
import { CarouselBanner } from "../../components/carousel-banner/carousel-banner.tsx";
import { ProductsShop } from "../../components/products-shop/products-shop.tsx";
import { useEffect, useState } from "react";
import { productList } from "../../components/products-shop/productsList.tsx";
import Pagination from '@mui/material/Pagination';
import { Box } from "@mui/material";
import { theme } from "../../theme.ts";

export const Shop = () => {
  const [section, setSection] = useState<string>('')
  
  const [quantityProducts, setQuantityProducts] = useState<number>(0)
  
  useEffect(() => {
    const products = productList.length
    setQuantityProducts(products)
  }, []);
  
  useEffect(() => {
    setSection('all products')
  }, []);
  
  return (
    <ShopContainer>
      
      <CarouselBanner/>
      
      <Box marginBottom={theme["spacing-small"]}> {section} ({quantityProducts})</Box>
      
      <ProductsShop/>
      
      <Box
        marginTop={theme["spacing-big"]}
        display={'flex'}
        justifyContent={'center'}>
        <Pagination
          count={1}
          color="primary"
          size={"small"}
        />
      </Box>
    
    
    </ShopContainer>
  );
};
