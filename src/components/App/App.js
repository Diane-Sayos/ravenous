//import css
import './App.css';
//import components
import BusinessList from "../BusinessList/BusinessList.js";
import Search from "../Search/Search.js";

function App() {
  return (
    <div className="App">
      <h1 className="app-name">Ravenous</h1>
      <Search />
      <BusinessList />
    </div>
  );
}

export default App;
