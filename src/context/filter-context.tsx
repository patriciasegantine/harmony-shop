import React, { ReactNode, useContext } from "react";
import { ICategory } from "../components/product-filter/category.tsx";
import { IProductType } from "../components/product-filter/product-type.tsx";

interface IFilterContext {
  category: ICategory | undefined
  setCategory: React.Dispatch<ICategory>
  productType: IProductType | undefined
  setProductType: React.Dispatch<IProductType>
}

export const FilterContext = React.createContext<IFilterContext | undefined>(undefined)

export const FilterProvider = ({children}: { children: ReactNode }) => {
  const [category, setCategory] = React.useState<ICategory | undefined>(undefined)
  const [productType, setProductType] = React.useState<IProductType | undefined>(undefined)
  
  return (
    <FilterContext.Provider value={{
      category,
      setCategory,
      
      productType,
      setProductType
      
    }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
}
