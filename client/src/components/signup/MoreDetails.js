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

function MoreDetails() {
    const classes = useStyles();
    return (
        <div>
            <form key={"haha"}> {/* onSubmit={handleSubmit}> */}
                <TextField
                    // inputRef={password}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="description"
                    label="Description About Company"
                    id="description"
                    multiline
                    rows={5}
                    maxRows={8}
                    autoFocus
                />

                <Autocomplete
                    multiple
                    freeSolo
                    id="tags-outlined"
                    options={["technology", "computers", "arts", "graphics", "products", "something", "others"]}
                    renderInput={params => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="filterSelectedOptions"
                            placeholder="New Tag"
                        />
                    )}
                />

                <TextField
                    // inputRef={password}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="investmentRequired"
                    label="Investment Required (in ₹)"
                    type="number"
                    id="investmentRequired"
                />

                <TextField
                    // inputRef={password}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="expectedROI"
                    label="Expected ROI to the Investors(in % p.a.)"
                    type="number"
                    id="expectedROI"
                />

                <div className={classes.fileUpload}>
                    <input
                        accept="application/pdf"
                        className={classes.input}
                        id="pitchDeck"
                        type="file"
                    />
                    <label htmlFor="pitchDeck">
                        <Button variant="contained" color="primary" component="span">
                            Upload Pitch Deck(.pdf)
                        </Button>
                    </label>
                </div>

            </form>

        </div>
    )
}

export default MoreDetails
