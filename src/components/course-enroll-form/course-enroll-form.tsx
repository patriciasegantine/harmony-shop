import React, { useEffect, useState } from 'react';

import { CourseEnrollFormContainer } from "./course-enroll-form.styles.ts";
import { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, ThemeProvider } from "@mui/material";

import { ModalButton } from "../course-modal/course-modal.styles.ts";
import { muiTheme } from "../../muiTheme.ts";
import { coursesInfo } from "../../pages/courses/coursesInfo.ts";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from "react-router-dom";
import { RouterEnum } from "../../enum/router-enum.ts";
import { theme } from "../../theme.ts";

interface FormData {
  name: string
  email: string
  message: string
}

export const CourseEnrollForm = () => {
  
  const navigate = useNavigate()
  
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [value, setValue] = useState<Dayjs | null>();
  const [dataForm, setDataForm] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  
  const onChangeInputValue = (value: string, type: 'name' | 'email' | 'message') => {
    
    const newValue = {...dataForm, [type]: value}
    
    setDataForm(newValue)
  }
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };
  
  useEffect(() => {
    
    const isFieldsFilled = dataForm.name !== '' && dataForm.email !== '' && dataForm.message !== ''
    
    if (isFieldsFilled) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [dataForm]);
  
  useEffect(() => {
  
  }, []);
  
  return (
    <CourseEnrollFormContainer>
      <h2>Course Registration Form</h2>
      
      <ThemeProvider theme={muiTheme}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          style={{padding: theme["spacing-big"]}}
        >
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <TextField
                id="outlined-controlled"
                label="Name"
                variant="outlined"
                value={dataForm.name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  onChangeInputValue(event.target.value, 'name');
                }}
                fullWidth={true}
              />
            </Grid>
            
            <Grid item xs={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-gb'}>
                <DatePicker
                  label="DOB"
                  value={value}
                  format="DD/MM/YYYY"
                  onChange={(newValue) => setValue(newValue)}
                  sx={{
                    width:'100%'
                  }}
                />
              </LocalizationProvider>
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                id="outlined-controlled"
                label="Address"
                value={dataForm.message}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  onChangeInputValue(event.target.value, 'message');
                }}
                fullWidth={true}
              />
            </Grid>
            
            <Grid item xs={6}>
              <TextField
                id="outlined-controlled"
                label="Email"
                value={dataForm.message}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  onChangeInputValue(event.target.value, 'message');
                }}
                fullWidth={true}
              />
            </Grid>
            
            <Grid item xs={6}>
              <TextField
                id="outlined-controlled"
                label="Phone"
                value={dataForm.message}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  onChangeInputValue(event.target.value, 'message');
                }}
                fullWidth={true}
              />
            </Grid>
            
            <Grid item xs={6}>
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
            
            <Grid item xs={6}>
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
          
          
          </Grid>
          <ModalButton
            onClick={() => navigate(RouterEnum.courses)}
            disabled={isDisabled}
          >
            submite
          </ModalButton>
        </Box>
      </ThemeProvider>
    </CourseEnrollFormContainer>
  );
};
