import { Box, Grid, TextField, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { muiTheme } from "../../muiTheme.ts";
import { ModalButton } from "../course-modal/course-modal.styles.ts";

interface FormData {
  name: string
  email: string
  message: string
}

export const ContactForm = () => {
  
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  
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
  
  return (
    <ThemeProvider theme={muiTheme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
      >
        
        <Grid container spacing={3}>
          
          <Grid item xs={12}>
            <TextField
              color={'primary'}
              id="outlined-controlled"
              label="Name"
              variant="outlined"
              value={dataForm.name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                onChangeInputValue(event.target.value, 'name');
              }}
              fullWidth
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              id="outlined-controlled"
              label="Email"
              value={dataForm.email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                onChangeInputValue(event.target.value, 'email');
              }}
              fullWidth={true}
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              id="outlined-controlled"
              label="Message"
              multiline
              rows={10}
              value={dataForm.message}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                onChangeInputValue(event.target.value, 'message');
              }}
              fullWidth={true}
            />
          </Grid>
        </Grid>
        
        <ModalButton
          disabled={!isDisabled}
          onClick={() => console.log('sent')}
        >
          submite
        </ModalButton>
      </Box>
    </ThemeProvider>
  );
};
