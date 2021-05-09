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
            flexDirection: "column",
            padding: "100px 5vw 100px 5vw",
        },
        [theme.breakpoints.down("md")]:{
            padding: "100px 15vw 100px 15vw",
        },
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 20vw 100px 20vw",
    },
    loginContainer: {
        backgroundColor:"#282c34",
        color: "white",
        height: "50vh",
        display: "flex",
        flex: "2",
        flexDirection: " column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        width: "45vw",
        [theme.breakpoints.down("sm")]:{
            width: "60vw",
        },
        
    },
    signupContainer: {
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
        margin: "10px",
        [theme.breakpoints.down("sm")]:{
            margin: "4px",
        },
    },
    loginBtn: {
        borderRadius: '15px',
        color: "White",
        borderColor: "white",
        margin: "10px",
    },
    a:{
        textDecoration: "none",
    },
    margin: {
        margin: "50px"
    }


}))


function SignUp(props) {
    const classes = useStyles();
    return (
        <div>

            <div className={classes.body}>

                    <div className={classes.signupContainer}>
                        <Typography variant= "h3">
                            Sign up
                        </Typography>
                        <form action="" className={classes.center}>
                        <TextField label=" Name" variant="outlined" className={classes.inputField} />
                        <TextField label=" Email" variant="outlined" className={classes.inputField} />
                        <TextField label=" Password" variant="outlined" className={classes.inputField} />
                        </form>
                        <Button variant= "outlined" className={classes.btn} > Submit</Button>                        
                    </div>


                    <div className={classes.loginContainer}>
                    <Typography variant="h4" >
                            Welcome Back!
                        </Typography>
                        <Typography variant="body1">
                            Already have an Acount?
                            Login
                        </Typography>
                        <Link to= "/login" className={classes.a}>
                            <Button variant= "outlined" className={classes.loginBtn} > Login</Button>
                        </Link> 
                    </div>
            
            </div>
     
        </div>
    );
}

export default SignUp;