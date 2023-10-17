import { ShopContainer } from "./shop.styles.ts";
import { CarouselBanner } from "../../components/carousel-banner/carousel-banner.tsx";
import { ProductsShop } from "../../components/products-shop/products-shop.tsx";
import Pagination from '@mui/material/Pagination';
import { Box } from "@mui/material";
import { theme } from "../../theme.ts";
import { ProductManager } from "../../components/product-manager/product-manager.tsx";
import { FilterProvider } from "../../context/filter-context.tsx";

export const Shop = () => {
  
  return (
    <FilterProvider>
      <ShopContainer>
        <CarouselBanner/>
        
        <ProductManager/>
        
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
    </FilterProvider>
  );
};
