import React from 'react';
import Paypal from '../../assets/images/paypal.png';
import Spoty from '../../assets/images/spoty.png';
import Shopboat from '../../assets/images/shopboat.png';
import Slack from '../../assets/images/slack.png';
import Envato from '../../assets/images/envato.png';
import Jequery from '../../assets/images/jquery.png';
import Woocommerce from '../../assets/images/woocommerce.png';
import Themeforest from '../../assets/images/themeforest.png';

const clientLogos = [
    Paypal,
    Spoty,
    Shopboat,
    Slack,
    Envato,
    Jequery,
    Woocommerce,
    Themeforest,
];

function Clients() {
    return (
        <>
            <section className="row_am our_client">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                        <span className="title_badge">Our clients</span>
                        <h2>
                            <span className="d-block">3500+ companies</span>
                            using our application
                        </h2>
                    </div>
                    <ul className="client_list">
                        {clientLogos.map((logo, index) => (
                            <li key={index}>
                                <div className="client_logo" data-aos="fade-up" data-aos-duration={1500}>
                                    <img src={logo} alt="image" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Clients;
