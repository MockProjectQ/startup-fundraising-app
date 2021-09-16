import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/Person';
import { getUserById } from '../../services/UserService';

const primary = "#3F51B5";
const useStyles = makeStyles({
    root: {

        height: "100%",
        boxShadow: "0 1px 3px rgba(0,0,0,0.50)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    cardheader: {
        fontSize: "20px",
        fontWeight: "bold",

    },
    avatar: {
        backgroundColor: primary,

    },
    headerTitle: {
        paddingBottom: "5px",
    },
    content: {
        marginTop: "10px",
    },

    reqFund: {
        marginLeft: "15px",
        color: primary,
        fontWeight: "bold",
    }

});

export default function CompanyCard(props) {

    const [userName,setUserName] = useState(null);
    const classes = useStyles();
    let history = useHistory()
    console.log("Reached Here ");
    console.log("Props ", props);

    useEffect(() => {
        async function fetchList() {
            let results = []

            try {
                results = await getUserById(props.company.userId);
                setUserName(results.name)
            }
            catch (err) {
            }

        }
        fetchList()

    }, []);

    const handleRedirect = () => {
        history.push({
            pathname: `/startup/${props.company.id}`,
            state: { id:props.company.id }
        })
    }

    return (
        <Card className={classes.root} value={props.company} onClick={ handleRedirect }>
            <CardHeader
                className={classes.cardheader}
                avatar={
                    <Avatar className={classes.avatar} src={props.company.companyLogo}>
                        {<Person />}
                    </Avatar>
                }

                title={props.company.companyName}
                titleTypographyProps={{ variant: 'title', className: classes.headerTitle }}
                subheader={"By "+userName}// + props.user.name}
            />
            <CardContent>

                <Typography variant="body2" component="p" gutterBottom>
                    {(props.company.description.length > 100) ? props.company.description.slice(0, 100) + "..." : props.company.description}
                </Typography>

            </CardContent>

            <CardActions>
                <Typography variant="body1" className={classes.reqFund}>
                    {"\u20B9 " + props.company.investmentRequired}
                </Typography>
            </CardActions>
        </Card>
    );
}
