import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import GetCompanyList from 'services';
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import { green, red } from '@material-ui/core/colors';


const useStyles = makeStyles({

    mainContainer: {
        paddingTop: "5%",
        paddingBottom: "5%",
        width:"45%",
        
    },
    companyContainer: {
        backgroundColor: "#FFFFFF",
        paddingBottom: "3%",
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        height:"60vh",
        overflowY:"auto",
    },

    titleContainer: {
        display:"flex",
        paddingTop: "2.5%",
        paddingBottom: "2.5%",
        alignItems:"center",
    },

    noOfReports:{
        marginLeft:"5px",
        borderRadius:"50%",
        backgroundColor: red[700],
        color:"#ffffff",
        paddingLeft:"4px",
        paddingRight:"4px",
    },
    list:{
        boxShadow: "1px 2px 3px rgba(0,0,0,0.50)",
    },

});

export default function ReportList() {
    const [result, setResult] = useState([]);
    
    const classes = useStyles();
    
    useEffect(() => {
        async function fetchList() {

            try {
                //let result = await GetNewCompanies().sortDecending();
                //store the results in result variable and set the result state
                let result = [];
                for (let i = 0; i < 15; i++) {
                    result.push({
                        "title": "New Company",
                        "created_at": "Just now",
                        "author_name": "Mohit",
                        "content": "Officia elit est sunt magna irure veniam proident magna pariatur.",
                        "no_of_rep":5,
                    });
                    result.push({
                        "title": "Not a New Company",
                        "created_at": "Just now",
                        "author_name": "Not Mohit",
                        "content": "Officia elit est sunt magna irure veniam proident magna pariatur.",
                        "no_of_rep":3,
                    });
                }
                setResult(result)
            }
            catch (err) {
            }
        }
        fetchList()

    }, [])


    return (
        <div className={classes.mainContainer}>
            <Container className={classes.companyContainer}>
                <Container className={classes.titleContainer}>
                    <Typography variant="h6" component="h5">Reported Start Ups</Typography>
                    <Typography variant="body2" component="span" className={classes.noOfReports}>{result.length}</Typography>
                </Container>

                <div className={classes.list}>
                    <List>
                    {result.map((item, ind, arr) => (<ListItem value={item}>
                                <ListItemAvatar>
                                    <Avatar variant="square">
                                        <PersonIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText >
                                    <Typography component="span"> {item.title}</Typography>
                                    <Typography component="span" className={classes.noOfReports}>{item.no_of_rep}</Typography>

                                </ListItemText>
                                

                                <IconButton aria-label="done" onClick={()=>{console.log(item)}}>
                                    <DoneIcon style={{ color: green[500] }}/>
                                </IconButton>

                                <IconButton aria-label="clear" onClick={()=>{console.log(item)}}>
                                    <DeleteIcon style={{ color: red[500] }}/>
                                </IconButton>
                                </ListItem>))}

                        
                    </List>
                </div>
                </Container>



        </div>

    );
}
