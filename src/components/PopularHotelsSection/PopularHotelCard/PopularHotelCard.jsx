import { Link } from 'react-router-dom'
import './PopularHotelCard.css'

const PopularHotelCard = (props) => {
    const { img, name, rating, location, price, description } = props.props
    return (
        <div className='popular-hotel_card'>
            <div className="popular-hotel_card-head">
                <img src={img} alt="" />
            </div>
            <div className="popular-hotel_card-body">
                <h2 className='dark_blue'>
                    {name}
                    <span className='hotel-rating'>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">

                        </polygon>
                        {rating}
                    </span>
                </h2>
                <h3 className='black'>
                    <span className='hotel-location'>
                        <span className='hotel-svg_back'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </span>
                        {location}
                    </span>
                    <span className="hotel-price">
                        <span className='hotel-svg_back'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        </span>
                        {price}
                    </span>
                </h3>
                <p>
                    {description}
                </p>
            </div>
            <div className="popular-hotel_card-foot">
                <Link>
                    Book Now
                </Link>
            </div>
        </div>
    )
}
export default PopularHotelCard