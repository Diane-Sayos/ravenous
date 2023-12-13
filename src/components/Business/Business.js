//import css
import "./Business.css";


const Business = ({ business }) => {
    return (
        <section className="business">
            <div className="image-container">
                <img src="#" alt="#" />
            </div>
            <h2>{business.name}</h2>
            <div className="business-info">
                <div className="business-address">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{`${business.state}, ${business.zipCode}`}</p>
                </div>
                <div className="business-reviews">
                    <h3>{business.category.toUpperCase()}</h3>
                    <h3 className="business-rating">{`${business.rating} stars`}</h3>
                    <p>{`${business.reviewCount} reviews`}</p>
                </div>
            </div>
        </section>
    )
};

export default Business;