import React from 'react'
import { makeStyles, Button } from '@material-ui/core';
import StatementsDropdown from './StatementsDropdown';
import config from "../../config/config.json";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2em 4em',
  },
  addFiles: {
    marginBottom: '1em',
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

function FinancialStatements(props) {
  const classes = useStyles();
  const { role, value, index } = props;

  const statements = [
    {
      year: '2020',
      files: [
        {
          name: 'Balance Sheet',
          url: 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-dffc6.appspot.com/o/ppt%2Ftest.pdf?alt=media&token=a496d7ea-220d-4883-aaa8-a0dfdd1796f1'
        },
        {
          name: 'Income Statement',
          url: 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-dffc6.appspot.com/o/ppt%2Ftest.pdf?alt=media&token=a496d7ea-220d-4883-aaa8-a0dfdd1796f1'
        },
        {
          name: 'Cashflow',
          url: 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-dffc6.appspot.com/o/ppt%2Ftest.pdf?alt=media&token=a496d7ea-220d-4883-aaa8-a0dfdd1796f1'
        }
      ]
    },
    {
      year: '2019',
      files: [
        {
          name: 'Balance Sheet',
          url: 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-dffc6.appspot.com/o/ppt%2Ftest.pdf?alt=media&token=a496d7ea-220d-4883-aaa8-a0dfdd1796f1'
        },
        {
          name: 'Income Statement',
          url: 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-dffc6.appspot.com/o/ppt%2Ftest.pdf?alt=media&token=a496d7ea-220d-4883-aaa8-a0dfdd1796f1'
        },
        {
          name: 'Cashflow',
          url: 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-dffc6.appspot.com/o/ppt%2Ftest.pdf?alt=media&token=a496d7ea-220d-4883-aaa8-a0dfdd1796f1'
        }
      ]
    },
    {
      year: '2018',
      files: [
        {
          name: 'Balance Sheet',
          url: 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-dffc6.appspot.com/o/ppt%2Ftest.pdf?alt=media&token=a496d7ea-220d-4883-aaa8-a0dfdd1796f1'
        },
        {
          name: 'Income Statement',
          url: 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-dffc6.appspot.com/o/ppt%2Ftest.pdf?alt=media&token=a496d7ea-220d-4883-aaa8-a0dfdd1796f1'
        },
        {
          name: 'Cashflow',
          url: 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-dffc6.appspot.com/o/ppt%2Ftest.pdf?alt=media&token=a496d7ea-220d-4883-aaa8-a0dfdd1796f1'
        }
      ]
    }
  ];

  return (
    <div>
      {
        value === index && (
          <div className={classes.root}>
            {/* Add Financial Statements Button */}
            {/* Only accessed by users*/}
            {
              (role === config.role.user) && (
                <div className={classes.addFiles}>
                  <Button variant="contained" color="primary" className={classes.addFilesBtn}>
                    Add
                  </Button>
                </div>
              )
            }

            {/* Financial Statements of each year */}
            {
              statements.map(({year, files})=>(
                <StatementsDropdown year={year} files={files}/>
              ))
            }

          </div>
        )
      }
    </div>
  )
}

export default FinancialStatements
