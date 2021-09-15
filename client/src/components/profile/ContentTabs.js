import React from 'react';
import {
    makeStyles,
    Paper,
    Tabs,
    Tab
} from '@material-ui/core';

import Description from './Description';
import PitchDeck from './PitchDeck';
import FinancialStatements from './FinancialStatements';
import PersonalDetails from './PersonalDetails';
import Investors from './Investors';

import config from "../../config/config.json";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function ContentTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const role = props.role;

    // props
    const {
        description,
        companyName,
        investmentRequired,
        pitchDeck
    } = props.startup;

    // Handle Tab change
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                >
                    {/* Common Tabs */}
                    <Tab label="Description" />
                    <Tab label="Pitch Deck" />
                    <Tab label="Financial Statements" />

                    {/* Only Admin Accessed Tabs */}
                    {
                        (role === config.role.admin) && (
                            <Tab label="Personal Details" />
                        )
                    }

                    {/* Only User Accessed Tabs */}
                    {
                        (role === config.role.user) && (
                            [
                                <Tab label="Personal Details" key={3} />,
                                <Tab label="Investors" key={4} />
                            ]
                        )
                    }

                </Tabs>
            </Paper>

            {/* Tab Panels */}
            <Description
                value={value}
                index={0}
                role={role}
                startup={{
                    description,
                    companyName,
                    investmentRequired
                }}
            />
            <PitchDeck value={value} index={1} startup={{pitchDeck}}/>
            <FinancialStatements value={value} index={2} role={role} />

            {/* Only Admin accessed tab panel */}
            {
                (role === config.role.admin) && (
                    <PersonalDetails value={value} index={3} />
                )
            }

            {/* Only user accessed tab panel */}
            {
                (role === config.role.user) && (
                    [
                        <PersonalDetails key={'personalDetails'} value={value} index={3} />,
                        <Investors key={'investors'} value={value} index={4} />
                    ]
                )
            }
        </div>
    )
}

export default ContentTabs
