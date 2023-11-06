import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { ProductSort } from "../product-sort/product-sort.tsx";
import { ProductFilter } from "../product-filter/product-filter.tsx";
import { Box } from "@mui/material";
import { theme } from "../../theme.ts";
import { useSelector } from "react-redux";
import * as ProductsSelector from "../../store/products/products-selector.ts";

interface IProductSearch {
}

export const ProductManager: React.FC<IProductSearch> = () => {
  
  const [section, setSection] = useState<string>('')
  
  const [quantityProducts, setQuantityProducts] = useState<number>(0)
  
  const allProducts = useSelector(ProductsSelector.allProducts)
  
  useEffect(() => {
    setQuantityProducts(allProducts?.length)
  }, [allProducts]);
  
  useEffect(() => {
    setSection('all products')
  }, []);
  
  const ResponsiveButtonStyle = {
    width: {
      xs: '200px',
      md: '150px'
    },
    background: {
      xs: theme["color-highlight"],
      md: theme["color-neutral-light"]
    },
    margin: theme["spacing-extra-small"]
  }
  
  return (
    <div>
      <Grid container marginBottom={2} sx={{flexDirection: {xs: 'column-reverse', md: 'row'}}}>
        
        <Grid xs={12} md={6} display={'flex'} sx={{justifyContent: {xs: 'center', md: 'flex-start'}}}>
          <Box marginBottom={theme["spacing-small"]}> {section} ({quantityProducts})</Box>
        </Grid>
        
        <Grid xs={12} md={6} gap={'10px'} display={'flex'} sx={{justifyContent: {xs: 'center', md: 'flex-end'}}}>
          <Grid container>
            <Grid>
              <ProductSort ResponsiveButtonStyle={ResponsiveButtonStyle}/>
            </Grid>
            
            <Grid>
              <ProductFilter ResponsiveButtonStyle={ResponsiveButtonStyle}/>
            </Grid>
          </Grid>
        </Grid>
      
      
      </Grid>
    </div>
  );
};
