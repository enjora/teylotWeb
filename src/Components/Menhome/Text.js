import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import Dotsimg from '../../assets/images/yellow_dotes.png';
import Screen from '../../assets/images/downloadScreen.png';
import Payimg from '../../assets/images/googleplay.png';
import Appimg from '../../assets/images/appstorebtn.png';

const Textslider = {
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2.5,
        },
        1000: {
            slidesPerView: 4,
        },
    },
};

function Text() {
    const generateTextBlocks = (count) => {
        const textBlocks = [];
        for (let i = 0; i < count; i++) {
            textBlocks.push(
                <SwiperSlide className="item" key={i}>
                    <div className="text_block">
                        <span>Download </span>
                        <span className="mark_star">•</span>
                    </div>
                </SwiperSlide>
            );
        }
        return textBlocks;
    };

    return (
        <>
            <div className="text_list_section row_am downaload_section" data-aos="fade-in" data-aos-duration={1500}>
                <div className="container">
                    <div className="yellow_dotes">
                        <img src={Dotsimg} alt="image" />
                    </div>
                    <div className="center_screen">
                        <div className="img">
                            {/*<img src={Screen} alt="image" />*/}
                        </div>
                        <ul className="app_btn">
                            <li>
                                <Link to="#">
                                    <img className="blue_img" src={Payimg} alt="image" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img className="blue_img" src={Appimg} alt="image" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="background_slider">
                    <div className="dowanload_slider">
                        <div className="downlist">
                            {generateTextBlocks(5)}
                        </div>
                    </div>
                    <div className="slider_block">
                        <Swiper className="Swiper-Text" id="text_list_flow_download" {...Textslider} slidesPerView={4}>
                            {generateTextBlocks(6)}
                        </Swiper>
                    </div>
                    <div className="dowanload_slider">
                        <div className="downlist">
                            {generateTextBlocks(4)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Text;
