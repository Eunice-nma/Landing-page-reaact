import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme)=>({
  root: {
    [theme.breakpoints.down('xs')] : {
      Width: '85vw',
    },
    [theme.breakpoints.down('sm')] : {
      maxWidth: '55vw',
    },
    [theme.breakpoints.up('lg')] : {
      maxWidth: '20vw',
    },
    maxWidth: '28vw',
    margin: '25px',
  },
}));

function CardComponent(props) {
  const classes = useStyles();
  const place = props.place;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="resorts"
          height="140"
          image={place}
          title="Resorts"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            lorem
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Ipsam magnam eligendi, 
            repellendus accusamus voluptas ipsa, necessitatibus 
            delectus ad blanditiis ducimus recusandae quidem 
            corporis itaque nemo cum, dolorem mollitia deleniti repudiandae!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}

export default CardComponent;