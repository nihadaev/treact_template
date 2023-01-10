import { Link } from 'react-router-dom'
import './RecentPostCard.css'
const RecentPostCard = (props) => {
    const { description, author, img } = props.props
    return (
        <li className='recent-post'>
            <Link>
                <div className="recent-post_info">
                    <h3 className='black'>
                        {description}
                    </h3>
                    <h4 className='gray'>
                        {author}
                    </h4>
                </div>
                <div className="recent-post_img">
                    <img src={img} alt="" />
                </div></Link>
        </li>
    )
}

export default RecentPostCard;