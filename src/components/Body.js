import Typography from '@material-ui/core/Typography';
import firstclip from '../clipart4.jpeg';
import secondclip from '../clipart3.jpeg';
import { makeStyles } from '@material-ui/core';
import ClipText from './ClipText';
import CardComponent from './Card';
import place1 from '../place1.jpeg';
import place2 from '../place2.jpeg';
import place3 from '../place3.jpeg';
import Banner from './Banner';

const useStyles = makeStyles((theme) => ({
    body: {
        [theme.breakpoints.down("sm")]:{
            padding: "70px 7vw 70px 7vw",
        },
        padding: "70px 13vw 70px 13vw",
        fontSize: "1rem",
        textAlign: "center",
    },
    topMargin:{
        marginTop: "50px"
    },
    cardContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      },
}))


function Body(props) {
    const classes =useStyles()
    return (
        <div className={classes.body}>
                <Typography variant= "h4" align= "left">
                    Modi sunt vel nam
                </Typography>
                <Typography variant= "body1" align= "left">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Modi sunt vel nam quo maxime non, <br/>
                    molestias iure. Iusto hic blanditiis earum quam, 
                    repellat recusandae nulla libero! Voluptas eligendi nihil porro.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
                     Modi sunt vel nam quo maxime non, molestias iure. Iusto hic 
                     blanditiis earum quam, 
                    repellat recusandae nulla libero! Voluptas eligendi nihil porro.
                </Typography>
                <ClipText clipart = {firstclip}/>
                <Typography variant= "h4" align= "left" className={classes.topMargin}>
                    Lorem ipsum dolor sit
                </Typography>
                <Typography variant= "body1" align= "left">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Modi sunt vel nam quo maxime non, <br/>
                    molestias iure. Iusto hic blanditiis earum quam, 
                    repellat recusandae nulla libero! Voluptas eligendi nihil porro.
                </Typography>
                <ClipText clipart = {secondclip}/>
                <Typography variant= "h4" align= "left" className={classes.topMargin}>
                    Lorem ipsum dolor sit
                </Typography>
                <div className= {classes.cardContainer}>
                    <CardComponent  place= {place1}/>
                    <CardComponent  place= {place2}/>
                    <CardComponent  place= {place3}/>
                </div>
        </div>
        
    );
}

export default Body;