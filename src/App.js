import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import Footer from "./Components/Footer/Footer";
import {originals, action, horror, animation, history, documentary} from "./urls"
import { People } from "./Components/People/People";

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals' />
      <RowPost url={animation} title='For Kids' isSmall />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={documentary} title='Documentary' isSmall />
      <RowPost url={history} title='History' isSmall />
      <People />
      <Footer />
    </div>
  );
}

export default App;
