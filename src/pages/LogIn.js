import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) =>({
    body: {
        maxWidth: "100vw",
        display: "flex",
        [theme.breakpoints.down("sm")]:{
            flexDirection: "column-reverse",
            padding: "100px 5vw 100px 5vw",
        },
        [theme.breakpoints.down("md")]:{
            padding: "100px 15vw 100px 15vw",
        },
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 20vw 100px 20vw",
    },
    signupContainer: {
        backgroundColor:"#282c34",
        color: "white",
        height: "50vh",
        display: "flex",
        flex: "2",
        flexDirection: " column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        width: "45vw",
        [theme.breakpoints.down("sm")]:{
            width: "60vw",
        },
    },
    loginContainer: {
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        height: "50vh",
        display: "flex",
        flex: "3",
        flexDirection: " column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        width: "45vw",
        [theme.breakpoints.down("sm")]:{
            width: "60vw",
            variant: "h4",
        },
    },
    inputField: {
        margin: theme.spacing(2),
        width: "30vw",
        [theme.breakpoints.down("sm")]:{
            width: "50vw",
            margin: theme.spacing(1),
        },
    },
    center: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    btn: {
        borderRadius: '15px',
        color: 'grey',
        margin: "10px"
    },
    signUpBtn: {
        borderRadius: '15px',
        color: "White",
        borderColor: "white",
        margin: "10px",
    },
    a: {
        textDecoration: "none",
        color: "grey",
        '&:hover': {
            color: "#282c34",
        }
    },


}))


function LogIn(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.body}>

                    <div className={classes.signupContainer}>
                        <Typography variant="h4" >
                            Create An Account!
                        </Typography>
                        <Typography variant="body1">
                            You don't have an account, join us today! <br />
                            Create an account
                        </Typography>
                        <Link to= "/signup" className={classes.a}>
                            <Button variant= "outlined" className={classes.signUpBtn} > Sign Up</Button>
                        </Link>
                    </div>
                    
                
                    <div className={classes.loginContainer}>
                        <Typography variant= "h3">
                            Login
                        </Typography>
                        <form action="" className={classes.center}>
                        <TextField label=" Email" variant="outlined" className={classes.inputField} />
                        <TextField label=" Password" variant="outlined" className={classes.inputField}/>
                        </form>
                        <Button variant= "outlined" className={classes.btn} > Submit</Button>
                        <div className={classes.links}>
                            <a href="#" className={classes.a}>forgot password?</a>
                        </div>
                    </div>

                 
            </div>
           
        </div>
    );
}

export default LogIn;