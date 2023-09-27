import React, { useEffect, useState } from 'react';

import { BoxForm, CourseEnrollFormContainer } from "./course-enroll-form.styles.ts";
import { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Snackbar, TextField } from "@mui/material";
import { coursesInfo } from "../../pages/courses/coursesInfo.ts";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from "react-router-dom";
import { RouterEnum } from "../../enum/router-enum.ts";
import CloseIcon from "@mui/icons-material/Close";
import { CustomButton, SectionTitle } from "../../global.styles.ts";

interface FormData {
  name: string
  email: string
  DBO: string
  address: string
  phone: string
}

const InitialFormDetails = {
  name: '',
  email: '',
  DBO: '',
  address: '',
  phone: ''
}

export const CourseEnrollForm = () => {
  
  const navigate = useNavigate()
  
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [value, setValue] = useState<Dayjs | null>();
  const [openMessage, setOpenMessage] = useState<boolean>(false)
  const [FormDetails, setFormDetails] = useState<FormData>(InitialFormDetails)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  const onChangeInputValue = (value: string, type: 'name' | 'email' | 'address' | 'phone' | 'DBO') => {
    setFormDetails({...FormDetails, [type]: value})
  }
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(() => {
      setOpenMessage(true)
      setIsLoading(false)
    }, 2000);
    
    setTimeout(() => {
      navigate(RouterEnum.courses)
    }, 4000);
    
  }
  
  const handleCloseMessage = () => {
    setOpenMessage(!openMessage)
  }
  
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleCloseMessage}
    >
      <CloseIcon fontSize="small"/>
    </IconButton>
  );
  
  useEffect(() => {
    const isFieldsFilled = FormDetails.name !== '' && FormDetails.email !== '' && FormDetails.DBO !== ''
    
    if (isFieldsFilled) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [FormDetails]);
  
  return (
    <CourseEnrollFormContainer>
      <SectionTitle>Course Registration Form</SectionTitle>
      
      <BoxForm
        component="form"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <TextField
              id="outlined-controlled"
              label="Name"
              variant="outlined"
              value={FormDetails.name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                onChangeInputValue(event.target.value, 'name');
              }}
              fullWidth={true}
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-gb'}>
              <DatePicker
                label="DOB"
                value={value}
                format="DD/MM/YYYY"
                onChange={(newValue) => setValue(newValue)}
                sx={{
                  width: '100%'
                }}
              />
            </LocalizationProvider>
          </Grid>
          
          <Grid item xs={12} md={12}>
            <TextField
              id="outlined-controlled"
              label="Address"
              value={FormDetails.address}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                onChangeInputValue(event.target.value, 'address');
              }}
              fullWidth={true}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-controlled"
              label="Email"
              value={FormDetails.email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                onChangeInputValue(event.target.value, 'email');
              }}
              fullWidth={true}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-controlled"
              label="Phone"
              value={FormDetails.phone}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                onChangeInputValue(event.target.value, 'phone');
              }}
              fullWidth={true}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Gender"
                // value={course}
                // onChange={handleChange}
              >
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Course</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Course"
                // value={course}
                // onChange={handleChange}
              >
                {
                  coursesInfo?.map(item => (
                    <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={12}>
            <CustomButton
              disabled={!isDisabled}
              type={"submit"}
              loading={isLoading}
            >
              submite
            </CustomButton>
          </Grid>
        
        </Grid>
      </BoxForm>
      
      <Box sx={{width: 500}}>
        <Snackbar
          autoHideDuration={5000}
          anchorOrigin={{vertical: "top", horizontal: "right"}}
          open={openMessage}
          onClose={handleCloseMessage}
          message={<> Success </>}
          action={action}
        />
      </Box>
    </CourseEnrollFormContainer>
  );
};
