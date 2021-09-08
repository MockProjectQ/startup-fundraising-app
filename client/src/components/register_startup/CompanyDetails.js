import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class CompanyDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
            <AppBar title="Enter Company Details" />
            <TextField
              placeholder="Company Name"
              label="Name"
              onChange={handleChange('companyName')}
              defaultValue={values.companyName}
              margin="normal"
              fullWidth
            />
            <br />

            <TextField
              placeholder="CIN"
              label="CIN"
              onChange={handleChange('cin')}
              defaultValue={values.cin}
              margin="normal"
              fullWidth
            />
            <br />

            <TextField
              placeholder = "Company Website/LinkedIN Page"
              label = "Website"
              onChange={handleChange('website')}
              defaultValue={values.website}
              margin="normal"
              fullWidth
            />
            <br />

            <TextField
              placeholder="Company Email"
              label="Email"
              onChange={handleChange('companyMail')}
              defaultValue={values.companyMail}
              margin="normal"
              fullWidth
            />
            <br />

            <TextField
              placeholder="Company Contact"
              label="Contact"
              onChange={handleChange('contact')}
              defaultValue={values.contact}
              margin="normal"
              fullWidth
            />
            <br />

            <TextField
              placeholder="Company Address"
              label="Address"
              onChange={handleChange('companyAddress')}
              defaultValue={values.companyAddress}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

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

export default CompanyDetails;
