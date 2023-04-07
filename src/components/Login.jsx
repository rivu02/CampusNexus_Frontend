import React from 'react'
import { FormControlLabel, Checkbox, Grid, Paper, TextField, Typography, Button, Avatar } from '@mui/material'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Link } from "react-router-dom";


const login = () => {
  const paperStyle = { padding: 32, height: '55vh', width: 350, margin: "120px auto", borderRadius: 10 }
  const avatarStyle = { backgroundColor: '#1bbd7e', height: "60px", width: "60px" }
  const btnstyle = { margin: '8px 0' }
  return (
    <Grid >
    
      <Paper elevation={10} style={paperStyle} boxShadow={"5px 5px 10px #ccc"} sx={{
        ":hover": {
          boxShadow: '10px 10px 20px #ccc'
        }
      }}>
        <Grid align="center">
          <Avatar style={avatarStyle}> <PersonRoundedIcon sx={{ height: "50px", width: "50px" }} /> </Avatar>
          <Typography fontFamily={"Roboto"} variant='h5'
            padding={1} marginBottom="10" textAlign='center' color={"#4C4C4C"}>Login as Student</Typography>
        </Grid>

        <TextField margin="normal" label='University Roll' type="text" fullWidth required />
        <TextField margin="normal" label='Password' type='password' fullWidth required />

        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />

        <Button endIcon={<LoginOutlinedIcon />} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>

        <Button endIcon={<CancelOutlinedIcon />} href='https://mckv.ucanapply.com/' type='submit' color='error' variant="contained" style={btnstyle} fullWidth>Cancel</Button>

        <Typography >
          <Link to={"Forgot"}> Forgot password? </Link>
        </Typography>

      </Paper>
    </Grid>
  )
}

export default login