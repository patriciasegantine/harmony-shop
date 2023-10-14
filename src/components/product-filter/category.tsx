import { TreeItem } from "@mui/x-tree-view";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Checkbox } from "@mui/material";
import React from "react";

export interface ICategory {
  body: string
  face: string
}

export interface ICategoryChecked {
  body: boolean
  face: boolean
}

export const categoryInitialValue = {
  body: false,
  face: false
}

export const Category = () => {
  
  // const {category, setCategory} = useFilterContext()
  
  const [isCategoryChecked, setIsCategoryChecked] = React.useState<ICategoryChecked>(categoryInitialValue)
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    setIsCategoryChecked({...isCategoryChecked, [type]: event.target.checked});
    
  };
  
  return (
    <Box>
      <TreeItem nodeId="10" label="Category">
        <TreeItem
          nodeId="11"
          label={
            <FormControlLabel
              label={'Body'}
              control={
                <Checkbox
                  checked={isCategoryChecked.body}
                  onChange={(e) => handleChange(e, 'body')}
                  inputProps={{'aria-label': 'controlled'}}
                />
              }
            />
          }
        />
        
        <TreeItem
          nodeId="12"
          label={
            <FormControlLabel
              label={'Face'}
              control={
                <Checkbox
                  checked={isCategoryChecked.face}
                  onChange={(e) => handleChange(e, 'face')}
                  inputProps={{'aria-label': 'controlled'}}
                />
              }
            />
          }/>
      </TreeItem>
    </Box>
  
  );
};
