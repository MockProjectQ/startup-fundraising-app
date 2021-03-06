
import './Cards.css';
import { Button } from '../button/Button';
import CompanyList from '../companyList/companyList';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
//import GetCompanyList from 'services';
import Container from "@material-ui/core/Container";
import CompanyCard from '../companyCard/companyCard';
import { Link } from 'react-router-dom';
import { getAllStartUpDetails } from '../../services/startUpService';


const useStyles = makeStyles({

    mainContainer:{
        width: "80%",
        marginTop:"5%",
        marginBottom:"5%",
        margin:"auto",
    },
    companyContainer: {
        backgroundColor:"#FFFFFF",
        width: "100%",
        paddingBottom:"3%",
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        
        
    },
    card: {
        marginTop: "0.5%",
        marginBottom: "0.5%",
        padding: "0",
    },

    
});

function Cards() {
  const [cards, setCards] = useState([]);
  const [resultCards, setResultCards] = useState([]);

  const classes = useStyles();

  useEffect(() => {
      document.body.style.backgroundColor = "#E5E5E5";
      return () =>{
          document.body.style.backgroundColor = null;
      }
  });
  
  useEffect(() => {
    async function fetchList() {

        try {
            let result = await getAllStartUpDetails();
            result = result.slice(0,3);
            /*let result = [];
            for (let i = 0; i < 3; i++) {
                result.push({
                    "title": "New Company",
                    "created_at": "Just now",
                    "author_name": "Mohit",
                    "description": "Officia elit est sunt magna irure veniam proident magna pariatur.",
                });
                
            }*/
            setCards(result)
            setResultCards(result)
        }
        catch (err) {
        }
    }
    fetchList()

}, [])


return (
  
    <div className={classes.mainContainer}>
      <h1>Recommended for You!</h1>
        <div>
    <Container maxWidth="xl" className={classes.companyContainer}>
       
        <Grid container spacing={3} id='grids' >
            {resultCards.map((item, ind, arr) => (<Grid item xs={4} className={classes.card} id="grid-card"><CompanyCard company={item} key={(ind + 1).toString()} /></Grid>))}
        </Grid>

    </Container>

    
    </div>
    <br/>
    <Link to='/startups'><center><Button  buttonStyle='btn--viewall' >View All</Button></center>
    </Link>   
    </div>
);

}

export default Cards;