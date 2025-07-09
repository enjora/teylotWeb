import React, { useEffect } from 'react'
import Header from '../../Header/Main'
import Resources from '../../Menbloglist/Resources'
import Articals from '../../Menbloglist/Articals'
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
        <Resources />
        <Articals/>
        <Footer />
      </div>
    </>
  )
}

export default Main