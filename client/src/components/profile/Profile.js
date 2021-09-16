import React from 'react'
import { useLocation, useParams, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CompanyDetails from './CompanyDetails'
import ContentTabs from './ContentTabs'
import Navbar from '../navbar/Navbar'
import {getStartupByUser, getStartupById} from '../../services/getStartup';
import config from '../../config/config.json'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        background: '#e5e5e5'
    },
}));

function Profile() {
    const classes = useStyles();
    let history = useHistory()
    const [startup, setStartup] = React.useState({})

    const location = useLocation()
    const state = useLocation().state

    let role;

    const { id } = useParams()
    console.log(id)

    if (state) {
        role = state.role
    }
    else {
        role = ""
    }

    React.useEffect(() => {
        const fetchData = async () => {
            let startup;
            if(id){
                startup = await getStartupById(id)
            }
            else if(state){
                    startup = await getStartupByUser(state.id)
            }
            else{
                history.push('/home')
            }
            setStartup(startup)
        }
        fetchData();
    }, [])


    return (
        <div className={classes.root}>
            {
                (startup && Object.keys(startup).length !== 0) ? (
                    <>
                        {/* Navbar */}
                        <Navbar />

                        {/* Main Details */}
                        <CompanyDetails role={role} startup={startup} />

                        {/* More Details */}
                        <ContentTabs role={role} startup={startup} />
                    </>
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </div>
    )
}

export default Profile
