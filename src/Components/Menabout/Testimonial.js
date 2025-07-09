import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Bluedots from '../../assets/images/blue_dotes.png'
import Test1 from '../../assets/images/testimonial_01.png'
import Test2 from '../../assets/images/testimonial_02.png'
import Test3 from '../../assets/images/testimonial_03.png'
import Playbtn from '../../assets/images/play_white.svg'
import Paypal from '../../assets/images/paypal.png'
import Spoty from '../../assets/images/spoty.png'
import Slack from '../../assets/images/slack.png'
import Shopboat from '../../assets/images/shopboat.png'
import Envato from '../../assets/images/envato.png'
import Jequery from '../../assets/images/jquery.png'
import Woocommerc from '../../assets/images/woocommerce.png'
import Themeforest from '../../assets/images/themeforest.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules';

const testimonial = {
    items: 1
}

const Test = {
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
};

function Testimonial() {

    const [yttest, setyttest] = useState(false);

    return (
        <>
            <section className="testimonial_section white_text" data-aos="fade-in" data-aos-duration={1500} >
                <div className="title">
                    <div className="star">
                        <span>
                            <i className="icofont-star" />
                        </span>
                        <span>
                            <i className="icofont-star" />
                        </span>
                        <span>
                            <i className="icofont-star" />
                        </span>
                        <span>
                            <i className="icofont-star" />
                        </span>
                        <span>
                            <i className="icofont-star" />
                        </span>
                    </div>
                    <span className="sub_title">4.9 / 5.0 Rated on App store</span>
                </div>
                <div className="testimonial_inner">
                    <div className="dotes_blue">
                        <img src={Bluedots} alt="image" />
                    </div>
                    <div className="container">
                        <div className="testimonial_slides">
                            <Swiper className="mySwiper" id="testimonial_slider" {...testimonial} pagination={true} modules={[Pagination]} slidesPerView={1} >
                                <SwiperSlide className="item">
                                    <div className="testimonial_box">
                                        <div className="testi_img">
                                            <img className="user_img" src={Test1} alt="image" />
                                            <Link to="#" className="popup-youtube play-button play_icon"
                                                data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                                                data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU" onClick={() => setyttest(true)}>
                                                <img src={Playbtn} alt="img" />
                                            </Link>
                                        </div>
                                        <div className="testi_text">
                                            <div className="star">
                                                <span>
                                                    <i className="icofont-star" />
                                                </span>
                                                <span>
                                                    <i className="icofont-star" />
                                                </span>
                                                <span>
                                                    <i className="icofont-star" />
                                                </span>
                                                <span>
                                                    <i className="icofont-star" />
                                                </span>
                                                <span>
                                                    <i className="icofont-star" />
                                                </span>
                                            </div>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry lorem Ipsum has been the standard dummy.
                                            </p>
                                            <div className="user_info">
                                                <h3>Willium Joy, </h3>
                                                <span>Smartbrain Tech</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="testimonial_box">
                                        <div className="testi_img">
                                            <img className="user_img" src={Test2} alt="image" />
                                            <Link
                                                to="#"
                                                className="popup-youtube play-button play_icon"
                                                data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                                                data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU" onClick={() => setyttest(true)}>
                                                <img src={Playbtn} alt="img" />
                                            </Link>
                                        </div>
                                        <div className="testi_text">
                                            <div className="star">
                                                <span>
                                                    <i className="icofont-star" />
                                                </span>
                                                <span>
                                                    <i className="icofont-star" />
                                                </span>
                                                <span>
                                                    <i className="icofont-star" />
                                                </span>
                                                <span>
                                                    <i className="icofont-star" />
                                                </span>
                                                <span>
                                                    <i className="icofont-star" />
                                                </span>
                                            </div>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry lorem Ipsum has been the standard dummy.
                                            </p>
                                            <div className="user_info">
                                                <h3>Willium Joy, </h3>
                                                <span>Smartbrain Tech</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="testimonial_box">
                                        <div className="testi_img">
                                            <img className="user_img" src={Test3} alt="image" />
                                            <Link
                                                to="#"
                                                className="popup-youtube play-button play_icon"
                                                data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                                                data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU" onClick={() => setyttest(true)}>
                                                <img src={Playbtn} alt="img" />
                                            </Link>
                                        </div>
                                        <div className="testi_text">
                                            <div className="star">
                                                <span>
                                                    <i className="icofont-star" />
                                                </span>
                                                <span>
                                                    <i className="icofont-star" />
                                                </span>
                                                <span>
                                                    <i className="icofont-star" />
                                                </span>
                                                <span>
                                                    <i className="icofont-star" />
                                                </span>
                                                <span>
                                                    <i className="icofont-star" />
                                                </span>
                                            </div>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry lorem Ipsum has been the standard dummy.
                                            </p>
                                            <div className="user_info">
                                                <h3>Willium Joy, </h3>
                                                <span>Smartbrain Tech</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="client_logo_slider">
                            <Swiper className="" id="client_slider" {...Test} slidesPerView={5} >
                                <SwiperSlide className="item">
                                    <div className="img">
                                        <img src={Paypal} alt="image" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="img">
                                        <img src={Spoty} alt="image" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="img">
                                        <img src={Shopboat} alt="image" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="img">
                                        <img src={Slack} alt="image" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="img">
                                        <img src={Envato} alt="image" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="img">
                                        <img src={Jequery} alt="image" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="img">
                                        <img src={Woocommerc} alt="image" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="img">
                                        <img src={Themeforest} alt="image" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            {yttest &&
                <div className="modal fade youtube-video show" id="myModal"
                    tabIndex={-1} style={{ display: "block", paddingRight: 17 }}
                    aria-modal="true" role="dialog" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" onClick={() => setyttest(false)}>
                            <button id="close-video"
                                type="button" className="button btn btn-default text-right" data-dismiss="modal" onClick={() => setyttest(false)}>
                                <i className="icofont-close-line-circled" />
                            </button>
                            <div className="modal-body">
                                <div id="video-container" className="video-container">
                                    <iframe id="youtubevideo"
                                        width={640} height={360} allowFullScreen=""
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" />
                                </div>
                            </div>
                            <div className="modal-footer"></div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Testimonial