import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Drawer from "@mui/material/Drawer";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { DrawerHeader } from "./product-filter.styles.ts";
import { useMainContext } from "../../use-context/main-context.tsx";
import { theme } from "../../theme.ts";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { TreeView } from "@mui/x-tree-view";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Grid2 from "@mui/material/Unstable_Grid2";
import { Category } from "./category.tsx";
import { Price } from "./price.tsx";
import { ProductType } from "./product-type.tsx";
import { Scent } from "./scent.tsx";

interface IProductFilter {
  ResponsiveButtonStyle: object
}

enum directionEnum {
  right = 'right',
  top = 'top'
}

enum widthEnum {
  mobile = 'auto',
  desktop = '350px'
}

export const ProductFilter: React.FC<IProductFilter> = ({ResponsiveButtonStyle}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>()
  const [drawerDirection, setDrawerDirection] = useState<directionEnum.top | directionEnum.right>(directionEnum.right)
  const [drawerWidth, setDrawerWidth] = useState<string | number>(widthEnum.desktop)
  
  const {windowWidth} = useMainContext()
  
  const handleOpenDrawer = () => {
    setIsDrawerOpen(true)
  }
  const handleCloseDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  
  useEffect(() => {
    if (windowWidth > Number(theme.tablet)) {
      setDrawerDirection(directionEnum.right)
      setDrawerWidth(widthEnum.desktop)
    } else {
      setDrawerDirection(directionEnum.top)
      setDrawerWidth(widthEnum.mobile)
      
    }
  }, [windowWidth]);
  
  return (
    <div>
      <Button
        sx={ResponsiveButtonStyle}
        startIcon={<FilterAltIcon/>}
        onClick={handleOpenDrawer}
      >
        Filter
      </Button>
      
      <Drawer
        open={isDrawerOpen}
        onClose={handleCloseDrawer}
        variant="temporary"
        anchor={drawerDirection}
        sx={{width: drawerWidth}}
      >
        
        <DrawerHeader>
          <Typography>FILTER PRODUCTS</Typography>
          <IconButton onClick={handleCloseDrawer}>
            <HighlightOffIcon/>
          </IconButton>
        </DrawerHeader>
        <Divider/>
        
        <Box sx={{minHeight: 180, flexGrow: 1, width: 350, p: 3}}>
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon/>}
            defaultExpandIcon={<ChevronRightIcon/>}
          >
            
            <ProductType/>
            <Category/>
            <Scent/>
            <Price/>
          
          </TreeView>
        </Box>
        
        <Box sx={{p: 3}}>
          <Grid2 container spacing={2}>
            <Grid2 width={'100%'}>
              <Button variant={"contained"} fullWidth>
                Filtrar
              </Button>
            </Grid2>
            
            <Grid2 width={'100%'}>
              <Button variant={"outlined"} fullWidth>
                Clear All
              </Button>
            </Grid2>
          </Grid2>
        
        
        </Box>
      
      
      </Drawer>
    </div>
  );
};
