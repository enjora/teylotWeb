import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Communication from '../../assets/images/communication.png'
import Process from '../../assets/images/process.png'
import Playbtn from '../../assets/images/play_white.svg'

const serviceData = [
    {
        badgeIcon: 'icofont-gear',
        title: 'Process',
        overview: 'Overviews how we develop lorem',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry\'s standard dummy text ever since.',
        features: [
            'Lorem Ipsum is simply dummy text',
            'The printing and typesetting industry lorem',
            'Has been the industry\'s dummy',
            'Text ever since the when an unknown',
        ],
        imageSrc: Process,
        videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1',
    },
    {
        badgeIcon: 'icofont-ui-messaging',
        title: 'Communication',
        overview: 'Client communication for best results',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry\'s standard dummy.',
        features: [
            'Lorem Ipsum is simply dummy text',
            'The printing and typesetting industry lorem',
            'Has been the industry\'s dummy',
        ],
        imageSrc: Communication,
    },
];

function Service() {

    const [ytvideo, setytvideo] = useState(false);

    return (
        <>
            <section className="row_am service_section about_service">
                <div className="container">
                    {serviceData.map((service, index) => (
                        <div className={`row service_blocks ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} key={index}>
                            <div className="col-md-6">
                                <div className="service_text" data-aos="fade-up" data-aos-duration={1500}>
                                    <div className="service_badge">
                                        <i className={service.badgeIcon} />
                                        <span>{service.title}</span>
                                    </div>
                                    <h2>
                                        <span>{service.overview}</span>
                                    </h2>
                                    <p>
                                        {service.description}
                                    </p>
                                    <ul className="feature_list">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex}>
                                                <div className="icon">
                                                    <span>
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <p>{feature}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="btn_block">
                                        <Link to="/contact" className="btn puprple_btn ml-0">
                                            Start Free Trial
                                        </Link>
                                        <div className="btn_bottom" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`img ${service.videoUrl ? 'video_player' : ''}`} data-aos="fade-up" data-aos-duration={1500}>
                                    <img src={service.imageSrc} alt="image" />
                                    {service.videoUrl && (
                                        <Link to="#"
                                            className="popup-youtube play-button play_icon"
                                            data-url={service.videoUrl} data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU" onClick={() => setytvideo(true)} >
                                            <img src={Playbtn} alt="img" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    {ytvideo && (
                        <div className="modal fade youtube-video show" id="myModal"
                            tabIndex={-1} style={{ display: "block", paddingRight: 17 }}
                            aria-modal="true" role="dialog" >
                            <div className="modal-dialog" role="document">
                                <div className="modal-content" onClick={() => setytvideo(false)}>
                                    <button id="close-video"
                                        type="button" className="button btn btn-default text-right" data-dismiss="modal" onClick={() => setytvideo(false)} >
                                        <i className="icofont-close-line-circled" />
                                    </button>
                                    <div className="modal-body">
                                        <div id="video-container" className="video-container">
                                            <iframe id="youtubevideo" width={640}
                                                height={360} allowFullScreen="" src={serviceData[0].videoUrl} />
                                        </div>
                                    </div>
                                    <div className="modal-footer"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Service
