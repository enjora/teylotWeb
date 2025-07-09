import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import google_G from '../../../assets/images/google_G.svg'
import blue_dotes from '../../../assets/images/blue_dotes.png'
import smallStar from '../../../assets/images/smallStar.png'
import bigstar from '../../../assets/images/bigstar.png'
import screen from '../../../assets/images/sign_in_screen.png'

function Main() {
    return (
        <>
            <div className="page_wrapper">
                <div className="full_bg">
                    <section className="signup_section">
                        <div className="container">
                            <div className="top_part">
                                <Link to="/" className="back_btn">
                                    <i className="icofont-arrow-left" /> Back to home
                                </Link>
                                <Link className="navbar-brand" to="#">
                                    <img src={logo} alt="image" />
                                </Link>
                            </div>
                            <div className="form_block">
                                <div className="form_side">
                                    <div className="section_title">
                                        <span className="title_badge">Get Started</span>
                                        <h2>
                                            <span>Create</span> an account
                                        </h2>
                                        <p>
                                            Fill all fields so we can get some info about you. We'll never
                                            send you spam
                                        </p>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <input type="name" className="form-control" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>
                                        <div className="forgate_check">
                                            <div className="coustome_checkbox">
                                                <label htmlFor="remamber_check">
                                                    <input type="checkbox" id="remamber_check" />
                                                    <span className="checkmark" />I agree to all Term, Privacy and
                                                    Fees
                                                </label>
                                            </div>
                                        </div>
                                        <div className="btn_block">
                                            <button className="btn puprple_btn ml-0">Sign Up Now</button>
                                            <div className="btn_bottom" />
                                        </div>
                                        <button className="btn google_btn">
                                            <img src={google_G} alt="image" /> Sign Up with Google
                                        </button>
                                        <div className="sign_in_here">
                                            <p>
                                                Already have an account? <Link to="#">Sign In here</Link>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                                <div className="side_screen">
                                    <div className="dotes_blue">
                                        <img src={blue_dotes} alt="image" />
                                    </div>
                                    <div className="left_icon">
                                        <img src={smallStar} alt="image" />
                                    </div>
                                    <div className="right_icon">
                                        <img src={bigstar} alt="image" />
                                    </div>
                                    <div className="scrren">
                                        <img src={screen} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Main