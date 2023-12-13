//import css
import './App.css';
//import components
import BusinessList from "../BusinessList/BusinessList.js";
import Search from "../Search/Search.js";

const businessModel = {
  name: "Pitanga",
  imageSrc: "https://images.squarespace-cdn.com/content/v1/581bcf2d197aeaf96c6449ff/4e26308b-ecc4-49a4-af49-f6b265bba075/Pitangalogobestpng.jpg",
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
      <Search searchYelp={searchYelp}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
