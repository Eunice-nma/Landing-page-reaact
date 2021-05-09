import Nav from './Nav';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    body: {
        color: "#fff",
        padding: "3.5vw",
        fontSize: "1rem",
        backgroundColor:"#282c34",
        minHeight: "65vh",
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

function Banner() {
    const classes = useStyles()
    return (
        <div className= {classes.body}>

            {/* <Nav /> */}
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

export default Banner;