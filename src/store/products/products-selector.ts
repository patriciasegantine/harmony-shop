import { IProduct } from "./productSlice.ts";

const allProducts = ((store: any) => {
  return store.products.items
})

const bestSellerProducts = ((store: any) => {
  return store.products.items?.filter((item: { bestSeller: IProduct }) => item.bestSeller)
})

export { allProducts, bestSellerProducts }
