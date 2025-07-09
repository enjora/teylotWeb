import React from 'react';
import { Link } from 'react-router-dom';
import Dots from '../../assets/images/blue_dotes.png';
import Google from '../../assets/images/black_google_play.png';
import Appstore from '../../assets/images/black_appstore.png';
import Appimg from '../../assets/images/our_app.png';

function App() {
    const appButtons = [
        { id: 1, imageSrc: Google },
        { id: 2, imageSrc: Appstore },
    ];

    return (
        <>
            <section className="row_am download_app">
                <div className="task_block" data-aos="fade-up" data-aos-duration={1500}>
                    <div className="dotes_blue">
                        <img src={Dots} alt="image" />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="task_text">
                                <div className="section_title white_text" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={100}>
                                    <span className="title_badge">Download</span>
                                    <h2>Our app is available for Android & iOS</h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys.
                                    </p>
                                </div>
                                <ul className="app_btn" data-aos="fade-up" data-aos-duration={1500}>
                                    {appButtons.map((button) => (
                                        <li key={button.id}>
                                            <Link to="#">
                                                <img className="blue_img" src={button.imageSrc} alt="image" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="task_img" data-aos="fade-in" data-aos-duration={1500}>
                                <div className="frame_img">
                                    <img src={Appimg} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
