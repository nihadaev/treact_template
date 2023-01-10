import './PopularPostCard.css'
import { Link } from 'react-router-dom';
const PopularPostCard = (props) => {
    const {img,heading,description, post_host} = props.props
    const {host_img,host_name,host_position} = post_host
    return(
        <Link className="popular-post_card">
            <div className="popular-post_card-head">
                <img src={img} alt="" />
            </div>
            <div className="popular-post_card-body">
                <h2 className="black"> 
                    {heading}
                </h2>
                <p className="gray">
                    {description}
                </p>
            </div>
            <div className="popular-post_card-foot">
                <div className="post-host_img">
                    <img src={host_img} alt="" />
                </div>
                <div className="post-host_info">
                    <h3 className='black'>
                        {host_name}
                    </h3>
                    <h4 className='gray'>
                        {host_position}
                    </h4>
                </div>
            </div>
        </Link>
    )
}

export default PopularPostCard;