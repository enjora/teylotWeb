import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Main'
import About from '../Components/About/Main'
import BlogList from '../Components/Pages/BlogList/Main'
import BlogDetails from '../Components/Pages/BlogDetails/Main'
import SignIn from '../Components/Pages/Sign In/Main'
import SignUp from '../Components/Pages/Sign Up/Main'
import Pricing from '../Components/Pricing/Main'
import Review from '../Components/Reviews/Main'
import Contact from '../Components/Contact/Main'
import DeleteMe from '../Components/DeleteMe/Main'

const Routing = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/blog-detail" element={<BlogDetails />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delete-me" element={<DeleteMe />} />
      </Routes>
    </>
  )
}

export default Routing