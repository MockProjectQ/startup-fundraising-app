import React from 'react'
import { makeStyles, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
    },
    fileUpload: {
        margin: '1em 0',
    }
}));


function CompanyDetails(props) {
    const classes = useStyles();
    const { handleInputChange, formErrors, formValues, handleMediaChange } = props

    return (
        <form key={"haha"}>

            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="companyName"
                label="Company Name"
                name="companyName"
                autoFocus
                onChange={handleInputChange}
                error={Boolean(formErrors.companyName)}
                helperText={formErrors.companyName}
                value={formValues.companyName}
            />

            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="CINNumber"
                label="CIN Number"
                name="CINNumber"
                onChange={handleInputChange}
                error={Boolean(formErrors.CINNumber)}
                helperText={formErrors.CINNumber}
                value={formValues.CINNumber}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="websiteUrl"
                label="Website / Company LinkedIn Page"
                type="url"
                id="websiteUrl"
                onChange={handleInputChange}
                error={Boolean(formErrors.websiteUrl)}
                helperText={formErrors.websiteUrl}
                value={formValues.websiteUrl}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="companyEmail"
                label="Company Email"
                name="companyEmail"
                autoComplete="email"
                onChange={handleInputChange}
                error={Boolean(formErrors.companyEmail)}
                helperText={formErrors.companyEmail}
                value={formValues.companyEmail}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="companyPhone"
                label="Company Contact Number"
                id="companyPhone"
                type= "number"
                onChange={handleInputChange}
                error={Boolean(formErrors.companyPhone)}
                helperText={formErrors.companyPhone}
                value={formValues.companyPhone}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="companyAddress"
                label="Company Address"
                id="companyAddress"
                multiline
                minRows={2}
                maxRows={5}
                onChange={handleInputChange}
                error={Boolean(formErrors.companyAddress)}
                helperText={formErrors.companyAddress}
                value={formValues.companyAddress}
            />
            <div className={classes.fileUpload}>
                <input
                    accept="image/jpeg"
                    className={classes.input}
                    id="companyLogo"
                    type="file"
                    name="companyLogo"
                    onChange = {handleMediaChange}
                />
                <label htmlFor="companyLogo">
                    <Button variant="contained" color="primary" component="span">
                        Upload Company Logo
                    </Button>
                </label>
            </div>

        </form>
    )
}

export default CompanyDetails
