import React from 'react'
import { makeStyles, Grid } from '@material-ui/core';
import InvestorDetail from './InvestorDetail';
import { getInvestors } from '../../services/InvestorService';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0 4em',
        flexGrow: 1,
    },
}));

function Investors(props) {
    const classes = useStyles();
    const { value, index, id } = props;

    const [investors, setInvestors] = React.useState([])

    React.useEffect(() => {
        const fetchInvestorsData = async () => {
            const response = await getInvestors(id);
            setInvestors(response)

        }
        fetchInvestorsData();
    }, [])

    return (
        <div>
            {
                value === index && (
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            {/* Each investors */}
                            {
                                investors.map((investor) => (
                                    <InvestorDetail
                                        key={investor.id}
                                        investor={investor}
                                    />
                                ))
                            }
                        </Grid>
                    </div>
                )
            }
        </div>
    )
}

export default Investors
