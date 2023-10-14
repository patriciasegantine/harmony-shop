import { TreeItem } from "@mui/x-tree-view";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";

export interface IProductType {
  showerGel: string
  handWash: string
  bodyLotion: string
  bodyOil: string
}

export interface IProductTypeChecked {
  showerGel: boolean
  handWash: boolean
  bodyLotion: boolean
}

export const productTypeInitialValue = {
  showerGel: false,
  handWash: false,
  bodyLotion: false
}

export const ProductType = () => {
  
  // const {isProductTypeChecked, setIsProductTypeChecked} = useFilterContext()
  
  const [isProductTypeChecked, setIsProductTypeChecked] = React.useState<IProductTypeChecked>(productTypeInitialValue)
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    setIsProductTypeChecked({...isProductTypeChecked, [type]: event.target.checked});
  };
  return (
    <>
      <TreeItem nodeId="1" label="Product Type">
        <TreeItem
          nodeId="2"
          label={
            <FormControlLabel
              label={'Shower gel'}
              control={
                <Checkbox
                  checked={isProductTypeChecked.showerGel}
                  onChange={(e) => handleChange(e, 'showerGel')}
                  inputProps={{'aria-label': 'controlled'}}
                />
              }
            />
          }
        />
        
        <TreeItem
          nodeId="3"
          label={
            <FormControlLabel
              label={'Hand wash'}
              control={
                <Checkbox
                  checked={isProductTypeChecked.handWash}
                  onChange={(e) => handleChange(e, 'handWash')}
                  inputProps={{'aria-label': 'controlled'}}
                />
              }
            />
          }/>
        
        <TreeItem
          nodeId="4"
          label={
            <FormControlLabel
              label={'Body lotion'}
              control={
                <Checkbox
                  checked={isProductTypeChecked.bodyLotion}
                  onChange={(e) => handleChange(e, 'bodyLotion')}
                  inputProps={{'aria-label': 'controlled'}}
                />
              }
            />
          }/>
      
      </TreeItem>
    
    
    </>
  );
};
