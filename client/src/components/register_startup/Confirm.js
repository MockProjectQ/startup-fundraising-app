import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { fullName, email, companyName, cin, website, companyMail, contact, companyAddress, description}
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Full Name" secondary={fullName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Company Name" secondary={companyName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="CIN" secondary={cin} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Website" secondary={website} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Company Mail" secondary={companyMail} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Contact" secondary={contact} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={companyAddress} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Description" secondary={description} />
              </ListItem>
            </List>
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
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
