import { PrimaryButton } from "../../global.styles.ts";
import { CoursesContainer, CoursesContent } from "./courses.styles.ts";
import { useState } from "react";
import { CourseInterface, coursesInfo } from "./coursesInfo.ts";
import { CourseModal } from "../../components/course-modal/course-modal.tsx";

export const Courses = () => {
  
  const [open, setOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<CourseInterface>();
  
  function handleOpenModal(index: number) {
    setOpen(true)
    
    setCurrentCourse(coursesInfo[index])
  }
  
  return (
    <CoursesContainer>
      <h2>Our courses</h2>
      <p>
        Welcome to our collection of courses thoughtfully designed to elevate your experience of wellbeing and beauty in
        the comfort of your own home. At Harmony, we believe that true beauty and inner balance can be achieved
        through natural and sustainable practices.
      </p>
      
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
            <>
              <CoursesContent>
                <div>
                  <img src={item.img} alt=""/>
                </div>
                
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.advertisement}</p>
                  <PrimaryButton onClick={() => handleOpenModal(index)}> Read more</PrimaryButton>
                </div>
              </CoursesContent>
            
            </>
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
