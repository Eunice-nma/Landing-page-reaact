import './App.css';
import { makeStyles } from '@material-ui/core';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const useStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },

  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#282c34",
    },
    secondary: {
      main: "#33383F",
    }
  },
})


function App() { 
  const classes = useStyle()

  return (


    <Router>
      <ThemeProvider theme = {theme}>
        <div className= {classes.root}>
          <Nav />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
          </Switch>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
    
  );
}

export default App;
