import React from 'react'
import { useHistory } from "react-router-dom";

import {
  makeStyles,
  Avatar,
  Typography,
  Grid,
  Chip,
  IconButton,
  Button
} from '@material-ui/core';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EditIcon from '@material-ui/icons/Edit';

import { green, red, amber, blue } from '@material-ui/core/colors'
import config from "../../config/config.json";
import { approveStartupWithId, rejectStartupWithId } from '../../services/AdminService';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    boxShadow: theme.shadows[3],
    padding: '1em',
    background: '#ffffff',
    [theme.breakpoints.up('md')]: {
      padding: '1em 3em',
    }
  },
  content: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  details: {
    display: 'flex'
  },
  detailsText: {
    marginLeft: '5px'
  },
  tag: {
    margin: '1em 1em 0 0'
  },
  cinNumber: {
    marginLeft: '1em',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      fontSize: '0.5em'
    }
  },
  mainTop: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  companyName: {
    flexGrow: 1
  },
  mailIcon: {
    color: red[700],
    border: '2px solid',
    padding: '1px',
    borderRadius: '5px'
  },
  phoneIcon: {
    color: green[700],
    border: '2px solid',
    padding: '1px',
    borderRadius: '5px'
  },
  addressIcon: {
    color: blue[700],
    border: '2px solid',
    padding: '1px',
    borderRadius: '5px'
  },
  pending: {
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[500],
    "&:hover": {
      backgroundColor: amber[600],
      "@media (hover: none)": {
        backgroundColor: amber[500]
      }
    }
  },
  approved: {
    color: theme.palette.getContrastText(green[600]),
    backgroundColor: green[600],
    "&:hover": {
      backgroundColor: green[800],
      "@media (hover: none)": {
        backgroundColor: green[600]
      }
    }
  },
  rejected: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
      "@media (hover: none)": {
        backgroundColor: red[500]
      }
    }
  },
  operations: {
    '& > *': {
      marginRight: theme.spacing(1),
    },
  }
}));

function CompanyDetails(props) {
  const classes = useStyles();
  let history = useHistory()

  const role = props.role;

  const {
    id,
    companyName,
    CINNumber,
    companyLogo,
    companyEmail,
    companyPhone,
    companyAddress,
    tags,
    status
  } = props.startup;

  return (
    <div className={classes.root}>
      {/* Company Logo */}
      <Avatar alt={companyName} src={companyLogo} className={classes.large} />

      {/* Company Details */}
      <div className={classes.content}>
        <div className={classes.mainTop}>
          <Typography variant="h5" gutterBottom className={classes.companyName}>
            {/* Company name */}
            <span>{companyName}</span>

            {/* UIN Number */}
            <Chip
              variant="outlined"
              color="primary"
              label={"CIN Number: " + CINNumber}
              className={classes.cinNumber}
            />

          </Typography>


          {
            role === config.role.user && (
              <div className={classes.operations}>
                {/* Status */}
                <Chip label={"Status: " + config.status[status]} className={classes[status]} />

                {/* Edit */}
                <IconButton aria-label="edit"
                  onClick={() => history.push({
                    pathname: `/edit/${id}`,
                    state: { data: props.startup }
                  })}>
                  <EditIcon />
                </IconButton>
              </div>
            )
          }
          {
            role === config.role.admin && (
              <div className={classes.operations}>
                {
                  status === "approved" ? (
                    < Chip label={"Status: " + config.status[status]} className={classes[status]} />
                  ) : (

                    <Button
                      variant="contained"
                      size="small"
                      className={classes.approved}
                      onClick={() => approveStartupWithId(id)}
                    >
                      Approve
                    </Button>
                  )
                }
                {
                  status === "rejected" ? (
                    < Chip label={"Status: " + config.status[status]} className={classes[status]} />
                  ) : (

                    <Button
                      variant="contained"
                      size="small"
                      className={classes.rejected}
                      onClick={() => rejectStartupWithId(id)}
                    >
                      Reject
                    </Button>
                  )
                }


                <IconButton aria-label="edit" onClick={() => history.push(`/edit/${id}`)} >
                  <EditIcon />
                </IconButton>
              </div>
            )
          }
        </div>

        <Grid container spacing={2}>
          {/* Email */}
          <Grid item xs={12} sm={6}>
            <Typography variant="caption" color="textSecondary" gutterBottom className={classes.details}>
              <MailOutlineIcon fontSize="small" className={classes.mailIcon} />
              <span className={classes.detailsText}>email: {companyEmail}</span>
            </Typography>

          </Grid>

          {/* Phone */}
          <Grid item xs={12} sm={6}>
            <Typography variant="caption" color="textSecondary" gutterBottom className={classes.details}>
              <PhoneIcon fontSize="small" className={classes.phoneIcon} />
              <span className={classes.detailsText}>phone: {companyPhone}</span>
            </Typography>
          </Grid>

          {/* Location */}
          <Grid item xs={12} sm={6}>
            <Typography variant="caption" color="textSecondary" gutterBottom className={classes.details}>
              <LocationOnIcon fontSize="small" className={classes.addressIcon} />
              <span className={classes.detailsText}>{companyAddress}</span>
            </Typography>
          </Grid>
        </Grid>

        {/* Tags */}
        {
          tags.map((tag, index) =>
            <Chip variant="outlined" color="primary" size="small" label={tag} className={classes.tag} key={index} />
          )
        }

      </div>
    </div>
  )
}

export default CompanyDetails
