import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Paper,
    TextField,
    Button,
} from '@material-ui/core';
import { useLocation } from 'react-router';
import validateInvestorForm from '../../helper/validateInvestorForm';
import { addInvestor } from '../../services/InvestorService';

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

const initialFormValues = {
    fullname: "",
    email: "",
    phone: "",
    about: "",
    minAmount: 0,
    maxAmount: 0
}

function InvestorForm() {
    const classes = useStyles();

    const { companyName } = useLocation().state
    const [formValues, setFormValues] = React.useState(initialFormValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
        const validationResponse = validateInvestorForm(formValues)
        console.log(validationResponse.success)
        if (validationResponse.success){
            addInvestor('FktzsQk2fdfnS08r9HXo', formValues)
        }
        else{
            console.log(validationResponse.errors)
        }
    }

    return (
        <div className={classes.root}>
            <Container component="main" maxWidth="md">
                <Paper className={classes.paper} elevation={5}>
                    <h2>Investor Details</h2>
                    <form key={"haha"} className={classes.form} onSubmit={handleSubmit}>
                        <p>Company : {companyName}</p>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            
                            fullWidth
                            id="fullname"
                            label="Full Name"
                            name="fullname"
                            autoComplete="name"
                            autoFocus
                            onChange={handleInputChange}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            
                            fullWidth
                            name="phone"
                            label="Contact Number"
                            type="number"
                            id="phone"
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="about"
                            label="About"
                            id="about"
                            multiline
                            minRows={2}
                            maxRows={5}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            
                            fullWidth
                            name="minAmount"
                            label="Minimum Investment"
                            type="number"
                            id="minAmount"
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            
                            fullWidth
                            name="maxAmount"
                            label="Maximum Investment"
                            type="number"
                            id="maxAmount"
                            onChange={handleInputChange}
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
