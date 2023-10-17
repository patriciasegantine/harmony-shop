import { SocialBox } from "./social-media.styles.ts";
import { GitHub, LinkedIn } from "@mui/icons-material";

export const SocialMedia = () => {
  return (
    
    <SocialBox>
      <a href="https://www.linkedin.com/in/patriciasegantine/"
         title={"Linkedin"}
         target='_blank'>
        <LinkedIn fontSize={"large"}/>
      </a>
      
      <a
        href="https://github.com/patriciasegantine/harmony-shop"
        title={"Github"}
        target='_blank'
      >
        <GitHub fontSize={"large"}/>
      </a>
    </SocialBox>
  
  );
};
