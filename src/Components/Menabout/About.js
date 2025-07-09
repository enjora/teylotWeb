import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Abtslider1 from '../../assets/images/abtslide_1.png';
import Abtslider2 from '../../assets/images/abtslide_2.png';
import Abtslider3 from '../../assets/images/abtslide_3.png';
import Abtslider4 from '../../assets/images/abtslide_4.png';
import Abtslider5 from '../../assets/images/abtslide_5.png';

const Slider = {
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 2.5,
        },
        1000: {
            slidesPerView: 4,
        },
    },
};

const abtSlideImages = [
    Abtslider1,
    Abtslider2,
    Abtslider3,
    Abtslider4,
    Abtslider5,
    Abtslider4,
    Abtslider4,
    Abtslider5,
    Abtslider4,
    Abtslider4,
    Abtslider5,
    Abtslider4,
];

function About() {
    return (
        <>
            <section className="about_us_section">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                        <span className="title_badge">About us</span>
                        <h2>
                            We are app agency <br /> <span>building high level of smart app</span>
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing indus orem Ipsum <br /> has been
                            the industrys standard dummy text ever since.
                        </p>
                    </div>
                </div>
                <div className="about_slider row_am" data-aos="fade-in" data-aos-duration={1500}>
                    <Swiper className="mySwiper" id="about_slider" {...Slider} spaceBetween={15} slidesPerView={4}>
                        {abtSlideImages.map((image, index) => (
                            <SwiperSlide key={index} className="item">
                                <div className="abt_slides">
                                    <img src={image} alt="image" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="container">
                    <div className="row abt_text" data-aos="fade-up" data-aos-duration={1500}>
                        <div className="col-md-5">
                            <h2>
                                <span>Our story</span> behind our success &amp; achievement
                            </h2>
                        </div>
                        <div className="col-md-7">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsu
                                m has been the industrys standard dummy text ever since the when an unknown print er
                                took a galley of type and scrambled it to make a type specimen book. It has survived
                                not only five centuries, but also the leap into electronic typesetting, remaining
                                esse ntially unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing soft
                                ware like Aldus PageMaker including versions of lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
