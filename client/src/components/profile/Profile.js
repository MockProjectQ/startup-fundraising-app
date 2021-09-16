import React from 'react'
import { useLocation, useParams, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CompanyDetails from './CompanyDetails'
import ContentTabs from './ContentTabs'
import Navbar from '../navbar/Navbar'
import { getStartupByUser, getStartupById } from '../../services/getStartup';
import { auth } from '../../config/firebase';
import { getUserByEmail } from '../../services/UserService';

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
    const [role, setRole] = React.useState('')
    const [user, setUser] = React.useState('');

    const state = useLocation().state

    const { id } = useParams()

    
    React.useEffect(() => {
        const authListener = async () => {
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                    setUser(user);
                    const userData = await getUserByEmail(user.email)
                    setRole(userData.role)
                }
                else {
                    setUser("");
                    setRole("")
                }
            });
        };

        const fetchData = async () => {
            await authListener();
            let startup;
            if (id) {
                startup = await getStartupById(id)
            }
            else if (state) {
                startup = await getStartupByUser(state.id)
            }
            else {
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
