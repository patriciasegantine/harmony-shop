import { RouterEnum } from "../../enum/router-enum.ts";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../product-card/product-card.tsx";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { theme } from "../../theme.ts";
import { IProduct } from "../../store/products/productSlice.ts";
import * as ProductsSelector from "../../store/products/products-selector.ts";
import { useSelector } from "react-redux";
import { IProductsMockList, productsMockList } from "../products-shop/productsList.tsx";

export const HomeProducts = () => {
  
  const bestSellerProducts = useSelector(ProductsSelector.bestSellerProducts)
  
  const navigate = useNavigate()
  
  const handleToProductDetails = (id: number | string) => {
    const newId = id.toString()
    navigate(`${RouterEnum.productDetail.replace(':id', newId)}`)
  }
  
  const handleGoToShop = () => navigate(RouterEnum.shop)
  
  return (
    <div>
      <Grid2 container spacing={3}>
        {
          bestSellerProducts?.length
            ? bestSellerProducts.map(({id, name, price, img, quantity}: IProduct) => (
              <Grid2
                xs={12}
                md={4}
                key={id}
              >
                <ProductCard
                  onClick={() => handleToProductDetails(id)}
                  name={name}
                  value={price}
                  img={img}
                  quantity={quantity}
                />
              </Grid2>
            ))
            : productsMockList
              .filter(item => item.bestSeller)
              .map(({id, name, price, img, quantity}: IProductsMockList) => (
                <Grid2
                  xs={12}
                  md={4}
                  key={id}
                >
                  <ProductCard
                    onClick={() => handleToProductDetails(id)}
                    name={name}
                    value={price}
                    img={img}
                    quantity={quantity}
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
