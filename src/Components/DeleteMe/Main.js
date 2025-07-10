import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Main'
import Footer from '../Footer/Main'
import Aos from 'aos'
import Mailicon from '../../assets/images/mail_icon.png'
import Phoneicon from '../../assets/images/phone_icon.png'
import Bluedots from '../../assets/images/blue_dotes.png'

function Main() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <Header />
            <div className="page_wrapper">
                <section className="contact_section">
                    <div className="container">
                        <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                            <span className="title_badge">Account Management</span>
                            <h2>
                                Need to delete your account? <span>We understand.</span>
                            </h2>
                            <p>
                                We value your privacy and data security. You can delete your account and all associated data at any time through our mobile app.
                            </p>
                        </div>
                        <ul className="contact_listing">
                            <li data-aos="fade-up" data-aos-duration={1500}>
                                <span className="icon">
                                    <img src={Mailicon} alt="image" />
                                </span>
                                <span className="lable">Email us</span>
                                <Link to="mailto:example@gmail.com">codebygal@gmail.com</Link>
                            </li>
                            <li data-aos="fade-up" data-aos-duration={1500} data-aos-delay={150}>
                                <span className="icon">
                                    <img src={Phoneicon} alt="image" />
                                </span>
                                <span className="lable">Call us</span>
                                <Link to="tel:1234567899">+1 626 343 4116</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="contact_form white_text row_am" data-aos="fade-in" data-aos-duration={1500}>
                    <div className="contact_inner">
                        <div className="container">
                            <div className="dotes_blue">
                                <img src={Bluedots} alt="image" />
                            </div>
                            <div className="section_title" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={100}>
                                <span className="title_badge">Delete Account</span>
                                <h2>How to Delete Your Account</h2>
                                <p>Follow these simple steps to delete your account and all associated data:</p>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="delete-steps" style={{ listStyle: 'none', padding: '0 20px', marginBottom: '30px' }}>
                                        <li data-aos="fade-up" data-aos-duration={1500} style={{ marginBottom: '15px', fontSize: '16px', color: '#fff' }}>
                                            <span style={{ fontWeight: 'bold', marginRight: '10px', color: '#8C43FF' }}>1.</span> 
                                            Login to your account in the mobile app
                                        </li>
                                        <li data-aos="fade-up" data-aos-duration={1500} data-aos-delay={150} style={{ marginBottom: '15px', fontSize: '16px', color: '#fff' }}>
                                            <span style={{ fontWeight: 'bold', marginRight: '10px', color: '#8C43FF' }}>2.</span> 
                                            Open the sidebar menu by tapping the menu icon in the top-left corner
                                        </li>
                                        <li data-aos="fade-up" data-aos-duration={1500} data-aos-delay={300} style={{ marginBottom: '15px', fontSize: '16px', color: '#fff' }}>
                                            <span style={{ fontWeight: 'bold', marginRight: '10px', color: '#8C43FF' }}>3.</span> 
                                            Find and tap on the "Delete My Account" button
                                        </li>
                                        <li data-aos="fade-up" data-aos-duration={1500} data-aos-delay={450} style={{ marginBottom: '15px', fontSize: '16px', color: '#fff' }}>
                                            <span style={{ fontWeight: 'bold', marginRight: '10px', color: '#8C43FF' }}>4.</span> 
                                            Confirm your decision when prompted
                                        </li>
                                        <li data-aos="fade-up" data-aos-duration={1500} data-aos-delay={600} style={{ marginBottom: '15px', fontSize: '16px', color: '#fff' }}>
                                            <span style={{ fontWeight: 'bold', marginRight: '10px', color: '#8C43FF' }}>5.</span> 
                                            Once confirmed, your account and all associated data will be completely wiped
                                        </li>
                                    </ul>
                                    <div className="text-center" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={750}>
                                        <p style={{ marginBottom: '20px', fontSize: '14px', color: '#ccc' }}>
                                            If you need any assistance with deleting your account, please contact our support team.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Main
