import { Grid, Paper, TextField, Typography, Button, Avatar } from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';


const Forget = () => {
    const paperStyle = { padding: 20, height: '300px', width: "280px", margin: "90px auto", borderRadius: 10 }
    const avatarStyle = { backgroundColor: '#1bbd7e', height: "60px", width: "60px" }
    const btnstyle = { margin: '8px 0' }
    const navigate = useNavigate();

    const navigateToVerification = ()=>{
    navigate("/Verification");
    }
    return (
        <Grid >

            <Paper elevation={10} style={paperStyle} boxShadow={"5px 5px 10px #ccc"} sx={{
                ":hover": {
                    boxShadow: '10px 10px 20px #ccc'
                }
            }}>
                <Grid align="center">
                    <Avatar style={avatarStyle}> <LockResetOutlinedIcon sx={{ marginRight: .5, height: "45px", width: "50px" }} /> </Avatar>
                    <Typography fontFamily={"Roboto"} variant='h5'
                        padding={1} marginBottom="10" textAlign='center' color={"#4C4C4C"}>Forgot Password?</Typography>
                </Grid>

                <Typography marginBottom={"5px"} marginTop={"5px"} align='center' color={"#AEAEAE"}>Enter your registered email </Typography>

                <TextField margin="normal" label='Email' type="text" fullWidth required />

                <Button onClick={navigateToVerification} endIcon={<LoginOutlinedIcon />}
                    type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>
                    Submit
                </Button>

                <Typography >
                    <Link to={"/"} > Back to Login Page </Link>
                </Typography>

            </Paper>
        </Grid>
    )
}

export default Forget