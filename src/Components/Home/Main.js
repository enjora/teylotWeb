import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Banner from '../Menhome/Banner'
import Benefits from '../Menhome/Benefits'
import Aboutus from '../Menhome/Aboutus'
import TextList from '../Menhome/TextList'
import Service from '../Menhome/Service'
import HowWork from '../Menhome/HowWork'
import Review from '../Menhome/Review'
import Clients from '../Menhome/Clients'
import Pricing from '../Menhome/Pricing'
import Interface from '../Menhome/Interface'
import Text from '../Menhome/Text'
import Blog from '../Menhome/Blog'
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
            <Banner />
            <Benefits />
            <div className="page_wrapper">
                <Aboutus />
                <TextList />
                <Service />
                <HowWork />
            </div>
            <Review />
            <div className="page_wrapper">
                {/*<Clients />*/}
                {/*<Pricing />*/}
                <Interface />
                {/*<Text />*/}
                {/*<Blog />*/}
                <Footer />
            </div>

        </>
    )
}

export default Main