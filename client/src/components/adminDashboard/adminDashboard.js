import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ApprovedList from '../adminDashboard/approvedList'
import ForApprovalList from '../adminDashboard/forApprovalList'
import ReportList from '../adminDashboard/reportList'
import Navbar from '../navbar/Navbar';


const useStyles = makeStyles({

    Hcontainer: {
        paddingTop: "5%",
        width: "85%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export default function AdminDashboard() {
    const classes = useStyles();

    useEffect(() => {
        document.body.style.backgroundColor = "#E5E5E5";
        return () => {
            document.body.style.backgroundColor = null;
        }
    });

    return (
        <div>
             <Navbar/>
            <div className={classes.Hcontainer}>
               
                <ForApprovalList />
                <ReportList />
            </div>
            <ApprovedList />

        </div>

    )
}
