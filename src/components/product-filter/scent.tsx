import { Box, Checkbox } from "@mui/material";
import { TreeItem } from "@mui/x-tree-view";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";

export interface IScent {
  fresh: string
  floral: string
  fruity: string
  herbal: string
  unscented: string
}

export interface IScentChecked {
  fresh: boolean
  floral: boolean
  fruity: boolean
  herbal: boolean
  unscented: boolean
}

export const InitialValueScent = {
  fresh: false,
  floral: false,
  fruity: false,
  herbal: false,
  unscented: false
}

export const Scent = () => {
  
  const [isScentChecked, setScentChecked] = React.useState<IScentChecked>(InitialValueScent)
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    setScentChecked({...isScentChecked, [type]: event.target.checked});
  };
  
  return (
    <Box>
      <TreeItem nodeId="10" label="Scent">
        <TreeItem
          nodeId="11"
          label={
            <FormControlLabel
              label={'Fresh'}
              control={
                <Checkbox
                  checked={isScentChecked.fresh}
                  onChange={(e) => handleChange(e, 'fresh')}
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
              label={'Fruity'}
              control={
                <Checkbox
                  checked={isScentChecked.fruity}
                  onChange={(e) => handleChange(e, 'fruity')}
                  inputProps={{'aria-label': 'controlled'}}
                />
              }
            />
          }/>
        
        <TreeItem
          nodeId="12"
          label={
            <FormControlLabel
              label={'Herbal'}
              control={
                <Checkbox
                  checked={isScentChecked.herbal}
                  onChange={(e) => handleChange(e, 'herbal')}
                  inputProps={{'aria-label': 'controlled'}}
                />
              }
            />
          }/>
        
        <TreeItem
          nodeId="12"
          label={
            <FormControlLabel
              label={'Floral'}
              control={
                <Checkbox
                  checked={isScentChecked.floral}
                  onChange={(e) => handleChange(e, 'floral')}
                  inputProps={{'aria-label': 'controlled'}}
                />
              }
            />
          }/>
        
        <TreeItem
          nodeId="12"
          label={
            <FormControlLabel
              label={'Unscented'}
              control={
                <Checkbox
                  checked={isScentChecked.unscented}
                  onChange={(e) => handleChange(e, 'unscented')}
                  inputProps={{'aria-label': 'controlled'}}
                />
              }
            />
          }/>
      </TreeItem>
    </Box>
  );
};
