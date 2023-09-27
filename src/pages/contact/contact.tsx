import { ContactContainer } from "./contact.styles.ts";
import { ContactForm } from "../../components/contact-form/contact-form.tsx";
import { PopularFaQs } from "../../components/popular-FAQs/popular-FAQs.tsx";
import { ContactInfo } from "../../components/contact-info/contact-info.tsx";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { SectionTitle } from "../../global.styles.ts";

export const Contact = () => {
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  }, []);
  
  return (
    <ContactContainer>
      <SectionTitle>Get in touch</SectionTitle>
      
      <Grid container alignItems={"flex-end"}>
        <Grid item xs={12} md={7}>
          <ContactForm/>
        </Grid>
        
        <Grid item xs={12} md={5}>
          <ContactInfo/>
        </Grid>
      </Grid>
      
      <SectionTitle>Popular FaQs</SectionTitle>
      <PopularFaQs/>
    </ContactContainer>
  );
};
