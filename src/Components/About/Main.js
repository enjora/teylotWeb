import React, { useEffect } from 'react'
import Header from '../Header/Main'
import About from '../Menabout/About'
import Whyus from '../Menabout/Whyus'
import Ourvalue from '../Menabout/Ourvalue'
import TextList from '../Menhome/TextList'
import Service from '../Menabout/Service'
import Testimonial from '../Menabout/Testimonial'
import Team from '../Menabout/Team'
import Faq from '../Menabout/Faq'
import App from '../Menabout/App'
import Footer from '../Footer/Main'
import Aos from 'aos'

function Main() {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <Header />
            <div className="page_wrapper">
                <About />
                <Whyus />
                <Ourvalue />
                <TextList />
                <Service />
                <Testimonial />
                <Team />
                <Faq />
                <App />
                <Footer />
            </div>

        </>
    )
}

export default Main