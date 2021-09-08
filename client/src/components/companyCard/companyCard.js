import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/Person';

const primary = "#3F51B5";
const useStyles = makeStyles({
    root: {
        
        height: "100%",
        boxShadow: "0 1px 3px rgba(0,0,0,0.50)",
        cursor : "pointer",
    },
    cardheader : {
        fontSize: "20px",
        fontWeight: "bold",
        
    },
    avatar: {
        backgroundColor: primary,
        
    },
    headerTitle : {
        paddingBottom: "5px",
    },
    content: {
        marginTop: "10px",
    },

    reqFund : {
        marginLeft:"15px",
        color: primary,
        fontWeight: "bold",
    }

});

export default function CompanyCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} value={props.company} onClick = {()=>{console.log(props.company)}}>
            <CardHeader
                className={classes.cardheader}
                avatar={
                    <Avatar className={classes.avatar} >
                        <Person />
                    </Avatar>
                }

                title={props.company.title}
                titleTypographyProps = {{variant:'title', className:classes.headerTitle}}
                subheader={"By " + props.company.author_name}
            />
            <CardContent>

                <Typography variant="body2" component="p" gutterBottom>
                    {props.company.content}
                </Typography>

            </CardContent>
                
            <CardActions>
            <Typography variant="body1" className={classes.reqFund}>
                    {"\u20B9 10,00,000"}
                </Typography>
            </CardActions>
        </Card>
    );
}
