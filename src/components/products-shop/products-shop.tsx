import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { theme } from "../../theme.ts";
import { productList } from "./productsList.tsx";
import { LocalGroceryStore } from "@mui/icons-material";
import { Stock, StockValue } from "./products-shop.styles.ts";

export const ProductsShop = () => {
  return (
    <>
      <CssBaseline/>
      <Container sx={{py: 8}}>
        <Grid container spacing={2}>
          {productList.map((product) => (
            <Grid item key={product.id} xs={6} sm={4} md={3}>
              <Card
                sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
              >
                <CardMedia
                  component="div"
                  sx={{pt: '100%'}}
                  image={product.img}
                />
                <CardContent sx={{flexGrow: 1}}>
                  <Typography gutterBottom fontSize={theme["font-size-m"]} fontWeight={"bold"}>
                    {product.name}
                  </Typography>
                  
                  <Typography gutterBottom fontSize={theme["font-size-s"]}>
                    <Stock stock={product.quantity <= 0 ? 'soldOut' : 'inStock'}>
                      {product.quantity <= 0 ? 'sold out' : 'in stock'}
                    </Stock>
                  </Typography>
                  
                  <Grid container display={'flex'} alignItems={'center'} marginTop={2}>
                    <Grid item xs={6}>
                      <CardActions>
                        <Button
                          variant="outlined"
                          startIcon={<LocalGroceryStore/>}
                          size={"small"}
                          disabled={product.quantity <= 0}
                        >
                          add
                        </Button>
                      </CardActions>
                    </Grid>
                    
                    <Grid item xs={6} display={'flex'} justifyContent={"flex-end"}>
                      <Typography fontSize={theme["font-size-m"]} fontWeight={"bold"}>
                        <StockValue stock={product.quantity <= 0 ? 'soldOut' : 'inStock'}>
                          {product.value.toLocaleString(
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
