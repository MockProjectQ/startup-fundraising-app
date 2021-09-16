import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CompanyCard from '../companyCard/companyCard';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { getAllStartUpDetails } from '../../services/startUpService';
import Navbar from '../navbar/Navbar';

const useStyles = makeStyles(theme => ({

    mainContainer: {
        width: "90%",
        marginTop: "1%",
        marginBottom: "5%",
        margin: "auto",
    },
    companyContainer: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        paddingBottom: "3%",
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        overflowY: "auto",
    },

    searchContainer: {
        paddingTop: "2.5%",
        paddingBottom: "2.5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        
        [theme.breakpoints.between('xs','sm')]:{
            display:"block",
            

        },
    },


    searchField: {
        height: "100%",
        marginLeft: "10px",
        flex: 1,
        width: "80%",
    },

    searchButton:{
        //width:"15%",
    },

    card: {
        marginTop: "0.5%",
        marginBottom: "0.5%",
        padding: "0",
    },

    formRoot: {
        width: "35%",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.between('xs','sm')]:{
            width:"100%",
            marginTop:"2.5%",
        },
    }

}));

export default function CompanyList() {
    const [cards, setCards] = useState([]);
    const [resultCards, setResultCards] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        document.body.style.backgroundColor = "#E5E5E5";
        return () => {
            document.body.style.backgroundColor = null;
        }
    });

    var searchQ = React.useRef(null);;
    let searchResults = () => {
        var str = searchQ.current.value;
        console.log(searchQ.current.value)
        if (str === "") {
            setResultCards(cards);
        }
        else {
            let resultset = cards.filter((ele) => {
                if (ele.companyName.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
                    return ele
                }
            });

            console.log(cards);
            setResultCards(resultset);

        }

    }

    useEffect(() => {
        async function fetchList() {
            let results = []

            try {
                results = await getAllStartUpDetails();
                results = results.filter((ele) => {
                    if (ele.status === "approved") {
                        return ele
                    }
                })
                setCards(results);
                setResultCards(results);

            }
            catch (err) {
            }

        }
        fetchList()

    }, [])

    return (
        <div>
        <Navbar/>
        <div className={classes.mainContainer}>
            
            <div>
                <Container maxWidth="xl" className={classes.companyContainer}>
                    <Container maxWidth="xl" className={classes.searchContainer}>

                        <Typography variant="h6" component="h5">Start Ups</Typography>

                        <Paper className={classes.formRoot}>
                            <InputBase
                                className={classes.searchField}
                                placeholder="Search by Company name..."
                                inputProps={{ 'aria-label': 'search by Company name' }}
                                inputRef={searchQ}
                                onChange={() => searchResults()}
                            />
                            <IconButton className={classes.searchButton} aria-label="search" onClick={() => searchResults()}>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Container>
                    {console.log("Refresh", resultCards.slice(0, 1))}
                    <Grid container spacing={3}>
                        {(resultCards.length === 0) ?

                            <Typography variant="h5" component="h2" style={{ margin: "auto", marginTop: "20%", color: "GrayText" }} >No Results Found</Typography> :

                            resultCards.map((item, ind, arr) => (
                                <Grid item xs={12} sm={6} md={4} lg={4} className={classes.card}>
                                    <CompanyCard company={item} key={(ind + 1).toString()} />
                                </Grid>
                            ))

                        }
                    </Grid>

                </Container>
            </div>
        </div>
        </div>
    );
}
