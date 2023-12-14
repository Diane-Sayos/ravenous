//import css
import "./Search.css";
//import useState
import { useState } from 'react';


//searchyelp as props
const Search = (props) => {
    
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [option, setOption] = useState('best_match');

    //check which option is selected, and mark active
    const setActiveOption = (sortOption) => {
        if(option === sortOption) {
            return "active";
        }
        return "";
    };

    //handle changes
    const handleTermChange = (e) => {
        setTerm(e.target.value)
    };
    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    };
    const handleOptionChange = (option) => {
        setOption(option)
    };

    //handle submit
    const handleSearch = (e) => {
        e.preventDefault();
        props.searchYelp(term,location,option);
    }

    return (
        <section className="search">
            <div className="search-options">
                <ul>
                    <li className={setActiveOption("best_match")} key="best_match" onClick={() => handleOptionChange("best_match")}>Best Match</li>
                    <li className={setActiveOption("rating")} key="rating" onClick={() => handleOptionChange("rating")}>Highest Rated</li>
                    <li className={setActiveOption("review_count")} key="review_count" onClick={() => handleOptionChange("review_count")}>Most Reviewed</li>
                </ul>
            </div>
            <form onSubmit={handleSearch}>
                <div className="search-inputs">
                    <input placeholder="Search Businesses" value={term} onChange={handleTermChange}/>
                    <input placeholder="Where?" value={location} onChange={handleLocationChange}/>
                </div>
                <div className="search-submit">
                    <button type="submit" >Search</button>
                </div>
            </form>
        </section>
    )
};

export default Search;