import { Box, Modal } from "@mui/material";
import * as React from "react";
import { BoxImgModal, CloseButton, ItemDescription, ModalButton, ModalContent } from "./course-modal.styles.ts";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { CourseInterface } from "../../pages/courses/coursesInfo.ts";

interface CourseModalInterface {
  open: boolean
  setOpen: React.Dispatch<boolean>
  currentCourse: CourseInterface | undefined
}

export const CourseModal: React.FC<CourseModalInterface> = ({open, setOpen, currentCourse}) => {
  const handleClose = () => setOpen(false);
  
  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 6,
  };
  
  const handleEnrollCourse = (name: string | undefined) => {
    setOpen(!open)
    console.log('name', name)
  };
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      
      <Box sx={style}>
        <CloseButton onClick={handleClose} icon={faCircleXmark}/>
        
        
        <h2>{currentCourse?.name}</h2>
        
        <ModalContent>
          
          <BoxImgModal>
            <img src={currentCourse?.img} alt=""/>
          </BoxImgModal>
          
          <div>
            <p>
              <ItemDescription>Description:</ItemDescription>
              {currentCourse?.description}
            </p>
            
            <p>
              <ItemDescription>Suggested Duration:</ItemDescription>
              {currentCourse?.duration}
            </p>
            
            <p>
              <ItemDescription>Value:</ItemDescription>
              {
                currentCourse?.value === 0
                  ? 'Free'
                  : currentCourse?.value.toLocaleString('en-GB', {
                    style: "currency",
                    currency: "GBP"
                  })
              }
            </p>
          </div>
        </ModalContent>
        
        
        <ModalButton onClick={() => handleEnrollCourse(currentCourse?.name)}>Register Now</ModalButton>
      </Box>
    </Modal>
  );
};
