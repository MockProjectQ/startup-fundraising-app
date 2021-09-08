import React from 'react'
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2em 4em',
    },
    details: {
        padding: '2em',
        '& > *': {
            marginBottom: '1em'
        }
    }
}));

function PersonalDetails(props) {
    const classes = useStyles();
    const { value, index, user } = props;
    const { name, email } = user

    return (
        <div className={classes.root}>
            {/* User Personal details */}
            {
                value === index && (
                    <Paper elevation={3} className={classes.details}>
                        <h3>
                            Personal Details
                        </h3>
                        <div>
                            Name: {name}
                        </div>
                        <div>
                            Email: {email}
                        </div>
                    </Paper>
                )
            }

        </div>
    )
}

export default PersonalDetails
