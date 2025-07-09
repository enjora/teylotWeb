import React, { useState } from 'react'

function Faq() {

    const [tabMenu, tabActive] = useState({ a: true });
    const [activeFaq, setActiveFaq] = useState({ a: true })
    const [openAccordion, setOpenAccordion] = useState('collapseOne');

    const [first, setfirst] = useState(null);

    const toggleAccordion = (faq) => {
        if (openAccordion === faq.id) {
            setOpenAccordion('collapseOne');
        } else {
            setOpenAccordion(faq);
        }
    };

    const togglefirst = (faq) => {
        if (first === faq.id) {
            setfirst('collapseOne');
        } else {
            setfirst(faq);
        }
    };

    const accordionData = [
        {
            id:'collapseOne',
            question: 'How app will useful for my business?',
            answer:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsu m has been the industrys standard dummy text ever since the when an unknown printer.',
        },
        {
            id:'collapseTwo',
            question: 'What support I will get in the premium package?',
            answer: 'Some placeholder content for the second accordion panel. This panel is hidden by default.',
        },
        {
            id:'collapseThree',
            question: ' Can i get update for free ?',
            answer: ' And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.',
        },
        {
            id:'collapseFour',
            question: 'How to setup account ?',
            answer: ' Some placeholder content for the second accordion panel. This panel is hidden by default.',
        },
    ];

    const firstData = [
        {
            id:'collapseOne',
            question: 'Is there any hidden cost?',
            answer: ' Some placeholder content for the second accordion panel. This panel is hidden by default.',
        },
        {
            id:'collapseTwo',
            question: ' What is process to get refund ?',
            answer: '  And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.',
        },
        {
            id:'collapseThree',
            question: 'How to setup account ?',
            answer: ' And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.',
        },
        {
            id:'collapseFour',
            question: ' What is process to get refund ?',
            answer: ' And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.',
        },
        {
            id:'collapseFive',
            question: 'What support I will get in the premium package?',
            answer: 'Some placeholder content for the second accordion panel. This panel is hidden by default.',
        },

    ]


    return (
        <>
            <section className="row_am faq_section">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                        <span className="title_badge">Question &amp; Answer</span>
                        <h2>
                            <span>FAQs</span> - Frequently Asked Questions
                        </h2>
                    </div>
                    <ul className="nav nav-tabs"
                        id="myTab" role="tablist" data-aos="fade-up" data-aos-duration={1500} >
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${tabMenu.a && "active"}`} onClick={() => tabActive({ a: true })}
                                id="genral-tab" data-toggle="tab" data-target="#genral" type="button" role="tab" aria-controls="genral" aria-selected="true" >
                                Genral
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${tabMenu.b && "active"}`} onClick={() => tabActive({ b: true })}
                                id="pricing-tab" data-toggle="tab" data-target="#pricing" type="button" role="tab" aria-controls="pricing" aria-selected="false" >
                                Pricing
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${tabMenu.c && "active"}`} onClick={() => tabActive({ c: true })}
                                id="account-tab" data-toggle="tab" data-target="#account" type="button" role="tab" aria-controls="account" aria-selected="false" >
                                Account
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${tabMenu.d && "active"}`} onClick={() => tabActive({ d: true })}
                                id="returns-tab" data-toggle="tab" data-target="#returns" type="button" role="tab" aria-controls="returns" aria-selected="false" >
                                Returns Policy
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${tabMenu.e && "active"}`} onClick={() => tabActive({ e: true })}
                                id="support-tab" data-toggle="tab" data-target="#support" type="button" role="tab" aria-controls="support" aria-selected="false" >
                                Technical Support
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent" data-aos="fade-up" data-aos-duration={1500} >
                        <div className={`tab-pane fade ${tabMenu.a && "show active"}`} id="genral" role="tabpanel" aria-labelledby="genral-tab" >
                            <div className="accordion" id="accordionExample">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="accordion" id="accordionExample">
                                            {accordionData.map((faq) => (
                                                <div className="card" key={faq.id}>
                                                    <div className="card-header" id={`heading${faq.id}`}>
                                                        <h2 className="mb-0">
                                                            <button className={`btn btn-link btn-block text-left ${openAccordion === faq.id ? '' : 'collapsed'}`}
                                                                type="button" onClick={() => toggleAccordion(faq.id)}
                                                                aria-expanded={openAccordion === faq.id ? 'true' : 'false'} aria-controls={`collapseOne${faq.id}`} > {faq.question}
                                                                <span className="icons">
                                                                    <i className={`icofont-${openAccordion === faq.id ? 'minus' : 'plus'}`}></i>
                                                                </span>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id={`collapseOne${faq.id}`}
                                                        className={`collapse ${openAccordion === faq.id ? 'show' : ''}`} aria-labelledby={`heading${faq.id}`} data-parent="#accordionExample" >
                                                        <div className="card-body">{faq.answer}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="first" id="firstExample">
                                            {firstData.map((faq) => (
                                                <div className="card" key={faq.id}>
                                                    <div className="card-header" id={`heading${faq.id}`}>
                                                        <h2 className="mb-0">
                                                            <button className={`btn btn-link btn-block text-left ${first === faq.id ? '' : 'collapsed'}`}
                                                                type="button" onClick={() => togglefirst(faq.id)}
                                                                aria-expanded={first === faq.id ? 'true' : 'false'} aria-controls={`collapseOne${faq.id}`} > {faq.question}
                                                                <span className="icons">
                                                                    <i className={`icofont-${first === faq.id ? 'minus' : 'plus'}`}></i>
                                                                </span>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id={`collapseOne${faq.id}`}
                                                        className={`collapse ${first === faq.id ? 'show' : ''}`} aria-labelledby={`heading${faq.id}`} data-parent="#firstExample" >
                                                        <div className="card-body">{faq.answer}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.b && "show active"}`} id="pricing"
                            role="tabpanel" aria-labelledby="pricing-tab" >
                            <h2>FAQ Content Gose Here...</h2>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.c && "show active"}`} id="account"
                            role="tabpanel" aria-labelledby="account-tab" >
                            <h2>FAQ Content Gose Here...</h2>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.d && "show active"}`}
                            id="returns" role="tabpanel" aria-labelledby="returns-tab" >
                            <h2>FAQ Content Gose Here...</h2>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.e && "show active"}`}
                            id="support" role="tabpanel" aria-labelledby="support-tab" >
                            <h2>FAQ Content Gose Here...</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq