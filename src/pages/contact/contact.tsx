import {
  ContactContainer,
  ContactContent,
  InfoContactBox,
  MyInformation,
  InfoTitle,
  InfoContent
} from "./contact.styles.ts";
import { SocialMedia } from "../../components/social-media/social-media.tsx";
import { ContactForm } from "../../components/contact-form/contact-form.tsx";
import { SectionTitle } from "../../global.styles.ts";

export const Contact = () => {
  return (
    <ContactContainer>
      <SectionTitle>Contact</SectionTitle>
      
      <ContactContent>
        <div>
          <ContactForm/>
        </div>
        
        <div>
          <MyInformation>
            
            <InfoContactBox>
              <InfoTitle> Phone Number:</InfoTitle>
              
              <InfoContent>
                <p> +44 20 1234 5678</p>
              </InfoContent>
            </InfoContactBox>
            
            <InfoContactBox>
              <InfoTitle> Email:</InfoTitle>
              
              <InfoContent>
               <p> info@harmony.co.uk</p>
              </InfoContent>
            </InfoContactBox>
            
            <div>
              <InfoTitle> Address:</InfoTitle>
              <InfoContent>
                <p> 123 Serenity Lane</p>
                <p> London SW1A 1AA</p>
                <p>  United Kingdom</p>
              </InfoContent>
            </div>
            
            <div>
              <InfoTitle>Social media:</InfoTitle>
              <SocialMedia/>
            </div>
            
          </MyInformation>
        </div>
      
      </ContactContent>
    </ContactContainer>
  );
};
