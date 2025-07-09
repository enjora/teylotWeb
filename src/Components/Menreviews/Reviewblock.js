import React from 'react';
import { Link } from 'react-router-dom';
import Review1 from '../../assets/images/review1.png';
import Review2 from '../../assets/images/review2..png';
import Review3 from '../../assets/images/review3..png';

const reviews = [
    {
        id: 1,
        name: 'Willium Joy',
        company: 'Smartbrain Tech',
        stars: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.',
        avatar: Review1,
    },
    {
        id: 2,
        name: 'John Due',
        company: 'Corporate Agency',
        stars: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et, nemo distinctio eum omnis quam!',
        avatar: Review2,
    },
    {
        id: 3,
        name: 'Maria',
        company: 'Company Inc',
        stars: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et, nemo distinctio eum omnis quam!',
        avatar: Review3,
    },
    {
        id: 4,
        name: 'Willium Joy',
        company: 'Smartbrain Tech',
        stars: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.',
        avatar: Review1,
    },
    {
        id: 5,
        name: 'John Due',
        company: 'Corporate Agency',
        stars: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et, nemo distinctio eum omnis quam!',
        avatar: Review2,
    },
    {
        id: 6,
        name: 'Maria',
        company: 'Company Inc',
        stars: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et, nemo distinctio eum omnis quam!',
        avatar: Review3,
    },
    {
        id: 7,
        name: 'John Due',
        company: 'Corporate Agency',
        stars: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et, nemo distinctio eum omnis quam!',
        avatar: Review2,
    },
    {
        id: 8,
        name: 'Maria',
        company: 'Company Inc',
        stars: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et, nemo distinctio eum omnis quam!',
        avatar: Review3,
    },

];

function Reviewblock() {
    return (
        <section className="review_section row_am page_ban">
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                    <span className="title_badge">Reviews</span>
                    <h2>
                        Words from <span>trusted peoples</span>
                    </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing indus orem Ipsum <br />{" "}
                        has been the industrys standard dummy text ever since.
                    </p>
                    <div className="google_rating">
                        <div className="star">
                            <span>
                                <i className="icofont-star" />
                            </span>
                            <span>
                                <i className="icofont-star" />
                            </span>
                            <span>
                                <i className="icofont-star" />
                            </span>
                            <span>
                                <i className="icofont-star" />
                            </span>
                            <span>
                                <i className="icofont-star" />
                            </span>
                        </div>
                        <p>
                            5.0 / 5.0 Rated on App store |{" "}
                            <Link to="#" className="rate_link">
                                {" "}
                                5 Total user reviews <i className="icofont-arrow-right" />{" "}
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="positive_inner in_page">
                    <div className="row">
                        <div className="review_side innerpage_block">
                            {reviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="review_block"
                                    data-aos="fade-up"
                                    data-aos-duration={1500}
                                >
                                    <div className="coustomer_info">
                                        <div className="avtar">
                                            <img src={review.avatar} alt="image" />
                                            <div className="text">
                                                <h3>{review.name}</h3>
                                                <span>{review.company}</span>
                                            </div>
                                        </div>
                                        <div className="star">
                                            {[...Array(review.stars)].map((_, index) => (
                                                <span key={index}>
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
        </section>
    );
}

export default Reviewblock;
