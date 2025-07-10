import React from 'react';
import { Link } from 'react-router-dom';
import service1 from '../../assets/images/S3.png'
import service2 from '../../assets/images/S2.png'
import service3 from '../../assets/images/S1.png'

// const servicesData = [
//     {
//         icon: 'icofont-tasks-alt',
//         title: 'Service Assignments',
//         subtitle: 'Assign readings and altar service with ease',
//         description: 'Teylot helps you assign readings and altar service roles ahead of time, ensuring smooth coordination and balanced participation during every liturgy.',
//         features: [
//             'Assign readings and altar roles',
//             'Send reminders to deacons',
//         ],
//         imageSrc: service1,
//     },
//     {
//         icon: 'icofont-ui-clock',
//         title: 'Liturgy Scheduling',
//         subtitle: 'Plan ahead and keep everyone in sync',
//         description: 'Coordinate who serves when, avoid overlaps, and notify the right people with timely alerts. Designed to work around your liturgy calendar.',
//         features: [
//             'Easy scheduling for any parish',
//             'Integrated reminders before each service',
//             'View open and filled slots',
//         ],
//         imageSrc: service2,
//     },
//     {
//         icon: 'icofont-list',
//         title: 'Service History',
//         subtitle: 'Track readings and altar service over time',
//         description: 'Quickly review who served or read at each liturgy. Maintain a clear participation log across the year for transparency and reporting.',
//         features: [
//             'View past assignments anytime',
//             'Ensure fair rotation and accountability',
//             'Export service history if needed',
//         ],
//         imageSrc: service3,
//     },
// ];


const servicesData = [
    {
        icon: 'icofont-tasks-alt',
        title: 'Reading & Serving Schedule',
        subtitle: 'Plan, assign, and track readings and service roles',
        description:
            'Easily assign readings or service duties for liturgies and track participation. Deacons can view upcoming assignments and record their completed roles in the app.',
        features: [
            'Assign readings based on availability',
            'Track how many times each person served',
            'Allow self-signup with admin limits',
        ],
        imageSrc: service1,
    },
    {
        icon: 'icofont-ui-clock',
        title: 'Participation Insights',
        subtitle: 'Keep track of who served and when',
        description:
            'The app logs deacon participation automatically and offers visual reports to help church leaders encourage balanced involvement and recognize commitment.',
        features: [
            'Auto-generate yearly participation reports',
            'Filter by deacon or liturgy type',
            'Support encouragement and accountability',
        ],
        imageSrc: service2,
    },
    {
        icon: 'icofont-list',
        title: 'Event Calendar & Notifications',
        subtitle: 'Stay updated on upcoming services',
        description:
            'Never miss a liturgy again. Get notified when you are scheduled to serve and view upcoming church events with all necessary information in one place.',
        features: [
            'Get reminders for your assigned service',
            'See full event details with one tap',
            'Optional SMS or push alerts',
        ],
        imageSrc: service3,
    },
];

function Service() {
    return (
        <section className="row_am service_section">
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                    <span className="title_badge mb-1">Service Assignments</span>
                    <h2>
                        Assign and Manage <span>Readings & Altar</span> Service <br />
                        Roles with Ease
                    </h2>
                </div>
                {servicesData.map((service, index) => (
                    <div className={`row service_blocks ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} key={index}>
                        <div className="col-md-6">
                            <div className={`service_text ${index % 2 === 0 ? '' : 'right_side'}`} data-aos="fade-up" data-aos-duration={1500}>
                                <div className="service_badge">
                                    <i className={service.icon} />
                                    <span>{service.title}</span>
                                </div>
                                <h2>
                                    <span>{service.subtitle}</span>
                                </h2>
                                <p>
                                    {service.description}
                                </p>
                                <ul className={`${index % 2 === 0 ? 'listing_block' : 'feature_list'}`}>
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>
                                            <div className="icon">
                                                <span>
                                                    <i className="icofont-ui-check" />
                                                </span>
                                            </div>
                                            <div className="text">
                                                <h3>{feature}</h3>
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
                            <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                                <img src={service.imageSrc} alt="image" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Service;
