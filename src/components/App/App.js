//import css
import './App.css';
//import components
import BusinessList from "../BusinessList/BusinessList.js";
import Search from "../Search/Search.js";
//import api
import Yelp from "../../utils/Yelp.js";
//import useState
import { useState } from 'react';


function App() {
  const [businesses, setBusinesses] = useState([]);
  const searchYelp = async(term, location, option) => {
    const businesses = await Yelp.search(term, location, option);
    setBusinesses(businesses);
  }
  return (
    <div className="App">
      <h1 className="app-name">Ravenous</h1>
      <Search searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
