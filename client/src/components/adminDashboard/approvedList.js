import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CompanyCard from '../companyCard/companyCard';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { getAllStartUpDetails } from '../../services/startUpService';

const useStyles = makeStyles(theme => ({

    mainContainer: {
        paddingTop: "5%",
        paddingBottom: "5%",
        width: "85%",
        margin: "auto",
    },
    companyContainer: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        paddingBottom: "3%",
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
    },

    titleContainer: {
        paddingTop: "2.5%",
        paddingBottom: "2.5%",
    },


    card: {
        marginTop: "0.5%",
        marginBottom: "0.5%",
        padding: "0",
    },

    viewbtn: {
        marginTop: "3%",
        width: "100%",
        textAlign: "center",
    }


}));

export default function ApprovedList() {
    const [resultCards, setResultCards] = useState([]);

    const classes = useStyles();

    let history = useHistory();
    useEffect(() => {
        async function fetchList() {

            try {
                let result = await getAllStartUpDetails();
                setResultCards(result.slice(0, 3))
            }
            catch (err) {
            }
        }
        fetchList()

    }, [])


    return (
        <div className={classes.mainContainer}>

            <Container maxWidth="xl" className={classes.companyContainer}>
                <Container maxWidth="xl" className={classes.titleContainer}>

                    <Typography variant="h6" component="h5">Approved Start Ups</Typography>

                </Container>

                <Grid container spacing={3}>

                    {(resultCards.length === 0) ?

                        <Typography variant="h6" component="h2" style={{ margin: "auto", color: "GrayText" }} >No Approved StartUps</Typography> :
                        resultCards.map((item, ind, arr) => (<Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}><CompanyCard company={item} key={(ind + 1).toString()} /></Grid>))}
                </Grid>

                <div className={classes.viewbtn}>
                    <Button variant="contained" color="primary" onClick={() => { history.push('/admin/list') }}>
                        View All
                    </Button>
                </div>

            </Container>
        </div>

    );
}
