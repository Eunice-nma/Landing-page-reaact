import './App.css';
import LandPageText from './components/Body';
import Nav from './components/Nav';
import { makeStyles } from '@material-ui/core';
import CardComponent from './components/Card';
import place1 from './place1.jpeg';
import place2 from './place2.jpeg';
import place3 from './place3.jpeg';
import Footer from './components/Footer';

const useStyle = makeStyles({
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  mainBody: {
    backgroundColor:"#282c34",
    color: "#fff",
    padding: "3.5vw",
    fontSize: "1rem",
  }

});


function App() {
  const classes = useStyle()

  return (
    <div className="root">
     <div className={classes.mainBody}>
        <Nav />
        <LandPageText />
        <div className= {classes.cardContainer}>
            <CardComponent  place= {place1}/>
            <CardComponent  place= {place2}/>
            <CardComponent  place= {place3}/>
        </div>
     </div> 
    <Footer />
    </div>
  );
}

export default App;
