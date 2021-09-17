import React from 'react';
import { makeStyles, Container, Paper } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CompanyDetails from './CompanyDetails';
import MoreDetails from './MoreDetails';
import { useLocation, useParams, useHistory } from "react-router-dom";
import validateSignupForm from '../../helper/validateSignupForm';
import { updateUserDetails } from '../../services/UserService';
import Navbar from '../navbar/Navbar';
import { getStartupById } from '../../services/getStartup';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    background: '#e5e5e5',
    padding: '0 0 3em 0'
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
  return ['Company Details', 'More Details'];
}


function EditProfile() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const steps = getSteps();

  let history = useHistory()
  let {data} = useLocation().state;
  let {id} = useParams();


  const [formValues, setFormValues] = React.useState(data);
  const [formErrors, setFormErrors] = React.useState({});

  const handleInputChange = async (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleTagChange = async (event, value) => {
    setFormValues({
      ...formValues,
      tags: value
    })
  }

  const handleMediaChange = async (e) => {
    const { name } = e.target
    if (e.target.files[0]) {
      setFormValues({
        ...formValues,
        [name]: e.target.files[0]
      })
    }

  }

  const formValidation = () => {
    const validationResponse = validateSignupForm(formValues)
    setFormErrors(validationResponse.errors)
    return (validationResponse.success)
  }

  const checkRequiredFields = () => {
    const requiredFields = ['companyName',
      'CINNumber', 'companyEmail', 'companyPhone', 'companyAddress', 'description',
      'investmentRequired', 'expectedROI', 'companyLogo', 'pitchDeck']
    return (requiredFields.every(key => Object.keys(formValues).includes(key)))

  }

  const handleNext = async () => {
    if (activeStep == 1) {
      const validationResponse = await validateSignupForm(formValues)
      if (validationResponse.success) {
        const response = await updateUserDetails(id, formValues)
        console.log(response.success)
        if(response.success){
          setMessage('Profile Edited Successfully!!')
        }
        else{
          setMessage(response.error.message)
        }
      }
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const goToProfile = () => {
    history.push('/login')
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <CompanyDetails
          handleInputChange={handleInputChange}
          handleMediaChange={handleMediaChange}
          formErrors={formErrors}
          formValues={formValues}
        />;
      case 1:
        return <MoreDetails
          handleInputChange={handleInputChange}
          handleMediaChange={handleMediaChange}
          handleTagChange={handleTagChange}
          formErrors={formErrors}
          formValues={formValues}
        />;
      default:
        throw new Error('Unknown step');
    }
  }

  React.useEffect(() => {
    formValidation()
    if (activeStep === 1) {
      setDisabled(!formValidation())
    }
    else{
      setDisabled(false)
    }
  }, [formValues,activeStep])

  return (
    <div className={classes.root}>
      <Navbar />
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
                  {message}
                </Typography>
                <Button onClick={goToProfile} className={classes.button}>
                  OK
                </Button>

              </div>
            ) : (
              <div>
                <div className={classes.instructions}>{getStepContent(activeStep)}</div>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={disabled}
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

export default EditProfile
