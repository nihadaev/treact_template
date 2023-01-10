import './PostsSection.css'
import PopularPostsSection from './PopularPostsSection/PopularPostsSection';
import RecentPostsSection from './RecentPostsSection/RecentPostsSection'

const PostsSection = () => {
    return(
        <section className="posts-section">
            <PopularPostsSection />
            <RecentPostsSection />
        </section>
    );
}

export default PostsSection;