import { TreeItem } from "@mui/x-tree-view";
import { Box, Slider } from "@mui/material";
import { useState } from "react";

export const Price = () => {
  
  function valuetext(value: number) {
    return `£${value}`;
  }
  
  const [value, setValue] = useState<number[]>([0, 30]);
  
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    
    console.log('slide', event)
  };
  
  const marks = [
    {
      value: 0,
      label: '£0',
    },
    {
      value: 100,
      label: '£100',
    },
  ];
  
  const slide = (
    <Box>
      <p>Price Range: {`£${value[0]} - £${value[1]}`}</p>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
      />
    </Box>
  )
  
  return (
    <TreeItem nodeId="6" label="Price">
      <TreeItem
        nodeId="7"
        label={slide}/>
    </TreeItem>
  );
};
