import React from 'react'
import { Link } from 'react-router-dom'

function Pricingblock() {
    return (
        <>
            <section className="pricing_page_block">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                        <span className="title_badge">Pricing</span>
                        <h2>
                            Best <span>pricing plans</span>
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing indus orem Ipsum <br />{" "}
                            has been the industrys standard dummy text ever since.
                        </p>
                    </div>
                    <div className="table_content">
                        <div className="pricing_table" data-aos="fade-up" data-aos-duration={1500} >
                            <div className="pricing_block">
                                <div className="pricing_title">
                                    <h3>Features</h3>
                                </div>
                                <ul className="features">
                                    <li>
                                        <p>Cloud storage</p>
                                    </li>
                                    <li>
                                        <p>Chat history</p>
                                    </li>
                                    <li>
                                        <p>Optimization</p>
                                    </li>
                                    <li>
                                        <p>Unlimited viewers</p>
                                    </li>
                                    <li>
                                        <p>Live reporting</p>
                                    </li>
                                    <li>
                                        <p>24/7 Support</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="pricing_block">
                                <div className="pricing_title">
                                    <div className="t_block">
                                        <h3>Basic</h3>
                                        <span>For single users</span>
                                    </div>
                                    <div className="pricing">
                                        <h3>
                                            $15 <span>/month</span>
                                        </h3>
                                    </div>
                                    <div className="btn_block">
                                        <Link to="/contact" className="btn puprple_btn ml-0">
                                            Choose Plan
                                        </Link>
                                        <div className="btn_bottom" />
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <span className="mobile_text">Cloud storage</span>
                                        <p>Up to 10 GB</p>
                                    </li>
                                    <li>
                                        <span className="mobile_text">Chat history</span>
                                        <p>30 days</p>
                                    </li>
                                    <li>
                                        <span className="mobile_text">Optimization</span>
                                        <p>
                                            <i className="icofont-close-circled" />
                                        </p>
                                    </li>
                                    <li>
                                        <span className="mobile_text">Unlimited viewers</span>
                                        <p>
                                            <i className="icofont-close-circled" />
                                        </p>
                                    </li>
                                    <li>
                                        <span className="mobile_text">Live reporting</span>
                                        <p>30 Days</p>
                                    </li>
                                    <li>
                                        <span className="mobile_text">24/7 Support</span>
                                        <p>30 Days</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="pricing_block">
                                <div className="pricing_title">
                                    <div className="t_block">
                                        <h3>Premium</h3>
                                        <span>For agencies</span>
                                    </div>
                                    <div className="pricing">
                                        <h3>
                                            $45 <span>/month</span>
                                        </h3>
                                    </div>
                                    <div className="btn_block">
                                        <Link to="/contact" className="btn puprple_btn ml-0">
                                            Choose Plan
                                        </Link>
                                        <div className="btn_bottom" />
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <span className="mobile_text">Cloud storage</span>
                                        <p>Up to 100 GB</p>
                                    </li>
                                    <li>
                                        <span className="mobile_text">Chat history</span>
                                        <p>Unlimited</p>
                                    </li>
                                    <li>
                                        <span className="mobile_text">Optimization</span>
                                        <p>
                                            <i className="icofont-check-circled" />
                                        </p>
                                    </li>
                                    <li>
                                        <span className="mobile_text">Unlimited viewers</span>
                                        <p>
                                            <i className="icofont-check-circled" />
                                        </p>
                                    </li>
                                    <li>
                                        <span className="mobile_text">Live reporting</span>
                                        <p>90 Days</p>
                                    </li>
                                    <li>
                                        <span className="mobile_text">24/7 Support</span>
                                        <p>90 Days</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="pricing_block">
                                <div className="pricing_title">
                                    <div className="t_block">
                                        <h3>Standard</h3>
                                        <span>For team</span>
                                    </div>
                                    <div className="pricing">
                                        <h3>
                                            $30 <span>/month</span>
                                        </h3>
                                    </div>
                                    <div className="btn_block">
                                        <Link to="/contact" className="btn puprple_btn ml-0">
                                            Choose Plan
                                        </Link>
                                        <div className="btn_bottom" />
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <span className="mobile_text">Cloud storage</span>
                                        <p>Up to 30 GB</p>
                                    </li>
                                    <li>
                                        <span className="mobile_text">Chat history</span>
                                        <p>60 days</p>
                                    </li>
                                    <li>
                                        <span className="mobile_text">Optimization</span>
                                        <p>
                                            <i className="icofont-check-circled" />
                                        </p>
                                    </li>
                                    <li>
                                        <span className="mobile_text">Unlimited viewers</span>
                                        <p>
                                            <i className="icofont-check-circled" />
                                        </p>
                                    </li>
                                    <li>
                                        <span className="mobile_text">Live reporting</span>
                                        <p>60 Days</p>
                                    </li>
                                    <li>
                                        <span className="mobile_text">24/7 Support</span>
                                        <p>60 Days</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom_text text-center">
                            <p>
                                Have question ? <Link to="#faqsec">Read FAQ</Link>
                            </p>
                            <p>
                                Not sure what to choose ? <Link to="/contact">Contact us </Link> for
                                custom packages
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricingblock