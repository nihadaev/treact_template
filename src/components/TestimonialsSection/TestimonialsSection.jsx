import './TestimonialsSection.css'
import { useState } from 'react';

import TestimonialsCard from './TestimonialsCard/TestimonialsCard';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";



const TestimonialsSection = () => {
    const [testimonialsData, setTestimonialsData] = useState([
        {
            content: 'Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
            author_img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80',
            author_name: 'Charlotte Hale',
            author_position: 'Ceo, Delos Inc.'
        },
        {
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
            author_img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
            author_name: 'Adam Cuppy',
            author_position: 'Founder, EventsNYC'
        }
    ])
    return (
        <section className='testimonials-section'>
            <div className="testimonials-section_left">
                <h2 className='dark_blue'>
                    Testimonials
                </h2>
                <p>
                    Here are what some of our amazing customers are saying about our hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    navigation={true}
                    modules={[EffectFade, Navigation]}
                    className="mySwiper"
                >
                    {
                        testimonialsData && testimonialsData.map((testimonial, key) => (
                            <SwiperSlide key={key}>
                                <TestimonialsCard props={testimonial} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="testimonials-section_right">
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    navigation={true}
                    speed={300}
                    modules={[EffectFade, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1523952578875-e6bb18b26645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1582564286939-400a311013a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80" alt="" />
                    </SwiperSlide>

                    <div className="button-box">

                    </div>
                </Swiper>
                
            </div>

        </section>
    )
}
export default TestimonialsSection;