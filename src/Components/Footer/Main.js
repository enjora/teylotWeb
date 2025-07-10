import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/ft_logo.png'
import googleplay from '../../assets/images/googleplay.png'
import appstorebtn from '../../assets/images/appstorebtn.png'

function Main() {
    return (
        <>
            <footer className="white_text" data-aos="fade-in" data-aos-duration={1500}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="logo_side">
                                <div className="logo">
                                    <Link to="#">
                                        <img src={logo} alt="Logo" />
                                    </Link>
                                </div>
                                <div className="news_letter">
                                    <h3>Subscribe newsletter</h3>
                                    <p>Be the first to recieve all latest post in your inbox</p>
                                    <form>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                            />
                                            <button className="btn">
                                                <i className="icofont-paper-plane" />
                                            </button>
                                        </div>
                                        <p className="note">
                                            By clicking send link you agree to receive message.
                                        </p>
                                    </form>
                                </div>
                                <ul className="contact_info">
                                    <li>
                                        <Link to="mailto:">codebygal@gamil.com</Link>
                                    </li>
                                    <li>
                                        <Link to="tel: ">+1-626-343-4116</Link>
                                    </li>
                                </ul>
                                <ul className="social_media">
                                    <li>
                                        <Link to="#">
                                            <i className="icofont-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="icofont-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="icofont-instagram" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="icofont-pinterest" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="download_side">
                                <h3>Download app</h3>
                                <ul className="app_btn">
                                    <li>
                                        <Link to="#">
                                            <img className="blue_img" src={googleplay} alt="image" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://apps.apple.com/app/teylot/id6748265600">
                                            <img className="blue_img" src={appstorebtn} alt="image" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="ft_inner">
                            <div className="copy_text">
                                <p>© Copyrights 2025. All rights reserved.</p>
                            </div>
                            <ul className="links">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About us</Link>
                                </li>
                                {/*<li>*/}
                                {/*    <Link to="/pricing">Pricing</Link>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <Link to="/blog-list">Blog</Link>*/}
                                {/*</li>*/}
                                <li>
                                    <Link to="/contact">Contact us</Link>
                                </li>
                            </ul>
                            <div className="design_by">
                                <p>
                                    Crafted with love to God by{" "}
                                    {/*<Link to="https://themeforest.net/user/kalanidhithemes" target="blank" >*/}
                                        George Lewis
                                    {/*</Link>*/}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Main