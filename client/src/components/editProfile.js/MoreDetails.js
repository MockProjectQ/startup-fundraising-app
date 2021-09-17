import React from 'react'
import { makeStyles, TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
    },
    fileUpload: {
        margin: '1em 0',
    }
}));

function MoreDetails(props) {
    const classes = useStyles();
    const {handleInputChange, formErrors, formValues, handleTagChange, handleMediaChange} = props

    return (
            <form key={"haha"}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="description"
                    label="Description About Company"
                    id="description"
                    multiline
                    minRows={5}
                    maxRows={8}
                    autoFocus
                    onChange={handleInputChange}
                    error={Boolean(formErrors.description)}
                    helperText={formErrors.description}
                    value={formValues.description}
                />

                <Autocomplete
                    multiple
                    freeSolo
                    id="tags-outlined"
                    options={["technology", "computers", "arts", "graphics", "products", "others"]}
                    name="tags"
                    defaultValue={formValues.tags}
                    onChange={handleTagChange}
                    renderInput={params => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="Add New Tag"
                            placeholder="New Tag"
                        />
                    )}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="investmentRequired"
                    label="Investment Required (in ₹)"
                    type="number"
                    id="investmentRequired"
                    onChange={handleInputChange}
                    error={Boolean(formErrors.investmentRequired)}
                    helperText={formErrors.investmentRequired}
                    value={formValues.investmentRequired}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="expectedROI"
                    label="Expected ROI to the Investors(in % p.a.)"
                    type="number"
                    id="expectedROI"
                    onChange={handleInputChange}
                    error={Boolean(formErrors.expectedROI)}
                    helperText={formErrors.expectedROI}
                    value={formValues.expectedROI}
                />

                <div className={classes.fileUpload}>
                    <input
                        accept="application/pdf"
                        className={classes.input}
                        id="pitchDeck"
                        type="file"
                        name="pitchDeck"
                        onChange={handleMediaChange}
                    />
                    <label htmlFor="pitchDeck">
                        <Button variant="contained" color="primary" component="span">
                            Upload Pitch Deck(.pdf)
                        </Button>
                    </label>
                </div>

            </form>
    )
}

export default MoreDetails
