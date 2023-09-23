import { ContactContainer, ContactTitle } from "./contact.styles.ts";
import { ContactForm } from "../../components/contact-form/contact-form.tsx";
import { PopularFaQs } from "../../components/popular-FAQs/popular-FAQs.tsx";
import { ContactInfo } from "../../components/contact-info/contact-info.tsx";
import { Grid } from "@mui/material";

export const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Get in touch</ContactTitle>
      
      <Grid container alignItems={"flex-end"}>
        <Grid item xs={12} md={7}>
          <ContactForm/>
        </Grid>
        
        <Grid item xs={12} md={5}>
          <ContactInfo/>
        </Grid>
      </Grid>
      
      <ContactTitle>Popular FaQs</ContactTitle>
      <PopularFaQs/>
    </ContactContainer>
  );
};
