import React, { useState } from 'react';
import { Button, Stepper, Step, StepLabel, Typography, Container, Paper, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AppBar from './appBar';
import { Stack } from '@mui/joy';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const ColoredLine = () => (
  <div sx={{ marginTop: "10px", marginBottom: "10px" }}>
    <hr style={{
      color: '#D3D3D3',
      backgroundColor: '#D3D3D3',
      marginTop: '20px',
      height: .1,
      borderColor: '#D3D3D3',
      borderTop: ".1px solid #D3D3D3"
    }} />
  </div>
)

function createData(PAPER_CODE, PAPER_NAME, PAPER_TYPE) {
  return { PAPER_CODE, PAPER_NAME, PAPER_TYPE };
}

const rows = [
  createData('BS-M404', 'Numerical Methods', 'T'),
  createData('BS-M404', 'Numerical Methods', 'T'),
  createData('BS-M404', 'Numerical Methods', 'T'),
  createData('BS-M404', 'Numerical Methods', 'T'),
  createData('BS-M404', 'Numerical Methods', 'T'),
];

const steps = ['Step 1', 'Step 2']; // Two steps

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2rem'
  },
}));

const paperStyle = { padding: 20, height: '720px', width: "750px", margin: "120px auto", borderRadius: 10 }

const Enrollment = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };


  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div >
            <Typography align="center" variant="h5" gutterBottom marginBottom={1} marginTop={3}><b>MCKV INSTITUTE OF ENGINEERING</b></Typography>

            <Typography align="center" gutterBottom marginBottom={0} marginTop={1}>243, G.T. ROAD (NORTH) LILUAH, HOWRAH-711204, WEST BENGAL, INDIA</Typography>

            <Typography align="center" gutterBottom marginBottom={1} marginTop={1} sx={{ fontSize: '.8rem' }}>(An Autonomous Institution Affiliated to Maulana Abul Kalam Azad University of Technology)</Typography>
            <ColoredLine />

            <Typography sx={{ fontSize: '1.2rem' }} align="center" gutterBottom marginBottom={1} marginTop={2}><b>Enrollment Form 2021- 22 for REGULAR Students</b></Typography>

            <Stack direction={'row'} spacing={2} marginTop={1} >
              <Typography gutterBottom fontWeight={1000} sx={{ fontFamily: 'Roboto', fontSize: 15, textAlign: "center" }}> <b>Enrollment For :</b> </Typography>
              <Typography gutterBottom fontWeight={350} sx={{ fontFamily: 'Roboto', fontSize: 15, textAlign: "center" }}>Fourth Semester Enrollment 2021-22 </Typography>
            </Stack>

            <Stack direction={'row'} spacing={2}>
              <Typography fontWeight={1000} sx={{ fontFamily: 'Roboto', fontSize: 15, textAlign: "center" }}>Name :</Typography>
              <Typography fontWeight={350} sx={{ fontFamily: 'Roboto', fontSize: 15, textAlign: "center" }}> RUDRANEEL GHOSH </Typography>
            </Stack>

            <Stack direction={'row'} spacing={2}>
              <Typography fontWeight={1000} sx={{ fontFamily: 'Roboto', fontSize: 15, textAlign: "center" }}>For the Degree of :</Typography>
              <Typography fontWeight={350} sx={{ fontFamily: 'Roboto', fontSize: 15, textAlign: "center" }}>Bachelors Degree in B.Tech. in Computer Science & Engineering</Typography>
            </Stack>

            <Stack direction={'row'} spacing={2}>
              <Typography fontWeight={1000} sx={{ fontFamily: 'Roboto', fontSize: 15, textAlign: "center" }}> Registration No. With Year :</Typography>
              <Typography fontWeight={350} sx={{ fontFamily: 'Roboto', fontSize: 15, textAlign: "center" }}>211160100120003 OF 2021-2022</Typography>
            </Stack>

            <Stack direction={'row'} spacing={2} marginBottom={2}>
              <Typography fontWeight={1000} sx={{ fontFamily: 'Roboto', fontSize: 15, textAlign: "center" }}> Roll No. :</Typography>
              <Typography fontWeight={350} sx={{ fontFamily: 'Roboto', fontSize: 15, textAlign: "center" }}>1600720038</Typography>
            </Stack>

            <Typography gutterBottom sx={{ fontSize: '1rem' }}>COMPULSORY PAPERS</Typography>

            <TableContainer component={Paper} sx={{ border: '0px solid #ccc' }}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead sx={{ backgroundColor: "#182c5c" }}>
                  <TableRow>
                    <TableCell sx={{ color: '#FFFFFF' }} align='center'>PAPER CODE</TableCell>
                    <TableCell sx={{ color: '#FFFFFF' }} align="center">PAPER NAME</TableCell>
                    <TableCell sx={{ color: '#FFFFFF' }} align="center">PAPER TYPE</TableCell>
                  </TableRow>
                </TableHead>


                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.PAPER_CODE}
                      sx={{ '&:last-child td, &:last-child th': { border: 'px solid #ccc' } }}

                    >
                      <TableCell sx={{ borderRight: '1px solid #ccc' }}
                        align="center" component="th" scope="row">
                        {row.PAPER_CODE}
                      </TableCell>
                      <TableCell sx={{ borderRight: '1px solid #ccc' }} align="center">{row.PAPER_NAME}</TableCell>
                      <TableCell sx={{ borderRight: '1px solid #ccc' }} align="center">{row.PAPER_CODE}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        );

      case 1:
        return (
          <>
            <Typography gutterBottom marginTop={3} sx={{ fontSize: '1.2rem' }}> SELECT ELECTIVE PAPERS</Typography> <ColoredLine />

            <Grid>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FormControl >
                <FormLabel id="demo-radio-buttons-group-label">Elective 1</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Subject 1"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="Subject 1" control={<Radio />} label="Subject 1" />
                  <FormControlLabel value="Subject 2" control={<Radio />} label="Subject 2" />
                  <FormControlLabel value="Subject 3" control={<Radio />} label="Subject 3" />
                </RadioGroup>
              </FormControl>

              <FormControl sx={{marginLeft:'50px'}}>
                <FormLabel id="demo-radio-buttons-group-label">Elective 2</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Subject 1"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="Subject 1" control={<Radio />} label="Subject 1" />
                  <FormControlLabel value="Subject 2" control={<Radio />} label="Subject 2" />
                  <FormControlLabel value="Subject 3" control={<Radio />} label="Subject 3" />
                </RadioGroup>
              </FormControl>

              <FormControl sx={{marginLeft:'50px'}} >
                <FormLabel id="demo-radio-buttons-group-label">Elective 2</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Subject 1"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="Subject 1" control={<Radio />} label="Subject 1" />
                  <FormControlLabel value="Subject 2" control={<Radio />} label="Subject 2" />
                  <FormControlLabel value="Subject 3" control={<Radio />} label="Subject 3" />
                </RadioGroup>
              </FormControl>
              </div>
            </Grid>
          </>
        );

      default:
        return 'Unknown step';
    }
  };

  return (
    <>
      <AppBar></AppBar>
      <Paper elevation={4} style={paperStyle} boxshadow={"5px 5px 5px "} border={1}>
        <Grid className='stud-info'>
          <Container className={classes.container}>


            <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 1 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography>All steps completed.</Typography>
                  <Button onClick={() => setActiveStep(0)}>Reset</Button>
                </div>
              ) : (
                <div >
                  {getStepContent(activeStep)}
                  <div >
                    <Button sx={{ marginTop: '20px' }} disabled={activeStep === 0} onClick={handleBack} >
                      Back
                    </Button>
                    <Button sx={{ marginTop: '20px' }} variant="contained" color="primary" onClick={handleNext}>
                    
                      {activeStep === steps.length - 1 ? '' : 'Next'}
                    </Button>
                  </div>
                </div>
              )}
            </div>

          </Container>
        </Grid>
      </Paper>
    </>
  );
};

export default Enrollment;
