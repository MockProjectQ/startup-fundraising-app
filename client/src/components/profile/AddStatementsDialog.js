import React from 'react'
import { makeStyles, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import addFinancialStatement from '../../services/addFinancialStatement';

const useStyles = makeStyles((theme) => ({
    addFiles: {
        marginBottom: '1em',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    input: {
        display: 'none',
    },
    formFields: {
        "& > *": {
            margin: '1em 0',
        }
    }
}));

function AddStatementsDialog(props) {
    const classes = useStyles();
    const { id } = props;

    const [open, setOpen] = React.useState(false);

    const [year, setYear] = React.useState(new Date());
    const [statementName, setStatementName] = React.useState("");
    const [file, setFile] = React.useState(null);

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }


    const handleUpload = (e) => {
        e.preventDefault();
        if(file && statementName && year) {
            addFinancialStatement(id, {year: year.getFullYear(), statementName, file})
            setOpen(false)
        }
        else{
            console.log("error")
        }
    }


    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div className={classes.addFiles}>
            <Button variant="contained" color="primary" className={classes.addFilesBtn} onClick={() => (setOpen(true))}>
                Add
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Financial Statement</DialogTitle>
                <DialogContent className={classes.formFields}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            variant="inline"
                            inputVariant="outlined"
                            fullWidth
                            required
                            autoFocus
                            views={["year"]}
                            label="Year"
                            value={year}
                            onChange={setYear}
                            maxDate={new Date()}
                        />
                    </MuiPickersUtilsProvider>
                    <TextField
                        variant="outlined"
                        id="name"
                        label="Statement Name"
                        fullWidth
                        required
                        error={false}
                        helperText=""
                        onChange={(e) => setStatementName(e.target.value)}
                    />
                    <div className={classes.fileUpload}>
                        <input
                            accept="application/pdf"
                            className={classes.input}
                            id="financialStatement"
                            type="file"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="financialStatement">
                            <Button variant="contained" color="primary" component="span">
                                Upload File (.PDF)
                            </Button>
                        </label>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleUpload} variant="contained" color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddStatementsDialog
