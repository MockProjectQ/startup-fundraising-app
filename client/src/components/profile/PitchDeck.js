import React, { useState } from 'react';
import {
    makeStyles,
    Paper,
    IconButton
} from '@material-ui/core';

import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { Document, Page, pdfjs } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) => ({
    pdfDoc: {
        minHeight: '75vh',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        "& canvas.react-pdf__Page__canvas": {
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(0deg)',
            height: 'auto !important',
            maxWidth: '100vw'
        },
    },
    pdfContainer: {
        padding: '1em'
    },
    controller: {
        padding: '0 1em',
        width: 'fit-content',
        margin: 'auto'
    }

}));

function PitchDeck(props) {
    const classes = useStyles();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    
    const { value, index, startup } = props;
    const {pitchDeck} = startup;

    // Document Loaded
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    // Navigate PPT
    function goToPreviousPage() {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    }

    function goToNextPage() {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    }

    function goToFirstPage() {
        setPageNumber(1);
    }

    function goToLastPage() {
        setPageNumber(numPages);
    }

    return (
        <div>
            {
                value === index && (
                    <div className={classes.pdfContainer}>


                        {/* Display PPT */}
                        <Document
                            file={pitchDeck}
                            onLoadSuccess={onDocumentLoadSuccess}
                            className={classes.pdfDoc}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>


                        {/* Navigation Controls */}
                        <Paper elevation={3} className={classes.controller}>
                            <IconButton aria-label="previous" onClick={goToFirstPage}>
                                <SkipPreviousIcon />
                            </IconButton>
                            <IconButton aria-label="previous" onClick={goToPreviousPage}>
                                <NavigateBeforeIcon />
                            </IconButton>
                            <IconButton aria-label="next" onClick={goToNextPage}>
                                <NavigateNextIcon />
                            </IconButton>
                            <IconButton aria-label="next" onClick={goToLastPage}>
                                <SkipNextIcon />
                            </IconButton>
                        </Paper>

                    </div>
                )
            }
        </div>
    )
}

export default PitchDeck
