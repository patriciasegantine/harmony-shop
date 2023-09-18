import { SocialBox } from "./social-media.styles.ts";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

export const SocialMedia = () => {
  return (
    
    <SocialBox>
      <a href="https://www.facebook.com"
         title={"Linkedin"}
         target='_blank'>
     <Facebook fontSize={"large"}/>
      </a>
      
      <a
        href="https://twitter.com/"
        title={"Github"}
        target='_blank'
      >
        <Twitter fontSize={"large"}/>
      </a>
      
      <a
        href="https://www.instagram.com/"
        title={"Instagram"}
        target='_blank'
      >
      <Instagram fontSize={"large"}/>
      </a>
    </SocialBox>
  
  );
};
