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
import { reportStartup } from '../../services/InvestorService';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';



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
    padding: '1em',
    marginBottom: '1em'
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
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);


  const {
    id,
    description,
    companyName,
    investmentRequired,
    expectedROI
  } = startup;

  const handleReport = () => {
    reportStartup(id);
    setSnackbarOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

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

                    <Typography variant="body2" component="p" align="justify">
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
                            state: { id, companyName }
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

                {/* Expected ROI */}
                <Card className={classes.card}>
                  <CardContent>
                    <div className={classes.cardTitle}>
                      Expected ROI
                    </div>
                    <h2 className={classes.fundAmount}>
                      {expectedROI} %
                    </h2>
                  </CardContent>
                </Card>

                {/* Report Button */}
                {/* Only accessed by investors*/}
                {
                  (role === config.role.others) && (
                    <Button variant="outlined" className={classes.reportBtn} onClick={handleReport}>
                      Report
                    </Button>

                  )
                }
                <Snackbar
                  open={snackbarOpen}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  message="Reported"
                  action={action}
                />
              </Grid>

            </Grid>
          </div>
        )
      }
    </div>
  )
}

export default Description
