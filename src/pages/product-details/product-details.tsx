import Grid2 from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { FavoriteBorder, LocalGroceryStore } from "@mui/icons-material";
import { ProductsStock } from "../../components/products-stock/products-stock.tsx";
import { useParams } from "react-router-dom";
import { ImageBox, ProductDetailsContainer } from "./product-details.styles.ts";
import { Box, Rating } from "@mui/material";
import { theme } from "../../theme.ts";
import { useSelector } from "react-redux";
import { IProduct } from "../../store/products/productSlice.ts";

export const ProductDetails = () => {
  
  const {id} = useParams()
  const productDetails = useSelector((store: any) => {
    return store.products.items?.filter((product: IProduct) => product.id === Number(id))
  })
  
  const handleAddProduct = (id: number) => {
    console.log('id', id)
  };
  
  return (
    <ProductDetailsContainer>
      
      
      {
        productDetails.length
          ? productDetails.map(({id, name, price, img, quantity}: IProduct) => (
            <Grid2 key={id} container>
              <Grid2 xs={12} md={4} position={'relative'}>
                <ImageBox>
                  <img src={img} alt=""/>
                </ImageBox>
              </Grid2>
              
              <Grid2
                xs={12}
                md={4}
                display={'flex'} flexDirection={'column'} justifyContent={'space-between'}
                sx={{marginLeft: {xs: 0, md: theme["spacing-small"]}}}>
                <Box>
                  <h3>{name}</h3>
                  
                  <Rating
                    name="read-only"
                    value={5} readOnly
                    size={'small'}
                  />
                  
                  <ProductsStock quantity={quantity}/>
                </Box>
                
                <Box>
                  <p>{price?.toLocaleString('en-GB', {
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
                        disabled={quantity <= 0}
                        onClick={() => handleAddProduct(productDetails[0].id)}
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
                
                <span>{productDetails[0].description}</span>
              
              </div>
            
            </Grid2>
          
          ))
          : <Grid2> Sorry, no products details at the moment</Grid2>
      }
    
    
    </ProductDetailsContainer>
  );
};
