//import css
import styles from "./Search.css";
//import useState
import { useState } from 'react';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};
//searchyelp as props
const Search = ({ searchYelp }) => {
    
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [option, setOption] = useState('');

    //check which option is selected, and mark active
    const setActiveOption = (sortOption) => {
        if(option === sortOption) {
            return styles.active;
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
    const handleOptionChange = (e) => {
        setOption(e.target.value)
    };

    //mapping lists
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortValue = sortByOptions[sortByOption];
            return <li className={setActiveOption(sortValue)} key={sortValue} onClick={handleOptionChange}>{sortByOption}</li>
        });
    }

    //handle submit
    const handleSearch = (e) => {
        e.preventDefault();
        searchYelp(term, location, option);
    }

    return (
        <section className={styles.search}>
            <div className={styles.search-options}>
                <ul>{renderSortByOptions()}</ul>
            </div>
            <form onSubmit={handleSearch}>
                <div className={styles.search-inputs}>
                    <input placeholder="Search Businesses" value={term} onChange={handleTermChange}/>
                    <input placeholder="Where?" value={location} onChange={handleLocationChange}/>
                </div>
                <div className={styles.search-submit}>
                    <a href="1">Search</a>
                </div>
            </form>
        </section>
    )
};

export default Search;