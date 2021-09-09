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


function CompanyDetails() {
    const classes = useStyles();
    return (
        <div>
            <form key={"haha"}> {/* onSubmit={handleSubmit}> */}

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="companyName"
                    label="Company Name"
                    name="companyName"
                    autoFocus
                // inputRef={email}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="CINNumber"
                    label="CIN Number"
                    name="CINNumber"
                // inputRef={email}
                />
                <TextField
                    // inputRef={password}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="websiteUrl"
                    label="Website / Company LinkedIn Page"
                    type="url"
                    id="websiteUrl"
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
                // inputRef={email}
                />
                <TextField
                    // inputRef={password}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="companyPhone"
                    label="Company Contact Number"
                    id="companyPhone"
                />
                <TextField
                    // inputRef={password}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="companyAddress"
                    label="Company Address"
                    id="companyAddress"
                    multiline
                    rows={2}
                    maxRows={5}
                />
                <div className={classes.fileUpload}>
                    <input
                        accept="image/jpeg"
                        className={classes.input}
                        id="companyLogo"
                        type="file"
                    />
                    <label htmlFor="companyLogo">
                        <Button variant="contained" color="primary" component="span">
                            Upload Company Logo
                        </Button>
                    </label>
                </div>

            </form>

        </div>
    )
}

export default CompanyDetails
