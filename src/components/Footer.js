import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
     backgroundColor: "white",
     textAlign: "center",
     height: "10vh",
     padding: "15px"
    },
})

function Footer(props) {
    const classes= useStyles()
    return (
        <div className= {classes.footer}>
            <Typography variant="h4">
                LOREM
            </Typography>
            <Typography>
                Lorem ipsum, dolor sit
            </Typography>
        </div>
    );
}

export default Footer;