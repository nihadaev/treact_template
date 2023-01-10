
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";


import './PopularHotels.css'
import PopularHotelCard from './PopularHotelCard/PopularHotelCard'

const PopularHotels = () => {
    let hotels = [
        {
            img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
            name: 'Wyatt Residency',
            rating: 4.8,
            location: 'Rome, Italy',
            price: 'USD 39/Day',
            description:'Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.'
        },
        {
            img: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
            name: 'Soho Paradise',
            rating: 4.9,
            location: 'Ibiza, Spain',
            price: 'USD 50/Day',
            description:'Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.'
        },
        {
            img: 'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
            name: 'Hotel Baja',
            rating: 5.0,
            location: 'Palo Alto, CA',
            price: 'USD 19/Day',
            description:'Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.'
        },
        {
            img: 'https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
            name: 'Hudak Homes',
            rating: 4.5,
            location: 'Arizona, Rak',
            price: 'USD 99/Day',
            description:'Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.'
        }
    ]

    return(
        <section className='popular-hotels_section'>
            
            <Swiper
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={70}
            loop={true}
            breakpoints={{
                250: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 3.4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3
                },
            }}
            >
            <h2 className='popular-hotels_section-head dark_blue'>
                Popular Hotels
            </h2>
            { hotels && hotels.map((hotel,key) => (
               <SwiperSlide key={key}>
                     <PopularHotelCard  props={hotel} />
               </SwiperSlide>
            ))}
            </Swiper>
        </section>
    )
}

export default PopularHotels