import React from 'react'
import { Link } from 'react-router-dom'
import Mailicon from '../../assets/images/mail_icon.png'
import Phoneicon from '../../assets/images/phone_icon.png'
import Locationicon from '../../assets/images/location_icon.png'

function Contactblock() {
    return (
        <>
            <section className="contact_section">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                        <span className="title_badge">Contact us</span>
                        <h2>
                            Any query ? <span>let's talk</span>
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing indus orem Ipsum <br />{" "}
                            has been the industrys standard dummy text ever since.
                        </p>
                    </div>
                    <ul className="contact_listing">
                        <li data-aos="fade-up" data-aos-duration={1500}>
                            <span className="icon">
                                <img src={Mailicon} alt="image" />
                            </span>
                            <span className="lable">Email us</span>
                            <Link to="mailto:example@gmail.com">example@gmail.com</Link>
                        </li>
                        <li data-aos="fade-up" data-aos-duration={1500} data-aos-delay={150}>
                            <span className="icon">
                                <img src={Phoneicon} alt="image" />
                            </span>
                            <span className="lable">Call us</span>
                            <Link to="tel:1234567899">+1 123 456 7890</Link>
                        </li>
                        <li data-aos="fade-up" data-aos-duration={1500} data-aos-delay={300}>
                            <span className="icon">
                                <img src={Locationicon} alt="image" />
                            </span>
                            <span className="lable">Our location</span>
                            <Link target="_blank" to="https://www.google.com/maps">
                                Open Google Maps
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Contactblock