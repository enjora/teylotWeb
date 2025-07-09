import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Bluedots from '../../assets/images/blue_dotes.png'

function Pricing() {

    const [tabMenu, tabActive] = useState({ a: true });

    return (
        <>
            <section className="row_am pricing_section white_text" data-aos="fade-in" data-aos-duration={1500} >
                <div className="pricing_inner">
                    <div className="container">
                        <div className="dotes_blue">
                            <img src={Bluedots} alt="image" />
                        </div>
                        <div className="section_title" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={300} >
                            <span className="title_badge">Pricing</span>
                            <h2>Choose your plan</h2>
                        </div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist" data-aos="fade-up" data-aos-duration={1500} >
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link ${tabMenu.a && "active"}`}
                                    onClick={() => tabActive({ a: true })} id="monthly-tab" data-toggle="tab" data-target="#monthly"
                                    type="button" role="tab" aria-controls="monthly" aria-selected="true" >
                                    Monthly
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link ${tabMenu.b && "active"}`}
                                    onClick={() => tabActive({ b: true })} id="yearly-tab" data-toggle="tab" data-target="#yearly" type="button" role="tab" aria-controls="yearly" aria-selected="false" >
                                    Yearly
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className={`tab-pane fade ${tabMenu.a && "show active"}`} id="monthly" role="tabpanel" aria-labelledby="monthly-tab" >
                                <div className="pricing_pannel">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="pannel_block" data-aos="fade-up" data-aos-duration={1500} >
                                                <div className="heading">
                                                    <h3>Free</h3>
                                                    <span>For single users</span>
                                                </div>
                                                <div className="pricing">
                                                    <h3>
                                                        $15 <span>/month</span>
                                                    </h3>
                                                </div>
                                                <ul className="features">
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>Up to 15 GB cloud storage</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>30 day chat history</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-close-circled" />
                                                        </span>
                                                        <p>Data security</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-close-circled" />
                                                        </span>
                                                        <p>5 People access</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-close-circled" />
                                                        </span>
                                                        <p>24/7 Support</p>
                                                    </li>
                                                </ul>
                                                <div className="btn_block">
                                                    <Link to="/contact" className="btn puprple_btn ml-0">
                                                        Choose Plan
                                                    </Link>
                                                    <div className="btn_bottom" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="pannel_block highlited_block" data-aos="fade-up" data-aos-duration={1500} >
                                                <div className="heading">
                                                    <h3>Premium</h3>
                                                    <span>For agencies</span>
                                                    <span className="offer">Save 50%</span>
                                                </div>
                                                <div className="pricing">
                                                    <h3>
                                                        $45 <span>/month</span>
                                                    </h3>
                                                </div>
                                                <ul className="features">
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>Up to 15 GB cloud storage</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>30 day chat history</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>Data security</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>5 People access</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>24/7 Support</p>
                                                    </li>
                                                </ul>
                                                <div className="btn_block white_btn">
                                                    <Link to="/contact" className="btn puprple_btn ml-0">
                                                        Choose Plan
                                                    </Link>
                                                    <div className="btn_bottom" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="pannel_block" data-aos="fade-up" data-aos-duration={1500} >
                                                <div className="heading">
                                                    <h3>Standard</h3>
                                                    <span>For team</span>
                                                </div>
                                                <div className="pricing">
                                                    <h3>
                                                        $30 <span>/month</span>
                                                    </h3>
                                                </div>
                                                <ul className="features">
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>Up to 15 GB cloud storage</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>30 day chat history</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>Data security</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-close-circled" />
                                                        </span>
                                                        <p>5 People access</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-close-circled" />
                                                        </span>
                                                        <p>24/7 Support</p>
                                                    </li>
                                                </ul>
                                                <div className="btn_block">
                                                    <Link to="/contact" className="btn puprple_btn ml-0">
                                                        Choose Plan
                                                    </Link>
                                                    <div className="btn_bottom" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${tabMenu.b && "show active"}`} id="yearly" role="tabpanel" aria-labelledby="yearly-tab" >
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="pannel_block">
                                            <div className="heading">
                                                <h3>Free</h3>
                                                <span>For single users</span>
                                            </div>
                                            <div className="pricing">
                                                <h3>
                                                    $99 <span>/month</span>
                                                </h3>
                                            </div>
                                            <ul className="features">
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>Up to 15 GB cloud storage</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>30 day chat history</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-close-circled" />
                                                    </span>
                                                    <p>Data security</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-close-circled" />
                                                    </span>
                                                    <p>5 People access</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-close-circled" />
                                                    </span>
                                                    <p>24/7 Support</p>
                                                </li>
                                            </ul>
                                            <Link to="/contact" className="btn puprple_btn ml-0">
                                                Choose Plan
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="pannel_block highlited_block">
                                            <div className="heading">
                                                <h3>Premium</h3>
                                                <span>For agencies</span>
                                                <span className="offer">Save 50%</span>
                                            </div>
                                            <div className="pricing">
                                                <h3>
                                                    $399 <span>/month</span>
                                                </h3>
                                            </div>
                                            <ul className="features">
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>Up to 15 GB cloud storage</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>30 day chat history</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>Data security</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>5 People access</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>24/7 Support</p>
                                                </li>
                                            </ul>
                                            <div className="btn_block white_btn">
                                                <Link to="/contact" className="btn puprple_btn ml-0">
                                                    Choose Plan
                                                </Link>
                                                <div className="btn_bottom" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="pannel_block">
                                            <div className="heading">
                                                <h3>Standard</h3>
                                                <span>For team</span>
                                            </div>
                                            <div className="pricing">
                                                <h3>
                                                    $299 <span>/month</span>
                                                </h3>
                                            </div>
                                            <ul className="features">
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>Up to 15 GB cloud storage</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>30 day chat history</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>Data security</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-close-circled" />
                                                    </span>
                                                    <p>5 People access</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-close-circled" />
                                                    </span>
                                                    <p>24/7 Support</p>
                                                </li>
                                            </ul>
                                            <Link to="/contact" className="btn puprple_btn ml-0">
                                                Choose Plan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="contact_text text-center" data-aos="fade-up" data-aos-duration={1500} >
                                Not sure what to choose ? <Link to="#">contact us</Link> for custom
                                packages
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing