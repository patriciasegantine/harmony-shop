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
      <div>
        <h2>Welcome to our contact section!</h2>
        <p>
          Before reaching out to us, we recommend checking our FAQ for quick answers. If your question isn't there, we
          are
          available via email or through our convenient contact form.
        </p>
      </div>
      
      <SectionTitle>Popular FaQs</SectionTitle>
      <PopularFaQs/>
      
      <SectionTitle>Get in touch</SectionTitle>
      <Grid container alignItems={"flex-end"}>
        <Grid item xs={12} md={7}>
          <ContactForm/>
        </Grid>
        
        <Grid item xs={12} md={5}>
          <ContactInfo/>
        </Grid>
      </Grid>
    
    
    </ContactContainer>
  );
};
