import { Link } from "react-router-dom";
import './TrendingSection.css'

import TrendingSectionCard from "./TrendingSectionCard/TrendingSectionCard";
const TrendingSection = () => {
    const trendingToursData = [
        {
            img: 'https://images.unsplash.com/photo-1553194587-b010d08c6c56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80',
            name:'Beachfront',
            price: 99,
            description: 'A Trip to the Bahamas and the Carribean Ocean',
            time: 7,
            location: 'Africa'
        },
        {
            img: 'https://images.unsplash.com/photo-1584200186925-87fa8f93be9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80',
            name: 'Cruise',
            price: 169,
            description: 'Cruise to the Mariana Trench and the Phillipines',
            time:15,
            location: 'Australia'
        }
    ]

    return (
        <section className="trending-section">
            <div className="trending-section_left">
                <h2 className="dark_blue">Trending Tours</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                <div className="trending-section_btn">
                <Link>
                    View All Tours
                    <svg viewBox="0 0 31.49 31.49" class="icon">
                            <path fill="currentColor" d="M21.205 5.007c-.429-.444-1.143-.444-1.587 0-.429.429-.429 1.143 0 1.571l8.047 8.047H1.111C.492 14.626 0 15.118 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587.444.444 1.159.444 1.587 0l9.952-9.952c.444-.429.444-1.143 0-1.571l-9.952-9.953z">
                            </path>
                    </svg>
                </Link>
                </div>
            </div>
            <div className="trending-section_right">
                {
                    trendingToursData && trendingToursData.map((trendingTour,key) => (
                        <TrendingSectionCard props={trendingTour} key={key} />
                    ))
                }
            </div>
        </section>
    );
}

export default TrendingSection;