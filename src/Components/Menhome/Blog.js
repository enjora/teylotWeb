import React from 'react';
import { Link } from 'react-router-dom';
import Blog1 from '../../assets/images/blog1.png';
import Blog2 from '../../assets/images/blog2.png';

const blogData = [
    {
        id: 1,
        image: Blog1,
        date: 'May 12, 2023',
        category: 'Mobile app',
        comments: '5 Comments',
        title: 'Effective ways to monetize mobile apps for better performance',
        tag: 'Mobile app',
    },
    {
        id: 2,
        image: Blog2,
        date: 'May 12, 2023',
        category: 'Mobile app',
        comments: '5 Comments',
        title: 'Why you should choose our app, top 5 reasons',
        tag: 'User experience',
    },
];

function Blog() {
    return (
        <section className="blog_section row_am">
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                    <span className="title_badge">Latest updates</span>
                    <h2>
                        Our latest <span>blog posts</span>
                    </h2>
                </div>
                <div className="blog_listing">
                    {blogData.map((post) => (
                        <div className="blog_post" key={post.id} data-aos="fade-up" data-aos-duration={1500}>
                            <Link to="#" className="img">
                                <img src={post.image} alt="image" />
                            </Link>
                            <div className="text">
                                <ul className="blog_info">
                                    <li>{post.date}</li>
                                    <li>{post.category}</li>
                                    <li>{post.comments}</li>
                                </ul>
                                <h3>
                                    <Link to="#">{post.title}</Link>
                                </h3>
                                <div className="tag_more">
                                    <span className="tag">{post.tag}</span>
                                    <Link to="/">
                                        Read more <i className="icofont-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;
