//import Business Component
import Business from '../Business/Business.js';
//import css
import "./BusinessList.css";


const BusinessList = ({businesses}) => {
    return (
        <section className="business-list">
            {businesses.map((business) => {
                return <Business business={business} key={business.name} />
            })}
        </section>
    )
};

export default BusinessList;