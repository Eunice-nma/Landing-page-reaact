import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    btn: {
        borderColor: 'white',
        borderRadius: '15px',
        color: 'white',
        marginLeft: '4vw'
    },
    navbar: {
        textAlign: 'right'
    }
})

function Nav() {
    const classes = useStyles()
    return (
        <div className={classes.navbar}> 
            <Button variant="outlined" className={classes.btn}>
                Home
            </Button>
            <Button className={classes.btn}>
                Contacts
            </Button>
            <Button className={classes.btn}>
                About
            </Button>
        </div>
    );
}

export default Nav;