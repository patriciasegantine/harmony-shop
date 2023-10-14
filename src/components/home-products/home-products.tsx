import { RouterEnum } from "../../enum/router-enum.ts";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../product-card/product-card.tsx";
import { productList } from "../products-shop/productsList.tsx";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { theme } from "../../theme.ts";

export const HomeProducts = () => {
  
  const navigate = useNavigate()
  
  const handleToProductDetails = (id: number | string) => {
    const newId = id.toString()
    navigate(`${RouterEnum.productDetail.replace(':id', newId)}`)
  }
  
  const handleGoToShop = () => {
    navigate(RouterEnum.shop)
  }
  
  const bestSellerProducts = productList.filter(item => item.bestSeller)
  
  return (
    <div>
      <Grid2 container spacing={3}>
        {
          bestSellerProducts.map(product => (
            <Grid2
              xs={12}
              md={4}
              key={product.id}
            >
              <ProductCard
                onClick={() => handleToProductDetails(product.id)}
                name={product.name}
                value={product.value}
                img={product.img}
                quantity={product.quantity}
              />
            </Grid2>
          ))
        }
      </Grid2>
      
      <Grid2
        xs={12}
        display={'flex'}
        justifyContent={'center'}
        mt={2}
      >
        <Button
          onClick={handleGoToShop}
          variant="text"
        >
          <Typography fontSize={theme["font-size-xs"]}>
            Show all products
          </Typography>
        </Button>
      </Grid2>
    </div>
  
  );
}
