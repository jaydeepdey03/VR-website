import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Feature from '../components/Feature'
import Aboutproduct from '../components/Aboutproduct'
import Products from '../components/Products'
import Faq from '../components/Faq'
import Feedback from '../components/Feedback'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='relative'>
            <Navbar />
            <Header />
            <Feature />
            <Aboutproduct />
            <Products />
            <Faq />
            <Feedback />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
