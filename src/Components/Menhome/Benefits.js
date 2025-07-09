import React from 'react'
import Dots from '../../assets/images/blue_dotes.png'
import Unique1 from '../../assets/images/unique_1.png'
import Unique2 from '../../assets/images/unique_2.png'
import Unique3 from '../../assets/images/unique_3.png'
import Unique4 from '../../assets/images/unique_4.png'
import Unique5 from '../../assets/images/unique_5.png'
import Unique6 from '../../assets/images/unique_6.png'
import Unique7 from '../../assets/images/unique_7.png'


function Benefits() {
    return (
        <>
            <section className="unique_section white_text">
                <div className="unique_inner">
                    <div className="dotes_blue">
                        <img src={Dots} alt="image" />
                    </div>
                    <div className="container">
                        <div className="section_title" data-aos="fade-up" data-aos-duration={1500} >
                            <span className="title_badge">Benefits from Us</span>
                            <h2>Why we are Uqnqiue</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb_5" data-aos="fade-up" data-aos-duration={1500} >
                                <div className="unique_box">
                                    <div className="text">
                                        <h3>Ministry Insights</h3>
                                        <p>Track participation, service frequency, and spiritual growth—all in one dashboard.</p>
                                    </div>
                                    <div className="img_block">
                                        <img src={Unique1} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mb_5" data-aos="fade-up" data-aos-duration={1500} >
                                <div className="unique_box">
                                    <div className="text">
                                        <h3>Seamless Scheduling</h3>
                                        <p>Assign readings, coordinate liturgies, and manage availability with just a few taps.</p>
                                    </div>
                                    <div className="img_block">
                                        <img src={Unique2} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb_5" data-aos="fade-up" data-aos-duration={1500} >
                                <div className="unique_box">
                                    <div className="text">
                                        <h3>Quick Start, Zero Hassle</h3>
                                        <p>Get your deacon board running in minutes—no training or tech skills needed.</p>
                                    </div>
                                    <div className="img_block">
                                        <img src={Unique3} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mb_5" data-aos="fade-up" data-aos-duration={1500} >
                                <div className="unique_box">
                                    <div className="text">
                                        <h3>Built for Your Workflow</h3>
                                        <p>Teylot integrates with tools you already use, making transitions smooth and effortless.</p>
                                    </div>
                                    <div className="img_block">
                                        <div className="img">
                                            <img src={Unique4} alt="image" />
                                        </div>
                                        <div className="img">
                                            <img src={Unique5} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb_5" data-aos="fade-up" data-aos-duration={1500} >
                                <div className="unique_box">
                                    <div className="text">
                                        <h3>Role-Based Access</h3>
                                        <p>Easily assign responsibilities based on church roles—deacons, readers, leaders—ensuring everyone sees what matters to them.</p>
                                    </div>
                                    <div className="img_block">
                                        <img src={Unique6} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb_5" data-aos="fade-up" data-aos-duration={1500} >
                                <div className="unique_box">
                                    <div className="text">
                                        <h3>Purpose-Driven Tasks</h3>
                                        <p>Create, assign, and track service responsibilities—from visitations to readings—with clarity.</p>
                                    </div>
                                    <div className="img_block">
                                        <img src={Unique7} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Benefits