import React, { Component } from 'react';
//import Upload from './Upload';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class MoreDetails extends Component {

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
              <AppBar title="More Details" />
              <TextField
                id="standard-multiline-flexible"
                placeholder = "Description about company"
                label = "description"
                maxRows = {4}
                onChange = {handleChange('description')}
                defaultValue = {values.description}
                margin="normal"
                fullWidth
              />

              <br />
  
              <TextField
                placeholder="New Tag"
                label="Tag"
                onChange = {handleChange('tag')}
                defaultValue = {values.tag}
                margin = "normal"
                fullWidth
              />
              <br />
  
              <TextField
                placeholder = "Investment Required "
                label = "Investment Amount in Rupees required"
                id = "standard-number"
                onChange = {handleChange('investment')}
                defaultValue = {values.investment}
                margin = "normal"
                fullWidth
              />
              <br />
  
              <TextField
                placeholder="ROI to the Investors"
                label="ROI"
                onChange={handleChange('roi')}
                defaultValue={values.roi}
                margin="normal"
                fullWidth
              />
              <br />

              <Button
                type = "file"
                color = "default"
                variant = "contained"
                onClick = {handleChange('pitch')} 
                defaultValue = "No file chosen"
              > 
                Upload Pitch Deck 
                <input
                  type="file"
                  hidden
                />
              </Button>
  
              <Button
                color = "secondary"
                variant = "contained"
                onClick = {this.back}
              > Back </Button>
  
              <Button
                color = "primary"
                variant = "contained"
                onClick = {this.continue}
              > Next</Button>
            </Dialog>
          </>
        </MuiThemeProvider>
      );
    }
  }

  export default MoreDetails;