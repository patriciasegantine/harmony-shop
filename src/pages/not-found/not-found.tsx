// import React from 'react';
import Button from "@mui/material/Button";
import { RouterEnum } from "../../enum/router-enum.ts";
import { useNavigate } from "react-router-dom";
import { NotFoundContainer } from "./not-found.styles.ts";
import { Box, Typography } from "@mui/material";
import { theme } from "../../theme.ts";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Home, ShoppingCart } from "@mui/icons-material";

export const NotFound = () => {
  
  const navigate = useNavigate()
  
  return (
    <NotFoundContainer>
      <Typography
        fontSize={theme["font-size-xxl"]}
        color={theme["color-detached"]}
      >404</Typography>
      <Typography
        color={theme["color-detached"]}>
        Page Not Found
      </Typography>
      
      <Box width={'60%'} marginTop={theme["spacing-extra-big"]}>
        <Grid2 container columnSpacing={2}>
          <Grid2 xs={12} lg={6}>
            <Button
              variant={'outlined'}
              onClick={() => navigate(RouterEnum.home)}
              startIcon={<Home/>}
              fullWidth
            >
              Go to Home
            </Button>
          </Grid2>
          
          <Grid2 xs={12} lg={6}>
            <Button
              variant={'outlined'}
              onClick={() => navigate(RouterEnum.shop)}
              startIcon={<ShoppingCart/>}
              fullWidth
            >
              Go to Shop
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </NotFoundContainer>
  );
};
