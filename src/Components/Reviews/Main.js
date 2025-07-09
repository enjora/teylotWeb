import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Reviewblock from '../Menreviews/Reviewblock'
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
                <Reviewblock />
                <App />
                <Footer />
            </div>
        </>
    )
}

export default Main