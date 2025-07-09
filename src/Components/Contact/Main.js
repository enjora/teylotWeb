import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Contactblock from '../Mencontact/Contactblock'
import Contactform from '../Mencontact/Contactform'
import Map from '../Mencontact/Map'
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
                <Contactblock/>
                <Contactform/>
                <Map/>
                <Footer />
            </div>
        </>
    )
}

export default Main