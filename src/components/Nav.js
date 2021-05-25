import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import DropdowmMenu from "./Menu";
import MediaQuery from "react-responsive";

const useStyles = makeStyles({
  btn: {
    borderColor: "white",
    borderRadius: "15px",
    color: "white",
    marginLeft: "4vw",
  },
  navbar: {
    backgroundColor: "#282c34",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    height: "6vh",
    alignItems: "center",
    padding: "30px",
  },
  a: {
    textDecoration: "none",
  },
});

function Nav() {
  const classes = useStyles();
  const location = useLocation();
  return (
    <div className={classes.navbar}>
      <div>
        <Typography variant="h5">LOREM</Typography>
      </div>
      <div>
        <MediaQuery query="(max-width: 900px)">
          <DropdowmMenu></DropdowmMenu>
        </MediaQuery>

        <MediaQuery query="(min-width: 901px)">
          <Link to="/" className={classes.a}>
            <Button
              variant={location.pathname == "/" ? "outlined" : null}
              className={classes.btn}
            >
              Home
            </Button>
          </Link>
          <Link to="/signup" className={classes.a}>
            <Button
              className={classes.btn}
              variant={location.pathname == "/signup" ? "outlined" : null}
            >
              Sign Up
            </Button>
          </Link>
          <Link to="/login" className={classes.a}>
            <Button
              className={classes.btn}
              variant={location.pathname == "/login" ? "outlined" : null}
            >
              login
            </Button>
          </Link>
        </MediaQuery>
      </div>
    </div>
  );
}

export default Nav;
