import { CustomButton, SectionTitle } from "../../global.styles.ts";
import { CourseContent, CoursesContainer, CoursesContent } from "./courses.styles.ts";
import { useEffect, useState } from "react";
import { CourseInterface, coursesInfo } from "./coursesInfo.ts";
import { CourseModal } from "../../components/course-modal/course-modal.tsx";
import { Grid } from "@mui/material";
import { theme } from "../../theme.ts";

export const Courses = () => {
  
  const [open, setOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<CourseInterface>();
  
  function handleOpenModal(index: number) {
    setOpen(true)
    
    setCurrentCourse(coursesInfo[index])
  }
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  }, []);
  
  return (
    <CoursesContainer>
      <SectionTitle>Our courses</SectionTitle>
      
      <p>
        Our courses are created with passion and dedication, focusing on promoting a holistic approach to self-care.
        Each course is an opportunity to learn, grow, and transform while engaging with practices that value your health
        and our planet.
      </p>
      
      <p> Discover our variety of courses below, each one designed to empower you to care for yourself gently and
        effectively. Begin your journey of wellbeing and beauty at home with Harmony.</p>
      {
        coursesInfo.map((item, index) =>
          (
            <CoursesContent key={item.id}>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <img src={item.img} alt=""/>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <CourseContent>
                    <h3>{item.name}</h3>
                    <p>{item.advertisement}</p>
                    <CustomButton
                      style={{marginTop: theme["spacing-regular"]}}
                      onClick={() => handleOpenModal(index)}>
                      Read more</CustomButton>
                  </CourseContent>
                </Grid>
              </Grid>
            </CoursesContent>
          )
        )
      }
      
      <CourseModal
        open={open}
        setOpen={setOpen}
        currentCourse={currentCourse}
      />
    
    </CoursesContainer>
  );
};
