import React from 'react'
import { makeStyles } from '@material-ui/core';
import StatementsDropdown from './StatementsDropdown';
import config from "../../config/config.json";
import getFinancialData from '../../services/getFinancialStatements';
import AddStatementsDialog from './AddStatementsDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2em 4em',
  }
}));

function FinancialStatements(props) {
  const classes = useStyles();
  const { role, value, index, id } = props;

  const [statements, setStatements] = React.useState([])

  React.useEffect(() => {
    const fetchFinancialData = async () => {
      const response = await getFinancialData(id);
      setStatements(response)

    }
    fetchFinancialData();
  }, [])

  
  return (
    <div>
      {
        value === index && (
          <div className={classes.root}>
            {/* Add Financial Statements Button */}
            {/* Only accessed by users*/}
            {
              (role === config.role.user) && (
                <AddStatementsDialog />
              )
            }

            {/* Financial Statements of each year */}
            {
              statements.map(({ id, year, files }) => (
                <StatementsDropdown key={id} year={year} files={files} />
              ))
            }

          </div>
        )
      }
    </div>
  )
}

export default FinancialStatements
