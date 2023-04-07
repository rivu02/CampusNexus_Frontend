import { Grid, Paper, TextField, Typography, Button, Avatar } from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import DomainVerificationOutlinedIcon from '@mui/icons-material/DomainVerificationOutlined';


const Verification = () => {
  const paperStyle = { padding: 40, height: '35vh', width: 350, margin: "120px auto", borderRadius: 10 }
  const avatarStyle = { backgroundColor: '#1bbd7e', height: "60px", width: "60px" }
  const btnstyle = { margin: '8px 0' }
  const navigate = useNavigate();
  const navigateToReset = () => {
    navigate("/Reset");
  }

  return (
    <Grid >

      <Paper elevation={10} style={paperStyle} boxShadow={"5px 5px 10px #ccc"} sx={{
        ":hover": {
          boxShadow: '10px 10px 20px #ccc'
        }
      }}>
        <Grid align="center">
          <Avatar style={avatarStyle}> <DomainVerificationOutlinedIcon sx={{height: "45px", width: "50px" }} /> </Avatar>
          <Typography fontFamily={"Roboto"} variant='h5'
            padding={1} marginBottom="10" textAlign='center' color={"#4C4C4C"}>Email Verification</Typography>
        </Grid>

        <Typography align='center' color={"#AEAEAE"}> Enter OTP send to your Email </Typography>

        <TextField margin="normal" label='Enter 6 digit OTP' type="text" fullWidth required />

        <Button onClick={navigateToReset} endIcon={<LoginOutlinedIcon />} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Submit</Button>

        <Typography >
          <Link to={"/"} > Back to Login Page </Link>
        </Typography>

      </Paper>
    </Grid>
  )
}

export default Verification