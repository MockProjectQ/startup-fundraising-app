import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CompanyDetails from './CompanyDetails'
import ContentTabs from './ContentTabs'
import Navbar from '../navbar/Navbar'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        background: '#e5e5e5'
    },
}));

function Profile() {
    const classes = useStyles();

    const user = {
        name: 'User1',
        email: 'user@email.com',
        role: '',
        companyName: 'MyCompany',
        CINNumber: 'U67190MH2014PTC099999',
        websiteLink: 'www.google.com',
        companyEmail: 'company@email.com',
        companyPhone: '9090909090',
        companyAddress: 'C-Wing, Level 2, Eureka Towers, Mindspace, W, Mumbai, 400064',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut maximus diam. Suspendisse sed massa accumsan diam faucibus feugiat nec eu mauris. Aenean at leo non nibh tristique congue nec et orci. Sed nunc sapien, sodales id risus quis, posuere efficitur justo. Sed eget laoreet sapien. Vestibulum eget erat at ipsum elementum condimentum. Morbi ligula nisi, congue sed vehicula congue, auctor vel nisl. Donec porttitor magna a ullamcorper rhoncus. Nullam molestie mattis congue. Aenean tellus lectus, luctus in magna in, finibus gravida massa. Quisque a purus in leo rutrum pulvinar.',
        tags: ['technology', 'computers'],
        investmentRequired: 1000000,
    }

    return (
        <div className={classes.root}>
            {/* Navbar */}
            <Navbar />

            {/* Main Details */}
            <CompanyDetails user={user}/>

            {/* More Details */}
            <ContentTabs user={user}/>
        </div>
    )
}

export default Profile
