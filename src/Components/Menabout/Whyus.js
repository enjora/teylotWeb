import React, { useState, useEffect } from 'react';
import Bluedots from '../../assets/images/blue_dotes.png'

function Whyus() {

    const [counts, setCounts] = useState({
        Countries: 0,
        reviews: 1500,
        followers: 0,
        download: 0
    });

    useEffect(() => {
        const updateCounter = () => {
            const targetCounts = {
                Countries: 150,
                reviews: 2300,
                followers: 8,
                download: 17,
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


    return (
        <>
            <section className="why_choose row_am white_text" data-aos="fade-in" data-aos-duration={1500} >
                <div className="why_choose_inner">
                    <div className="dotes_blue">
                        <img src={Bluedots} alt="image" />
                    </div>
                    <div className="container">
                        <div className="section_title" data-aos="fade-up" data-aos-duration={1500} >
                            <span className="title_badge">Why choos us</span>
                            <h2>Company statistics</h2>
                        </div>
                        <div className="company_statistics">
                            <ul className="app_statstic" id="counter"
                                data-aos="fade-in" data-aos-duration={1500} >
                                <li data-aos="fade-up" data-aos-duration={1500}>
                                    <div className="text">
                                        <p>
                                            <span className="counter-value">{counts.Countries}</span>
                                            <span>+</span>
                                        </p>
                                        <p>Countries</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration={1500}>
                                    <div className="text">
                                        <p>
                                            <span className="counter-value" >{counts.reviews}</span>
                                            <span>+</span>
                                        </p>
                                        <p>Reviews</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration={1500}>
                                    <div className="text">
                                        <p>
                                            <span className="counter-value">{counts.followers}</span>
                                            <span>M+</span>
                                        </p>
                                        <p>Followers</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration={1500}>
                                    <div className="text">
                                        <p>
                                            <span className="counter-value">{counts.download}</span>
                                            <span>M+</span>
                                        </p>
                                        <p>Download</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Whyus