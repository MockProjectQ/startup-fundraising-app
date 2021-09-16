import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { Tooltip } from '@material-ui/core';
import { getReportedStartUps, approveStartup, rejectStartup } from '../../services/startUpService';

const primary = "#3F51B5";
const useStyles = makeStyles(theme => ({

    mainContainer: {
        paddingTop: "5%",
        paddingBottom: "5%",
        width: "45%",
        [theme.breakpoints.between('xs','sm')]:{
            width :"100%",
            margin :"auto",
            //marginTop:"2.5%",
        },
    },
    companyContainer: {
        backgroundColor: "#FFFFFF",
        paddingBottom: "3%",
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        height: "60vh",
        overflowY: "auto",
    },

    titleContainer: {
        display: "flex",
        paddingTop: "2.5%",
        paddingBottom: "2.5%",
        alignItems: "center",
    },

    noOfReports: {
        marginLeft: "5px",
        borderRadius: "50%",
        backgroundColor: red[700],
        color: "#ffffff",
        paddingLeft: "4px",
        paddingRight: "4px",
    },
    avatar: {
        backgroundColor: primary,
    },
    list: {
        boxShadow: "1px 2px 3px rgba(0,0,0,0.50)",
    },

}));

export default function ReportList() {
    const [result, setResult] = useState([]);

    const classes = useStyles();

    async function removeStartup(data) {
        let resultset = result.filter((ele) => {
            if (ele.CINNumber !== data.CINNumber) {
                return ele
            }
        });
        console.log(resultset);
        setResult(resultset);
    }


    async function startupApproval(data) {
        try {
            approveStartup(data)
        }
        catch (err) {
            console.log(err);
        }
        removeStartup(data)
    }

    async function startupReject(data) {
        try {
            rejectStartup(data)
        }
        catch (err) {
            console.log(err);
        }
        removeStartup(data)
    }


    useEffect(() => {
        async function fetchList() {

            try {
                let result = await getReportedStartUps();

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
                        {(result.length === 0) ? <Typography variant="caption" component="h3" align="center">No New Reports</Typography> : result.map((item, ind, arr) => (<ListItem value={item}>
                            <ListItemAvatar>
                                <Avatar src={item.companyLogo} variant="square" className={classes.avatar}>
                                    {<PersonIcon />}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText style={{ cursor: "pointer" }} onClick={() => { console.log(item) }}>
                                <Typography component="span"> {item.companyName}</Typography>
                                <Typography component="span" className={classes.noOfReports}>{item.reports}</Typography>

                            </ListItemText>

                            <Tooltip title="Approve Startup">
                                <IconButton aria-label="done" onClick={() => { startupApproval(item) }}>
                                    <DoneIcon style={{ color: green[500] }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Reject Startup">
                                <IconButton aria-label="clear" onClick={() => { startupReject(item) }}>
                                    <DeleteIcon style={{ color: red[500] }} />
                                </IconButton>
                            </Tooltip>
                        </ListItem>))}


                    </List>
                </div>
            </Container>



        </div>

    );
}
