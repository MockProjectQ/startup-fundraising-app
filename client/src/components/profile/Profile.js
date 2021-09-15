import React from 'react'
import { useLocation} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CompanyDetails from './CompanyDetails'
import ContentTabs from './ContentTabs'
import Navbar from '../navbar/Navbar'
import getStartupById from '../../services/getStartupById';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        background: '#e5e5e5'
    },
}));

function Profile({user}) {
    const classes = useStyles();
    const [startup,setStartup] = React.useState({})

    const location = useLocation()
    console.log(location.pathname)

    React.useEffect(()=> {
        const fetchData = async () => {
            const startup = await getStartupById('FktzsQk2fdfnS08r9HXo')
            setStartup(startup)
        }
        fetchData();
    }, [])

    const role = ""

    return (
        <div className={classes.root}>
            {
                (startup && Object.keys(startup).length !== 0) ? (
                    <>
                    {/* Navbar */}
                    <Navbar user={user}/>
        
                    {/* Main Details */}
                    <CompanyDetails role={role} startup={startup}/>
        
                    {/* More Details */}
                    <ContentTabs role={role} startup={startup}/>
                    </>
                ): (
                    <h1>Loading...</h1>
                )
            }
        </div>
    )
}

export default Profile
