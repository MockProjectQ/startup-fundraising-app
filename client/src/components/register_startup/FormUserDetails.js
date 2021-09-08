import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Full Name"
              label="Full Name"
              onChange={handleChange('fullName')}
              defaultValue={values.fullName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Password" 
              label="Password"
              type = "password"
              onChange={handleChange('password')}
              defaultValue={values.password}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Re-enter Password"
              label="Confirm Password"
              type = "password"
              onChange={handleChange('confirmPassword')}
              defaultValue={values.confirmPassword}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Next</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
