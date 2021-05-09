import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    clipContainer: {
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
        paddingTop: "50px",
        justifyContent: "center",
    },
    text: {
        [theme.breakpoints.up("md")]:{
            padding: "30px",
            maxWidth: "30vw"
        },
    },
}))


function ClipText(props) {
    const classes = useStyles();
    const clipart = props.clipart;

    return (
            <div className={classes.clipContainer}>
               <img 
                    src= {clipart}
                    alt= "first clip art"
                    height = "350px"
                    width= "350px"
               />
                <div className= {classes.text}>
                    <Typography variant= "h4" align= "left">
                        Iusto hic blanditiis ea
                    </Typography>
                    <Typography variant= "body1" align= "left">
                        Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. <br/>Modi sunt vel nam quo maxime non, 
                        molestias iure. Iusto hic blanditiis earum quam,<br/> 
                        repellat recusandae nulla libero! Voluptas eligendi nihil porro.  
                    </Typography>
                </div>
        </div>
    );
}

export default ClipText;