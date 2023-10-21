import Grid2 from "@mui/material/Unstable_Grid2";
import { productList } from "../../components/products-shop/productsList.tsx";
import Button from "@mui/material/Button";
import { FavoriteBorder, LocalGroceryStore } from "@mui/icons-material";
import { ProductsStock } from "../../components/products-stock/products-stock.tsx";
import { useParams } from "react-router-dom";
import { ImageBox, ProductDetailsContainer } from "./product-details.styles.ts";
import { Box, Rating } from "@mui/material";
import { theme } from "../../theme.ts";

export const ProductDetails = () => {
  
  const {id} = useParams()
  
  const product = productList.filter(item => item.id === Number(id))
  
  return (
    <ProductDetailsContainer>
      <Grid2 container>
        <Grid2 xs={12} md={4} position={'relative'}>
          <ImageBox>
            <img src={product[0].img} alt=""/>
          </ImageBox>
        </Grid2>
        
        <Grid2
          xs={12}
          md={4}
          display={'flex'} flexDirection={'column'} justifyContent={'space-between'}
          sx={{marginLeft: {xs: 0, md: theme["spacing-small"]}}}>
          <Box>
            <h3>{product[0].name}</h3>
            
            <Rating
              name="read-only"
              value={5} readOnly
              size={'small'}
            />
            
            <ProductsStock quantity={product[0].quantity}/>
          </Box>
          
          <Box>
            <p>{product[0].value.toLocaleString('en-GB', {
              style: "currency",
              currency: "GBP"
            })}
            </p>
          </Box>
          
          <Box
            marginBottom={1}
            sx={{paddingTop: {xs: theme["spacing-regular"]}}}>
            <Grid2 container rowSpacing={2}>
              <Grid2 xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<LocalGroceryStore/>}
                  size={"medium"}
                  disabled={product[0].quantity <= 0}
                >
                  add to bag
                </Button>
              </Grid2>
              
              <Grid2 xs={12}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<FavoriteBorder/>}
                  size={"medium"}
                >
                  add to favourite
                </Button>
              </Grid2>
            </Grid2>
          </Box>
        </Grid2>
        
        <div>
          <p>Description</p>
          
          <span>{product[0].description}</span>
        
        </div>
      
      </Grid2>
    
    
    </ProductDetailsContainer>
  );
};
