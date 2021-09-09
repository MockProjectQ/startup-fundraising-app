import React from 'react';
import { makeStyles, Container, Paper } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SignupDetails from './SignupDetails';
import CompanyDetails from './CompanyDetails';
import MoreDetails from './MoreDetails';
import FinancialStatements from './FinancialStatements';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    background: '#e5e5e5',
    padding: '3em 0'
  },
  paper: {
    margin: '1em'
  },
  formContent: {
    padding: '1em 2em'
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Sign up', 'Company Details', 'More Details'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <SignupDetails />;
    case 1:
      return <CompanyDetails />;
    case 2:
      return <MoreDetails />;
    default:
      throw new Error('Unknown step');
  }
}

function Signup() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();


  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const goToProfile = () => {
    console.log("go to profile page")
  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="md">
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Paper>
          <Paper className={classes.paper} >
        <div className={classes.formContent}>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  Successfully signed up!!
                </Typography>
                <Button onClick={goToProfile} className={classes.button}>
                  OK
                </Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
        </div>
          </Paper>
      </Container>
    </div>
  );
}

export default Signup
