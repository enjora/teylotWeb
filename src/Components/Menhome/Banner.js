import React from 'react'
import Banner1 from '../../assets/images/hero_img1.png'
import QRcode from '../../assets/images/qrcode.png'
import Banner2 from '../../assets/images/hero_img1.png'
import Star1 from '../../assets/images/smallStar.png'
import Text from '../../assets/images/12mtext.png'

function Banner() {
    return (
        <>
            <section className="banner_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6" data-aos="fade-up" data-aos-duration={1500} >
                            <div className="hero_imgleft">
                                <img src={Banner1} alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 banner_content_colom" data-aos="fade-up" data-aos-duration={1500} >
                            <div className="banner_text">
                                <h1> teylot </h1>
                                <h2>
                                    The smarter way to  <span>engage, manage, and grow your deacon's community</span>
                                </h2>
                                <p>
                                    Teylot helps you streamline communication, automate tasks, and deliver meaningful interactions anytime, anywhere. Built for mobile-first experiences that drive real results.
                                </p>
                                <div className="qrcode">
                                    <img src={QRcode} alt="image" />
                                    <p> Scan the QR to get started, available on Android & iOS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6" data-aos="fade-up" data-aos-duration={1500} >
                            <div className="hero_img_right">
                                <img src={Banner2} alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="spinBlock" data-aos="fade-up" data-aos-duration={1500}>
                        <span className="star">
                            <img src={Star1} alt="image" />
                        </span>
                        <div className="spin_box" id="scrollButton">
                            <span className="downsign">
                                <i className="icofont-long-arrow-down" />
                            </span>
                            <div className="spin-text">
                                <img src={Text} alt="image" />
                            </div>
                        </div>
                        <span className="star">
                            <img src={Star1} alt="image" />
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner