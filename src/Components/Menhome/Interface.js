import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Interscrn1 from '../../assets/images/intrscrn1.png'
import Interscrn2 from '../../assets/images/intrscrn2.png'
import Interscrn3 from '../../assets/images/intrscrn3.png'
import Interscrn4 from '../../assets/images/intrscrn4.png'
import Interscrn5 from '../../assets/images/intrscrn5.png'
import Interscrn6 from '../../assets/images/intrscrn6.png'
import Interscrn7 from '../../assets/images/intrscrn7.png'
import Interscrn8 from '../../assets/images/intrscrn8.png'

const interfaceslider = {
    loop: true,
    margin: 10,
    effect: "coverflow",
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 5,
        },
    },
};

function Interface() {
    return (
        <>
            <section className="row_am interface_section">
                <div className="container-fluid">
                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={300}>
                        <span className="title_badge">App screens</span>
                        <h2>
                            Userfriendly <span>interface</span> design
                        </h2>
                    </div>
                    <div className="screen_slider" data-aos="fade-up" data-aos-duration={1500}>
                        <Swiper id="screen_slider" className="mySwiper" {...interfaceslider} spaceBetween={20} allowTouchMove={true} pagination={true} modules={[Pagination]} slidesPerView={5}>
                            <SwiperSlide className="item">
                                <div className="screen_frame_img">
                                    <img src={Interscrn1} alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="screen_frame_img">
                                    <img src={Interscrn2} alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="screen_frame_img">
                                    <img src={Interscrn3} alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="screen_frame_img">
                                    <img src={Interscrn4} alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="screen_frame_img">
                                    <img src={Interscrn5} alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="screen_frame_img">
                                    <img src={Interscrn6} alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="screen_frame_img">
                                    <img src={Interscrn7} alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="screen_frame_img">
                                    <img src={Interscrn8} alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="screen_frame_img">
                                    <img src={Interscrn1} alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="screen_frame_img">
                                    <img src={Interscrn2} alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="screen_frame_img">
                                    <img src={Interscrn3} alt="image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="screen_frame_img">
                                    <img src={Interscrn4} alt="image" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Interface