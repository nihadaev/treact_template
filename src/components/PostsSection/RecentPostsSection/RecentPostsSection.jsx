import { useState } from "react";
import RecentPostCard from './RecentPostCard/RecentPostCard'
import './RecentPostsSection.css'

const RecentPostsSection = () => {

    const [recentPosts, setRecentPosts] = useState([
        {
            description: 'Getting the most out of your vacation',
            author:'Aaron Patterson',
            img: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80'
        },
        {
            description: 'Choosing the perfect Safaris in Africa',
            author:'Sam Phipphen',
            img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80'
        },
        {
            description: 'Hiking during the monsoon in Asia',
            author:'Tony Hawk',
            img: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80'
        },
        {
            description: 'Must carry items while travelling to Thailand',
            author:'Himali Turn',
            img: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80'
        },
        {
            description: 'An extremely funny trip to the Swiss Alps',
            author:'Naomi Watts',
            img: 'https://images.unsplash.com/photo-1546971587-02375cbbdade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80'
        }
    ])
    return(
        <section className="recent-posts_section">
            <h2 className="dark_blue">
                Recent Posts
            </h2>
            <ul>
                {
                    recentPosts && recentPosts.map((recent_post,key) => (
                        <RecentPostCard props={recent_post} key={key} />
                    ))
                }
            </ul>
        </section>
    )
}

export default RecentPostsSection;