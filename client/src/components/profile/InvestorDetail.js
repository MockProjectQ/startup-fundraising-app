import React from 'react'
import {
    makeStyles,
    Grid,
    Card,
    CardContent,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    pos: {
        margin: '12px 0',
        width: '50%',
    },
    investorContact: {
        display: 'flex',
        width: '100%',
        alignItems: 'space-between'
    },
    bold: {
        fontWeight: 'bold'
    },
    amount: {
        fontWeight: 'bold',
        margin: '12px 0',
        width: '50%',
    }
});

function InvestorDetail(props) {
    const classes = useStyles();
    const { name, email, phone, about, minAmount, maxAmount } = props.investor

    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2" className={classes.bold}>
                        {name}
                    </Typography>
                    <div className={classes.investorContact}>
                        <Typography className={classes.pos} color="textSecondary" variant="body2">
                            email: {email}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary" variant="body2">
                            phone: {phone}
                        </Typography>
                    </div>
                    <Typography variant="body2" align='justify'>
                        {about}
                    </Typography>
                    <div className={classes.investorContact}>
                        <Typography className={classes.amount} color="primary" variant="button">
                            Min. Amount : ₹ {minAmount}
                        </Typography>
                        <Typography className={classes.amount} color="primary" variant="button">
                            Max. Amount : ₹ {maxAmount}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default InvestorDetail
