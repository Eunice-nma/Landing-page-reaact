import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  a: {
    textDecoration: "none",
    color: "black",
  },
});

function DropdowmMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AiOutlineMenu size="2em" color="white" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/" className={classes.a}>
          <MenuItem onClick={handleClose}>HOME</MenuItem>
        </Link>
        <Link to="/signup" className={classes.a}>
          <MenuItem onClick={handleClose}>SIGN UP</MenuItem>
        </Link>
        <Link to="/login" className={classes.a}>
          <MenuItem onClick={handleClose}>LOGIN</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default DropdowmMenu;
