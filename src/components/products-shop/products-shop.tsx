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
import { LocalGroceryStore } from '@mui/icons-material';

export const ProductsShop = () => {
  return (
    <>
      <CssBaseline/>
      <Container sx={{py: 8}}>
        <Grid container spacing={2}>
          {productList.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
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
                  
                  <Typography gutterBottom textTransform={"uppercase"} fontSize={theme["font-size-xs"]}>
                    {product.section}
                  </Typography>
                  
                  <Typography>
                    This is a media card. You can use this section to describe the
                    content.
                  </Typography>
                  
                  
                  <Grid container display={'flex'} alignItems={'center'}>
                    <Grid item xs={6}>
                      <CardActions>
                        <Button variant="outlined" startIcon={<LocalGroceryStore/>} size={"small"}>
                          add
                        </Button>
                      </CardActions>
                    </Grid>
                    
                    <Grid item xs={6} display={'flex'} justifyContent={"flex-end"}>
                      <Typography fontSize={theme["font-size-m"]} fontWeight={"bold"} p={1}>
                        {product.value.toLocaleString(
                          'en-GB', {
                            style: "currency",
                            currency: "GBP"
                          }
                        )}
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
