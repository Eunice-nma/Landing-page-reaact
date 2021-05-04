import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    body: {
        marginBottom: '5vh',
    },
    header: {
        marginTop: '20vh',
        [theme.breakpoints.down('xs')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '5rem'
        },
    },
    subHeader: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.7rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem'
        },
    },
    textContainer: {
        marginTop: '1vw',
        [theme.breakpoints.down('sm')]: {
            width: '70vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '45vw',
        },
    }
}))

function LandPageText() {
    const classes = useStyles()
    return (
        <div className= {classes.body}>
            <Typography
                variant = "h2"
                className= {classes.header}
            >
                Landing Page
            </Typography>
            <Typography
                variant = "h4"
                className= {classes.subHeader}
            >
                Simple Landing Page With React
            </Typography>
            <Typography
                variant = "body1"
                className= {classes.textContainer}
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Repellat doloremque eos excepturi dicta incidunt iure tenetur 
                veniam est suscipit? Cum, sed? Fuga quibusdam fugit aperiam eius, 
                consequuntur saepe tempore exercitationem?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
               
            </Typography>

            
        </div>
    );
}

export default LandPageText;