import React from 'react'
import { TextField } from '@material-ui/core';
import { useLocation, useHistory } from "react-router-dom";
import validateSignupForm from '../../helper/validateSignupForm';


function SignupDetails(props) {

    const {handleInputChange, formErrors, formValues} = props
    
    return (
            <form key={"haha"} >
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="fullname"
                    label="Full Name"
                    name="fullname"
                    autoComplete="name"
                    autoFocus
                    onChange={handleInputChange}
                    error={Boolean(formErrors.fullname)}
                    helperText={formErrors.fullname}
                    value={formValues.fullname}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleInputChange}
                    error={Boolean(formErrors.email)}
                    helperText={formErrors.email}
                    value={formValues.email}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    name="password"
                    label="Password"
                    id="password"
                    onChange={handleInputChange}
                    error={Boolean(formErrors.password)}
                    helperText={formErrors.password}
                    value={formValues.password}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    onChange={handleInputChange}
                    error={Boolean(formErrors.confirmPassword)}
                    helperText={formErrors.confirmPassword}
                    value={formValues.confirmPassword}
                />

            </form>
    )
}

export default SignupDetails
