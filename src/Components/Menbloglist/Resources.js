import React from 'react'
import Dots from '../../assets/images/blue_dotes.png'
import Email from '../../assets/images/email_icon.png'

function Resources() {
    return (
        <>
            <section className="our_resource">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section_title" data-aos="fade-up" data-aos-duration={1500} >
                                <span className="title_badge">Our Resources</span>
                                <h2>
                                    Latest <span>blog post</span>
                                </h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing indus orem Ipsum
                                    has been the industrys standard text ever since.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mail_block white_text" data-aos="fade-up" data-aos-duration={1500} >
                                <div className="dotes_blue">
                                    <img src={Dots} alt="image" />
                                </div>
                                <div className="text">
                                    <span className="icon">
                                        <img src={Email} alt="image" />
                                    </span>
                                    <h3>Join our mailing list</h3>
                                    <p>Be the first to recieve all latest post in your inbox</p>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Enter your email" />
                                            <button className="btn">
                                                <i className="icofont-paper-plane" />
                                            </button>
                                        </div>
                                        <p className="note">
                                            By clicking send link you agree to receive message.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resources