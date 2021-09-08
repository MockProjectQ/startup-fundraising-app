import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Paper,
    TextField,
    Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        background: '#e5e5e5',
        padding: '3em 0'
    },
    paper: {
        padding: '2em',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '1em',
    },
    submit: {
        marginLeft: '1em'
    }
}));

function InvestorForm() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container component="main" maxWidth="md">
                <Paper className={classes.paper} elevation={5}>
                    <h2>Investor Details</h2>
                    <form key={"haha"} className={classes.form} > {/* onSubmit={handleSubmit}> */}
                        <p>Company : Company Name</p>

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
                        // inputRef={email}
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
                        // inputRef={email}
                        />
                        <TextField
                            // inputRef={password}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="phone"
                            label="Contact Number"
                            type="number"
                            id="phone"
                            autoComplete="phone"
                        />
                        <TextField
                            // inputRef={password}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="about"
                            label="About"
                            id="about"
                            multiline
                            rows={2}
                            maxRows={5}
                        />
                        <TextField
                            // inputRef={password}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="minAmount"
                            label="Minimum Investment"
                            type="number"
                            id="minAmount"
                        />
                        <TextField
                            // inputRef={password}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="maxAmount"
                            label="Maximum Investment"
                            type="number"
                            id="maxAmount"
                        />

                        <div className={classes.buttons}>
                            <Button>
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default InvestorForm
