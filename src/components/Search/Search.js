//import css
import "./Search.css";

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

const Search = () => {
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortValue = sortByOptions[sortByOption];
            return <li key={sortValue}>{sortByOption}</li>
        });
    }
    return (
        <section className="search">
            <div className="search-options">
                <ul>{renderSortByOptions()}</ul>
            </div>
            <div className="search-inputs">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="search-submit">
                <button className="search-button">Search</button>
            </div>
        </section>
    )
};

export default Search;