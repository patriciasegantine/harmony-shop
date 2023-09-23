import { HomeBlock, HomeDividerHeader, HomeSubtitle, HomeTitle } from "../../pages/home/home.styles.ts";
import { Card, CardActionArea, CardContent, CardMedia, Grid } from "@mui/material";
import beautiful from "../../assets/img/courses/beautiful.png";
import cosmetology from "../../assets/img/courses/cosmetology.png";
import holistic from "../../assets/img/courses/holistic.png";
import { useNavigate } from "react-router-dom";
import { RouterEnum } from "../../enum/router-enum.ts";
import { HomeCourseTitle } from "./home-courses.styles.ts";

interface ImgInterface {
  src: string
  title: string
}

const images: ImgInterface[] = [
  {
    src: beautiful,
    title: 'Beauty at Home'
  },
  {
    src: holistic,
    title: 'Holistic Wellness and Beauty'
  },
  {
    src: cosmetology,
    title: 'Cosmetology'
  },
]

export const HomeCourses = () => {
  
  const navigate = useNavigate()
  
  const handleGotoCourses = () => {
    navigate(RouterEnum.courses)
  };
  
  return (
    <HomeBlock>
      <HomeDividerHeader>
        <HomeTitle>Courses</HomeTitle>
        <HomeSubtitle>Learn and grow with the wisdom of nature</HomeSubtitle>
      </HomeDividerHeader>
      
      <Grid container>
        <Grid container spacing={3}>
          {
            images.map((item: ImgInterface) => (
              <Grid item key={item.title} xs={12} md={4}>
                <Card>
                  <CardActionArea onClick={handleGotoCourses}>
                    <CardMedia
                      component="img"
                      image={item.src}
                      alt={item.src}
                    />
                    <CardContent>
                      <HomeCourseTitle> {item.title}</HomeCourseTitle>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Grid>
    
    </HomeBlock>
  );
};
