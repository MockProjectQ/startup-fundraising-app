import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useLocation, useHistory } from "react-router-dom";

import {
    Container,
    Paper,
    TextField,
    Button,
} from '@material-ui/core';
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

function InvestorForm() {
    const classes = useStyles();
    let history = useHistory()
    const firstRender = React.useRef(true)

    const { id, companyName } = useLocation().state
    const [formValues, setFormValues] = React.useState({});
    const [formErrors, setFormErrors] = React.useState({});
    const [disabled, setDisabled] = React.useState(true);


    const handleInputChange = async (e) => {
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
        if (validationResponse.success) {
            addInvestor(id, formValues)
        }
        else {
            setFormErrors(validationResponse.errors)
        }
    }

    const formValidation = () => {
        const validationResponse = validateInvestorForm(formValues)
        setFormErrors(validationResponse.errors)
        return (validationResponse.success)
    }

    const checkRequiredFields = () => {
        const requiredFields = ['fullname', 'email', 'phone', 'minAmount', 'maxAmount']
        return (requiredFields.every(key => Object.keys(formValues).includes(key)))
    }

    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        formValidation()
        setDisabled(!checkRequiredFields() || !formValidation())

    }, [formValues])

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
                            error={Boolean(formErrors.fullname)}
                            helperText={formErrors.fullname}
                            required
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
                            error={Boolean(formErrors.email)}
                            helperText={formErrors.email}
                            required
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
                            error={Boolean(formErrors.phone)}
                            helperText={formErrors.phone}
                            required
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
                            error={Boolean(formErrors.minAmount)}
                            helperText={formErrors.minAmount}
                            required
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
                            error={Boolean(formErrors.maxAmount)}
                            helperText={formErrors.maxAmount}
                            required
                        />

                        <div className={classes.buttons}>
                            <Button onClick={(() => history.goBack())}>
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                disabled={disabled}
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
