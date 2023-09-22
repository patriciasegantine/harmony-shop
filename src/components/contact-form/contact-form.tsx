import { Box, Grid, IconButton, Snackbar, TextField, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { muiTheme } from "../../muiTheme.ts";
import { ModalButton } from "../course-modal/course-modal.styles.ts";
import CloseIcon from '@mui/icons-material/Close';

interface FormData {
  name: string
  email: string
  message: string
}

export const ContactForm = () => {
  
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [openMessage, setOpenMessage] = useState<boolean>(false)
  const [dataForm, setDataForm] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  
  const onChangeInputValue = (value: string, type: 'name' | 'email' | 'message') => {
    setDataForm({...dataForm, [type]: value})
  }
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setOpenMessage(true)
  };
  
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
          type={"submit"}
        >
          submite
        </ModalButton>
      </Box>
      
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
    </ThemeProvider>
  );
};
