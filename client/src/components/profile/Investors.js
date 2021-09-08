import React from 'react'
import { makeStyles,Grid } from '@material-ui/core';
import InvestorDetail from './InvestorDetail';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0 4em',
        flexGrow: 1,
    },
}));

function Investors(props) {
    const classes = useStyles();
    const { value, index } = props;

    return (
        <div>
            {
                value === index && (
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            {/* Each investors */}
                            <InvestorDetail 
                                name= 'Test 1'
                                email= 'test1@gmail.com'
                                phone= '9090909090'
                                minAmount= '200000'
                                maxAmount= '500000'
                            />
                            <InvestorDetail 
                                name= 'Test 2'
                                email= 'test2@gmail.com'
                                phone= '8080808080'
                                minAmount= '200000'
                                maxAmount= '500000'
                            />
                            <InvestorDetail 
                                name= 'Test 3'
                                email= 'test3@gmail.com'
                                phone= '7070707070'
                                minAmount= '200000'
                                maxAmount= '500000'
                            />
                        </Grid>
                    </div>
                )
            }
        </div>
    )
}

export default Investors
