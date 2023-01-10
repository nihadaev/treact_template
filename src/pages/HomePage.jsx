import MainSection from "../components/Main_section/MainSection";
import ServiceSection from "../components/Services_section/ServicesSection";
import PopularHotels from "../components/PopularHotelsSection/PopularHotels";
import TrendingSection from "../components/TrendingSection/TrendingSection";
import InfoSection from "../components/InfoSection/InfoSection";
import PostsSection from "../components/PostsSection/PostsSection";
import QuestionsSection from "../components/QuestionsSection/QuestionsSection";
import Newsletter from "../components/NewsletterSection/Newsletter";
import Footer from "../components/footer/Footer";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
const HomePage = () => {
    return(
        <>
        <MainSection />
        <ServiceSection />
        <PopularHotels />
        <TrendingSection />
        <InfoSection />
        <PostsSection />
        <TestimonialsSection />
        <QuestionsSection />
        <Newsletter />
        <Footer />
        </>
    )
}

export default HomePage;