import { Column, FooterContainer, FooterContent } from "./footer.styles.ts";
import logo from "../../assets/img/logo.png"
import { Grid } from "@mui/material";

export const Footer = () => {
  const thisYear = new Date().getFullYear()
  
  return (
    <FooterContainer>
      <FooterContent>
        <Grid container spacing={3}>
          <Column item xs={12} md={6}>
            <img src={logo} alt=""/>
          </Column>
          
          <Column item xs={12} md={6}>
            <p>{`© ${thisYear} - Developed with ❤️ by Patricia Segantine`}</p>
          </Column>
        </Grid>
      </FooterContent>
    </FooterContainer>
  );
};
