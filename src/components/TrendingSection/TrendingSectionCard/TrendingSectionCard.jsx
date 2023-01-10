import { Link } from "react-router-dom";
import './TrendingSectionCard.css'
const TrendingSectionCard = (props) => {
    const { img, name, price, description, time, location } = props.props
    return (
        <div className="trending-section_card">
            <div className="trending-section_card-head">
                <img src={img} alt="" />
            </div>
            <div className="trending-section_card-body">
                <h3>
                    <span className="trending-card_name light_blue">
                        {name}
                    </span>
                    <span className="trending-card_price">
                        <span className="black">
                            ${price}
                        </span>
                        per day
                    </span>
                </h3>
                <p className="trending-card_description dark_blue">
                    {description}
                </p>
                <h4>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        Trending
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        {time}  Days Tour
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        {location}
                    </span>
                </h4>
            </div>
            <div className="trending-section_card-foot">
                <Link>
                    Book Now
                </Link>
            </div>
        </div>
    )
}

export default TrendingSectionCard;