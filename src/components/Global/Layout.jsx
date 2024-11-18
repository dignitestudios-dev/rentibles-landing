import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ pages }) => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            {pages}
            <Footer />
        </div>
    )
}

export default Layout
