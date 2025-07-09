import React from 'react';
import { Link } from 'react-router-dom';
import Author1 from '../../assets/images/authore_01.png';
import Author2 from '../../assets/images/authore_02.png';
import Blog1 from '../../assets/images/blog1.png';
import Blog2 from '../../assets/images/blog2.png';
import Blog3 from '../../assets/images/blog_list3.png';
import Blog4 from '../../assets/images/blog_list4.png';

function Articals() {
    const blogData = [
        {
            id: 1,
            imageSrc: Blog1,
            tag: 'Mobile app',
            title: 'Effective ways to monetize mobile apps for better performance',
            link: '/blog-detail',
            date: 'May 12, 2023',
            comments: '5 Comments',
            views: '750 Views',
            authorImage: Author1,
            authorName: 'Willium Joy',
            authorRole: 'Copy editor',
        },
        {
            id: 2,
            imageSrc: Blog2,
            tag: 'User experience',
            title: 'Why you should use our app: Top 5 reasons to choose our app',
            link: '#',
            date: 'May 12, 2023',
            comments: '5 Comments',
            views: '520 Views',
            authorImage: Author2,
            authorName: 'Philip Jose',
            authorRole: 'Tech manager',
        },
        {
            id: 3,
            imageSrc: Blog3,
            tag: 'Mobile app',
            title: 'How to use mobile application with best performance lorem...',
            link: '#',
            date: 'May 12, 2023',
            comments: '5 Comments',
            views: '333 Views',
            authorImage: Author1,
            authorName: 'Willium Joy',
            authorRole: 'Copy editor',
        },
        {
            id: 4,
            imageSrc: Blog4,
            tag: 'User experience',
            title: 'Why you should use our app: Top 5 reasons to choose our app',
            link: '#',
            date: 'May 12, 2023',
            comments: '5 Comments',
            views: '421 Views',
            authorImage: Author2,
            authorName: 'Philip Jose',
            authorRole: 'Tech manager',
        },
        {
            id: 5,
            imageSrc: Blog1,
            tag: 'Mobile app',
            title: 'Effective ways to monetize mobile apps for better performance',
            link: '/blog-detail',
            date: 'May 12, 2023',
            comments: '5 Comments',
            views: '750 Views',
            authorImage: Author1,
            authorName: 'Willium Joy',
            authorRole: 'Copy editor',
        },
        {
            id: 6,
            imageSrc: Blog2,
            tag: 'User experience',
            title: 'Why you should use our app: Top 5 reasons to choose our app',
            link: '#',
            date: 'May 12, 2023',
            comments: '5 Comments',
            views: '520 Views',
            authorImage: Author2,
            authorName: 'Philip Jose',
            authorRole: 'Tech manager',
        },
    ];

    return (
        <>
            <section className="articles_section row_am">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                        <h2>
                            Recent <span>articles</span>
                        </h2>
                    </div>
                    <ul className="filter_tags" data-aos="fade-up" data-aos-duration={1500}>
                        <li>
                            <Link to="#" className="active">
                                All
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog-list">Mobile app</Link>
                        </li>
                        <li>
                            <Link to="/blog-list">Android</Link>
                        </li>
                        <li>
                            <Link to="/blog-list">iOS</Link>
                        </li>
                        <li>
                            <Link to="/blog-list">Trending Tech</Link>
                        </li>
                    </ul>
                    <div className="blog_listings">
                        {blogData.map((blog) => (
                            <div key={blog.id} className="listing_block" data-aos="fade-up" data-aos-duration={1500}>
                                <Link to={blog.link} className="img">
                                    <img src={blog.imageSrc} alt="image" />
                                </Link>
                                <div className="blog_text">
                                    <span className="tag">{blog.tag}</span>
                                    <h2>
                                        <Link to={blog.link}>{blog.title}</Link>
                                    </h2>
                                    <Link to={blog.link}>
                                        Read more <i className="icofont-arrow-right" />
                                    </Link>
                                </div>
                                <div className="authore_info">
                                    <ul className="blog_info">
                                        <li>{blog.date}</li>
                                        <li>{blog.comments}</li>
                                        <li>{blog.views}</li>
                                    </ul>
                                    <div className="avtar">
                                        <img src={blog.authorImage} alt="image" />
                                        <div className="text">
                                            <h3>{blog.authorName}</h3>
                                            <span>{blog.authorRole}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pagination_block" data-aos="fade-in" data-aos-duration={1500}>
                        <ul>
                            <li>
                                <Link to="#" className="prev">
                                    <i className="icofont-arrow-left" /> Prev
                                </Link>
                            </li>
                            <li>
                                <Link to="#">1</Link>
                            </li>
                            <li>
                                <Link to="#" className="active">
                                    2
                                </Link>
                            </li>
                            <li>
                                <Link to="#">3</Link>
                            </li>
                            <li>
                                <Link to="#">4</Link>
                            </li>
                            <li>
                                <Link to="#">5</Link>
                            </li>
                            <li>
                                <Link to="#">6</Link>
                            </li>
                            <li>
                                <Link to="#" className="next">
                                    Next <i className="icofont-arrow-right" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Articals;
