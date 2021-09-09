import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    input: {
        display: 'none',
    },
    fileUpload: {
        margin: '1em 0',
    }
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function FinancialStatements() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Year</TableCell>
                        <TableCell align="center">Balance Sheet</TableCell>
                        <TableCell align="center">Income Statement</TableCell>
                        <TableCell align="center">Cashflow</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">
                                <div className={classes.fileUpload}>
                                    <input
                                        accept="application/pdf"
                                        className={classes.input}
                                        id="balanceSheet"
                                        type="file"
                                    />
                                    <label htmlFor="balanceSheet">
                                        <Button variant="outlined" color="primary" component="span">
                                            Balance Sheet
                                        </Button>
                                    </label>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <div className={classes.fileUpload}>
                                    <input
                                        accept="application/pdf"
                                        className={classes.input}
                                        id="incomeStatement"
                                        type="file"
                                    />
                                    <label htmlFor="incomeStatement">
                                        <Button variant="outlined" color="primary" component="span">
                                            Income Statement
                                        </Button>
                                    </label>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <div className={classes.fileUpload}>
                                    <input
                                        accept="application/pdf"
                                        className={classes.input}
                                        id="cashflow"
                                        type="file"
                                    />
                                    <label htmlFor="cashflow">
                                        <Button variant="outlined" color="primary" component="span">
                                            Cashflow
                                        </Button>
                                    </label>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default FinancialStatements
