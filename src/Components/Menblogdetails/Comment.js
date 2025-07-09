import React from 'react'
import Cmnt1 from '../../assets/images/blog_d01.png'
import Blog2 from '../../assets/images/blog_d02.png'
import Blog3 from '../../assets/images/blog_d03.png'

function Comment() {
    return (
        <>
            <section className="row_am comment_section pb-0" data-aos="fade-up" data-aos-duration={1500} >
                <div className="container container-sm">
                    <div className="section_title">
                        <h2>5 Comments</h2>
                    </div>
                    <ul>
                        <li>
                            <div className="authore_info">
                                <div className="avtar">
                                    <img src={Cmnt1} alt="image" />
                                </div>
                                <div className="text">
                                    <span>1 day ago</span>
                                    <h4>Thomas </h4>
                                </div>
                            </div>
                            <div className="comment">
                                <p>
                                    Lorem Ipsum has been the industrys standard dummy text ever since
                                    the when an unknown printer took a galley of type and scrambled.
                                    Survived not.
                                </p>
                            </div>
                        </li>
                        <li className="replay_comment">
                            <div className="authore_info">
                                <div className="avtar">
                                    <img src={Blog2} alt="image" />
                                </div>
                                <div className="text">
                                    <span>1 day ago</span>
                                    <h4>Shaily</h4>
                                </div>
                            </div>
                            <div className="comment">
                                <p>
                                    Industrys standard dummy text ever since the when an unknown printer
                                    took.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="authore_info">
                                <div className="avtar">
                                    <img src={Blog3} alt="image" />
                                </div>
                                <div className="text">
                                    <span>2 days ago</span>
                                    <h4>Willium Joe</h4>
                                </div>
                            </div>
                            <div className="comment">
                                <p>
                                    Has been the industrys standard dummy text ever since the when an
                                    unknown printer took a galley of type and scrambled. Survived not
                                    only five centuries.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Comment