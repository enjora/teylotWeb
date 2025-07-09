import React from 'react'
import { Link } from 'react-router-dom'
import Team1 from '../../assets/images/team_01.png'
import Team2 from '../../assets/images/team_02.png'
import Team3 from '../../assets/images/team_03.png'

function Team() {
    return (
        <>
            <section className="row_am experts_team_section">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                        <span className="title_badge">Experts</span>
                        <h2>
                            Meet <span>our team</span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4"
                            data-aos="fade-up" data-aos-duration={1500} data-aos-delay={100} >
                            <div className="experts_box">
                                <img src={Team1} alt="image" />
                                <div className="text">
                                    <h3>Willium Scott </h3>
                                    <span>CEO &amp; Managing Director</span>
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"
                            data-aos="fade-up" data-aos-duration={1500} data-aos-delay={200} >
                            <div className="experts_box">
                                <img src={Team2} alt="image" />
                                <div className="text">
                                    <h3>Averill Rack</h3>
                                    <span>Team Lead</span>
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={300} >
                            <div className="experts_box">
                                <img src={Team3} alt="image" />
                                <div className="text">
                                    <h3>Geo Back</h3>
                                    <span>Product Manager</span>
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team