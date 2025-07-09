import React from 'react'
import { Link } from 'react-router-dom'
import Bluedots from '../../assets/images/blue_dotes.png'
import Step1 from '../../assets/images/howstep1.png'
import Step2 from '../../assets/images/howstep2.png'
import Step3 from '../../assets/images/howstep3.png'

function HowWork() {
    return (
        <>
            <section className="how_it_section white_text">
                <div className="how_it_inner" data-aos="fade-in" data-aos-duration={1500}>
                    <div className="dotes_blue">
                        <img src={Bluedots} alt="image" />
                    </div>
                    <div className="container">
                        <div className="section_title"
                            data-aos="fade-up" data-aos-duration={1500} >
                            <span className="title_badge">Quick &amp; easy</span>
                            <h2>How it works in 3 steps</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="steps_block step_border"
                                    data-aos="fade-up" data-aos-duration={1500} >
                                    <div className="steps">
                                        <div className="icon">
                                            <img src={Step1} alt="image" />
                                        </div>
                                        <div className="text">
                                            <h3>Download app</h3>
                                            <ul className="social">
                                                <li>
                                                    <Link to="#">
                                                        <i className="icofont-brand-android-robot" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="icofont-brand-apple" />
                                                    </Link>
                                                </li>
                                            </ul>
                                            <p>
                                                Download App. It will work for <br /> Android, &amp; Mac
                                            </p>
                                        </div>
                                    </div>
                                    <span className="step">01</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="steps_block step_border" data-aos="fade-up" data-aos-duration={1500} >
                                    <div className="steps">
                                        <div className="icon">
                                            <img src={Step2} alt="image" />
                                        </div>
                                        <div className="text">
                                            <h3>Create account</h3>
                                            <span className="tag_text">Sign in as a Deacon</span>
                                            <p>
                                                Register using your church credentials to view <br/> and manage your liturgical participation.
                                                period
                                            </p>
                                        </div>
                                    </div>
                                    <span className="step">02</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="steps_block" data-aos="fade-up" data-aos-duration={1500} >
                                    <div className="steps">
                                        <div className="icon">
                                            <img src={Step3} alt="image" />
                                        </div>
                                        <div className="text">
                                            <h3>Serve and reflect</h3>
                                            <span className="tag_text">Read or Serve in the Liturgy</span>
                                            <p>
                                                Accept assignments or sign up for available slots, then track your yearly service history.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="step">03</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="btn_block">
                                <Link to="/contact" className="btn puprple_btn ml-0">
                                    Download now
                                </Link>
                                <div className="btn_bottom" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowWork