//import css
import './App.css';
//import components
import BusinessList from "../BusinessList/BusinessList.js";
import Search from "../Search/Search.js";

const businessModel = {
  name: "Pitanga",
  imageSrc: "./background_search_mobile.jpg",
  address: "207 Starr Street",
  city: "Brooklyn",
  state: "NY",
  zipCode: "11237",
  rating: 4.0,
  reviewCount: 30,
  category: "Brazilian",
}

const businesses = [businessModel, businessModel, businessModel, businessModel, businessModel];


function App() {
  const searchYelp = (term, location, option) => {
    console.log(`Searching Yelp with term: ${term}, location: ${location}, option: ${option}!`)
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
