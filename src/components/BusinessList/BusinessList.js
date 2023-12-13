//import Business Component
import Business from '../Business/Business.js';
//import css
import "./BusinessList.css";




const BusinessList = () => {
    return (
        <section className="business-list">
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
        </section>
    )
};

export default BusinessList;