import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import AuthForm from 'Components/Auth/AuthForm';




export default function Auth() {

  const [authState,setAuthState]=useState("login")  


  const isInLoginView = authState === "login"

  const handleAuthState = () =>{
    if(isInLoginView){
        setAuthState("register")
    }
    else {
        setAuthState("login")
    }
  }
  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://cdn.dribbble.com/users/2317423/screenshots/14139417/apply_job_4x.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <AuthForm isInLoginView={isInLoginView} handleAuthState={handleAuthState}/>
      </Grid>
  );
}