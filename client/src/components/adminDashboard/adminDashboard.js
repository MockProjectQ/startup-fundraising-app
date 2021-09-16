import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ApprovedList from '../adminDashboard/approvedList'
import ForApprovalList from '../adminDashboard/forApprovalList'
import ReportList from '../adminDashboard/reportList'
import Navbar from '../navbar/Navbar';
import { auth } from '../../config/firebase'
import { Redirect, useHistory } from 'react-router';
import { getUserByEmail } from '../../services/UserService'

const useStyles = makeStyles(theme => ({

    Hcontainer: {
        paddingTop: "5%",
        width: "85%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.between('xs', 'sm')]: {
            display: "block",
        },
    },
}));

export default function AdminDashboard() {
    const classes = useStyles();

    let history = useHistory();
    const [userLoggedIn, setUserLoggedIn] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        document.body.style.backgroundColor = "#E5E5E5";
        return () => {
            document.body.style.backgroundColor = null;
        }
    });

    useEffect(() => {
        const authListener = async () => {
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                    //console.log(userData.role)
                    if (!user) {
                        alert("You need to be logged in to access this page");
                        //useHistory().push('/home')
                    }
                    else {
                        const userData = await getUserByEmail(user.email)
                        if (userData.role === "user") {
                            //alert("You dont have access to this page");
                            setUserLoggedIn(userData);

                        }
                        else if (userData.role === "admin") {
                            setUserLoggedIn(userData)
                            setIsAdmin(true);
                            console.log("you have access")
                        }
                    }

                    
                }
                else {
                    setUserLoggedIn(null)
                }
            });
        };

        authListener()
    }, [])


    if (isAdmin === true) {
        return (
            <div>
                <Navbar />
                <div className={classes.Hcontainer}>

                    <ForApprovalList />
                    <ReportList />
                </div>
                <ApprovedList />

            </div>

        )

    }
    else if(userLoggedIn === null){
        return <Redirect to='/home'></Redirect>
    }
    else if (userLoggedIn.role === 'user') {
        return <Redirect to={{
            pathname: '/profile',
            state: { id: userLoggedIn.id }
        }} ></Redirect>
    }
    else {
        return <div></div>
    }
}
