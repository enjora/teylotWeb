import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import appscreen from '../../assets/images/mainApp.png'
import Application from '../../assets/images/applicationvideothumb.png'
import Playbtn from '../../assets/images/play_white.svg'
import Videobtn from '../../assets/images/playvideotext.png'
import Mobileicon from '../../assets/images/mobileicon.png'
import Usericon from '../../assets/images/usericon.png'
import Magneticon from '../../assets/images/magnet.png'


function Aboutus() {

    const [counts, setCounts] = useState({
        assignments: 0,
        activeDeacons: 1500,
        parishes: 0,
        starts: 0,
    });

    useEffect(() => {
        const updateCounter = () => {
            const targetCounts = {
                assignments: 1,
                activeDeacons: 400,
                parishes: 5,
                starts: 5,
            };

            const duration = 1500;
            const stepSize = 10;
            const steps = duration / stepSize;

            Object.keys(targetCounts).forEach((key) => {
                const targetCount = targetCounts[key];
                const currentCount = counts[key];
                const step = Math.ceil((targetCount - currentCount) / steps);

                if (step !== 0) {
                    const interval = setInterval(() => {
                        setCounts((prevCounts) => ({
                            ...prevCounts,
                            [key]: prevCounts[key] + step,
                        }));
                    }, stepSize);

                    setTimeout(() => {
                        clearInterval(interval);
                        setCounts((prevCounts) => ({
                            ...prevCounts,
                            [key]: targetCount,
                        }));
                    }, duration);
                }
            });
        };

        updateCounter();
    }, []);


    const [ytshow, setytShow] = useState(false);

    return (
        <>
            <section className="about_section row_am">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                        <span className="title_badge mb-1">About us</span>
                        {/*<h2>*/}
                        {/*    Application with the best{" "}*/}
                        {/*    <img src={Mobileicon} alt="image" /> user <br />*/}
                        {/*    interface convert{" "}*/}
                        {/*    <span>*/}
                        {/*        <img src={Usericon} alt="image" /> visitor*/}
                        {/*    </span>{" "}*/}
                        {/*    into{" "}*/}
                        {/*    <span>*/}
                        {/*        <img src={Magneticon} alt="image" /> leads*/}
                        {/*    </span>*/}
                        {/*</h2>*/}
                        <h2>
                            Built for Purpose: Empowering Church Service Teams with Clarity and Simplicity
                        </h2>
                        <h5>
                            Designed for deacons, leaders, and coordinators who serve—Teylot helps you assign,
                            organize, and track service like never before.
                        </h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <ul className="app_statstic" id="counter" data-aos="fade-in" data-aos-duration={1500} >
                                <li data-aos="fade-up" data-aos-duration={1500}>
                                    <div className="text">
                                        <p>
                                            <span className="counter-value">{counts.assignments}</span>
                                            <span>K+</span>
                                        </p>
                                        <p>Assignments</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration={1500}>
                                    <div className="text">
                                        <p>
                                            <span className="counter-value">{counts.activeDeacons}</span>
                                            <span>+</span>
                                        </p>
                                        <p>Deacons</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration={1500}>
                                    <div className="text">
                                        <p>
                                            <span className="counter-value">{counts.parishes}</span>
                                            <span>+</span>
                                        </p>
                                        <p>Parishes</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration={1500}>
                                    <div className="text">
                                        <p>
                                            <span className="counter-value">{counts.starts}</span>
                                            <span>-Star</span>
                                        </p>
                                        <p>Feedback</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="abtImg text-center" data-aos="fade-up" data-aos-duration={1500} >
                                <img src={appscreen} alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <p data-aos="fade-up" data-aos-duration={1500}>
                                Teylot was built with simplicity in mind, so your church team can focus on service—not spreadsheets or scattered messages. From liturgy readings to community tasks, our platform helps every deacon stay in sync.
                            </p>
                            <div className="video_block" data-aos="fade-up" data-aos-duration={1500} >
                                <img className="thumbnil" src={Application} alt="image" />
                                <div className="playBtn" onClick={() => setytShow(true)}>
                                    <Link to="#" className="popup-youtube play-button play_icon"
                                        data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                                        data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU" >
                                        <img src={Playbtn} alt="img" />
                                    </Link>
                                    <img className="spin_text" src={Videobtn} alt="image" />
                                </div>
                            </div>
                            <div className="btn_block" data-aos="fade-up" data-aos-duration={1500}>
                                <Link to="/contact" className="btn puprple_btn ml-0">
                                    START FREE TRIAL
                                </Link>
                                <div className="btn_bottom" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {ytshow &&
                <div className="modal fade youtube-video show" id="myModal"
                    tabIndex={-1} style={{ display: "block", paddingRight: 17 }}
                    aria-modal="true" role="dialog" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" onClick={() => setytShow(false)}>
                            <button id="close-video"
                                type="button" className="button btn btn-default text-right" data-dismiss="modal" onClick={() => setytShow(false)}>
                                <i className="icofont-close-line-circled" />
                            </button>
                            <div className="modal-body">
                                <div id="video-container" className="video-container">
                                    <iframe id="youtubevideo"
                                        width={640} height={360}
                                        allowFullScreen=""
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                                    />
                                </div>
                            </div>
                            <div className="modal-footer"></div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Aboutus