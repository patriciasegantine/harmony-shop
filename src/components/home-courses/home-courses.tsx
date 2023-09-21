import { HomeDivider } from "../../pages/home/home.styles.ts";
import { Grid } from "@mui/material";
import { CustomButton } from "../../global.styles.ts";
import { theme } from "../../theme.ts";
import beautiful from "../../assets/img/beautiful.png";
import cosmetology from "../../assets/img/cosmetology.png";
import { ImgBox } from "./home-courses.styles.ts";
import { useNavigate } from "react-router-dom";
import { RouterEnum } from "../../enum/router-enum.ts";

interface ImgInterface {
  src: string
  title: string
}

const images: ImgInterface[] = [
  {
    src: beautiful,
    title: 'beautiful'
  },
  {
    src: cosmetology,
    title: 'cosmetology'
  },
]

export const HomeCourses = () => {
  
  const navigate = useNavigate()
  
  const handleGotoCourses = () => {
    navigate(RouterEnum.courses)
  };
  
  return (
    <>
      <HomeDivider>Courses</HomeDivider>
      <Grid container spacing={3}>
        
        <Grid item xs={8}>
          <Grid container spacing={3}>
            {
              images.map((item: ImgInterface) => (
                  <Grid item key={item.title} xs={6}>
                    <ImgBox>
                      <img src={item.src} alt={item.title}/>
                    </ImgBox>
                  </Grid>
                )
              )
            }
          </Grid>
        </Grid>
        
        <Grid item xs={4}>
          <h3>
            Learn and grow with the wisdom of nature
          </h3>
          
          <p>
            Present the available courses, such as "Natural Skin Care" and "Holistic Well-being."
          </p>
          
          <CustomButton
            sx={{marginTop: theme["spacing-small"]}}
            onClick={handleGotoCourses}
          >
            courses
          </CustomButton>
        </Grid>
      </Grid>
    </>
  );
};
