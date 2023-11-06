import React from 'react';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { theme } from "../../theme.ts";
import Grid from "@mui/material/Grid";
import { StockValue } from "../products-shop/products-shop.styles.ts";
import Card from "@mui/material/Card";
import { ProductsStock } from "../products-stock/products-stock.tsx";
import { Box } from "@mui/material";

interface IProductCard {
  onClick: () => void
  img: string
  name: string
  quantity: number
  value: number
}

export const ProductCard: React.FC<IProductCard> = ({onClick, img, name, quantity, value}) => {
  return (
    <Box position={'relative'}>
      <Card
        sx={{height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer'}}
      >
        <CardMedia
          component="div"
          sx={{pt: '100%'}}
          image={img}
          onClick={onClick}
        />
        {/*<Favourite/>*/}
        
        <CardContent sx={{flexGrow: 1}} onClick={onClick}>
          <Typography gutterBottom fontSize={theme["font-size-m"]}>
            {name}
          </Typography>
          
          
          <Grid container display={'flex'} alignItems={'center'} marginTop={2}>
            <Grid item xs={6}>
              <Typography gutterBottom fontSize={theme["font-size-s"]}>
                <ProductsStock quantity={quantity}/>
              </Typography>
            
            </Grid>
            
            <Grid item xs={6} display={'flex'} justifyContent={"flex-end"}>
              <Typography fontSize={theme["font-size-m"]} fontWeight={"bold"}>
                <StockValue stock={quantity <= 0 ? 'soldOut' : 'inStock'}>
                  {value?.toLocaleString(
                    'en-GB', {
                      style: "currency",
                      currency: "GBP"
                    }
                  )}
                </StockValue>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
