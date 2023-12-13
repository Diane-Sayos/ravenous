//import css
import "./Business.css";

const business = {
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

const Business = () => {
    return (
        <section className="business">
            <div className="image-container">
                <img src="#" alt="#" />
            </div>
            <h2>{business.name}</h2>
            <div className="business-address">
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{`${business.state}, ${business.zipCode}`}</p>
            </div>
            <div className="business-reviews">
                <h3>{business.category.toUpperCase()}</h3>
                <h3 className="business-rating">{`${business.rating} stars`}</h3>
                <p className="business-review-count">{`${business.reviewCount} reviews`}</p>
            </div>
        </section>
    )
};

export default Business;