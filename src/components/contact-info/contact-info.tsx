import {
  InfoContactBox,
  InfoContactBoxFlex,
  InfoContent,
  InfoTitle,
  MyInformation
} from "../../pages/contact/contact.styles.ts";
import { SocialMedia } from "../social-media/social-media.tsx";

export const ContactInfo = () => {
  return (
    <MyInformation>
      <InfoContactBoxFlex>
        <InfoTitle> Phone Number:</InfoTitle>
        
        <InfoContent>
          <p> +44 20 1234 5678</p>
        </InfoContent>
      </InfoContactBoxFlex>
      
      <InfoContactBoxFlex>
        <InfoTitle> Email:</InfoTitle>
        
        <InfoContent>
          <p> info@harmony.co.uk</p>
        </InfoContent>
      </InfoContactBoxFlex>
      
      <InfoContactBox>
        <InfoTitle> Address:</InfoTitle>
        <span>
            <p> 123 Serenity Lane</p>
            <p> London SW1A 1AA</p>
            <p>  United Kingdom</p>
        </span>
      </InfoContactBox>
      
      <InfoContactBox>
        <InfoTitle>Social media:</InfoTitle>
        <SocialMedia/>
      </InfoContactBox>
    
    </MyInformation>
  );
};
