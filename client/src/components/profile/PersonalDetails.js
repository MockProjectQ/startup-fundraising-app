import React from 'react'
import { makeStyles, Paper } from '@material-ui/core';
import { getUserById } from '../../services/UserService';

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
    const { value, index } = props;
    // const { name, email } = { name: "user", email: "sjdxh" };

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")

    React.useEffect(() => {
        const fetchPersonalDetails = async () => {
            const { name, email } = await getUserById('BLo3M410injccmDdpZEz')
            setName(name)
            setEmail(email)
        }
        fetchPersonalDetails();
    }, [])

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
