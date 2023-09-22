import { ContactContainer, ContactTitle } from "./contact.styles.ts";
import { ContactForm } from "../../components/contact-form/contact-form.tsx";
import { PopularFaQs } from "../../components/popular-FAQs/popular-FAQs.tsx";
import { ContactInfo } from "../../components/contact-info/contact-info.tsx";
import { Grid } from "@mui/material";

export const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Popular FaQs</ContactTitle>
      <PopularFaQs/>
      
      <ContactTitle>Get in touch</ContactTitle>
      
      <Grid container alignItems={"flex-end"}>
        
        <Grid xs={12} md={7}>
          <ContactForm/>
        </Grid>
        
        <Grid xs={12} md={5}>
          <ContactInfo/>
        </Grid>
      
      </Grid>
    </ContactContainer>
  );
};
