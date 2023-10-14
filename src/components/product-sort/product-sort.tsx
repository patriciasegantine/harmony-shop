import React, { useState } from "react";
import { Box, Menu, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import SortIcon from "@mui/icons-material/Sort";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface IProductSort {
  ResponsiveButtonStyle: object
}

export const ProductSort: React.FC<IProductSort> = ({ResponsiveButtonStyle}) => {
  
  const [isMenuFilterOpen, setIsMenuFilterOpen] = useState<null | HTMLElement>(null);
  
  const [selectedKey, setSelectedKey] = useState<number>()
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsMenuFilterOpen(event.currentTarget);
  };
  
  const handleClose = (key: number) => {
    setIsMenuFilterOpen(null)
    setSelectedKey(key)
  };
  
  const itemMenu = [
    {
      key: 1,
      title: 'Most Relevant'
    },
    {
      key: 2,
      title: 'Most Popular'
    },
    {
      key: 3,
      title: 'Alphabetical'
    },
    {
      key: 4,
      title: 'Price: Low - High'
    },
    {
      key: 5,
      title: 'Price: High - Low'
    },
  ]
  
  return (
    <Box>
      <Button
        sx={ResponsiveButtonStyle}
        startIcon={<SortIcon/>}
        onClick={handleOpenMenu}
      >
        Sort
      </Button>
      
      <Menu
        id="menu-appbar"
        anchorEl={isMenuFilterOpen}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(isMenuFilterOpen)}
        onClose={handleClose}
      >
        
        {
          itemMenu.map(({key, title}) => {
            return (
              <MenuItem key={key} onClick={() => handleClose(key)}>
                <div>
                  {selectedKey === key ? <CheckCircleIcon fontSize={"small"}/> : ''}
                </div>
                {title}
              </MenuItem>
            )
          })
        }
      </Menu>
    </Box>
  );
};
