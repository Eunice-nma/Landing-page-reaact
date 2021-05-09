import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
     backgroundColor: "#F7F7F7",
     textAlign: "center",
     height: "12vh",
     color: "grey",
     maxWidth: "100vw",
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     marginTop: "auto",
    },
})

function Footer(props) {
    const classes= useStyles()
    return (
        <div className= {classes.footer}>
            <Typography variant="h4">
                LOREM
            </Typography>
            <Typography variant = "body2">
                Lorem ipsum, dolor sit
            </Typography>
        </div>
    );
}

export default Footer;