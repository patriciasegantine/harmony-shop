import { useNavigate } from "react-router-dom";
import { RouterEnum } from "../../enum/router-enum.ts";
import { ProductCard } from "../product-card/product-card.tsx";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useSelector } from "react-redux";
import * as ProductsSelector from '../../store/products/products-selector.ts'
import { IProduct } from "../../store/products/productSlice.ts";
import { IProductsMockList, productsMockList } from "./productsList.tsx";

export const ProductsShop = () => {
  const navigate = useNavigate()
  
  const allProducts = useSelector(ProductsSelector.allProducts)
  
  const handleToProductDetails = (id: number | string) => {
    const newId = id.toString()
    navigate(`${RouterEnum.productDetail.replace(':id', newId)}`)
  }
  
  return (
    <>
      <Grid2 container spacing={2}>
        {
          allProducts?.length
            ? allProducts.map(({id, name, price, img, quantity}: IProduct) => (
              <Grid2 key={id} xs={6} sm={4} md={4}>
                <ProductCard
                  onClick={() => handleToProductDetails(id)}
                  name={name}
                  value={price}
                  img={img}
                  quantity={quantity}
                />
              </Grid2>
            ))
            : productsMockList.map(({id, name, price, img, quantity}: IProductsMockList) => (
              <Grid2 key={id} xs={6} sm={4} md={4}>
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
    </>
  );
}
