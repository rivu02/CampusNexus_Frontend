import React from 'react';
import {  Grid, Paper, Typography, Button, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Stack from '@mui/joy/Stack';
import logo1 from '../images/mckvlogo.png';
import logo2 from '../images/cnlogo.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    appbarColor: {
      main: '#182c5c',
      contrastText: '#fff',
    },
  },
});

const Dashboard = () => {
  const paperStyle = { padding: 20, height: '440px', width: "750px", margin: "120px auto", borderRadius: 10 }
  // const avatarStyle = { backgroundColor: '#20bce4', height: "60px", width: "60px", borderRadius: 1 }
  // const btnstyle = { margin: '8px 0' }
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <AppBar position='absolute' color="appbarColor">
        <Toolbar>
          <img src={logo2} alt="logo" className='nav-logo' />
          <Typography varient="h1" component='div' fontWeight={800} sx={{ flexGrow: 2, fontSize: 20, fontFamily: 'Montserrat'}} > </Typography>
          <Stack direction='row' spacing={1}>
            <Button color='inherit' sx={{fontFamily: 'Catamaran', fontSize: 17 }}> Home</Button>
            <Button color='inherit' sx={{fontFamily: 'Catamaran', fontSize: 17  }}> College Ranklist</Button>
            <Button color='inherit' sx={{fontFamily: 'Catamaran', fontSize: 17  }}> Student Profile</Button>
            <Button color='inherit' sx={{fontFamily: 'Catamaran', fontSize: 17  }}> Search</Button>
            <Button onClick={navigateToLogin} color='inherit' sx={{fontFamily: 'Catamaran', fontSize: 17  }}> Make Payment</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      </ThemeProvider>

      <Paper elevation={4} style={paperStyle} boxShadow={"5px 5px 5px "}>
        <Grid container>
        <img src={logo1} alt="" className='body-logo'/>
            <Typography fontWeight={1000} sx={{fontFamily: 'Catamaran', fontSize: 25, textAlign: "center" }}>
            A minimalist Fees Payment and Ranklist application for MCKVIE (MCKV INSTITUTE OF ENGINEERING).
            </Typography>
        </Grid>
      </Paper>
    </>


  )
}
export default Dashboard