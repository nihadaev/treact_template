import { useState } from "react";
import './PopularPostsSection.css'
import PopularPostCard from "./PopularPostCard/PopularPostCard";
const PopularPostsSection = () => {

    const [popularPosts, setPopularPost] = useState([
        {
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
            heading: 'Tips on how to travel safely in foreign countries',
            description: 'Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.',
            post_host: {
                host_img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80',
                host_name: 'Charlotte Delos',
                host_position: 'Travel Advocate'
            }
        },
        {
            img: 'https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
            heading: 'Enjoying the beach life while on a vacation',
            description: 'Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.',
            post_host: {
                host_img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
                host_name: 'Adam Cuppy',
                host_position: 'Vlogger'
            }
        }
    ])
    return (
        <section className="popular-posts_section">
            <h2 className="dark_blue">
                Popular Posts
            </h2>
            <div className="popular-posts_section-cards">
                {
                    popularPosts && popularPosts.map((popular_post, key) => (
                        <PopularPostCard props={popular_post} key={key} />
                    ))
                }
            </div>

        </section>
    )
}

export default PopularPostsSection;