import React from 'react';

import { Stock } from "../products-shop/products-shop.styles.ts";

interface IProductsStock {
  quantity: number
}

const StockLabelEnum = {
  soldOut: 'sold out',
  inStock: 'in stock'
}

export const ProductsStock: React.FC<IProductsStock> = ({quantity}) => {
  return (
    <div>
      <Stock stock={quantity <= 0 ? 'soldOut' : 'inStock'}>
        {quantity <= 0 ? StockLabelEnum.soldOut : StockLabelEnum.inStock}
      </Stock>
    </div>
  );
};
