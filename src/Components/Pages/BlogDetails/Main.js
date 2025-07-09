import React, { useEffect } from 'react'
import Header from '../../Header/Main'
import Blogdtls from '../../Menblogdetails/Blogdtls'
import Comment from '../../Menblogdetails/Comment'
import Rowcmnt from '../../Menblogdetails/Rowcmnt'
import Footer from '../../Footer/Main'
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
                <Blogdtls/>
                <Comment/>
                <Rowcmnt/>
                <Footer />
            </div>
        </>
    )
}

export default Main