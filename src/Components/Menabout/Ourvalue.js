import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ourvalue_1 from '../../assets/images/ourvalue_1.png'
import ourvalue_2 from '../../assets/images/ourvalue_2.png'
import ourvalue_3 from '../../assets/images/ourvalue_3.png'

const Value = {
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
        1400: {
            margin: 60,
        },
    },
};

const valueItems = [
    {
        icon: ourvalue_1,
        title: 'Skilled Team',
        description: 'Lorem Ipsum is simply dummy text of the printing and typtting industry lorem Ipsum has.',
    },
    {
        icon: ourvalue_2,
        title: 'Creative Thinking',
        description: 'Lorem Ipsum is simply dummy text of the printing and typtting industry lorem Ipsum has.',
    },
    {
        icon: ourvalue_3,
        title: 'Growth Support',
        description: 'Lorem Ipsum is simply dummy text of the printing and typtting industry lorem Ipsum has.',
    },
    {
        icon: ourvalue_1,
        title: 'Skilled Team',
        description: 'Lorem Ipsum is simply dummy text of the printing and typtting industry lorem Ipsum has.',
    },
    {
        icon: ourvalue_2,
        title: 'Creative Thinking',
        description: 'Lorem Ipsum is simply dummy text of the printing and typtting industry lorem Ipsum has.',
    },
    {
        icon: ourvalue_3,
        title: 'Growth Support',
        description: 'Lorem Ipsum is simply dummy text of the printing and typtting industry lorem Ipsum has.',
    },
];

function Ourvalue() {
    return (
        <>
            <section className="our_value_section row_am">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                        <span className="title_badge">Our values</span>
                        <h2>
                            <span>Our values</span> driven by relations
                        </h2>
                    </div>
                    <div className="value_slider" data-aos="fade-in" data-aos-duration={1500}>
                        <Swiper className="swiper-wrapper" id="value_slider" {...Value} slidesPerView={3} modules={[Pagination]} spaceBetween={15}>
                            {valueItems.map((item, index) => (
                                <SwiperSlide className="item" key={index}>
                                    <div className="value_block">
                                        <div className="icon">
                                            <img src={item.icon} alt="image" />
                                        </div>
                                        <div className="text">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Ourvalue;
