import { productList } from "./productsList.tsx";
import { useNavigate } from "react-router-dom";
import { RouterEnum } from "../../enum/router-enum.ts";
import { ProductCard } from "../product-card/product-card.tsx";
import Grid2 from "@mui/material/Unstable_Grid2";

export const ProductsShop = () => {
  const navigate = useNavigate()
  
  const handleToProductDetails = (id: number | string) => {
    const newId = id.toString()
    navigate(`${RouterEnum.productDetail.replace(':id', newId)}`)
  }
  
  return (
    <>
      <Grid2 container spacing={2}>
        {productList.map((product) => (
          <Grid2 key={product.id} xs={6} sm={4} md={4}>
            <ProductCard
              onClick={() => handleToProductDetails(product.id)}
              name={product.name}
              value={product.value}
              img={product.img}
              quantity={product.quantity}
            />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}
