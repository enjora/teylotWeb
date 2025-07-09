import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const Textslider = {
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
};

const textItems = [
    'Advanced Engagement Insights',
    'Seamless Scheduling',
    'User friendly',
    'Effortless Onboarding',
    'Liturgical Task Assignment',
    'Unified Communications',
];

function TextList() {
    return (
        <>
            <div className="text_list_section row_am" data-aos="fade-in" data-aos-duration={1500} >
                <div className="container">
                    <span className="title_badge down_fix">Why choose our app</span>
                </div>
                <div className="slider_block">
                    <Swiper className="mySwiper" id="text_list_flow" {...Textslider} slidesPerView={2.1}>
                        {textItems.map((item, index) => (
                            <SwiperSlide key={index} className="item">
                                <div className="text_block">
                                    <span>{item}</span>
                                    {/*<span className="mark_star">•</span>*/}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default TextList;
