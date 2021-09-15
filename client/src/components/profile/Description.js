import React from 'react'
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button
} from '@material-ui/core';
import config from "../../config/config.json";
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    padding: '2em 3em',
  },
  cardTitle: {
    fontWeight: 'bold',
    margin: '1em 0',
  },
  fundAmount: {
    marginBottom: 0,
  },
  card: {
    padding: '1em'
  },
  donateBtn: {
    textDecoration: "none",
    border: "none"
  },
  reportBtn: {
    color: '#e23636',
    borderColor: '#e23636',
    width: '100%',
    marginTop: '2em'
  }
}));

function Description(props) {
  const classes = useStyles();
  const { value, index, startup } = props;
  const role = props.role;

  const {
    description,
    companyName,
    investmentRequired
  } = startup;

  return (
    <div>
      {
        value === index && (
          <div className={classes.root}>
            <Grid container spacing={2}>


              {/* About Company Card */}
              <Grid item xs={12} sm={8}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6" className={classes.cardTitle}>
                      About {companyName}
                    </Typography>

                    <Typography variant="body2" component="p">
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={4}>

                {/* Funding Card */}
                <Card className={classes.card}>
                  <CardContent>
                    <div className={classes.cardTitle}>
                      Funding Required
                    </div>
                    <h2 className={classes.fundAmount}>
                      ₹ {investmentRequired}
                    </h2>
                  </CardContent>

                  {/* Donate and Share Button */}
                  {/* Only accessed by investors*/}
                  {
                    (role === config.role.others) && (
                      <CardActions>
                        <Link
                          to={{
                            pathname: "/investor",
                            state: {companyName}
                          }}
                          className={classes.donateBtn}
                        >
                          <Button color="primary" variant="contained">
                            Donate
                          </Button>
                        </Link>
                        <Button variant="contained">
                          Share
                        </Button>
                      </CardActions>
                    )
                  }
                </Card>

                {/* Report Button */}
                {/* Only accessed by investors*/}
                {
                  (role === config.role.others) && (
                    <Button variant="outlined" className={classes.reportBtn}>Report</Button>
                  )
                }
              </Grid>

            </Grid>
          </div>
        )
      }
    </div>
  )
}

export default Description
