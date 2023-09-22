import { FooterContainer, FooterContent } from "./footer.styles.ts";
import { useEffect } from "react";
import logo from "../../assets/img/logo.png"
import { Grid } from "@mui/material";

export const Footer = () => {
  
  const thisYear = new Date().getFullYear()
  
  useEffect(() => {
  
  }, []);
  
  return (
    <FooterContainer>
      <FooterContent>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <img src={logo} alt=""/>
          </Grid>
          
          <Grid item xs={6} textAlign={"end"}>
            <div>{`© ${thisYear} - Developed with ❤️ by Patricia Segantine`}</div>
          </Grid>
        
        </Grid>
      </FooterContent>
    </FooterContainer>
  );
};
