import React from 'react';
import { Link } from 'react-router-dom';
import Google from '../../assets/images/google.png';
import Smilly from '../../assets/images/smily.png';
import Reviewimg from '../../assets/images/review1.png';
import Reviewimg1 from '../../assets/images/review2..png';
import Reviewimg2 from '../../assets/images/review3..png';

const reviewData = [
    {
        name: 'Michael Bassilios',
        company: 'Lead Deacon - St. Mary & St. John Coptic Orthodox Church',
        stars: 5,
        text: 'Teylot has brought structure to our liturgical planning. Assignments are now clear, fair, and easy to manage. This app has truly simplified our coordination.',
        avatar: Reviewimg,
    },
    {
        name: 'Amir Saleh',
        company: 'Cantor - St. Mary & St. John Coptic Orthodox Church',
        stars: 5,
        text: 'With Teylot, I can see upcoming hymns and service roles at a glance. It’s intuitive and makes our service preparation seamless. A must-have for any parish.',
        avatar: Reviewimg1,
    },
    {
        name: 'Nabil Sahrkaway',
        company: 'Lead Deacon - St. Mark Coptic Orthodox Church',
        stars: 5,
        text: 'Teylot ensures every youth gets a chance to serve. The tracking and reminders are especially helpful during busy feast seasons. Highly recommended!',
        avatar: Reviewimg2,
    },
];

function Review() {
    return (
        <>
            <section className="review_section row_am">
                <div className="container">
                    <div className="positive_inner">
                        <div className="row">
                            <div className="col-md-6 sticky-top">
                                <div className="sidebar_text"
                                    data-aos="fade-up" data-aos-duration={1500} >
                                    <div className="section_title text-left">
                                        <span className="title_badge">Reviews</span>
                                        <h2>
                                            <span>Positive reviews </span> <br /> of our clients
                                        </h2>
                                    </div>
                                    <div className="google_rating">
                                        <div className="star">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <span key={i}>
                                                    <i className="icofont-star" />
                                                </span>
                                            ))}
                                        </div>
                                        <p>
                                            5.0/5.0 Rated on{' '}
                                            <img className="img-fluid" src={Google} alt="image" />
                                        </p>
                                    </div>
                                    <div className="user_review">
                                        <p>
                                            5{' '}
                                            <Link to="#">
                                                Total user reviews <i className="icofont-arrow-right" />{' '}
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="smiley_icon">
                                        <img src={Smilly} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="review_side">
                                    {reviewData.map((review, index) => (
                                        <div key={index} className="review_block"
                                            data-aos="fade-up" data-aos-duration={1500} >
                                            <div className="coustomer_info">
                                                <div className="avtar">
                                                    <img src={review.avatar} alt="image" />
                                                    <div className="text">
                                                        <h3>{review.name}</h3>
                                                        <span>{review.company}</span>
                                                    </div>
                                                </div>
                                                <div className="star">
                                                    {Array.from({ length: review.stars }, (_, i) => (
                                                        <span key={i}>
                                                            <i className="icofont-star" />
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <p>{review.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Review;
